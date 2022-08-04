import {createSlice, configureStore} from '@reduxjs/toolkit';

const elementVisibilitySlice = createSlice({
    name: 'isVisibleElement',
    initialState: {showElement: false},
    reducers: {
        isVisible(state) {
            state.showElement = !state.showElement
        }
    }
})

 const selectionHandlerSlice = createSlice({
    name: 'selectionHandler',
    initialState: {expandElement: []},
    reducers: {
        expandHandler(state, event) {

              const index = state.indexOf(event.target.id);
        
              index ===  -1  ? state.push(event.target.id) : state.splice(index,1);
        
        }
    }
})

export const visibilityActions = elementVisibilitySlice.actions;
export const selectionActions = selectionHandlerSlice.actions;

const store = configureStore({
    reducer: { visibility: elementVisibilitySlice.reducer, selection: selectionHandlerSlice.reducer}
});

export default store;