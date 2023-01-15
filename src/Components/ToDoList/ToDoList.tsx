import React from 'react'
import styles from "./ToDoList.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, toggle } from '../../redux/todoSlice/todoSlice'

function ToDoList() {
    const items = useSelector((state:any) => state.todos.items) //[...]
  const activeFilter = useSelector((state:any) => state.todos.activeFilter)
  const dispatch = useDispatch()
  let filtered = []
  switch (activeFilter) {
    case 'all':
      filtered = items
      break
    case 'active':
      filtered = items.filter((item:any) => item.complated === false)
      break
    case 'complated':
      filtered = items.filter((item:any) => item.complated === true)
      break
    default:
      break
  }
  return (
    <ul className={styles.todo_list}>
      
      {filtered.map((item:any, index:number) => {
        return (
          <li key={index} className={item.complated ? 'completed' : ''}>
            <div className={styles.show}>
              <input
                className={styles.toggle}
                type="checkbox"
                checked={item.complated}
                onChange={() => {
                  dispatch(toggle({ id: item.id }))
                }}
              />
              <label>{item.title}</label>
              <button
                className={styles.destroy}
                onClick={() => {
                  dispatch(deleteTodo({ id: item.id }))
                }}
              ></button>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default ToDoList