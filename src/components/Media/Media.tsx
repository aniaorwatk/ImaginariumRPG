import { useEffect, useState } from "react";
import { getAction, IMediaType, URL_IMAGINARIUM, IDataType } from "../../API/APIGet";
import "./Media.scss";

const Media = () => {

    const [media, setMedia] = useState<IMediaType[]>([])

    useEffect(() => {
        getAction(URL_IMAGINARIUM, (data: IDataType) => {
            setMedia(data.media)
        })
    }, [media]);

    const allMedia = media.map(one => {
        return (
            <a href={`${one.source}`} target="_blank" rel="noopener noreferrer" key={one.id} className="mediaLink">
                <div className="mediaLink__icon">
                    <div className="mediaLink__icon-img">
                        <img className="mediaLink__icon-img--view" src={one.filename} alt={one.filename} title={one.filename} loading="lazy"/>
                    </div>
                    <p className="mediaLink__icon-title">{one.title}</p>
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
