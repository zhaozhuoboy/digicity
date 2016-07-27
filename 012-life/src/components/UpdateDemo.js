import React, { PropTypes } from 'react';

class UpdateDemo extends React.Component {
  constructor(){
    super();
    this.state={
      num:0
    }
  }
  componentWillMount(){
    console.log('组件将要挂载');
  }
  componentDidMount(){
    console.log('组件渲染完成');
  //  this.interval = setInterval(this.change.bind(this),1000);
  }
  render () {
    console.log('render');
    return(
      <div>
          <p>当前state:{this.state.num}</p>
          <p>传过来的props：{this.props.value}</p>
      </div>
    )
  }
  change(){
    this.setState({
      num:this.state.num +1
    })
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('允许更新，下一个state是',nextProps,nextState);
    return true;
  }
  componentWillUpdate(nextProps,nextState){
      console.log('组件将要更新，下一个state是', nextProps,nextState);
  }
  componentDidUpdate(prevProps,prevState){
      console.log('组件更新完成，上一个state是' ,prevProps, prevState);
  }
  componentWillReceiveProps(){
    console.log('有新的属性更新了')
  }
}

export default UpdateDemo;
