import React from 'react';
import { connect } from 'react-redux';
import {
  Radio, Form, Select, Input, Button,
} from 'antd';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

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

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{ background: '#fff' }}>
        <RadioGroup onChange={e => this.getTableStyle(e)} defaultValue="dialog">
          <RadioButton value="dialog">弹框编辑</RadioButton>
          <RadioButton value="inline">行内编辑</RadioButton>
        </RadioGroup>
      </div>
    );
  }
}
const WrappedStandardPage = Form.create({})(StandardPage);

export default connect(null, null)(WrappedStandardPage);
