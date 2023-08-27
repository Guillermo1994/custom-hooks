import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";

const initialStage = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del Alma',
    //     done: false
    // },
    // {
    //     id: new Date().getTime() * 3,
    //     description: 'Recolectar la piedra del poder',
    //     done: false
    // }
];

const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}
export const useTodos = () => {


    const [todos, dispatch] = useReducer(todoReducer, initialStage, init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    
    }, [todos])
    

    const handleNewTodo = (todo) => {
    console.log({todo});
        const action = {
            type: '[TODO] add todo',
            payload: todo
        };
        
    dispatch( action );
    };

    const handleRemoveTodo = ( id ) => {
        // console.log(id);
        dispatch({
            type: 'TODO Remove todo',
            payload: id
        });
    };

    const handleToggleTodo = (id) => {
        // console.log(id);
        dispatch({
            type: 'TODO Toggle todo',
            payload: id
        });
    }
    const todosCount = todos.length

    const pendingTodosCount = todos.filter(todo => !todo.done).length
 


    return {
        // ...todos,
        todos,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount
      }
}
