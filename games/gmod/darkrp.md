---
title: "Installing and Configuring DarkRP"
description: "Complete guide for installing and configuring DarkRP mode on a Garry's Mod server. Setting up jobs, items, and game economy."
head:
  - - meta
    - name: keywords
      content: gmod, darkrp, garry's mod, darkrpmodification, installing darkrp, configuring darkrp
  - - meta
    - property: og:title 
      content: "Garry's Mod - Installing and Configuring DarkRP"
  - - meta
    - property: og:description
      content: "Complete guide for installing and configuring DarkRP mode on a Garry's Mod server. Setting up jobs, items, and game economy."
---

<script setup>
import GmodLogo from '/components/GmodLogo.vue';
</script>

# <GmodLogo>Installing and Configuring DarkRP</GmodLogo>

Quick guide for installing and configuring DarkRP on your Garry's Mod server.

## Introduction

Have you always dreamed of creating your own DarkRP server? Follow our steps to start working with your new DarkRP server as soon as possible.

We recommend using the right sidebar for navigation in the article, as we have described all configs as detailed as possible for deeper server customization.

## Downloading addons

First, we need to download the files of the mode.
DarkRP has two addons that are important for its existence - `DarkRP` and `DarkRP-modification`.

DarkRP is the base, the foundation of the mode, and with the help of DarkRP-modification, all changes in the mode are made: adding professions, items, and weapons, enabling/disabling various functions and much more.

