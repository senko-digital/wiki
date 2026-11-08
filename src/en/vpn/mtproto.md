---
title: "Setting Up Telegram MTProto Proxy in Docker"
description: "Step-by-step guide for deploying Telegram's official MTProto proxy server in a Docker container on your VPS."
head:
  - - meta
    - name: keywords
      content: telegram, mtproto, proxy, docker, mtproto proxy, telegram proxy, vps, container, privacy
  - - meta
    - property: og:title
      content: "Setting Up Telegram MTProto Proxy in Docker"
  - - meta
    - property: og:description
      content: "Step-by-step guide for deploying Telegram's official MTProto proxy server in a Docker container on your VPS."
---

# Setting Up Telegram MTProto Proxy in Docker

In this guide, we'll walk through deploying the official Telegram MTProto proxy server using Docker. MTProto proxy speaks Telegram's native protocol, making it a fast and reliable way to access Telegram in restricted networks.

## What is MTProto Proxy

MTProto Proxy is Telegram's own proxy protocol, purpose-built for the Telegram messaging platform. Unlike generic SOCKS5 or HTTP proxies, MTProto is designed specifically for Telegram traffic and offers several advantages:

- **Zero configuration** - the official Docker image handles everything automatically
- **Native protocol support** - no additional client-side software required, just paste a link into Telegram
- **Obfuscation** - traffic is encrypted and harder to detect compared to generic proxies
- **Multi-user** - a single proxy server can handle tens of thousands of simultaneous connections
- **Sponsor channels** - you can optionally promote a channel to all proxy users

::: tip
To install MTProto automatically, select its VPS script template when ordering your server, or run it from the VM control panel after your service is activated. The script installs and configures MTProto on your server.
:::

## Prerequisites

- VPS server with Linux (Ubuntu 24.04 is used as an example)
- Root or sudo access for manual installation
- Docker installed and running for manual installation
- Port 443 (or your chosen port) open in the firewall

::: tip
If you haven't installed Docker yet, follow the Docker installation steps from our [WireGuard Easy guide](/vpn/wireguard-easy#_2-install-docker-and-docker-compose) - the process is the same.
:::

## Installation

### Automatic Installation for Hosting Clients

Supported operating systems: Debian 11, Debian 12, Debian 13, Ubuntu 20.04, Ubuntu 22.04, Ubuntu 24.04.

#### During Service Order

In the order form, select the "MTProto" script template, complete the order, and wait for the script to finish running on your VPS.

![Selecting MTProto script during server ordering in the client area](/images/vpn/mtproto/client-area.png){data-zoomable}

After the script finishes, you will receive an email containing your MTProto proxy connection links and instructions.

#### Through the VM Panel

