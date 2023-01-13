import { FC, PropsWithChildren } from 'react'
import styles from './Row.module.sass'

type Alignment = 'center' | 'start' | 'end' | 'between'

type Direction = 'column' | 'row'

interface RowProps {
  justify?: Alignment
  align?: Alignment
  direction?: Direction
  gap?: number
}

const justifyMap: Record<Alignment, string> = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
  between: 'space-between'
}

const Row: FC<PropsWithChildren<RowProps>> = ({
  children,
  justify,
  align,
  direction,
  gap
}) => (
  <div
    className={styles.row}
    style={{
      justifyContent: justify && justifyMap[justify],
      alignItems: align,
      flexDirection: direction,
      gap
    }}
  >
    {children}
  </div>
)

export default Row