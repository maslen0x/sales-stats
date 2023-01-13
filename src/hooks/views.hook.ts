import { formatPercentage } from '../utils/format';
import { getTotalOfObjectsArray } from '../utils/getTotal';
import type { View } from '../store/stats/stats.types';

export const useViews = (items: View[], month: number) => {
  const filterViews = (year: number) => items.filter(item => {
    const date = new Date(item.date)
    return date.getFullYear() === year && date.getMonth() === month
  })

  const views = filterViews(2021)

  const prevYearViews = filterViews(2020)

  const labels = views.map(view => view.date)

  const datasets = views.reduce<[number[], number[]]>((acc, view) => {
    acc[0].push(view.view)
    acc[1].push(view.click)
    return acc
  }, [[], []])

  const total = [
    [getTotalOfObjectsArray(views, view => view.view), getTotalOfObjectsArray(views, view => view.click)],
    [getTotalOfObjectsArray(prevYearViews, view => view.view), getTotalOfObjectsArray(prevYearViews, view => view.click)]
  ]

  const percentage = formatPercentage(total[0][1] / total[0][0])

  return {
    data: { labels, datasets },
    total,
    percentage
  }
}