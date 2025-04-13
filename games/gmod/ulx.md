---
title: "Installing and Configuring ULX"
description: "Detailed guide on installing and configuring the ULX admin system on a Garry's Mod server. Managing administrator rights and commands."
head:
  - - meta
    - name: keywords
      content: gmod, ulx, ulib, admin system, garry's mod, admin rights
  - - meta
    - property: og:title
      content: "Garry's Mod - Installing and Configuring ULX"
  - - meta
    - property: og:description
      content: "Detailed guide on installing and configuring the ULX admin system on a Garry's Mod server. Managing administrator rights and commands."
---



# <GmodLogo>Installing and Configuring ULX</GmodLogo>

Quick guide to installing and configuring the **ULX** admin system on your Garry's Mod server.

## Introduction

**ULX** is a powerful administrative system for Garry's Mod servers that provides a wide range of server management capabilities.

In this guide, we'll cover the process of downloading and installing **ULX** and **ULib**, granting superadmin rights, and using the ULX interface.

## Downloading the Addons

First, you need to download **ULX** and **ULib** to your PC.

[**[Download ULib](https://github.com/TeamUlysses/ulib/archive/refs/heads/master.zip)**]

[**[Download ULX](https://github.com/TeamUlysses/ulx/archive/refs/heads/master.zip)**]

## Installing on the Server

1. Upload both archives to the `/garrysmod/addons/` path using the file manager in the control panel.
2. Right-click on the **ULib** archive, select the "extract" option. Delete the archive after extraction is complete. For convenience, you can rename the new folder to `ulib`, removing the `-master` suffix.
3. Extract the **ULX** archive, delete the archive after extraction, and also rename the folder to `ulx`, removing the `-master` suffix.

![ulx installed](/images/games/gmod/ulx-installed.png){data-zoomable}

After this, **ULX** and **ULib** will be installed on your server.

::: tip
The links are safe and point to the official GitHub repository from the original addon developer - **Team Ulysses**.
:::

## Initial ULX Setup

After installing **ULX** and **ULib**, you need to perform the initial setup of administrator privileges.

### Granting Superadmin Rights

By default, the list of superadmins and admins is empty. Let's fix that!

#### Granting Rights via Nickname

Go to your game server console and grant yourself superadmin rights using the command:

```
ulx adduser nickname superadmin
```

where `nickname` is your Steam nickname.

#### Granting Rights via SteamID

If your nickname is difficult to type, or you don't want to join the server to grant rights, you can also grant yourself superadmin rights using your SteamID.

You can get it using the website [steamid.xyz](https://steamid.xyz/)

Example command execution:

```lua
ulx adduserid STEAM_0:1:7099 superadmin
```

### Opening the Menu

In the game itself, you can use the ULX management menu - this is where administrator and regular user rights are configured, as well as various commands are executed.

You can open the menu using the console command (in the game):

```lua
ulx menu
```

#### Assigning a Key to Open the Menu

For more convenient menu access, you can also assign it to any key that works for you.

This is done using the following command:

```lua
bind [key] "ulx menu"
```

For example:

```lua
bind m "ulx menu"
```

Done! Now the menu will open without using extra console commands.

![ulx open](/images/games/gmod/ulx-open.jpg){data-zoomable}

Now you can proceed with further ULX configuration without unnecessary hassle.
