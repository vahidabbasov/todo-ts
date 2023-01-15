import React from 'react'
import styles from "./ToDoList.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, Item, toggle } from '../../redux/todoSlice/todoSlice'
import { RootState } from '../../redux/store'

function ToDoList() {
    const items = useSelector((state:RootState) => state.todos.items) //[...]
  const activeFilter = useSelector((state:RootState) => state.todos.activeFilter)
  const dispatch = useDispatch()
  let filtered :Item[]=[]
  switch (activeFilter) {
    case 'all':
      filtered = items
      break
    case 'active':
      filtered = items.filter((item) => item.complated === false)
      break
    case 'complated':
      filtered = items.filter((item) => item.complated === true)
      break
    default:
      break
  }
  return (
    <ul className={styles.todo_list}>
      
      {filtered.map((item, index:number) => {
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