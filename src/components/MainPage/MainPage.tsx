import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Events from "../Events/Events";
import Header from "../Header/Header";
import Media from "../Media/Media";
import "./MainPage.scss";

const MainPage = () => {

  return (
    <div className="wrapper">
      <Header />
      <main className="wrapper__main">
        <div className="wrapper__main-right">
          <div className="wrapper__main-right--media">
            <Contact />
            <Media />
          </div>
          <Banner />
        </div>
        <Events />
      </main>
    </div>
  );
}

export default MainPage
