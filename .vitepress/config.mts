import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Вики senko's digital",
  description: "Вики senko's digital - самого пушистого хостинга в мире!",
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png"}],
    ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest"}],
    ['link', { rel: "mask-icon", href: "/assets/favicons/safari-pinned-tab.svg", color: "#3a0839"}],
    ['link', { rel: "shortcut icon", href: "/assets/favicons/favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
    ['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
    ['link', { rel: 'stylesheet', href: '/custom.css' }]
  ],
  locales: {
    root: {
      label: "Русский",
      lang: "ru",
    },
  },
  sitemap: {
    hostname: "https://wiki.senko.digital",
  },
  lastUpdated: true,
  markdown: {
    container: {
      tipLabel: "ПОДСКАЗКА",
      warningLabel: "ОСТОРОЖНО",
      dangerLabel: "ВНИМАНИЕ",
      infoLabel: "ИНФОРМАЦИЯ",
      detailsLabel: "ПОДРОБНОСТИ",
    },
    image: {
      lazyLoading: true,
    },
  },
  themeConfig: {
    nav: [
      { text: "Главная", link: "/" },
      { text: "Поддержка", link: "https://snk.wtf/d" },
    ],
    logo: "/logo.svg",
    siteTitle: false,
    search: {
      provider: "local"
    },
    outline: [1,3],
    outlineTitle: "Содержимое",
    lastUpdated: {
      text: 'Последнее редактирование',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: 'Предыдущая статья',
      next: 'Следующая статья'
    },
    sidebar: [
      { text: "🦊 Главная", link: "/" },
      { text: "🤔 Частозадаваемые вопросы", link: "/faq" },
      { text: "🤝 Заявка на партнёрство", link: "/partners" },
      {
        text: "🛒 Тарифы",
        items: [
          { text: "🎮 Игровой хостинг", link: "/plans/game" },
          { text: "💻 Виртуальные сервера", link: "/plans/vps" },
          // { text: "🖥️ Выделенные сервера", link: "/plans/dedicated" },
        ],
        collapsed: false,
      },
      {
        text: "💻 Панель управления",
        items: [
          { text: "❓ Начало работы", link: "/panel/" },
          { text: "💻 Консоль", link: "/panel/console" },
          { text: "📁 Файловый менеджер", link: "/panel/file-manager" },
          { text: "💿 Базы данных", link: "/panel/databases" },
          { text: "❗️ Бэкапы", link: "/panel/backups" },
          { text: "🕰️ Расписания", link: "/panel/schedules" },
          { text: "👥 Пользователи", link: "/panel/users" },
          { text: "🛠️ Параметры запуска", link: "/panel/startup.md" },
          { text: "⚙️ Настройки", link: "/panel/settings" },
          { text: "📖 Логи", link: "/panel/activity-logs" },
        ],
        collapsed: false,
      },
      {
        text: "🤖 Бот Discord",
        items: [
          { text: "❓ Начало работы", link: "/bot/" },
          { text: "👤 Авторизация", link: "/bot/auth" },
          { text: "🔁 Статус сервера из панели", link: "/bot/panel-status" },
          { text: "🔁 Статус любого сервера", link: "/bot/any-status" },
          { text: "🔁 Автообновляемый статус", link: "/bot/auto-update-status" },
          { text: "📩 Отправка команд", link: "/bot/send-command" },
          { text: "🌐 Приглашение бота на свой сервер", link: "/bot/invite" },

        ],
        collapsed: false,
      },
      {
        text: "🎮 Garry's Mod",
        items: [
          { text: "Изменение названия сервера", link: "/games/gmod/server-name" },
          { text: "Настройка server.cfg", link: "/games/gmod/server-cfg" },
          { text: "Изменение карты при запуске", link: "/games/gmod/map" },
          { text: "Установка своей коллекции", link: "/games/gmod/workshop" },
          { text: "Установка и настройка DarkRP", link: "/games/gmod/darkrp" },
          { text: "Установка и настройка ULX", link: "/games/gmod/ulx" },
          // { text: "Подключение по SFTP", link: "/games/gmod/sftp" },
          // { text: "Анализ производительности сервера", link: "/games/gmod/fprofiler" },
          // { text: "Установка и настройка GMDonate", link: "/games/gmod/gmdonate" },
          // { text: "Режим отладки и журналирование консоли сервера в файл", link: "/games/gmod/logging" },
        ],
        collapsed: false,
      },
      // {
      //   text: "🎮 Counter Strike 2",
      //   items: [
      //     { text: "Изменение названия сервера", link: "/games/cs2/server-name" },
      //     { text: "Настройка server.cfg", link: "/games/cs2/server-cfg" },
      //     { text: "Установка карты из Workshop", link: "/games/cs2/workshop" },
      //     // { text: "Настройка и изменение режимов", link: "/games/cs2/gamemodes" },
      //     // { text: "Установка SourceMod и MetaMod", link: "/games/cs2/sourcemod-metamod" },
      //     // { text: "Подключение базы данных", link: "/games/cs2/mysql" },
      //     // { text: "Подключение по SFTP", link: "/games/cs2/sftp" },
      //   ],
      //   collapsed: false,
      // },
      {
        text: "🎮 Minecraft",
        items: [
          { text: "Изменение MOTD сервера", link: "/games/minecraft/server-name" },
          { text: "Изменение иконки сервера", link: "/games/minecraft/server-icon" },
          { text: "Настройка server.properties", link: "/games/minecraft/server-properties" },
          { text: "Установка кастомного ядра", link: "/games/minecraft/core" },
          { text: "Установка плагинов", link: "/games/minecraft/plugins" },
          // { text: "Подключение базы данных", link: "/games/minecraft/mysql" },
          // { text: "Подключение по SFTP", link: "/games/minecraft/sftp" },
        ],
        collapsed: false,
      },
    ],
    footer: {
      copyright: '© 2021 — 2024 <a href="https://senko.digital">senko://digital</a>',
    },

    socialLinks: [
      { icon: "discord", link: "https://snk.wtf/d" },
      { icon: "mastodon", link: "https://c.im/@senkodigital" },
    ],
  },
});
