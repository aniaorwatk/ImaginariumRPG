import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Events from "../Events/Events";
import Header from "../Header/Header";
import Media from "../Media/Media";
import Patronite from "../Patronite/Patronite";
import "./../../index.css";
import "./MainPage.css";

const MainPage = () => {

  return (
    <div className="App">
      <Contact/>
      <Header />
      <Patronite />
      <Media />
      <Banner />
      <Events />
    </div>
  );
}

export default MainPage
