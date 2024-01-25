import React from 'react'
import styles from './loginCard.module.css'

const LoginCard = ({title, children}) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  )
}

export default LoginCard