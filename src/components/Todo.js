import React from 'react'
import ReactLoading from 'react-loading'
import { checkTodo, deleteTodo } from '../redux/actions'
import { useDispatch } from 'react-redux'

function Todo (props) {
  const dispatch = useDispatch();

  const handleCheck = (id, completed) => {
    dispatch(checkTodo(id, completed))
  }

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  return (

    <div className='todo'>
      <div>
        {props.todo.checking ? (
            <div className="load"><ReactLoading
              color="#0033ff"
              type="spin"
              width={16}
              height={16}/>
            </div>
          ) :
          <input type="checkbox"
                 checked={props.todo.completed}
                 onChange={() => handleCheck(props.todo.id, props.todo.completed)}
          />}
      </div>
      <div className='title'>{props.todo.title}</div>
      <div className='actions'>
        <button onClick={() => handleDelete(props.todo.id)}
                className='btn'
                disabled={props.todo.deleting}>
          X
        </button>
      </div>
    </div>
  )
}

export default Todo