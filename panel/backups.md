---
title: "Backup"
description: "Guide to creating and managing game server backups. Data protection and quick server recovery."
head:
  - - meta
    - name: keywords
      content: backups, backup copies, game panel, server recovery, backup
  - - meta
    - property: og:title 
      content: "Control Panel - Backup"
  - - meta
    - property: og:description
      content: "Guide to creating and managing game server backups. Data protection and quick server recovery."
---

# ❗️ Backups

Quick guide to creating and using backups in the game control panel.

## Page Description

With this tab, you can create new and restore old backups of your game server files.

This function is very useful if you need regular backups of your server data, or if you need to export a collection of the most important files on your server.

By default, each service is provided with one backup with a size of no more than 20 GB. Contact support to request additional space.

![backup management](/images/panel/backups.png){data-zoomable}

## Creating a New Backup

To create a new backup, click on the **"Create Backup"** button.

In the window that opens, enter the desired backup name in Latin characters; it's recommended to leave the other fields empty.

<video width="1440" autoplay loop muted controls>
  <source src="/videos/panel/backups/create-backup.mp4" type="video/mp4" />
</video>

## Downloading a Backup

Next to the server name, click on the dropdown menu and select the **"download"** option.

<video width="1440" autoplay loop muted controls>
  <source src="/videos/panel/backups/download-backup.mp4" type="video/mp4" />
</video>

## Deleting a Backup

Next to the server name, click on the dropdown menu and select the **"delete"** option.

::: danger
**Warning**: when deleting a backup, all data from it will be lost; we strongly recommend downloading it before performing this operation.
:::

<video width="1440" autoplay loop muted controls>
  <source src="/videos/panel/backups/delete-backup.mp4" type="video/mp4" />
</video>

## Restoring from a Backup

Next to the server name, click on the dropdown menu and select the **"restore"** option.

<video width="1440" autoplay loop muted controls>
  <source src="/videos/panel/backups/restore-backup.mp4" type="video/mp4" />
</video>

::: warning
When restoring from a backup, it is not recommended to delete all server files.
:::

The server will immediately start downloading and will be restored from your created backup within a couple of minutes.

## Restricting Backup Deletion

Next to the server name, click on the dropdown menu and select the **"restrict deletion"** option.

<video width="1440" autoplay loop muted controls>
  <source src="/videos/panel/backups/restrict-delete.mp4" type="video/mp4" />
</video>

::: tip
Now you and other users will not be able to accidentally delete the backup.
:::

## Allowing Backup Deletion

Next to the server name, click on the dropdown menu and select the **"allow deletion"** option.

<video width="1440" autoplay loop muted controls>
  <source src="/videos/panel/backups/allow-delete.mp4" type="video/mp4" />
</video>

::: tip
Now you and other users will be able to delete the backup at any time.
:::
