import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { Layout, Menu, Row, Col } from "antd";

import { HomeOutlined, ApiOutlined } from "@ant-design/icons";

import Home from "./pages/home";
import UseAsync from "./pages/use_async";

const { Content } = Layout;
const { SubMenu } = Menu;

const Main = () => {
  let history = useHistory();

  return (
    <Row>
      <Col xs={24} sm={24} md={6} lg={6} xl={5} xxl={4}>
        <Menu
          style={{ width: 256 }}
          mode="inline"
          onSelect={item => {
            history.push(item.key);
          }}
        >
          <Menu.Item key="/" icon={<HomeOutlined />}>
            首页
          </Menu.Item>
          <SubMenu key="hook" icon={<ApiOutlined />} title="Hook">
            <Menu.Item key="/hook/use-async">useAsync</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
        </Menu>
      </Col>
      <Col xs={24} sm={24} md={18} lg={18} xl={19} xxl={20}>
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/hook/use-async">
              <UseAsync />
            </Route>
          </Switch>
        </Content>
      </Col>
    </Row>
  );
};

export default Main;
