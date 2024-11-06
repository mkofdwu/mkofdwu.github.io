import './assets/main.css'

import { ViteSSG } from 'vite-ssg'

import App from './App.vue'
import WelcomeView from './views/WelcomeView.vue'
import LinksView from './views/LinksView.vue'

export const createApp = ViteSSG(App, {
  routes: [
    {
      path: '/',
      component: WelcomeView
    },
    {
      path: '/links',
      component: LinksView
    }
  ]
})
