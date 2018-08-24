
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
    navList:[] , //导航菜单
  };
  
  componentDidMount(){
    let self = this;
    self.setState({
      navList:[{
        title:'首页',
        icon:'pie-chart',
        router:'/'        
      },
      {
        title:'desktop',
        icon:'desktop',
        router:'/topics'
      },{
        title:'user',
        icon:'user',
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
    ]
    })
  }

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
          defaultOpenKeys={['menu_0']}
          mode={this.state.mode}
          theme={this.state.theme}
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
        >
         {
          state.navList.map((item,index) => {
            return self.getSubMenu(item,index)
          })
         }
        </Menu>
      </Sider>
      );
    }
  }


  
export default LeftBar;