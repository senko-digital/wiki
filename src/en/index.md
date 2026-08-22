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

<div class="wiki-home">
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title"><span class="hero-brand">Senko Digital</span><span class="hero-wiki">Wiki</span></h1>
      <p class="hero-subtitle">Comprehensive guides for server configuration, control panel usage, and game server management.</p>
    </div>
  </section>

  <section class="popular-section">
    <div class="section-header">
      <h2>Popular Articles</h2>
      <p>Most viewed guides to get you started</p>
    </div>
    <div class="articles-grid">
      <a href="/vps/getting-started" class="article-card">
        <span class="article-icon">🚀</span>
        <div class="article-content">
          <h3>Getting Started with VPS</h3>
          <p>Everything you need to know to start using your virtual server</p>
        </div>
        <span class="article-arrow">→</span>
      </a>
      <a href="/faq" class="article-card">
        <span class="article-icon">❓</span>
        <div class="article-content">
          <h3>FAQ</h3>
          <p>Answers to frequently asked questions</p>
        </div>
        <span class="article-arrow">→</span>
      </a>
      <a href="/vpn/3x-ui" class="article-card">
        <span class="article-icon">🔐</span>
        <div class="article-content">
          <h3>3X-UI VPN Setup</h3>
          <p>Deploy your own VPN server with 3X-UI panel</p>
        </div>
        <span class="article-arrow">→</span>
      </a>
      <a href="/vpn/wireguard" class="article-card">
        <span class="article-icon">🛡️</span>
        <div class="article-content">
          <h3>WireGuard VPN</h3>
          <p>Set up a fast and secure WireGuard VPN server</p>
        </div>
        <span class="article-arrow">→</span>
      </a>
      <a href="/panel/" class="article-card">
        <span class="article-icon">📋</span>
        <div class="article-content">
          <h3>Game Panel Basics</h3>
          <p>Learn how to use our game server control panel</p>
        </div>
        <span class="article-arrow">→</span>
      </a>
      <a href="/games/gmod/darkrp" class="article-card">
        <span class="article-icon">🎮</span>
        <div class="article-content">
          <h3>DarkRP Setup</h3>
          <p>Install and configure DarkRP gamemode for Garry's Mod</p>
        </div>
        <span class="article-arrow">→</span>
      </a>
    </div>
  </section>

  <section class="categories-section">
    <div class="section-header">
      <h2>Browse by Category</h2>
      <p>Find guides organized by topic</p>
    </div>
    <div class="categories-grid">
      <div class="category-card">
        <div class="category-header">
          <span class="category-icon">💻</span>
          <h3>Virtual Servers</h3>
        </div>
        <p class="category-desc">VPS setup, optimization, and management guides</p>
        <div class="category-links">
          <a href="/vps/how-to-connect-through-ssh">SSH Connection</a>
          <a href="/vps/os-reinstallation">OS Reinstallation</a>
          <a href="/vps/nodejs-pm2-deploy">Node.js Deployment</a>
          <a href="/vps/letsencrypt-ssl">Let's Encrypt SSL</a>
          <a href="/vps/working-with-rescue">Working with rescue</a>
        </div>
        <a href="/vps/" class="category-view-all">View all articles →</a>
      </div>
      <div class="category-card">
        <div class="category-header">
          <span class="category-icon">🎮</span>
          <h3>Game Hosting</h3>
        </div>
        <p class="category-desc">Minecraft, Garry's Mod, and other game servers</p>
        <div class="category-links">
          <a href="/games/minecraft/server-properties">Minecraft Configuration</a>
          <a href="/games/gmod/workshop">GMod Workshop</a>
          <a href="/games/gmod/ulx">ULX Admin Mod</a>
          <a href="/games/minecraft/plugins">Minecraft Plugins</a>
        </div>
        <a href="/games/" class="category-view-all">View all articles →</a>
      </div>
      <div class="category-card">
        <div class="category-header">
          <span class="category-icon">🔐</span>
          <h3>VPN Solutions</h3>
        </div>
        <p class="category-desc">Set up your own private VPN server</p>
        <div class="category-links">
          <a href="/vpn/wireguard-easy">WireGuard Easy</a>
          <a href="/vpn/outline">Outline VPN</a>
          <a href="/troubleshooting/speedtest-cli">Network Speed Test</a>
          <a href="/vps/how-to-install-mikrotik-chr-on-a-virtual-server">MikroTik CHR</a>
        </div>
        <a href="/vpn/" class="category-view-all">View all articles →</a>
      </div>
      <div class="category-card">
        <div class="category-header">
          <span class="category-icon">📋</span>
          <h3>Control Panel</h3>
        </div>
        <p class="category-desc">Master our game server management panel</p>
        <div class="category-links">
          <a href="/panel/file-manager">File Manager</a>
          <a href="/panel/databases">Databases</a>
          <a href="/panel/backups">Backups</a>
          <a href="/panel/schedules">Schedules</a>
        </div>
        <a href="/panel/" class="category-view-all">View all articles →</a>
      </div>
    </div>
  </section>

  <section class="help-section">
    <div class="help-content">
      <div class="help-text">
        <h2>Need Help?</h2>
        <p>Can't find what you're looking for? Our support team is ready to assist you.</p>
      </div>
      <a href="https://senko.digital/contacts" class="help-button">Contact Support</a>
    </div>
  </section>
</div>

<style>
.wiki-home a {
  background-image: none !important;
  background-size: initial !important;
  transition: none !important;
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
}

.dark .article-card {
  background: #1e1e1e;
  border-color: #3a3a3a;
}

.article-card:hover {
  border-color: #8a2be2;
}

.article-icon {
  font-size: 1.25rem;
  line-height: 1;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  background: rgba(138, 43, 226, 0.12);
  border-radius: 50%;
}

.dark .article-icon {
  background: rgba(138, 43, 226, 0.25);
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
  font-size: 1.125rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
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
  font-size: 1.375rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
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
  display: inline-block;
  margin-top: auto;
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
}

.help-button:hover {
  background: #8a2be2 !important;
  color: #ffffff !important;
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

  .article-icon {
    width: 2.25rem;
    height: 2.25rem;
    font-size: 1.125rem;
  }

  .category-card {
    padding: 1.125rem;
  }
}
</style>
