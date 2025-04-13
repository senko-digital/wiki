---
title: "Server Settings"
description: "Guide to configuring a game server. Managing SFTP access, renaming the server, and other basic settings."
head:
  - - meta
    - name: keywords
      content: server settings, sftp access, game panel, configuration, server management
  - - meta
    - property: og:title 
      content: "Server Settings"
  - - meta
    - property: og:description
      content: "Guide to configuring a game server. Managing SFTP access, renaming the server, and other basic settings."
---

# ⚙️ Settings

Information about the settings page in the game control panel.

## About the Page

On this page, you can change the name of your server in the control panel, view the data for connecting to the server via SFTP (Secure File Transportation Protocol), view information about which node your server is located on, as well as reinstall it.

![settings page](/images/panel/settings/showcase.png){data-zoomable}

## SFTP Data

All the data provided in the form should be used to connect to the server via SFTP protocol. For Windows OS, there are programs [WinSCP](https://winscp.net/eng/download.php) and [FileZilla](https://filezilla-project.org/download.php) that allow you to establish such a connection.

When connecting, it's necessary to use the same password that is used to log into the control panel.

## Display in the Panel

You can freely change the name of your game server, but note that this only changes its name in the control panel. To change the server name in the game itself, you will need to make the corresponding changes in the server config.

It's also not recommended to edit the description of your game server, as it contains information about the service ID and its plan. When renaming the description, it may automatically revert to its original state after some time.

## Server Reinstallation

When reinstalling the server, all data that you could have uploaded or changed on the server will be deleted. It will be returned to its original state, that is, the state in which you initially received it. Before installation, we recommend making sure that you have saved all important data.

![settings page](/images/panel/settings/reinstall.png){data-zoomable}

Startup parameters, backups, and databases will not be deleted.
