---
title: "Отправка команд через Discord"
description: "Руководство по отправке команд на игровой сервер через Discord бота. Управление сервером прямо из Discord."
head:
  - - meta
    - name: keywords
      content: discord бот, отправка команд, управление сервером, senko bot, игровые сервера
  - - meta
    - property: og:title 
      content: "Discord бот - Отправка команд"
  - - meta
    - property: og:description
      content: "Руководство по отправке команд на игровой сервер через Discord бота. Управление сервером прямо из Discord."
---

# Отправка команд

С помощью бота вы можете отправлять команды на свой сервер из игровой панели управления.

Для использования команды нужно обязательно [авторизоваться в боте Discord](/ru/bot/auth).

Для использования команды достаточно проследовать указанному нами синтаксису команды и всё заработает.

Пример использования:

```lua
/send-command server_id: 64710835 command: start
```

![successful command sent to server](/images/bot/sent-command.png){data-zoomable}
