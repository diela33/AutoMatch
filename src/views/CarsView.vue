<script setup>
import { onMounted, ref } from 'vue'
import CarCard from '../components/cars/CarCard.vue'
import { getAllCars } from '../services/carService'

const categories = [
  { name: 'SUV', detail: 'Пространство и висока позиция', icon: 'SUV' },
  { name: 'Sedan', detail: 'Комфорт и практичност', icon: 'SED' },
  { name: 'Hatchback', detail: 'Компактност за градско пътуване', icon: 'HAT' },
  { name: 'Coupe', detail: 'Спортен стил и динамичен характер', icon: 'COU' },
]

const cars = ref([])
const loading = ref(true)
const error = ref('')

async function loadCars() {
  try {
    cars.value = await getAllCars()
  } catch {
    error.value = 'Не успяхме да заредим автомобилите. Моля, опитай отново по-късно.'
  } finally {
    loading.value = false
  }
}

onMounted(loadCars)
</script>

<template>
  <main class="cars-page">
    <section class="page-intro" aria-labelledby="cars-title">
      <span class="eyebrow">Автомобили</span>
      <h1 id="cars-title">Открий своя автомобил</h1>
      <p>Разгледай категориите и избери типа автомобил, който търсиш.</p>
    </section>

    <section class="catalog-section" aria-label="Категории автомобили">
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
            <h2>{{ category.name }}</h2>
            <p>{{ category.detail }}</p>
          </div>
          <span class="category-arrow" aria-hidden="true">→</span>
        </article>
      </div>

      <div v-if="loading" class="catalog-placeholder" role="status">
        <h2>Зареждаме автомобилите...</h2>
      </div>

      <div v-else-if="error" class="catalog-placeholder catalog-error" role="alert">
        <h2>{{ error }}</h2>
      </div>

      <div v-else-if="cars.length === 0" class="catalog-placeholder">
        <h2>Няма публикувани автомобили</h2>
        <p>Провери отново по-късно за нови предложения.</p>
      </div>

      <div v-else class="cars-grid" aria-label="Обяви за автомобили">
        <CarCard v-for="car in cars" :key="car._id" :car="car" />
      </div>
    </section>
  </main>
</template>

<style scoped>
.cars-page {
  min-height: calc(100vh - 76px);
  padding: clamp(3rem, 7vw, 5.5rem) 1.5rem;
  background:
    radial-gradient(circle at 85% 4%, rgba(47, 123, 255, 0.12), transparent 22rem),
    #f5f8fd;
  color: #172033;
  box-sizing: border-box;
  font-family:
    Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.page-intro,
.catalog-section {
  width: min(1120px, 100%);
  margin: 0 auto;
}

.page-intro {
  text-align: center;
}

.eyebrow {
  color: #245ed8;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.11em;
  text-transform: uppercase;
}

h1 {
  margin: 0.5rem 0 0;
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
}

.page-intro p {
  max-width: 620px;
  margin: 1rem auto 0;
  color: #5d6678;
  font-size: 1.1rem;
  line-height: 1.65;
}

.catalog-section {
  margin-top: 3rem;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
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

.category-card h2 {
  margin: 1.25rem 0 0.55rem;
  color: #172033;
  font-size: 1.12rem;
}

.category-card p {
  margin: 0;
  color: #68738a;
  line-height: 1.55;
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

.catalog-placeholder {
  margin-top: 1.5rem;
  border: 1px dashed #b9c9de;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.72);
  padding: clamp(2rem, 5vw, 3.5rem);
  text-align: center;
}

.placeholder-icon {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  margin: 0 auto;
  border-radius: 16px;
  background: #edf4ff;
  color: #245ed8;
  font-size: 1.8rem;
}

.catalog-placeholder h2 {
  margin: 1rem 0 0.5rem;
  font-size: 1.3rem;
}

.catalog-placeholder p {
  max-width: 560px;
  margin: 0 auto;
  color: #68738a;
  line-height: 1.6;
}

.catalog-error {
  border-color: #e8b4b4;
  color: #9c2f2f;
}

.cars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

@media (max-width: 760px) {
  .categories-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 480px) {
  .cars-page {
    padding-right: 1.25rem;
    padding-left: 1.25rem;
  }

  .categories-grid {
    grid-template-columns: 1fr;
  }

  .category-card {
    min-height: 170px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .category-card,
  .category-card::before,
  .category-arrow {
    transition: none;
  }
}
</style>
