import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';

import HeaderContent from './view/layout/header';
import Aside from './view/layout/aside';
import Personal from './view/pages/personal';

import StandardPage from './view/pages/listPage/standardPage';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Aside />
        <Layout>
          <Header>
            <HeaderContent />
          </Header>
          <Content>
            <Route path="/" exact render={() => <div>main</div>} />
            <Route path="/form" render={() => <div>form</div>} />
            <Route path="/personal" component={Personal} />
            <Route path="/standardPage" component={StandardPage} />
          </Content>
        </Layout>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
