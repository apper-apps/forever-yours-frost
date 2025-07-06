import settingsData from '@/services/mockData/settings.json'

let settings = { ...settingsData }

export const settingsService = {
  async getSettings() {
    await new Promise(resolve => setTimeout(resolve, 200))
    return settings
  },

  async updateSettings(newSettings) {
    await new Promise(resolve => setTimeout(resolve, 300))
    settings = { ...settings, ...newSettings }
    return settings
  }
}