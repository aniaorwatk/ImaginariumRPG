import labels from "../../labels";
import LogoWhite from "../../assets/white_logo.svg";
import "./Header.css";

const Header = () => {

    return (
        <div className="header">
            <div className="header__bogumil"></div>
            <div className="header__logo">
                <img src={LogoWhite} />
            </div>
            <h1 className="header__title">{labels.header.title}</h1>
            <p className="header__information">{labels.header.information}</p>
        </div>
    )
}

export default Header
