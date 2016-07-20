import React,{Component} from 'react';


class Card extends Component{
  constructor(props) {
    super(props);
    this.state={
      shadow:false
    }
  }
  mouseEnter(){
    this.setState({
      shadow:!this.state.shadow
    })
  }

  render(){
    var hasShadow = this.state.shadow ? "3px 3px 20px rgba(0,0,0,0.4)":"none";
    console.log(this.state.shadow);
    let styles={
      root:{
        width:"60%",
        height:"100px",
        margin:"20px auto",
        boxShadow:hasShadow,
        cursor:"pointer",
        transition:"all 0.3s",
        borderRadius:"20px",
      },
      left:{
        float:"left",
        width:"20%",
        height:"100px",
        backgroundColor:"#DC143C",
        textAlign:"center",
        lineHeight:"100px",
        color:"#fff",
        fontSize:"40px",
        borderRadius:"20px 0 0 20px",
      },
      right:{
        float:"left",
        width:"80%",
        height:"100px",

      },
      title:{
        margin:"15px 20px",
        fontSize:"22px",
        color:"#212121",
      },
      date:{
        margin:"0 20px",
        fontSize:"14px",
        color:"#727272"
      }
    }
    return(
      <div style={styles.root} onMouseEnter={this.mouseEnter.bind(this)} onMouseLeave={this.mouseEnter.bind(this)}>
        <div style={styles.left}>{this.props.index}</div>
        <div style={styles.right}>
          <h3 style={styles.title}>{this.props.title}</h3>
          <p style={styles.date}>{this.props.date}</p>
        </div>
      </div>
    )
  };
}

Card.defaultProps={
  index:1,
  title:"这里输入标题",
  date:"日期写在这里"
}
Card.propTypes={
  index:React.PropTypes.number.isRequired,
  title:React.PropTypes.string.isRequired,
  date:React.PropTypes.string.isRequired
}
export default Card;
