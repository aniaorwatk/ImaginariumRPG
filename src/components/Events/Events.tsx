import { useEffect, useState } from "react";
import { getAction, IEventType, IDataType, URL_IMAGINARIUM } from "../../API/APIGet";
import { LogoBLotr } from "../Logo/LogoBLotr";
import { LogoPublishingHouse } from "../Logo/LogoPublishingHouse";

import "./Events.css"

const Events = () => {
    const [events, setEvents] = useState<IEventType[]>([])

    const action = (data: IDataType) => {
        setEvents(data.events)
    }

    useEffect(() => {
        getAction(URL_IMAGINARIUM, action)
    }, []);

    const allEvents = events.map(event => {
        return (
            <div key={event.id} className="event">
                <img src={event.filename} alt={event.title} className="event__img" />
                <p className="event__title">{event.title}</p >
            </div>
        )
    })
    return (
        <div className="events">
            <LogoBLotr className="events__bogumil" />
            <div className="events__publishingHouse">
                <LogoPublishingHouse className="events__publishingHouse-img"/>
            </div>
            {allEvents}
        </div>
    )
}

export default Events
