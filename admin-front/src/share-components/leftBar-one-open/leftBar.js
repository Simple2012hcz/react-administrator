
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
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  state = {
    collapsed: false,
    mode: 'inline',
    theme: 'dark',
    current:1,
    openKeys: ['sub1'],
   
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
  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
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
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          selectedKeys={[this.state.current]}
        >
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      );
    }
  }


  
export default LeftBar;