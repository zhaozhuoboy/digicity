import React,{Component} from 'react';


class Button extends Component {
  getStyles(){
    return{
      button:{
        width:"60px",
        height:"30px",
        lineHeight:"25px",
        borderColor:"#76EEC6",
        outline:"none",
        borderRadius:"5px",
        backgroundColor:"#66CDAA",
        cursor:"pointer",
      }
    }
  }
  render(){
    const styles = this.getStyles();
    return(
        <button style={styles.button}>{this.props.children}</button>
    );
  }
}

export default Button;
