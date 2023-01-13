import { ChangeEvent, useState } from 'react'
import Wrapper from './components/ui/Wrapper'
import Row from './components/ui/Row'
import Loader from './components/ui/Loader'
import SalesChart from './components/common/SalesChart'
import ViewsChart from './components/common/ViewsChart'
import { useGetStatsQuery } from './store/stats/stats.api'
import months from './data/months.json'

const App = () => {
  const { data = { purchases: [], views_to_clicks: [] }, isLoading } = useGetStatsQuery()

  const [month, setMonth] = useState(0)

  const onMonthChange = (e: ChangeEvent<HTMLSelectElement>) => setMonth(Number(e.target.value))

  return (
    <Wrapper>
      {isLoading
        ? <Loader color="#64b6f7" />
        : (
          <Row direction="column" gap={32}>
            <select value={month} onChange={onMonthChange}>
              {months.names.map((month, index) => (
                <option key={month} value={index}>{month}</option>
              ))}
            </select>

            <SalesChart items={data.purchases} month={month} />

            <ViewsChart items={data.views_to_clicks} month={month} />
          </Row>
        )}
    </Wrapper>
  )
}

export default App