import {createSlice} from '@reduxjs/toolkit'
import {TaskModel} from "../views/tasks/task.model";

export const initialState: TaskModel[] = [];

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        taskUpdated(state, action) {
            const newData = action.payload;
            let existingTaskIndex = state.findIndex(t => t.id === newData?.id);
            if (existingTaskIndex !== -1) {
                state[existingTaskIndex] = {
                    ...state[existingTaskIndex],
                    ...newData,
                }
            } else {
                state.push(newData)
            }
        }
    }
})

export const {taskUpdated} = tasksSlice.actions;


export default tasksSlice.reducer
