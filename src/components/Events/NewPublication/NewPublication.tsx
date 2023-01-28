import { INewPublicationType } from "../../../API/APIGet";
import { LogoNewPublication } from "../../Logos/LogoNewPublication";
import "./NewPublication.scss";

interface IPType{
    newPublication: INewPublicationType | undefined
}

const NewPublication = ({newPublication}:IPType) => {

    return (
        <section className="newPublication">
            {newPublication && <a href={newPublication?.source} target="_blank" rel="noopener noreferrer" className="newPublication__link">
                <LogoNewPublication className="newPublication__link-icon" />
                <img src={newPublication?.filename} alt={newPublication?.alt} title={newPublication?.alt} loading="eager" className="newPublication__link-img" width={433} height={100}/>
                <p className="newPublication__link-title">{`“${newPublication?.title}”`}</p>
            </a>}
        </section>
    )
}

export default NewPublication
