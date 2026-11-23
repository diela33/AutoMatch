<script setup>
import { ref } from 'vue'

const isNoticeVisible = ref(false)

const showCarsNotice = () => {
  isNoticeVisible.value = true
}

const benefits = [
  {
    icon: '⌕',
    title: 'Лесно търсене',
    text: 'Намирай подходящата оферта бързо и удобно.',
  },
  {
    icon: '▤',
    title: 'Подробни обяви',
    text: 'Разглеждай важна информация за всяко превозно средство.',
  },
  {
    icon: '⌂',
    title: 'Удобна платформа',
    text: 'Пазарувай автомобилите си от ясна и лесна среда.',
  },
  {
    icon: '＋',
    title: 'Бързо публикуване',
    text: 'Представи обявата си лесно пред заинтересовани купувачи.',
  },
]

const categories = [
  { name: 'SUV', detail: 'Пространство и висока позиция', icon: 'SUV' },
  { name: 'Седан', detail: 'Комфорт и ежедневна практика', icon: 'SED' },
  { name: 'Хечбек', detail: 'Компактно и удобно градско пътуване', icon: 'HAT' },
  { name: 'Купе', detail: 'Спортен стил и динамичен характер', icon: 'COU' },
]
</script>

<template>
  <main id="top" class="home-page">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-content">
        <span class="brand">AutoMatch</span>
        <h1 id="hero-title">Намери автомобила, който търсиш.</h1>
        <p>
          Сравни предложенията и открий надеждната кола, която най-добре
          отговаря на твоите нужди.
        </p>
        <button type="button" class="cta-button" @click="showCarsNotice">
          Разгледай автомобилите
        </button>
        <p v-if="isNoticeVisible" class="notice" role="status">
          Разделът с автомобили ще бъде добавен скоро.
        </p>
      </div>

      <div class="hero-visual" aria-hidden="true">
        <div class="car-card">
          <div class="road-line"></div>
          <div class="car">
            <span class="window"></span>
            <span class="wheel wheel-left"></span>
            <span class="wheel wheel-right"></span>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="about-section" aria-labelledby="about-title">
      <div class="section-container about-grid">
        <div class="section-heading">
          <span class="eyebrow">За платформата</span>
          <h2 id="about-title">За AutoMatch</h2>
        </div>
        <div class="about-content">
          <p>
            AutoMatch е модерна автомобилна платформа, създадена да свързва
            интересите на купувачи и продавачи на ясна и удобна място.
          </p>
          <p>
            Целта ни е             процесът по намиране или публикуване на автомобилна
            обява да бъде прозрачен, организирана и лесна за употреба.
          </p>
        </div>
      </div>
    </section>

    <section class="benefits-section" aria-labelledby="benefits-title">
      <div class="section-container">
        <div class="section-heading centered-heading">
          <span class="eyebrow">Предимства</span>
          <h2 id="benefits-title">Защо AutoMatch?</h2>
        </div>

        <div class="benefits-grid">
          <article
            v-for="benefit in benefits"
            :key="benefit.title"
            class="benefit-card"
          >
            <span class="benefit-icon" aria-hidden="true">{{ benefit.icon }}</span>
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section
      id="automobiles"
      class="categories-section"
      aria-labelledby="categories-title"
    >
      <div class="section-container">
        <div class="section-heading centered-heading">
          <span class="eyebrow">Изберете тип</span>
          <h2 id="categories-title">Открий своя автомобил</h2>
        </div>

        <div class="categories-grid">
          <article
            v-for="category in categories"
            :key="category.name"
            class="category-card"
          >
            <span class="category-label" aria-hidden="true">
              {{ category.icon }}
            </span>
            <div>
              <h3>{{ category.name }}</h3>
              <p>{{ category.detail }}</p>
            </div>
            <span class="category-arrow" aria-hidden="true">→</span>
          </article>
        </div>

        <div id="parts" class="parts-notice" role="status">
          <span aria-hidden="true">⚙</span>
          <div>
            <strong>Категорията „Части“ предстои</strong>
            <p>Разделът с автомобилни части ще бъде добавен в бъдеща версия.</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer id="contacts" class="app-footer">
    <div class="footer-container">
      <div class="footer-brand">
        <span class="footer-logo">A</span>
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
          <a href="#top">Начало</a>
          <a href="#automobiles">Автомобили</a>
          <a href="#parts">Части</a>
          <a href="#about">За нас</a>
        </nav>
      </div>

      <div class="footer-column">
        <h2>Контакти</h2>
        <p>Информацията за контакти ще бъде добавена скоро.</p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2026 AutoMatch. Всички права запазени.</p>
    </div>
  </footer>
</template>

