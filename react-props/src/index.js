import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import Card from './components/Card.js';


let cards=[
  {title:"第一天学习html",date:"2016-07-18"},
  {title:"第二天学习css",date:"2016-07-20"},
  {title:"第三天学习javascript",date:"2016-07-23"},
  {title:"第四天学习react",date:"2016-07-23"},
];

class App extends Component{
  render(){
    let Cards =[];
    for(let i = 0;i<cards.length;i++){
      var j = i+1;
      Cards.push(
        <Card title={cards[i].title} date={cards[i].date} index={j} key={i}/>
      );
    }
    return(
      <div>
        {Cards}
      </div>
    );
  }
}
ReactDOM.render(<App />,document.getElementById('app'));
