import { useEffect, useState } from "react";
import { getAction, IMediaType, URL_IMAGINARIUM, IDataType } from "../../API/APIGet";
import "./Media.css";

const Media = () => {

    const [media, setMedia] = useState<IMediaType[]>([])

    useEffect(() => {
        getAction(URL_IMAGINARIUM, (data: IDataType) => {
            setMedia(data.media)
        })
    }, [media]);

    const allMedia = media.map(one => {
        return (
            <a href={`${one.source}`} target="_blank" rel="noopener noreferrer" key={one.id} className="media__link">
                <div className="media__icon">
                    <div className="media__icon-img">
                        <img className="media__icon-view" src={one.filename} alt={one.filename} />
                    </div>
                    <p className="media__icon-title">{one.title}</p>
                </div>
            </a>
        )
    })

    return (
        media && <div className="media">
            {allMedia}
        </div>
    )
}

export default Media
