import { Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { appsSharp, homeSharp, personSharp, qrCodeSharp, search } from 'ionicons/icons';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/home/HomePage';
import SearchPage from './pages/search/SearchPage';
import LikedPage from './pages/liked/LikedPage';
import BookingPage from './pages/booking/BookingPage';
import ProfilePage from './pages/profile/ProfilePage';
import DetailPage from './pages/detail/DetailPage';
import Context from './components/AllContext';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './App.css';
import React from 'react';

const App: React.FC = () => {

  const { showTabs } = React.useContext(Context);

  let showTabBar = showTabs ? undefined : { display: "none"};

  return (
      <IonApp>
          <IonReactRouter>
            <IonTabs className="hideTabs">
              <IonRouterOutlet>
                <Route exact path="/">
                  <LandingPage />
                </Route>
                <Route path="/login">
                  <LoginPage />
                </Route>
                <Route path="/regs">
                  <RegisterPage />
                </Route>
                <Route path="/home">
                  <HomePage />
                </Route>
                <Route path="/search">
                  <SearchPage />
                </Route>
                <Route path="/checkin">
                  <LikedPage />
                </Route>
                <Route path="/booking">
                  <BookingPage />
                </Route>
                <Route path="/profile">
                  <ProfilePage />
                </Route>
                <Route exact path="/building/:buildingNumber">
                  <DetailPage />
                </Route>
              </IonRouterOutlet>
              <IonTabBar slot="bottom" className="tab-button" style={showTabBar}>
                <IonTabButton tab="home" href="/home">
                  <IonIcon icon={homeSharp}/>
                  <IonLabel>Home</IonLabel>
                </IonTabButton>
                {
                  /*
                    <IonTabButton tab="search" href="/search">
                      <IonIcon icon={search} />
                      <IonLabel><p>Search</p></IonLabel>
                    </IonTabButton>
                  */
                }
                
                <IonTabButton tab="checkin" href="/checkin">
                  <IonIcon icon={qrCodeSharp}/>
                  <IonLabel>Check In</IonLabel>
                </IonTabButton>
                
                <IonTabButton tab="booking" href="/booking">
                  <IonIcon icon={appsSharp} />
                  <IonLabel>Bookings</IonLabel>
                </IonTabButton>
                {
                  /*
                    <IonTabButton tab="profile" href="/profile">
                      <IonIcon icon={personSharp}/>
                      <IonLabel><p>Profile</p></IonLabel>
                    </IonTabButton>
                  */
                }
              </IonTabBar>
            </IonTabs>
          </IonReactRouter>
      </IonApp>
  )
}

export default App;
