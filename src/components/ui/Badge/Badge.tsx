import { FC, PropsWithChildren } from 'react'
import styles from './Badge.module.sass'

export interface BadgeProps {
  color: string
}

const Badge: FC<PropsWithChildren<BadgeProps>> = ({ color, children }) => (
  <span className={styles.badge}>
    <i style={{ backgroundColor: color }} />
    {children}
  </span>
)

export default Badge