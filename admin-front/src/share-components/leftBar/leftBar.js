
import React,{Component} from 'react';
import { Menu, Icon, Switch } from 'antd';
import { Layout } from 'antd';
import "./leftBar.css"
import {Link } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
/**
 * left menu bar
 * @authoror:czhu2
 * @date: 2018-08-23
 */
class LeftBar extends Component{
  state = {
    collapsed: false,
    mode: 'inline',
    theme: 'dark',
    current:1,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  changeMode = (value) => {
    this.setState({
      mode: value ? 'vertical' : 'inline',
    });
  }

  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  
    render() {
      return (
        <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
        theme={this.state.theme}
      >
        <div className="logo" ></div>
        <Switch onChange={this.changeMode}  checked={this.state.mode !== 'inline'} />
        <span className={this.state.theme == "dark"?"light_span":"light_dark"}>模式</span>&nbsp;&nbsp;
        <Switch onChange={this.changeTheme}  checked={this.state.theme === 'dark'}/> 
        <span className={this.state.theme == "dark"?"light_span":"light_dark"}>主题</span>
        <br />
        <br />
        <Menu 
          defaultOpenKeys={['sub1']}
          mode={this.state.mode}
          theme={this.state.theme}
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>首页</span>
            <Link to="/"></Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
           <span>topics</span>
           <Link to="/topics"></Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={<span><Icon type="user" /><span>User</span></span>}
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={<span><Icon type="team" /><span>Team</span></span>}
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
           <span>About</span>
           <Link to="/about"></Link>
          </Menu.Item>
        </Menu>
      </Sider>
      );
    }
  }


  
export default LeftBar;