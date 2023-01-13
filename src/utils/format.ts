import months from '../data/months.json'

export const formatMoney = (value: number) => (
  value.toLocaleString('ru', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0
  })
)

export const formatPercentage = (value: number) => (
  value.toLocaleString('ru', { style: 'percent' })
)

export const formatLocaleDate = (date: Date) => (
  `${date.getDate()} ${months.declension[date.getMonth()]}`
)

export const formatEnding = (number: number, string: string) => {
  const lastNumber = Number(String(number).slice(-1))

  const getEnding = () => {
    if(lastNumber === 1) return string
    if(lastNumber > 1 && lastNumber < 5) return `${string}а`
    return `${string}ов`
  }

  const ending = getEnding()
  return `${number} ${ending}`
}