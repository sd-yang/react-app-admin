import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

import './style.scss';

const { Sider } = Layout;
const { SubMenu } = Menu;

const Aside = (props) => {
  const { asideCollapsed } = props;
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={asideCollapsed}
      id="components-layout-demo-custom-trigger"
      style={{ height: '100vh', overflow: 'auto' }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span>nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span>nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span>nav 3</span>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={(
            <span>
              <Icon type="mail" />
              <span>列表页</span>
            </span>
          )}
        >
          <Menu.Item key="5"><Link to="/">查询列表</Link></Menu.Item>
          <Menu.Item key="6">标准列表</Menu.Item>
          <Menu.Item key="7">卡片列表</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

const mapStateToProps = state => ({
  asideCollapsed: state.header.asideCollapsed,
});

export default connect(mapStateToProps, null)(Aside);
