import React from 'react';
import {render} from 'react-dom'
import tasksReducer from "./reducers"
import TodoApp from './components/TodoApp';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const store = createStore(tasksReducer)

function renderApp () {
    render (
        <Provider store={store}>
            <TodoApp />
        </Provider>
    )
    // render(
    //     <TodoApp store={store} />,
    //     document.getElementById("root")
    // )
    // return <TodoApp store={store} />
}


export default renderApp;