---
title: "Working with rescue"
description: "Step-by-step guide for booting your virtual server into rescue, setting up network and backing up data from the operating system of your server"
head:
  - - meta
    - name: keywords
      content: rescue, rescuecd, systemrescue, grml, grmllinux, virtual server, vps, network configuration, backup, backing up data, back up data
  - - meta
    - property: og:title
      content: "Working with rescue"
  - - meta
    - property: og:description
      content: "Step-by-step guide for booting your virtual server into rescue, setting up network and backing up data from the operating system of your server"
---


# Working with rescue

## Booting into rescue

You have two ways to boot your server into rescue:

### Using "Recovery mode"

1. Login into your account in [VM control panel](https://vm.senko.digital/)
2. Select the server where you want to enable the recovery mode for
3. Press the three dots either in the list of your servers or on the server's parameters page and select "Recovery mode"
![Recovery mode in the menu](/images/vps/recovery/rescue-recovery-mode.png){data-zoomable}
4. Press "Start mode and reboot" button
![Recovery mode button](/images/vps/recovery/rescue-enable-recovery-mode.png){data-zoomable}

After your VM's status changes to "Active", connect to your server via VNC.

To set up networking, please refer to the [SystemRescue networking guide](#systemrescue).

### Using .ISO

<!-- We recommend this if you need to install another OS, for example, [Mikrotik CHR](/software/how-to-install-mikrotik-chr-on-a-virtual-server) -->

1. Login into your account in [VM control panel](https://vm.senko.digital/)
2. Select the server where you want to mount the .iso file
3. Press the three dots either in the list of your servers or on the server's parameters page and select "Mount ISO image"
![Mount ISO image button in the menu](/images/vps/recovery/rescue-iso.png){data-zoomable}
4. Change loading method from "Local file" to "Image URL"
5. Copy the download link of [GRML](https://grml.org/download/) or [SystemRescue](https://www.system-rescue.org/Download/) from their respective pages.
6. Paste the download link for one of .iso files in "Image URL", for example:

- GRML: `https://download.grml.org/grml-full-2026.04-amd64.iso`
- SystemRescue: `https://fastly-cdn.system-rescue.org/releases/13.01/systemrescue-13.01-amd64.iso`
- or an image of your choice

6. Press "Upload image"

::: warning
Take note of which distro you are choosing - this will impact how you set up the networking. If you've chosen another distro not listed in the list above, please consult the documentation of your distro on how to set up networking correctly.
:::

After your VM's status changes to "Active", connect to your server via VNC.

To set up networking, please refer to the networking guide relevant to the selected distro ([SystemRescue](#systemrescue)/[GRML](#GRML)).

## Set up networking

### SystemRescue

Network configuration for SystemRescue is done via NetworkManager CLI. In order to set up networking, first you need to have network configuration for your VM, which you can find in the "IP addresses" menu in the VM control panel. You will specifically need:
- IP address
- Gateway

After getting this information, you will need to execute the following commands:

#### 1. Setup IP address:
```bash
nmcli conn mod "Wired connection 1" ipv4.addr <IP>/32
```

Replace `<IP>` with the IP address of your server

#### 2. Disable DHCP:

```bash
nmcli conn mod "Wired connection 1" ipv4.method manual
```

#### 3. Setup the gateway:

```bash
nmcli conn mod "Wired connection 1" ipv4.gateway <GATEWAY>
```

Replace `<GATEWAY>` with the gateway of your server (usually either `172.16.0.1` or `10.0.0.1`)

#### 4. Setup DNS:

```bash
nmcli conn mod "Wired connection 1" ipv4.dns 1.1.1.1
```

#### 5. Enable the interface:

```bash
nmcli conn up "Wired connection 1"
```

After this, you can also [set up firewall](#configuring-firewall) to allow SSH requests to connect to your server.

### GRML

You can set up networking via the `grml-networking` utility, which you can access by executing the command `grml-networking`, or pressing `n` after the initial startup. In order to set up networking, first you need to have network configuration for your VM, which you can find in the "IP addresses" menu in the VM control panel. You will specifically need:
- IP address
- Mask
- Gateway

After executing the command:

1. Select `netcardconfig` and press `[Enter]`
2. When asked to configure VLAN, select `No`.
3. When asked if to use DHCP broadcast, select `No`.
4. Input the IP address of your server and press `[Enter]`
5. Input the network mask of your server (usually `255.255.255.255`) and press `[Enter]`
6. Leave broadcast address empty (if your IP address is present - remove it) and press `[Enter]`
7. Input your server's gateway (usually either `172.16.0.1` or `10.0.0.1`) and press `[Enter]`
8. Input `1.1.1.1` as your nameservers. You can select any other nameservers. After that, press `[Enter]`
9. When asked if to autoenable the interface on boot you can select either `Yes` or `No`.

After this, you will returned to the initial menu, where you can just select `Quit` and press `q` when prompted with the welcome message.

## Configuring firewall

#### 1. Flush rules
```bash
iptables -F
```

#### 2. Allow traffic from already established connections.
```bash
iptables -I INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
```

#### 3. Allow all incoming SSH connections
```bash
iptables -I INPUT -p tcp --dport 22 -j ACCEPT
```

#### 4. Allow all traffic originating from the VM itself
```bash
iptables -I INPUT -i lo -j ACCEPT
```

## Rescue mode

In this section we will review common operations done in rescue mode.

### Accessing data from the server's disk

For this you would need to [configure networking](#set-up-networking) and [firewall rules](#configuring-firewall) first. After this you can follow the steps.

#### 1. Find the server's disk

First identify the disk of your server. For this execute the following command:
```bash
lsblk -f
```

Identify partition with your server's data. It should have `ext4` FSTYPE:
![Lsblk command output](/images/vps/recovery/rescue-lsblk.png){data-zoomable}

#### 2. Create mounting point and mount the disk

After that create the mounting point:
```bash
mkdir -p /mnt/vm
```

Then mount the partition:
```bash
mount /dev/vda3 /mnt/vm
```

Verify that it mounted correctly:
```bash
ls /mnt/vm
```

For a Linux root filesystem, you would typically see directories such as:
![Mounted disk example](/images/vps/recovery/rescue-mounted-disk.png){data-zoomable}

After that you can connect to your server via SFTP client (e.g. WinSCP) using SSH credentials and edit or download files on your server's disk.