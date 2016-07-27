import React from 'react';
import img from './images/2.png';



class App extends React.Component {


  render(){
    let a = this.props.children;
    console.log(this.props.children);
    let Arr =[];
    for(let i = 0;i<a.length;i++){
      Arr.push(a[i]);
    }
    let styles ={
      backgroundImage:"url("+ img +")",
      width:"500px",
      height:"500px",
      

    }
    return(
      <div>
        <ol>
          {Arr}
        </ol>
        <img src={img}/>
      <div style={styles}>

      </div>

      </div>
    )
  }
}

export default App;
