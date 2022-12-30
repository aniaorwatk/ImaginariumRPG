import { useEffect, useState } from "react"
import { getAPI, IBannerType, IEventsType, IMediaTyp, IPatroniteType, URL_IMAGINARIUM } from "../../API/APIGet"
import "./Events.css"

const Events = () => {
    const [events, setEvents] = useState<IEventsType[]>([])

    const action = (res: IMediaTyp | IBannerType | IEventsType | IPatroniteType) => {
        const response = res.story.content
        setEvents(response.events)
    }

    useEffect(() => {
        getAPI(URL_IMAGINARIUM, action)
    }, []);

    const allEvents = events.map(event => {
        return (
            <div key={event.id}>
                <img src={event.filename} alt={event.title} />
                <p>{event.title}</p>
            </div>
        )
    })
    return (
        <div className="events">
            {allEvents}
        </div>
    )
}

export default Events