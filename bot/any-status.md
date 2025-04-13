---
title: "Any Server Status"
description: "Monitoring any game server status through Senko Digital Discord bot. Support for Garry's Mod, Minecraft, CS2, and other games."
head:
  - - meta
    - name: keywords
      content: discord bot, server status, monitoring, gmod, minecraft, cs2, game servers
  - - meta
    - property: og:title 
      content: "Discord Bot - Any Server Status"
  - - meta
    - property: og:description
      content: "Monitoring any game server status through Senko Digital Discord bot. Support for Garry's Mod, Minecraft, CS2, and other games."
---

# 🔁 Any Server Status

With the bot, you can view the status of any game server that it supports.

Bot authorization is not required to use this command, just follow the command syntax and everything will work.

## Supported Games

At the time of writing this article, the bot supports the following games:

- Garry's Mod
- Counter-Strike 2
- Counter-Strike: Source
- Counter-Strike 1.6
- Rust
- Minecraft
- Team Fortress 2
- Unturned
- Multi Theft Auto: San Andreas
- San Andreas Multiplayer
- Half-Life: Deathmatch
- Half-Life 2: Deathmatch

If you believe that a game is missing and you would like to see it in our bot, you can contact our development team via the email address [`admin@senko.digital`](mailto:admin@senko.digital)

## Command Syntax

```lua
/server-status address: [ip:port] game: [game]
```

For example

```lua
/server-status address: 193.135.137.140:27015 game: CS:GO
```

Will send a message like this:

![sample autoupdate status of a random game server](/images/bot/any-status.png){data-zoomable}

::: tip
The command can be used in any channel where the bot has permissions to view and send messages.
:::

You can also use the reactions that the bot leaves on the message to navigate through different tabs, including the player list and variables (CVars) used on the game server.
