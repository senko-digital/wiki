---
title: "Главная"
description: "Официальная вики хостинг-провайдера Senko Digital. Руководства по настройке серверов, использованию панели управления и управлению игровыми серверами."
head:
  - - meta
    - name: keywords
      content: хостинг, документация, вики, игровые сервера, vps хостинг, панель управления, senko digital, minecraft, garry's mod
  - - meta
    - property: og:title 
      content: "Главная"
  - - meta
    - property: og:description
      content: "Официальная вики хостинг-провайдера Senko Digital. Руководства по настройке серверов, использованию панели управления и управлению игровыми серверами."

layout: home
---

<div class="wiki-home">
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title"><span class="hero-brand">Senko Digital</span><span class="hero-wiki">Wiki</span></h1>
      <p class="hero-subtitle">Подробные руководства по настройке серверов, использованию панели управления и управлению игровыми серверами.</p>
    </div>
  </section>

  <section class="popular-section">
    <div class="section-header">
      <h2>Популярные статьи</h2>
      <p>Самые просматриваемые руководства для начала работы</p>
    </div>
    <div class="articles-grid">
      <a href="/ru/vps/getting-started" class="article-card">
        <span class="article-icon"><IconRocket /></span>
        <div class="article-content">
          <h3>Начало работы с VPS</h3>
          <p>Всё, что нужно знать для начала использования виртуального сервера</p>
        </div>
        <span class="article-arrow"><IconArrowRight /></span>
      </a>
      <a href="/ru/faq" class="article-card">
        <span class="article-icon"><IconCircleHelp /></span>
        <div class="article-content">
          <h3>Часто задаваемые вопросы</h3>
          <p>Ответы на часто задаваемые вопросы</p>
        </div>
        <span class="article-arrow"><IconArrowRight /></span>
      </a>
      <a href="/ru/vpn/3x-ui" class="article-card">
        <span class="article-icon"><IconLock /></span>
        <div class="article-content">
          <h3>Установка 3X-UI</h3>
          <p>Разверните собственный VPN сервер с панелью 3X-UI</p>
        </div>
        <span class="article-arrow"><IconArrowRight /></span>
      </a>
      <a href="/ru/vpn/wireguard" class="article-card">
        <span class="article-icon"><IconShieldCheck /></span>
        <div class="article-content">
          <h3>WireGuard VPN</h3>
          <p>Настройте быстрый и безопасный VPN сервер на WireGuard</p>
        </div>
        <span class="article-arrow"><IconArrowRight /></span>
      </a>
      <a href="/ru/panel/" class="article-card">
        <span class="article-icon"><IconLayoutDashboard /></span>
        <div class="article-content">
          <h3>Основы игровой панели</h3>
          <p>Научитесь использовать панель управления игровыми серверами</p>
        </div>
        <span class="article-arrow"><IconArrowRight /></span>
      </a>
      <a href="/ru/games/gmod/darkrp" class="article-card">
        <span class="article-icon"><IconGamepad2 /></span>
        <div class="article-content">
          <h3>Настройка DarkRP</h3>
          <p>Установка и настройка игрового режима DarkRP для Garry's Mod</p>
        </div>
        <span class="article-arrow"><IconArrowRight /></span>
      </a>
    </div>
  </section>

  <section class="categories-section">
    <div class="section-header">
      <h2>Разделы документации</h2>
      <p>Статьи, организованные по категориям</p>
    </div>
    <div class="categories-grid">
      <div class="category-card">
        <div class="category-header">
          <span class="category-icon"><IconServer /></span>
          <h3>Виртуальные серверы</h3>
        </div>
        <p class="category-desc">Настройка, оптимизация и управление VPS</p>
        <div class="category-links">
          <a href="/ru/vps/how-to-connect-through-ssh">SSH подключение</a>
          <a href="/ru/vps/os-reinstallation">Переустановка ОС</a>
          <a href="/ru/vps/nodejs-pm2-deploy">Деплой Node.js</a>
          <a href="/ru/vps/letsencrypt-ssl">Let's Encrypt SSL</a>
        </div>
        <a href="/ru/vps/" class="category-view-all">Все статьи <IconArrowRight /></a>
      </div>
      <div class="category-card">
        <div class="category-header">
          <span class="category-icon"><IconGamepad2 /></span>
          <h3>Игровой хостинг</h3>
        </div>
        <p class="category-desc">Minecraft, Garry's Mod и другие игровые серверы</p>
        <div class="category-links">
          <a href="/ru/games/minecraft/server-properties">Настройка Minecraft</a>
          <a href="/ru/games/gmod/workshop">GMod Workshop</a>
          <a href="/ru/games/gmod/ulx">ULX Admin Mod</a>
          <a href="/ru/games/minecraft/plugins">Плагины Minecraft</a>
        </div>
        <a href="/ru/games/" class="category-view-all">Все статьи <IconArrowRight /></a>
      </div>
      <div class="category-card">
        <div class="category-header">
          <span class="category-icon"><IconLock /></span>
          <h3>VPN решения</h3>
        </div>
        <p class="category-desc">Настройка собственного VPN сервера</p>
        <div class="category-links">
          <a href="/ru/vpn/wireguard-easy">WireGuard Easy</a>
          <a href="/ru/vpn/outline">Outline VPN</a>
          <a href="/ru/troubleshooting/speedtest-cli">Тест скорости сети</a>
          <a href="/ru/vps/how-to-install-mikrotik-chr-on-a-virtual-server">MikroTik CHR</a>
        </div>
        <a href="/ru/vpn/" class="category-view-all">Все статьи <IconArrowRight /></a>
      </div>
      <div class="category-card">
        <div class="category-header">
          <span class="category-icon"><IconLayoutDashboard /></span>
          <h3>Панель управления</h3>
        </div>
        <p class="category-desc">Освойте панель управления игровыми серверами</p>
        <div class="category-links">
          <a href="/ru/panel/file-manager">Файловый менеджер</a>
          <a href="/ru/panel/databases">Базы данных</a>
          <a href="/ru/panel/backups">Резервные копии</a>
          <a href="/ru/panel/schedules">Расписания</a>
        </div>
        <a href="/ru/panel/" class="category-view-all">Все статьи <IconArrowRight /></a>
      </div>
    </div>
  </section>

  <section class="help-section">
    <div class="help-content">
      <div class="help-text">
        <h2>Нужна помощь?</h2>
        <p>Не нашли нужную информацию? Наша команда поддержки готова помочь.</p>
      </div>
      <a href="https://senko.digital/contacts" class="help-button">Связаться с поддержкой</a>
    </div>
  </section>
