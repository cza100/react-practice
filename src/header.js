import React from "react";
import { Row, Col } from "antd";
import { GithubOutlined } from "@ant-design/icons";

const Header = () => (
  <header>
    <Row align="middle" className="header-wrapper">
      <Col span={6}>
        <Row align="middle">
          <Col style={{ marginLeft: 20, marginRight: 20 }}>
            <img alt="logo" src="/logo.png" height={50} width={50} />
          </Col>
          <Col>
            <h1 className="header-title">React Practice</h1>
          </Col>
        </Row>
      </Col>
      <Col flex="auto">
        <Row justify="end" align="middle">
          <Col>
            <a href="github.com" target="_blank">
              <GithubOutlined
                style={{
                  fontSize: "2rem",
                  marginRight: 20,
                  marginLeft: 20
                }}
              />
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  </header>
);

export default Header;
