const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}
];


const todoReducer = (state = initialState, action) => {

    //El signo de pregunta '?' después de la palabra 'action' es para verificar que action tenga algún valor (no sea undefined), si sí entonces leera el 'type'
    if(action?.type === 'agregar'){
        return [...state, action.payload]
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

const agregarTodoAaction = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos, agregarTodoAaction);

console.log(todos)