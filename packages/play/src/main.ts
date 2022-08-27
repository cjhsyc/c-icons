import { createApp } from 'vue'
import App from './App.vue'
import { Icons, CIcon } from '@cjhsyc/icons'
import '@cjhsyc/icons/style'

const app = createApp(App)
for (const [name, icon] of Object.entries(Icons)) {
  app.component(name, icon)
}
app.component(CIcon.name, CIcon)
app.mount('#app')
