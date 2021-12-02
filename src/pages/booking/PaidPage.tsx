import { IonCard, IonContent, IonLabel, IonPage } from '@ionic/react';
import CardBooking from '../../components/CardBooking';

const PaidPage: React.FC<any> = (props) => {
  return (
    <IonContent hidden={props.hidePaid}>
      <IonCard>
        <IonLabel>This is Paid Page</IonLabel>
      </IonCard>
      <CardBooking building="Grand Edge" category="Meeting Room 1" date="Saturday, 01 January 2022" time="09:00 AM" activity="Check In Before"/>
    </IonContent>
  );
};

PaidPage.defaultProps = {
  hidePaid: true
}

export default PaidPage;
