import { useEffect, useState } from "react";
import { getAPI, IPatroniteType, IResType, URL_IMAGINARIUM } from "../../API/APIGet";
import { LogoMail } from "../Logo/LogoMail";
import { LogoPatronite } from "../Logo/LogoPatronite";
import "./Patronite.css";

const Patronite = () => {
    const [patronite, SetPatronite] = useState<IPatroniteType>()

    const linkPatronite = "https://patronite.pl/imaginariumrpg"

    const action = (res: IResType) => {
        const response = res.story.content;
        SetPatronite(response)
    }

    useEffect(() => {
        getAPI(URL_IMAGINARIUM, action)
    }, []);

    return (
        <div>
            {patronite?.patronite_email && <div className="patronite">
                <>
                <a href={linkPatronite} target="_blank">
                    <LogoPatronite className="patronite__logo" />
                   </a> 
                    |
                    <LogoMail className="patronite_logoEmail" />
                    <p className="patronite__email">{patronite?.patronite_email}</p></>
            </div>
            }
        </div>
    )
}

export default Patronite
