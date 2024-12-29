const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    notes: [
        {text : 'This is first notes . qerqiure qerqew eqr qwer qerqwerf qewrqwra sads wf ewfikjds weiufbv'
            , createdOn : new Date()
        },
        {
        text : 'This is second notes. weruwir werwr werwr werfadscx weafsx asdfxc xcxzc dfdsdgv',
        createdOn : new Date()
        },
    ]
};


const noteSlice = createSlice({
    name: 'note',
    initialState : initialState,
    reducers: {
        add: (state, action) => {
            state.notes.push({
                text: action.payload,
                createdOn: new Date()
            })
        },
        delete : (state, action)=>{
            state.notes.splice(action.payload,1);
        }
    }
});

export const noteReducer = noteSlice.reducer;
export const actions = noteSlice.actions;
//Selectors

export const noteSelector = (state)=>state.noteReducer.notes;

