import React from 'react';
import { IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import { personCircleSharp, searchSharp } from 'ionicons/icons';
import Axios from 'axios';

import "./HomePage.css";

import CardPlaces from '../../components/CardPlaces';


class HomePage extends React.Component {

  API_URL = `http://20.108.175.183/smartdeskers/APIservice.a5svc/getAllSpace`

  state = {
    building: [] as any,
    hide: true,
    error: ""
  }

  componentDidMount() {
    Axios.get(this.API_URL)
    .then((result) => {
      //console.log(result.data);
      this.setState({
        building: result.data
      })
    })
    .catch((err) => {
      //console.log(err.response.statusText)
      this.setState({
        hide: false,
        error: "The servers are under maintenance"
      })
    })
  }

  render() {
    return (
      <IonPage>
        <IonHeader className="home-top-bar">
          <IonToolbar color="primary">
            <IonGrid>
              <IonRow>
                <IonCol size="10">
                  <IonItem className="home-form">
                    <IonLabel>
                      <IonIcon icon={searchSharp} color="medium" ></IonIcon>
                    </IonLabel>
                    <IonInput className="home-search" type="search" placeholder="Search..." color="medium"></IonInput>
                  </IonItem>
                </IonCol>
                <IonCol className="profile-button" size="2">
                  <IonRouterLink href="/profile">
                    <IonIcon icon={personCircleSharp} color="light"></IonIcon>
                  </IonRouterLink>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonToolbar>
        </IonHeader>
        <IonHeader className="home-header" class="ion-no-border">
          <IonGrid>
            <IonRow className="header-category">
              <IonCol>
                <div className="home-menu-category">
                  <img src={require("../img/icon/d.png").default} />
                  <p>DESK</p>
                </div>
              </IonCol>
              <IonCol>
                <div className="home-menu-category">
                  <img src={require("../img/icon/hs.png").default} />
                  <p>HUDDLE SPACE</p>
                </div>
              </IonCol>
              <IonCol>
                <div className="home-menu-category">
                  <img src={require("../img/icon/mr.png").default} />
                  <p>MEETING ROOM</p>
                </div>
              </IonCol>
            </IonRow>
            <IonRow className="header-text">
              <IonCol className="left-header-text">Recomended For You</IonCol>
              <IonCol className="right-header-text"><IonLabel color="secondary">View All</IonLabel></IonCol>
            </IonRow>
          </IonGrid>
        </IonHeader>
        <IonContent className="error-api" hidden={this.state.hide}>
            <IonLabel hidden={this.state.hide}> {this.state.error} </IonLabel>
        </IonContent>
        <IonContent>
          {
            this.state.building.map((build: { 
              build_id: any;
              build_name: any;
              desk: any;
              huddle_space: any;
              meeting_room: any;
              build_distance: any;
              img_url: any;
              dot_one: boolean;
              dot_two: boolean;
            }) => {

              if (build.desk > 0) {
                build.desk = "Desk";
                if (build.huddle_space > 0 ) {
                  build.dot_one = false;
                }
                if (build.meeting_room > 0) {
                  build.dot_two = false;
                }
              } else {
                build.desk = "";
              }
              if (build.huddle_space > 0) {
                build.huddle_space = "Huddle Space";
                if (build.meeting_room > 0) {
                  build.dot_two = false;
                }
              } else {
                build.huddle_space = "";
              }
              if (build.meeting_room > 0) {
                build.meeting_room = "Meeting Room";
              } else {
                build.meeting_room = "";
              }

              return (
                <IonRouterLink href={"/building/"+build.build_id} key={build.build_id}>
                  <CardPlaces image={build.img_url} location={build.build_name} distance={build.build_distance+" km"} cat1={build.desk} dot1={build.dot_one} cat2={build.huddle_space} dot2={build.dot_two} cat3={build.meeting_room}/>
                </IonRouterLink>
              )
            })
          }
        </IonContent>
      </IonPage>
    );
  }
};

export default HomePage;
