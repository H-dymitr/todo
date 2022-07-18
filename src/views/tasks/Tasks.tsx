import {TaskModel} from "./task.model";
import {SyntheticEvent} from "react";
import Task from "./Task";
import {useDispatch, useSelector} from "react-redux";
import {taskUpdated} from "../../state/tasks-slice";

const Tasks = (props: { selectedDay: string }) => {
    const tasks: TaskModel[] = useSelector((state: any) => state.tasks)
        .filter((task: TaskModel) => {
            return task.date.split('T')[0] === props.selectedDay.split('T')[0]
        });

    const dispatch = useDispatch();

    const handleTaskChange = (id: string, ev: SyntheticEvent<{ checked: boolean }>) => {
        const isDone = ev.currentTarget.checked;
        dispatch(
            taskUpdated({
                id,
                isDone,
            })
        )
    }
    const productList = tasks.map((task) => {
        return (
            <li key={task.id}>
                <Task
                    change={handleTaskChange}
                    isDone={task.isDone}
                    title={task.title}
                    id={task.id}/>
            </li>
        )
    })
    return (
        <>
            <h5 className={'text-xl font-bold py-4'}>Staff to do for this day: </h5>
            <ul>
                {productList?.length ? productList : (<li>Nothing here...</li>)}
            </ul>
        </>
    );
}
export default Tasks;
