import { defineConfig } from 'vitepress'
import { fileURLToPath } from 'url'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'src',
  cleanUrls: true,
  title: 'Senko Digital Wiki',
  description:
    'Official wiki of Senko Digital hosting provider - the fluffiest hosting in the world!',
  rewrites: {
    'en/:rest*': ':rest*',
  },
  vite: {
    publicDir: fileURLToPath(new URL('../public', import.meta.url)),
    resolve: {
      alias: {},
    },
  },
  head: [
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-Q7GRS625CP' }],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Q7GRS625CP');`,
    ],
    [
      'script',
      {
        defer: '',
        src: 'https://umami.senko.digital/script.js',
        'data-website-id': 'bfea03e3-f799-4fcb-95e9-6ed2e74d757a',
      },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/favicons/apple-touch-icon.png' },
    ],
    ['link', { rel: 'manifest', href: '/assets/favicons/site.webmanifest' }],
    [
      'link',
      { rel: 'mask-icon', href: '/assets/favicons/safari-pinned-tab.svg', color: '#3a0839' },
    ],
    ['link', { rel: 'shortcut icon', href: '/assets/favicons/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#3a0839' }],
    ['meta', { name: 'msapplication-config', content: '/assets/favicons/browserconfig.xml' }],
    ['meta', { name: 'theme-color', content: '#7528ef' }],
    ['link', { rel: 'stylesheet', href: '/custom.css' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap',
      },
    ],
    [
      'meta',
      {
        name: 'keywords',
        content: 'хостинг, vps, игровой хостинг, gmod, minecraft, cs2, защита от ddos',
      },
    ],
    ['meta', { property: 'og:site_name', content: 'Senko Digital Wiki' }],
    ['meta', { property: 'og:author', content: 'Senko Digital LLC' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'theme-color', content: '#ff8c00' }],
    [
      'link',
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/favicons/apple-touch-icon.png' },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/assets/favicons/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/assets/favicons/favicon-16x16.png',
      },
    ],
    ['link', { rel: 'manifest', href: '/assets/favicons/site.webmanifest' }],
    [
      'link',
      { rel: 'mask-icon', href: '/assets/favicons/safari-pinned-tab.svg', color: '#ff8c00' },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#ff8c00' }],
    ['meta', { name: 'theme-color', content: '#ff8c00' }],
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      description:
        'Official wiki of Senko Digital hosting provider - useful guides for managing game servers, using our control panels, setting up VPNs and much more!',
      themeConfig: {
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search articles',
              },
              modal: {
                noResultsText: 'No articles were found while looking for',
                resetButtonTitle: 'Clear',
                footer: {
                  selectText: '- to select an article',
                  navigateText: '- to navigate between articles',
                  closeText: '- to close the search',
                },
              },
            },
          },
        },
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Support', link: 'https://senko.digital/contacts' },
          { text: 'Client Area', link: 'https://my.senko.digital/billmgr' },
        ],
        outlineTitle: 'On this page',
        lastUpdated: {
          text: 'Last updated',
          formatOptions: {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Europe/London',
          },
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page',
        },
        editLink: {
          pattern: 'https://github.com/senko-digital/wiki/edit/master/src/:path',
          text: 'Edit this article on GitHub',
        },
        sidebar: {
          '/': [
            { text: '🦊 Home', link: '/' },
            { text: '🤔 Frequently Asked Questions', link: '/faq' },
            { text: '🤔 How to Choose a Hosting Provider', link: '/how-to-choose-a-provider' },
            { text: '🌐 BGP Sessions', link: '/bgp-sessions' },
            {
              text: '💻 Client Area',
              items: [
                { text: '👤 How to register', link: '/client-area/register' },
                { text: '💲 How to order a server', link: '/client-area/vps-order' },
                { text: '❓ How to leave a support ticket', link: '/client-area/new-ticket' },
                { text: '🫂 Referral Program', link: '/client-area/referral' },
                {
                  text: '🔒 Two-Factor Authentication',
                  link: '/client-area/two-factor-authentication',
                },
                {
                  text: '📲 Telegram Notifications',
                  link: '/client-area/telegram-notifications',
                },
              ],
              collapsed: false,
            },
            {
              text: '🛒 Plans',
              items: [
                { text: '🎮 Game Hosting', link: '/plans/game' },
                { text: '💻 Virtual Servers', link: '/plans/vps' },
              ],
              collapsed: false,
            },
            {
              text: '💻 Virtual Servers',
              items: [
                { text: '❓ Getting Started', link: '/vps/getting-started' },
                {
                  text: '🔒 How to connect to the server (Linux)',
                  link: '/vps/how-to-connect-through-ssh',
                },
                { text: '💻 How to reinstall the OS', link: '/vps/os-reinstallation' },
                { text: '💾 How to create a backup', link: '/vps/how-to-create-a-backup' },
              ],
              collapsed: false,
            },
            {
              text: '🌐 DNS Hosting',
              items: [{ text: '❓ Getting Started', link: '/dns-hosting/getting-started' }],
              collapsed: false,
            },
            {
              text: '🖥️ Software',
              items: [
                { text: "🔒 Let's Encrypt Configuration", link: '/software/letsencrypt-ssl' },
                { text: '🚀 Node.js Deployment with PM2', link: '/software/nodejs-pm2-deploy' },
                {
                  text: '🌐 How to install MikroTik CHR',
                  link: '/software/how-to-install-mikrotik-chr-on-a-virtual-server',
                },
              ],
              collapsed: false,
            },
            {
              text: '💻 Troubleshooting',
              items: [
                { text: '🚀 Network Speed Test', link: '/troubleshooting/speedtest-cli' },
                { text: '📉 Low CPU Frequency', link: '/troubleshooting/low-cpu-frequency' },
                {
                  text: '❓ Wrong location in Google services',
                  link: '/troubleshooting/wrong-geolocation-in-google',
                },
              ],
              collapsed: false,
            },
            {
              text: '🔐 VPN',
              items: [
                { text: '🔒 3X-UI', link: '/vpn/3x-ui' },
                { text: '🔒 WireGuard', link: '/vpn/wireguard' },
                { text: '🔒 WireGuard Easy', link: '/vpn/wireguard-easy' },
                { text: '🔒 Outline', link: '/vpn/outline' },
                { text: '📨 MTProto Proxy', link: '/vpn/mtproto' },
              ],
              collapsed: false,
            },
            {
              text: '🎮 Game Hosting',
              items: [
                {
                  text: 'Game Panel',
                  items: [
                    { text: '❓ Getting Started', link: '/panel/' },
                    { text: '💻 Console', link: '/panel/console' },
                    { text: '📁 File Manager', link: '/panel/file-manager' },
                    { text: '💿 Databases', link: '/panel/databases' },
                    { text: '❗️ Backups', link: '/panel/backups' },
                    { text: '🕰️ Schedules', link: '/panel/schedules' },
                    { text: '👥 Users', link: '/panel/users' },
                    { text: '🛠️ Startup Parameters', link: '/panel/startup' },
                    { text: '⚙️ Settings', link: '/panel/settings' },
                    { text: '📖 Logs', link: '/panel/activity-logs' },
                  ],
                },
                {
                  text: "Garry's Mod",
                  items: [
                    { text: 'Changing Server Name', link: '/games/gmod/server-name' },
                    { text: 'Configuring server.cfg', link: '/games/gmod/server-cfg' },
                    { text: 'Changing The Startup Map', link: '/games/gmod/map' },
                    { text: 'Installing Workshop Collection', link: '/games/gmod/workshop' },
                    { text: 'Installing and Configuring DarkRP', link: '/games/gmod/darkrp' },
                    { text: 'Installing and Configuring ULX', link: '/games/gmod/ulx' },
                  ],
                },
                {
                  text: 'Minecraft',
                  items: [
                    { text: 'Changing Server MOTD', link: '/games/minecraft/server-name' },
                    { text: 'Changing Server Icon', link: '/games/minecraft/server-icon' },
                    {
                      text: 'Configuring server.properties',
                      link: '/games/minecraft/server-properties',
                    },
                    { text: 'Installing Custom Software', link: '/games/minecraft/software' },
                    { text: 'Installing Plugins', link: '/games/minecraft/plugins' },
                  ],
                },
                {
                  text: 'Discord Bot',
                  items: [
                    { text: '❓ Getting Started', link: '/bot/' },
                    { text: '👤 Authorization', link: '/bot/auth' },
                    { text: '🔁 Panel Server Status', link: '/bot/panel-status' },
                    { text: '🔁 Any Server Status', link: '/bot/any-status' },
                    { text: '🔁 Auto-updated Status', link: '/bot/auto-update-status' },
                    { text: '📩 Send Commands', link: '/bot/send-command' },
                    { text: '🌐 Invite Bot to Your Server', link: '/bot/invite' },
                  ],
                },
              ],
              collapsed: false,
            },
          ],
        },
      },
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      link: '/ru/',
      description:
        'Официальная вики хостинг-провайдера Senko Digital - полезные руководства по управлению игровыми серверами, использованию наших панелей управления, настройке VPN и многое другое!',
      themeConfig: {
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск страницы',
              },
              modal: {
                noResultsText: 'Статья не найдена. Вы пытались найти:',
                resetButtonTitle: 'Очистить',
                footer: {
                  selectText: '- для выбора статьи',
                  navigateText: '- для переключения между результатами',
                  closeText: '- для закрытия поиска',
                },
              },
            },
          },
        },
        nav: [
          { text: 'Главная', link: '/ru/' },
          { text: 'Поддержка', link: 'https://senko.digital/contacts' },
          { text: 'Личный кабинет', link: 'https://my.senko.digital/billmgr' },
        ],
        outlineTitle: 'Содержание',
        lastUpdated: {
          text: 'Последнее редактирование',
          formatOptions: {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Europe/Moscow',
          },
        },
        docFooter: {
          prev: 'Предыдущая статья',
          next: 'Следующая статья',
        },
        editLink: {
          pattern: 'https://github.com/senko-digital/wiki/edit/master/src/:path',
          text: 'Редактировать статью на GitHub',
        },
        sidebar: {
          '/ru/': [
            { text: '🦊 Главная', link: '/ru/' },
            { text: '🤔 Частозадаваемые вопросы', link: '/ru/faq' },
            { text: '🤔 Как выбрать хостинг-провайдера', link: '/ru/how-to-choose-a-provider' },
            { text: '🌐 BGP-сессии', link: '/ru/bgp-sessions' },
            {
              text: '💻 Личный кабинет',
              items: [
                { text: '👤 Как зарегистрироваться', link: '/ru/client-area/register' },
                { text: '💲 Как заказать сервер', link: '/ru/client-area/vps-order' },
                {
                  text: '❓ Как создать обращение в поддержку',
                  link: '/ru/client-area/new-ticket',
                },
                { text: '🫂 Реферальная программа', link: '/ru/client-area/referral' },
                {
                  text: '🔒 Двухфакторная аутентификация',
                  link: '/ru/client-area/two-factor-authentication',
                },
                {
                  text: '📲 Уведомления в Telegram',
                  link: '/ru/client-area/telegram-notifications',
                },
              ],
              collapsed: false,
            },
            {
              text: '🛒 Тарифы',
              items: [
                { text: '🎮 Игровой хостинг', link: '/ru/plans/game' },
                { text: '💻 Виртуальные серверы', link: '/ru/plans/vps' },
              ],
              collapsed: false,
            },
            {
              text: '💻 Виртуальные серверы',
              items: [
                { text: '❓ Начало работы', link: '/ru/vps/getting-started' },
                {
                  text: '🔒 Подключение к серверу (Linux)',
                  link: '/ru/vps/how-to-connect-through-ssh',
                },
                { text: '💻 Как переустановить ОС', link: '/ru/vps/os-reinstallation' },
                {
                  text: '💾 Как создать резервную копию ВМ',
                  link: '/ru/vps/how-to-create-a-backup',
                },
              ],
              collapsed: false,
            },
            {
              text: '🌐 DNS-хостинг',
              items: [{ text: '❓ Начало работы', link: '/ru/dns-hosting/getting-started' }],
              collapsed: false,
            },
            {
              text: '🖥️ Программное обеспечение',
              items: [
                { text: "🔒 Настройка Let's Encrypt", link: '/ru/software/letsencrypt-ssl' },
                { text: '🚀 Деплой Node.js с PM2', link: '/ru/software/nodejs-pm2-deploy' },
                {
                  text: '🌐 Установка MikroTik CHR',
                  link: '/ru/software/how-to-install-mikrotik-chr-on-a-virtual-server',
                },
              ],
              collapsed: false,
            },
            {
              text: '💻 Решение проблем',
              items: [
                { text: '🚀 Тест скорости сети', link: '/ru/troubleshooting/speedtest-cli' },
                {
                  text: '📉 Низкая частота процессора',
                  link: '/ru/troubleshooting/low-cpu-frequency',
                },
                {
                  text: '❓ Неверная локация в сервисах Google',
                  link: '/ru/troubleshooting/wrong-geolocation-in-google',
                },
              ],
              collapsed: false,
            },
            {
              text: '🔐 VPN',
              items: [
                { text: '🔒 3X-UI', link: '/ru/vpn/3x-ui' },
                { text: '🔒 WireGuard', link: '/ru/vpn/wireguard' },
                { text: '🔒 WireGuard Easy', link: '/ru/vpn/wireguard-easy' },
                { text: '🔒 Outline', link: '/ru/vpn/outline' },
                { text: '📨 MTProto Proxy', link: '/ru/vpn/mtproto' },
              ],
              collapsed: false,
            },
            {
              text: '🎮 Игровой хостинг',
              items: [
                {
                  text: 'Панель управления',
                  items: [
                    { text: '❓ Начало работы', link: '/ru/panel/' },
                    { text: '💻 Консоль', link: '/ru/panel/console' },
                    { text: '📁 Файловый менеджер', link: '/ru/panel/file-manager' },
                    { text: '💿 Базы данных', link: '/ru/panel/databases' },
                    { text: '❗️ Бэкапы', link: '/ru/panel/backups' },
                    { text: '🕰️ Расписания', link: '/ru/panel/schedules' },
                    { text: '👥 Пользователи', link: '/ru/panel/users' },
                    { text: '🛠️ Параметры запуска', link: '/ru/panel/startup.md' },
                    { text: '⚙️ Настройки', link: '/ru/panel/settings' },
                    { text: '📖 Логи', link: '/ru/panel/activity-logs' },
                  ],
                },
                {
                  text: "Garry's Mod",
                  items: [
                    { text: 'Изменение названия сервера', link: '/ru/games/gmod/server-name' },
                    { text: 'Настройка server.cfg', link: '/ru/games/gmod/server-cfg' },
                    { text: 'Изменение карты при запуске', link: '/ru/games/gmod/map' },
                    { text: 'Установка своей коллекции', link: '/ru/games/gmod/workshop' },
                    { text: 'Установка и настройка DarkRP', link: '/ru/games/gmod/darkrp' },
                    { text: 'Установка и настройка ULX', link: '/ru/games/gmod/ulx' },
                  ],
                },
                {
                  text: 'Minecraft',
                  items: [
                    { text: 'Изменение MOTD сервера', link: '/ru/games/minecraft/server-name' },
                    { text: 'Изменение иконки сервера', link: '/ru/games/minecraft/server-icon' },
                    {
                      text: 'Настройка server.properties',
                      link: '/ru/games/minecraft/server-properties',
                    },
                    { text: 'Установка кастомного ядра', link: '/ru/games/minecraft/software' },
                    { text: 'Установка плагинов', link: '/ru/games/minecraft/plugins' },
                  ],
                },
                {
                  text: 'Бот Discord',
                  items: [
                    { text: '❓ Начало работы', link: '/ru/bot/' },
                    { text: '👤 Авторизация', link: '/ru/bot/auth' },
                    { text: '🔁 Статус сервера из панели', link: '/ru/bot/panel-status' },
                    { text: '🔁 Статус любого сервера', link: '/ru/bot/any-status' },
                    { text: '🔁 Автообновляемый статус', link: '/ru/bot/auto-update-status' },
                    { text: '📩 Отправка команд', link: '/ru/bot/send-command' },
                    { text: '🌐 Приглашение бота на свой сервер', link: '/ru/bot/invite' },
                  ],
                },
              ],
              collapsed: false,
            },
          ],
        },
      },
    },
  },
  sitemap: {
    hostname: 'https://wiki.senko.digital',
    exclude: [
      '/vps/budget-limitations',
      '/ru/vps/budget-limitations',
      '/vps/promo-limitations',
      '/ru/vps/promo-limitations',
      '/vps/',
      '/vpn/',
      '/games/',
    ],
  },
  lastUpdated: true,
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: false,
    search: {
      provider: 'local',
    },
    outline: [1, 3],
    footer: {
      copyright: `© 2021 — ${new Date().getFullYear()} <a href="https://senko.digital">Senko Digital LLC</a>`,
    },

    socialLinks: [
      { icon: 'discord', link: 'https://senko.digital/discord' },
      { icon: 'twitter', link: 'https://x.com/senkodigital' },
    ],
  },
})
