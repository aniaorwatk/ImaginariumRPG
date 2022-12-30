import { useEffect, useState } from "react"
import { getAPI, URL_IMAGINARIUM } from "../../API/APIGet"
import Banner from "../Banner/Banner"
import Events from "../Events/Events"
import Media from "../Media/Media"
import Patronite from "../Patronite/Patronite"
import { ReactComponent as LogoPatronite } from "./../../assets/patronite.svg"
import "./../../index.css"



const MainPage = () => {

  return (
    <div className="App">
      <h1>Imaginarium</h1>
     <Patronite/>
 
      <Media/>
    <Events/>
     <Banner/>
    </div>
  );
       
    
}
export default MainPage