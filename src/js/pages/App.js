import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Welcome React</h1>
        <ul>
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}
