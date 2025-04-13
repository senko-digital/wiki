---
title: "Auto-updating Status"
description: "Setting up automatic game server status updates in Discord. Real-time server monitoring."
head:
  - - meta
    - name: keywords
      content: discord bot, auto-update status, server monitoring, senko bot, game servers
  - - meta
    - property: og:title 
      content: "Discord Bot - Auto-updating Status"
  - - meta
    - property: og:description
      content: "Setting up automatic game server status updates in Discord. Real-time server monitoring."
---

# 🔁 Auto-updating Status

With our bot, you can also send a message that will automatically update the status of any game server.

The command works the same way as [**[🔁 Any Server Status](/bot/any-status)**] - the only difference is the command itself.

Authorization in the bot is not required to use this command, just follow the command syntax and everything will work.

## Command Syntax

```lua
/refresh-status [ip:port] [game]
```

For example

```lua
/refresh-status 193.135.137.140:27015 garrysmod
```

Will send a message like this:

![sample status of a random game server](/images/bot/any-status.png){data-zoomable}

::: tip
The command can be used in any channel where the bot has permissions to view, send, edit, and delete messages.
:::

## Removing Auto-updating Status

To remove the auto-updating status, you must use this command:

```lua
/remove-refresh
```

![remove refreshable status](/images/bot/remove-status.png){data-zoomable}

::: danger
You should not delete the message with the status itself, otherwise you won't be able to create a new message of this type until you enter the command above.
:::
