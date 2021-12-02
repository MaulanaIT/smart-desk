import { IonCard, IonContent, IonLabel, IonPage } from '@ionic/react';
import CardBooking from '../../components/CardBooking';

const CheckInPage: React.FC<any> = (props) => {
  return (
    <IonContent hidden={props.hideCheckIn}>
      <IonCard>
        <IonLabel>This is Check In Page</IonLabel>
      </IonCard>
      <CardBooking building="Grand Edge" category="Meeting Room 2" date="Saturday, 01 January 2022" time="09:10 AM" activity="Check Out Before"/>
    </IonContent>
  );
};

CheckInPage.defaultProps = {
  hideCheckIn: true
}

export default CheckInPage;
