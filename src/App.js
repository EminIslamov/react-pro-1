import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { checkTodo, deleteTodo, loadTodos } from './actions'
import Header from './Header'
import ReactLoading from 'react-loading';


function App() {

  const todos = useSelector(state => state.todos);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  useEffect(() => {
    dispatch(loadTodos())
  },[])

  const handleCheck = (id, completed) => {
    dispatch(checkTodo(id, completed))
  }

  return (
    <div>
      <Header />
      {loading ? <div>Идет загрузка...</div> : todos.map(todo => {
          return(
              <div className='todo'>
                <div>
                  {todo.checking ? (
                      <div className="load"><ReactLoading
                        color="#0033ff"
                        type="spin"
                        width={16}
                        height={16}/>
                      </div>
                    ) :
                    <input type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleCheck(todo.id, todo.completed)}
                  />}
                </div>
                <div className='title'>{todo.title}</div>
                <div className='actions'>
                  <button onClick={() => handleDelete(todo.id)}
                  className='btn'
                  disabled={todo.deleting}
                  >
                    X
                  </button>
                </div>
              </div>
          )
        }) }

    </div>
  );
}

export default App;
