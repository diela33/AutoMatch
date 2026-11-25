<script setup>
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
</script>

<template>
  <main class="about-page">
    <section class="about-section" aria-labelledby="about-title">
      <div class="about-grid">
        <div class="section-heading">
          <span class="eyebrow">За платформата</span>
          <h1 id="about-title">За AutoMatch</h1>
        </div>
        <div class="about-content">
          <p>
            AutoMatch е модерна автомобилна платформа, създадена да свързва
            интересите на купувачи и продавачи на ясна и удобна място.
          </p>
          <p>
            Целта ни е процесът по намиране или публикуване на автомобилна
            обява да бъде прозрачен, организирана и лесна за употреба.
          </p>
        </div>
      </div>
    </section>

    <section class="benefits-section" aria-labelledby="benefits-title">
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
    </section>
  </main>
</template>

<style scoped>
.about-page {
  min-height: calc(100vh - 76px);
  background: #fff;
  color: #172033;
  font-family:
    Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.about-section,
.benefits-section {
  padding: clamp(4rem, 9vw, 6.5rem) max(1.5rem, calc((100% - 1120px) / 2));
  box-sizing: border-box;
}

.about-section {
  background:
    radial-gradient(circle at 90% 10%, rgba(47, 123, 255, 0.1), transparent 22rem),
    #fff;
}

.about-grid {
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  align-items: start;
  gap: clamp(2rem, 8vw, 6rem);
}

.section-heading {
  max-width: 520px;
}

.section-heading h1,
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
  background: #edf3fb;
}

.centered-heading {
  margin: 0 auto;
  text-align: center;
}

.benefits-grid {
  max-width: 1120px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin: 2.75rem auto 0;
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

.benefit-card h3 {
  margin: 1.25rem 0 0.55rem;
  color: #172033;
  font-size: 1.12rem;
}

.benefit-card p {
  margin: 0;
  color: #68738a;
  line-height: 1.55;
}

@media (max-width: 760px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .benefits-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 480px) {
  .about-section,
  .benefits-section {
    padding-right: 1.25rem;
    padding-left: 1.25rem;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }

  .benefit-card {
    min-height: 190px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .benefit-card {
    transition: none;
  }
}
</style>
