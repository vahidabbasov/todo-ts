import React from 'react'
import ToDoList from '../ToDoList/ToDoList'
import styles from './Content.module.css'

function Content() {
  return (
    <section className={styles.main}>
      <input className={styles.toggle_all} type="checkbox" />
      <label htmlFor={styles.toggle_all}>Mark all as complete</label>

      <ToDoList />
    </section>
  )
}

export default Content