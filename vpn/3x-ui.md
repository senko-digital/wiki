---
title: "Installation and Usage Guide for 3x-ui Panel"
description: "Quick guide to setting up your new VPS server. Useful for beginners and even experienced users."
head:
  - - meta
    - name: keywords
      content: game panel, server management, getting started, pterodactyl, guide
  - - meta
    - property: og:title 
      content: "VPN - Installation and Usage Guide for 3x-ui Panel"
  - - meta
    - property: og:description
      content: "Quick guide to setting up your new VPS server. Useful for beginners and even experienced users."
---

# Installation and Usage Guide for 3x-ui Panel

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="/images/vpn/3x-ui/x-ui.png">
    <img alt="3x-ui" src="/images/vpn/3x-ui/x-ui.png">
  </picture>
</p>

3x-ui is a multifunctional web panel for managing VPN servers, supporting various protocols such as VMess, VLESS, Trojan, ShadowSocks, and WireGuard.

This panel provides easy management of VPN connections, configuration of multiple users, and setting limits on traffic, expiration dates, and IP addresses.

## 3x-ui Features

- Multilingual interface (English, Persian, Chinese, Russian, Vietnamese, Spanish)
- Support for multiple protocols (VMess, VLESS, Trojan, ShadowSocks, WireGuard)
- Multiple user management
- Setting limits for traffic, expiration dates, and IP addresses
- Automatic SSL certificate management
- Intuitive web interface
- Traffic usage statistics
- Ad blocking and traffic routing capabilities
- Support for Reality technology to bypass restrictions

## Installation

### Standard Installation

To install 3x-ui, run the following command:

```bash
bash <(curl -Ls https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh)
```

During installation, you will be prompted to:

1. Change panel settings (recommended to answer `y` for increased security)
2. Specify the panel port (recommended to use a non-standard one)

### Installing a Specific Version

To install a specific version, add the version number at the end of the installation command. For example, for version v1.7.9:

```bash
VERSION=v1.7.9 && bash <(curl -Ls "https://raw.githubusercontent.com/mhsanaei/3x-ui/$VERSION/install.sh") $VERSION
```

### Docker Installation

1. Install Docker:

```bash
bash <(curl -sSL https://get.docker.com)
```

2. Clone the project repository:

```bash
git clone https://github.com/mhsanaei/3x-ui.git
cd 3x-ui
```

3. Start the service:

```bash
docker compose up -d
```

Or alternatively:

```bash
docker run -itd \
   -e XRAY_VMESS_AEAD_FORCED=false \
   -v $PWD/db/:/etc/x-ui/ \
   -v $PWD/cert/:/root/cert/ \
   --network=host \
   --restart=unless-stopped \
   --name 3x-ui \
   ghcr.io/mhsanaei/3x-ui:latest
```

## SSL Certificate Configuration

There are several ways to configure an SSL certificate in 3x-ui

### ACME

**To manage SSL certificates using ACME:**

1. Make sure your domain correctly points to this server (i.e., the A record in DNS is configured correctly).
2. Run the `x-ui` command in the terminal, then select `SSL Certificate Management`.
3. You will be presented with the following options:
    - **Get SSL:** Obtain SSL certificates.
    - **Revoke:** Revoke existing SSL certificates.
    - **Force Renewal:** Force renewal of SSL certificates.
    - **Show Existing Domains:** Display all domain certificates available on the server.
    - **Specify Certificate Paths for the Panel:** Specify a certificate for your domain to be used by the control panel.

### Certbot

**To install and use Certbot, simply enter these commands:**

```bash
apt-get install certbot -y
certbot certonly --standalone --agree-tos --register-unsafely-without-email -d yourdomain.com
certbot renew --dry-run
```

- where `yourdomain.com` is your domain

## Logging into the Web Panel

After installing the control panel, follow the instructions below:

1. Enter the command `x-ui`
2. Select option `10` by entering the corresponding number in the terminal.

You will be provided with login data in this format:
![console](/images/vpn/3x-ui/view-current-settings.png){data-zoomable}

You will need to go to the link specified in `Access URL` and log in with your `username` and `password`

## Setting Up Connections (Inbounds)

### Creating a New Connection

1. Go to the "Inbounds" page
2. Click the "Add inbound" button to create a new connection
3. In the opened window, enter any convenient name in the "Remark" field
4. Select the protocol type (VMess, VLESS, Trojan, ShadowSocks, or WireGuard)

### Protocol Configuration

#### For VLESS + Reality (recommended for bypassing restrictions):

1. Select security type - `Reality`
2. Set uTLS - `chrome`
3. In the "Dest" field, enter a value, for example `dl.google.com:443`
4. In the "SNI" field, enter a value, for example `dl.google.com`
5. Click `Get New Cert` to automatically generate random keys
6. Click the Create button to save and create the connection

### Setting Limits

For each connection, you can configure:

- Traffic limit (in gigabytes)
- Expiration date (in days)
- IP address limit (number of simultaneous connections)
- Enable or disable restrictions

## User Management

In the `Inbounds` section:

1. To view additional settings, click the `+` icon next to the created connection
2. To create a new user, select the "Add Client" option
![add client](/images/vpn/3x-ui/add_client.png){data-zoomable}
3. For each user, you can configure:
   - Name (a name convenient for you)
   - Traffic limit
   - Expiration date
   - Unique ID

## Client Connection

### Windows, macOS, and Linux

Recommended clients:

- `Hiddify` (Windows, Linux, macOS)
- `NekoRay` (Windows, Linux)

To connect:

1. In the 3x-ui web panel, click on the QR code of the desired user
2. Copy the configuration or scan the QR code using a VPN client
3. Import the configuration into the client and make the connection

### Android

Recommended clients:

- `Hiddify`
- `v2rayNG`

To connect:

1. Install the client from Google Play
2. In the 3x-ui web panel, click on the QR code of the desired user
3. Scan the QR code using the VPN client or copy and import the configuration
4. Connect using the imported configuration

### iOS

Recommended clients:

- `FoXray`
- `v2box`
- `ShadowRocket`

To connect:

1. Install the client from the App Store
2. In the 3x-ui web panel, click on the QR code of the desired user
3. Scan the QR code using the client or copy and import the configuration
4. Connect using the imported configuration

## Monitoring and Statistics

In the 3x-ui web panel, you can monitor client activity:

- Total traffic consumption
- Traffic usage by user
- Connection status
- User subscription expiration dates
- IP address usage

## Updating 3x-ui

To update the panel to the latest version, run the following command:

```bash
bash <(curl -Ls https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh)
```

If you're using Docker, you'll need to run the following commands:

```bash
cd 3x-ui
docker compose down
docker compose pull 3x-ui
docker compose up -d
```

## Troubleshooting

### Default Settings

- Port: `2053`
- Database path: `/etc/x-ui/x-ui.db`
- Xray configuration path: `/usr/local/x-ui/bin/config.json`

### Additional Xray Settings

In the web panel, you can configure additional Xray options:

- Ad blocking
- Blocking IP addresses from specific countries
- Domain blocking
- Routing Google, Netflix, Spotify, OpenAI (ChatGPT) through WARP

### WARP Configuration

For versions `v2.1.0` and later - WARP is built-in and does not require additional installation.

Simply enable the desired configuration in the panel.
![warp](/images/vpn/3x-ui/warp.png){data-zoomable}