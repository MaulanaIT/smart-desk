import React from 'react';
import { IonCard, IonLabel, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/react';
import { ellipse, locationSharp } from 'ionicons/icons';

import "./CardPlaces.css";

const CardPlaces: React.FC<any> = (props) => {
  
  return (
    <IonCard className="card-places">
      <div className="image-card">
        <img src={props.image} className="image-card-fit"/>
      </div>
      <div className="bottom-card">
          <IonGrid>
            <IonRow>
              <IonCol><h1>{props.location}</h1></IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="location-card" size="3">
                <IonIcon icon={locationSharp} color="secondary" className="loc-icon"/>
                <IonLabel color="secondary"> {props.distance}</IonLabel>
              </IonCol>
              <IonCol className="category-card" size="9">
                <IonLabel color="medium">
                {props.cat1}
                <IonIcon icon={ellipse} color="secondary" className="dot-icon" hidden={props.dot1}/>
                {props.cat2}
                <IonIcon icon={ellipse} color="secondary" className="dot-icon" hidden={props.dot2}/>
                {props.cat3}
              </IonLabel>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
    </IonCard>
  );
};

CardPlaces.defaultProps = {
  cat1: "",
  cat2: "",
  cat3: "",
  dot1: true,
  dot2: true
}

export default CardPlaces;