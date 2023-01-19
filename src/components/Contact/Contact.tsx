import labels from "../../labels";
import message from "./../../assets/fe_messanger.svg";
import "./Contact.scss";

const Contact = () => {
    return (
        <div className="contact">
            <img className="contact__img" src={message} alt="icon message" title="icon message" loading="lazy"/>
            <p className="contact__text">{labels.contact.contact}</p>
        </div>
    )
}

export default Contact
