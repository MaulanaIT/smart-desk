import { IonButton, IonCol, IonContent, IonGrid, IonRow, IonSlide, IonSlides } from '@ionic/react';
import { useContext, useEffect } from 'react';

import Context from '../components/AllContext';

import "./LandingPage.css"

const LandingPage: React.FC = () => {

    const { setShowTabs } = useContext(Context);

    useEffect(() => {
        setShowTabs(false);

        return () => {
            setShowTabs(true);
        };
    });

    return (
        <IonContent>
            <IonGrid className="container-landing">
                <IonRow>
                    <IonCol>  
                        <div className="image-landing">
                            {/*<IonSlides className="landing-slides">
                                <IonSlide className="landing-slide">*/}
                                    <img src="https://placeimg.com/976/565/arch" className="image-landing-content" />
                                {/*</IonSlide>
                            </IonSlides>*/}
                            
                            <div className="image-landing-text">
                                <h1>Lorem Ipsum</h1>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>
                    </IonCol>
                </IonRow>
                <IonRow className="button-landing">
                    <IonCol>
                        <IonButton color="primary" expand="block" href="/login">Login</IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton color="primary" expand="block" href="/regs">Register</IonButton>
                    </IonCol>
                </IonRow>
                <IonRow className="button-landing">
                    <IonCol>
                        <IonButton color="secondary" expand="block" fill="outline" href="/home">Browse the space</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default LandingPage;