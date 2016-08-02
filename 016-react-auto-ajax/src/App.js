import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import isEmpty from 'lodash/fp/isEmpty';
import UserInfo from './UserInfo';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      user:{}
    }
  }
componentDidMount(){
    axios.get(`https://api.github.com/users/zhaozhuoboy`)
          .then((res) => {
            console.log(res.data);
              this.setState({user:res.data})
            })
          .catch((res) => {
              console.log(res);
            })
  }
  render () {
    let styles={
      container:{
        width:"400px",
        margin:"0 auto"
      },
      btn:{
        marginLeft:"30px"
      }
    }
    let GitHubInfo;

    if(!isEmpty(this.state.user)) {
      GitHubInfo = (
        <UserInfo userInfo={this.state.user} />
      );
    }
    return(
      <div>
        <div className="container" style={styles.container}>

        </div>
        { GitHubInfo }
      </div>
    )
  }
}

export default App;
