import { IMediaType } from "../../API/APIGet";
import "./Media.scss";

interface IAllMediaType {
    media: IMediaType[] | undefined
}

const Media = ({ media }: IAllMediaType) => {

    const allMedia = media ? media.map(one => {
        return (
            <a href={`${one.source}`} target="_blank" rel="noopener noreferrer" key={one.id} className="mediaLink">
                <div className="mediaLink__icon">
                    <div className="mediaLink__icon-img">
                        <img className="mediaLink__icon-img--view" src={one.filename} alt={one.filename} title={one.filename} loading="eager" width={200} height={200} />
                    </div>
                    <p className="mediaLink__icon-title">{one.title}</p>
                </div>
            </a>
        )
    }) : []

    return (
        media ? <div className="media">
            {allMedia}
        </div> : null
    )
}

export default Media
