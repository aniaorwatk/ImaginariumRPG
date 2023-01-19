import labels from "../../labels";
import LogoWhite from "../../assets/white_logo.svg";
import Patronite from "../Patronite/Patronite";
import "./Header.scss";

const Header = () => {

    return (
        <header className="header">
            <div className="header__bogumil" title="Bogumił in Love"></div>
            <div className="header__logo">
                <div className="header__logo-bg">
                    <img src={LogoWhite} alt="Logo Imaginarium" title="Logo Imaginarium" loading="lazy"/>
                </div>
            </div>
            <title><h1 className="header__title">{labels.header.title}</h1>   </title>
            <meta name="description" content="Imaginarium RPG" />
            <p className="header__information">{labels.header.information}</p>
            <Patronite />
        </header>
    )
}

export default Header
