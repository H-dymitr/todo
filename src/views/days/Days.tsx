import {DayModel} from "./day.model";
import Day from "./Day";

const Days = (props: {days: DayModel[], dayClick: (id: number) => void}) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1)
    const daysList = props.days.map((date, i) => {
        return (
            <li key={i}>
                <Day
                    active={date.active ?? (i === 0)}
                    date={date.data}
                    click={() => props.dayClick(i)}
                />
            </li>
        )
    });
    return (
        <ul className={'flex justify-between my-4'}>
            {daysList}
        </ul>
    )
}

export default Days;
