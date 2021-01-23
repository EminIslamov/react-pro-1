import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadTodos } from '../redux/actions'
import Todo from './Todo'

function Todos () {
  const todos = useSelector(state => state.todos);
  const loading = useSelector(state => state.loading);

  const dispatch = useDispatch();


  useEffect(() =>
    dispatch(loadTodos()),[])

  return (
    loading ? <div>Идет загрузка...</div> : todos.map(todo => {
        return(<Todo key={todo.id} todo={todo} />);
      })
  )
}

export default Todos