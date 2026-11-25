<template>
  <footer class="app-footer">
    <div class="footer-container">
      <div class="footer-brand">
        <span class="footer-logo" aria-hidden="true">A</span>
        <div>
          <strong>AutoMatch</strong>
          <p>
            Удобна платформа за откриване и публикуване на автомобилни обяви.
          </p>
        </div>
      </div>

      <div class="footer-column">
        <h2>Навигация</h2>
        <nav aria-label="Навигация във footer">
          <RouterLink to="/">Начало</RouterLink>
          <RouterLink to="/cars">Автомобили</RouterLink>
          <RouterLink to="/parts">Части</RouterLink>
          <RouterLink to="/about">За платформата</RouterLink>
        </nav>
      </div>

      <div class="footer-column">
        <h2>Контакти</h2>
        <RouterLink to="/contacts">Информация за контакти</RouterLink>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2026 AutoMatch. Всички права запазени.</p>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background: #172033;
  color: #fff;
  font-family:
    Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.footer-container,
.footer-bottom {
  width: min(1120px, calc(100% - 3rem));
  margin: 0 auto;
}

.footer-container {
  display: grid;
  grid-template-columns: 1.7fr 0.7fr 1fr;
  gap: clamp(2rem, 6vw, 5rem);
  padding: 3.5rem 0;
  box-sizing: border-box;
}

.footer-brand {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
}

.footer-logo {
  width: 44px;
  height: 44px;
  display: grid;
  flex-shrink: 0;
  place-items: center;
  border-radius: 12px;
  background: #3978e6;
  font-size: 1.15rem;
  font-weight: 850;
}

.footer-brand strong {
  font-size: 1.25rem;
}

.footer-brand p {
  max-width: 380px;
  margin: 0.55rem 0 0;
  color: #b7c2d4;
  line-height: 1.65;
}

.footer-column h2 {
  margin: 0 0 0.75rem;
  font-size: 1rem;
}

.footer-column nav {
  display: grid;
  gap: 0.55rem;
}

.footer-column a {
  width: fit-content;
  color: #c7d1e2;
  text-decoration: none;
  transition: color 180ms ease;
}

.footer-column a:hover,
.footer-column a:focus-visible {
  color: #76a7ff;
}

.footer-column a:focus-visible {
  outline: 2px solid #76a7ff;
  outline-offset: 3px;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.25rem 0;
}

.footer-bottom p {
  margin: 0;
  color: #9eabbe;
  font-size: 0.88rem;
  text-align: center;
}

@media (max-width: 760px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 480px) {
  .footer-container,
  .footer-bottom {
    width: calc(100% - 2.5rem);
  }

  .footer-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-brand {
    grid-column: auto;
  }
}
</style>
