---
title: "Garry's Mod Server Guide"
description: "Complete guide to setting up and configuring a Garry's Mod server. Learn about server configuration, addon installation, and optimization."
head:
  - - meta
    - name: keywords
      content: garry's mod server, gmod hosting, server configuration, addons, workshop, server.cfg, gamemode
  - - meta
    - property: og:title
      content: "Garry's Mod Server Guide"
  - - meta
    - property: og:description
      content: "Complete guide to setting up and configuring a Garry's Mod server. Learn about server configuration, addon installation, and optimization."
---

# Setting Up a Garry's Mod Server

This guide will help you set up and configure your own Garry's Mod server from scratch.

## Basic Server Configuration

### Setting Up server.cfg

The primary configuration file for your Garry's Mod server is `server.cfg`. This file contains settings that define how your server will operate.

Create or edit the file at:
```
garrysmod/cfg/server.cfg
```

Here's a basic configuration example:

```cfg
// Server Information
hostname "My Awesome Garry's Mod Server"
sv_password ""  // Leave empty for public server
rcon_password "YOUR_SECURE_PASSWORD_HERE"
sv_region 255
sv_lan 0
sv_allowupload 1
sv_allowdownload 1

// Network Settings
sv_maxrate 40000
sv_minrate 10000
sv_maxupdaterate 66
sv_minupdaterate 33

// Game Settings
sbox_godmode 0
sbox_plpldamage 1
sbox_noclip 1
sbox_maxprops 150
sbox_maxragdolls 10
sbox_maxnpcs 10
sbox_maxballoons 10
sbox_maxeffects 10
sbox_maxdynamite 10
sbox_maxlamps 10
sbox_maxthrusters 10
sbox_maxwheels 10
sbox_maxhoverballs 10
sbox_maxvehicles 10
sbox_maxbuttons 10
sbox_maxemitters 10

// Logging
log on
sv_logbans 1
sv_logecho 1
sv_logfile 1
sv_log_onefile 0

// Load banned users
exec banned_user.cfg
exec banned_ip.cfg
```

Customize these settings to your preferences. For a more advanced setup, you can find additional configuration options in the [Valve Developer Wiki](https://developer.valvesoftware.com/wiki/Garrys_Mod_Dedicated_Server).

### Setting the Gamemode

To set your server's gamemode, add the following line to your `server.cfg`:

```cfg
gamemode "sandbox"  // Replace with your desired gamemode
```

Common gamemodes include:
- `sandbox` - The default creative mode
- `terrortown` - Trouble in Terrorist Town
- `darkrp` - DarkRP roleplay
- `zombiesurvival` - Zombie Survival
- `prophunt` - Prop Hunt

For custom gamemodes, make sure they're installed in the proper directory.

## Installing Addons and Workshop Content

### Manual Addon Installation

To install addons manually:

1. Access your server's files via FTP
2. Navigate to `garrysmod/addons/`
3. Upload your addon folders to this directory
4. Restart your server

### Workshop Collection

For Workshop content, create a collection on Steam Workshop and use its ID:

1. Add the collection ID to your server startup parameters:
```
+host_workshop_collection 123456789
```

2. You can also subscribe to individual items:
```
+workshop_download_item 4000 123456789
```

### Resource Downloading

To enable clients to download custom content:

```cfg
resource.AddWorkshop("123456789")  // Add to your server.cfg or autorun file
```

## Server Optimization

### Lag Reduction

To reduce server lag, add these settings to your `server.cfg`:

```cfg
// Performance Settings
fps_max 300
sv_minrate 100000
sv_maxrate 1000000
sv_mincmdrate 100
sv_maxcmdrate 100
net_maxfilesize 64
```

### Memory Management

For better memory management, especially for servers with many addons:

```cfg
mem_max_heapsize 2048  // Adjust based on your server's RAM
mem_max_heapsize_dedicated 2048
```

## Administration and Moderator Tools

For server administration, we recommend installing ULX (Ulysses' Library Extended) and ULib. These provide comprehensive admin commands and permissions.

See our [ULX Installation Guide](/games/gmod/ulx) for detailed instructions.

## Fastdownload Setup

To speed up content downloading for your players:

1. Create a website for hosting your content
2. Add these lines to your `server.cfg`:

```cfg
sv_downloadurl "http://your-website.com/fastdl"
sv_allowdownload 1
sv_allowupload 1
```

3. Upload your custom content to your website in the same folder structure as your server

## Troubleshooting Common Issues

### Server Won't Start

Check the following:
- Correct port forwarding (default 27015)
- No file permission issues
- Sufficient RAM and CPU resources
- Valid gamemode name

### Players Can't Connect

Verify:
- Correct IP and port
- No firewall blocking
- Server is visible in the server browser
- If using a password, it's correctly set

### Missing Content (Purple/Black Textures)

Ensure:
- Workshop collection is properly configured
- `resource.AddWorkshop` is correct
- Fastdownload is properly set up

### Poor Performance

To improve:
- Reduce max props and effects
- Limit addons to necessary ones
- Increase server resources
- Use the optimization settings above

## Advanced Configuration

For more advanced server configuration, including custom gamemodes, scripting, and database setup, see our detailed guides:

- [Map Rotation Setup](/games/gmod/map)
- [MySQL Database Configuration](/games/gmod/mysql)
- [Lua Scripting Basics](/games/gmod/lua)

## Need Help?

If you need additional assistance with your Garry's Mod server, contact our support team or visit our community forums where experienced server administrators can help troubleshoot specific issues.
