import { getIncome } from '../utils/getIncome'
import { getTotal } from '../utils/getTotal'
import type { Purchase } from '../store/stats/stats.types'

export const usePurchases = (items: Purchase[], month: number) => {
  const labels = [...new Set(items.reduce<string[]>((acc, purchase) => {
    const date = new Date(purchase.date)
    if(date.getMonth() === month && date.getFullYear() === 2021) {
      acc.push(purchase.date)
    }
    return acc
  }, []))]

  const datasets = Object.values(items.reduce<Record<number, number[]>>((acc, purchase) => {
    const date = new Date(purchase.date)
    const year = date.getFullYear()
    if(date.getMonth() === month) {
      acc[year] = [...(acc[year] ?? []), purchase.value]
    }
    return acc
  }, {})) as [number[], number[]]

  const total = [getTotal(datasets[0] ?? []), getTotal(datasets[1] ?? [])]

  const income = getIncome(total[0], total[1])

  return {
    data: { labels, datasets },
    total,
    income
  }
}