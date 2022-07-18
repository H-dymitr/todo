import {configureStore} from '@reduxjs/toolkit'

import tasksReducer from './tasks-slice'
import {loadState} from "./local-storage";

export default configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    // upload state from localStorage
    preloadedState: loadState(),
})
