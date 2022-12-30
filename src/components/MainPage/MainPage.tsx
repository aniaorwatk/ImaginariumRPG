import Banner from "../Banner/Banner"
import Events from "../Events/Events"
import Media from "../Media/Media"
import Patronite from "../Patronite/Patronite"
import "./../../index.css"
import "./MainPage.css"



const MainPage = () => {

  return (
    <div className="App">
      <h1>Imaginarium</h1>
     <Patronite/>
 
      <Media/>
     <Banner/>      
    <Events/>

    </div>
  );
       
    
}
export default MainPage