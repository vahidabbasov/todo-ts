import React, { FormEvent, useRef } from 'react'
import styles from './Form.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../redux/todoSlice/todoSlice'
import { RootState } from '../../redux/store'


function Form() {
    const items = useSelector((state:RootState) => state.todos.items)
    const dispatch = useDispatch()
    const inputRef = useRef<null | HTMLInputElement>(null)
    
    const submitHandler = (e:FormEvent) => {
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