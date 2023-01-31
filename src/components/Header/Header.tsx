import labels from "../../labels";
import LogoWhite from "../../assets/white_logo.svg";
import Patronite, { IPatroniteType } from "../Patronite/Patronite";
import "./Header.scss";

const Header = ({patronite}:IPatroniteType) => {

    return (
        <header className="header">
            <div className="header__bogumil" title="Bogumił in Love"></div>
            <div className="header__logo">
                <div className="header__logo-bg">
                    <img src={LogoWhite} alt="Logo Imaginarium" title="Logo Imaginarium" loading="eager" width={103} height={99} />
                </div>
            </div>
            <h1 className="header__h1"><span className="header__title">{labels.header.title}</span><span className="header__information">{labels.header.information}</span></h1>
            <meta name="description" content="grupa Imaginarium RPG - sesje gier fabularnych Imaginarium " />
            <Patronite 
            patronite={patronite}/>
        </header>
    )
}

export default Header
