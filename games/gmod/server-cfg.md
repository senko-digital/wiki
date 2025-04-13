---
title: "Configuring server.cfg"
description: "Complete guide for configuring the server.cfg file in Garry's Mod. Performance optimization and server parameter settings."
head:
  - - meta
    - name: keywords
      content: gmod, server.cfg, server configuration, server setup, garry's mod
  - - meta
    - property: og:title 
      content: "Garry's Mod - Configuring server.cfg"
  - - meta
    - property: og:description
      content: "Complete guide for configuring the server.cfg file in Garry's Mod. Performance optimization and server parameter settings."
---



# <GmodLogo>Configuring server.cfg</GmodLogo>

Quick guide for configuring the `server.cfg` file of a Garry's Mod game server.

***

By default, each Garry's Mod server hosted on our hosting comes with this `server.cfg`:

::: code-group

```js:line-numbers [server.cfg]
// Server name in-game
hostname "New Garrys Mod Server / Hosted by senko.digital"
// Server password
sv_password ""
// Loading screen
sv_loadingurl "https://senko.media/digital/gmod/loading.html"
// Server listing display settings
sv_location "de"
sv_region "255"
sv_lan "0"
sv_max_queries_sec_global "30000"
sv_max_queries_window "45"
sv_max_queries_sec "5"
// Server limits
sbox_maxprops "10"
sbox_maxragdolls "0"
sbox_maxnpcs "0"
sbox_maxballoons "0"
sbox_maxeffects "0"
sbox_maxdynamite "0"
sbox_maxlamps "0"
sbox_maxthrusters "0"
sbox_maxwheels "0"
sbox_maxhoverballs "0"
sbox_maxvehicles "0"
sbox_maxbuttons "0"
sbox_maxsents "0"
sbox_maxemitters "0"
sbox_godmode "0"
sbox_noclip "0"
// Network settings - please leave them at default
sv_minrate 120000
sv_maxrate 0
gmod_physiterations 2
net_splitpacket_maxrate 45000
decalfrequency 12
sv_parallel_sendsnapshot 1
sv_parallel_packentities 1
// Player ban command execution - please do not edit these lines
exec banned_ip.cfg
exec banned_user.cfg
// Add all your parameters below this line
```

:::

It contains quite a large number of parameters, but not many people know what they mean and what they are needed for.

In this article, we will analyze each parameter and explain what changes they make to your server.

***

### `hostname` <Badge type="danger" text="important" />

Sets the name of your server that will be displayed in the server list.

### `sv_password` <Badge type="warning" text="note" />

Sets the password for server access; if the value is empty, the server will be open to everyone.

### `sv_loadingurl` <Badge type="warning" text="note" />

Specifies the URL of the loading screen that players see when connecting.

### `sv_location` <Badge type="warning" text="note" />

Defines the server's location when searching for it in the server list.

### `sv_region` <Badge type="warning" text="note" />

Server region code for the server list (e.g., 255 - any region).

### `sv_lan` <Badge type="danger" text="caution" />

Determines whether the server is a LAN (local) or internet server (0 - internet).

It is recommended to leave the default value.

### `sbox_maxprops` <Badge type="warning" text="note" />

Sets the maximum number of props that a player can create. Props are objects created using the Spawn Menu.

### `sbox_maxragdolls` <Badge type="warning" text="note" />

Determines the maximum number of ragdolls that a player can create. Ragdolls are character or NPC models that behave like physical objects after death.

### `sbox_maxnpcs` <Badge type="warning" text="note" />

Sets the maximum number of NPCs (non-player characters) that a player can spawn.

### `sbox_maxballoons` <Badge type="warning" text="note" />

Limits the number of balloons that a player can create. Balloons can lift objects into the air.

### `sbox_maxeffects` <Badge type="warning" text="note" />

Determines the maximum number of effects that a player can create. Effects are various visual elements such as fire or smoke.

### `sbox_maxdynamite` <Badge type="warning" text="note" />

Sets the maximum amount of dynamite that a player can spawn. Dynamite is an explosive that can be activated.

### `sbox_maxlamps` <Badge type="warning" text="note" />

Limits the number of lamps that a player can create. Lamps are used to illuminate various areas of the map.

### `sbox_maxthrusters` <Badge type="warning" text="note" />

Determines the maximum number of thrusters that a player can spawn. Thrusters attach to objects and provide acceleration.

### `sbox_maxwheels` <Badge type="warning" text="note" />

Sets the maximum number of wheels that a player can create. Wheels are used to create vehicles.

### `sbox_maxhoverballs` <Badge type="warning" text="note" />

Limits the number of hoverballs that a player can create. Hoverballs allow objects to float in the air.

### `sbox_maxvehicles` <Badge type="warning" text="note" />

Determines the maximum number of vehicles that a player can spawn. These can be cars, boats, and other types of transport.

### `sbox_maxbuttons` <Badge type="warning" text="note" />

Sets the maximum number of buttons that a player can create. Buttons are used to activate various mechanisms.

### `sbox_maxsents` <Badge type="warning" text="note" />

Limits the number of scripted entities that a player can create. Scripted entities are objects with unique logic and behavior created using Lua scripts.

### `sbox_maxemitters` <Badge type="warning" text="note" />

Determines the maximum number of emitters that a player can spawn. Emitters create particles such as smoke or fire.

### `sbox_godmode` <Badge type="warning" text="note" />

Enables (1) or disables (0) god mode (invulnerability) for players.

### `sbox_noclip` <Badge type="warning" text="note" />

Enables (1) or disables (0) the ability to fly and pass through objects.

### `gmod_physiterations`

Determines the number of physical engine iterations per tick.

It is recommended to leave the default value.

### `decalfrequency`

Determines the frequency of decal updates (for example, bullet marks) on the server.

### `sv_parallel_sendsnapshot` and `sv_parallel_packentities`

Enable parallel processing of snapshots and entities to improve server performance.

It is recommended to leave the default value.

### `exec banned_ip.cfg` and `exec banned_user.cfg`

Execution of commands to load the list of banned IP addresses and users.
