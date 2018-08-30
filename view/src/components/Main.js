import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './About';
import Meetupz from './Meetupz';
import MeetupDetails from './MeetupDetails';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Meetupz} />
          <Route exact path='/about' component={About} />
          <Route exact path='/meetups/:id' component={MeetupDetails} />
        </Switch>
      </main>
    );
  }
}

export default Main;
