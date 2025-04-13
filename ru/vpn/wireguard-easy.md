---
title: "Руководство по установке WireGuard Easy"
description: "Полное руководство по установке и настройке VPN-сервера WireGuard Easy на Debian, Ubuntu, CentOS, Fedora и AlmaLinux"
head:
  - - meta
    - name: keywords
      content: wireguard, vpn, сервер, установка, debian, ubuntu, centos, fedora, almalinux, руководство
  - - meta
    - property: og:title 
      content: "WireGuard Easy - Кроссплатформенное руководство по установке"
  - - meta
    - property: og:description
      content: "Пошаговое руководство по установке и настройке VPN-сервера WireGuard Easy на различных дистрибутивах Linux."
---

# Руководство по установке WireGuard Easy

<img src="/images/vpn/wireguard-easy/wg-easy-logo.png" style="display: flex !important; justify-content: center !important; height: 500px;"></img>

WireGuard Easy - это простое и безопасное VPN-решение, которое работает на различных дистрибутивах Linux.

Это руководство поможет вам установить и настроить сервер WireGuard Easy на вашем сервере **Debian**, **Ubuntu**, **CentOS**, **Fedora** или **AlmaLinux**.

## Требования

- Сервер с root-доступом
- Минимум 1 ГБ оперативной памяти
- Доменное имя (опционально, но рекомендуется)
- Открытый порт 51820 UDP в вашем брандмауэре

**Любой из наших тарифов отлично подойдёт для создания вашего собственного VPN-сервера**.

Если вы ищете более высокую скорость через VPN, вам стоит обратить внимание на нашу линейку тарифов на базе "[Ryzen 9 7950X3D](https://senko.digital/virtual-servers)", так как они предлагают значительно более высокие скорости по сравнению с линейкой "[EPYC 9454P](https://senko.digital/virtual-servers)".

