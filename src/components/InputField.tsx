
export const InputField = (props: {register: any, placeholder?: string, defaultValue?: any, type?: any}) => {
    return (
        <div className="mb-4">
            <input
                defaultValue={props.defaultValue}
                placeholder={props.placeholder}
                {...props.register}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type={props.type} />
        </div>
    )
}


export default InputField;
