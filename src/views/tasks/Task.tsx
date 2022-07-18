import {SyntheticEvent} from "react";

const Task = (props: { isDone: boolean, title: string, id: string, change: (id: string, ev: SyntheticEvent<{ checked: boolean }>) => void }) => {
    const isDoneClass = props.isDone ? 'line-through' : '';
    return (
        <div className="flex py-2">
            <div className="flex items-center relative">
                <input
                    checked={props.isDone}
                    onChange={(ev) => props.change(props.id, ev)}
                    id={'checked-checkbox' + props.id}
                    type="checkbox"
                    className="w-5 h-5"/>
                <label
                    htmlFor={'checked-checkbox' + props.id}
                    className={'mx-2 text-lg ' + isDoneClass}>
                    {props.title}
                </label>
            </div>
        </div>
    )
}

export default Task;
