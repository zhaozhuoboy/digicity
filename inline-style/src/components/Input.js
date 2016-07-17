import React ,{Component} from 'react';
import Button from './Button.js';

class Input extends Component{
  getStyles(){
    return{
      root:{
        width:"400px",
        margin:"50px auto"
      },
      inputbox:{
        display:"block",
        border:"1px solid #66CDAA",
        borderRadius:"5px",
        paddingLeft:"8px",
        height:"30px",
        lineHeight:"30px",
        color:"#000",
        outline:"none",
        margin:"10px 0px",
        fontSize:"18px"
      },
      buttons:{
        marginTop:"20px",
      }
    }
  }
  render(){
    const styles=this.getStyles();

    return(
      <div style={styles.root}>
        <input type="text"  style={styles.inputbox} />
        <input type="password" style={styles.inputbox} />
        <div style={styles.buttons}>
          <Button>登 陆</Button>
          <Button>注 册</Button>
        </div>

      </div>
    )
  }
}

export default Input;
