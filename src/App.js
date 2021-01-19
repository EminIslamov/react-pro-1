import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadTodos} from "./actions";


function App() {

  const todos = useSelector(state => state.todos);
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTodos())
  },[])
  return (
    <div>
      Список дел:
      {loading ? 'Идет загрузка' : todos.map(todo => {
          return(
              <div>
                <div className='skyblue'> id {todo.id}:</div>
                <div className='sectionTitle flex'>
                  <div className='title skyblue'>title:</div>
                  {todo.title}
                </div>
                <div className='bodySection flex'>
                  <div className='body skyblue'>
                    body:
                  </div>
                  {todo.body}
                </div>
              </div>
          )
        }) }

    </div>
  );
}

export default App;
