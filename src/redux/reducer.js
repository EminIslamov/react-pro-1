const initialState = {
  todos: [],
  loading: false
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todo/load/start':
      return {
        ...state,
        loading: true
      }

    case 'todo/load/success':
      return {
        ...state,
        todos: action.payload,
        loading: false
      }

    case 'todos/remove/start':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              deleting: true
            }
          }

          return todo
        })
      }

    case 'todos/remove/success':
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return todo.id !== action.payload
        })
      }

    case 'todos/check/start':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              checking: true
            }
          }

          return todo
        })

      }

    case 'todos/check/success':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
              checking: false
            }
          }

          return todo;
        })
      }

    default:
      return state;
  }
}

export default reducer;