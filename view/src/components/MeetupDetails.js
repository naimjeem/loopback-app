import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MeetupDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: ''
    }
  }

  componentWillMount() {
    this.getMeetup();
  }
  
  getMeetup() {
    const meetupId = this.props.match.params.id;
    console.log(meetupId);
    fetch(`http://localhost:3000/api/meetupzs/${meetupId}`)
      .then(res => {
         res.json().then(meetupInfo => {
          this.setState({ details: meetupInfo }, () => {
            console.log(this.state);
          });
        });
      });
  }

  render() {
    return (
      <div>
        <br/>
        <Link className="btn grey" to="/">Back</Link>
        <h1>{this.state.details.name}</h1>
        <ul className="collection">
          <li className="collection-item">City; {this.state.details.city}</li>
          <li className="collection-item">Address:  {this.state.details.address}</li>
        </ul>
      </div>
    );
  }
}

export default MeetupDetails;
