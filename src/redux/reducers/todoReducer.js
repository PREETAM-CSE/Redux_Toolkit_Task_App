const { createSlice } = require("@reduxjs/toolkit")



const initialState={
    todos:[
        {text:"Go to Gym at 6", completed: false},
        {text: "Study at 8", completed: true}
    ]
}

// Reducer using redux toolkit

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
    // This is for add action
       add:(state, action)=>{
          state.todos.push({
            text: action.payload,
            completed : false
          })
       },
       toggle:(state, action)=>{
        state.todos.map((todo, i)=>{
            if(i==action.payload){
                todo.completed= !todo.completed;
            }
            return todo;
        })
       }
    }
});

export const todoReducer = todoSlice.reducer;
export const actions = todoSlice.actions;

//Selectors
export const todoSelector = (state)=>state.todoReducer.todos;