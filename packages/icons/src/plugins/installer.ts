import type { App } from 'vue'
import * as Icons from '../icons'
import CIcon from '../vue/Icon.vue'

export const installer = {
  install: (app: App) => {
    for (const [name, icon] of Object.entries(Icons)) {
      app.component(name, icon)
    }
    app.component(CIcon.name, CIcon)
  },
}
