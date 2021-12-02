import { IonButton, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRouterLink, IonText } from '@ionic/react';
import { chevronBackSharp } from 'ionicons/icons';
import { useContext, useEffect } from 'react';
import Context from '../components/AllContext';

import "./LoginPage.css"

const LoginPage: React.FC = () => {

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
                    <div className="content-login">
                        <div className="header-login">
                            <IonText color="primary">
                                <h1>Login</h1>
                            </IonText>
                            <p>Please enter your registered email and password.</p>
                        </div>
                        <IonItem className="form">
                            <IonLabel className="form-label" position="floating">Email</IonLabel>
                            <IonInput type="email" value=""></IonInput>
                        </IonItem>
                        <IonItem className="form">
                            <IonLabel className="form-label" position="floating">Password</IonLabel>
                            <IonInput type="password" value=""></IonInput>
                        </IonItem>
                        <div className="fp-login">
                            <IonText color="secondary">
                                <p>Forgot Password?</p>
                            </IonText>
                        </div>
                        <IonButton color="primary" expand="block"><p>Login</p></IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default LoginPage;