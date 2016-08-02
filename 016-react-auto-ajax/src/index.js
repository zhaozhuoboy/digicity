import React,{Component} from 'react';
import {render} from 'react-dom';
import App from './App';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './reset.css';

// axios.get('https://api.github.com/users/zhaozhuoboy/repos')
//      .then(function(res){
//        if(res.status == 200){
//          console.log('获取成功',res);
//          for(let i = 0 ;i<res.data.length;i++){
//            document.write(res.data[i].name+ "&nbsp;&nbsp;&nbsp;&nbsp;"+ "<br />");
//          }
//        }else{
//          console.log('获取数据失败');
//        }
//      })
class MyApp extends Component{
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render(){
    return(
       <App />
    )
  }
}


MyApp.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
render(<MyApp />,document.getElementById('root'));
