import message from "./../../assets/message.svg";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact">
            <img src={message} alt="icon message" />
            <p className="contact__text">kontakt</p>
        </div>
    )
}

export default Contact
