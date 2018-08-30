import React, { Component } from 'react';

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
    fetch('http://localhost:3000/api/meetupzs')
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
        <li className="collection-item">{meetup.name}</li>
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
