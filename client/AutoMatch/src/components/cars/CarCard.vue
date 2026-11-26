<script setup>
defineProps({
  car: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="car-card">
    <img
      v-if="car.imageUrl"
      class="car-image"
      :src="car.imageUrl"
      :alt="`${car.brand} ${car.model}`"
    />
    <div class="car-details">
      <p class="car-brand">{{ car.brand || 'Марка не е посочена' }}</p>
      <h2>{{ car.model || 'Модел не е посочен' }}</h2>
      <p>Година: {{ car.year ?? '—' }}</p>
      <p class="car-price">Цена: {{ car.price ?? '—' }}</p>
      <p>Категория: {{ car.category || '—' }}</p>
      <p class="car-description">{{ car.description || 'Няма описание.' }}</p>
    </div>
  </article>
</template>

<style scoped>
.car-card {
  overflow: hidden;
  border: 1px solid #dde7f4;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 12px 34px rgba(49, 78, 125, 0.07);
}

.car-image {
  display: block;
  width: 100%;
  height: 210px;
  object-fit: cover;
  background: #edf3fb;
}

.car-details {
  padding: 1.25rem;
}

.car-details h2 {
  margin: 0.25rem 0 0.75rem;
  color: #172033;
  font-size: 1.25rem;
}

.car-details p {
  margin: 0.45rem 0 0;
  color: #68738a;
  line-height: 1.5;
}

.car-details .car-brand {
  color: #245ed8;
  font-size: 0.9rem;
  font-weight: 750;
}

.car-details .car-price {
  color: #172033;
  font-weight: 750;
}

.car-description {
  padding-top: 0.5rem;
}

@media (max-width: 480px) {
  .car-image {
    height: 190px;
  }

  .car-details {
    padding: 1rem;
  }
}
</style>
