---
title: "Setting Up Let's Encrypt for Automatic SSL Certificate Renewal"
description: "Detailed guide on configuring free Let's Encrypt SSL certificates with automatic renewal on your VPS server."
head:
  - - meta
    - name: keywords
      content: lets encrypt, ssl certificate, https, automatic certificate renewal, certbot, vps, nginx, apache, security, encryption
  - - meta
    - property: og:title 
      content: "Setting Up Let's Encrypt for Automatic SSL Certificate Renewal"
  - - meta
    - property: og:description
      content: "Detailed guide on configuring free Let's Encrypt SSL certificates with automatic renewal on your VPS server."
---

# Setting Up Let's Encrypt for Automatic SSL Certificate Renewal

In this guide, we'll look at how to set up free SSL certificates from Let's Encrypt with automatic renewal for your web server on a VPS.

## What is Let's Encrypt and Why It Matters

Let's Encrypt is a free, automated, and open certificate authority that provides SSL certificates for encrypting connections via HTTPS.

Using HTTPS has several advantages:

- Protection of user data during information transmission
- Improved search engine rankings (Google, Yandex, and other search engines prioritize HTTPS sites)
- Increased visitor trust
- Support for modern web technologies (HTTP/2, WebSockets, etc.)

## Prerequisites

- VPS with Linux OS installed (Ubuntu 24 used as an example)
- Already configured web server (Nginx or Apache)
- Domain name pointing to your server's IP address
- SSH access to the server with root privileges

## Installing Certbot

Certbot is a utility that interacts with Let's Encrypt to obtain certificates and configure your web server.

::: code-group

```bash [Ubuntu/Debian]
# Installing Certbot
sudo apt update -y
sudo apt install certbot -y

# Installing plugin for Nginx
sudo apt install python3-certbot-nginx -y

# Installing plugin for Apache
sudo apt install python3-certbot-apache -y
```

```bash [CentOS/RHEL]
# Installing EPEL repository
sudo dnf install epel-release

# Installing Certbot
sudo dnf install certbot

# Installing plugin for Nginx
sudo dnf install python3-certbot-nginx

# Installing plugin for Apache
sudo dnf install python3-certbot-apache
```

```bash [Fedora]
# Installing Certbot
sudo dnf install certbot

# Installing plugin for Nginx
sudo dnf install python3-certbot-nginx

# Installing plugin for Apache
sudo dnf install python3-certbot-apache
```

:::

## Obtaining a Certificate

::: code-group

```bash [Nginx]
# Obtaining a certificate for Nginx
sudo certbot --nginx -d example.com -d www.example.com
```

```bash [Apache]
# Obtaining a certificate for Apache
sudo certbot --apache -d example.com -d www.example.com
```

:::

::: tip
Replace `example.com` and `www.example.com` with your domain names. You can specify multiple domains by adding the `-d domain` parameter for each new domain you want to issue an SSL certificate for.
:::

Certbot will ask you to provide an email for notifications, accept the terms of service, and choose whether you want to redirect HTTP to HTTPS.

You can also omit the email address by adding the `--register-unsafely-without-email` parameter.

## Verifying Automatic Renewal

Let's Encrypt issues certificates that are only valid for 90 days, so automatic certificate renewal is critical to ensure your site operates without interruption.

Check if automatic renewal is configured:

```bash
sudo systemctl list-timers | grep certbot
```

If the timer doesn't exist, you'll need to create it manually:

```bash
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
```

You can also check the correctness of existing settings by running a test certificate renewal:

```bash
sudo certbot renew --dry-run
```

## Configuring Your Web Server for Optimal SSL Usage

### Optimizing Nginx

Create a file with SSL settings to include in server configurations:

```bash
sudo nano /etc/nginx/snippets/ssl-params.conf
```

And add the following parameters:

```nginx
ssl_protocols TLSv1.2 TLSv1.3;
ssl_prefer_server_ciphers on;
ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
ssl_session_cache shared:SSL:10m;
ssl_session_timeout 1h;
ssl_session_tickets off;
ssl_stapling on;
ssl_stapling_verify on;
resolver 8.8.8.8 8.8.4.4 valid=300s;
resolver_timeout 5s;
add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload";
add_header X-Frame-Options DENY;
add_header X-Content-Type-Options nosniff;
add_header X-XSS-Protection "1; mode=block";
```

And include it in your server configuration:

```nginx
server {
    listen 443 ssl http2;
    server_name example.com www.example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    include snippets/ssl-params.conf;
    
    # Your configuration below
}
```

### Optimizing Apache

For Apache, create or edit the file:

```bash
sudo nano /etc/apache2/conf-available/ssl-params.conf
```

And add the following parameters:

```apache
SSLProtocol -all +TLSv1.2 +TLSv1.3
SSLHonorCipherOrder on
SSLCipherSuite ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384
SSLSessionCache shmcb:${APACHE_LOG_DIR}/ssl_scache(512000)
SSLSessionTickets off
SSLUseStapling on
SSLStaplingCache "shmcb:${APACHE_LOG_DIR}/ocsp(1048576)"
Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
Header always set X-Frame-Options DENY
Header always set X-Content-Type-Options nosniff
Header always set X-XSS-Protection "1; mode=block"
```

Enable the necessary modules and configuration:

```bash
sudo a2enmod ssl headers http2
sudo a2enconf ssl-params
sudo systemctl restart apache2
```

## Troubleshooting

### Certificate Has Expired

If your certificate has expired, perform a forced renewal:

```bash
sudo certbot renew --force-renewal
```

### Certbot Cannot Verify Domain Ownership

- Make sure DNS records are correctly configured and point to your IP
- Check that ports 80 and 443 are open in the firewall
- Ensure the web server is properly configured and running

```bash
sudo ufw status
sudo systemctl status nginx # or apache2
```

### Errors in Web Server Configuration Files

Check the configuration for errors:

**For Nginx:**

```bash
sudo nginx -t
```

**For Apache:**

```bash
sudo apachectl configtest
```

If errors occur, we recommend carefully reviewing them and correcting the configuration files to resolve the issue.

## Conclusion

Setting up automatic SSL certificate renewal with Let's Encrypt is a reliable and free way to secure your website. With proper configuration, certificates will be renewed automatically, freeing you from the need to monitor expiration dates and manually renew them.

If you have any questions or issues, you can always contact our [support team](https://senko.digital/contacts).
