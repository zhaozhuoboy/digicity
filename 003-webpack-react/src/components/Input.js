import React,{Component} from 'react';

class Input extends Component {
  render(){
    var style={
      width:"300px",
      height:"50px",
      borderRadius:"10px",
      border:"1px solid #42004d",
      fontSize:"20px",
      paddingLeft:"5px"
    };
    return(
      <div>
        <input type="text" style={style}/>
      </div>
    );
  }
}
export default Input;
