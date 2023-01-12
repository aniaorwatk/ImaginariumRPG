import { useEffect, useRef, useState } from "react";
import { getAction, IEventType, IDataType, URL_IMAGINARIUM } from "../../API/APIGet";
import NewPublication from "./NewPublication/NewPublication";
import { LogoBLotr } from "../Logos/LogoBLotr";
import { LogoPublishingHouse } from "../Logos/LogoPublishingHouse";
import arrowIcon from "./../../assets/arrow_icon.svg";
import "./Events.css";

const Events = () => {
    const sectionPublications = useRef <HTMLDivElement>(null!);

    const [events, setEvents] = useState<IEventType[]>([])
    const [arrow, setArrow] = useState(false)
    const [scrollX, setScrollX] = useState(0)
    const [scrollEnd, setScrollEnd] = useState(false)

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
            setArrow(true)
        )
    }

    const hiddenArrow = () => {
        return (
            setArrow(false)
        )
    }

    const slide = (shift: number) => {

        sectionPublications.current.scrollLeft += shift;

        setScrollX(scrollX + shift);

        if (
            Math.floor(sectionPublications.current.scrollWidth - sectionPublications.current.scrollLeft) <=
            sectionPublications.current.offsetWidth
        ) {
            setScrollEnd(true);
        } else {
            setScrollEnd(false);
        }
    };

    const scrollCheck = () => {
        setScrollX(sectionPublications.current.scrollLeft);
        if (
            Math.floor(sectionPublications.current.scrollWidth - sectionPublications.current.scrollLeft) <=
            sectionPublications.current.offsetWidth
        ) {
            setScrollEnd(true);
        } else {
            setScrollEnd(false);
        }
    };

    useEffect(() => {
        console.log(scrollX)
    }, [scrollX])

    return (
        events &&
        <section className="publicationsBox" onMouseEnter={() => showArrow()} onMouseLeave={() => hiddenArrow()} onTouchMove={() => showArrow()} onTouchEnd={() => hiddenArrow()}>
            <NewPublication />
            <LogoBLotr className="publications__bogumil" />
            <div className="publications__publishingHouse">
                <LogoPublishingHouse className="publications__publishingHouse-img" />
            </div>
            {!scrollEnd &&
                <img src={arrowIcon} alt="arrow right" className={`publications__scroll arrowRight   ${arrow ? "arrowShow" : ""}`} onClick={() => slide(+150)} onTouchMove={() => slide(+150)} />
            }
            {scrollX !== 0 &&
                <img src={arrowIcon} alt="arrow left" className={`publications__scroll arrowLeft   ${arrow ? "arrowShow" : ""}`} onClick={() => slide(-150)} onTouchMove={() => slide(-150)} />
            }
            <div className="publications" ref={sectionPublications} onScroll={scrollCheck}  >
                {allEvents}
            </div>
        </section>
    )
}

export default Events
