import { FC, PropsWithChildren } from 'react'
import styles from './Card.module.sass'

interface CardProps {
  width?: number
}

const Card: FC<PropsWithChildren<CardProps>> = ({
  children,
  width
}) => (
  <div
    className={styles.card}
    style={{ width }}
  >
    {children}
  </div>
)

export default Card