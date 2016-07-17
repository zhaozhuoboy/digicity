import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import Input from './components/Input.js';

class App extends Component{
  render(){
    return(
      <div>
        <Input />
      </div>
    );
  }
}
ReactDOM.render(<App />,document.getElementById('app'));
