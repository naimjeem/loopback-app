import React, { Component } from 'react';
import MeetupItem from './MeetupItem';

const reqUrl = 'http://localhost:3000/api/meetupzs';

class Meetupz extends Component {
  constructor() {
    super();
    this.state = {
      meetups: []
    }
  }
 
  componentWillMount() {
    this.getMeetups();
  }
  
  getMeetups() {
    fetch(reqUrl)
      .then(res => {
         res.json().then(meetups => {
          console.log(meetups);
          this.setState({ meetups: meetups }, () => {
            console.log(this.state);
          });
        });
      });
  }

  render() {
    const meetupItems = this.state.meetups.map((meetup, index) => {
      return (
        <MeetupItem key={meetup.id} item={meetup} />
      );
    });
    
    return (
      <div>
        <h1>Meetupz</h1>
        <ul className="collection">
          {meetupItems}
        </ul>
      </div>
    );
  }
}

export default Meetupz;
