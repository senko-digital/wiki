---
title: Senko Digital Wiki
description: Official wiki of Senko Digital hosting provider - the fluffiest hosting in the world!
head:
  - - meta
    - name: keywords
      content: hosting, documentation, wiki, game servers, vps hosting, control panel, senko digital, minecraft, garry's mod
  - - meta
    - property: og:title 
      content: "Home"
  - - meta
    - property: og:description
      content: "Official wiki of Senko Digital hosting provider. Guides for server configuration, control panel usage, and game server management."
layout: home
---

<div class="welcome-section">
  <div class="welcome-container">
    <h1>Welcome to Senko Digital Wiki</h1>
    <p class="intro-text">
      We're the fluffiest hosting in the world! Here you'll find comprehensive guides for configuring servers, using our control panel, and managing game servers.
    </p>
  </div>
</div>

<div class="grid-container">
  <div class="feature-card">
    <div class="card-icon">📚</div>
    <h3>Documentation</h3>
    <p>Complete guides for all our services and features</p>
    <a href="/faq" class="card-link">Read Guides</a>
  </div>
  
  <div class="feature-card">
    <div class="card-icon">🛠️</div>
    <h3>Setup Tutorials</h3>
    <p>Step-by-step instructions for games like Minecraft and Garry's Mod</p>
    <a href="/games/minecraft/server-properties" class="card-link">View Tutorials</a>
  </div>
  
  <div class="feature-card">
    <div class="card-icon">🔒</div>
    <h3>VPS & Security</h3>
    <p>Optimization tips and security guidance for your servers</p>
    <a href="/vps/getting-started" class="card-link">Learn More</a>
  </div>
  
  <div class="feature-card">
    <div class="card-icon">❓</div>
    <h3>Support</h3>
    <p>Can't find what you need? Our support team is ready to help</p>
    <a href="https://senko.digital/contacts" class="card-link">Contact Support</a>
  </div>
</div>

<div class="wiki-contents">
  <h2 class="content-heading">What you'll find in our wiki</h2>
  <div class="content-list">
    <div class="content-item">
      <span class="content-icon">🖥️</span>
      <span>VPS optimization tips</span>
    </div>
    <div class="content-item">
      <span class="content-icon">🔐</span>
      <span>VPN configuration</span>
    </div>
    <div class="content-item">
      <span class="content-icon">🎮</span>
      <span>Game server setup guides</span>
    </div>
    <div class="content-item">
      <span class="content-icon">📋</span>
      <span>Control panel instructions</span>
    </div>
    <div class="content-item">
      <span class="content-icon">🤔</span>
      <span>FAQs and troubleshooting</span>
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
  padding: 0.5rem 1rem;
  color: white;
  background-color: var(--vp-c-brand);
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s;
}

.card-link:hover {
  background-color: var(--vp-c-brand-dark, #0366d6);
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
