import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import './style.scss';

const { TabPane } = Tabs;

class Personal extends Component {
  render() {
    return (
      <div className="prosonal-wrap">
        <Tabs defaultActiveKey="1" tabPosition="left">
          <TabPane tab="个人中心" key="1">Content of Tab Pane 1</TabPane>
          <TabPane tab="基本设置" key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="安全中心" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
      </div>
    );
  }
}

export default connect(null, null)(Personal);
