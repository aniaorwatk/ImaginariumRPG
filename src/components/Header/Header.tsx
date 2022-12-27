import { camera, trash, close } from 'ionicons/icons';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from '@ionic/react';
import { LogoMessanger } from '../Icons/LogoMessanger';
import { LogoWhite } from '../Icons/LogoWhite';

import './Header.css'




const Header = () => {





  return (



    <div className='header'>

{/* <IonImg src={love} className='header__bogumil'/> */}



      <IonToolbar >
       <LogoWhite  className='header_logo'/>  
   


      <LogoMessanger />

     
    
        <IonTitle>
          <h1>Imaginarium RPG</h1>
        </IonTitle>
        <p>Sesje RPG | Warsztaty | Bohomazki</p>
      </IonToolbar>

    </div>

  )
}

export default Header







