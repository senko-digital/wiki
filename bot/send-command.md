---
title: "Sending Commands via Discord"
description: "Guide to sending commands to a game server through Discord bot. Control your server directly from Discord."
head:
  - - meta
    - name: keywords
      content: discord bot, sending commands, server management, senko bot, game servers
  - - meta
    - property: og:title 
      content: "Discord Bot - Sending Commands"
  - - meta
    - property: og:description
      content: "Guide to sending commands to a game server through Discord bot. Control your server directly from Discord."
---

# 📩 Sending Commands

With the bot, you can send commands to your server from the game control panel.

To use this command, you must first [authorize with the Discord bot](/bot/auth).

To use the command, simply follow the syntax we've provided and everything will work.

Example usage:

```lua
/send-command server_id: 64710835 command: start
```

![successful command sent to server](/images/bot/sent-command.png){data-zoomable}