Go to the [VM control panel](https://vm.senko.digital), navigate to the management of the desired server, expand the "Menu" in the top right corner and select "Run script".

![Opening the Run script option from the VM panel menu](/images/vpn/mtproto/vm-run-script.png){data-zoomable}

In the dialog, select the "MTProto" script template, enable "Send email associated with script", and run the script.

![Run script wizard with MTProto selected and email notification enabled](/images/vpn/mtproto/script-wizard.png){data-zoomable}

After installation is complete, you will receive an email with your MTProto proxy connection links.

#### What Gets Installed

The script deploys the official Telegram MTProto proxy inside Docker. The container auto-generates a secret and connection links with zero configuration required.

After installation you receive:

- **connection-info.txt** — contains the `tg://` link, `t.me` web link, secret, server IP, and port

#### How to Connect

1. Open the `t.me` link from `connection-info.txt` in any browser — Telegram will offer to enable the proxy automatically
2. Or: in Telegram, go to **Settings → Advanced → Connection Type → Use Custom Proxy → MTProto**, and enter the server IP, port, and secret manually

#### Firewall

The script configures a **restrictive** firewall — only SSH and MTProto (`443/tcp`) are open. All other inbound traffic is dropped.

A daily restart at 04:00 UTC automatically refreshes Telegram core IP addresses.

#### Server Management

```bash
cd /opt/mtproto-docker && docker compose up -d    # start
cd /opt/mtproto-docker && docker compose down      # stop
cd /opt/mtproto-docker && docker compose logs -f   # logs
docker logs mtproto_proxy                          # view connection links
```

### Manual Installation

If you already ran the "MTProto" script template, skip this installation method and use the connection details it provided.

Run the server commands as root (`sudo -i`), or use sudo for Docker commands. MTProto proxies only Telegram traffic; it is not a VPN for other apps.

## Installing Docker (Quick Reference)

If Docker is not installed yet, the easiest way is to use the official convenience script:

```bash
curl -sSL https://get.docker.com/ | CHANNEL=stable bash
```

This will automatically detect your Linux distribution and install the latest stable version of Docker.

## Deploying the MTProto Proxy

### Basic Deployment

The simplest way to launch the proxy with a single command:

```bash
docker run -d \
  -p 443:443 \
  --name=mtproto-proxy \
  --restart=always \
  -v proxy-config:/data \
  telegrammessenger/proxy:latest
```

This will:
- Run the container in detached mode (`-d`)
- Map port 443 on the host to port 443 in the container
- Name the container `mtproto-proxy` for easy management
- Automatically restart the container if it stops or the server reboots
- Persist the configuration (including the secret) in a Docker volume

### Getting Your Connection Links

After starting the container, check the logs to get the proxy connection links:

```bash
docker logs mtproto-proxy
```

You'll see output similar to this:

```
[+] No secret passed. Will generate 1 random ones.
[+] Saving generated secret to /data/secret.
[*] Final configuration:
[*]   Secret 1: 00baadf00d15abad1deaa515baadcafe
[*]   tg:// link for secret 1 auto configuration: tg://proxy?server=YOUR_IP&port=443&secret=00baadf00d15abad1deaa515baadcafe
[*]   t.me link for secret 1: https://t.me/proxy?server=YOUR_IP&port=443&secret=00baadf00d15abad1deaa515baadcafe
[*]   Tag: no tag
[*]   External IP: YOUR_IP
```

Copy either the `tg://` or `t.me` link and paste it into Telegram on any device - the proxy will be configured automatically.

::: warning
Make sure the IP address in the link matches your server's public IP. If you run the proxy behind NAT, you may need to adjust the links manually.
:::

## Custom Configuration

The examples below are alternative deployments. If `mtproto-proxy` already exists, save its settings and stop and remove that container before recreating it. Keep the `proxy-config` volume. Generate your own secrets; the values below are examples only.

### Setting a Custom Secret

If you want to use your own secret (useful when deploying multiple proxies with load balancing), pass it as an environment variable. The secret must be exactly 16 bytes in lowercase hexadecimal (32 characters).

You can generate a random secret with:

```bash
openssl rand -hex 16
```

Then pass it to the container:

```bash
docker run -d \
  -p 443:443 \
  --name=mtproto-proxy \
  --restart=always \
  -v proxy-config:/data \
  -e SECRET=00baadf00d15abad1deaa515baadcafe \
  telegrammessenger/proxy:latest
```

### Multiple Secrets

The proxy supports up to 16 different secrets. You can either specify them explicitly as comma-separated values, or let the container generate a specific number of secrets:

```bash
# Specify multiple secrets explicitly
docker run -d \
  -p 443:443 \
  --name=mtproto-proxy \
  --restart=always \
  -v proxy-config:/data \
  -e SECRET=935ddceb2f6bbbb78363b224099f75c8,2084c7e58d8213296a3206da70356c81 \
  telegrammessenger/proxy:latest
```

```bash
# Auto-generate 4 secrets
docker run -d \
  -p 443:443 \
  --name=mtproto-proxy \
  --restart=always \
  -v proxy-config:/data \
  -e SECRET_COUNT=4 \
  telegrammessenger/proxy:latest
```

### Using a Custom Port

You can forward any host port to the container's internal port 443. For example, to use port 8443:

```bash
docker run -d \
  -p 8443:443 \
  --name=mtproto-proxy \
  --restart=always \
  -v proxy-config:/data \
  telegrammessenger/proxy:latest
```

::: warning
If you change the external port, you must manually update the port number in the `tg://` and `t.me` links from the container logs.
:::

### Adding a Sponsor Channel Tag

You can register your proxy with Telegram's [@MTProxybot](https://t.me/MTProxybot) to receive a promotion tag. This tag allows you to display a sponsored channel to all users connected through your proxy:

```bash
docker run -d \
  -p 443:443 \
  --name=mtproto-proxy \
  --restart=always \
  -v proxy-config:/data \
  -e TAG=3f40462915a3e6026a4d790127b95ded \
  telegrammessenger/proxy:latest
```

::: tip
The tag is **not persistent** - you must pass it as an environment variable every time the container is recreated. The secret, on the other hand, is saved in the volume and persists across restarts.
:::

### Adjusting Worker Count

A single worker process can handle tens of thousands of connections. By default, the proxy runs 2 workers with a limit of 60,000 connections per core. If you expect high traffic, increase the worker count:

```bash
docker run -d \
  -p 443:443 \
  --name=mtproto-proxy \
  --restart=always \
  -v proxy-config:/data \
  -e WORKERS=16 \
  telegrammessenger/proxy:latest
```

Docker publishes the container port using its own firewall rules. Published ports can bypass UFW filtering; see [Docker and UFW](https://docs.docker.com/engine/network/packet-filtering-firewalls/#docker-and-ufw) before relying on UFW to restrict access.

## Opening the Firewall Port

If you're using UFW (Uncomplicated Firewall), allow traffic on the proxy port:

```bash
# For default port 443
sudo ufw allow 443/tcp

# For a custom port (e.g. 8443)
sudo ufw allow 8443/tcp
```

## Registering Your Proxy with Telegram

To gain access to usage statistics and optional monetization:

1. Open Telegram and search for [@MTProxybot](https://t.me/MTProxybot)
2. Send the `/newproxy` command
3. Provide your server's IP address and port
4. Provide your proxy secret
5. The bot will give you a **tag** - use it with the `TAG` environment variable as shown above

## Connecting Clients

### On Mobile (Android / iOS)

1. Open the `tg://` or `t.me` link from the container logs in your browser
2. Telegram will open and offer to enable the proxy
3. Tap **Connect**

### On Desktop (Telegram Desktop)

1. Open the `tg://` or `t.me` link
2. Telegram Desktop will prompt you to add the proxy
3. Click **Enable**

### Manual Configuration

If you prefer to configure the proxy manually:

1. Go to **Settings** > **Advanced Settings** > **Connection Type** > **Use Custom Proxy**
2. Select **MTProto**
3. Enter your server IP, port, and secret
4. Tap **Save** and then **Connect**

## Managing the Container

### Common Commands

```bash
# View container status
docker ps -a | grep mtproto-proxy

# View logs
docker logs mtproto-proxy

# Follow logs in real-time
docker logs -f mtproto-proxy

# Stop the proxy
docker stop mtproto-proxy

# Start the proxy
docker start mtproto-proxy

# Restart the proxy
docker restart mtproto-proxy

# Remove the container (data is preserved in the volume)
docker rm -f mtproto-proxy
```

### Updating the Proxy

Save the current port mapping and any `SECRET`, `TAG`, or `WORKERS` settings first. Reuse them when recreating the container; the command below shows the basic configuration:

```bash
# Pull the latest image
docker pull telegrammessenger/proxy:latest

# Remove the old container
docker rm -f mtproto-proxy

# Start a new container (the secret is preserved in the volume)
docker run -d \
  -p 443:443 \
  --name=mtproto-proxy \
  --restart=always \
  -v proxy-config:/data \
  telegrammessenger/proxy:latest
```

### Monitoring

The proxy exposes internal statistics at `http://localhost:2398/stats` inside the container. To view them:

```bash
docker exec mtproto-proxy curl http://localhost:2398/stats
```

Key metrics to watch:

| Metric | Description |
|---|---|
| `ready_targets` | Number of Telegram core servers the proxy will try to connect to |
| `active_targets` | Number of Telegram core servers actually connected (should equal `ready_targets`) |
| `total_special_connections` | Number of currently connected clients |
| `total_max_special_connections` | Maximum allowed connections (60,000 x worker count) |

## Automatic Daily Restart

The proxy fetches Telegram core IP addresses at startup. These addresses can change, so it's recommended to restart the container once a day to keep the list up to date:

```bash
# Open the crontab editor
crontab -e
```

Add the following line to restart the proxy every day at 4:00 AM in the server's configured timezone:

```
0 4 * * * docker restart mtproto-proxy
```

## Troubleshooting

### Clients Stuck on "Connecting"

This means clients cannot reach your proxy server. Check the following:

- **Firewall**: Make sure the proxy port (443 or your custom port) is open
  ```bash
  sudo ufw status
  ```
- **Docker port mapping**: Verify the container is running and the port is mapped correctly
  ```bash
  docker ps
  ```
- **Network restrictions**: Some networks may block port 443 for non-HTTPS traffic. Try using a different port

### Clients Stuck on "Updating"

This means the proxy cannot reach Telegram's core servers. Check:

- **Outbound firewall**: Ensure your server can make outbound connections
  ```bash
  curl -I https://telegram.org
  ```
- **System time**: The proxy requires the system clock to be within 5 seconds of UTC. Install and enable time synchronization:
  ```bash
  sudo apt install systemd-timesyncd
  sudo timedatectl set-ntp true
  timedatectl status
  ```
- **Restart the container**: The Telegram core IP addresses may have changed since the container started
  ```bash
  docker restart mtproto-proxy
  ```

### Container Exits Immediately

Check the container logs for errors:

```bash
docker logs mtproto-proxy
```

Common causes:
- Port 443 is already in use by another service (e.g. Nginx, Apache)
- Invalid environment variables, file permissions, or configuration errors. Check the log message before changing data. Do not delete `proxy-config` as a general troubleshooting step: it stores your secrets, and deleting it can invalidate existing client links.

## Conclusion

Setting up an MTProto proxy is straightforward with Docker - a single command gets you a fully functional proxy server. Remember to restart the container daily and keep your system updated for the best reliability.

For additional help, contact our [support team](https://senko.digital/contacts).
