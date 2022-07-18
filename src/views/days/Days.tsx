import Day from "./Day";
import {CurrentDays} from "../../state/current-days";

const Days = (props: { selectedDay: string, dayClick: (date: string) => void }) => {
    const daysList = CurrentDays?.map((date, i) => {
        return (
            <li key={i}>
                <Day
                    active={date === props.selectedDay}
                    date={date}
                    click={() => props.dayClick(date)}
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
