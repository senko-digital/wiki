---
title: "Статус любого сервера"
description: "Мониторинг статуса любых игровых серверов через Discord бота Senko Digital. Поддержка Garry's Mod, Minecraft, CS2 и других игр."
head:
  - - meta
    - name: keywords
      content: discord бот, статус сервера, мониторинг, gmod, minecraft, cs2, игровые сервера
  - - meta
    - property: og:title 
      content: "Discord бот - Статус любого сервера"
  - - meta
    - property: og:description
      content: "Мониторинг статуса любых игровых серверов через Discord бота Senko Digital. Поддержка Garry's Mod, Minecraft, CS2 и других игр."
---

# Статус любого сервера

С помощью бота вы можете просматривать статус любого игрового сервера, который им поддерживается.

Для использования команды авторизация в боте не требуется, достаточно следовать синтаксису команды и всё заработает.

## Поддерживаемые игры

На момент написания статьи ботом поддерживаются следующие игры:

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

Если вы считаете, что какой-то игры не хватает, и вы хотели бы увидеть её в нашем боте, вы можете сообщить об этом нашей команде разработчиков по e-mail адресу [`admin@senko.digital`](mailto:admin@senko.digital)

## Синтаксис команды

```lua
/server-status address: [ip:port] game: [game]
```

Например

```lua
/server-status address: 193.135.137.140:27015 game: CS:GO
```

Отправит вот такое сообщение:

![sample autoupdate status of a random game server](/images/bot/any-status.png){data-zoomable}

::: tip
Команду можно использовать в любом канале, где у бота есть права на просмотр и отправку сообщений.
:::

Вы так же можете воспользоваться реакциями которые оставил бот у сообщения для перехода по различным вкладкам, среди которых есть список игроков и переменные (CVars) которые используются на игровом сервере.
