export const getTotal = (arr: number[]) => arr.reduce((acc, value) => acc + value, 0)

export const getTotalOfObjectsArray = <T extends object>(items: T[], callback: (item: T) => number) => (
  items.reduce((acc, item) => acc + callback(item), 0)
)