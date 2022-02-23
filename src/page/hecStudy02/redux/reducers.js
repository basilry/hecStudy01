const initialState = {
    task: '',
    tasks: []
}

function reducers (state = initialState, action) {

    switch (action.type) {
        case 'INPUT_TASK':
            return {
                ...state,
                task: action.payload.task
            }

        case 'ADD_TASK':
            return {
                ...state,
                task: state.tasks.concat([action.payload.task])
            }
        
        default:
            return state
    }
}


export default reducers;