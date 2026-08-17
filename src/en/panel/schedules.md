---
title: "Task Scheduler"
description: "Guide to automating server tasks using the game panel scheduler. Learn how to set up automated restarts, backups, and command execution on your game server."
head:
  - - meta
    - name: keywords
      content: pterodactyl scheduler, task automation, server scheduling, cron jobs, automated backups, server restarts, game server automation, senko digital
  - - meta
    - property: og:title 
      content: "Game Panel - Task Scheduler"
  - - meta
    - property: og:description
      content: "Guide to automating server tasks using the game panel scheduler. Learn how to set up automated restarts, backups, and command execution on your game server."
---

# Task Scheduler

Quick guide to using the scheduling function in the game control panel.

## Page Description

With this tab, you can create new and manage other command schedules that will be executed on your server.

This function is very useful if you need to regularly restart the server, input certain commands, or make server backups every day or every n-minutes/hours.

In this guide, we will show you how to create a schedule and configure it.

![schedules management](/images/panel/schedules.png){data-zoomable}

::: tip
For setting up time for scheduling, we recommend using **[Crontab.online](https://crontab.online/)**
:::

## Creating a New Schedule

To create a new schedule, click on the **"Create Schedule"** button.

In the window that opens, enter the desired schedule name in any language that is convenient for you.

In the time fields, you need to specify the values that are most convenient for you.

For example, to execute a command every day at 4 AM, you would need to specify the following values:

![restart server at 4am](/images/panel/schedules/4am-restart.png){data-zoomable}

For setting up the schedule time, we recommend using **[Crontab.online](https://crontab.online/ru/)**

## Creating Tasks in the Schedule

Click on the schedule you need, and in the window that opens, click on **"new task"**.

Select the task you need - in our case, it will be "power management" with the **"restart"** parameter, as we are creating a task to restart the server every day at 4 AM.

![task to restart server](/images/panel/schedules/restart.png){data-zoomable}

Also specify the interval if you want the task to be executed with a small delay from the time you set in the schedule.

## Deleting a Schedule

Go to the management of the desired schedule and click on the **"delete"** button.

![delete schedule](/images/panel/schedules/delete.png){data-zoomable}

## Automating Server Backups

Go to manage an already created schedule, and create a new task.

Select the task to create a backup.

![backup schedule](/images/panel/schedules/backup.png){data-zoomable}

::: tip
Since by default only one backup is provided for each server, when executing this scenario, the old backup will be automatically replaced with a newer one.
:::

It's recommended to leave the "ignored files" field empty.
