---
title: "Installing Addons from Workshop"
description: "Guide for installing and configuring addons from Steam Workshop on a Garry's Mod server. Managing the addon collection and configuration."
head:
  - - meta
    - name: keywords
      content: gmod, workshop, steam workshop, addons, mods, garry's mod, installing addons
  - - meta
    - property: og:title 
      content: "Garry's Mod - Installing Addons from Workshop"
  - - meta
    - property: og:description
      content: "Guide for installing and configuring addons from Steam Workshop on a Garry's Mod server. Managing the addon collection and configuration."
---

# <GmodLogo>Installing Your Collection</GmodLogo>

Quick guide for installing your collection on a Garry's Mod game server.

## Setting up the Collection on the Server Side

Go to the management panel of your server.

Navigate to the server startup parameters and find the "Workshop Collection ID" parameter.

Enter the numbers from the collection link, for example `248302805`.

Restart the server to apply the changes.

Done! Now when the server starts, it will download and check for updates on addons from your Steam Workshop collection.

## Setting up Addon Downloads for Players

Now you need to configure the `workshop.lua` file. Thanks to this, when connecting to the server, players will begin downloading addons directly from the Steam Workshop, without subscribing to the server's collection.

To generate this file, we'll use the [ConfigCreator](https://beta.configcreator.com/create/gmod/resources.lua) website.
