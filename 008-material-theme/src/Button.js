import React ,{Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
class Button extends Component {
  constructor(props) {
  super(props);
  this.state = {open: false}
}
  click(){
    this.setState({
      open:!this.state.open
    })
  }
  render(){
    let show = this.state.open ? "block":"none";
    let style={
      position:"absolute",
      top:"0",
      bottom :"0",
      left:"0",
      right:"0",
      backgroundColor:"#000",
      opacity:"0.3",
      display:show
    }
    return(
      <div>
        <AppBar onLeftIconButtonTouchTap={this.click.bind(this)}
                title="This is My App"
                iconElementRight={
                  <IconMenu
                          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                          targetOrigin={{horizontal: 'right', vertical: 'top'}}
                          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                        >
                          <MenuItem primaryText="设置" />
                          <MenuItem primaryText="帮助" />
                          <MenuItem primaryText="退出" />
                  </IconMenu>}

          />
        <div style={style} onClick={this.click.bind(this)}></div>
        <Drawer open={this.state.open}>
          <MenuItem style={{textAlign:"center"}}>首页</MenuItem>
          <MenuItem style={{textAlign:"center"}}>登录</MenuItem>
          <MenuItem style={{textAlign:"center"}}>注册</MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default Button;