<style scoped>
.home-page {
  background:
    radial-gradient(circle at 82% 20%, rgba(47, 123, 255, 0.16), transparent 22rem),
    linear-gradient(135deg, #f7f9fc 0%, #edf3fb 100%);
  color: #172033;
  box-sizing: border-box;
  font-family:
    Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.hero {
  min-height: calc(100vh - 76px);
  width: min(1120px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.85fr);
  align-items: center;
  gap: clamp(2rem, 8vw, 6rem);
  padding: clamp(3rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem);
  box-sizing: border-box;
}

.hero-content {
  max-width: 650px;
}

.brand {
  display: inline-block;
  color: #245ed8;
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

h1 {
  max-width: 620px;
  margin: 0;
  font-size: clamp(2.6rem, 6vw, 5.25rem);
  line-height: 0.98;
  letter-spacing: -0.045em;
}

.hero-content > p {
  max-width: 560px;
  margin: 1.5rem 0 2rem;
  color: #5d6678;
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  line-height: 1.65;
}

.cta-button {
  border: 0;
  border-radius: 999px;
  background: #245ed8;
  color: #fff;
  cursor: pointer;
  padding: 0.95rem 1.5rem;
  font: inherit;
  font-weight: 750;
  box-shadow: 0 12px 28px rgba(36, 94, 216, 0.24);
  transition:
    transform 160ms ease,
    background 160ms ease,
    box-shadow 160ms ease;
}

.cta-button:hover {
  background: #1d4fb7;
  transform: translateY(-2px);
  box-shadow: 0 16px 32px rgba(36, 94, 216, 0.28);
}

.cta-button:focus-visible {
  outline: 3px solid rgba(36, 94, 216, 0.28);
  outline-offset: 4px;
}

.hero-content .notice {
  margin: 1rem 0 0;
  color: #245ed8;
  font-size: 0.95rem;
  font-weight: 650;
}

.hero-visual {
  min-height: 390px;
  display: grid;
  place-items: center;
}

.car-card {
  position: relative;
  width: 100%;
  aspect-ratio: 1.25;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 32px;
  background:
    linear-gradient(150deg, rgba(255, 255, 255, 0.9), rgba(216, 229, 249, 0.78)),
    #e8eff9;
  box-shadow: 0 28px 70px rgba(49, 78, 125, 0.16);
}

.road-line {
  position: absolute;
  left: -10%;
  right: -10%;
  bottom: 24%;
  height: 12%;
  border-radius: 50%;
  background: #9dafc7;
  transform: rotate(-4deg);
}

.car {
  position: absolute;
  left: 18%;
  bottom: 29%;
  width: 64%;
  height: 31%;
  border-radius: 55% 38% 18% 16%;
  background: linear-gradient(135deg, #3978e6, #173f91);
  box-shadow: inset 0 -12px 18px rgba(12, 48, 111, 0.18);
  transform: rotate(-4deg);
}

.car::before {
  content: "";
  position: absolute;
  width: 50%;
  height: 58%;
  left: 26%;
  bottom: 78%;
  border-radius: 80% 18% 0 0;
  background: #3978e6;
  clip-path: polygon(22% 100%, 42% 0, 80% 0, 100% 100%);
}

.window {
  position: absolute;
  z-index: 1;
  width: 29%;
  height: 34%;
  left: 45%;
  bottom: 80%;
  border-radius: 70% 10% 0 0;
  background: linear-gradient(135deg, #bfe0f7, #6c91b5);
  clip-path: polygon(18% 100%, 42% 0, 82% 0, 100% 100%);
}

.wheel {
  position: absolute;
  bottom: -22%;
  width: 21%;
  aspect-ratio: 1;
  border: clamp(5px, 1vw, 9px) solid #202938;
  border-radius: 50%;
  background: #e7edf5;
  box-shadow: inset 0 0 0 4px #91a0b3;
}

.wheel-left {
  left: 10%;
}

.wheel-right {
  right: 9%;
}

.section-container,
.footer-container,
.footer-bottom {
  width: min(1120px, calc(100% - 3rem));
  margin: 0 auto;
}

.section-heading {
  max-width: 520px;
}

.section-heading h2 {
  margin: 0.35rem 0 0;
  color: #172033;
  font-size: clamp(2rem, 4vw, 3.25rem);
  line-height: 1.1;
  letter-spacing: -0.035em;
}

.eyebrow {
  color: #245ed8;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.11em;
  text-transform: uppercase;
}

.centered-heading {
  margin: 0 auto;
  text-align: center;
}

.about-section,
.benefits-section,
.categories-section {
  scroll-margin-top: 76px;
  padding: clamp(4.5rem, 9vw, 7rem) 0;
  box-sizing: border-box;
}

.about-section {
  background: #fff;
}

.about-grid {
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  align-items: start;
  gap: clamp(2rem, 8vw, 6rem);
}

.about-content {
  border-left: 3px solid #3978e6;
  padding-left: clamp(1.25rem, 3vw, 2.25rem);
}

.about-content p {
  margin: 0;
  color: #5d6678;
  font-size: clamp(1.05rem, 2vw, 1.18rem);
  line-height: 1.75;
}

.about-content p + p {
  margin-top: 1rem;
}

.benefits-section {
  background:
    linear-gradient(rgba(237, 243, 251, 0.94), rgba(237, 243, 251, 0.94)),
    #edf3fb;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2.75rem;
}

.benefit-card {
  min-height: 220px;
  border: 1px solid #dde7f4;
  border-radius: 18px;
  background: #fff;
  padding: 1.5rem;
  box-shadow: 0 12px 34px rgba(49, 78, 125, 0.07);
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    border-color 180ms ease;
}

.benefit-card:hover {
  transform: translateY(-6px);
  border-color: #b9cef3;
  box-shadow: 0 18px 38px rgba(49, 78, 125, 0.12);
}

.benefit-icon {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: #edf4ff;
  color: #245ed8;
  font-size: 1.45rem;
  font-weight: 850;
}

.benefit-card h3,
.category-card h3 {
  margin: 1.25rem 0 0.55rem;
  color: #172033;
  font-size: 1.12rem;
}

.benefit-card p,
.category-card p {
  margin: 0;
  color: #68738a;
  line-height: 1.55;
}

.categories-section {
  background: #fff;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2.75rem;
}

.category-card {
  position: relative;
  min-height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  border: 1px solid #dde7f4;
  border-radius: 20px;
  background: linear-gradient(145deg, #fff, #f3f7fc);
  padding: 1.35rem;
  box-sizing: border-box;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease;
}

.category-card::before {
  content: "";
  position: absolute;
  width: 130px;
  height: 130px;
  right: -70px;
  top: -72px;
  border-radius: 50%;
  background: rgba(57, 120, 230, 0.08);
  transition: transform 180ms ease;
}

.category-card:hover {
  transform: translateY(-6px);
  border-color: #9bb9ea;
  box-shadow: 0 18px 38px rgba(49, 78, 125, 0.12);
}

.category-card:hover::before {
  transform: scale(1.35);
}

.category-label {
  width: fit-content;
  border: 1px solid #cadbf4;
  border-radius: 8px;
  background: #edf4ff;
  color: #245ed8;
  padding: 0.4rem 0.55rem;
  font-size: 0.72rem;
  font-weight: 850;
  letter-spacing: 0.08em;
}

.category-arrow {
  position: absolute;
  right: 1.35rem;
  bottom: 1.35rem;
  color: #245ed8;
  font-size: 1.35rem;
  transition: transform 180ms ease;
}

.category-card:hover .category-arrow {
  transform: translateX(5px);
}

.parts-notice {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.25rem;
  border: 1px solid #dbe6f5;
  border-radius: 16px;
  background: #f7f9fd;
  padding: 1.1rem 1.25rem;
  color: #526079;
  scroll-margin-top: 76px;
}

.parts-notice > span {
  width: 42px;
  height: 42px;
  display: grid;
  flex-shrink: 0;
  place-items: center;
  border-radius: 12px;
  background: #eaf2ff;
  color: #245ed8;
  font-size: 1.25rem;
}

.parts-notice strong {
  color: #172033;
}

.parts-notice p {
  margin: 0.25rem 0 0;
  font-size: 0.92rem;
}

.app-footer {
  background: #172033;
  color: #fff;
  scroll-margin-top: 76px;
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

.footer-brand p,
.footer-column p {
  color: #b7c2d4;
  line-height: 1.65;
}

.footer-brand p {
  max-width: 380px;
  margin: 0.55rem 0 0;
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
  color: #c7d1e2;
  text-decoration: none;
  transition: color 180ms ease;
}

.footer-column a:hover {
  color: #76a7ff;
}

.footer-column p {
  margin: 0;
  font-size: 0.92rem;
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
  .home-page {
    background:
      linear-gradient(135deg, #f7f9fc 0%, #edf3fb 100%);
  }

  .hero {
    min-height: auto;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
  }

  .hero-content {
    text-align: center;
    margin: 0 auto;
  }

  .hero-content > p {
    margin-inline: auto;
  }

  .hero-visual {
    min-height: 260px;
  }

  .car-card {
    max-width: 520px;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .benefits-grid,
  .categories-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .footer-container {
    grid-template-columns: 1fr 1fr;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 420px) {
  .home-page {
    padding: 1.25rem;
  }

  h1 {
    font-size: 2.45rem;
  }

  .hero-visual {
    min-height: 220px;
  }

  .car-card {
    border-radius: 22px;
  }

  .section-container,
  .footer-container,
  .footer-bottom {
    width: calc(100% - 2.5rem);
  }

  .benefits-grid,
  .categories-grid {
    grid-template-columns: 1fr;
  }

  .benefit-card {
    min-height: 190px;
  }

  .category-card {
    min-height: 170px;
  }

  .footer-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-brand {
    grid-column: auto;
  }

  .parts-notice {
    align-items: flex-start;
  }
}
</style>
