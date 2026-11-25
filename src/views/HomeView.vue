<template>
  <main class="home-page">
    <section class="hero" aria-labelledby="hero-title">
      <img
        class="hero-image"
        src="/images/automatch-blue-car.png"
        alt="Син автомобил AutoMatch на градски фон"
      />

      <div class="hero-content">
        <span class="brand">AUTOMATCH</span>
        <h1 id="hero-title">Намери автомобила, който търсиш.</h1>
        <p>
          Сравни предложенията и открий надеждната кола, която най-добре
          отговаря на твоите нужди.
        </p>
        <RouterLink class="cta-button" to="/cars">
          Разгледай автомобилите
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home-page {
  margin-inline: -8px;
  color: #fff;
  font-family:
    Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.hero {
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 76px);
  min-height: calc(100svh - 76px);
  overflow: hidden;
  padding: clamp(3rem, 8vh, 6rem) max(1.5rem, calc((100% - 1200px) / 2));
  background: #0b1528;
  box-sizing: border-box;
}

.hero::after {
  position: absolute;
  z-index: -1;
  inset: 0;
  content: "";
  background: linear-gradient(
    90deg,
    rgba(5, 14, 30, 0.94) 0%,
    rgba(5, 14, 30, 0.78) 34%,
    rgba(5, 14, 30, 0.42) 58%,
    rgba(5, 14, 30, 0.06) 100%
  );
}

.hero-image {
  position: absolute;
  z-index: -2;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 70% center;
  transform: scale(1.02);
  animation: image-zoom 20s ease-out both;
}

.hero-content {
  position: relative;
  z-index: 1;
  width: min(600px, 54%);
}

.brand {
  display: inline-block;
  margin-bottom: 1rem;
  color: #8eb8ff;
  font-size: 0.88rem;
  font-weight: 850;
  letter-spacing: 0.2em;
  animation: text-appear 650ms ease-out both;
}

h1 {
  max-width: 650px;
  margin: 0;
  color: #fff;
  font-size: clamp(3rem, 5.6vw, 5.6rem);
  font-weight: 800;
  line-height: 0.99;
  letter-spacing: -0.05em;
  text-wrap: balance;
  animation: text-appear 750ms 100ms ease-out both;
}

.hero-content > p {
  max-width: 540px;
  margin: 1.5rem 0 2rem;
  color: rgba(255, 255, 255, 0.86);
  font-size: clamp(1.05rem, 1.7vw, 1.25rem);
  line-height: 1.7;
  animation: text-appear 750ms 220ms ease-out both;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  border: 1px solid #3978e6;
  border-radius: 999px;
  background: #245ed8;
  color: #fff;
  cursor: pointer;
  padding: 0.9rem 1.55rem;
  font: inherit;
  font-weight: 750;
  text-decoration: none;
  box-shadow: 0 12px 30px rgba(13, 61, 156, 0.32);
  transition:
    transform 180ms ease,
    background 180ms ease,
    box-shadow 180ms ease;
  animation: text-appear 750ms 360ms ease-out both;
}

.cta-button:hover {
  transform: translateY(-2px);
  background: #3978e6;
  box-shadow: 0 16px 34px rgba(13, 61, 156, 0.42);
}

.cta-button:focus-visible {
  outline: 3px solid rgba(255, 255, 255, 0.8);
  outline-offset: 4px;
}

@keyframes text-appear {
  from {
    opacity: 0;
    transform: translateY(14px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes image-zoom {
  from {
    transform: scale(1.02);
  }

  to {
    transform: scale(1.06);
  }
}

@media (max-width: 980px) {
  .hero-content {
    width: min(550px, 62%);
  }

  .hero-image {
    object-position: 68% center;
  }
}

@media (max-width: 680px) {
  .hero {
    align-items: flex-start;
    min-height: calc(100vh - 76px);
    min-height: calc(100svh - 76px);
    padding: clamp(3rem, 8vh, 5rem) 1.5rem clamp(6rem, 20vh, 12rem);
  }

  .hero::after {
    background:
      linear-gradient(
        180deg,
        rgba(5, 14, 30, 0.9) 0%,
        rgba(5, 14, 30, 0.68) 44%,
        rgba(5, 14, 30, 0.14) 100%
      ),
      linear-gradient(90deg, rgba(5, 14, 30, 0.36), transparent 100%);
  }

  .hero-image {
    object-position: 44% center;
  }

  .hero-content {
    width: min(540px, 100%);
  }

  h1 {
    font-size: clamp(2.7rem, 10vw, 4.2rem);
  }

  .hero-content > p {
    max-width: 480px;
    margin: 1.25rem 0 1.75rem;
    font-size: 1.05rem;
  }
}

@media (max-width: 420px) {
  .hero {
    padding-right: 1.25rem;
    padding-left: 1.25rem;
  }

  h1 {
    font-size: clamp(2.5rem, 11vw, 3.2rem);
  }

  .cta-button {
    max-width: 100%;
    padding-right: 1.2rem;
    padding-left: 1.2rem;
    font-size: 0.95rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .brand,
  h1,
  .hero-content > p,
  .cta-button,
  .hero-image {
    animation: none;
    transition: none;
  }

  .hero-image {
    transform: none;
  }
}
</style>
