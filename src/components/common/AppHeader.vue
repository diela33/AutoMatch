<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="app-header">
    <nav class="navbar" aria-label="Основна навигация">
      <RouterLink
        class="brand"
        to="/"
        aria-label="AutoMatch начало"
        @click="closeMenu"
      >
        <span class="brand-mark" aria-hidden="true">
          <span class="brand-road"></span>
        </span>
        <span class="brand-name">AutoMatch</span>
      </RouterLink>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="main-navigation"
        :aria-label="isMenuOpen ? 'Затвори навигацията' : 'Отвори навигацията'"
        @click="toggleMenu"
      >
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
      </button>

      <div
        id="main-navigation"
        :class="['navigation', { 'navigation-open': isMenuOpen }]"
      >
        <div class="nav-links">
          <RouterLink
            class="nav-link"
            active-class="nav-link-active"
            exact-active-class="nav-link-active"
            to="/"
            @click="closeMenu"
          >
            Начало
          </RouterLink>
          <RouterLink
            class="nav-link"
            active-class="nav-link-active"
            to="/cars"
            @click="closeMenu"
          >
            Автомобили
          </RouterLink>
          <RouterLink
            class="nav-link"
            active-class="nav-link-active"
            to="/parts"
            @click="closeMenu"
          >
            Части
          </RouterLink>
          <RouterLink
            class="nav-link"
            active-class="nav-link-active"
            to="/about"
            @click="closeMenu"
          >
            За платформата
          </RouterLink>
          <RouterLink
            class="nav-link"
            active-class="nav-link-active"
            to="/contacts"
            @click="closeMenu"
          >
            Контакти
          </RouterLink>
        </div>

        <div class="auth-actions">
          <button class="auth-button login-button" type="button" @click="closeMenu">
            Вход
          </button>
          <button class="auth-button register-button" type="button" @click="closeMenu">
            Регистрация
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  border-bottom: 1px solid #dde6f2;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 8px 24px rgba(25, 53, 96, 0.06);
  backdrop-filter: blur(12px);
  box-sizing: border-box;
  font-family:
    Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.navbar {
  width: min(1120px, calc(100% - 2rem));
  min-height: 76px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;
  box-sizing: border-box;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  flex-shrink: 0;
  color: #172033;
  text-decoration: none;
}

.brand-mark {
  position: relative;
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  overflow: hidden;
  border-radius: 14px;
  background: linear-gradient(145deg, #3978e6, #173f91);
  box-shadow: 0 8px 18px rgba(36, 94, 216, 0.22);
}

.brand-mark::before {
  content: "";
  position: absolute;
  width: 29px;
  height: 13px;
  left: 9px;
  bottom: 13px;
  border-radius: 9px 9px 4px 4px;
  background: #fff;
  transform: skewX(-12deg);
}

.brand-mark::after {
  content: "";
  position: absolute;
  width: 15px;
  height: 8px;
  left: 17px;
  bottom: 22px;
  border-radius: 7px 7px 1px 1px;
  background: #82b4f5;
  transform: skewX(-18deg);
}

.brand-road {
  position: absolute;
  width: 6px;
  height: 6px;
  left: 12px;
  bottom: 8px;
  z-index: 2;
  border: 2px solid #173f91;
  border-radius: 50%;
  background: #eef5ff;
  box-shadow: 21px 0 0 -2px #eef5ff, 21px 0 0 0 #173f91;
}

.brand-name {
  font-size: 1.35rem;
  font-weight: 850;
  letter-spacing: -0.03em;
}

.navigation {
  min-width: 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.nav-links,
.auth-actions {
  display: flex;
  align-items: center;
}

.nav-links {
  gap: 0.25rem;
}

.nav-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 0.75rem;
  color: #4d5870;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  transition:
    color 180ms ease,
    background 180ms ease;
  border-radius: 10px;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0.75rem;
  right: 0.75rem;
  bottom: 2px;
  height: 2px;
  border-radius: 999px;
  background: #245ed8;
  transform: scaleX(0);
  transition: transform 180ms ease;
}

.nav-link:hover,
.nav-link:focus-visible,
.nav-link-active {
  color: #245ed8;
  background: #f2f6fd;
  outline: none;
}

.nav-link:hover::after,
.nav-link:focus-visible::after,
.nav-link-active::after {
  transform: scaleX(1);
}

.auth-actions {
  gap: 0.65rem;
  flex-shrink: 0;
}

.auth-button {
  min-height: 42px;
  border-radius: 10px;
  padding: 0 1rem;
  cursor: pointer;
  font: inherit;
  font-size: 0.92rem;
  font-weight: 750;
  transition:
    transform 180ms ease,
    background 180ms ease,
    color 180ms ease,
    box-shadow 180ms ease;
}

.auth-button:focus-visible {
  outline: 3px solid rgba(36, 94, 216, 0.24);
  outline-offset: 2px;
}

.login-button {
  border: 1px solid #b8c8df;
  background: #fff;
  color: #245ed8;
}

.login-button:hover {
  background: #f2f6fd;
  border-color: #245ed8;
}

.register-button {
  border: 1px solid #245ed8;
  background: #245ed8;
  color: #fff;
  box-shadow: 0 8px 18px rgba(36, 94, 216, 0.18);
}

.register-button:hover {
  background: #1d4fb7;
  border-color: #1d4fb7;
  transform: translateY(-1px);
  box-shadow: 0 10px 22px rgba(36, 94, 216, 0.24);
}

.menu-toggle {
  display: none;
  width: 44px;
  height: 44px;
  margin-left: auto;
  border: 1px solid #dbe4ef;
  border-radius: 10px;
  background: #fff;
  cursor: pointer;
  padding: 10px;
}

.menu-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  margin: 4px 0;
  border-radius: 999px;
  background: #245ed8;
  transition:
    transform 180ms ease,
    opacity 180ms ease;
}

.menu-toggle span.open:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.menu-toggle span.open:nth-child(2) {
  opacity: 0;
}

.menu-toggle span.open:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

@media (max-width: 980px) {
  .navbar {
    width: min(100% - 1.5rem, 1120px);
  }

  .menu-toggle {
    display: block;
  }

  .navigation {
    position: absolute;
    top: 76px;
    left: 0;
    right: 0;
    max-height: 0;
    overflow: hidden;
    display: block;
    border-bottom: 1px solid transparent;
    background: #fff;
    box-shadow: 0 18px 30px rgba(25, 53, 96, 0.12);
    opacity: 0;
    visibility: hidden;
    transition:
      max-height 220ms ease,
      opacity 180ms ease,
      visibility 180ms ease,
      border-color 180ms ease;
  }

  .navigation-open {
    max-height: 520px;
    border-bottom-color: #dde6f2;
    opacity: 1;
    visibility: visible;
  }

  .nav-links,
  .auth-actions {
    width: min(100% - 1.5rem, 1120px);
    margin: 0 auto;
  }

  .nav-links {
    display: grid;
    gap: 0.25rem;
    padding: 0.75rem 0 0.5rem;
  }

  .nav-link {
    width: 100%;
    box-sizing: border-box;
  }

  .auth-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0.5rem 0 1rem;
  }

  .auth-button {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .navbar {
    min-height: 68px;
  }

  .brand-mark {
    width: 42px;
    height: 42px;
  }

  .brand-name {
    font-size: 1.2rem;
  }

  .navigation {
    top: 68px;
  }

  .auth-actions {
    grid-template-columns: 1fr;
  }
}
</style>
