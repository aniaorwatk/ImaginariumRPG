import { useEffect, useState } from "react";
import { getAction, IDataType, URL_IMAGINARIUM } from "../../API/APIGet";
import { LogoMail } from "../Logo/LogoMail";
import { LogoPatronite } from "../Logo/LogoPatronite";
import "./Patronite.css";

const Patronite = () => {
    const [patronite, SetPatronite] = useState("")

    const linkPatronite = "https://patronite.pl/imaginariumrpg"

    const action = (data: IDataType) => {
        SetPatronite(data.patronite_email)
    }

    useEffect(() => {
        getAction(URL_IMAGINARIUM, action)
    }, []);

    return (
        <div>
            {patronite && <div className="patronite">
                <>
                    <a href={linkPatronite} target="_blank">
                        <LogoPatronite className="patronite__logo" />
                    </a>
                    |
                    <LogoMail className="patronite_logoEmail" />
                    <p className="patronite__email">{patronite}</p></>
            </div>
            }
        </div>
    )
}

export default Patronite
