import { useEffect, useState } from "react"
import { getAPI, IBannerType, IEventsType, IMediaTyp, IPatroniteType, URL_IMAGINARIUM } from "../../API/APIGet"
import { LogoPatronite } from "../Logo/LogoPatronite"
import "./Patronite.css"

const Patronite = () => {
    const [patronite, SetPatronite] = useState<IPatroniteType>()

    const action = (res: IMediaTyp | IBannerType | IEventsType | IPatroniteType) => {
        const response = res.story.content
        SetPatronite(response)
    }

    useEffect(() => {
        getAPI(URL_IMAGINARIUM, action)
    }, []);

    return (
        <>
            {patronite?.patronite_email && <><LogoPatronite /><p>{patronite?.patronite_email}</p></>}
        </>
    )
}

export default Patronite
