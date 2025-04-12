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

::: tip

If you've reinstalled the operating system on your server, be aware that the password will be different as it's automatically generated during the reinstallation process.
To avoid this, you can enter your previously used password in the reinstallation window, or choose to send an email with the new password by ticking the appropriate option in the reinstallation window.

:::

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

![ssh -v output on windows](/images/vps/ssh/from-windows/ssh-version.png){data-zoomable}

##### If SSH is not found

In case of an error that the command was not recognized or found (as shown in the screenshot below), it is recommended to try connecting to the server using [Method 2](/vps/how-to-connect-through-ssh#method-2-using-putty).

![no ssh on windows](/images/vps/ssh/from-windows/no-ssh-on-windows.png){data-zoomable}

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
ssh root@193.23.219.247 -p 22
```

![Example connection command to connect through SSH](/images/vps/ssh/from-windows/example-command-ssh.png){data-zoomable}

Press `[Enter]` to send the command.

![Confirm and trust first SSH connection](/images/vps/ssh/from-windows/confirm-connection-ssh.png){data-zoomable}

On first connection, a warning will appear - type `yes` to confirm and press `[Enter]`.

Now the program will ask you to enter the password.

![Enter SSH password blindly](/images/vps/ssh/from-windows/enter-password-ssh.png){data-zoomable}

::: warning Important
When entering a password in an SSH session, characters are not displayed on the screen - this is normal behavior for security. You'll have to enter the password "blindly".
:::

Enter the password and press `[Enter]`. If the password was entered correctly, the program will successfully establish a connection to your server.

![Successful SSH connection to server](/images/vps/ssh/from-windows/connection-established-ssh.png){data-zoomable}

Done, now you can start working with your server.

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
When entering a password in PuTTY, characters are not displayed on the screen - this is normal SSH protocol behavior. You'll have to enter the password "blindly".
:::

## Connecting from Linux and macOS

On Linux and macOS, it's even simpler as SSH is already built into the system:

1. Open Terminal (usually found in the applications menu or launched with Ctrl+Alt+T)

![find terminal in your system](/images/vps/ssh/find-terminal.png){data-zoomable}

2. Enter the command:

```bash
ssh username@ip-address -p port
```

For example:

```bash
ssh root@193.23.219.247 -p 22
```

![example of a ssh connection](/images/vps/ssh/example-ssh-macos-to-linux.png){data-zoomable}

Press `[Enter]` to send the command.

On first connection, a warning will appear - type `yes` to confirm and press `[Enter]`.

<video width="1440" autoplay controls loop muted>
  <source src="/videos/vps/ssh/ssh-confirmation.mp4" type="video/mp4" />
</video>

Now the program will ask you to enter the server password.

You can enter the password manually using the keyboard or paste it from the clipboard.

In our case, the server password was received from the VPS control panel email.

<video width="1440" autoplay controls loop muted>
  <source src="/videos/vps/ssh/ssh-finalize.mp4" type="video/mp4" />
</video>

::: warning Important
When entering a password in an SSH session, characters are not displayed on the screen - this is normal protocol behavior for security. You'll have to enter the password "blindly".
:::

Done, now you can manage your server directly from your PC!

## Connecting from Android/iOS

For mobile devices, there are special applications:

### Android

- [Termux](https://play.google.com/store/apps/details?id=com.termux&hl=en) (free)
- [Termius](https://play.google.com/store/apps/details?id=com.server.auditor.ssh.client&hl=en) (free with paid features)
- JuiceSSH (free with paid features)

### iOS

- [Termius](https://apps.apple.com/us/app/termius-modern-ssh-client/id549039908) (free with paid features)
- [iTerminal](https://apps.apple.com/us/app/iterminal-ssh-telnet-client/id581455211) (free with paid features)

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
