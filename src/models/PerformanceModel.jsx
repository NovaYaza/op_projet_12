export class PerformanceModel {
  constructor(data) {
    const kindLabels = {
      cardio: 'Cardio',
      energy: 'Énergie',
      endurance: 'Endurance',
      strength: 'Force',
      speed: 'Vitesse',
      intensity: 'Intensité'
    }

    const kindMap = Object.entries(data.kind).reduce((acc, [key, value]) => {
      acc[key] = kindLabels[value] || value
      return acc
    }, {})

    this.data = data.data.map(item => ({
      value: item.value,
      kind: kindMap[item.kind]
    }))
  }
}