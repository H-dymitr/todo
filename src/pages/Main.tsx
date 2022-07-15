import React, {SyntheticEvent, useState} from "react";
import {TaskModel} from "../views/tasks/task.model";
import {DayModel} from "../views/days/day.model";
import Days from "../views/days/Days";
import Tasks from "../views/tasks/Tasks";
import AddTaskPanel from "../views/create-task/AddTaskPanel";


const items: TaskModel[] = [];

const amountOfDays = 5;
const currentDate = new Date();
currentDate.setDate(currentDate.getDate() - 1)
const daysItems: DayModel[] = Array(amountOfDays).fill(null).map((e, i) => {
    currentDate.setDate(currentDate.getDate() + 1);
    return {
        data: currentDate.toISOString(),
        id: i.toString()
    };
});


const MainPage = () => {

    const filterByDate = (date: string) => {
        return items.filter((task) => {
            const taskDate = new Date(task.date).toDateString();
            return taskDate === date;
        });
    }
    const [days, updateDays] = useState(daysItems);
    const [date, updateDate] = useState(new Date(days[0].data).toDateString());
    const [tasks, updateTasks] = useState(filterByDate(date));

    const handleTaskChange = (id: string, ev: SyntheticEvent<{checked: boolean}>) => {
        const value = ev.currentTarget.checked;
        updateTasks(oldValue => {
            const task = oldValue.find(t => t.id === id);
            if (task) {
                task.isDone = value;
            }
            return [...oldValue];
        })
    }


    const handleDayChange = (index: number) => {
        updateDate(() => {
            const newState = new Date(days[index].data).toDateString();
            updateTasks(() => filterByDate(newState));
            return newState;
        });
        updateDays(oldValue => {
            oldValue.forEach((day) => day.active = false)
            oldValue[index].active = true;
            return [...oldValue];
        })
    }

    const addTask = (data: any) => {
        items.push({
            ...data,
            id: items.length + 1,
        });
        updateTasks(() => filterByDate(date));
    }
    return (
        <div className="flex flex-col h-screen max-w-md mx-auto">
            <div className="flex-1 overflow-y-auto p-8">
                <Days days={days} dayClick={handleDayChange} />
                <Tasks items={tasks} change={handleTaskChange} />
            </div>
            <div>
                <AddTaskPanel addTask={addTask} />
            </div>
        </div>
    )
}

export default MainPage;
