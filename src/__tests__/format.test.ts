import { formatLocaleDate, formatEnding } from '../utils/format'

describe('formatEnding', () => {
  test('should return correct value', () => {
    expect(formatEnding(5, 'банан')).toBe('5 бананов')
    expect(formatEnding(1, 'апельсин')).toBe('1 апельсин')
    expect(formatEnding(2, 'мандарин')).toBe('2 мандарина')
  })
})

describe('formatLocaleDate', () => {
  test('should return correct value', () => {
    expect(formatLocaleDate(new Date(2022, 4, 28))).toBe('28 мая')
    expect(formatLocaleDate(new Date(2020, 0, 15))).toBe('15 января')
    expect(formatLocaleDate(new Date(2020, 11, 31))).toBe('31 декабря')
  })
})