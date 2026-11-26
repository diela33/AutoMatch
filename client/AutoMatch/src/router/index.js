import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import CarsView from '@/views/CarsView.vue'
import ContactsView from '@/views/ContactsView.vue'
import HomeView from '@/views/HomeView.vue'
import PartsView from '@/views/PartsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cars',
      name: 'cars',
      component: CarsView,
    },
    {
      path: '/parts',
      name: 'parts',
      component: PartsView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
