import { IonCard, IonHeader, IonIcon, IonItem, IonPage } from '@ionic/react';
import { chatboxSharp, exitSharp, informationCircleSharp, personCircleSharp, personSharp, settingsSharp } from 'ionicons/icons';

import "./ProfilePage.css";

const ProfilePage: React.FC = () => {
  return (
      <IonPage>
        <IonHeader class="ion-no-border" className="profil-header">
          <IonIcon icon={personCircleSharp} color="tertiary" className="header-icon"/>
          <h1>Good Afternoon, Yoga</h1>
          <IonCard className="profil-card">
            <IonItem lines="none" className="profil-card-item">
              <IonIcon icon={personSharp} className="profil-icon" color="secondary"/>
              <p>My Profile</p>
            </IonItem>
            {
              /*
                <IonItem lines="none" className="profil-card-item">
                  <IonIcon icon={cardSharp} className="profil-icon" color="secondary"/>
                  <p>My Card</p>
                </IonItem>
                <IonItem lines="none" className="profil-card-item">
                  <IonIcon icon={notifications} className="profil-icon" color="secondary"/>
                  <p>Notifications</p>
                </IonItem>
              */
            }
            <IonItem lines="none" className="profil-card-item">
              <IonIcon icon={chatboxSharp} className="profil-icon" color="secondary"/>
              <p>FAQ</p>
            </IonItem>
            <IonItem lines="none" className="profil-card-item">
              <IonIcon icon={informationCircleSharp} className="profil-icon" color="secondary"/>
              <p>About App</p>
            </IonItem>
            <IonItem lines="none" className="profil-card-item">
              <IonIcon icon={settingsSharp} className="profil-icon" color="secondary"/>
              <p>Settings</p>
            </IonItem>
            <IonItem lines="none" className="profil-card-item" href="/">
              <IonIcon icon={exitSharp} className="profil-icon" color="secondary"/>
              <p>Logout</p>
            </IonItem>
          </IonCard>
        </IonHeader>
      </IonPage>
  );
};

export default ProfilePage;
