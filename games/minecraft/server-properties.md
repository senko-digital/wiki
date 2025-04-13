---
title: "Configuring server.properties"
description: "Detailed guide for configuring the server.properties file in Minecraft. Optimization and configuration of server parameters."
head:
  - - meta
    - name: keywords
      content: minecraft, server.properties, server configuration, configuration, optimization
  - - meta
    - property: og:title 
      content: "Minecraft - Configuring server.properties"
  - - meta
    - property: og:description
      content: "Detailed guide for configuring the server.properties file in Minecraft. Optimization and configuration of server parameters."
---



# <MinecraftLogo>Configuring server.properties</MinecraftLogo>

Quick guide for configuring the `server.properties` file of a Minecraft game server.

***

The server.properties configuration file controls the basic settings of a Minecraft server. Here's a description of each parameter:

### `enable-jmx-monitoring=false`
Enables monitoring via JMX (Java Management Extensions) for server management.

### `rcon.port=25575`

Specifies the port for connecting to the RCON remote console.

### `level-seed=`

Sets the seed for world generation.

### `gamemode=survival`

Sets the default game mode (survival).

### `enable-command-block=false`

Enables the use of command blocks.

### `enable-query=false`

Enables the server status query (Query).

### `generator-settings={}`

Defines world generation parameters, used with some world types.

### `enforce-secure-profile=true`

Requires a secure profile for players (additional verification).

### `level-name=world`

Sets the name of the world folder.

### `motd=`

Sets the message of the day (MOTD) for the server.

### `query.port=25565`

Specifies the port for the server status query.

### `pvp=true`

Enables PvP (player versus player combat).

### `generate-structures=true`

Enables the generation of structures (villages, temples, etc.).

### `max-chained-neighbor-updates=1000000`

Defines the maximum number of neighbor block updates triggered by chain reactions.

### `difficulty=easy`

Sets the game difficulty level.

### `network-compression-threshold=256`

Defines the minimum size of packets subject to compression.

### `max-tick-time=60000`

Maximum tick execution time in milliseconds before the server crashes.

### `require-resource-pack=false`

Requires downloading the resource pack when joining the server.

### `use-native-transport=true`

Uses native transport to improve network performance.

### `max-players=20`

Maximum number of players on the server.

### `online-mode=true`

Verifies player accounts through Mojang servers (True - authentication required).

### `enable-status=true`

Enables server status display.

### `allow-flight=false`

Allows players to fly (only if set in mods or in creative mode).

### `initial-disabled-packs=`

List of disabled resources when starting the server.

### `broadcast-rcon-to-ops=true`

Allows sending RCON messages to server operators.

### `view-distance=10`

Sets the chunk loading radius for players.

### `server-ip=0.0.0.0`

IP address on which the server will listen for connections (default on all interfaces).

### `resource-pack-prompt=`

Message that will be displayed to players when requesting resource pack installation.

### `allow-nether=true`

Allows access to the Nether.

### `server-port=25565`

Port on which the server accepts connections.

### `enable-rcon=false`

Enables the remote console management (RCON).

### `sync-chunk-writes=true`

Synchronizes chunk writes to disk.

### `op-permission-level=4`

Operator permission level (maximum - 4).

### `prevent-proxy-connections=false`

Prevents connections through proxies (protection against bots and DDoS).

### `hide-online-players=false`

Hides the list of online players on the server.

### `resource-pack=`

URL to the resource pack that the server will offer to players.

### `entity-broadcast-range-percentage=100`

Percentage of visibility radius for entities (mobs, players).

### `simulation-distance=10`

World simulation distance (activity zone for entities and other processes).

### `rcon.password=`

Password for RCON access.

### `player-idle-timeout=0`

Player idle time before automatic kick (0 - no limit).

### `debug=false`

Enables debug mode.

### `force-gamemode=false`

Forcibly switches players to the server's game mode upon joining.

### `rate-limit=0`

Time limit between packets from a single client (0 - no limit).

### `hardcore=false`

Enables hardcore mode (permanent death).

### `white-list=false`

Enables the white list (allows connection only for specific players).

### `broadcast-console-to-ops=true`

Forwards console messages to server operators.

### `spawn-npcs=true`

Enables NPC spawning (villagers).

### `spawn-animals=true`

Enables animal spawning.

### `function-permission-level=2`

Permission level for executing commands by functions (minimum - 1, maximum - 4).

### `initial-enabled-packs=vanilla`

Initial resource packs enabled on the server.

### `level-type=minecraft\:normal`

World type (normal, superflat, etc.).

### `text-filtering-config=`

Text filtering settings (chat, books, etc.).

### `spawn-monsters=true`

Enables hostile mob spawning.

### `enforce-whitelist=false`

Forcibly enables the white list for all connections.

### `spawn-protection=16`

Spawn protection radius, where regular players cannot modify the world.

### `resource-pack-sha1=`

SHA-1 hash of the resource pack to verify its integrity.

### `max-world-size=29999984`

Maximum world size in blocks.
