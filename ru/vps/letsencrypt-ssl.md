---
title: "Настройка Let's Encrypt для автоматического обновления SSL-сертификатов"
description: "Подробное руководство по настройке бесплатных SSL-сертификатов Let's Encrypt с автоматическим обновлением на вашем VPS сервере."
head:
  - - meta
    - name: keywords
      content: lets encrypt, ssl сертификат, https, автоматическое обновление сертификатов, certbot, vps, nginx, apache, безопасность, шифрование
  - - meta
    - property: og:title 
      content: "Настройка Let's Encrypt для автоматического обновления SSL-сертификатов"
  - - meta
    - property: og:description
      content: "Подробное руководство по настройке бесплатных SSL-сертификатов Let's Encrypt с автоматическим обновлением на вашем VPS сервере."
---

# Настройка Let's Encrypt для автоматического обновления SSL-сертификатов

В этом руководстве мы рассмотрим, как настроить бесплатные SSL-сертификаты от Let's Encrypt с автоматическим обновлением для вашего веб-сервера на VPS.

## Что такое Let's Encrypt и почему это важно

Let's Encrypt — это бесплатный, автоматизированный и открытый центр сертификации, позволяющий получить SSL-сертификаты для шифрования соединений через HTTPS. 

Использование HTTPS имеет несколько преимуществ:

- Защита данных пользователей при передаче информации
- Улучшение поисковой выдачи (Google, Yandex и другие поисковики отдают предпочтение сайтам с HTTPS)
- Повышение доверия посетителей
- Поддержка современных веб-технологий (HTTP/2, WebSockets и др.)

## Предварительные требования

- VPS с установленной ОС Linux (как пример, используется ОС Ubuntu 24)
- Уже настроенный веб-сервер (Nginx или Apache)
- Доменное имя, направленное на IP-адрес вашего сервера
- SSH-доступ к серверу с правами root

## Установка Certbot

Certbot — это утилита, которая взаимодействует с Let's Encrypt для получения сертификатов и настройки вашего веб-сервера.

::: code-group

```bash [Ubuntu/Debian]
# Установка Certbot
sudo apt update -y
sudo apt install certbot -y

# Установка плагина для Nginx
sudo apt install python3-certbot-nginx -y

# Установка плагина для Apache
sudo apt install python3-certbot-apache -y
```

```bash [CentOS/RHEL]
# Установка EPEL репозитория
sudo dnf install epel-release

# Установка Certbot
sudo dnf install certbot

# Установка плагина для Nginx
sudo dnf install python3-certbot-nginx

# Установка плагина для Apache
sudo dnf install python3-certbot-apache
```

```bash [Fedora]
# Установка Certbot
sudo dnf install certbot

# Установка плагина для Nginx
sudo dnf install python3-certbot-nginx

# Установка плагина для Apache
sudo dnf install python3-certbot-apache
```

:::

## Получение сертификата

::: code-group

```bash [Nginx]
# Получение сертификата для Nginx
sudo certbot --nginx -d example.com -d www.example.com
```

```bash [Apache]
# Получение сертификата для Apache
sudo certbot --apache -d example.com -d www.example.com
```

:::

::: tip
Замените `example.com` и `www.example.com` на ваши доменные имена. Вы можете указать несколько доменов, добавляя параметр `-d домен` для выпуска SSL к каждому новому домену.
:::

Certbot предложит вам указать email для уведомлений, принять условия использования и выбрать, хотите ли вы перенаправлять HTTP на HTTPS.

Вы также можете не указывать email адрес, добавив параметр `--register-unsafely-without-email`.

## Проверка автоматического обновления

Let's Encrypt выдаёт сертификаты, действительные только на 90 дней, поэтому автоматическое обновление сертификатов критически важно для обеспечения бесперебойной работы сайта.

Проверьте, настроено ли автоматическое обновление:

```bash
sudo systemctl list-timers | grep certbot
```

Если таймера не существует, его нужно будет создать вручную:

```bash
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
```

Вы также можете проверить корректность уже существующих настроек, запустив пробное обновление сертификата:

```bash
sudo certbot renew --dry-run
```

## Настройка веб-сервера для оптимального использования SSL

### Оптимизация Nginx

Создайте файл с настройками SSL для включения в конфигурацию серверов:

```bash
sudo nano /etc/nginx/snippets/ssl-params.conf
```

И добавьте следующие параметры:

```nginx
ssl_protocols TLSv1.2 TLSv1.3;
ssl_prefer_server_ciphers on;
ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
ssl_session_cache shared:SSL:10m;
ssl_session_timeout 1h;
ssl_session_tickets off;
ssl_stapling on;
ssl_stapling_verify on;
resolver 8.8.8.8 8.8.4.4 valid=300s;
resolver_timeout 5s;
add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload";
add_header X-Frame-Options DENY;
add_header X-Content-Type-Options nosniff;
add_header X-XSS-Protection "1; mode=block";
```

И включите его в конфигурацию сервера:

```nginx
server {
    listen 443 ssl http2;
    server_name example.com www.example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    include snippets/ssl-params.conf;
    
    # Ваша конфигурация ниже
}
```

### Оптимизация Apache

Для Apache создайте или отредактируйте файл:

```bash
sudo nano /etc/apache2/conf-available/ssl-params.conf
```

И добавьте следующие параметры:

```apache
SSLProtocol -all +TLSv1.2 +TLSv1.3
SSLHonorCipherOrder on
SSLCipherSuite ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384
SSLSessionCache shmcb:${APACHE_LOG_DIR}/ssl_scache(512000)
SSLSessionTickets off
SSLUseStapling on
SSLStaplingCache "shmcb:${APACHE_LOG_DIR}/ocsp(1048576)"
Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
Header always set X-Frame-Options DENY
Header always set X-Content-Type-Options nosniff
Header always set X-XSS-Protection "1; mode=block"
```

Включите нужные модули и конфигурацию:

```bash
sudo a2enmod ssl headers http2
sudo a2enconf ssl-params
sudo systemctl restart apache2
```

## Устранение проблем

### Срок действия сертификата истёк

Если срок действия сертификата истёк, выполните принудительное обновление:

```bash
sudo certbot renew --force-renewal
```

### Certbot не может проверить владение доменом

- Убедитесь, что DNS-записи правильно настроены и указывают на ваш IP
- Проверьте, что порты 80 и 443 открыты в фаерволе
- Убедитесь, что веб-сервер правильно настроен и запущен

```bash
sudo ufw status
sudo systemctl status nginx # или apache2
```

### Ошибки в файлах конфигурации веб-сервера

Проверьте конфигурацию на ошибки:

**Для Nginx:**

```bash
sudo nginx -t
```

**Для Apache:**

```bash
sudo apachectl configtest
```

В случае возникновения ошибок, советуем внимательно ознакомиться с ними и поправить конфигурационные файлы для решения проблемы.

## Заключение

Настройка автоматического обновления SSL-сертификатов с Let's Encrypt — это надёжный и бесплатный способ обеспечить безопасность вашего веб-сайта. Благодаря правильной настройке, сертификаты будут обновляться автоматически, избавляя вас от необходимости следить за сроком действия и их ручного продления.

При возникновении любых вопросов или проблем вы всегда можете обратиться в нашу [службу поддержки](https://senko.digital/contacts).
