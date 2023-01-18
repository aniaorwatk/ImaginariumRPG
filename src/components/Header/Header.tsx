import labels from "../../labels";
import LogoWhite from "../../assets/white_logo.svg";
import Patronite from "../Patronite/Patronite";
import "./Header.scss";

const Header = () => {

    return (
        <header className="header">
            <div className="header__bogumil"></div>
            <div className="header__logo">
                <div className="header__logo-bg">
                    <img src={LogoWhite} />
                </div>
            </div>
            <h1 className="header__title">{labels.header.title}</h1>
            <p className="header__information">{labels.header.information}</p>
            <Patronite />
        </header>
    )
}

export default Header
