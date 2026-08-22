---
title: "Working with Rescue Mode"
description: "Step-by-step guide to booting your virtual server into rescue mode, configuring networking, and backing up data from your server's operating system."
head:
  - - meta
    - name: keywords
      content: rescue, rescuecd, systemrescue, grml, grmllinux, virtual server, vps, network configuration, backup, backing up data, back up data
  - - meta
    - property: og:title
      content: "Working with Rescue Mode"
  - - meta
    - property: og:description
      content: "Step-by-step guide to booting your virtual server into rescue mode, configuring networking, and backing up data from your server's operating system."
---


# Working with Rescue Mode

## Booting into Rescue Mode

You can boot your server into rescue mode in two ways:

### Using "Recovery Mode"

1. Log in to your account in the [VM control panel](https://vm.senko.digital/).
2. Select the server on which you want to enable recovery mode.
3. Click the three-dot menu in the server list or on the server's parameters page, then select "Recovery mode".
![Recovery mode in the menu](/images/vps/recovery/rescue-recovery-mode.png){data-zoomable}
4. Click the "Start mode and reboot" button.
![Recovery mode button](/images/vps/recovery/rescue-enable-recovery-mode.png){data-zoomable}

After your VM's status changes to "Active", connect to your server via VNC.

To set up networking, please refer to the [SystemRescue networking guide](#systemrescue).

### Using an ISO image

1. Log in to your account in the [VM control panel](https://vm.senko.digital/).
2. Select the server on which you want to mount the ISO file.
3. Click the three-dot menu in the server list or on the server's parameters page, then select "Mount ISO image".
![Mount ISO image button in the menu](/images/vps/recovery/rescue-iso.png){data-zoomable}
4. Change the loading method from "Local file" to "Image URL".
5. Copy the download link for [GRML](https://grml.org/download/) or [SystemRescue](https://www.system-rescue.org/Download/) from its respective download page.
6. Paste the download link for one of the ISO files into the "Image URL" field. For example:

- GRML: `https://download.grml.org/grml-full-2026.04-amd64.iso`
- SystemRescue: `https://fastly-cdn.system-rescue.org/releases/13.01/systemrescue-13.01-amd64.iso`
- An image of your choice

7. Click "Upload image".

::: warning
Take note of which distribution you choose, as it determines how you configure networking. If you choose a distribution that is not listed above, consult its documentation for the correct network configuration procedure.
:::

After your VM's status changes to "Active", connect to your server via VNC.

To configure networking, refer to the guide for your selected distribution: [SystemRescue](#systemrescue) or [GRML](#grml).

## Configuring Networking

### SystemRescue

SystemRescue networking is configured through the NetworkManager CLI. Before configuring it, obtain your VM's network settings from the "IP addresses" menu in the VM control panel. You will need:
- IP address
- Gateway

After obtaining this information, run the following commands:

#### 1. Set Up the IP Address
```bash
nmcli conn mod "Wired connection 1" ipv4.addr <IP>/32
```

Replace `<IP>` with your server's IP address.

#### 2. Disable DHCP

```bash
nmcli conn mod "Wired connection 1" ipv4.method manual
```

#### 3. Set Up the Gateway

```bash
nmcli conn mod "Wired connection 1" ipv4.gateway <GATEWAY>
```

Replace `<GATEWAY>` with your server's gateway (usually either `172.16.0.1` or `10.0.0.1`).

#### 4. Set Up DNS

```bash
nmcli conn mod "Wired connection 1" ipv4.dns 1.1.1.1
```

#### 5. Enable the interface

```bash
nmcli conn up "Wired connection 1"
```

#### 6. Enable the SSH Server

```bash
systemctl enable ssh --now
```

You can then [configure the firewall](#configuring-the-firewall) to allow incoming SSH connections to your server.

### GRML

You can configure networking with the `grml-networking` utility. Launch it by running `grml-networking` or by pressing `n` after the initial startup. Before configuring it, obtain your VM's network settings from the "IP addresses" menu in the VM control panel. You will need:

- IP address
- Mask
- Gateway

After launching the utility:

1. Select `netcardconfig` and press `[Enter]`.
2. When asked to configure VLAN, select `No`.
3. When asked whether to use DHCP broadcast, select `No`.
4. Enter your server's IP address and press `[Enter]`.
5. Enter your server's network mask (usually `255.255.255.255`) and press `[Enter]`.
6. Leave the broadcast address empty. If your IP address is present, remove it, then press `[Enter]`.
7. Enter your server's gateway (usually either `172.16.0.1` or `10.0.0.1`) and press `[Enter]`.
8. Enter `1.1.1.1` as the DNS server. You may use another DNS server instead. Then press `[Enter]`.
9. When asked whether to enable the interface automatically at boot, select either `Yes` or `No`.

You will then return to the initial menu. Select `Quit`, and press `q` when the welcome message appears.

### Configuring the Firewall

#### 1. Flush Existing Rules
```bash
iptables -F
```

#### 2. Allow Traffic from Established and Related Connections
```bash
iptables -I INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
```

#### 3. Allow All Incoming SSH Connections
```bash
iptables -I INPUT -p tcp --dport 22 -j ACCEPT
```

#### 4. Allow Loopback Traffic
```bash
iptables -I INPUT -i lo -j ACCEPT
```

### Enabling the SSH Server

To connect to your server via SSH, you must set a password for the `root` user and start the SSH service.

First, set a password for the `root` user:

```bash
passwd root
```

Then start the SSH server:

```bash
systemctl start ssh
```

You should now be able to connect to your server using the password you set.

## Using Rescue Mode

This section covers common operations performed in rescue mode.

### Accessing Data on the Server's Disk

::: warning
**If you need to download or upload files**, [configure networking](#configuring-networking), [configure the firewall](#configuring-the-firewall), and [enable the SSH server](#enabling-the-ssh-server) before continuing.
:::

#### 1. Find the Server's Disk

First, identify your server's disk by running:
```bash
lsblk -f
```

Identify the partition containing your server's data. Its FSTYPE should be `ext4`:
![Lsblk command output](/images/vps/recovery/rescue-lsblk.png){data-zoomable}

#### 2. Create a Mount Point and Mount the Disk

Create the mount point:
```bash
mkdir -p /mnt/vm
```

Then mount the partition:
```bash
mount /dev/vda3 /mnt/vm
```

Verify that the partition was mounted correctly:
```bash
ls /mnt/vm
```

For a Linux root filesystem, you would typically see directories such as:
![Mounted disk example](/images/vps/recovery/rescue-mounted-disk.png){data-zoomable}

You can then connect to your server with an SFTP client (for example, WinSCP) using your SSH credentials and edit or download files from your server's disk.