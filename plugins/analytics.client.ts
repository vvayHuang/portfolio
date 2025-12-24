import Hotjar from '@hotjar/browser'
import Clarity from '@microsoft/clarity'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.env.NODE_ENV === 'production') {
    const siteId = 6552662
    const hotjarVersion = 6
    Hotjar.init(siteId, hotjarVersion)

    const projectId = 'ttk3ubjgdk'
    Clarity.init(projectId)
  }
})
