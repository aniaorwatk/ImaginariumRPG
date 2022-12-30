import { Icon } from "@iconify/react"
import { useEffect, useState } from "react"
import { ReactComponent as LogoPatronite } from "./../../assets/patronite.svg"
import "./../../index.css"



interface IMediaTyp {
  title: string,
  logo: string,
  link: string,
  color: string,
  colorTwo: string
}

interface IPatroniteType {
  email: string
}
interface IBannerType {
  scr_banner: string
}
interface IEventsType {
  id: number,
  title: string,
  src_event: string
}

const MainPage = () => {
  const URL_MEDIA = "http://localhost:3000/media"
  const URL_PATRONITE = "http://localhost:3000/patronite"
  const URL_BANNER = "http://localhost:3000/banner"
  const URL_EVENTS = "http://localhost:3000/events"

  const [media, setMedia] = useState<IMediaTyp[]>([])
  const [patronite, SetPatronite] = useState<IPatroniteType>()
  const [banner, setBanner] = useState<IBannerType>()
  const [events, setEvents] = useState<IEventsType[]>([])

  useEffect(() => {
    fetch(URL_BANNER, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setBanner(res);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(URL_EVENTS, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setEvents(res);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(URL_MEDIA, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setMedia(res);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(URL_PATRONITE, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        SetPatronite(res);
      })
      .catch((err) => console.error(err));
  }, []);

  const allMedia = media.map(one => {
    return (
      <div key={one.title}>
        <Icon icon={one.logo}
          color={one.color}
          width="40" height="40"
        />
        <p>{one.title}</p>
      </div>
    )
  })

  const allEvents = events.map(event => {
    return (
      <div key={event.id}>
        <img src={event.src_event} alt={event.title} />
        <p>{event.title}</p>
      </div>
    )
  })

  return (
    <div className="App">
      <h1>Imaginarium</h1>
      {patronite?.email && <><LogoPatronite /><p>{patronite?.email}</p></>}
      <div className="media">
        {allMedia}
      </div>
      <div className="events">
        {allEvents}
      </div>
      <img src={banner?.scr_banner} alt="banner" className="banner"/>

    </div>
  );
       
    
}
export default MainPage