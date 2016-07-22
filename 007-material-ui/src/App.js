import React from 'react';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';

import DatePicker from 'material-ui/DatePicker';


// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();
class App extends React.Component {
  getChildContext(){
    return {muiTheme:getMuiTheme()};
  }
  render () {
    const style={
      margin:"10px",
    }
    return(
      <div>
        <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      <RaisedButton label="确 定" style={style} backgroundColor="yellow"/>
      <DatePicker hintText="出生日期" mode="landscape" container="inline"/>
      <RaisedButton label="取 消" style={style} backgroundColor="#202020" labelColor="#fff"/>

      </div>
    )
  }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
export default App;
