# 🔁 Статус любого сервера

С помощью бота вы можете просматривать статус любого игрового сервера, который им поддерживается.

Для использования команды авторизация в боте не требуется, достаточно следовать синтаксису команды и всё заработает.

## Поддерживаемые игры

На момент написания статьи ботом поддерживаются следующие игры:

- `garrysmod` (Garry's Mod)
- `csgo` (Counter-Strike 2)
- `css` (Counter-Strike: Source)
- `cs16` (Counter-Strike 1.6)
- `rust` (Rust)
- `minecraft` (любой Minecraft сервер)
- `tf2` (Team Fortress 2)
- `unturned` (Unturned)
- `mtasa` (Multi Theft Auto: San Andreas)
- `samp` (San Andreas Multiplayer)

Если вы считаете, что какой-то игры не хватает, и вы хотели бы увидеть её в нашем боте, вы можете сообщить об этом нашей команде разработчиков по e-mail адресу [`dev@senko.digital`](mailto:dev@senko.digital)

## Синтаксис команды

```lua
sen status [ip:port] [game]
```

Например

```lua
sen status 141.94.96.133:27015 garrysmod
```

отправит вот такое сообщение:

![sample autoupdate status of a random game server](/images/bot/autoupdate-status.png){data-zoomable}

::: tip
Команду можно использовать в любом канале, где у бота есть права на просмотр и отправку сообщений.
:::

Вы так же можете воспользоваться реакциями которые оставил бот у сообщения для перехода по различным вкладкам, среди которых есть список игроков и переменные (CVars) которые используются на игровом сервере:

Список игроков:

![sample player list of a random game server](/images/bot/any-status-players.png){data-zoomable}

Список CVars которые используются на сервере:

![sample cvars list of a random game server](/images/bot/any-status-cvars.png){data-zoomable}
