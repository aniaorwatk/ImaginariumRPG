import { useEffect, useState } from "react";
import { getAction, IEventType, IDataType, URL_IMAGINARIUM } from "../../API/APIGet";
import { LogoBLotr } from "../Logo/LogoBLotr";
import { LogoPublishingHouse } from "../Logo/LogoPublishingHouse";
import arrowLogo from "../../assets/Group 2.svg"
import "./Events.css"

const Events = () => {
    const [events, setEvents] = useState<IEventType[]>([])
    const [arrow, setArrow] = useState(false)

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

    const showArrow = () => {
        return (
            setArrow(prevArrow => true)
        )
    }

    const hiddenArrow = () => {
        return (
            setArrow(prevArrow => false)
        )
    }



    return (

        events &&
        <div className="eventsBox" onMouseEnter={() => showArrow()} onMouseLeave={() => hiddenArrow()} onTouchMove={() => showArrow()} onTouchEnd={() => hiddenArrow()}>
            <LogoBLotr className="events__bogumil" />
            <div className="events__publishingHouse">
                <LogoPublishingHouse className="events__publishingHouse-img" />
            </div>
            <img src={arrowLogo} alt="arrow right" className={`events__scroll arrowRight   ${arrow ? "arrowSee" : ""}     `} />
            <img src={arrowLogo} alt="arrow left" className={`events__scroll arrowLeft   ${arrow ? "arrowSee" : ""}     `} />
            <div className="events">
                {allEvents}
            </div>
        </div>

    )
}

export default Events
