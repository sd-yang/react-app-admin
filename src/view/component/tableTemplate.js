import React from 'react';
import { Table } from 'antd';

const defaultOptions = {
  editorInRow: false, // 行内编辑
  border: true, // 边框
  size: 'default', // 表格大小
  showHeader: false, // 显示表头
  footer: false, // 显示表尾
  rowSelection: undefined, // 可选择
};

class TableTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { dataSource, columns, options } = this.props;
    if (!options) options = defaultOptions;
    if (options) {
      Object.keys(defaultOptions).forEach((item) => {
        if (!options[item]) {
          options[item] = defaultOptions[item];
        }
      });
    }
    return (
      <Table
        {...options}
        dataSource={dataSource}
        columns={columns}
      />
    );
  }
}

export default TableTemplate;
