import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerRouter from "./router"
import LeftBar from './share-components/leftBar-collapse-bottom/leftBar';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Sider, Content } = Layout;


class App extends Component {

  render() {
    return (
      <Layout className="app-wrapper" >

       <LeftBar />

        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}


export default App;
