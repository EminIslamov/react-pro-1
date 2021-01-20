import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { deleteTodo, loadTodos } from './actions'
import Header from './Header'


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
  return (
    <div>
      <Header />
      {loading ? <div>Идет загрузка...</div> : todos.map(todo => {
          return(
              <div className='todo'>
                <div>
                  <input type="checkbox"/>
                </div>
                <div className='title'>{todo.title}</div>
                <div className='actions'>
                  <button onClick={() => handleDelete(todo.id)}
                  className='btn'
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
