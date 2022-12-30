import { useEffect, useState } from "react"
import { getAPI, IBannerType, IEventsType, IMediaTyp, IPatroniteType, URL_IMAGINARIUM } from "../../API/APIGet"

const Banner =()=>{

    const [banner, setBanner] = useState<IBannerType>()

    const action = (res: IMediaTyp | IBannerType | IEventsType | IPatroniteType) => {
        const response = res.story.content
        setBanner(response.banner)
      }
    
      useEffect(() => {
        getAPI(URL_IMAGINARIUM, action)
      }, []);
    return(
        <img src={banner?.filename} alt="banner" className="banner" />
    )
}

export default Banner