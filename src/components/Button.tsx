import DynamicHeroIcon from "./HeroicIcon";

const Button = (props: { title: string, icon?: string, onClick?: () => void, type?: 'submit' | undefined }) => {
    const iconEl = props.icon ? <DynamicHeroIcon icon={(props.icon as string)}/> : null
    return (
        <button
            type={props.type}
            onClick={props.onClick}
            className="bg-card w-full p-6 font-bold text-lg flex items-center justify-center">
            {iconEl}
            <span>{props.title}</span>
        </button>
    )
}

export default Button;
