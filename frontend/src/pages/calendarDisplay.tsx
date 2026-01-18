import { useLocation } from "react-router-dom";

interface CalendarEvent {
    id: string;
    summary: string;
}

const CalendarDisplay = () => {
    const location = useLocation();

    const events = location?.state.events.data;

    console.log(events.data)

    return (
        <>
            <p>
                Here are your upcoming events:
            </p>
            {events.map((event: CalendarEvent) => {
                return (
                    <div key={event.id}>
                        {event.summary}
                    </div>
                )
            })}
        </>
    )
}

export default CalendarDisplay;