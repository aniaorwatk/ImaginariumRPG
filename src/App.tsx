import { useEffect, useState } from "react";
import { getAPI, URL_IMAGINARIUM } from "./API/APIGet";
import { ReactComponent as LogoPatronite } from "./assets/patronite.svg"
import "./index.css"

export interface IMediaTyp {
  story: any,
  title: string,
  filename: string,
  id: number,
  source: string
}

export interface IPatroniteType {
  story: any,
  patronite_email: string
}
export interface IBannerType {
  story: any,
  filename: string
}
export interface IEventsType {
  story: any,
  id: number,
  title: string,
  filename: string
}

const App = () => {

  const [media, setMedia] = useState<IMediaTyp[]>([])
  const [patronite, SetPatronite] = useState<IPatroniteType>()
  const [banner, setBanner] = useState<IBannerType>()
  const [events, setEvents] = useState<IEventsType[]>([])

  const action = (res: IMediaTyp | IBannerType | IEventsType | IPatroniteType) => {
    const response = res.story.content
    setMedia(response.media)
    setBanner(response.banner)
    setEvents(response.events)
    SetPatronite(response)
  }

  useEffect(() => {
    getAPI(URL_IMAGINARIUM, action)
  }, []);

  const allMedia = media.map(one => {
    return (
      <a href={`${one.source}`} key={one.id}>
        <div  className="media__icon">
          <img src={one.filename} alt={one.filename}/>
          <p>{one.title}</p>
        </div>
      </a>
    )
  })

  const allEvents = events.map(event => {
    return (
      <div key={event.id}>
        <img src={event.filename} alt={event.title} />
        <p>{event.title}</p>
      </div>
    )
  })

  return (
    <div className="App">
      <h1>Imaginarium</h1>
      {patronite?.patronite_email && <><LogoPatronite /><p>{patronite?.patronite_email}</p></>}
      <div className="media">
        {allMedia}
      </div>
      <div className="events">
        {allEvents}
      </div>
      <img src={banner?.filename} alt="banner" className="banner" />
    </div>
  );
}

export default App;
