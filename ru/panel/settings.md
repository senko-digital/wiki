---
title: "Настройки сервера"
description: "Руководство по настройке игрового сервера. Управление SFTP доступом, переименование сервера и другие базовые настройки."
head:
  - - meta
    - name: keywords
      content: настройки сервера, sftp доступ, игровая панель, конфигурация, управление сервером
  - - meta
    - property: og:title 
      content: "Настройки сервера"
  - - meta
    - property: og:description
      content: "Руководство по настройке игрового сервера. Управление SFTP доступом, переименование сервера и другие базовые настройки."
---

# ⚙️ Настройки

Информация про страницу настроек в игровой панели управления.

## О странице

На данной странице вы можете изменить название своего сервера в панели управления, просмотреть данные для подключения к серверу по протоколу SFTP (Secure File Transportation Protocol), просмотреть информацию о том, на каком узле располагается ваш сервер, а так же переустановить его.

![settings page](/images/panel/settings/showcase.png){data-zoomable}

## Данные от SFTP

Все предоставленные в форме данные следует использовать для подключения к серверу по протоколу SFTP. Для ОС Windows существуют программы [WinSCP](https://winscp.net/eng/download.php) и [FileZilla](https://filezilla-project.org/download.php), которые позволяют установить такое подключение.

При подключении обязательно нужно использовать именно тот пароль, который используется для входа в панель управления.

## Отображение в панели

Вы можете свободно менять название вашего игрового сервера, но обратите внимание, что это меняет его название только в панели управления. Для изменения названия сервера в самой игре вам нужно будет сделать соответствущие изменения в конфиге сервера.

Так же не рекомендуется редактировать описание вашего игрового сервера, так как там указываются данные об ID услуги и её тарифе. При переименовании описания он может вернуться в исходное состояние автоматически через некоторое время.

## Переустановка сервера

При переустановке сервера будут удалены все данные, которые вы могли загрузить или изменить на сервере. Он будет возвращён в исходное состояние, то есть таком, в котором вы его изначально получили. Перед установкой рекомендуем убедиться в том, что вы сохранили все важные данные.

![settings page](/images/panel/settings/reinstall.png){data-zoomable}

Параметры запуска, бэкапы и базы данных при этом удалены не будут.
