---
title: "Discord Bot Authorization"
description: "Guide for authorizing with the Senko Digital Discord bot. Connecting the bot to the control panel for server monitoring."
head:
  - - meta
    - name: keywords
      content: discord bot, authorization, api token, senko bot, game panel, server monitoring
  - - meta
    - property: og:title 
      content: "Discord Bot - Authorization"
  - - meta
    - property: og:description
      content: "Guide for authorizing with the Senko Digital Discord bot. Connecting the bot to the control panel for server monitoring."
---

# 👤 Authorization

Setting up ~~telepathic connection with foxes~~ the connection between the panel and our Discord bot.

## Creating an API Token

First, you need to log into our [game control panel](https://panel.senko.digital).

Go to the **"account management"** tab by clicking on the avatar in the top menu, then navigate to the **"[API credentials](https://panel.senko.digital/account/api)"** tab:

![api token creation](/images/bot/api-menu.png){data-zoomable}

In the description field, enter any name that will make sense to you when using API keys.

It's recommended to **leave the "allowed IPs" field empty**.

![api token params](/images/bot/api-params.png){data-zoomable}

Create a new key.

![api token generated](/images/bot/api-generated.png){data-zoomable}

It's recommended to save the generated key in a secure location, such as a password manager, so that you can re-authorize using the same token if needed.

::: danger
Never share the key with third parties - this key can be used to control server power and send commands to it.
:::

## Bot Authorization

Now you need to authorize with this key in our Discord bot.

Go to direct messages with the bot `senko//bot#4900` - you can find it on [our Discord server](https://snk.wtf/d).

Send the command `/auth API-key`, where `API-key` should be the key you generated for authorization in the bot.

![successfully authenticated](/images/bot/authenticated.png){data-zoomable}

Success! Telepathic connection with foxes has been successfully established! :fox_face:

Now you can control power and send commands to your game servers from the control panel, as well as set up auto-updating status in any convenient channel on your Discord server.
