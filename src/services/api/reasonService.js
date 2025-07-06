import reasonsData from '@/services/mockData/reasons.json'

const reasons = [...reasonsData]

export const reasonService = {
  async getAll() {
    await new Promise(resolve => setTimeout(resolve, 300))
    return reasons
  },

  async getById(id) {
    await new Promise(resolve => setTimeout(resolve, 200))
    return reasons.find(reason => reason.Id === parseInt(id))
  },

  async create(reason) {
    await new Promise(resolve => setTimeout(resolve, 400))
    const newReason = {
      ...reason,
      Id: Math.max(...reasons.map(r => r.Id)) + 1
    }
    reasons.push(newReason)
    return newReason
  },

  async update(id, data) {
    await new Promise(resolve => setTimeout(resolve, 300))
    const index = reasons.findIndex(reason => reason.Id === parseInt(id))
    if (index !== -1) {
      reasons[index] = { ...reasons[index], ...data }
      return reasons[index]
    }
    throw new Error('Reason not found')
  },

  async delete(id) {
    await new Promise(resolve => setTimeout(resolve, 200))
    const index = reasons.findIndex(reason => reason.Id === parseInt(id))
    if (index !== -1) {
      return reasons.splice(index, 1)[0]
    }
    throw new Error('Reason not found')
  }
}