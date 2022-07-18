import {useState} from "react";
import Dialog from "../../components/Dialog";
import Button from "../../components/Button";
import {useDispatch} from "react-redux";
import {taskUpdated} from "../../state/tasks-slice";
import {nanoid} from "@reduxjs/toolkit";

const AddTaskPanel = () => {
    const [showDialog, updateDialog] = useState(false);

    const dispatch = useDispatch();
    const saveTask = (data: any) => {
        dispatch(
            taskUpdated({
                id: nanoid(),
                ...data
            })
        )
        closeDialog();
    }


    const handleClick = () => {
        updateDialog(true);
    }

    const closeDialog = () => {
        updateDialog(false);
    }

    return (
        <div className="fixed bottom-0 left-0 w-full">
            <Button title="Add task" icon="PlusIcon" onClick={handleClick}/>
            <Dialog onSave={(data) => saveTask(data)} onEscape={closeDialog} showDialog={showDialog}/>
        </div>
    )
}

export default AddTaskPanel;
