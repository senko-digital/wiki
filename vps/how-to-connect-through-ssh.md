---
title: "How to connect to the server (Linux)"
description: "A quick guide to connecting to a Linux server via SSH for beginners. Detailed instructions for Windows, Linux, and mobile devices."
head:
  - - meta
    - name: keywords
      content: server connection, ssh access, connect to linux server, ssh for beginners
  - - meta
    - property: og:title 
      content: "How to connect to the server (Linux)"
  - - meta
    - property: og:description
      content: "A quick guide to connecting to a Linux server via SSH for beginners. Detailed instructions for Windows, Linux, and mobile devices."
---

# How to connect to the server (Linux)

## What is SSH and why do we need it?

SSH (Secure Shell) is a special protocol that allows you to securely connect to and manage remote computers over the internet. Imagine being able to sit at your computer while working on another computer that's located somewhere far away - that's what SSH does.

::: tip Important to know

- SSH provides a secure connection - all data is transmitted in encrypted form
- You need the following to connect: server IP address, username, and password
- By default, SSH operates on port `22`, but this can be changed
:::

## Preparation for connection

Before you begin, make sure you have:

1. Server IP address (e.g., `192.168.1.100`)
2. Username on the server (usually `root`)
3. Password for this user
4. SSH port (if it's different from the default `22`)

## Connecting from Windows

### Method 1: Through Command Prompt (CMD)

::: tip For Windows 10 and newer
In newer versions of Windows, SSH is already built into the system, and you don't need to install anything additional.
:::

#### Checking SSH availability

1. Open Command Prompt (press Win+R, type `cmd` and press Enter)
2. Check if SSH is installed by running the command:

```bash
ssh -V
```

Should display:

![ssh -v output](/images/vps/ssh-version.png){data-zoomable}

#### Connecting to the server

Use the following command to connect:

```bash
ssh username@ip-address -p port
```

where `username` - username, default is `root`
where `ip-address` - IPv4 address of your server
where `port` - SSH port on your server, default is 22

For example:

```bash
ssh admin@192.168.1.100 -p 22
```

::: tip
The `-p` parameter is optional when using the default SSH server port.
:::

::: warning Important
When entering a password in an SSH session, characters are not displayed on the screen - this is normal behavior for security. Just type the password and press Enter.
:::

### Method 2: Using PuTTY

PuTTY is a free program for connecting to servers via SSH. It's especially useful if you have an older version of Windows.

1. Download PuTTY from the [official website](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)
2. Install the program
3. Launch PuTTY
4. In the "`Host Name`" field, enter the server's IP address
5. In the "`Port`" field, specify the port (usually `22`)
6. Click "`Open`"
7. On first connection, a warning will appear - click "Yes"
8. Enter the server username and password

::: warning Important
When entering a password in PuTTY, characters are not displayed on the screen - this is normal SSH protocol behavior. Just type the password and press `[Enter]`.
:::

## Connecting from Linux and macOS

On Linux and macOS, it's even simpler as SSH is already built into the system:

1. Open Terminal (usually found in the applications menu or launched with Ctrl+Alt+T)

2. Enter the command:

```bash
ssh username@ip-address -p port
```

For example:

```bash
ssh admin@192.168.1.100 -p 22
```

::: warning Important
When entering a password in an SSH session, characters are not displayed on the screen - this is normal protocol behavior for security. Just type the password and press `[Enter]`.
:::

## Connecting from Android/iOS

For mobile devices, there are special applications:

### Android

- Termux (free)
- Termius (free with paid features)
- JuiceSSH (free with paid features)

### iOS

- Termius (free with paid features)
- iTerminal (paid)

## What to do if you can't connect?

1. Check the IP address is correct
2. Make sure the username and password are entered correctly
3. Verify that the SSH port is open on the server
4. Ensure the server is turned on and accessible
5. Check your internet connection
6. Make sure there are no restrictions from your provider or network

## Security when working with SSH

::: warning Important

- Never share your credentials with others
- Use strong passwords
- Change passwords regularly
- Use SSH keys instead of passwords when possible
:::

## Additional tips

1. If you frequently connect to the same server, create an SSH configuration file
2. Use SSH keys for more secure connections
3. Configure automatic disconnection when idle
4. Keep a connection log to track activity

## Where to get help?

If you encounter connection issues, you can contact [our support](https://senko.digital/contacts), we'll be happy to help.
