import { FC } from 'react'
import Chart from '../../ui/Chart'
import Tag from '../../ui/Tag'
import Row from '../../ui/Row'
import Badge from '../../ui/Badge'
import { usePurchases } from '../../../hooks/purchases.hook'
import { formatLocaleDate, formatMoney } from '../../../utils/format'
import months from '../../../data/months.json'
import type { Purchase } from '../../../store/stats/stats.types'
import styles from './SalesChart.module.sass'

interface SalesChartProps {
  items: Purchase[]
  month: number
}

const SalesChart: FC<SalesChartProps> = ({ items, month }) => {
  const { data, total, income } = usePurchases(items, month)

  const daysInMonth = new Date(2021, month + 1, 0).getDate()

  return (
    <Chart
      title={formatMoney(total[0])}
      label="Продажи"
      data={data}
      color="#0b79d0"
      meta={formatMoney(total[1])}
      suffix={<Tag color={income.color}>{income.sign}{income.percentage}</Tag>}
      bottom={
        <div className="meta">
          <Row justify="between">
            <span>1 {months.declension[month]} 2021</span>
            <Badge color="#0b79d0">1—{daysInMonth} {months.declension[month]} 2021</Badge>
            <Badge color="#0b79d080">1—{daysInMonth} {months.declension[month]} 2020</Badge>
            <span>{daysInMonth} {months.declension[month]} 2021</span>
          </Row>
        </div>
      }
      renderPopup={({ label, values }) => (<>
        <p className={styles.date}>{formatLocaleDate(new Date(label))} 2021</p>
        <p className={styles.price}>{formatMoney(values[0])}</p>
        <p className={`${styles.date} ${styles['date--transparent']}`}>{formatLocaleDate(new Date(label))} 2020</p>
        <p className={styles.price}>{formatMoney(values[1])}</p>
      </>)}
    />
  )
}

export default SalesChart