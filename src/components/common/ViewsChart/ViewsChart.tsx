import { FC } from 'react'
import Row from '../../ui/Row'
import Chart from '../../ui/Chart'
import { useViews } from '../../../hooks/views.hook'
import months from '../../../data/months.json'
import { formatEnding, formatLocaleDate } from '../../../utils/format'
import type { View } from '../../../store/stats/stats.types'
import styles from './ViewsChart.module.sass'

interface ViewsChartProps {
  items: View[]
  month: number
}

const ViewsChart: FC<ViewsChartProps> = ({ items, month }) => {
  const { data, total, percentage } = useViews(items, month)

  const daysInMonth = new Date(2021, month + 1, 0).getDate()

  return (
    <Chart
      title={percentage}
      label="Просмотры → Клики"
      data={data}
      description={
        <Row justify="between">
          <span style={{ fontSize: 12 }}>{total[0][0]} → {total[0][1]}</span>
          <span className="meta">{total[1][0]} → {total[1][1]}</span>
        </Row>
      }
      bottom={
        <div className="meta">
          <Row justify="between">
            <span>1 {months.declension[month]} 2021</span>
            <span>{daysInMonth} {months.declension[month]} 2021</span>
          </Row>
        </div>
      }
      renderPopup={({ label, values }) => (<>
        <p className={styles.date}>{formatLocaleDate(new Date(label))} 2021</p>
        <p className={styles.value}>{formatEnding(values[0], 'просмотр')}</p>
        <p className={styles.value}>{formatEnding(values[1], 'клик')}</p>
      </>)}
    />
  )
}

export default ViewsChart