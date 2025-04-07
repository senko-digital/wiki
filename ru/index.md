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

<div class="welcome-section">
  <div class="welcome-container">
    <h1>Добро пожаловать на вики Senko Digital</h1>
    <p class="intro-text">
      Мы - самый пушистый хостинг в мире!<br>Здесь вы найдете подробные руководства по настройке серверов, использованию нашей панели управления и управлению игровыми серверами.
    </p>
  </div>
</div>

<div class="grid-container">
  <div class="feature-card">
    <div class="card-icon">📚</div>
    <h3>Документация</h3>
    <p>Полные руководства по всем нашим услугам и функциям</p>
    <a href="/ru/faq" class="card-link">Читать руководства</a>
  </div>
  
  <div class="feature-card">
    <div class="card-icon">🛠️</div>
    <h3>Игровые сервера</h3>
    <p>Пошаговые инструкции для игр, таких как Minecraft и Garry's Mod</p>
    <a href="/ru/games/minecraft/server-properties" class="card-link">Посмотреть инструкции</a>
  </div>
  
  <div class="feature-card">
    <div class="card-icon">🔒</div>
    <h3>Виртуальные серверы</h3>
    <p>Советы по оптимизации и рекомендации по настройке ваших серверов</p>
    <a href="/ru/vps/getting-started" class="card-link">Узнать больше</a>
  </div>
  
  <div class="feature-card">
    <div class="card-icon">❓</div>
    <h3>Поддержка</h3>
    <p>Не нашли то, что искали? Наша служба поддержки всегда готова помочь</p>
    <a href="https://senko.digital/contacts" class="card-link">Связаться с поддержкой</a>
  </div>
</div>

<div class="wiki-contents">
  <h2 class="content-heading">Что вы найдете в нашей вики</h2>
  <div class="content-list">
    <div class="content-item">
      <span class="content-icon">🖥️</span>
      <span>Советы по оптимизации работы VPS</span>
    </div>
    <div class="content-item">
      <span class="content-icon">🔐</span>
      <span>Настройка VPN протоколов</span>
    </div>
    <div class="content-item">
      <span class="content-icon">🎮</span>
      <span>Руководства по настройке игровых серверов</span>
    </div>
    <div class="content-item">
      <span class="content-icon">📋</span>
      <span>Инструкции по работе с панелью управления</span>
    </div>
    <div class="content-item">
      <span class="content-icon">🤔</span>
      <span>Ответы на частые вопросы и устранение неполадок</span>
    </div>
  </div>
</div>

<style>
.welcome-section {
  padding: 2rem 1rem;
  text-align: center;
  background: linear-gradient(to right, rgba(255, 140, 0, 0.1), rgba(255, 140, 0, 0.05));
  border-radius: 8px;
  margin-bottom: 2rem;
  margin-top: 3em;
}

.welcome-container {
  max-width: 800px;
  margin: 0 auto;
}

.emoji {
  font-size: 1.5em;
  vertical-align: middle;
  margin-right: 0.5rem;
}

.intro-text {
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 1rem 0;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.feature-card {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid var(--vp-c-divider);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.card-link {
  display: inline-block;
  margin-top: auto;
  padding-top: 1rem;
  color: var(--vp-c-brand);
  font-weight: 500;
  text-decoration: none;
}

.wiki-contents {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid var(--vp-c-divider);
  position: relative;
}

.wiki-contents::before {
  display: none !important;
}

hr + .wiki-contents,
.vp-doc hr + .wiki-contents {
  border-top: none;
  margin-top: 2rem;
}

.vp-doc h2 {
  margin-top: 0;
  border-top: none;
}

.content-heading {
  padding-top: 0 !important;
  margin-top: 0 !important;
  border-top: none !important;
}

.wiki-contents h2 {
  padding-top: 0;
  margin-top: 0;
  border-top: none;
}

.content-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.content-item {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  background: var(--vp-c-bg);
  border-radius: 6px;
  transition: background 0.2s;
}

.content-item:hover {
  background: var(--vp-c-bg-mute);
}

.content-icon {
  margin-right: 0.75rem;
  font-size: 1.2rem;
}

@media (max-width: 640px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
  
  .content-list {
    grid-template-columns: 1fr;
  }
  
  .welcome-section {
    padding: 1.5rem 1rem;
    margin-top: 2em;
  }
  
  .welcome-container h1 {
    font-size: 1.8rem;
    line-height: 1.3;
  }
  
  .intro-text {
    font-size: 1rem;
    line-height: 1.5;
  }
}

@media (max-width: 480px) {
  .welcome-container h1 {
    font-size: 1.6rem;
  }
  
  .feature-card {
    padding: 1.25rem;
  }
  
  .card-icon {
    font-size: 1.75rem;
    margin-bottom: 0.75rem;
  }
}
</style>
