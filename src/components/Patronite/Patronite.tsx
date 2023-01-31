import { linkPatronite } from "../../links";
import { LogoMail } from "../Logos/LogoMail";
import { LogoPatronite } from "../Logos/LogoPatronite";
import "./Patronite.scss";

export interface IPatroniteType {
    patronite: string
}

const Patronite = ({ patronite }: IPatroniteType) => {

    return (
        patronite ? <div className="patronite">
            <>
                <a href={linkPatronite} target="_blank" rel="noopener noreferrer">
                    <LogoPatronite className="patronite__logo" title="Logo Patronite" />
                </a>
                |
                <LogoMail className="patronite_logoEmail" />
                <a href={`mailto:${patronite}`} target="_blank" rel="noopener noreferrer" className="patronite__email">{patronite}</a>
            </>
        </div>
            :
            <p>Loading...</p>
    )
}

export default Patronite
