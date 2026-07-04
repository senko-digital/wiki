---
title: "Installation and Usage Guide for 3X-UI Panel"
description: "Installation of 3X-UI panel on VPS/VDS servers for VPN protocol configuration, such as VLESS, ShadowSocks, Wireguard and VMess"
head:
  - - meta
    - name: keywords
      content: vpn, 3x-ui, xray, vless, vmess, trojan, shadowsocks, wireguard, reality, server management, guide
  - - meta
    - property: og:title 
      content: "VPN - Installation and Usage Guide for 3X-UI Panel"
  - - meta
    - property: og:description
      content: "Installation of 3X-UI panel on VPS/VDS servers for VPN protocol configuration, such as VLESS, ShadowSocks, Wireguard and VMess."
---

# Installation and Usage Guide for 3X-UI Panel

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="/images/vpn/3x-ui/x-ui.png">
    <img alt="3x-ui" src="/images/vpn/3x-ui/x-ui.png">
  </picture>
</p>

3X-UI is a multifunctional web panel for managing VPN servers, supporting various protocols such as VMess, VLESS, Trojan, ShadowSocks, and WireGuard.

This panel provides easy management of VPN connections, configuration of multiple users, and setting limits on traffic, expiration dates, and IP addresses.

<!-- ::: tip 
Our hosting clients have access to fully automated 3X-UI panel installation script during initial service ordering, or through scripts in the VM control panel. All that remains is to create users and configure inbounds.
::: -->

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

<!-- ### Automatic Installation for Hosting Clients

#### During Service Order

In the order menu, select "3X-UI" from the dropdown menu, complete the order and wait for service processing to finish.

