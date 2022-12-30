import { useEffect, useState } from "react"
import { getAPI, IMediaTyp, IBannerType, IEventsType, IPatroniteType, URL_IMAGINARIUM } from "../../API/APIGet"
import "./Media.css"

const Media = () => {

    const [media, setMedia] = useState<IMediaTyp[]>([])

    const action = (res: IMediaTyp | IBannerType | IEventsType | IPatroniteType) => {
        const response = res.story.content
        setMedia(response.media)
    }

    useEffect(() => {
        return getAPI(URL_IMAGINARIUM, action)
    }, []);

    const allMedia = media.map(one => {
        return (
            <a href={`${one.source}`} key={one.id}>
                <div className="media__icon">
                    <img src={one.filename} alt={one.filename} />
                    <p>{one.title}</p>
                </div>
            </a>
        )
    })

    return (
        <div className="media">
            {allMedia}
        </div>
    )
}

export default Media
