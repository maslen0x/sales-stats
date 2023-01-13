import { formatPercentage } from './format'

export const getIncome = (a: number, b: number) => {
  const color = a > b ? '#9aff9e80' : '#ff000080'

  const sign = a > b ? '+' : '-'

  const percentage = formatPercentage(1 - (Math.min(a, b) / Math.max(a, b)))

  return { color, sign, percentage }
}