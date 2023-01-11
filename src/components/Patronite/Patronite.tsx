import { useEffect, useState } from "react";
import { getAction, IDataType, URL_IMAGINARIUM } from "../../API/APIGet";
import { linkPatronite } from "../../links";
import { LogoMail } from "../Logo/LogoMail";
import { LogoPatronite } from "../Logo/LogoPatronite";
import "./Patronite.css";

const Patronite = () => {
    const [patronite, setPatronite] = useState("")

    useEffect(() => {
        getAction(URL_IMAGINARIUM, (data: IDataType) => {
            setPatronite(data.patronite_email)
        })
    }, [patronite]);

    return (
        <div>
            {patronite ? <div className="patronite">
                <>
                    <a href={linkPatronite} target="_blank">
                        <LogoPatronite className="patronite__logo" />
                    </a>
                    |
                    <LogoMail className="patronite_logoEmail" />
                    <a href={`mailto:${patronite}`} target="_blank" className="patronite__email">{patronite}</a>
                </>
            </div>
                :
                <p>Loading...</p>
            }
        </div>
    )
}

export default Patronite
