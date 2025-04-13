---
title: "Установка кастомного ядра"
description: "Руководство по установке и настройке кастомных ядер на сервере Minecraft. PaperMC, CraftBukkit, Mohist и другие популярные ядра."
head:
  - - meta
    - name: keywords
      content: minecraft, paper, bukkit, spigot, mohist, fabric, forge, ядро сервера
  - - meta
    - property: og:title 
      content: "Minecraft - Установка кастомного ядра"
  - - meta
    - property: og:description
      content: "Руководство по установке и настройке кастомных ядер на сервере Minecraft. PaperMC, CraftBukkit, Mohist и другие популярные ядра."
---



# <MinecraftLogo>Установка кастомного ядра</MinecraftLogo>

Краткое руководство по установке кастомного ядра на сервер Minecraft.

***

Для начала стоит определиться с тем, какое ядро вы хотели бы установить. Из самых популярных мы можем порекомендовать [PaperMC](https://papermc.io/), [CraftBukkit](https://getbukkit.org/), [Mohist](https://mohistmc.com/) и [Fabric](https://fabricmc.net/). В этом руководстве для примера мы покажем как установить PaperMC.

## Скачивание ядра

Перейдите на сайт [PaperMC](https://papermc.io/), нажмите на кнопку "Downloads", после этого нажмите на "Paper" и "Paper 1.21.1" (вместо 1.21.1 может быть любая другая, более новая версия)

![papermc website main page](/images/games/minecraft/core/papermc-main.png){data-zoomable}

![papermc website downloads page](/images/games/minecraft/core/papermc-downloads.png){data-zoomable}

![papermc website download page](/images/games/minecraft/core/papermc-download.png){data-zoomable}

## Загрузка ядра на сервер

Для загрузки ядра Вам нужно перейти в панель управления сервером, затем в "файлы", где вы можете использовать кнопку "загрузить", либо же просто перетащить файл с ядром сервера в окно браузера.
После этого удалите старое ядро (`server.jar`) и переименуйте новое на `server.jar`.

::: tip
Вы также можете изменить название файла который будет запускаться, изменив значение в "параметрах запуска" с помощью пункта "Server Jar File".
:::

## Проверка работоспособности ядра на сервере

После установки ядра, нужно запустить сервер дабы удостовериться в его работоспобосности.

![screenshot of the game panel](/images/games/minecraft/core/working-server.png){data-zoomable}
