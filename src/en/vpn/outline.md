---
title: "Outline VPN Installation Guide"
description: "Complete guide for installing and configuring an Outline VPN server on Linux distributions including Debian, Ubuntu, CentOS, Fedora, and AlmaLinux"
head:
  - - meta
    - name: keywords
      content: outline, vpn, server, installation, debian, ubuntu, centos, fedora, almalinux, guide, configuration, shadowsocks
  - - meta
    - property: og:title
      content: "Outline VPN - Complete Installation Guide"
  - - meta
    - property: og:description
      content: "Step-by-step guide for installing and configuring an Outline VPN server on various Linux distributions."
---

# Outline VPN Installation Guide

<img src="/images/vpn/outline/outline-logo.png" style="display: flex !important; justify-content: center !important; height: 500px;"></img>

Outline is a modern, fast, and secure VPN solution developed by Jigsaw (a subsidiary of Google). It uses the Shadowsocks protocol and provides an easy-to-use management app for configuring your VPN server and clients. This guide will walk you through installing and configuring Outline on your server.

:::: tip
To install Outline automatically, select its VPS script template when ordering your server, or run it from the VM control panel after your service is activated. The script installs and configures Outline on your server.
::::

## Prerequisites

Before starting, ensure you have:

- A server running a supported Linux distribution (Debian/Ubuntu, RHEL/CentOS/AlmaLinux/Rocky/Fedora)
- Root or sudo access to the server for manual installation
- Basic knowledge of command line operations for manual installation
- The server's public IP address
- A device to install the Outline Manager app (Windows, macOS, or Linux)

## Installation

### Automatic Installation for Hosting Clients

Supported operating systems: Debian 11, Debian 12, Debian 13, Ubuntu 22.04, Ubuntu 24.04.

#### During Service Order

In the order form, select the "Outline" script template, complete the order, and wait for the script to finish running on your VPS.

![Selecting Outline script during server ordering in the client area](/images/vpn/outline/client-area.png){data-zoomable}

After the script finishes, you will receive an email containing your Outline Manager URL and access credentials. Use the management details in Outline Manager. To connect through Outline Connect, use the client access key beginning with `ss://` provided by the script. You can create additional keys in Manager.

#### Through the VM Panel

