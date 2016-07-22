###组件传递属性
  - this.props.属性名
      在调用组件的时候可以自定义属性，通过this.props.拿到自定义属性
      <Button title="按钮"/>

###通过传递属性改变组件的样式
```
let style={
  backgroundColor:this.props.backgroundColor,
  borderRadius:this.props.borderRadius
}
```
  调用组件时候，添加自定义属性
```
  <Button title="click"/>
```

###组件的默认样式
*要写在class外边*
```
Button.defaultProps={
  title:"默认标题",
  backgroundColor:"#727272",
  borderRadius:"5px",
  color:"#212121"
};
```

###传递属性的规则类型
*要写在class外边*
```
Button.propTypes={
  title:React.PropTypes.string.isRequired
}
```