Immediately after server activation, you will receive login credentials for both the server OS and 3X-UI panel. After that, you can [log in](/vpn/3x-ui#logging-into-the-web-panel) and start [configuring connections](/vpn/3x-ui#setting-up-connections-inbounds).

#### Through the VM Panel

Go to the [VM control panel](https://vm.senko.digital), navigate to the management of the desired server, expand the "Menu" in the top right corner and select "Run script".

In the dialog, select the "3X-UI" option and enable "Send email associated with script".

After installation is complete, you will receive an email with login credentials for the control panel. Then you can [log in](/vpn/3x-ui#logging-into-the-web-panel) and start [configuring connections](/vpn/3x-ui#setting-up-connections-inbounds). -->

### Standard Installation

To install 3X-UI, run the following command:

```bash
bash <(curl -Ls https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh)
```

::: warning
Please note that you need to install `curl` before executing the command. You can do this by executing the command `apt install curl`.
:::

During installation, you will be prompted to:

1. Choose the database type (for personal use, SQLite is recommended).
![database selection](/images/vpn/3x-ui/installation_db.png)
2. Change panel settings (recommended to answer `y` for increased security).
![custom settings selection](/images/vpn/3x-ui/installation_custom_settings.png)
3. Specify the panel port (recommended to use a non‑standard port).
![port selection](/images/vpn/3x-ui/installation_port.png)
4. Create an SSL certificate for a domain or IP address (recommended to create at least for the IP address, option 2).
![ssl certificate creation](/images/vpn/3x-ui/installation_ssl.png)

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
2. Run the `x-ui` command in the terminal, then select `SSL Certificate Management` (option 19).
3. You will be presented with the following options:
    - **Get SSL (Domain):** Obtain an SSL certificate for a domain.
    - **Revoke:** Revoke existing SSL certificates.
    - **Force Renewal:** Force renewal of SSL certificates.
    - **Show Existing Domains:** Display all domain certificates available on the server.
    - **Specify Certificate Paths for the Panel:** Specify a certificate for your domain to be used by the control panel.
    - **Get SSL Certificate for IP Address:** Obtain an SSL certificate for the IP address.

### Certbot

**To install and use Certbot, simply enter these commands:**

```bash
apt-get install certbot -y
certbot certonly --standalone --agree-tos --register-unsafely-without-email -d yourdomain.com
certbot renew --dry-run
```

- where `yourdomain.com` is your domain

::: warning
Please note that Certbot supports the creation of SSL certificates only for domains.
:::

## Logging into the Web Panel

After installing the control panel, copy the credentials in a safe space or memorize them.
If the installation was successful, you will be provided with login data in this format:

![successful 3x-ui installation credentials output](/images/vpn/3x-ui/panel_installation_complete.png)

<!-- follow the instructions below: -->

<!-- 1. Enter the command `x-ui`
2. Select option `10` by entering the corresponding number in the terminal.

You will be provided with login data in this format:
![console](/images/vpn/3x-ui/view-current-settings.png){data-zoomable}

<!-- You will need to go to the link specified in `Access URL` and log in with your `username` and `password` -->

## Setting Up Connections (Inbounds)

### Creating a New Connection

1. Go to the "Inbounds" page
2. Click the "Add inbound" button to create a new connection
![add inbound](/images/vpn/3x-ui/add_inbound.png)
3. In the opened window, enter any convenient name in the "Remark" field
4. Select the protocol type (VMess, VLESS, Trojan, ShadowSocks, or WireGuard)

### Protocol Configuration

#### For VLESS + Reality (recommended for bypassing restrictions)

1. Select security type — `Reality`.
2. Set uTLS — `firefox` (some setups may require a different uTLS).
3. In the "Dest" field enter, for example: `dl.google.com:443`.
4. In the "SNI" field enter, for example: `dl.google.com`.
5. Click `Get New Cert` and `Get New Seed` to automatically generate keys.
6. Click Create to save and add the inbound.

## User Management

### Creating and setting up a client

1. Go to the "Clients" page
2. Click the "Add Clients" button to create a new client
![add client](/images/vpn/3x-ui/add_client.png)
3. In the opened window, the panel will offer all necessary data for the client to work correctly, but you can modify it.
4. Select which inbounds to attach to the client in the "Attached inbounds" field. You can select the previously created inbound.

### Setting limits

For each client you can configure:

- Traffic limit (in gigabytes)
- Expiration date (in days)
- Enable or disable the client
- IP address limit (number of simultaneous connections)

## Client Connection

### Windows, macOS, and Linux

Recommended clients:

- `Hiddify` (Windows, Linux, macOS)
- `NekoRay` (Windows, Linux)

To connect:

1. In the 3X-UI web panel click the QR code for the desired user.
![connection QR](/images/vpn/3x-ui/connect_qr.png)
Or copy the subscription/connection link
![connection info](/images/vpn/3x-ui/connect_info.png)
2. Copy the configuration or scan the QR code with your VPN client.
3. Import the configuration into the client and connect.

### Android

Recommended clients:

- `Hiddify`
- `v2rayNG`

To connect:

1. Install the client from Google Play
2. In the 3X-UI web panel, click on the QR code of the desired user
![connection QR](/images/vpn/3x-ui/connect_qr.png)
Or copy the subscription/connection link
![connection info](/images/vpn/3x-ui/connect_info.png)
3. Scan the QR code using the VPN client or copy and import the configuration.
4. Connect using the imported configuration.

### iOS

Recommended clients:

- `FoXray`
- `v2box`
- `ShadowRocket`

To connect:

1. Install the client from the App Store
2. In the 3X-UI web panel, click on the QR code of the desired user
![connection QR](/images/vpn/3x-ui/connect_qr.png)
Or copy the subscription/connection link
![connection info](/images/vpn/3x-ui/connect_info.png)
3. Scan the QR code using the client or copy and import the configuration
4. Connect using the imported configuration

## Monitoring and Statistics

In the 3X-UI web panel, you can monitor user activity:

- Total traffic consumption
- Traffic usage by user
- Connection status
- User subscription expiration dates
- IP address usage

## IPv6 Traffic Routing

Our hosting clients have access to a special IPv6 subnet without ads from popular services (e.g., YouTube). To use it correctly, additional configuration is required. This guide uses YouTube as an example to set up IPv6 routing only for that service.

### Creating an Outbound

In the left sidebar of the panel, open the Xray Configs tab, go to Outbounds, then click "+ Outbounds":
![ipv6 create outbound](/images/vpn/3x-ui/ipv6_create_outbound.png)

Fill in the fields as follows:
- Protocol — `freedom`
- Tag — `ipv6-freedom`
- Strategy — `ForceIPv6`

Your Outbound should look like this:
![outbound info](/images/vpn/3x-ui/ipv6_outbound_info.png)

Click "Create", then save the changes in the top left and restart Xray:
![restart xray](/images/vpn/3x-ui/ipv6_restart_xray.png)

### Creating a Routing Rule

In the same tab, go to Routing Rules and click "+ Routing Rules":
![ipv6 routing rule creation button](/images/vpn/3x-ui/ipv6_routing_rule.png)

Fill in the fields as follows:
- Domain name — enter: `geosite:youtube,domain:googlevideo.com`
- Inbound tags — select the inbound for which this rule will be active
- Outbound tag — select the previously created outbound `ipv6-freedom`

Your rule should look like this:
![routing rule info](/images/vpn/3x-ui/ipv6_routing_rule_info.png)

Click "Create", then move your rule to position 2:
![routing rule position](/images/vpn/3x-ui/ipv6_routing_rule_position.png)

::: tip
You can change the position using these buttons:
![routing rule how to change position](/images/vpn/3x-ui/ipv6_routing_rule_change_position.png)
:::

Save the changes in the top left and restart Xray:
![restart xray](/images/vpn/3x-ui/ipv6_restart_xray.png)

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

For versions `v2.1.0` and later — WARP is built-in and does not require additional installation.

Simply enable the desired configuration in the panel, create an account, and add an Outbound.
![warp](/images/vpn/3x-ui/warp.png){data-zoomable}
![create warp account](/images/vpn/3x-ui/warp_create_account.png){data-zoomable}
![create warp outbound](/images/vpn/3x-ui/warp_outbound.png){data-zoomable}