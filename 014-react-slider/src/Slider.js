import React, { PropTypes } from 'react';
import './slider.css';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      index:0
    }
  }
  componentDidMount(){
    this.interval = setInterval(this.turn.bind(this),3000);
  }
  onMouseOver(){
    clearInterval(this.interval);

  }
  onMouseOut(){
    this.interval = setInterval(this.turn.bind(this),3000);
  }
  turn(){
    if(this.state.index>2){
      this.setState({
        index:0
      })
    }else{
      this.setState({
        index:this.state.index + 1
      })
    }
    console.log(this.state.index);
  }
  next(){
    if(this.state.index>2){
      this.setState({
        index:0
      })
    }else{
      this.setState({
        index:this.state.index + 1
      })
    }
  }
  prve(){
    if(this.state.index > 0){
      this.setState({
        index:this.state.index - 1
      })
    }else{
      this.setState({
        index:3
      })
    }
  }
  render () {
    let styles={
      banner:{
        position:"relative",
        width:this.props.width,
        height:this.props.height,
        overflow:"hidden"
      },
      ul:{
        position:"absolute",
        width:"400%",
        left: - 100 * this.state.index + "%",
      },
      li:{
        width:"25%",
      }
    }
    // let liNode=[];
    // for (let i = 0;i<this.props.imgList.length;i++){
    //   liNode.push(
    //     <li key={i} style={this.styles.li}><img src={imgList[i]}/></li>
    //   );
    // }



    return(
      <div className="banner" style={styles.banner} onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}>
        <ul style={styles.ul}>
          <li><img src={img1}/></li>
          <li><img src={img2}/></li>
          <li><img src={img3}/></li>
          <li><img src={img4}/></li>
        </ul>
        <span className="prve" onClick={this.prve.bind(this)}>&lt;</span>
        <span className="next" onClick={this.next.bind(this)}>&gt;</span>
      </div>
    )
  }
}
Slider.defaultProps={
  width:"100vw",
  height:"600px"
}
Slider.propTypes={
  width:React.PropTypes.string.isRequired,
  height:React.PropTypes.string.isRequired,
}


export default Slider;
