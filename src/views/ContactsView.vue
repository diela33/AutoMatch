<template>
  <main class="contacts-page">
    <section class="contacts-card" aria-labelledby="contacts-title">
      <span class="contacts-icon" aria-hidden="true">✉</span>
      <span class="eyebrow">AutoMatch</span>
      <h1 id="contacts-title">Контакти</h1>
      <p>Информацията за контакти ще бъде добавена скоро.</p>
    </section>
  </main>
</template>

<style scoped>
.contacts-page {
  min-height: calc(100vh - 76px);
  display: grid;
  place-items: center;
  padding: 2rem 1.5rem;
  background:
    radial-gradient(circle at 80% 18%, rgba(47, 123, 255, 0.14), transparent 22rem),
    linear-gradient(135deg, #f7f9fc 0%, #edf3fb 100%);
  color: #172033;
  box-sizing: border-box;
  font-family:
    Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.contacts-card {
  width: min(620px, 100%);
  border: 1px solid #dde7f4;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.9);
  padding: clamp(2rem, 7vw, 4rem);
  box-shadow: 0 24px 60px rgba(49, 78, 125, 0.1);
  text-align: center;
  box-sizing: border-box;
}

.contacts-icon {
  width: 64px;
  height: 64px;
  display: grid;
  place-items: center;
  margin: 0 auto 1.5rem;
  border-radius: 18px;
  background: #edf4ff;
  color: #245ed8;
  font-size: 1.8rem;
}

.eyebrow {
  color: #245ed8;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.11em;
  text-transform: uppercase;
}

h1 {
  margin: 0.65rem 0 0;
  font-size: clamp(2rem, 5vw, 3.2rem);
  line-height: 1.1;
  letter-spacing: -0.04em;
}

.contacts-card p {
  margin: 1rem 0 0;
  color: #5d6678;
  font-size: 1.08rem;
  line-height: 1.65;
}
</style>
