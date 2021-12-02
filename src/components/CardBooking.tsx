import { IonCard, IonCol, IonContent, IonGrid, IonLabel, IonPage, IonRow } from '@ionic/react';

import "./CardBooking.css"

const CardBooking: React.FC<any> = (props) => {
  return (
    <IonCard className="book-card">
        <IonLabel>{props.building}</IonLabel>
        <br />
        <hr />
        <IonLabel>{props.category}</IonLabel>
        <br />
        <br />
        <IonGrid className="book-detail">
            <IonRow>
                <IonCol size="6">
                    <IonLabel color="medium">Date Booking</IonLabel>
                </IonCol>
                <IonCol size="6">
                    <IonLabel color="medium">{props.activity}</IonLabel>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol size="6">
                    <IonLabel color="secondary">{props.date}</IonLabel>
                </IonCol>
                <IonCol size="6">
                    <IonLabel color="secondary">{props.time}</IonLabel>
                </IonCol>
            </IonRow>
        </IonGrid>
    </IonCard>
  );
};

export default CardBooking;
