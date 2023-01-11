import { useEffect, useState } from "react";
import { getAction, IEventType, IDataType, URL_IMAGINARIUM } from "../../API/APIGet";
import { LogoBLotr } from "../Logo/LogoBLotr";
import { LogoPublishingHouse } from "../Logo/LogoPublishingHouse";
import "./Events.css"

const Events = () => {
    const [events, setEvents] = useState<IEventType[]>([])

    useEffect(() => {
        getAction(URL_IMAGINARIUM, (data: IDataType) => {
            setEvents(data.events)
        })
    }, [events]);

    const allEvents = events.map(event => {
        return (
            <div key={event.id} className="event">
                <img src={event.filename} alt={event.title} className="event__img" />
                <p className="event__title">{event.title}</p >
            </div>
        )
    })

    return (
        events &&
        <div className="eventsBox" >
            <LogoBLotr className="events__bogumil" />
            <div className="events__publishingHouse">
                <LogoPublishingHouse className="events__publishingHouse-img" />
            </div>
            <div className="events">
                {allEvents}
            </div>
        </div>
    )
}

export default Events
