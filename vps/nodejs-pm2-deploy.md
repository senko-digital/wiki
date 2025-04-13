---
title: "Deploying Node.js Application on VPS with PM2"
description: "Detailed guide for setting up and deploying Node.js applications on a VPS using PM2 to ensure reliability and fault tolerance."
head:
  - - meta
    - name: keywords
      content: node.js, pm2, process manager, vps, application deployment, deploy, scaling, monitoring, nodejs, express, javascript
  - - meta
    - property: og:title 
      content: "Deploying Node.js Application on VPS with PM2"
  - - meta
    - property: og:description
      content: "Detailed guide for setting up and deploying Node.js applications on a VPS using PM2 to ensure reliability and fault tolerance."
---

# Deploying Node.js Application on VPS with PM2

In this guide, we'll cover the process of deploying a Node.js application on a VPS server using the PM2 process manager to ensure reliability, automatic restart, and application scaling.

## What is PM2 and why you should use it

PM2 (Process Manager 2) is an advanced process manager for Node.js applications that provides:

- Automatic restart when an application crashes
- Load balancing through clustering
- Real-time process monitoring
- Log management
- Automatic startup on system boot
- Zero-downtime deployment

## Prerequisites

- VPS server with Linux (Ubuntu 24 is used as an example)
- Root access
- Basic knowledge of Linux command line
- Node.js project ready for deployment

## Installing Node.js and npm

First, let's install Node.js and npm using NVM (Node Version Manager), which allows you to easily switch between different Node.js versions.

```bash
# Install curl if you don't have it
sudo apt update
sudo apt install curl

# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash

source ~/.bashrc

# Check if NVM was successfully installed
nvm --version

# Install the latest LTS version of Node.js
nvm install --lts

# Check Node.js and npm versions
node --version
npm --version
```

::: tip
It's recommended to use LTS (Long Term Support) versions of Node.js for mission-critical applications, as these versions provide long-term support and stability.
:::

## Installing PM2

Let's install PM2 globally for convenience:

```bash
npm install -g pm2
```

## Preparing the Node.js Application

### Cloning the project from a repository

Clone your project from a Git repository or upload it to the server manually:

```bash
# Clone the project
git clone https://github.com/username/your-project.git
cd your-project

# Install dependencies
npm install
```

## Configuring and launching the application with PM2

### Basic launch

The simplest way to start an application with PM2:

```bash
pm2 start app.js --name "my-app"
```

Where `my-app` is the name of your application, which you'll use to refer to PM2 for further management.

### Launching in cluster mode

To use multiple CPU cores and ensure high availability, you can use the following command:

```bash
# Automatically creates the optimal number of processes depending on the number of CPU cores
pm2 start app.js --name "my-app" -i max
```

Note: your application must support clustering.

### Creating a PM2 configuration file

For more detailed configuration, let's create an `ecosystem.config.js` file:

```bash
cat > ecosystem.config.js << 'EOL'
module.exports = {
  apps: [{
    name: "my-app",
    script: "app.js",
    instances: "max",
    exec_mode: "cluster",
    autorestart: true,
    watch: false,
    max_memory_restart: "200M",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
      PORT: 3000
    }
  }]
}
EOL
```

Starting the application using the configuration file:

```bash
pm2 start ecosystem.config.js --env production
```

## Configuring PM2 autostart on server reboot

To make your application start automatically when the server reboots, run the following command:

```bash
pm2 startup
```

Execute the command that PM2 displays in the console.

Then save the current list of processes:

```bash
pm2 save
```

Now your application(s) will start even after server reboot without manual intervention.

## Setting up Nginx as a reverse proxy

To provide public access to your application (for example, through a domain), you need to configure Nginx:

```bash
# Install Nginx
sudo apt install nginx

# Create a site configuration
sudo nano /etc/nginx/sites-available/my-app
```

Add the following configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Activate the configuration and restart Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/my-app /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

::: tip
After configuring Nginx, it's recommended to set up an SSL certificate using Let's Encrypt for secure connections. Instructions can be found in our [Let's Encrypt setup article](/vps/letsencrypt-ssl).
:::

## Basic PM2 commands

### Process monitoring

```bash
# Real-time monitoring
pm2 monit

# View the process list
pm2 list

# Detailed information about a process
pm2 show my-app
```

### Process management

```bash
# Restart the application
pm2 restart my-app

# Stop the application
pm2 stop my-app

# Remove the process from the PM2 list
pm2 delete my-app
```

### Working with logs

```bash
# View general logs from all applications
pm2 logs

# View logs for a specific application
pm2 logs my-app

# View the last 200 lines of logs
pm2 logs --lines 200
```

## Updating the application without downtime (Zero-Downtime Deployment)

To update the application without interrupting its operation:

1. Update the code (e.g., through git pull)
2. Perform an application reload:

```bash
pm2 reload my-app
```

## Monitoring and statistics

PM2 provides basic free monitoring, but for mission-critical applications, it's recommended to set up more advanced monitoring:

### PM2 Plus (paid solution)

```bash
pm2 plus
```

### Integration with Prometheus + Grafana

Install pm2-prometheus:

```bash
npm install -g pm2-prometheus
pm2 install pm2-prometheus
```

Then configure Prometheus to collect metrics from the `/metrics` endpoint and Grafana for data visualization.

## Troubleshooting

### Application won't start

Check the logs:

```bash
pm2 logs my-app
```

Common causes of problems:

- Errors in the application code
- Port already in use
- Insufficient file access permissions
- Dependencies not installed

### Application crashes under high load

- Check memory usage: `pm2 monit`
- Consider increasing the memory limit in the configuration
- Consider scaling the application across multiple servers
- Upgrade your server plan if resources are insufficient

### Problem: PM2 doesn't restart after server reboot

Reconfigure autostart:

```bash
pm2 unstartup
pm2 startup
pm2 save
```

## Conclusion

Proper configuration of a Node.js application with PM2 on a VPS ensures reliability, fault tolerance, and ease of management.

PM2 provides many tools for monitoring and managing processes, making it indispensable for your projects.

For additional help setting up your Node.js application on our VPS, contact our [support team](https://senko.digital/contacts).
