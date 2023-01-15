import React, { useRef } from 'react'
import styles from './Form.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../redux/todoSlice/todoSlice'


function Form() {
    const items = useSelector((state:any) => state.todos.items)
    const dispatch = useDispatch()
    const inputRef = useRef<null | HTMLInputElement |undefined| any>(null)
    
    const submitHandler = (e:any) => {
      e.preventDefault()
      if (inputRef.current) {
          dispatch(addTodo(inputRef.current.value)) // rashad
          inputRef.current.value = ''
       
      }
      
    }
  return (
    <form onSubmit={submitHandler}>
      <input
        ref={inputRef}
        className={styles.new_todo}
        placeholder="What needs to be done?"
        autoFocus
      />
    </form>
  )
}

export default Form