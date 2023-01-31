import { useEffect, useState } from "react";
import { getAction, IBannerType, IDataType, IEventType, IMediaType, INewPublicationType, URL_IMAGINARIUM } from "../../API/APIGet";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Events from "../Events/Events";
import Header from "../Header/Header";
import Media from "../Media/Media";
import "./MainPage.scss";

const MainPage = () => {

  const [banner, setBanner] = useState<IBannerType>()
  const [newPublication, setNewPublication] = useState<INewPublicationType>()
  const [events, setEvents] = useState<IEventType[]>([])
  const [patronite, setPatronite] = useState("")
  const [media, setMedia] = useState<IMediaType[]>([])

  useEffect(() => {
    getAction(URL_IMAGINARIUM, (data: IDataType) => {
      setBanner(data.banner)
      setNewPublication(data.new_publication)
      setEvents(data.events)
      setPatronite(data.patronite_email)
      setMedia(data.media)
    })
  }, []);

  return (
    <div className="wrapper">
      <Header
        patronite={patronite}
      />
      <main className="wrapper__main">
        <div className="wrapper__main-right">
          <div className="wrapper__main-right--media">
            <Contact />
            <Media
              media={media}
            />
          </div>
          <Banner
            banner={banner}
          />
        </div>
        <Events
          events={events}
          newPublication={newPublication}
        />
      </main>
    </div>
  );
}

export default MainPage
