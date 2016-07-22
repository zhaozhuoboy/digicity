import React ,{Component} from 'react';
import Fingerprint from 'material-ui/svg-icons/action/fingerprint';

import FontIcon from 'material-ui/FontIcon';


class Icons extends React.Component {
  render () {
    return(
      <div>
        <Fingerprint style={{color:"red"}}/>
        <FontIcon className="material-icons" color="#EEA2AD">home</FontIcon>
        <FontIcon className="material-icons" color="#f00">favorite</FontIcon>
        <FontIcon className="material-icons" color="#212121">menu</FontIcon>
        <FontIcon className="material-icons" color="blue" hoverColor="red">flight_takeoff</FontIcon>
      </div>
    )
  }
}

export default Icons;
