import { useEffect, useState } from "react";
import { getAction, IDataType, INewPublicationType, URL_IMAGINARIUM } from "../../../API/APIGet";
import { LogoNewPublication } from "../../Logos/LogoNewPublication";
import "./NewPublication.css";

const NewPublication = () => {

    const [newPublication, setNewPublication] = useState<INewPublicationType>()

    useEffect(() => {
        getAction(URL_IMAGINARIUM, (data: IDataType) => {
            setNewPublication(data.new_publication)
        })
    }, [newPublication]);

    return (
        <section className="newPublication">
            {newPublication && <a href={newPublication?.source} target="_blank" className="newPublication__link">
                <LogoNewPublication className="newPublication__link-icon" />
                <img src={newPublication?.filename} alt={newPublication?.alt} className="newPublication__link-img" />
                <p>{newPublication?.title}</p>
            </a>}
        </section>
    )
}

export default NewPublication
