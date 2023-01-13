import { FC, PropsWithChildren } from 'react'
import styles from './Tag.module.sass'

interface TagProps {
  color: string
}

const Tag: FC<PropsWithChildren<TagProps>> = ({ color, children }) => (
  <div
    className={styles.tag}
    style={{ backgroundColor: color }}
  >
    {children}
  </div>
)

export default Tag