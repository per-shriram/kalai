import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Assignment from './components/Assignment';
import Student from './components/Student';
import Navigation from './components/Navigation';
import './Root.css';

export default class Hello extends React.Component {

  public render() {
    return (
    <BrowserRouter>
      <div className='root-container'>
        <Navigation />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/students' component={Student} />
          <Route path='/assignments' component={Assignment} />
        </Switch>
      </div>
    </BrowserRouter>);
  }
}
