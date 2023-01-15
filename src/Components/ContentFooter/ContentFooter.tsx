import styles from './ContentFooter.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeActiveFilter, clearCompleted } from '../../redux/todoSlice/todoSlice'
import { RootState } from '../../redux/store'


function ContentFooter() {
    const items = useSelector((state:RootState) => state.todos.items)
  const dispatch = useDispatch()
  const activeFilter = useSelector((state:RootState) => state.todos.activeFilter)
  return (
    <footer className={styles.footer}>
      <span className={styles.todo_count}>
        <strong>{items.length}</strong>
        items left
      </span>

      <ul className={styles.filters}>
        <li>
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault()

              dispatch(changeActiveFilter('all'))
            }}
            className={activeFilter === 'all' ? 'selected' : ''}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault()
              dispatch(changeActiveFilter('active'))
            }}
            className={activeFilter === 'active' ? 'selected' : ''}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault()
              dispatch(changeActiveFilter('complated'))
            }}
            className={activeFilter === 'complated' ? 'selected' : ''}
          >
            Completed
          </a>
        </li>
      </ul>

      <button
        className={styles.clear_completed}
        onClick={() => {
          dispatch(clearCompleted())
        }}
      >
        Clear completed
      </button>
    </footer>
  )
}

export default ContentFooter