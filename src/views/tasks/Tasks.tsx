import {TaskModel} from "./task.model";
import {SyntheticEvent} from "react";
import Task from "./Task";

const Tasks = (props: {items: TaskModel[], change: (id: string, ev: SyntheticEvent<{checked: boolean}>) => void}) => {
    const productList = props.items.map((task) => {
        return (
            <li key={task.id}>
                <Task
                    change={props.change}
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
