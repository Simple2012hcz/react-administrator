
import React,{Component} from 'react';
import { Menu, Icon, Switch } from 'antd';
import { Layout } from 'antd';
import "./leftBar.css"
import {Link } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
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
    openKeys: ['menu_0'],
    navList:[],
    rootSubmenuKeys:[],
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
    let self = this;
    let state = self.state;

    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  componentDidMount(){
    let self = this;
    let state = self.state;
    let arr = [{
      title:'Navigation One',
      icon:'mail',
      children:[
        {
          title:'Option 1',
          router:'/'
        },
        {
          title:'Option 2',
          router:'/'
        },
        {
          title:'Option 3',
          router:'/'
        },{
          title:'Option 4',
          router:'/'
        }
      ]      
    },
    {
      title:'Navigation Two',
      icon:'appstore',
      children:[
        {
          title:'Option 5',
          router:'/'
        },
        {
          title:'Option 6',
          router:'/'
        },
        {
          title:'Option 7',
          router:'/'
        },{
          title:'Option 8',
          router:'/'
        }
      ]      
    },{
      title:'Navigation Three',
      icon:'setting',
      children:[
        {
          title:'Tom',
          router:'/about',
        },
        {
          title:'Jack',
          router:'/topic',
        }
      ]
    }
  ]; 
     let size = arr.length;
      let rootSubmenuKeys = [];
      for(let i = 0;i < size;i++){
        rootSubmenuKeys.push("menu_"+i);
      }
      self.setState({
        navList:arr,
        rootSubmenuKeys:rootSubmenuKeys,
      });
  }
  /**
   * 获取菜单
   */
  getSubMenu = (item,index) => {
    let self = this;
    let state = self.state;
    let menu = null;
    if(item.children && item.children.length > 0){
      menu =   <SubMenu
        key= {`menu_`+index}
        title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}
        >
        {
          item.children.map((subItem,subIx) => {
            return (
              <MenuItem key={`menu_`+index + "_sub_" + subIx}>
              {subItem.title}
              <Link to={subItem.router}></Link>
              </MenuItem>
            )
          })
        }
      </SubMenu>
    }else{
      menu =  <MenuItem key= {`menu_`+index}>
      <Icon type={item.icon} />
      <span>{item.title}</span>
      <Link to={item.router}></Link>
    </MenuItem>
    }
      return menu;
  }
  

  
    render() {
      let self = this;
      let state = self.state;
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
          mode={this.state.mode}
          theme={this.state.theme}
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
        >
        {
          state.navList.map((item,index) => {
            return self.getSubMenu(item,index)
          })
         }
          {
            /**
             *   <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
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
             */
          }
        </Menu>
      </Sider>
      );
    }
  }


  
export default LeftBar;