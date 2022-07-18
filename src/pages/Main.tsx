import React, {useState} from "react";
import Days from "../views/days/Days";
import Tasks from "../views/tasks/Tasks";
import AddTaskPanel from "../views/create-task/AddTaskPanel";
import {CurrentDays} from "../state/current-days";

const MainPage = () => {
    const [selectedDay, updateSelectedDay] = useState(CurrentDays[0]);
    return (
        <div className="flex flex-col h-screen max-w-md mx-auto relative">
            <div className="flex-1 overflow-y-auto p-8 pb-20">
                <Days selectedDay={selectedDay} dayClick={(date) => updateSelectedDay(date)}/>
                <Tasks selectedDay={selectedDay}/>
            </div>
            <AddTaskPanel/>
        </div>
    )
}

export default MainPage;
