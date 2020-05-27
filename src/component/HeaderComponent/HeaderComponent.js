import React from "react";
import { Layout, Row, Col } from "antd";

import SearchComponent from "../../component/SearchComponent/SearchComponent";
import Logo from '../Logo/Logo';


const { Header } = Layout;

const HeaderComponent = () => {

  return (
        <Header>
          <Row  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={1}>
              <Logo />
            </Col>
            <Col className="gutter-row" span={23}>
              <SearchComponent />
            </Col>
          </Row>
        </Header>
  );
};

export default HeaderComponent;

