---
title: "Installing Minecraft Plugins"
description: "Guide for installing and configuring plugins on a Minecraft server. Support for PaperMC, CraftBukkit, Mohist, and other popular cores."
head:
  - - meta
    - name: keywords
      content: minecraft, plugins, bukkit, spigot, paper, mohist, minecraft plugins
  - - meta
    - property: og:title 
      content: "Minecraft - Installing Plugins"
  - - meta
    - property: og:description
      content: "Guide for installing and configuring plugins on a Minecraft server. Support for PaperMC, CraftBukkit, Mohist, and other popular cores."
---



# <MinecraftLogo>Installing Plugins</MinecraftLogo>

Quick guide for installing plugins on a Minecraft server.

***

::: tip
Plugins only work with corresponding cores, such as [PaperMC](https://papermc.io/), [CraftBukkit](https://getbukkit.org/), [Mohist](https://mohistmc.com/), and [Fabric](https://fabricmc.net/). For complete installation instructions, visit our [guide](/games/minecraft/core)
:::

Each plugin is created with a specific core in mind. For example, a plugin for PaperMC won't work with CraftBukkit, and vice versa. Therefore, before installation, make sure that the plugin you're going to install is compatible with your specific core.

To avoid errors and non-working plugins, use official resources for specific plugins, for example, for PaperMC it's [Hangar](https://hangar.papermc.io/), for CraftBukkit - [Bukkit](https://dev.bukkit.org/bukkit-plugins), Spigot - [Spigot resources](https://www.spigotmc.org/resources/categories/spigot.4/). We can also recommend [Modrinth](https://modrinth.com/plugins), which contains a large number of plugins for all popular cores.

### Downloading Plugins

In this guide, we'll use [Modrinth](https://modrinth.com/plugins) as an example, as we believe it's the most convenient.
Let's start with the filters.

The main filters are the core (platform) and server version.

![plugin filters](/images/games/minecraft/plugins/filters.png){data-zoomable}

After you've selected a plugin and gone to its page, click on the "Download" button.

![plugin download button](/images/games/minecraft/plugins/plugin-download-button.png){data-zoomable}

Next, a window will appear where you'll need to select the version and core (platform).

![plugin download popup](/images/games/minecraft/plugins/plugin-download-popup.png){data-zoomable}

### Installing the Plugin on the Server

After downloading the plugin, go to the server file management, then to the `plugins` folder, and upload the plugin file(s) there. In our case, it's `worldedit-bukkit-7.3.6.jar`.

![plugin upload to the server](/images/games/minecraft/plugins/file-upload.png){data-zoomable}

### Checking Plugin Functionality

After installing the server, you need to start the server to ensure it's working properly. After that, just type the `plugins` command in the console. If the newly installed plugin is in the list - that means the installation was successful!

![plugin working](/images/games/minecraft/plugins/plugin-working.png){data-zoomable}
