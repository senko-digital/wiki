---
title: "Установка плагинов Minecraft"
description: "Руководство по установке и настройке плагинов на сервере Minecraft. Поддержка PaperMC, CraftBukkit, Mohist и других популярных ядер."
head:
  - - meta
    - name: keywords
      content: minecraft, plugins, bukkit, spigot, paper, mohist, плагины майнкрафт
  - - meta
    - property: og:title 
      content: "Minecraft - Установка плагинов"
  - - meta
    - property: og:description
      content: "Руководство по установке и настройке плагинов на сервере Minecraft. Поддержка PaperMC, CraftBukkit, Mohist и других популярных ядер."
---



# <MinecraftLogo>Установка плагинов</MinecraftLogo>

Краткое руководство по установке плагинов на сервер Minecraft.

***

::: tip
Плагины работают лишь в паре с соответствующими ядрами, например [PaperMC](https://papermc.io/), [CraftBukkit](https://getbukkit.org/), [Mohist](https://mohistmc.com/) и [Fabric](https://fabricmc.net/). Для полной инструкции по их установке посетите наше [руководство](/ru/games/minecraft/core)
:::

Каждый плагин создается с упором на конкретное ядро. Например плагин для PaperMC не будет работать с CraftBukkit, и наоборот. Поэтому перед установкой убедитесь, что плагин который вы собираетесь установить - подходит для вашего конкретного ядра.

Во избежание ошибок и неработающих плагинов, пользуйтесь официальными ресурсами конкретных плагинов, например для PaperMC это [Hangar](https://hangar.papermc.io/), для CraftBukkit - [Bukkit](https://dev.bukkit.org/bukkit-plugins), Spigot - [Spigot resources](https://www.spigotmc.org/resources/categories/spigot.4/). Также можем порекомендовать [Modrinth](https://modrinth.com/plugins), в нём содержится большое количество плагинов для всех популярных ядер.

### Скачивание плагинов

В этом руководстве мы возьмём за пример сайт [Modrinth](https://modrinth.com/plugins), так как по нашему мнению он является наиболее удобным.
Начнём с фильтров.

Основными фильтрами являются ядро (платформа) и версия сервера.

![plugin filters](/images/games/minecraft/plugins/filters.png){data-zoomable}

После того как Вы выбрали плагин и зашли на его страницу, нажмите на кнопку "Download".

![plugin download button](/images/games/minecraft/plugins/plugin-download-button.png){data-zoomable}

Дальше появится окно, где нужно будет выбрать версию и ядро (платформу).

![plugin download popup](/images/games/minecraft/plugins/plugin-download-popup.png){data-zoomable}

### Установка плагина на сервер

После скачивания плагина перейдите в управление файлами сервера, после - в папку `plugins`, и загрузите туда файл(-ы) самого плагина. В нашем случае это `worldedit-bukkit-7.3.6.jar`.

![plugin upload to the server](/images/games/minecraft/plugins/file-upload.png){data-zoomable}

### Проверка работоспособности плагина

После установки сервера, нужно запустить сервер дабы удостовериться в его работоспобосности. После этого достаточно прописать команду `plugins` в консоль. Если в списке есть только что установленный плагин - значит установка прошла успешно!

![plugin working](/images/games/minecraft/plugins/plugin-working.png){data-zoomable}
