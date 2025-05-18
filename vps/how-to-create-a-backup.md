---
title: "How to Create a Backup"
description: "A comprehensive guide on creating and managing backups for virtual servers at Senko Digital. Learn how to create manual backups, manage them, and restore your VMs when needed."
head:
  - - meta
    - name: keywords
      content: vm backup, virtual machine backup, backup management, vm restore, backup storage, senko digital backup
  - - meta
    - property: og:title 
      content: "How to Create a Backup"
  - - meta
    - property: og:description
      content: "A comprehensive guide on creating and managing backups for virtual servers at Senko Digital. Learn how to create manual backups, manage them, and restore your VMs when needed."
---

# How to сreate a VM backup

A comprehensive guide on creating and managing backups for virtual servers at Senko Digital. Learn how to create manual backups, manage them, and restore your VMs when needed.

## Overview

Senko Digital now provides a robust backup solution for your virtual servers:

- **Free backup storage**: Each server comes with free backup storage equal to roughly 50% of your server's disk size
- **Expandable storage**: Need more space? Additional backup storage is available for just €0.03/GiB per month
- **Secure storage**: All backups are stored on our reliable RAIDZ2-based backup cluster

A backup is a complete disk image of your virtual server that can be used for recovery. Note that when a server is deleted (e.g. when you miss your payment), its backups are also deleted.

## How do I create a backup?

To create a server backup, navigate to "Virtual Machines" → select your server → expand Menu → select "Create Backup".

![Backup creation button in VMManager](/images/vps/how-to-create-a-backup/create-button-en.png){data-zoomable}

1. Select the disk you want to back up
2. Specify the name for the new backup. By default, backup names follow this format:
   ```
   <vmname>_backup_<unixtime>
   ```
   Where:
   - `<vmname>` is your server's name (e.g., vm367821)
   - `<unixtime>` is the current UNIX time in milliseconds
   
   Example: `vm367821_backup_1590457814782`

3. Add a note to help identify the purpose of your backup
4. For servers running databases or critical applications that write data to disk, it's recommended to enable the "Stop VM during backup creation" option to ensure data integrity
5. Select "Create Backup"

![Backup creation wizard in VMManager](/images/vps/how-to-create-a-backup/backup-wizard-en.png){data-zoomable}

Done! Your server backup will be created shortly.

The backup creation process goes through several stages:
1. Creating an initial backup of your VM's disk on the node
2. Transferring the backup to our RAIDZ2-based cluster
3. Verifying the backup's integrity
4. Completing the backup creation process

## How do I restore my server from a backup?

Backups are available in the [left menu](https://vm.senko.digital/vm/manager/backup/list), as well as in your server's card.

![VM Backup page in VMManager](/images/vps/how-to-create-a-backup/backup-page-en.png){data-zoomable}

![VM card with backups section in VMManager](/images/vps/how-to-create-a-backup/backup-vm-card-en.png){data-zoomable}

In either menu, you can restore your server's backup by clicking the "restore" button and agreeing with the wizard to start the process.

You can monitor the progress in the "Task Queue" tab:

![Tasks queue in VMManager](/images/vps/how-to-create-a-backup/tasks-queue-en.png){data-zoomable}

### Recommendations

- Create regular backups of important data
- Keep at least one recent backup for quick recovery
- Create backups on storage separate from the hosting's infrastructure for greater data security
- Monitor your backup storage usage to ensure you have enough space
- Periodically test your backups (if needed)
