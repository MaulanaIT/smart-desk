import { IonCard, IonContent, IonLabel, IonPage } from '@ionic/react';
import CardBooking from '../../components/CardBooking';

const DonePage: React.FC<any> = (props) => {
  return (
    <IonContent hidden={props.hideDone}>
      <IonCard>
        <IonLabel>This is Done Page</IonLabel>
      </IonCard>
      <CardBooking building="Grand Edge" category="Meeting Room 1" date="Sunday, 02 January 2022" time="07:15 AM" activity="Checked Out"/>
    </IonContent>
  );
};

DonePage.defaultProps = {
  hideDone: true
}

export default DonePage;
