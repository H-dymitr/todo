import {useForm} from "react-hook-form";
import Button from "./Button";
import InputField from "./InputField";

const DialogHeader = (props: {close: () => void}) => {
    return (
        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold">
                Create a new task
            </h3>
            <p onClick={props.close} className="text-3xl font-bold leading-3">x</p>
        </div>
    )
}

const DialogBody = (props: {register: any}) => {
    const today = (new Date()).toISOString().substring(0,10);
    return (
        <div className="relative p-6 flex-auto">
            <div className="my-4 text-slate-500 text-lg leading-relaxed">
                <InputField
                    placeholder="Title"
                    register={props.register("title", { required: true })} />
                <InputField
                    placeholder="Date"
                    type="date"
                    defaultValue={today}
                    register={props.register("date", { required: true })} />
                </div>
        </div>
    )
}

const DialogFooter = () => {
    return (
        <div className="flex items-center justify-end border-t border-solid border-slate-200 rounded-lg overflow-hidden">
            <Button title="Save task" type="submit" />
        </div>
    )

}

const DialogBG = () => {
    return (
        <div className="opacity-25 fixed inset-0 z-40 bg-black"/>
    )
}

const Dialog = (props: {showDialog: boolean, onSave?: (data: any) => void, onEscape?: () => void}) => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data: any) => {
        if (props.onSave) {
            props.onSave(data);
        }
        reset();
    }
    const onEscape = () => {
        if (props.onEscape) {
            props.onEscape();
        }
        reset();
    }
    return (props.showDialog ?
        (
            <>
                <div
                    className="justify-center items-end flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-8 mx-4 w-screen max-w-3xl">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <DialogHeader close={onEscape} />
                            <form  onSubmit={handleSubmit(onSubmit)}>
                                <DialogBody register={register} />
                                <DialogFooter />
                            </form>
                        </div>
                    </div>
                </div>
                <DialogBG />
            </>
                ) : null)
}

export default Dialog;
