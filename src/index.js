import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import logo from './logo.png'
import { Layout, Menu, Avatar, Switch, Button } from 'antd';
import {
  StarFilled,
  SettingFilled,
  UserOutlined,
  BellFilled
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null}  className="sider" style={{width: '30%'}}>
          <div className="d-flex flex-row pt-2 pl-3">
              <Avatar src={logo} />
              <h6 style={{padding:7 }}>VYORIUS</h6>
          </div>
          <Avatar size={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4A9OCZw8_C5JE790_AZw0v12xZ_sIAtgGVYphJAm53qBZQDjX&usqp=CAU" className="mx-auto d-block"/>
          <h6 className="text-center">MICHEL</h6>
        </Sider>
        <Layout className="site-layout pr-2" style={{width: '70%'}}>
          <Header className="site-layout-background" style={{ padding: 2 }}>
            <div className="p-1">
              <h3 className="float-left light">MAINTANCE SUMMARY</h3>
              <SettingFilled className="float-right"  style={{ fontSize: '20px',padding: 10}}/>
              <BellFilled className="float-right"  style={{ fontSize: '20px',padding: 10}}/>
              <UserOutlined className="float-right"  style={{ fontSize: '20px',padding: 10}}/>
              <div className="md-form mt-0 float-right">
                <input className="form-control" style={{ borderLeft: 'white', borderRight:'white', borderTop:'white', borderRadius: 0}} type="text" placeholder="Search.." aria-label="Search"></input>
              </div>         
                
        </div>
            
          </Header>
          
          <Content
            className="site-layout-background pt-0"
            style={{
              marginLeft: 1,
              marginRight: 1,
              maxHeight: '500px',
              height: 'auto'
            }}
          >  
          <hr className="new"></hr>
          
          <div className="pt-0" style={{width: '100%', height: 55 , maxHeight : '500px'}}>
            <div className="float-left pr-5 mr-4">
            <StarFilled style={{ fontSize: '35px',padding: 10, color: 'pink'}} className="float-left align-middle"/>
            <h6 className="float-left align-middle pr-2 pt-3">Aircraft Down</h6>
            <div className="float-left pt-3">
              <Switch  size="small" />
            </div>
            </div>
            <div className="float-left pr-5 mr-4 ">
            <StarFilled style={{ fontSize: '35px',padding: 10, color: 'yellow'}} className="float-left align-middle"/>
            <h6 className="float-left align-middle pr-2 pt-3">Inseption Down</h6>
            <div className="float-left pt-3">
              <Switch  size="small" />
            </div>
            
            </div>
            <div className="float-left pr-5 mr-4 ">
            <StarFilled style={{ fontSize: '35px',padding: 10, color: 'green'}} className="float-left align-middle"/>
            <h6 className="float-left align-middle pr-2 pt-3">Aircraft Up</h6>
            <div className="float-left pt-3">
              <Switch  size="small" />
            </div>
            </div>
          </div>
          </Content>
          <div className="pt-1 ecosystem" style={{width: '100%', height: 55}}>
          <h3 className="float-left ecosystem pl-2 pt-1 align-middle">Ecosystem</h3>
          <div className="float-right pr-2 pt-1 align-middle">
          <Button  size='large' className="findEcosystem" style={{border: 0}}>
          Find-Ecosystem
          </Button>
          </div>
          </div>
        </Layout>
      </Layout>
    );
  }
}

ReactDOM.render(<SiderDemo />, document.getElementById('container'));