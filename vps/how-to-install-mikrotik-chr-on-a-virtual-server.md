---
title: "How to Install MikroTik CHR on a Virtual Server"
description: "Step-by-step guide for installing and configuring MikroTik Cloud Hosted Router (CHR) on a virtual server, including system requirements and network setup."
head:
  - - meta
    - name: keywords
      content: mikrotik, chr, routeros, virtual server, vps, network configuration, router installation, cloud router
  - - meta
    - property: og:title
      content: "How to Install MikroTik CHR on a Virtual Server"
  - - meta
    - property: og:description
      content: "Complete guide for installing and configuring MikroTik Cloud Hosted Router (CHR) on a virtual server, including system requirements and network setup."
---

# Installing MikroTik CHR on a Virtual Server

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="/images/vps/mikrotik-chr/mikrotik-chr-logo.png">
    <img alt="MikroTik CHR Logo" src="/images/vps/mikrotik-chr/mikrotik-chr-logo.png">
  </picture>
</p>

MikroTik Cloud Hosted Router (CHR) is a specialized version of RouterOS that's optimized for virtual machine environments, functioning as a complete operating system.

In this guide, we'll walk you through the process of installing and configuring MikroTik CHR on your virtual server.

## System Requirements

You can install MikroTik CHR on any of our virtual server plans, including the entry-level configuration with:
- 1 CPU core
- 1 GB RAM
- 10 GB NVMe storage

This guide demonstrates the manual installation process using a i9-PROMO-1 virtual server.

## Prerequisites

1. Order a virtual server through your control panel or use an existing server
2. For this example, we'll use:
   - Plan: i9-PROMO-1
   - Base OS: Ubuntu 24.04 (required for CHR deployment)

## Installation Steps

### 1. Server Setup
- Your server will be ready within 2 minutes after ordering
- Connect to the server using SSH credentials provided in your activation or OS reinstallation email
- For SSH connection guidance, refer to our [How to connect to the server (Linux)](/vps/how-to-connect-through-ssh) guide

### 2. Downloading CHR Image
- Visit the [official MikroTik download page](https://mikrotik.com/download)
- Download the **Raw disk image** version of CHR (we'll use version 7.18.2 in this example)
![An image showing which version of MikroTik CHR to use for a virtual server](/images/vps/mikrotik-chr/select-mikrotik-chr-version.png){data-zoomable}
- Right-click the download icon and copy the download link (e.g., https://download.mikrotik.com/routeros/7.18.2/chr-7.18.2.img.zip)
- Download the image to your virtual server:
```bash
cd /tmp
wget <LINK> -O chr.img.zip
```

For example:
```bash
cd /tmp
wget https://download.mikrotik.com/routeros/7.18.2/chr-7.18.2.img.zip -O chr.img.zip
```

![An image showing a successful download of a MikroTik CHR image onto a virtual server](/images/vps/mikrotik-chr/successful-download-mikrotik-chr.png){data-zoomable}

### 3. Image Deployment

::: warning
This process will **delete all data from your server**. 
Make sure to **back up any important data** before proceeding!
:::

Install gunzip:
```bash
apt -y install gunzip
```

Extract the downloaded image:
```bash
gunzip -c chr.img.zip > chr.img
```

Switch the disk system to read-only mode:
```bash
echo u > /proc/sysrq-trigger
```

Write the image to the virtual disk:
```bash
dd if=chr.img of=/dev/vda bs=4M oflag=sync
```

Reboot the server to initialize CHR:
```bash
echo 1 > /proc/sys/kernel/sysrq
echo b > /proc/sysrq-trigger
```

After executing the last command and pressing `[Enter]`, your SSH connection may appear to hang - this is expected behavior.

You can safely disconnect from your virtual server at this point. The remaining setup will be performed through the web VNC interface.

### 4. Network Configuration

Now we need to access the VM control panel to connect to our server via VNC.

#### Accessing the System
- Log into our [VM control panel](https://vm.senko.digital/)
- Select the server where you installed MikroTik CHR
- Connect to the server through the VNC console
- Default credentials:
  - Username: admin
  - Password: (leave empty)

#### System Setup
1. Skip the software license agreement (press 'n')
2. Set a new administrator password (minimum 8 characters recommended)
3. Configure network settings using parameters from your control panel:
```bash
/ip address add address=<IPv4>/32 network=<Gateway> broadcast=<IPv4> interface=ether1
/ip route add dst-address=0.0.0.0/0 gateway=<Gateway>
/ip dns set servers=1.1.1.1,1.0.0.1
```

Where:
- `<IPv4>` is your server's IP address
- `<Gateway>` is typically `172.16.0.1` (for RZ9, EP lineups) or `10.0.0.1` (for the i9-PROMO lineup)

You can verify your server's internet connectivity by running:
```bash
ping 1.1.1.1
```

If configured correctly, you should see replies from Cloudflare's DNS (1.1.1.1):
![An image showing proper MikroTik CHR settings with a ping test running to Cloudflare DNS](/images/vps/mikrotik-chr/mikrotik-chr-installed.png){data-zoomable}

Your MikroTik CHR is now ready for further configuration and use. You can now connect via SSH as well.

## Additional Configuration

### Creating a New User

For enhanced security, we recommend creating a new user and removing the default `admin` user.

Create a new user by running:
```bash
user/add name=username
```

Where `username` is your desired login name.

The system will prompt you to:
1. Assign a group - type `full`
2. Set a password - use at least 8 unique characters

### Removing the Admin User

After creating your new user:
1. Log out of the current session:
```bash
/quit
```
2. Log in with your new credentials via SSH or VNC
3. Remove the admin user:
```bash
user/remove admin
```

### Securing Services

By default, MikroTik runs several services on various ports, including:
- Telnet
- FTP
- HTTP server
- SSH
- API
- Winbox
- SSL API

These services may expose your server to security risks, as malicious bots often attempt to brute-force routers on the internet.

To check currently running services:
```bash
ip/service/print
```

![An image showing MikroTik CHR services that run by default](/images/vps/mikrotik-chr/mikrotik-chr-default-services.png){data-zoomable}

Disable unused services:
```bash
ip/service/disable n,n,n,n
```

Where `n` represents the service number to disable.

Examples:
```bash
ip/service/disable 0,1,2,5,7  # Disables Telnet, FTP, HTTP, API, and SSL API
ip/service/disable 3          # Disables SSH only
ip/service/disable 5,7        # Disables API and SSL API only
ip/service/disable 1          # Disables FTP only
```

### Changing SSH Port

For additional security, change your SSH port to a non-standard number (e.g., 59871):
```bash
set 3 port=PORT
```

Where `PORT` is your preferred port number.

Example:
```bash
set 3 port=59871
```

### License Information

Check your MikroTik CHR license status:
```bash
/system/license/print
```

CHR offers four license levels:
- **free**: 1 Mbps speed (default)
- **p1** (perpetual-1): $45, 1 Gbit speed
- **p10** (perpetual-10): $95, 10 Gbit speed
- **p-unlimited** (perpetual-unlimited): $250, Unlimited speed

The default free license allows indefinite use but limits throughput to 1 Mbps per interface.

For more information about licensing, visit the official [MikroTik documentation](https://help.mikrotik.com/docs/spaces/ROS/pages/18350234/Cloud+Hosted+Router+CHR).