[**[Download DarkRP](https://github.com/FPtje/DarkRP/archive/refs/heads/master.zip)**]

[**[Download DarkRP-modification](https://github.com/FPtje/darkrpmodification/archive/refs/heads/master.zip)**]

::: tip
These links are safe and point to the official GitHub repository from the original mode developer - FPTje.
:::

## Installing addons

After downloading these files, go to the management of the server you need, and upload the `DarkRP-master.zip` archive to the path `/garrysmod/gamemodes`, and `darkrpmodification-master.zip` - `/garrysmod/addons`.

Unzip these archives.

To save space, after unzipping, you can delete the uploaded archives.

The folder `DarkRP-master` must be renamed to `darkrp`.

After installing the addons, don't forget to go to "launch parameters" and change the mode from `sandbox` to `darkrp`.

## Analyzing darkrpmodification files

Now let's configure our new server.
With the help of the `darkrpmodification` addon, you can customize various aspects of DarkRP - whether it's professions, mode functions, weapons, and much more.

### `settings.lua`

This file allows you to configure the basic parameters of the DarkRP gamemode, such as starting balance, punishments, rules, and much more.

Located at: `/garrysmod/addons/darkrpmodification/lua/darkrp_config/settings.lua`.

### `jobs.lua`

This file is responsible for professions on your server. You can configure existing professions or add new ones.

Located at `/garrysmod/addons/darkrpmodification/lua/darkrp_customthings/jobs.lua`.

### `entities.lua`

This file is responsible for setting up entities (items) in DarkRP. For example, you can add weapon shops or improve existing ones.

Path to the file: `/garrysmod/addons/darkrpmodification/lua/darkrp_customthings/entities.lua`.

### `mysql.lua`

This file is responsible for setting up the MySQL database. With it, you can store server data in a more secure, separate place from the game server.

Path to the file: `/garrysmod/addons/darkrpmodification/lua/darkrp_config/mysql.lua`.

## Configuring `settings.lua`

### Toggle settings

This section contains parameters that can be turned on or off (i.e. support values `true` or `false`).

#### `voice3D`

Enables or disables 3D sound in voice chat.

It's recommended to leave the default value.

#### `AdminsCopWeapons` <Badge type="warning" text="pay attention" />

Enables or disables the ability for administrators to use police weapons.

#### `adminBypassJobRestrictions` <Badge type="warning" text="pay attention" />

Enables or disables the ability for administrators to forcefully set professions in bypassing privileges like `VIP`.

#### `allowActs` <Badge type="warning" text="pay attention" />

Enables or disables the ability to use animations (for example, greetings or dances).

#### `allowjobswitch`

Allows players to switch to their own custom working professions.

#### `allowrpnames` <Badge type="warning" text="pay attention" />

Allows players to set their RP names using the `/rpname` command.

#### `allowsprays` <Badge type="warning" text="pay attention" />

Enables or disables the ability to use graffiti on the server.

It's recommended to leave the default value.

#### `allowvehicleowning`

Enables or disables the ability to own vehicles.

#### `allowvnocollide`

Enables or disables the ability to bypass collisions for vehicles (for safety).

#### `alltalk`

Enables global chat, disables local chat.

It's recommended to leave the default value.

#### `antimultirun` <Badge type="warning" text="pay attention" />

Prevents players from logging in twice from the same account.

#### `autovehiclelock`

Enables or disables automatic vehicle lock when a player exits it.

#### `babygod` <Badge type="warning" text="pay attention" />

Spawns players in god mode (prevents killing when spawning).

#### `canforcedooropen`

Allows players to open doors that don't belong to them using lock picks, hammers, etc.

#### `chatsounds` <Badge type="warning" text="pay attention" />

Plays sounds when players in chat say certain phrases, for example `cheese`.

<video width="1440" loop controls>
  <source src="/videos/games/gmod/darkrp/cheese.mp4" type="video/mp4" />
</video>

#### `chiefjailpos`

Allows the chief to set positions of jail cells.

#### `cit_propertytax`

Enables or disables property tax that applies only to citizens.

#### `copscanunfreeze` <Badge type="warning" text="pay attention" />

Enables or disables the ability for police to unfreeze other players' items.

#### `copscanunweld` <Badge type="warning" text="pay attention" />

Enables or disables the ability for police to weld other players' items.

#### `cpcanarrestcp` <Badge type="danger" text="be careful" />

Allows/prevents police to arrest other police.

#### `currencyLeft`

Position of the currency symbol. `true` for left, `false` for right.

#### `customjobs`

Enables or disables the `/job` command (user names for professions).

#### `customspawns` <Badge type="danger" text="be careful" />

Enables or disables the use of custom spawn points.

#### `deathblack`

Determines if a player sees a black screen when dying.

#### `showdeaths`

Shows player death information in the top right corner of the screen for each player (killfeed).

![server killfeed](/images/games/gmod/darkrp/killfeed.png){data-zoomable}

#### `deadtalk`

Enables or disables the ability to speak and use commands while dead.

#### `deadvoice`

Enables or disables the ability to speak through a microphone while dead.

#### `deathpov`

Enables or disables the ability to see your death from first person.

![first person death](/images/games/gmod/darkrp/deathpov.png){data-zoomable}

#### `decalcleaner`

Enables or disables automatic cleaning of all decals from players.

#### `disallowClientsideScripts` <Badge type="danger" text="be careful" />

Prevents the use of client scripts.

#### `doorwarrants`

Enables or disables the requirement for a warrant to break into doors.

#### `dropmoneyondeath`

Enables or disables the ability to drop money when dying.

Be careful: it may cause server crashes.

#### `droppocketarrest`

Enables or disables the ability to drop items from pockets when arrested.

#### `droppocketdeath`

Enables or disables the ability to drop items from pockets when dying.

#### `dropweapondeath`

Enables or disables the ability to drop current weapon when dying.

#### `dropspawnedweapons`

Allows or prevents weapon dropping when a player spawns.

#### `dynamicvoice`

Enables or disables the ability for only players in one room to hear the microphone.

#### `earthquakes` <Badge type="danger" text="be careful" />

Enables or disables earthquakes.

#### `enablebuypistol`

Enables or disables the `/buy` command.

#### `enforceplayermodel`

Determines if players must use character models that correspond to their role.

#### `globalshow`

Determines if information about players should be displayed above their heads in the game.

![show or hide user info](/images/games/gmod/darkrp/globalshow.png){data-zoomable}

#### `ironshoot`

Enables or disables the need for aiming to use weapons.

![aim down sights to shoot](/images/games/gmod/darkrp/ads.jpg){data-zoomable}

#### `showjob`

Determines if player work information should be displayed above their head in the game.

![show or hide user profession](/images/games/gmod/darkrp/globalshow.png){data-zoomable}

#### `letters`

Enables or disables the ability to write letters to each other.

#### `license`

Enables or disables the need for a license to pick up weapons.

#### `lockdown`

Enables or disables the ability to start and end the mayor's hour using the `/lockdown` and `/unlockdown` commands.

![mayor lockdown](/images/games/gmod/darkrp/lockdown.png){data-zoomable}

It's recommended to leave the default value.

#### `lockpickfading`

Enables or disables the ability to pick locks on disappearing doors (Fading Doors).

#### `logging`

Enables or disables logging everything that happens on the server.

#### `lottery`

Enables or disables creating lotteries for mayors.

#### `showname`

Determines if player name should be displayed above their head in the game.

![show or hide user name](/images/games/gmod/darkrp/globalshow.png){data-zoomable}

#### `showhealth`

Determines if player health should be displayed above their head in the game.

![show or hide user health](/images/games/gmod/darkrp/globalshow.png){data-zoomable}

#### `needwantedforarrest`

Enables or disables the ability to arrest only those players who are wanted.

#### `noguns`

Enables or disables weapon and weapon shops.

#### `norespawn`

Enables or disables the need for a player to respawn when changing profession.

#### `keepPickedUp`

Enables or disables saving picked up weapons when changing profession.

#### `instantjob`

Enables or disables instant respawn when `norespawn` is off.

#### `npcarrest`

Enables or disables the ability to arrest NPCs.

#### `ooc` <Badge type="warning" text="pay attention" />

Determines if OOC (global) chat is enabled.

#### `propertytax`

Enables or disables property tax.

#### `proppaying`

Determines if players should pay for spawning props.

#### `propspawning`

Enables or disables spawning items. Applies also to administrators.

#### `removeclassitems`

Enables or disables removing items related to a profession (for example, packages, microwaves, etc.), when changing profession.

#### `removeondisconnect`

Enables or disables removing items related to a profession (for example, packages, microwaves, etc.), when disconnecting.

#### `respawninjail` <Badge type="danger" text="be careful" />

Enables or disables the ability to respawn in jail when dying.

#### `restrictallteams`

Determines if players can only be citizens until an administrator allows them to choose professions.

#### `restrictbuypistol`

Enables or disables the ability to use the `/buy` command only for weapon traders.

#### `restrictdrop`

Enables or disables restriction on weapon dropping. Setting this value to `true` prevents weapon dropping from packages.

#### `revokeLicenseOnJobChange`

Determines if licenses are revoked when a player changes profession.

#### `shouldResetLaws`

Enables or disables resetting laws to default values when mayor changes.

#### `strictsuicide` <Badge type="danger" text="be careful" />

Determines if players should respawn in the place where they committed suicide.

#### `telefromjail` <Badge type="danger" text="be careful" />

Enables or disables the ability to teleport from jail.

#### `teletojail` <Badge type="danger" text="be careful" />

Enables or disables the ability to teleport to jail.

#### `unlockdoorsonstart`

Enables or disables unlocking all doors when the map starts.

#### `voiceradius`

Enables or disables local voice chat.

#### `wallettax`

Determines if players should pay tax on their balance.

#### `wantedrespawn`

Determines if players are wanted when respawning.

#### `wantedsuicide`

Enables or disables suicide while being wanted by police.

#### `realisticfalldamage`

Enables or disables dynamic fall damage. Setting `mp_falldamage` to `1` overrides this value.

#### `printeroverheat`

Determines if a money printer can overheat on its own.

#### `weaponCheckerHideDefault`

Hides weapon given to profession when checking weapon.

#### `weaponCheckerHideNoLicense`

Hides weapon that doesn't require a license.

### Value settings

This section contains parameters whose value can only be numeric.

#### `adminnpcs` <Badge type="danger" text="be careful" />

Determines if NPCs should be accessible only to administrators. Values: `0` = all, `1` = administrator or higher, `2` = superadmin or higher, `3` = only RCON.

Default value: `3`

#### `adminsents` <Badge type="danger" text="be careful" />

Determines if SENTs should be accessible only to administrators. Values: `0` = all, `1` = administrator or higher, `2` = superadmin or higher, `3` = only RCON.

Default value: `1`

#### `adminvehicles` <Badge type="danger" text="be careful" />

Determines if vehicles should be accessible only to administrators. Values: `0` = all, `1` = administrator or higher, `2` = superadmin or higher, `3` = only RCON.

Default value: `3`

#### `adminweapons` <Badge type="danger" text="be careful" />

Determines who can spawn weapons: `0` = only administrators, `1` = only superadmins, `2` = nobody, `3` = all.

Default value: `1`

#### `arrestspeed`

Sets maximum arrest speed.

Default value: `120`

#### `babygodtime` <Badge type="warning" text="pay attention" />

Sets duration of immunity mode for only just spawned players.

Default value: `5`

#### `chatsoundsdelay` <Badge type="warning" text="pay attention" />

Sets wait time before player can speak again through chat.

We recommend setting this value to at least 5 seconds to prevent spamming sounds.

Set value to `0` to disable.

Default value: `5`

#### `deathfee`

Amount of money a player loses when dying.

Default value: `30`

#### `decaltimer`

Sets period of cleaning client decals (in seconds).

Default value: `120`

#### `demotetime`

Amount of seconds a player can switch to profession after lowering.

Default value: `120`

#### `doorcost` <Badge type="warning" text="pay attention" />

Sets cost of one door.

Default value: `30`

#### `entremovedelay`

Wait time before removing bought object after disconnecting.

Default value: `0`

#### `gunlabweapon`

Weapon that will spawn in weapon shop.

Default value: `"weapon_p2282"`

#### `jailtimer`

Sets jail stay time (in seconds).

Default value: `120`

#### `lockdowndelay`

Wait time mayor should wait before starting next mayor's hour.

Default value: `120`

#### `maxadvertbillboards`

Maximum amount of billboards a player can place.

Default value: `3`

#### `maxCheques`

Maximum amount of checks a player can write.

Default value: `5`

#### `maxdoors`

Maximum amount of doors one player can own.

Default value: `20`

#### `maxdrugs`

Maximum amount of drugs one player can have.

Default value: `2`

#### `maxfoods`

Maximum amount of food packages one microwave owner can have.

Default value: `2`

#### `maxfooditems`

Maximum amount of food items a player can buy through F4 menu.

Default value: `20`

#### `maxlawboards`

Maximum amount of law boards a mayor can place.

Default value: `2`

#### `maxletters`

Maximum amount of letters one player can have.

Default value: `10`

#### `maxlotterycost`

Maximum amount a mayor can set for participation in lottery.

Default value: `250`

#### `maxvehicles`

Maximum amount of vehicles a player can buy.

Default value: `5`

#### `microwavefoodcost`

Sets food selling price from microwave.

Default value: `30`

#### `gunlabguncost`

Initial weapon price from weapon shop. Note that weapon shop owner can change this price.

Default value: `200`

#### `druglabdrugcost`

Initial drug price from drug lab. Note that drug lab owner can change this price.

Default value: `100`

#### `minlotterycost`

Minimum amount a mayor can set for participation in lottery.

Default value: `30`

#### `moneyRemoveTime`

Wait time before money is removed if not picked up. Set to `0` to disable.

Default value: `600`

#### `mprintamount`

Amount of money printed by money printer per spin.

Default value: `250`

#### `normalsalary`

Initial salary for newly joined players.

Default value: `45`

#### `npckillpay`

Amount of money given for each NPC kill.

Default value: `10`

#### `paydelay`

Wait time players get salary.

Default value: `160`

#### `pocketitems`

Maximum amount of objects a player's pocket can hold.

Default value: `10`

#### `pricecap`

Maximum item price (using /price command).

Default value: `500`

#### `pricemin`

Minimum item price (using /price command).

Default value: `50`

#### `propcost`

How much should spawn item cost (proppaying value must be enabled for this setting to work).

Default value: `10`

#### `quakechance` <Badge type="danger" text="be careful" />

Earthquake chance.

Default value: `4000`

#### `respawntime` <Badge type="warning" text="pay attention" />

Minimum wait time before respawn.

Default value: `1`

#### `changejobtime` <Badge type="warning" text="pay attention" />

Minimum wait time before changing work.

Default value: `10`

#### `runspeed` <Badge type="warning" text="pay attention" />

Sets maximum running speed.

Default value: `240`

#### `runspeedcp`

Sets maximum running speed for police professions.

Default value: `255`

#### `searchtime`

Wait time for search order to be valid.

Default value: `30`

#### `ShipmentSpamTime`

Cooldown between spawning each shipment.

Default value: `3`

#### `shipmentspawntime`

Wait time for full shipment spawning.

Default value: `10`

#### `startinghealth` <Badge type="warning" text="pay attention" />

Health given to player when spawning.

![starting amount of money](/images/games/gmod/darkrp/startinghealth.png){data-zoomable}

Default value: `100`

#### `startingmoney` <Badge type="warning" text="pay attention" />

Amount of money in wallet when first logging in to server.

![starting amount of money](/images/games/gmod/darkrp/startingmoney.png){data-zoomable}

Default value: `500`

#### `stunstickdamage` <Badge type="warning" text="pay attention" />

Amount of damage stunstick does to objects. When value between 0 and 1, damage is relative, where 1 removes all object health. When value is more than 1, damage is absolute.

Default value: `1000`

#### `vehiclecost`

Vehicle cost (for owning it).

Default value: `40`

#### `wallettaxmax`

Maximum tax percentage to be paid.

Default value: `5`

#### `wallettaxmin`

Minimum tax percentage to be paid.

Default value: `1`

#### `wallettaxtime`

Wait time in seconds between taxing players. Requires server restart.

Default value: `600`

#### `wantedtime` <Badge type="warning" text="pay attention" />

Wait time player becomes wanted.

Default value: `120`

#### `walkspeed` <Badge type="warning" text="pay attention" />

Sets maximum walking speed.

Default value: `160`

#### `falldamagedamper`

Fall damage damper. Default value: `15`. Decrease this value for more damage.

Default value: `15`

#### `falldamageamount`

Minimum fall damage. Default value: `10`.

Default value: `10`

#### `printeroverheatchance`

Money printer overheating chance. The higher this number, the less likely (minimum 3, default 22).

Default value: `22`

#### `printerreward`

Money printer destruction reward.

Default value: `950`

### Chat distance settings <Badge type="warning" text="pay attention" />

Distance is given in Source Engine units (similar to inches)

#### `talkDistance`

Distance for normal conversations.

Default value: `250`

#### `whisperDistance`

Distance for whispering (in text chat).

Default value: `90`

#### `yellDistance`

Distance for yelling (in text chat).

Default value: `550`

#### `meDistance`

Distance for /me command (in text chat).

Default value: `250`

#### `voiceDistance`

Distance for voice chat work.

Default value: `550`

### Other settings

#### `MoneyClass`

Money packet class name. Use this value to create your own money object!

Note: money packet must support "Setamount" (or DTVar variable).

Default value: `spawned_money`

We recommend leaving the default value.

#### `moneyModel`

If you want to change money model, edit this value.

Default value: `models/props/cs_assault/money.mdl`

We recommend leaving the default value.

#### `lockdownsound`

You can set your own sound that will be played for all players when starting mayor's hour.

::: tip
Note: Don't forget to write full path to folder where sound file is located.
:::

Default value: `npc/overwatch/cityvoice/f_confirmcivilstatus_1_spkr.wav`

#### `DarkRPSkin`

DarkRP theme. Set value to "`default`" to switch to standard GMod theme.

Default value: `DarkRP`

#### `currency`

Currency symbol used in F4 interfaces and HUD.

Default value: `$`

#### `currencyThousandSeparator`

Currency thousand separator.

Default value: `,`

#### `chatCommandPrefix`

Chat command prefix.

Default value: `/`

#### `F1MenuHelpPage`

F1 menu help page.

Default value: `https://darkrp.miraheze.org/wiki/Main_Page`

#### `F1MenuHelpPageTitle`

F1 menu help page title.

Default value: `DarkRP Wiki`

#### `notificationSound`

Sound played when DarkRP notification appears.

Default value: `buttons/lightswitch2.wav`

#### `DefaultPlayerGroups`

SteamID and default ranks for players when joining.

Default value:

```lua
{
    ["STEAM_0:0:00000000"] = "superadmin",
    ["STEAM_0:0:11111111"] = "admin",
}
```

#### `DisabledCustomModules` <Badge type="warning" text="pay attention" />

Disabling DarkRP modules.

Default value:

```lua
{
    ["hudreplacement"] = false,
    ["extraf4tab"] = false,
}
```

#### `DisallowDrop` <Badge type="warning" text="pay attention" />

List of weapons players cannot throw away or lose.
Items set to `true`, cannot be lost.  

Default value:

```lua
{
    ["arrest_stick"] = true,
    ["door_ram"] = true,
    ["gmod_camera"] = true,
    ["gmod_tool"] = true,
    ["keys"] = true,
    ["lockpick"] = true,
    ["med_kit"] = true,
    ["pocket"] = true,
    ["stunstick"] = true,
    ["unarrest_stick"] = true,
    ["weapon_keypadchecker"] = true,
    ["weapon_physcannon"] = true,
    ["weapon_physgun"] = true,
    ["weaponchecker"] = true,
}
```

#### `DefaultWeapons` <Badge type="warning" text="pay attention" />

List of weapons players start with in game.

Default value:

```lua
{
    "keys",
    "weapon_physcannon",
    "gmod_camera",
    "gmod_tool",
    "pocket",
    "weapon_physgun",
}
```

#### `CategoryOverride` <Badge type="warning" text="pay attention" />

Category override. Used to override default categories for any professions, items, and weapons.  

Default value:

```lua
{
    jobs = {
        ["Citizen"] = "Citizens",
        ["Hobo"] = "Citizens",
        ["Gun Dealer"] = "Citizens",
        ["Medic"] = "Citizens",
        ["Civil Protection"] = "Civil Protection",
        ["Gangster"] = "Gangsters",
        ["Mob boss"] = "Gangsters",
        ["Civil Protection Chief"] = "Civil Protection",
        ["Mayor"] = "Civil Protection",
    },
    entities = {
        ["Drug lab"] = "Other",
        ["Money printer"] = "Other",
        ["Gun lab"] = "Other",
    },
    shipments = {
        ["AK47"] = "Rifles",
        ["MP5"] = "Rifles",
        ["M4"] = "Rifles",
        ["Mac 10"] = "Other",
        ["Pump shotgun"] = "Shotguns",
        ["Sniper rifle"] = "Snipers",
    },
    weapons = {
        ["Desert eagle"] = "Pistols",
        ["Fiveseven"] = "Pistols",
        ["Glock"] = "Pistols",
        ["P228"] = "Pistols",
    },
    vehicles = {}, -- There are no default vehicles.
    ammo = {
        ["Pistol ammo"] = "Other",
        ["Shotgun ammo"] = "Other",
        ["Rifle ammo"] = "Other",
    },
}
```

#### `AdminWeapons` <Badge type="warning" text="pay attention" />

List of weapons administrators start with in game, in addition to standard weapon and weapon from `GM.Config.AdminsCopWeapons`.

Default value:

```lua
{
    "weapon_keypadchecker",
}
```

#### `DefaultLaws` <Badge type="warning" text="pay attention" />

Default laws that cannot be changed in the game.

Default value:

```lua
{
    "Do not attack other citizens except in self-defence.",
    "Do not steal or break into people's homes.",
    "Money printers/drugs are illegal.",
}
```

#### `PocketBlacklist` <Badge type="warning" text="pay attention" />

List of items that cannot be placed in pocket.

Default value:

```lua
{
    ["fadmin_jail"] = true,
    ["meteor"] = true,
    ["door"] = true,
    ["func_"] = true,
    ["player"] = true,
    ["beam"] = true,
    ["worldspawn"] = true,
    ["env_"] = true,
    ["path_"] = true,
    ["prop_physics"] = true,
    ["money_printer"] = true,
    ["gunlab"] = true,
    ["prop_dynamic"] = true,
    ["prop_vehicle_prisoner_pod"] = true,
    ["keypad_wire"] = true,
    ["gmod_button"] = true,
    ["gmod_rtcameraprop"] = true,
    ["gmod_cameraprop"] = true,
    ["gmod_dynamite"] = true,
    ["gmod_thruster"] = true,
    ["gmod_light"] = true,
    ["gmod_lamp"] = true,
    ["gmod_emitter"] = true,
}
```

#### `noStripWeapons`

Weapon considered 'legal' when checking weapon and not taken away when confiscated.

This setting is used IN ADDITION to `GM.Config.weaponCheckerHideDefault` and `GM.Config.weaponCheckerHideNoLicense`.

#### `preventClassItemRemoval`

List of entities that will not be removed when player changes work. This applies only when `removeclassitems` is set to `true`.  

Note: entities will only be removed when changing work to one that doesn't have right to that entity.

Default value:

{
    ["gunlab"] = false,
    ["microwave"] = false,
    ["spawned_shipment"] = false,
}

#### `allowedProperties` <Badge type="warning" text="pay attention" />

Properties from C-menu that are allowed to be used by any player.

Values set to `true`, are allowed, while values set to `false` - forbidden.

Default value:

```lua
{
    remover = true,
    ignite = false,
    extinguish = true,
    keepupright = true,
    gravity = true,
    collision = true,
    skin = true,
    bodygroups = true,
}
```

## Configuring `jobs.lua`

### Creating jobs.lua file

First, open jobs.lua file, located at:

`/garrysmod/addons/darkrpmodification/lua/darkrp_customthings/jobs.lua`.

If file doesn't exist, it needs to be created. In this file you will add settings for each profession.

### Example of creating simple profession

Let's look at an example of creating a basic profession - "Police":

::: code-group

```lua:line-numbers [jobs.lua]
...
TEAM_POLICE = DarkRP.createJob("Police", { -- [!code focus]
    color = Color(25, 25, 170, 255), -- [!code focus]
    description = [[You are a police, your task is to maintain order in the city.]], -- [!code focus]
    weapons = {"arrest_stick", "unarrest_stick", "weapon_pistol", "stunstick", "door_ram", "weaponchecker"}, -- [!code focus]
    command = "police", -- [!code focus]
    max = 4, -- [!code focus]
    salary = 65, -- [!code focus]
    admin = 0, -- [!code focus]
    vote = true, -- [!code focus]
    hasLicense = true, -- [!code focus]
    category = "Government Services" -- [!code focus]
})-- [!code focus]
...
```

:::

#### Profession parameters

`TEAM_POLICE`: Profession variable-identifier. Variable name must be unique.

`DarkRP.createJob("Police", {...})`: This function creates a new profession with name "Police".

`color`: Defines profession color in list. Uses RGBA format.

`model`: Specifies player model for this profession. You can specify multiple models.

`description`: Profession description that players will see.

`weapons`: List of weapons player will get when choosing profession.

`command`: Profession choice command. Players can enter it in chat to change profession.

`max`: Maximum amount of players that can be in this profession at the same time.

`salary`: Salary player will get each game cycle.

`admin`: Defines if profession is accessible only to administrators (0 - accessible to all, 1 - only admins, 2 - only super-admins).

`vote`: Defines if profession should be obtained by voting. If true, other players must vote.

`hasLicense`: Defines if player has default weapon license.

`category`: Profession category to which it belongs. Allows grouping professions in menu.

### Additional parameters

#### Additional player models

If you want profession to have multiple models to choose from, simply add them to it:

::: code-group

```lua:line-numbers [jobs.lua]
model = {
    "models/player/police.mdl",
    "models/player/police_fem.mdl"
},
```

:::

#### Adding unique privileges

If you want profession to have unique privileges, for example, access to certain commands or rights, you can use customCheck:

::: code-group

```lua:line-numbers [jobs.lua]

customCheck = function(ply) return ply:IsUserGroup("vip") end,
CustomCheckFailMsg = "This profession is available only for VIP players.",
```

:::

Here customCheck checks if player belongs to "VIP" group. If not, he won't be able to choose profession.

#### Health and armor restrictions

You can set starting health and armor for profession:

::: code-group

```lua:line-numbers [jobs.lua]
health = 150,
armor = 50,
```

:::

#### Unique properties

If profession needs to add unique abilities, you can do it with customCheck parameter and additional conditions in code that will check these abilities.

### Creating custom professions

You can create your own professions with any parameters. For example, let's create profession "Mayor":

```lua:line-numbers [jobs.lua]
TEAM_MAYOR = DarkRP.createJob("Mayor", {
    color = Color(150, 20, 20, 255),
    model = "models/player/breen.mdl",
    description = [[As mayor, you control the city. You can make laws and work on improving citizens' lives.]],
    weapons = {"weapon_fists"},
    command = "mayor",
    max = 1,
    salary = 100,
    admin = 0,
    vote = true,
    hasLicense = false,
    mayor = true,
    category = "Government Services"
})
```

### Organizing professions in categories

For convenience for players, professions can be grouped by categories. For example, all government services professions can be grouped into "Government Services" category:

```lua:line-numbers [jobs.lua]
DarkRP.createCategory{
    name = "Government Services",
    categorises = "jobs",
    startExpanded = true,
    color = Color(0, 107, 0, 255),
    canSee = function(ply) return true end,
    sortOrder = 100,
}
```

### Server restart

After making changes to jobs.lua file, save file and restart server, so changes take effect. Now new professions will be available for your players.

## Connecting MySQL database

For storing player data, we strictly recommend using MySQL databases - it's much easier and safer to manage data.

### Installing MySQLOO

By default, Garry's Mod doesn't know how to install MySQL database connection.
This is solved by installing lua modules that allow installing connections and writing data directly to databases in Garry's Mod addons.
One of the most popular modules is **MySQLOO** - we'll use it as an example in this article.

#### Downloading MySQLOO

First, you need to download the module itself.

Latest version of the module at the time of writing this article - `9.7.6`.

Direct download links:

**[MySQLOO Linux 32bit](https://github.com/FredyH/MySQLOO/releases/download/9.7.6/gmsv_mysqloo_linux.dll)** | **[MySQLOO Linux 64bit](https://github.com/FredyH/MySQLOO/releases/download/9.7.6/gmsv_mysqloo_linux64.dll)**

**[MySQLOO Windows 32bit](https://github.com/FredyH/MySQLOO/releases/download/9.7.6/gmsv_mysqloo_win32.dll)** | **[MySQLOO Windows 64bit](https://github.com/FredyH/MySQLOO/releases/download/9.7.6/gmsv_mysqloo_win64.dll)**

Servers located on our game hosting, by default, use 32-bit Linux version of Garry's Mod. In case of switching to 64-bit version of Garry's Mod, you need to download corresponding module version.

#### Loading MySQLOO on server

After downloading MySQLOO module, you need to place corresponding file `.dll` in your server Garry's Mod directory:

1. Go to `/garrysmod/lua/bin/` on your server. Create folder `bin`, if it doesn't exist.
2. Upload corresponding MySQLOO file to this folder.

Make sure you use correct module version depending on OS and server bitness (32bit or 64bit).

### Configuring MySQL in DarkRP

#### Connecting database

After installing module, you need to configure DarkRP to work with MySQL database.

1. Open mysql.lua file, located at `/garrysmod/addons/darkrpmodification/lua/darkrp_config/`.

2. Find and uncomment the following lines, replacing them with your MySQL database connection data:

```lua
--[[---------------------------------------------------------------------------
Database configuration
---------------------------------------------------------------------------]]
MySQLite_config = {}
MySQLite_config.EnableMySQL = true
MySQLite_config.Host = "localhost" -- IP your MySQL server
MySQLite_config.Username = "root" -- MySQL user name
MySQLite_config.Password = "password" -- MySQL user password
MySQLite_config.Database_name = "darkrp" -- Database name
MySQLite_config.Database_port = 3306 -- MySQL port, default 3306
MySQLite_config.Preferred_module = "mysqloo"
```

Data can be found in "Databases" tab in game control panel, more about tab can be found here: [💿 Databases](/panel/databases.html#%D0%BF%D1%80%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80-%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%B8-%D0%BE-%D0%B1%D0%B0%D0%B7%D0%B5-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85)

Example settings:

```lua
--[[---------------------------------------------------------------------------
Database configuration
---------------------------------------------------------------------------]]
MySQLite_config = {}
MySQLite_config.EnableMySQL = true
MySQLite_config.Host = "db.snk.wtf" -- IP your MySQL server
MySQLite_config.Username = "senkowiki.acf78z1a" -- MySQL user name
MySQLite_config.Password = "gbp_ced0PQV-jwp6nvz" -- MySQL user password
MySQLite_config.Database_name = "darkrp" -- Database name
MySQLite_config.Database_port = 3306 -- MySQL port, default 3306
MySQLite_config.Preferred_module = "mysqloo"
```

#### Testing connection

After performing above steps, check if server successfully connected to MySQL database.

Start server and watch server console. If settings are done correctly, you won't see any MySQL related errors.

Done! You successfully configured MySQL database, and now all player data will be stored in database instead of sv.db file.
