import { IonButton, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRouterLink, IonText } from '@ionic/react';
import { chevronBackSharp } from 'ionicons/icons';
import { useContext, useEffect } from 'react';
import Context from '../components/AllContext';

import "./RegisterPage.css"

const RegisterPage: React.FC = () => {

    const { setShowTabs } = useContext(Context);

    useEffect(() => {
        setShowTabs(false);

        return () => {
            setShowTabs(true);
        };
    });

    return (
        <IonPage>
            <IonContent>
                <div className="container-login">
                    <IonRouterLink className="back-btn-header" color="dark" href="/">
                        <IonIcon icon={chevronBackSharp} ></IonIcon>
                    </IonRouterLink>
                    <div className="content-regs">
                        <div className="header-regs">
                            <IonText color="primary">
                                <h1>Register</h1>
                            </IonText>
                            <p>Please enter your email and password.</p>
                        </div>
                        <IonItem className="form">
                            <IonLabel className="form-label" position="floating">First Name</IonLabel>
                            <IonInput value=""></IonInput>
                        </IonItem>
                        <IonItem className="form">
                            <IonLabel className="form-label" position="floating">Last Name</IonLabel>
                            <IonInput value=""></IonInput>
                        </IonItem>
                        <IonItem className="form">
                            <IonLabel className="form-label" position="floating">Email</IonLabel>
                            <IonInput type="email" value=""></IonInput>
                        </IonItem>
                        <IonItem className="form">
                            <IonLabel className="form-label" position="floating">Phone Number</IonLabel>
                            <IonInput value=""></IonInput>
                        </IonItem>
                        <IonItem className="form">
                            <IonLabel className="form-label" position="floating">Password</IonLabel>
                            <IonInput type="password" value=""></IonInput>
                        </IonItem>
                        <IonItem className="form">
                            <IonLabel className="form-label" position="floating">Confirm Password</IonLabel>
                            <IonInput type="password" value=""></IonInput>
                        </IonItem>
                        <br />
                        <IonButton color="primary" expand="block"><p>Register</p></IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default RegisterPage;