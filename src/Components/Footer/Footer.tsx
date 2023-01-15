import React from 'react'
import styles from './Footer.module.css'
function Footer() {
  return (
    <footer className={styles.info}>
      <p>Click to edit a todo</p>
      <p>
        Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
      </p>
      <p>
        Part of <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </footer>
  )
}

export default Footer