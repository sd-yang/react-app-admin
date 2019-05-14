import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Row, Col, Button, Icon, Badge, Avatar, Menu, Dropdown, Input,
} from 'antd';
import { action } from './store';
import './style.scss';

let handleFocus;
const menu = (
  <Menu>
    <Menu.Item key="0">
      <Icon type="setting" />
      个人设置
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">
      <Icon type="logout" />
      退出登录
    </Menu.Item>
  </Menu>
);

const Header = ({
  toggleCollapsed, collapsedState, focusSearch, handleSearch,
}) => {
  const handleToggleIcon = () => {
    handleSearch(true);
    setTimeout(() => {
      handleFocus.focus();
    }, 500);
  };

  return (
    <Row>
      <Col span={2} style={{ float: 'left' }}>
        <Button onClick={() => toggleCollapsed(collapsedState)} className="collapsed-btn">
          <Icon type={collapsedState ? 'menu-unfold' : 'menu-fold'} />
        </Button>
      </Col>
      <Col style={{ float: 'right', marginRight: 20 }}>
        <div className="header-right">
          <div
            className="search"
          >
            <Icon
              type="search"
              className={focusSearch ? 'search-icon move-icon' : 'search-icon'}
              onClick={() => handleToggleIcon()}
              onKeyDown={handleSearch}
            />
            <Input
              onChange={e => console.log(e)}
              ref={(e) => { handleFocus = e; }}
              className={focusSearch ? 'ipt move-ipt' : 'ipt'}
              onBlur={() => handleSearch(false)}
            />
          </div>
          <div>
            <Badge count={1} offset={[2, -2]}>
              <Icon type="bell" style={{ fontSize: '16px' }} />
            </Badge>
          </div>
          <Dropdown overlay={menu} placement="bottomRight">
            <div>
              <Avatar icon="user" size="small" style={{ margin: '0 10px 6px 0' }} />
              <span>Admin</span>
            </div>
          </Dropdown>
        </div>
      </Col>
    </Row>
  );
};

const mapStateToProps = state => ({
  focusSearch: state.header.focusSearch,
  collapsedState: state.header.asideCollapsed,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleCollapsed: action.toggleCollapsed,
  handleSearch: action.focusSearch,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
