import { FC, ReactNode, useState } from 'react'
import styles from './Column.module.sass'

interface ColumnProps {
  label: string
  values: [number, number]
  max: number
  renderPopup?: (data: { label: string, values: number[] }) => ReactNode
}

const Column: FC<ColumnProps> = ({ label, values, max, renderPopup }) => {
  const [popupVisible, setPopupVisible] = useState(false)

  const css = [
    {
      height: `${(values[0] / max) * 100}%`,
      backgroundColor: values[0] > values[1] ? '#e8f5fe' : '#64b6f7',
      zIndex: values[0] < values[1] ? 1 : 0
    },
    {
      height: `${(values[1] / max) * 100}%`,
      backgroundColor: values[0] > values[1] ? '#64b6f7' : '#91cbf9'
    }
  ]

  const onMouseOver = () => setPopupVisible(true)

  const onMouseOut = () => setPopupVisible(false)

  return (
    <div
      className={styles.column}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {values.map((_, index) => (
        <div
          key={index}
          style={css[index]}
          className={styles.item}
        />
      ))}

      {popupVisible && renderPopup && (
        <div className={styles.popup}>
          {renderPopup({ label, values })}
        </div>
      )}
    </div>
  )
}

export default Column