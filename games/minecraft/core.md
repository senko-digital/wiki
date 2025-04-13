---
title: "Installing a Custom Core"
description: "Guide for installing and configuring custom cores on a Minecraft server. PaperMC, CraftBukkit, Mohist and other popular cores."
head:
  - - meta
    - name: keywords
      content: minecraft, paper, bukkit, spigot, mohist, fabric, forge, server core
  - - meta
    - property: og:title 
      content: "Minecraft - Installing a Custom Core"
  - - meta
    - property: og:description
      content: "Guide for installing and configuring custom cores on a Minecraft server. PaperMC, CraftBukkit, Mohist and other popular cores."
---



# <MinecraftLogo>Installing a Custom Core</MinecraftLogo>

Quick guide for installing a custom core on a Minecraft server.

***

First, you should decide which core you would like to install. Among the most popular, we can recommend [PaperMC](https://papermc.io/), [CraftBukkit](https://getbukkit.org/), [Mohist](https://mohistmc.com/), and [Fabric](https://fabricmc.net/). In this guide, we'll show you how to install PaperMC as an example.

## Downloading the Core

Go to the [PaperMC](https://papermc.io/) website, click on the "Downloads" button, then click on "Paper" and "Paper 1.21.1" (instead of 1.21.1, there could be any other, newer version)

![papermc website main page](/images/games/minecraft/core/papermc-main.png){data-zoomable}

![papermc website downloads page](/images/games/minecraft/core/papermc-downloads.png){data-zoomable}

![papermc website download page](/images/games/minecraft/core/papermc-download.png){data-zoomable}

## Uploading the Core to the Server

To upload the core, you need to go to the server control panel, then to "files," where you can use the "upload" button or simply drag and drop the server core file into the browser window.
After that, delete the old core (`server.jar`) and rename the new one to `server.jar`.

::: tip
You can also change the name of the file that will be executed by changing the value in the "startup parameters" using the "Server Jar File" option.
:::

## Checking Core Functionality on the Server

After installing the core, you need to start the server to ensure it's working properly.

![screenshot of the game panel](/images/games/minecraft/core/working-server.png){data-zoomable}
