import React from 'react';
import { IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';
import { handRight, personCircleSharp, ribbonSharp, searchSharp } from 'ionicons/icons';
import Axios from 'axios';

import "./DetailPage.css";

class DetailPage extends React.Component<{}, {}> {
    
    state = {
        buildingDetail: [] as any,
        buildingComunal: [] as any,
        buildingDay: [] as any,
        hideDetail: true,
        hideComunal: true,
        hideDay: true,
        errorDetail: "",
        errorComunal: "",
        errorDay: ""
    }

    componentDidMount() {
        Axios.get(`http://20.108.175.183/smartdeskers/APIservice.a5svc/getDetailSpace?build_id=1`)
        .then((result) => {
          //console.log(result.data);
          this.setState({
            buildingDetail: result.data
          })
        })
        .catch((err) => {
          //console.log(err.response.statusText)
          this.setState({
            hideDetail: false,
            errorDetail: "The servers are under maintenance"
          })
        })

        Axios.get(`http://20.108.175.183/smartdeskers/APIservice.a5svc/getSpaceArea?build_id=1`)
        .then((result) => {
          //console.log(result.data);
          this.setState({
            buildingComunal: result.data
          })
        })
        .catch((err) => {
          //console.log(err.response.statusText)
          this.setState({
            hideComunal: false,
            errorComunal: "The servers are under maintenance"
          })
        })

        Axios.get(`http://20.108.175.183/smartdeskers/APIservice.a5svc/getWorkHour?build_id=1`)
        .then((result) => {
          //console.log(result);
          this.setState({
            buildingDay: result.data
          })
        })
        .catch((err) => {
          //console.log(err.response.statusText)
          this.setState({
            hideDay: false,
            errorDay: "The servers are under maintenance"
          })
        })
      }

    render() {
        //console.log(this.props as any);
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonLabel>Detail Page</IonLabel>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <div className="detail-container">
                        <div className="detail-building">
                            {
                                this.state.buildingDetail.map((detail: {
                                    build_id: any;
                                    build_name: any;
                                    build_desc: any;
                                    build_add: any;
                                    build_add_city: any;
                                    build_email: any;
                                    build_phone: any;
                                    build_distance: any;
                                }) => {
                                    return (
                                        <div key={detail.build_id}>
                                            <p className="title-building"><IonLabel>{detail.build_name}</IonLabel></p>
                                            <p className="distance-building"><IonLabel>{detail.build_distance} km</IonLabel></p>
                                            <p className="subtitle-building"><IonLabel>Description</IonLabel></p>
                                            <p className="content-subtitle-building"><IonLabel>{detail.build_desc}</IonLabel></p>
                                            <p className="subtitle-building"><IonLabel>Address</IonLabel></p>
                                            <p className="content-subtitle-building"><IonLabel>{detail.build_add}, {detail.build_add_city}</IonLabel></p>
                                            <p className="subtitle-building"><IonLabel>Email</IonLabel></p>
                                            <p className="content-subtitle-building"><IonLabel>{detail.build_email}</IonLabel></p>
                                            <p className="subtitle-building"><IonLabel>Phone Number</IonLabel></p>
                                            <p className="content-subtitle-building"><IonLabel>{detail.build_phone}</IonLabel></p>
                                        </div>
                                    )
                                })
                            }
                            <p className="subtitle-building"><IonLabel>Comunal Area</IonLabel></p>
                            <ul className="content-dot-building">
                                {
                                    this.state.buildingComunal.map((comunal: {
                                        area_id: any;
                                        area_name: any;
                                    }) => {
                                        return (
                                            <li key={comunal.area_id}><p className="content-subtitle-building">{comunal.area_name}</p></li>
                                        )
                                    })
                                }
                            </ul>
                            <p className="subtitle-building"><IonLabel>Operation Hour</IonLabel></p>
                            <ul className="content-dot-building">
                                {
                                    this.state.buildingDay.map((work: {
                                        day_id: any;
                                        day_name: any;
                                        work_open: any;
                                        work_closed: any;
                                    }) => {
                                        return (
                                            <li key={work.day_id}>
                                                <p className="content-subtitle-building">{work.day_name} {work.work_open} - {work.work_closed}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </IonContent>
            </IonPage>
        )
    }

}

export default DetailPage;