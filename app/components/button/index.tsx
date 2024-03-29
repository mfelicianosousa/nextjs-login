import styles from './button.module.css';

import React from 'react'

const Button = ({ children, ...props }) => {
  return (
    <button className={styles.button}> 
        {...children}
    </button>
  )
}

export default Button