</div>

<style>
.wiki-home a {
  background-image: none !important;
  background-size: initial !important;
}

.wiki-home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.hero-section {
  padding: 3rem 0 2.5rem;
  text-align: center;
}

.hero-content {
  max-width: 680px;
  margin: 0 auto;
}

.hero-title {
  margin: 0 0 1rem;
  line-height: 1.1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-brand {
  font-size: 1.50rem;
  font-weight: 500;
  color: #555;
  letter-spacing: 0.02em;
  display: block;
  margin-bottom: 0.25rem;
  padding-bottom: 0.25rem;
}

.dark .hero-brand {
  color: rgba(255, 255, 255, 0.7);
}

.hero-wiki {
  font-size: 4rem;
  font-weight: 700;
  color: #8a2be2;
  display: block;
}

.hero-subtitle {
  font-size: 1.125rem;
  color: #555;
  margin: 0 0 1.5rem;
  line-height: 1.6;
}

.dark .hero-subtitle {
  color: rgba(255, 255, 255, 0.7);
}

.hero-search-hint {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 0.875rem;
  color: #555;
}

.dark .hero-search-hint {
  background: #252525;
  border-color: #444;
  color: rgba(255, 255, 255, 0.7);
}

.hero-search-hint .search-icon {
  display: flex;
  align-items: center;
  color: #8a2be2;
}

.hero-search-hint kbd {
  display: inline-block;
  padding: 0.125rem 0.375rem;
  font-size: 0.75rem;
  font-family: var(--vp-font-family-mono);
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.dark .hero-search-hint kbd {
  background: #333;
  border-color: #555;
}

.section-header {
  margin-bottom: 1.5rem;
}

.section-header h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #222;
  margin: 0 0 0.375rem;
  border: none;
  padding: 0;
}

.dark .section-header h2 {
  color: rgba(255, 255, 255, 0.9);
}

.section-header p {
  font-size: 0.9375rem;
  color: #666;
  margin: 0;
}

.dark .section-header p {
  color: rgba(255, 255, 255, 0.6);
}

.popular-section {
  padding: 2rem 0;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.article-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: #f8f8f8;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  text-decoration: none !important;
  transition: border-color 0.2s ease;
}

.dark .article-card {
  background: #1e1e1e;
  border-color: #3a3a3a;
}

.article-card:hover {
  border-color: #8a2be2;
}

.article-icon {
  color: #8a2be2;
  line-height: 1;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.article-icon svg {
  width: 1.25rem;
  height: 1.25rem;
}

.dark .article-icon {
  color: #b78eff;
}

.article-content {
  flex: 1;
  min-width: 0;
}

.article-content h3 {
  font-size: 0.9375rem;
  font-weight: 600;
  color: #222;
  margin: 0 0 0.25rem;
  line-height: 1.3;
}

.dark .article-content h3 {
  color: rgba(255, 255, 255, 0.9);
}

.article-content p {
  font-size: 0.8125rem;
  color: #666;
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.dark .article-content p {
  color: rgba(255, 255, 255, 0.6);
}

.article-arrow {
  color: #999;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  transition: color 0.2s ease;
}

.article-arrow svg {
  width: 1.125rem;
  height: 1.125rem;
}

.dark .article-arrow {
  color: rgba(255, 255, 255, 0.4);
}

.article-card:hover .article-arrow {
  color: #8a2be2;
}

.categories-section {
  padding: 2rem 0;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

.category-card {
  background: #f8f8f8;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  transition: border-color 0.2s ease;
}

.dark .category-card {
  background: #1e1e1e;
  border-color: #3a3a3a;
}

.category-card:hover {
  border-color: #8a2be2;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 0.625rem;
}

.category-icon {
  color: #8a2be2;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dark .category-icon {
  color: #b78eff;
}

.category-icon svg {
  width: 1.375rem;
  height: 1.375rem;
}

.category-header h3 {
  font-size: 1rem;
  font-weight: 600;
  color: #222;
  margin: 0;
}

.dark .category-header h3 {
  color: rgba(255, 255, 255, 0.9);
}

.category-desc {
  font-size: 0.8125rem;
  color: #666;
  margin: 0 0 0.875rem;
  line-height: 1.45;
}

.dark .category-desc {
  color: rgba(255, 255, 255, 0.6);
}

.category-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex: 1;
}

.category-links a {
  font-size: 0.8125rem;
  color: #333 !important;
  text-decoration: none !important;
  display: block;
  padding: 0.5rem 0.75rem;
  background: #efefef;
  border-radius: 6px;
  border: 1px solid transparent;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;
}

.dark .category-links a {
  color: rgba(255, 255, 255, 0.85) !important;
  background: #2a2a2a;
}

.category-links a:hover {
  color: #8a2be2 !important;
  border-color: #8a2be2;
}

.category-view-all {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #8a2be2 !important;
  text-decoration: none !important;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: auto;
}

.category-view-all svg {
  width: 1em;
  height: 1em;
}

.help-section {
  padding: 2rem 0 3rem;
}

.help-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 1.5rem 2rem;
  background: #f8f8f8;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
}

.dark .help-content {
  background: #1e1e1e;
  border-color: #3a3a3a;
}

.help-text h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #222;
  margin: 0 0 0.25rem;
  border: none;
  padding: 0;
}

.dark .help-text h2 {
  color: rgba(255, 255, 255, 0.9);
}

.help-text p {
  font-size: 0.9375rem;
  color: #666;
  margin: 0;
}

.dark .help-text p {
  color: rgba(255, 255, 255, 0.6);
}

.help-button {
  flex-shrink: 0;
  padding: 0.625rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #8a2be2 !important;
  background: transparent !important;
  border: 2px solid #8a2be2;
  border-radius: 8px;
  text-decoration: none !important;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.help-button:hover {
  background: #8a2be2 !important;
  color: #ffffff !important;
}

@media (prefers-reduced-motion: reduce) {
  .wiki-home * {
    transition: none !important;
  }
}

@media (max-width: 1024px) {
  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .wiki-home {
    padding: 0 1rem;
  }

  .hero-section {
    padding: 2rem 0 2rem;
  }

  .hero-brand {
    font-size: 1.125rem;
  }

  .hero-wiki {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .articles-grid {
    grid-template-columns: 1fr;
  }

  .categories-grid {
    grid-template-columns: 1fr;
  }

  .help-content {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    padding: 1.25rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-brand {
    font-size: 1rem;
  }

  .hero-wiki {
    font-size: 2rem;
  }

  .hero-search-hint {
    font-size: 0.8125rem;
    padding: 0.5rem 0.875rem;
  }

  .section-header h2 {
    font-size: 1.25rem;
  }

  .article-card {
    padding: 0.875rem 1rem;
  }

  .article-icon svg {
    width: 1.125rem;
    height: 1.125rem;
  }

  .category-card {
    padding: 1.125rem;
  }
}
</style>
