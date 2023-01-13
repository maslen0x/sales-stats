import { FC, PropsWithChildren } from 'react'
import styles from './Wrapper.module.sass'

const Wrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
)

export default Wrapper