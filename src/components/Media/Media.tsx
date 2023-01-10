import { useEffect, useState } from "react";
import { getAction, IMediaType, URL_IMAGINARIUM, IDataType } from "../../API/APIGet";
import "./Media.css";

const Media = () => {

    const [media, setMedia] = useState<IMediaType[]>([])

    const action = (data: IDataType) => {
        setMedia(data.media)
    }

    useEffect(() => {
        getAction(URL_IMAGINARIUM, action)
    }, []);

    const allMedia = media.map(one => {
        return (
            <a href={`${one.source}`} target="_blank" key={one.id} className="media__link">
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
        <>
            {media && <div className="media">
                {allMedia}
            </div>}
        </>
    )
}

export default Media
