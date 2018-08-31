import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const reqUrl = 'http://localhost:3000/api/meetupzs';

class AddMeetup extends Component {

  addMeetup(meetupData) {
    const options = {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(reqUrl, options)
      .then(res => res.json())
      .then(() => {
        this.props.history.push('/');
      })
      .catch(err => console.log(err));

      
  }

  onSubmit(event) {
    const meetupData = {
      name: this.refs.name.value,
      city: this.refs.city.value,
      address: this.refs.address.value
    };
    this.addMeetup(meetupData);

    event.preventDefault();
  }

  render() {
    return (
      <div id="modal1" className="modal">
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="modal-content">
            <h4>Add New</h4>
            <div className="input-field">
              <input type="text" name="name" ref="name" />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field">
              <input type="text" name="city" ref="city" />
              <label htmlFor="city">City</label>
            </div>
            <div className="input-field">
              <input type="text" name="address" ref="address" />
              <label htmlFor="address">Address</label>
            </div>      
          </div>
          <div className="modal-footer">
            <input type="submit" value="Save" className="btn blue" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddMeetup;