На серверах всегда действуют наши [условия использования](https://senko.digital/terms) и [политика Fair Usage](https://senko.digital/terms#section-8).

## Шаги установки

### 0. Подключение к серверу

Установите SSH-соединение с вашим сервером, используя данные которые вы получили в активационном письме от сервера, или те, которые вы установили самостоятельно.

Если вы не знаете, как это сделать, можете попробовать проследовать нашему руководству "[Как подключиться к серверу (Linux)](/vps/how-to-connect-through-ssh)".

### 1. Обновление системных пакетов

::: code-group

```bash [Debian/Ubuntu]
# Установите sudo, если он еще не установлен
apt-get -y install sudo

sudo apt update && sudo apt upgrade -y
```

```bash [CentOS/Fedora/AlmaLinux]
sudo dnf update -y
```

:::

### 2. Установка Docker и Docker Compose

::: code-group

```bash [Debian/Ubuntu]
# Установка необходимых пакетов
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common

# Добавление официального GPG-ключа Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Добавление репозитория Docker
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Установка Docker
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io

# Установка Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

```bash [CentOS/Fedora/AlmaLinux]
# Установка необходимых пакетов
sudo dnf install -y dnf-plugins-core

# Добавление репозитория Docker
sudo dnf config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo

# Установка Docker
sudo dnf install -y docker-ce docker-ce-cli containerd.io

# Установка Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

:::

### 3. Запуск и включение Docker

```bash
# Запуск службы Docker
sudo systemctl start docker
# Добавление Docker в автозагрузку
sudo systemctl enable docker
```

### 4. Создание конфигурации WireGuard Easy

Создайте новую папку для WireGuard Easy:
```bash
mkdir -p ~/wireguard-easy
cd ~/wireguard-easy
```

Создайте файл `docker-compose.yml`:
```bash
cat > docker-compose.yml << EOF
version: '3.8'
services:
  wireguard:
    image: ghcr.io/wg-easy/wg-easy
    container_name: wg-easy
    environment:
      - WG_HOST=your-server-ip-or-domain
      - PASSWORD=your-password
      - WG_PORT=51820
      - WG_DEFAULT_DNS=1.1.1.1,8.8.8.8
    volumes:
      - ./wg-easy:/etc/wireguard
    ports:
      - "51820:51820/udp"
      - "51821:51821/tcp"
    restart: unless-stopped
    cap_add:
      - NET_ADMIN
      - SYS_MODULE
    sysctls:
      - net.ipv4.ip_forward=1
      - net.ipv4.conf.all.src_valid_mark=1
EOF
```

Замените `your-server-ip-or-domain` на IP-адрес или доменное имя вашего сервера, а `your-password` на надёжный пароль для веб-панели.

### 5. Запуск WireGuard Easy

```bash
docker-compose up -d
```

### 6. Доступ к веб-панели

Откройте веб-браузер и перейдите по адресу:
```
http://your-server-ip:51821
```

Где `your-server-ip` - IPv4-адрес вашего сервера.

## Настройка

1. Войдите в веб-панель, используя установленный вами пароль
2. Создайте новых клиентов, нажав кнопку "Add Client"
3. Скачайте файл конфигурации клиента (файл `.conf`)
4. Импортируйте конфигурацию в ваш клиент WireGuard

## Установка клиента

### Windows
1. Скачайте WireGuard с официального сайта - [wireguard.com](https://www.wireguard.com/install/)

![Скачивание WireGuard на Windows](/images/vpn/wireguard-easy/windows-download-wireguard.png){data-zoomable}

2. Откройте установщик и дождитесь завершения установки

![Открытие установщика WireGuard](/images/vpn/wireguard-easy/windows-open-installer.png){data-zoomable}

![Установка WireGuard на Windows](/images/vpn/wireguard-easy/windows-install-wireguard.png){data-zoomable}

Приложение автоматически откроется после завершения установки.

3. Импортируйте файл конфигурации

<video width="1440" autoplay controls loop muted>
  <source src="/videos/vpn/wireguard-easy/import-config-windows.mp4" type="video/mp4" />
</video>

4. Подключитесь к VPN

Для этого нажмите кнопку "Активировать" (англ. - "Activate").

![Подключение к конфигурации WireGuard на Windows](/images/vpn/wireguard-easy/windows-connect.png){data-zoomable}

**Готово!**

Теперь весь ваш интернет-трафик теперь должен проходить через VPN.

### macOS
1. Установите WireGuard из Mac App Store

![WireGuard в Mac App Store](/images/vpn/wireguard-easy/app-store.png){data-zoomable}

2. Запустите приложение

![Приложение WireGuard в поиске на macOS](/images/vpn/wireguard-easy/macos-wireguard-search.png){data-zoomable}

3. Импортируйте файл конфигурации

<video width="1440" autoplay controls loop muted>
  <source src="/videos/vpn/wireguard-easy/import-config-macos.mp4" type="video/mp4" />
</video>

Если вы впервые используете WireGuard на своем компьютере, macOS спросит, разрешить ли WireGuard создавать и управлять VPN-соединениями.

**Выберите "Разрешить" (англ. - "Allow"), чтобы разрешить приложению работать должным образом**.

4. Подключитесь к VPN

Для этого нажмите кнопку "Активировать" (на англ. - "Activate").

![Подключение к конфигурации WireGuard на macOS](/images/vpn/wireguard-easy/macos-connect.png){data-zoomable}

**Готово!** 

Весь ваш интернет-трафик теперь должен проходить через VPN.

### Linux

::: code-group

```bash [Debian/Ubuntu]
sudo apt install wireguard
```

```bash [CentOS/Fedora/AlmaLinux]
sudo dnf install wireguard-tools
```

:::

После установки вы можете подключиться к VPN, используя командную строку или графический интерфейс.

#### Через командную строку

0. Откройте Терминал (обычно находится в меню приложений или запускается сочетанием клавиш Ctrl+Alt+T)

1. **Импорт конфигурации**
   ```bash
   # Копирование файла конфигурации в директорию WireGuard
   sudo cp your-config.conf /etc/wireguard/wg0.conf
   ```

2. **Запуск VPN-соединения**
   ```bash
   # Запуск VPN
   sudo wg-quick up wg0

   # Проверка статуса соединения
   sudo wg show
   ```

3. **Остановка VPN-соединения**
   ```bash
   sudo wg-quick down wg0
   ```

4. **Включение автозапуска (опционально)**
   ```bash
   sudo systemctl enable wg-quick@wg0
   sudo systemctl start wg-quick@wg0
   ```

#### Через графический интерфейс

1. **Установка плагина NetworkManager для WireGuard**

   ::: code-group

   ```bash [Debian/Ubuntu]
   sudo apt install network-manager-wireguard
   ```

   ```bash [CentOS/Fedora/AlmaLinux]
   sudo dnf install NetworkManager-wireguard
   ```

   :::

2. **Импорт конфигурации**
   - Откройте Network Manager (обычно находится в системных настройках)
   - Нажмите кнопку "+" для добавления нового соединения
   - Выберите "Import a saved VPN configuration"
   - Выберите ваш файл конфигурации (`.conf`)
   - Нажмите "Add"

3. **Подключение**
   - Нажмите на значок сети в системном трее
   - Выберите ваше WireGuard-соединение
   - Введите пароль, если потребуется
   - Нажмите "Connect"

#### Устранение неполадок подключения в Linux

1. **Проверка статуса интерфейса**
   ```bash
   ip addr show wg0
   ```
   Эта команда показывает подробную информацию о вашем интерфейсе WireGuard. Ищите:
   - `inet` адрес: должен показывать назначенный VPN IP-адрес
   - Статус `UP`: указывает, что интерфейс активен
   - Флаг `POINTOPOINT`: должен присутствовать для VPN-соединений
   
   Пример работающего интерфейса:
   ```
   4: wg0: <POINTOPOINT,UP,LOWER_UP> mtu 1420 qdisc noqueue state UNKNOWN group default qlen 1000
       link/none 
       inet 10.0.0.2/24 scope global wg0
          valid_lft forever preferred_lft forever
   ```

2. **Проверка таблицы маршрутизации**
   ```bash
   ip route
   ```
   Это показывает все сетевые маршруты. Для работающего VPN-соединения вы должны увидеть:
   - Маршрут для вашей подсети VPN (например, `10.0.0.0/24 dev wg0`)
   - Маршрут по умолчанию должен идти через VPN, если вы используете полный туннельный режим
   - Специфические маршруты для разделенного туннелирования, если настроено
   
   Пример вывода при активном VPN:
   ```
   default via 10.0.0.1 dev wg0 
   10.0.0.0/24 dev wg0 proto kernel scope link src 10.0.0.2
   ```

3. **Проверка работы DNS**
   ```bash
   cat /etc/resolv.conf
   ```
   Убедитесь, что ваши DNS-серверы правильно настроены. Вы должны увидеть:
   - DNS-серверы, указанные в вашей конфигурации WireGuard
   - Отсутствие конфликтующих DNS настроек
   
   Пример правильной DNS-конфигурации:
   ```
   nameserver 1.1.1.1
   nameserver 8.8.8.8
   ```

4. **Проверка правил брандмауэра**
   ```bash
   sudo iptables -L
   ```
   Эта команда выведет ваши правила брандмауэра (firewall). Ищите:
   - Правила, разрешающие UDP-трафик на порту 51820
   - Правила, разрешающие трафик через интерфейс wg0
   - Отсутствие правил, блокирующих VPN-трафик
   
   Пример правильных правил брандмауэра:
   ```
   Chain INPUT (policy ACCEPT)
   target     prot opt source               destination
   ACCEPT     udp  --  anywhere             anywhere             udp dpt:51820
   
   Chain FORWARD (policy ACCEPT)
   target     prot opt source               destination
   ACCEPT     all  --  anywhere             anywhere
   ```

5. **Просмотр логов соединения**
   ```bash
   journalctl -u wg-quick@wg0
   ```
   Эта команда выведет системные логи для службы WireGuard. Ищите:
   - Успешное создание интерфейса
   - Отсутствие ошибок прав доступа
   - Отсутствие конфликтов маршрутизации
   - Сообщения об успешном рукопожатии
   
   Пример успешных логов соединения:
   ```
   Starting WireGuard via wg-quick(8) for wg0...
   [#] ip link add wg0 type wireguard
   [#] wg setconf wg0 /dev/fd/63
   [#] ip -4 address add 10.0.0.2/24 dev wg0
   [#] ip link set mtu 1420 up dev wg0
   [#] wg set wg0 fwmark 51820
   [#] ip -4 route add 0.0.0.0/0 dev wg0 table 51820
   ```

6. **Проверка статуса WireGuard**
   ```bash
   sudo wg show
   ```
   Это выведет подробный статус интерфейса WireGuard. Ищите:
   - `latest handshake`: должен быть недавним (в течение последних 2 минут)
   - `transfer`: должен показывать увеличивающиеся числа для активных соединений
   - `allowed ips`: должен соответствовать вашей конфигурации
   
   Пример работающего соединения:
   ```
   interface: wg0
     public key: your-public-key
     private key: (hidden)
     listening port: 51820
   
   peer: server-public-key
     endpoint: your-server:51820
     allowed ips: 0.0.0.0/0
     latest handshake: 1 minute, 23 seconds ago
     transfer: 1.21 MiB received, 3.45 MiB sent
   ```

7. **Проверка соединения**
   ```bash
   ping -I wg0 1.1.1.1
   ```
   Эта команда проверяет подключение через интерфейс WireGuard. Вы должны увидеть:
   - Успешные ответы ping
   - Низкую задержку (обычно < 100 мс)
   - Отсутствие потери пакетов
   
   Пример успешного ping:
   ```
   PING 1.1.1.1 (1.1.1.1) from 10.0.0.2 wg0: 56(84) bytes of data.
   64 bytes from 1.1.1.1: icmp_seq=1 ttl=57 time=45.3 ms
   64 bytes from 1.1.1.1: icmp_seq=2 ttl=57 time=46.1 ms
   ```

### Android/iOS
1. Установите WireGuard из соответствующего магазина приложений - [Google Play](https://play.google.com/store/apps/details?id=com.wireguard.android&hl=en) / [App Store](https://apps.apple.com/us/app/wireguard/id1441195209)
2. Импортируйте файл конфигурации - вы также можете сделать это отсканировав QR-код в веб-панели WireGuard Easy
3. Подключитесь к VPN

## Устранение неполадок

### Распространенные проблемы

1. **Не удается подключиться к веб-панели**
   - Проверьте, открыт ли порт 51821 в вашем брандмауэре
   - Убедитесь, что Docker запущен: `sudo systemctl status docker`

2. **Проблемы с VPN-соединением**
   - Убедитесь, что порт 51820 UDP открыт в вашем брандмауэре
   - Проверьте, правильный ли IP-адрес сервера указан в конфигурации
   - Убедитесь, что конфигурация клиента правильно импортирована

3. **Медленное соединение**
   - Проверьте сетевое соединение вашего сервера
   - Убедитесь, что нет ограничений пропускной способности
   - Рассмотрите возможность использования иного DNS сервера

Также можете проследовать [нашей статье](/ru/troubleshooting/low-speed-through-vpn) с инструкциями по решению проблем со скоростью через VPN.

## Рекомендации по безопасности

1. Всегда используйте надежные пароли для веб-панели
2. Следите за обновлениями системы и Docker
3. Используйте брандмауэр для ограничения доступа только к необходимым портам
4. Рассмотрите возможность использования доменного имени с SSL для веб-панели
5. Регулярно создавайте резервные копии ваших конфигураций WireGuard

## Обслуживание

### Обновление WireGuard Easy
```bash
cd ~/wireguard-easy
docker-compose pull
docker-compose up -d
```

### Резервное копирование конфигурации
```bash
cp -r ~/wireguard-easy/wg-easy ~/wireguard-backup
```

### Восстановление конфигурации
```bash
cp -r ~/wireguard-backup ~/wireguard-easy/wg-easy
docker-compose restart
```
