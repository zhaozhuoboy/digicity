## react生命周期


#### 项目运行步骤
```
$ npm start
```

### 初始化

#### 构造函数，在这里设置默认初始状态state
```js
constructor(){
  super();
  this.state={ }
  alert('初始化函数 最先被执行');
}
```
#### 组件渲染之前执行
```js
componentWillMount(){
  alert('组件渲染之前执行，也就是此函数执行完毕之后 render函数才会被执行')
}
```
#### 组件渲染完之后执行
```js
componentDidMount(){
  alert('组件渲染完之后执行')
}
```

### 更新

*当state发生变化时候，自动调用shouldComponentUpdate(nextProps,nextState)
函数返回true 允许组件更新，返回false则阻止组件更新，之后调用 componentWillUpdate()函数 然后是render()渲染态更新之后的组件最后调用 componentDidUpdate()*


```js
shouldComponentUpdate(nextProps,nextState){
  console.log('允许更新，下一个state是',nextState);
  return true;
}
componentWillUpdate(nextProps,nextState){
    console.log('组件将要更新，下一个state是', nextState);
}
componentDidUpdate(prevProps,prevState){
    console.log('组件更新完成，上一个state是' , prevState);
}
```

```js
componentWillReceiveProps(){
  console.log('有属性更新啦！！')
}
```
[参考资料](http://reactjs.cn/react/docs/component-specs.html)


#### 销毁组件
```js
constructor(){
  super();
  this.state={
    num:1,
    xiaohui:false
  }
}
```
*设置一个初始状态销毁在render函数中做判断，render函数中return null 这个组件就会被销毁*

```js
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

```
