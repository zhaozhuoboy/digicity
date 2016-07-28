## React-router

### 安装 react-router 包
```
npm install --save-dev react-router
```

在App.js中引入 Link 来写导航
```js
import { Link } from 'react-router';
```

```js
//app.js
class App extends Component {
  render() {
    return (
      <div className="app-wrap">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/account">Account</Link></li>
        </ul>
        {this.props.children}
        <div>My Footer</div>
      </div>
    );
  }
}
export default App;

```

### 编写路由规则文件  routes.js
```js
import React from 'react';
import {Route ,IndexRoute } from 'react-router';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Hello from './components/Hello';


export default (
  <Route path="/" component={App}>
    <Route path="/home" component={Home} />
    <Route path="about" component={About} />
    <Route path="hello" component={Hello} />
    <IndexRoute component={Home}>
  </Route>
)
//IndexRoute  默认指向home组件

```

### index.js文件中 引入 Router browserHistory 和路由规则

```js
import { Router, browserHistory } from 'react-router';
import routes from './routes';

```

*render中渲染的是<Router history={browserHistory}>{routes}</Router> 而不是<App />*

```js

render(
    <Router history={browserHistory}>{routes}</Router>
  , document.getElementById('root'));

```
