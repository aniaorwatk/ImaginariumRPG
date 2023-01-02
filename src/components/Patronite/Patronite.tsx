import { useEffect, useState } from "react"
import { getAPI, IPatroniteType, IResType, URL_IMAGINARIUM } from "../../API/APIGet"
import { LogoPatronite } from "../Logo/LogoPatronite"
import "./Patronite.css"

const Patronite = () => {
    const [patronite, SetPatronite] = useState<IPatroniteType>()

    const action = (res: IResType) => {
        const response = res.story.content
        SetPatronite(response)
    }

    useEffect(() => {
        getAPI(URL_IMAGINARIUM, action)
    }, []);

    return (
        <div className="patronite">
            {patronite?.patronite_email && <><LogoPatronite /> | <p className="patronite__email">{patronite?.patronite_email}</p></>}
        </div>
    )
}

export default Patronite
