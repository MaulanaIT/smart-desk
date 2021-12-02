import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CardPlaces from '../../components/CardPlaces';

import Desk1 from "../img/desk1.jpg";

const LikedPage: React.FC = () => {
  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Liked Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <CardPlaces image={Desk1} location="Alcott Semarang" rate="5.0" cat1="Desk"/>
          <CardPlaces image={Desk1} location="Alcott UK" rate="4.9" cat2="Huddle Space"/>
          <CardPlaces image={Desk1} location="Alcott US" rate="4.8" cat3="Meeting Room"/>
        </IonContent>
      </IonPage>
  );
};

export default LikedPage;
