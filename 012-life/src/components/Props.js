import React, { PropTypes } from 'react';
import UpdateDemo from './UpdateDemo';

class Props extends React.Component {
  constructor(){
    super();
    this.state={
      num:1,
      xiaohui:false
    }
  }
  handleClick(){
    this.setState({
      num:this.state.num + 1
    })
  }
  xiaohui(){
    this.setState({
      xiaohui:true
    })
  }
  render () {
    if(this.state.xiaohui){
      return null;
    }
    return(
      <div>
        <UpdateDemo value={this.state.num}/>
        <button onClick={this.handleClick.bind(this)}>每次加1</button>
        <button onClick={this.xiaohui.bind(this)}>销毁组件</button>
      </div>
    )
  }
}

export default Props;
