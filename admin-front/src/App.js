import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerRouter from "./router"
import LeftBarBtnBottom from './share-components/leftBar/leftBar';

import { Layout, Breadcrumb, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const { Header, Sider, Content,Footer } = Layout;


class App extends Component {

  render() {
    return (
      <Router>
          <Layout className="app-wrapper" >
          <LeftBarBtnBottom /> 
          <Layout>
              <Header style={{ background: '#fff', padding: 0 }}></Header>
              
              <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                
                <Content style={{ padding: 24, background: '#fff', minHeight: 580 }}>
                  <CustomerRouter />
                </Content>
              </Content>

              <Footer style={{ textAlign: 'center' }}>
                Copright ©2018 Created by xxxx
              </Footer>

            </Layout>
         </Layout>
      </Router>
    );
  }
}


export default App;
