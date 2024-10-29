import './assets/main.css'

import { ViteSSG } from 'vite-ssg'

import App from './App.vue'
import WelcomeView from './views/WelcomeView.vue'
import ContactView from './views/ContactView.vue'

export const createApp = ViteSSG(App, {
  routes: [
    {
      path: '/',
      component: WelcomeView
    },
    {
      path: '/contact',
      component: ContactView
    }
  ]
})
