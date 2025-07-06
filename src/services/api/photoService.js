import photosData from '@/services/mockData/photos.json'

const photos = [...photosData]

export const photoService = {
  async getAll() {
    await new Promise(resolve => setTimeout(resolve, 300))
    return photos.sort((a, b) => a.order - b.order)
  },

  async getById(id) {
    await new Promise(resolve => setTimeout(resolve, 200))
    return photos.find(photo => photo.Id === parseInt(id))
  },

  async create(photo) {
    await new Promise(resolve => setTimeout(resolve, 400))
    const newPhoto = {
      ...photo,
      Id: Math.max(...photos.map(p => p.Id)) + 1
    }
    photos.push(newPhoto)
    return newPhoto
  },

  async update(id, data) {
    await new Promise(resolve => setTimeout(resolve, 300))
    const index = photos.findIndex(photo => photo.Id === parseInt(id))
    if (index !== -1) {
      photos[index] = { ...photos[index], ...data }
      return photos[index]
    }
    throw new Error('Photo not found')
  },

  async delete(id) {
    await new Promise(resolve => setTimeout(resolve, 200))
    const index = photos.findIndex(photo => photo.Id === parseInt(id))
    if (index !== -1) {
      return photos.splice(index, 1)[0]
    }
    throw new Error('Photo not found')
  }
}