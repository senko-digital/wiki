import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  title: "Senko Digital Wiki",
  description: "Official wiki of Senko Digital hosting provider - the fluffiest hosting in the world!",
  head: [
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-3J3DHZQDVX' }],
    ['script', {}, `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-3J3DHZQDVX');`],
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png"}],
    ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest"}],
    ['link', { rel: "mask-icon", href: "/assets/favicons/safari-pinned-tab.svg", color: "#3a0839"}],
    ['link', { rel: "shortcut icon", href: "/assets/favicons/favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
    ['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
    ['link', { rel: 'stylesheet', href: '/custom.css' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap' }],
    ['meta', { name: 'keywords', content: 'хостинг, vps, игровой хостинг, gmod, minecraft, cs2, защита от ddos' }],
    ['meta', { property: 'og:site_name', content: 'Senko Digital Wiki' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'theme-color', content: '#ff8c00' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/favicons/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/favicons/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/favicons/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/assets/favicons/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/assets/favicons/safari-pinned-tab.svg', color: '#ff8c00' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ff8c00' }],
    ['meta', { name: 'theme-color', content: '#ff8c00' }]
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      description: 'Official wiki of Senko Digital hosting provider - the fluffiest hosting in the world!',
      themeConfig: {
        nav: [
          { text: "Home", link: "/" },
          { text: "Support", link: "https://senko.digital/contacts" },
          { text: "Client Area", link: "https://my.senko.digital/billmgr" },
        ],
        outlineTitle: "On this page",
        lastUpdated: {
          text: 'Last updated',
          formatOptions: {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Europe/London'
          }
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        sidebar: {
          '/': [
            { text: "🦊 Home", link: "/" },
            { text: "🤔 Frequently Asked Questions", link: "/faq" },
            { text: "🤝 Partnership Application", link: "/partners" },
            { text: "🤔 How to Choose a Hosting Provider", link: "/how-to-choose-a-provider" },
            {
              text: "💻 Client Area",
              items: [
                { text: "👤 Registration", link: "/personal-area/register" },
                { text: "💲 Server Order", link: "/personal-area/vps-order" },
                { text: "❓ Support Ticket", link: "/personal-area/new-ticket" },
                { text: "🫂 Referral Program", link: "/personal-area/referral" },
              ],
              collapsed: false,
            },
            {
              text: "🛒 Plans",
              items: [
                { text: "🎮 Game Hosting", link: "/plans/game" },
                { text: "💻 Virtual Servers", link: "/plans/vps" },
              ],
              collapsed: false,
            },
            {
              text: "💻 Virtual Servers",
              items: [
                { text: "❓ Getting Started", link: "/vps/getting-started" },
                { text: "🔒 Let's Encrypt Configuration", link: "/vps/letsencrypt-ssl" },
                { text: "🚀 Node.js Deployment with PM2", link: "/vps/nodejs-pm2-deploy" },
              ],
              collapsed: false,
            },
            {
              text: "💻 Troubleshooting",
              items: [
                { text: "🚀 Network Speed Test", link: "/troubleshooting/speedtest-cli" },
                { text: "📉 Low CPU Frequency", link: "/troubleshooting/low-cpu-frequency" },
                { text: "❓ Low VPN Speed", link: "/troubleshooting/low-speed-through-vpn" },
              ],
              collapsed: false,
            },
            {
              text: "🔐 VPN Configuration",
              items: [
                { text: "🔒 3X-UI", link: "/vpn/3x-ui" },
              ],
              collapsed: false,
            },
            {
              text: "🎮 Game Hosting",
              items: [
                { 
                  text: "Control Panel",
                  items: [
                    { text: "❓ Getting Started", link: "/panel/" },
                    { text: "💻 Console", link: "/panel/console" },
                    { text: "📁 File Manager", link: "/panel/file-manager" },
                    { text: "💿 Databases", link: "/panel/databases" },
                    { text: "❗️ Backups", link: "/panel/backups" },
                    { text: "🕰️ Schedules", link: "/panel/schedules" },
                    { text: "👥 Users", link: "/panel/users" },
                    { text: "🛠️ Startup Parameters", link: "/panel/startup" },
                    { text: "⚙️ Settings", link: "/panel/settings" },
                    { text: "📖 Logs", link: "/panel/activity-logs" },
                  ]
                },
                { 
                  text: "Garry's Mod",
                  items: [
                    { text: "Changing Server Name", link: "/games/gmod/server-name" },
                    { text: "Configuring server.cfg", link: "/games/gmod/server-cfg" },
                    { text: "Changing Map at Startup", link: "/games/gmod/map" },
                    { text: "Installing Workshop Collection", link: "/games/gmod/workshop" },
                    { text: "Installing and Configuring DarkRP", link: "/games/gmod/darkrp" },
                    { text: "Installing and Configuring ULX", link: "/games/gmod/ulx" },
                  ] 
                },
                { 
                  text: "Minecraft",
                  items: [
                    { text: "Changing Server MOTD", link: "/games/minecraft/server-name" },
                    { text: "Changing Server Icon", link: "/games/minecraft/server-icon" },
                    { text: "Configuring server.properties", link: "/games/minecraft/server-properties" },
                    { text: "Installing Custom Core", link: "/games/minecraft/core" },
                    { text: "Installing Plugins", link: "/games/minecraft/plugins" },
                  ]
                },
                { 
                  text: "Discord Bot",
                  items: [
                    { text: "❓ Getting Started", link: "/bot/" },
                    { text: "👤 Authorization", link: "/bot/auth" },
                    { text: "🔁 Panel Server Status", link: "/bot/panel-status" },
                    { text: "🔁 Any Server Status", link: "/bot/any-status" },
                    { text: "🔁 Auto-updated Status", link: "/bot/auto-update-status" },
                    { text: "📩 Send Commands", link: "/bot/send-command" },
                    { text: "🌐 Invite Bot to Your Server", link: "/bot/invite" },
                  ]
                }
              ],
              collapsed: false,
            },
          ]
        },
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      description: 'Официальная вики хостинг-провайдера Senko Digital - самого пушистого хостинга в мире!',
      themeConfig: {
        nav: [
          { text: "Главная", link: "/ru/" },
          { text: "Поддержка", link: "https://senko.digital/contacts" },
          { text: "Личный кабинет", link: "https://my.senko.digital/billmgr" },
        ],
        outlineTitle: "Содержание",
        lastUpdated: {
          text: 'Последнее редактирование',
          formatOptions: {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Europe/Moscow'
          }
        },
        docFooter: {
          prev: 'Предыдущая статья',
          next: 'Следующая статья'
        },
        sidebar: {
          '/ru/': [
            { text: "🦊 Главная", link: "/ru/" },
            { text: "🤔 Частозадаваемые вопросы", link: "/ru/faq" },
            { text: "🤝 Заявка на партнёрство", link: "/ru/partners" },
            { text: "🤔 Как выбрать хостинг-провайдера", link: "/ru/how-to-choose-a-provider" },
            {
              text: "💻 Личный кабинет",
              items: [
                { text: "👤 Регистрация", link: "/ru/personal-area/register" },
                { text: "💲 Заказ сервера", link: "/ru/personal-area/vps-order" },
                { text: "❓ Обращение в поддержку", link: "/ru/personal-area/new-ticket" },
                { text: "🫂 Реферальная программа", link: "/ru/personal-area/referral" },
              ],
              collapsed: false,
            },
            {
              text: "🛒 Тарифы",
              items: [
                { text: "🎮 Игровой хостинг", link: "/ru/plans/game" },
                { text: "💻 Виртуальные сервера", link: "/ru/plans/vps" },
              ],
              collapsed: false,
            },
            {
              text: "💻 Виртуальные серверы",
              items: [
                { text: "❓ Начало работы", link: "/ru/vps/getting-started" },
                { text: "🔒 Настройка Let's Encrypt", link: "/ru/vps/letsencrypt-ssl" },
                { text: "🚀 Деплой Node.js с PM2", link: "/ru/vps/nodejs-pm2-deploy" },
              ],
              collapsed: false,
            },
            {
              text: "💻 Решение проблем",
              items: [
                { text: "🚀 Тест скорости сети на виртуальном сервере", link: "/ru/troubleshooting/speedtest-cli" },
                { text: "📉 Низкая частота процессора", link: "/ru/troubleshooting/low-cpu-frequency" },
                { text: "❓ Низкая скорость VPN", link: "/ru/troubleshooting/low-speed-through-vpn" },
              ],
              collapsed: false,
            },
            {
              text: "🔐 Настройка VPN",
              items: [
                { text: "🔒 3X-UI", link: "/ru/vpn/3x-ui" },
              ],
              collapsed: false,
            },
            {
              text: "🎮 Игровой хостинг",
              items: [
                { 
                  text: "Панель управления",
                  items: [
                    { text: "❓ Начало работы", link: "/ru/panel/" },
                    { text: "💻 Консоль", link: "/ru/panel/console" },
                    { text: "📁 Файловый менеджер", link: "/ru/panel/file-manager" },
                    { text: "💿 Базы данных", link: "/ru/panel/databases" },
                    { text: "❗️ Бэкапы", link: "/ru/panel/backups" },
                    { text: "🕰️ Расписания", link: "/ru/panel/schedules" },
                    { text: "👥 Пользователи", link: "/ru/panel/users" },
                    { text: "🛠️ Параметры запуска", link: "/ru/panel/startup.md" },
                    { text: "⚙️ Настройки", link: "/ru/panel/settings" },
                    { text: "📖 Логи", link: "/ru/panel/activity-logs" },
                  ]
                },
                { 
                  text: "Garry's Mod",
                  items: [
                    { text: "Изменение названия сервера", link: "/ru/games/gmod/server-name" },
                    { text: "Настройка server.cfg", link: "/ru/games/gmod/server-cfg" },
                    { text: "Изменение карты при запуске", link: "/ru/games/gmod/map" },
                    { text: "Установка своей коллекции", link: "/ru/games/gmod/workshop" },
                    { text: "Установка и настройка DarkRP", link: "/ru/games/gmod/darkrp" },
                    { text: "Установка и настройка ULX", link: "/ru/games/gmod/ulx" },
                  ] 
                },
                { 
                  text: "Minecraft",
                  items: [
                    { text: "Изменение MOTD сервера", link: "/ru/games/minecraft/server-name" },
                    { text: "Изменение иконки сервера", link: "/ru/games/minecraft/server-icon" },
                    { text: "Настройка server.properties", link: "/ru/games/minecraft/server-properties" },
                    { text: "Установка кастомного ядра", link: "/ru/games/minecraft/core" },
                    { text: "Установка плагинов", link: "/ru/games/minecraft/plugins" },
                  ]
                },
                { 
                  text: "Бот Discord",
                  items: [
                    { text: "❓ Начало работы", link: "/ru/bot/" },
                    { text: "👤 Авторизация", link: "/ru/bot/auth" },
                    { text: "🔁 Статус сервера из панели", link: "/ru/bot/panel-status" },
                    { text: "🔁 Статус любого сервера", link: "/ru/bot/any-status" },
                    { text: "🔁 Автообновляемый статус", link: "/ru/bot/auto-update-status" },
                    { text: "📩 Отправка команд", link: "/ru/bot/send-command" },
                    { text: "🌐 Приглашение бота на свой сервер", link: "/ru/bot/invite" },
                  ]
                }
              ],
              collapsed: false,
            },
          ]
        },
      }
    }
  },
  sitemap: {
    hostname: "https://wiki.senko.digital",
  },
  lastUpdated: true,
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: false,
    search: {
      provider: "local"
    },
    outline: [1,3],
    footer: {
      copyright: '© 2021 — 2025 <a href="https://senko.digital">Senko Digital</a>',
    },

    socialLinks: [
      { icon: "discord", link: "https://snk.wtf/d" },
      { icon: 'twitter', link: 'https://x.com/senkodigital' },
    ],
  },
});
