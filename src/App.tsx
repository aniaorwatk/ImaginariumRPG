import { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import { ReactComponent as LogoPatronite } from "./assets/patronite.svg"
import "./index.css"

interface IMediaTyp {
  title: string,
  logo: string,
  link: string,
  color: string,
  colorTwo: string
}

interface IPatroniteType {
  patronite_email: string
}
interface IBannerType {
  filename: string
}
interface IEventsType {
  id: number,
  title: string,
  filename: string
}

const App = () => {
  const URL ="https://api.storyblok.com/v2/cdn/stories/story?version=draft&token=jE4RYFqUUiAqm8wQBDxiqgtt&cv=1671780619"
  const URL_MEDIA = "http://localhost:3000/media"

  const [media, setMedia] = useState<IMediaTyp[]>([])
  const [patronite, SetPatronite] = useState<IPatroniteType>()
  const [banner, setBanner] = useState<IBannerType>()
  const [events, setEvents] = useState<IEventsType[]>([])

  useEffect(() => {
    fetch(URL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setBanner(res.story.content.banner);

        console.log(res.story.content.banner.filename)
      })
      .catch((err) => console.error(err));

  }, []);

  useEffect(() => {
    fetch(URL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setEvents(res.story.content.events);
        console.log(res.story.content.media)
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
    fetch(URL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        SetPatronite(res.story.content);
        console.log(res.story.content.patronite_email)
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
      <img src={banner?.filename} alt="banner" className="banner"/>
    </div>
  );
}

export default App;
