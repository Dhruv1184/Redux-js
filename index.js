const redux = require('redux')

const ADD_TODO = 'ADDTODO'
const TOGGLE_TODO= 'TOGGLE'

const addtodo = (data) =>({type: ADD_TODO, data})
const toggle = (index) =>({type: TOGGLE_TODO, index})
const initial = {
    todos : []
}

function reducer(state = initial,action){
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state, 
                todos: [...state.todos, {task: action.data, complete: false}]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((item,index)=>{
                    if (action.index === index){
                        item.complete = !item.complete
                    }
                    return item
                })
            }
        default:
            return state;
    }
}

const store = redux.createStore(reducer)

store.dispatch(addtodo('Done'))
store.dispatch(toggle(0))

console.log(store.getState())