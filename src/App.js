import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadTodos} from "./actions";
import Header from './Header'


function App() {

  const todos = useSelector(state => state.todos);
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTodos())
  },[])
  return (
    <div>
      <Header />
      {loading ? <div>Идет загрузка...</div> : todos.map(todo => {
          return(
              <div className='todo'>
                <div> id {todo.id}:</div>
                <div className='sectionTitle flex'>
                  <input type="checkbox"/>
                  <div className='title '>title:</div>
                  {todo.title}
                </div>
                <div className='bodySection flex'>
                  <div className='body'>
                    body:
                  </div>
                  {todo.body}
                </div>
                <button>
                  delete
                </button>
              </div>
          )
        }) }

    </div>
  );
}

export default App;
