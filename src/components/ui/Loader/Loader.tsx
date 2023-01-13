import { FC } from 'react'
import styles from './Loader.module.sass'

interface LoaderProps {
  color?: string
}

const Loader: FC<LoaderProps> = ({ color = '#fff' }) => (
  <div
    className={styles.loader}
    style={{ color }}
  />
)

export default Loader