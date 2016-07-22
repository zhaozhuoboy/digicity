import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import Button from './Button.js';
import Icons from './Icons.js';

let myTheme={
  palette: {
    primary1Color: "#009688",
    primary2Color: "#00796B",
    primary3Color: "#4DB6AC"
  },
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: ['nihao','zhaozhuo']
    };
  }

  getChildContext() {
     return {muiTheme: getMuiTheme(myTheme)};
   }

  handleUpdateInput (value) {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render(){

    return(
      <div>
        <Button />

      </div>
    )
  }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
export default App;
