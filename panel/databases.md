---
title: "Databases"
description: "Guide to managing MySQL databases in the game panel. Creating, configuring, and managing databases for your server."
head:
  - - meta
    - name: keywords
      content: databases, mysql, phpmyadmin, game panel, data management
  - - meta
    - property: og:title 
      content: "Control Panel - Databases"
  - - meta
    - property: og:description
      content: "Guide to managing MySQL databases in the game panel. Creating, configuring, and managing databases for your server."
---

# 💿 Databases

Quick guide to creating and configuring databases in the game control panel.

## Page Description

With this tab, you can create new MySQL databases for your game server.

They are very useful for storing player data; for example, in Garry's Mod, this can be professions, privileges, player nicknames, and much more.

::: tip
By default, one database is provided for each service; contact support to request additional ones.
:::

![database management](/images/panel/databases.png){data-zoomable}

## Creating a New Database

To create a new database, click on the **"New Database"** button.

In the window that opens, enter the desired database name in Latin characters, and in the **"Connections from"** field, enter `%` or the IP of your game server.

<video width="1440" autoplay loop muted controls>
  <source src="/videos/panel/databases/create-database.mp4" type="video/mp4" />
</video>

## Deleting a Database

Click on the database name to copy it, then next to the database name, click on the delete icon and paste the database name, and confirm the deletion.

::: danger
**Warning**: when deleting a database, all data from it will be lost; we strongly recommend saving the data before performing this operation.
:::

<video width="1440" autoplay loop muted controls>
  <source src="/videos/panel/databases/delete-database.mp4" type="video/mp4" />
</video>

## Viewing Database Information

Next to the database name, click on the eye icon, and in the window that opens, you will be provided with the data for connecting to the database.

<video width="1440" autoplay loop muted controls>
  <source src="/videos/panel/databases/view-database.mp4" type="video/mp4" />
</video>

## Changing the Database Password

Next to the database name, click on the eye icon, and in the window that opens, click on the **"Change Password"** button - the password will be changed instantly and all connections will be reset.

<video width="1440" autoplay loop muted controls>
  <source src="/videos/panel/databases/change-password.mp4" type="video/mp4" />
</video>

## Connecting via PHPMyAdmin

Next to the database name, click on the eye icon, and in the window that opens, you will be provided with the data for connecting to the database - copy them, go to the [PHPMyAdmin](https://db.senko.digital) page and use this data to log into the panel.

<video width="1440" autoplay loop muted controls>
  <source src="/videos/panel/databases/connect-to-phpmyadmin.mp4" type="video/mp4" />
</video>

## Importing a Database via PHPMyAdmin

Log into the PHPMyAdmin control panel, go to the management of the needed database, go to the "**Import**" tab, upload your database file and click on the "**Import**" button.

<video width="1440" autoplay loop muted controls>
  <source src="/videos/panel/databases/import-database.mp4" type="video/mp4" />
</video>

## Exporting a Database via PHPMyAdmin

Log into the PHPMyAdmin control panel, go to the management of the needed database, go to the "**Export**" tab and click on the "**Export**" button.

<video width="1440" autoplay loop muted controls>
  <source src="/videos/panel/databases/export-database.mp4" type="video/mp4" />
</video>
