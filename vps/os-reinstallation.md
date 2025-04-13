---
title: "How to Reinstall OS on a Server"
description: "A quick guide on how to reinstall OS on a server with hosting provider Senko Digital using the VM control panel."
head:
  - - meta
    - name: keywords
      content: os reinstallation, vps server install windows, change os, senko digital reinstall os
  - - meta
    - property: og:title 
      content: "How to Reinstall OS on a Server"
  - - meta
    - property: og:description
      content: "A quick guide on how to reinstall OS on a server with hosting provider Senko Digital using the VM control panel."
---

# How to Reinstall OS on a Server

There are situations when you need to erase all data from the server and reinstall the OS, or install a different operating system.

This can be done through the VM control panel, which is provided with each server.

::: tip **Tip**
Before reinstalling the OS, don't forget to save all important data from the server.
:::

## Accessing the Panel

To access the VM control panel, you can [log in to your personal area account](https://my.senko.digital/billmgr), go into the "Virtual Servers" tab, select any of the servers, and finally, click the "To panel" button:

<video width="1440" autoplay controls loop muted>
  <source src="/videos/vps/go-to-vm-panel.mp4" type="video/mp4" />
</video>

Alternatively, you can log in to the panel using the credentials provided in your first server activation email.

## Selecting the Desired Server

Select the desired server in the control panel, and click on the three dots next to its name (on the right side) to open the menu.

Select the "Reinstall OS" option.

## Reinstalling the Operating System

After entering the menu, you'll see the OS reinstallation window.

![OS reinstallation wizard](/images/vps/reinstall-wizard.png){data-zoomable}

Select your desired operating system.

::: warning **Please Note!**

When reinstalling the OS, a __new password__ is generated, which is always different from your current server password. If you need to keep the old password, you'll need to enter it in the "VM Password" field.

:::

In the password field, enter the desired password for server access. **It is mandatory** to use a password longer than 8 characters with special characters to prevent possible password guessing attempts on your server.

Optionally, you can enable or disable the option to send the password via email, but for security reasons, this option is recommended to be disabled.

**Done**! Within a few minutes, the operating system will be reinstalled on your server, and **all data on the server will be completely deleted**.
