import { IonCard, IonContent, IonLabel, IonPage } from '@ionic/react';
import CardBooking from '../../components/CardBooking';

const CanceledPage: React.FC<any> = (props) => {
  return (
    <IonContent hidden={props.hideCanceled}>
      <IonCard>
        <IonLabel>This is Canceled Page</IonLabel>
      </IonCard>
      <CardBooking building="Grand Edge" category="Meeting Room 2" date="Sunday, 02 January 2022" time="Saturday, 01 January 2022" activity="Date Canceled"/>
    </IonContent>
  );
};

CanceledPage.defaultProps = {
  hideCanceled: true
}

export default CanceledPage;
