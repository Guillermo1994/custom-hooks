
export const todoReducer = (intialStage = [], action) => {

    switch (action.type) {
        case '[TODO] add todo':
            
            return [ ...intialStage, action.payload ];

        case 'TODO Remove todo':

            return intialStage.filter( todo => todo.id !== action.payload );

        case 'TODO Toggle todo':

            return intialStage.map( todo => {

                if( todo.id === action.payload ){

                    return {
                        ...todo,
                        done: !todo.done
                    }

                }

                return todo;
            })
    
        default:
            return intialStage;
    }

}