import React, { PropTypes } from 'react'
import {Link } from 'react-router'

class App extends React.Component {

  render () {
      return(
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/hello">Hello</Link></li>
          </ul>
          {this.props.children}
        </div>
      )
  }
}

export default App;
