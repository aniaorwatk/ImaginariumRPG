import { useEffect, useState } from "react";
import { getAction, IDataType, URL_IMAGINARIUM } from "../../API/APIGet";
import { linkPatronite } from "../../links";
import { LogoMail } from "../Logos/LogoMail";
import { LogoPatronite } from "../Logos/LogoPatronite";
import "./Patronite.scss";

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
                    <a href={linkPatronite} target="_blank" rel="noopener noreferrer">
                        <LogoPatronite className="patronite__logo" title="Logo Patronite"/>
                    </a>
                    |
                    <LogoMail className="patronite_logoEmail" />
                    <a href={`mailto:${patronite}`} target="_blank" rel="noopener noreferrer" className="patronite__email">{patronite}</a>
                </>
            </div>
                :
                <p>Loading...</p>
            }
        </div>
    )
}

export default Patronite
