import React from 'react';
import {
  List, Avatar, Skeleton, Button,
} from 'antd';

const handleEditorList = (val, index) => {
  console.log(val, index);
};

const handleDeleteList = (val, index) => {
  console.log(val, index);
};

const StandarList = props => (
  <List
    itemLayout="horizontal"
    dataSource={props.list}
    pagination
    renderItem={(item, index) => (
      <List.Item actions={[
        <Button type="link" size="small" onClick={() => handleEditorList(item, index)}>edit</Button>,
        <Button type="link" size="small" onClick={() => handleDeleteList(item, index)}>delete</Button>,
      ]}
      >
        <Skeleton avatar title={false} loading={item.loading} active>
          <List.Item.Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
          <div>content</div>
        </Skeleton>
      </List.Item>
    )}
  />
);

export default StandarList;
