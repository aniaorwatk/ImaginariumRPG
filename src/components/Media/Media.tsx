import { useEffect, useState } from "react"
import { getAPI, IMediaTyp, URL_IMAGINARIUM, IResType } from "../../API/APIGet"
import "./Media.css"

const Media = () => {

    const [media, setMedia] = useState<IMediaTyp[]>([])

    const action = (res: IResType) => {
        const response = res.story.content
        setMedia(response.media)
    }

    useEffect(() => {
        return getAPI(URL_IMAGINARIUM, action)
    }, []);

    const allMedia = media.map(one => {
        return (
            <a href={`${one.source}`} key={one.id} className="media__link">
                <div className="media__icon">
                    <div className="media__icon-img">
                        <img className="media__icon-view"src={one.filename} alt={one.filename} />
                    </div>
                    <p className="media__icon-title">{one.title}</p>
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
