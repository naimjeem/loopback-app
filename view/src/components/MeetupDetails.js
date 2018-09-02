import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

const reqUrl = 'http://localhost:3000/api/meetupzs/';

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
    fetch(reqUrl + meetupId)
      .then(res => {
         res.json().then(meetupInfo => {
          this.setState({ details: meetupInfo }, () => {
            console.log(this.state);
          });
        });
      });
  }

  onDelete() {
    const meetupId = this.state.details.id;
    const options = {
      method: 'DELETE',
    };
    fetch(reqUrl + meetupId, options)
      .then(res => {
        console.log(res);
        console.log(this.props.history);
        return <Redirect to='/dashboard' />;
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <br />

        <div className="row">
          <div className="col s12">
            <div className="col s6">
              <Link className="btn grey" to="/">Back</Link>
            </div>
            <div className="col s6">
              <button className="btn-floating waves-effect waves-light blue">
                <i className="material-icons">edit</i>
              </button>
              <button onClick={this.onDelete(this)} className="btn-floating waves-effect waves-light red">
                <i className="material-icons">delete</i>
              </button>
            </div>
          </div>
        </div>

        <h1>{this.state.details.name}</h1>

        <ul className="collection">
          <li className="collection-item">City: {this.state.details.city}</li>
          <li className="collection-item">Address:  {this.state.details.address}</li>
        </ul>
      </div>
    );
  }
}

export default MeetupDetails;
