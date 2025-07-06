import milestonesData from '@/services/mockData/milestones.json'

const milestones = [...milestonesData]

export const milestoneService = {
  async getAll() {
    await new Promise(resolve => setTimeout(resolve, 300))
    return milestones.sort((a, b) => new Date(a.date) - new Date(b.date))
  },

  async getById(id) {
    await new Promise(resolve => setTimeout(resolve, 200))
    return milestones.find(milestone => milestone.Id === parseInt(id))
  },

  async create(milestone) {
    await new Promise(resolve => setTimeout(resolve, 400))
    const newMilestone = {
      ...milestone,
      Id: Math.max(...milestones.map(m => m.Id)) + 1
    }
    milestones.push(newMilestone)
    return newMilestone
  },

  async update(id, data) {
    await new Promise(resolve => setTimeout(resolve, 300))
    const index = milestones.findIndex(milestone => milestone.Id === parseInt(id))
    if (index !== -1) {
      milestones[index] = { ...milestones[index], ...data }
      return milestones[index]
    }
    throw new Error('Milestone not found')
  },

  async delete(id) {
    await new Promise(resolve => setTimeout(resolve, 200))
    const index = milestones.findIndex(milestone => milestone.Id === parseInt(id))
    if (index !== -1) {
      return milestones.splice(index, 1)[0]
    }
    throw new Error('Milestone not found')
  }
}