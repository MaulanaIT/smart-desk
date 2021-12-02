import {  IonContent, IonHeader, IonLabel, IonPage, IonToolbar } from '@ionic/react';
import React from 'react';

import SegmentPage from '../../components/SegmentBooking';
import CanceledPage from './CanceledPage';
import PaidPage from './PaidPage';

import "./BookingPage.css"
import CheckInPage from './CheckInPage';
import DonePage from './DonePage';

class BookingPage extends React.Component {

  state = {
    pages: "paid",
    paidHide: false,
    checkInHide: true,
    doneHide: true,
    canceledHide: true
  }

  handlerSelectPage = (value:string) => {
    this.setState ({
      pages: value
    })
    
    if (this.state.pages == "paid") {
      this.setState({
        paidHide: false,
        checkInHide: true,
        doneHide: true,
        canceledHide: true
      })
    } else if (this.state.pages == "checkin") {
      this.setState({
        paidHide: true,
        checkInHide: false,
        doneHide: true,
        canceledHide: true
      })
    } else if (this.state.pages == "done") {
      this.setState({
        paidHide: true,
        checkInHide: true,
        doneHide: false,
        canceledHide: true
      })
    } else if (this.state.pages == "canceled") {
      this.setState({
        paidHide: true,
        checkInHide: true,
        doneHide: true,
        canceledHide: false
      })
    } 

    //console.log("handler : "+this.state.pages+" | "+this.state.paidHide+" | "+this.state.checkInHide+" | "+this.state.doneHide+" | "+this.state.canceledHide)
  }

  render () {
    return (
      <IonPage>
          {
            //console.log("onPage : "+this.state.pages+" | "+this.state.paidHide+" | "+this.state.checkInHide+" | "+this.state.doneHide+" | "+this.state.canceledHide)
          }
          <IonHeader class="ion-no-border">
          <IonToolbar>
            <IonLabel className="header-book-text">Booking List</IonLabel>
          </IonToolbar>
          <SegmentPage page={this.state.pages} selectedPageValue={this.handlerSelectPage} />
          </IonHeader>
          <PaidPage hidePaid={this.state.paidHide} />
          <CheckInPage hideCheckIn={this.state.checkInHide} />
          <DonePage hideDone={this.state.doneHide} />
          <CanceledPage hideCanceled={this.state.canceledHide} />
      </IonPage>
    );
  }
  
  
};

export default BookingPage;
