import React,{Component} from 'react';

class Button extends Component{
  render(){
    let style={
      backgroundColor:this.props.backgroundColor,
      borderRadius:this.props.borderRadius,
      outline:"none",
      padding:"4px 10px",
      cursor:"pointer",
      color:this.props.color
    }
    return(
        <button style={style}>{this.props.title}</button>
    );
  }
}



Button.defaultProps={
  title:"默认标题",
  backgroundColor:"#727272",
  borderRadius:"5px",
  color:"#212121"
};
Button.propTypes={
  title:React.PropTypes.string.isRequired,
  backgroundColor:React.PropTypes.string.isRequired,
  borderRadius:React.PropTypes.string.isRequired,
  color:React.PropTypes.string.isRequired,
}
export default Button;