Go to the [VM control panel](https://vm.senko.digital), navigate to the management of the desired server, expand the "Menu" in the top right corner and select "Run script".

![Opening the Run script option from the VM panel menu](/images/vpn/outline/vm-run-script.png){data-zoomable}

In the dialog, select the "Outline" script template, enable "Send email associated with script", and run the script.

![Run script wizard with Outline selected and email notification enabled](/images/vpn/outline/script-wizard.png){data-zoomable}

After installation is complete, you will receive an email with your Outline Manager URL and access credentials. Use the management details in Outline Manager and the client access key beginning with `ss://` in Outline Connect.

#### What Gets Installed

The script deploys an Outline VPN server (Shadowsocks-based) inside Docker, managed via the Outline Manager desktop app.

After installation you receive:

- **connection-info.txt** — contains the Management API URL and certificate fingerprint needed for Outline Manager

#### How to Connect

1. Install [Outline Connect](https://getoutline.org/) on your device.
2. Import the client access key provided by the script and connect.
3. To manage the server or create additional keys, install [Outline Manager](https://getoutline.org/), choose "Set up Outline anywhere", and paste the management JSON containing `apiUrl` and `certSha256` from `connection-info.txt`.

#### Firewall

The script does not make any changes to the server's firewall configuration — all existing firewall settings remain unchanged.

#### Server Management

```bash
cd /opt/outline-docker && docker compose up -d    # start
cd /opt/outline-docker && docker compose down      # stop
cd /opt/outline-docker && docker compose logs -f   # logs
```

### Manual Installation

If you already ran the "Outline" script template, skip this installation method and use the connection details it provided.

Choose either automatic or manual installation. Run the manual commands as root (`sudo -i`). Install Docker first using the [official instructions](https://docs.docker.com/engine/install/) for your distribution. The diagnostics below use the official installer's default container name, `shadowbox`; for the hosting script, check the actual name with `docker ps`.

::: code-group

```bash [Ubuntu/Debian]
# Update package list
apt-get update -y

# Install required dependencies
apt-get install -y curl jq
```

```bash [RHEL/AlmaLinux/Rocky/Fedora]
dnf install -y curl jq
```

:::

#### Run the Official Outline Installer

The Outline project provides an official installation script that handles all the complex setup:

```bash
# Download and run the official Outline installer
curl -fSL https://raw.githubusercontent.com/Jigsaw-Code/outline-server/master/src/server_manager/install_scripts/install_server.sh -o install-outline.sh
bash install-outline.sh
```

This script will:
- Check that Docker is installed and running
- Set up the Outline server with Shadowsocks
- Configure the management interface
- Generate server certificates
- Start all necessary services

## Installing the Outline Manager App

After installation, you'll need to install the Outline Manager app to configure your VPN server and create client access keys.

### Download the Outline Manager App

Download the Outline Manager app for your platform:

- **Windows**: [Download from official website](https://getoutline.org/get-started/#step-1)
- **macOS**: [Download from official website](https://getoutline.org/get-started/#step-1) or [Mac App Store](https://apps.apple.com/app/outline-manager/id1356177745)
- **Linux**: [Download from official website](https://getoutline.org/get-started/#step-1)

### Finding Your Server Configuration

If you used the VPS script template, take the management details from its email or `connection-info.txt`. If you ran the official installer manually, use the JSON printed in your SSH terminal. It looks like this:

```json
{
  "apiUrl": "https://your-server-ip:port/your-server-id",
  "certSha256": "your-certificate-hash"
}
```

Copy these details for later.

For the official installer's default installation, the management details are saved here:

```bash
# Show the saved management details
cat /opt/outline/access.txt
```

Use those values to rebuild the JSON shown above. Keep `apiUrl` private: it grants management access to your server.

### Adding Your Server to Outline Manager

1. **Install and launch** the Outline Manager app
2. **Choose "Set up Outline anywhere"** in the provider selection
![Outline Manager window with server provider selection and an arrow pointing towards "Set up Outline anywhere"](/images/vpn/outline/set-up-anywhere.png){data-zoomable}
3. **Paste your server configuration** (the JSON containing `apiUrl` and `certSha256`) copied in the previous step
![Outline Manager window with a prompt to paste server configuration](/images/vpn/outline/paste-credentials.png){data-zoomable}
4. **Set a server name** (optional but recommended)
5. **Click "Done"** to add your server

After successful setup, the app will take you straight to your server dashboard:

![Outline Manager dashboard](/images/vpn/outline/dashboard.png){data-zoomable}

## Server Configuration

### Initial Server Setup

Once your server is added to the Outline Manager app, you can configure it:

1. **Set a server name** - Choose a descriptive name for your VPN server
2. **Set data limits** - Optionally set data limits for users over a rolling 30-day period

![Outline Manager server settings](/images/vpn/outline/settings.png){data-zoomable}

### Creating Access Keys

Access keys are what clients use to connect to your Outline server. A key can be used on more than one device; create separate keys when you want to revoke access or track usage separately.

#### Creating Your First Access Key

1. **Click "Add new key"** in the Outline Manager app
![Outline Manager - Add new key](/images/vpn/outline/add-new-key.png){data-zoomable}
2. **Choose a name** for the key (e.g., "My Phone", "Laptop")
3. **Set data limits** (optional)
4. **Click "Add"** to create the key

The system will immediately generate a unique access URL (starting with `ss://`) that clients will use to connect.

With Outline Manager you can:

- **Rename keys**
- **Monitor traffic usage** per key
- **Set or reset data limits**

To view/share a key, click the **Share** icon next to it, and the access key will be shown.

![Outline Manager - Access key](/images/vpn/outline/access-key.png){data-zoomable}

Provide it to your users, or use it in the next step.

## Client Configuration

### Installing Outline Connect

Outline provides official client applications called "Outline Connect" for various platforms.

#### Windows Installation

1. **Download Outline Connect** from the [official website](https://getoutline.org/get-started/#step-3) or the [direct mirror](https://s3.amazonaws.com/outline-releases/client/windows/stable/Outline-Client.exe)
2. **Run the installer** and follow the setup wizard
3. **Launch Outline Connect** after installation

#### macOS Installation

1. **Download Outline Connect** from the [Mac App Store](https://apps.apple.com/app/outline-app/id1356178125) or the [official website](https://getoutline.org/get-started/#step-3)
2. **Install the application** following the standard macOS installation process
3. **Launch Outline Connect** from your Applications folder

#### Linux Installation

1. **Download the AppImage** from the [official mirror](https://s3.amazonaws.com/outline-releases/client/linux/stable/Outline-Client.AppImage)
2. Make it executable: `chmod +x Outline-Client.AppImage`
3. Run the application

#### Mobile Devices (Android/iOS)

1. **Download the app**:
   - For Android: [Google Play Store](https://play.google.com/store/apps/details?id=org.outline.android.client) or [direct APK](https://s3.amazonaws.com/outline-releases/client/android/stable/Outline-Client.apk)
   - For iOS: [App Store](https://apps.apple.com/app/outline-app/id1356178125)
2. **Install and launch** the Outline Connect app

### Connecting to Your VPN

1. **Open Outline Connect** on your device
2. **Add a server** by clicking the "+" button
3. **Enter the access key** (the `ss://` URL you copied from the Outline Manager)
4. **Give the connection a name** (optional)
5. **Click "Add"** to save the connection
6. **Connect** by clicking the toggle switch next to your server

## Verification

### Check Server Status

You can verify that your Outline server is running properly:

```bash
# Check if Docker containers are running
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

# Check Outline server logs
docker logs shadowbox

# Check if the management interface is accessible
ss -lntup
```

### Test the VPN Connection

1. **Connect to your VPN** using Outline Connect
2. **Check your IP address** - Visit [check-host.net](https://check-host.net) to verify your IP has changed
3. **Test internet connectivity** - Ensure you can browse the web normally
4. **Check connection stability** - Leave the connection active for a while to test stability

## Firewall Configuration

Outline uses separate ports for management and client traffic. Use the port numbers printed by the installer: `API_PORT` is the TCP port in `apiUrl`; `KEY_PORT` is the access-key port shown in Outline Manager. Replace these placeholders before running the commands. If keys use different ports, allow each key port.

### For UFW (Ubuntu/Debian):

```bash
ufw allow API_PORT/tcp
ufw allow KEY_PORT/tcp
ufw allow KEY_PORT/udp
```

### For firewalld (RHEL/CentOS):

```bash
firewall-cmd --permanent --add-port=API_PORT/tcp
firewall-cmd --permanent --add-port=KEY_PORT/tcp
firewall-cmd --permanent --add-port=KEY_PORT/udp
firewall-cmd --reload
```

Ports `80` and `443` are not required unless you chose them. Where possible, restrict the management port to the addresses you use for administration.

## Managing Users and Access

### Adding Multiple Users

1. **Create additional access keys** in the Outline Manager app
2. **Share the access URLs** with your users
3. **Set individual data limits** for each user if needed
4. **Monitor usage** through the management app

### User Management Features

- **Usage statistics** - View data usage for each access key
- **Traffic monitoring** - See traffic usage per key; this is not a list of live connections
- **Data limits** - Set and enforce data limits over a rolling 30-day period
- **Key management** - Rename, modify, or delete access keys

## Troubleshooting

### Common Issues

1. **Cannot connect to server in Outline Manager**:
   - Check if the server is running: `docker ps`
   - Verify the server configuration (apiUrl and certSha256) is correct
   - Ensure the port is open in your firewall
   - Check if the server is accessible from your network

2. **Client cannot connect**:
   - Verify the access key URL is correct
   - Check if the server port is accessible
   - Ensure the client app is up to date
   - Try regenerating the access key

3. **Slow connection speeds**:
   - Check server resources (CPU, memory, bandwidth)
   - Verify your internet connection speed
   - Try connecting from a different network
   - Check if there are any bandwidth limits set

4. **Outline Manager app shows errors**:
   - Check Docker container logs: `docker logs shadowbox`
   - Restart the Outline service: `docker restart shadowbox`
   - Verify disk space and system resources
   - Try removing and re-adding the server in the Outline Manager app

### Useful Commands

```bash
# Check Outline server status
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

# View server logs
docker logs shadowbox

# Restart Outline server
docker restart shadowbox

# Check system resources
htop
df -h

# Test network connectivity
ping 8.8.8.8
curl -I https://www.google.com
```

### Network Debugging

```bash
# Check if the Outline port is listening
ss -lntup

# Test port connectivity
telnet your-server-ip your-port

# Check firewall status
ufw status
# OR
firewall-cmd --list-all
```

## Security Considerations

1. **Keep access keys secure**: Never share access keys publicly and rotate them regularly
2. **Protect management access**: Keep the management JSON private and secure the computer running Outline Manager
3. **Regular updates**: Keep your server and Outline software updated
4. **Monitor usage**: Regularly check the management interface for unusual activity
5. **Backup configuration**: Keep backups of your server configuration
6. **Network security**: Ensure your server is properly secured and firewalled

## Advanced Configuration

### Custom Port Configuration

Use the port setting in Outline Manager for new access keys. Existing keys can keep their previous ports, so check each key before closing an old firewall port. After changing a key, share the updated access link. Restarting a Docker container does not apply changes to its Compose file.

### SSL Certificate Configuration

The official installer creates a self-signed management certificate. Outline Manager checks it against `certSha256` from the management JSON, so a publicly trusted certificate is not required. Replacing this certificate also changes its fingerprint. See the [official installer](https://github.com/OutlineFoundation/outline-server/blob/master/src/server_manager/install_scripts/install_server.sh) for the installation details.


## Conclusion

You now have a fully functional Outline VPN server! The Outline Manager app makes it easy to manage users, monitor usage, and configure your VPN server. Users can connect using the official Outline Connect applications on any platform.

Remember to:
- Keep your access keys secure
- Regularly monitor usage and performance
- Keep your server and software updated
- Back up your configuration regularly

The Outline Manager app provides an intuitive interface for all server management tasks, making it easy to maintain and scale your VPN service.
