import { getTotal, getTotalOfObjectsArray } from '../utils/getTotal'

describe('getTotal', () => {
  test('should return total sum of numbers array', () => {
    expect(getTotal([1, 2, 3, 4, 5])).toBe(15)
    expect(getTotal([1, 0, 1, 0])).toBe(2)
  })

  test('should return 0 from empty array', () => {
    expect(getTotal([])).toBe(0)
  })
})

describe('getTotalOfObjectsArray', () => {
  const items = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 1 }
  ]

  test('should return total sum of objects array', () => {
    expect(getTotalOfObjectsArray(items, item => item.value)).toBe(31)
  })

  test('should return 0 from empty array', () => {
    expect(getTotalOfObjectsArray([] as typeof items, item => item.value)).toBe(0)
  })
})