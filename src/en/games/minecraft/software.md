---
title: "Installing Custom Server Software"
description: "A guide to installing and configuring custom server software for Minecraft. Includes PaperMC, CraftBukkit, Mohist, and other popular options."
head:
  - - meta
    - name: keywords
      content: minecraft, paper, bukkit, spigot, mohist, fabric, forge, server software
  - - meta
    - property: og:title 
      content: "Minecraft - Installing Custom Server Software"
  - - meta
    - property: og:description
      content: "A step-by-step guide to setting up custom server software for Minecraft: PaperMC, CraftBukkit, Mohist, and more."
---


# <MinecraftLogo>Installing Custom Server Software</MinecraftLogo>

A quick guide on how to install custom Minecraft server software.

***

First, decide which server software you'd like to install. Popular choices include [PaperMC](https://papermc.io/), [CraftBukkit](https://getbukkit.org/), [Mohist](https://mohistmc.com/), and [Fabric](https://fabricmc.net/). This guide will use PaperMC as an example.

## Downloading the Software

Visit the [PaperMC](https://papermc.io/) website. Click on the "Downloads" button, then select "Paper" and your desired version (for example, "Paper 1.21.1" — the version number may be higher if new releases are available).

![PaperMC website main page](/images/games/minecraft/software/papermc-main.png){data-zoomable}

![PaperMC downloads page](/images/games/minecraft/software/papermc-downloads.png){data-zoomable}

![PaperMC download page](/images/games/minecraft/software/papermc-download.png){data-zoomable}

## Uploading the Software to the Server

Stop the server and back up the world, plugins, and configuration before changing software. Check the Java requirement for the chosen release in the [Paper installation guide](https://docs.papermc.io/paper/getting-started/). This JAR replacement method is for Paper; Fabric, Forge, and other mod loaders may need their own installer and startup command.

In your server control panel, navigate to the "Files" section. Use the "Upload" button or drag and drop your server software file into your browser window.
Afterwards, rename the old `server.jar` file to `server.jar.bak` (if it exists) and rename your new PaperMC jar to `server.jar`.

::: tip
You can specify a different file to run by editing the "Server Jar File" option in the "Startup parameters" section.
:::

## Checking if the Server Works

Once you've uploaded and renamed the file, start your server to check that everything is working properly.

![Screenshot of the control panel showing a working server](/images/games/minecraft/software/working-server.png){data-zoomable}

That's it — you've installed custom server software for your Minecraft server.
