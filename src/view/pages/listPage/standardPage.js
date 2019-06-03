import React from 'react';
import { connect } from 'react-redux';
import {
  Radio, Form, Input, Button, Row, Col, Icon,
} from 'antd';
import StandarList from './component/standarList';
import './standarPage.scss';


const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Search } = Input;
const data = [
  {
    title: 'Ant Design Title 1',
    loading: false,
    name: 'antd',
  },
  {
    title: 'Ant Design Title 2',
    loading: false,
    name: 'antd',
  },
  {
    title: 'Ant Design Title 3',
    loading: false,
    name: 'antd',
  },
  {
    title: 'Ant Design Title 4',
    loading: false,
    name: 'antd',
  },
];

class StandardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isColumnEditor: false,
    };
  }

  getTableStyle = (e) => {
    const flag = e.target.value !== 'dialog';
    this.setState({ isColumnEditor: flag });
  }

  handleSearchData = (value) => {
    console.log(value);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="standar-list">
        <Row className="header-title">
          <Col className="fl-lt">
            标准列表
          </Col>
          <Col className="fl-rt">
            <RadioGroup onChange={e => this.getTableStyle(e)} defaultValue={1}>
              <RadioButton value={1}>全部</RadioButton>
              <RadioButton value={2}>进行中</RadioButton>
              <RadioButton value={3}>已结束</RadioButton>
            </RadioGroup>
            <Search
              placeholder="请输入"
              onSearch={this.handleSearchData}
              style={{ width: 240, marginLeft: 20 }}
            />
          </Col>
        </Row>

        <div className="bg-color list-wrap">
          <Row>
            <Button type="dashed" block>
              <Icon type="plus" />
              添加
            </Button>
          </Row>
          <StandarList list={data} />
        </div>
      </div>
    );
  }
}
const WrappedStandardPage = Form.create({})(StandardPage);

export default connect(null, null)(WrappedStandardPage);
