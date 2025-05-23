---
title: "Базы данных"
description: "Руководство по управлению базами данных MySQL в игровой панели. Создание, настройка и управление базами данных для вашего сервера."
head:
  - - meta
    - name: keywords
      content: базы данных, mysql, phpmyadmin, игровая панель, управление данными
  - - meta
    - property: og:title 
      content: "Панель управления - Базы данных"
  - - meta
    - property: og:description
      content: "Руководство по управлению базами данных MySQL в игровой панели. Создание, настройка и управление базами данных для вашего сервера."
---

# 💿 Базы данных

Краткое руководство по созданию и настройке баз данных в игровой панели управления.

## Описание страницы

С помощью данной вкладки можно создавать новые базы данных MySQL для вашего игрового сервера.

Они очень полезны в хранении данных игроков, например в Garry's Mod это могут быть профессии, привилегии, ники игроков и многое другое.

::: tip
По умолчанию к каждой услуге предоставляется одна база данных, для запроса дополнительных обратитесь в поддержку.
:::

![database management](/images/panel/databases.png){data-zoomable}

## Создание новой базы данных

Для создания новой базы данных нажмите на кнопку **«Новая база данных»**.

В открывшемся окне введите желаемое название базы данных латиницей, и в поле **«Подключения от»** впишите `%` или IP вашего игрового сервера.

<video width="1440" autoplay loop muted controls>
  <source src="/videos/panel/databases/create-database.mp4" type="video/mp4" />
</video>

## Удаление базы данных

Нажмите на название базы данных чтобы скопировать его, после напротив от названия базы данных нажмите на иконку удаления и вставьте название базы данных, и подтвердите удаление.

::: danger
**Внимание**: при удалении базы данных потеряются все данные из неё, настоятельно рекомендуем сохранить данные перед совершением данной операции.
:::

<video width="1440" autoplay loop muted controls>
  <source src="/videos/panel/databases/delete-database.mp4" type="video/mp4" />
</video>

## Просмотр информации о базе данных

Напротив от названия базы данных нажмите на иконку глаза, и в открывшемся окне вам будут предоставлены данные для подключения к базе данных.

<video width="1440" autoplay loop muted controls>
  <source src="/videos/panel/databases/view-database.mp4" type="video/mp4" />
</video>

## Изменение пароля базы данных

Напротив от названия базы данных нажмите на иконку глаза, и в открывшемся окне нажмите на кнопку **«Сменить пароль»** - пароль будет изменён мгновенно и все подключения будут сброшены.

<video width="1440" autoplay loop muted controls>
  <source src="/videos/panel/databases/change-password.mp4" type="video/mp4" />
</video>

## Подключение через PHPMyAdmin

Напротив от названия базы данных нажмите на иконку глаза, и в открывшемся окне вам будут предоставлены данные для подключения к базе данных - скопируйте их, перейдите на страницу [PHPMyAdmin](https://db.senko.digital) и воспользуйтесь этими данными для входа в панель.

<video width="1440" autoplay loop muted controls>
  <source src="/videos/panel/databases/connect-to-phpmyadmin.mp4" type="video/mp4" />
</video>

## Импортирование базы данных через PHPMyAdmin

Войдите в панель управления PHPMyAdmin, перейдите в управление нужной базой данных, перейдите во вкладку "**Import**", загрузите свой файл базы данных и нажмите на кнопку "**Import**".

<video width="1440" autoplay loop muted controls>
  <source src="/videos/panel/databases/import-database.mp4" type="video/mp4" />
</video>

## Экспортирование базы данных через PHPMyAdmin

Войдите в панель управления PHPMyAdmin, перейдите в управление нужной базой данных, перейдите во вкладку "**Export**" и нажмите на кнопку "**Export**".

<video width="1440" autoplay loop muted controls>
  <source src="/videos/panel/databases/export-database.mp4" type="video/mp4" />
</video>
