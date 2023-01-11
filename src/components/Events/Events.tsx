import { createRef, HTMLAttributes, useEffect, useRef, useState } from "react";
import { getAction, IEventType, IDataType, URL_IMAGINARIUM } from "../../API/APIGet";
import { LogoBLotr } from "../Logo/LogoBLotr";
import { LogoPublishingHouse } from "../Logo/LogoPublishingHouse";
import arrowIcon from "./../../assets/arrow_icon.svg";
import "./Events.css";

const Events = () => {



    const scrl = useRef<HTMLDivElement>({});


const [test,setTest]=useState()




    let scrlCurrent = scrl.current?.scrollWidth as number
    let scrlOffW = scrl.current?.offsetWidth as number




    // DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
    const [events, setEvents] = useState<IEventType[]>([])
    const [arrow, setArrow] = useState(false)
    const [scrollX, setscrollX] = useState(0)
    const [scrolEnd, setscrolEnd] = useState(false)

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

    // const arrowRef =useRef<HTMLDivElement>(null)
    // const arrowContainerRef=useRef<HTMLDivElement>(null)


    // useEffect(()=>{
    //     const eventBoxWidth = arrowRef.current?.getBoundingClientRect().width
    //     console.log(eventBoxWidth)
    //      console.log(arrowContainerRef.current?.getBoundingClientRect().width) 
    //     if(null !== arrowContainerRef.current){

    //     }
    // },[arrowContainerRef])



    //    useEffect(() => {
    //     //Check width of the scollings
    //     if (
    //       scrl.current &&
    //       scrl?.current?.scrollWidth === scrl?.current?.offsetWidth
    //     ) {
    //       setscrolEnd(true);
    //     } else {
    //       setscrolEnd(false);
    //     }
    //     return () => {};
    //   }, [scrl?.current?.scrollWidth, scrl?.current?.offsetWidth]);

    let sLeft = scrl.current?.scrollLeft as number
    // const slide = (shift: number) => {
        

    //     sLeft += shift;


    //     setscrollX(scrollX + shift);
    //     if (
    //         Math.floor(scrlCurrent - sLeft) <=
    //         scrlOffW
    //     ) {
    //         setscrolEnd(true);
    //     } else {
    //         setscrolEnd(false);
    //     }
    // };

    // const scrollCheck = () => {
    //     setscrollX(sLeft);
    //     if (
    //         Math.floor(scrlCurrent - sLeft) <=
    //         scrlOffW
    //     ) {
    //         setscrolEnd(true);
    //     } else {
    //         setscrolEnd(false);
    //     }
    // }

//     useEffect(() => {
//         console.log(scrlCurrent)
//         const scrl = useRef<HTMLDivElement>();

//         const setScrl =()=>{
//             return(
// setTest(scrl)
//             )
//         }
//         setScrl()
//     }, [])

    const slide = (shift:number) => {

        scrl.current.scrollLeft += shift;

        setscrollX(scrollX + shift);
    
        if (
          Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
          scrl.current.offsetWidth
        ) {
          setscrolEnd(true);
        } else {
          setscrolEnd(false);
        }
      };




     useEffect(()=>{
console.log(scrollX)
     },[scrollX])
    
   
    
      const scrollCheck = () => {
        setscrollX(scrl.current.scrollLeft);
        if (
          Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
          scrl.current.offsetWidth
        ) {
          setscrolEnd(true);
        } else {
          setscrolEnd(false);
        }
      };




    // console.log(scrl)
    return (

        events &&
        <div className="eventsBox" onMouseEnter={() => showArrow()} onMouseLeave={() => hiddenArrow()} onTouchMove={() => showArrow()} onTouchEnd={() => hiddenArrow()}>
            <LogoBLotr className="events__bogumil" />
            <div className="events__publishingHouse">
                <LogoPublishingHouse className="events__publishingHouse-img" />
            </div>
            {!scrolEnd && 
           <img src={arrowIcon} alt="arrow right" className={`events__scroll arrowRight   ${arrow ? "arrowShow" : ""}`} onClick={() => slide(+150)}  onTouchMove={() => slide(+150)}/> 
           } 
             { scrollX !== 0 &&  
         <img src={arrowIcon} alt="arrow left" className={`events__scroll arrowLeft   ${arrow ? "arrowShow" : ""}`} onClick={() => slide(-150)} onTouchMove={() => slide(-150)}/> 
          } 

            <div className="events" ref={scrl} onScroll={scrollCheck}  >

                {allEvents}
            </div>
        </div>
    )
}

export default Events
