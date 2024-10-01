



export const todoReducer = (initialState = [], action ) => {

    switch (action.type) {
        
        case '[TODO] Add Todo':
            return [...initialState, action.payload];

        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload); // regresar el todo, siempre y cuando el todo id sea diferente a la action.payload

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {

                if(todo.id === action.payload){ // id
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo
            })
        
        default:
            return initialState;   
     }
}