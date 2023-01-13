import { FC, ReactNode, useMemo } from 'react'
import Card from '../Card'
import Row from '../Row'
import Column from './Column'
import styles from './Chart.module.sass'

interface ChartData {
  labels: string[]
  datasets: [number[], number[]]
}

interface ChartProps {
  label: string
  title: string
  data: ChartData
  color?: string
  meta?: string
  suffix?: ReactNode
  description?: ReactNode
  bottom?: ReactNode
  renderPopup?: (data: { label: string, values: number[] }) => ReactNode
}

const Chart: FC<ChartProps> = ({
  label,
  title,
  data,
  color,
  meta,
  suffix,
  description,
  bottom,
  renderPopup
}) => {
  const max = useMemo(() => Math.max(...data.datasets.flat()), [data.datasets])

  return (
    <Card width={512}>
      <p className={styles.label}>{label}</p>

      <Row>
        <p className={styles.title} style={{ color }}>{title}</p>

        {suffix}

        {meta && <p className={styles.meta} style={{ color }}>{meta}</p>}
      </Row>

      {description && <div className={styles.description}>{description}</div>}

      <div className={styles.chart}>
        {data.labels.map((label, labelIndex) => (
          <Column
            key={label}
            max={max}
            label={label}
            values={[data.datasets[0][labelIndex], data.datasets[1][labelIndex]]}
            renderPopup={renderPopup}
          />
        ))}
      </div>

      {bottom}
    </Card>
  )
}

export default Chart