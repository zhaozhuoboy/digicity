import React, { PropTypes } from 'react'

class MyDemo extends React.Component {
  constructor(props){
    super(props);
    this.state={
      opacity:1,
    }
    //alert("这是初始化函数");
  }
  componentWillMount(){
    //alert('组件将要被加载');
  }
  render () {
    return(
      <div style={this.state}>
        这是一个组件
      </div>
    )
  }
  componentDidMount(){
  //  alert('组件加载完成')
  //this.interval = setInterval(this.change.bind(this),60);
  }
  change(){
    this.setState({opacity:this.state.opacity > 0 ? this.state.opacity - 0.1 : 1})
  }
  
}

export default MyDemo;
