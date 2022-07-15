const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function Day(props: {date: string, active?: boolean, click: () => void}) {
    const active = props.active ? 'bg-accent text-white' : 'bg-card';
    const date = new Date(props.date);
    const day = date.getDate();
    const dayOfWeek = date.getDay();
    return (
        <div
            className={'text-center rounded-md px-4 py-2 cursor-pointer ' + active}
            onClick={props.click}>
            <div className={'font-bold'}>{day}</div>
            <div className={'text-xs'}>{days[dayOfWeek]}</div>
        </div>
    )
}

export default Day;
