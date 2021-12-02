import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';

const SegmentPage: React.FC<{
    page: string;
    selectedPageValue: (value: string) => void;
}> = (props) => {

  const changeValueHandler = (e: CustomEvent) => {
    props.selectedPageValue(e.detail.value);
  }

  return (
    <IonSegment value={props.page} mode="md" onIonChange={changeValueHandler}>
        <IonSegmentButton value="paid">
        <IonLabel className="segment-label">Paid</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="checkin">
        <IonLabel className="segment-label">Check In</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="done">
        <IonLabel className="segment-label">Done</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="canceled">
        <IonLabel className="segment-label">Canceled</IonLabel>
        </IonSegmentButton>
    </IonSegment>   
  );
};

SegmentPage.defaultProps = {
    page: "paid"
}

export default SegmentPage;
