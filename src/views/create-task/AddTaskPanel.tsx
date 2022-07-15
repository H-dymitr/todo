import {useState} from "react";
import Dialog from "../../components/Dialog";
import Button from "../../components/Button";

const AddTaskPanel = (props: {addTask: (data: any) => void}) => {
    const [showDialog, updateDialog] = useState(false);
    const handleClick = () => {
        updateDialog(true);
    }
    const saveTask = (data: any) => {
        props.addTask(data);
        closeDialog();
    }

    const closeDialog = () => {
        updateDialog(false);
    }

    return (
        <div className="fixed bottom-0 left-0 w-full">
            <Button title="Add task" icon="PlusIcon" onClick={handleClick} />
            <Dialog onSave={(data) => saveTask(data)} onEscape={closeDialog} showDialog={showDialog} />
        </div>
    )
}

export default AddTaskPanel;
