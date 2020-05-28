import React from "react";
import { Layout, Row, Col } from "antd";

import SearchComponent from "../../component/SearchComponent/SearchComponent";
import Logo from '../Logo/Logo';

import { useSelector, useDispatch } from "react-redux";


const { Header } = Layout;

const HeaderComponent = () => {

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const clearSongList = () => {
    dispatch({ type: "CLEAR_SONGS" });
  };

  return (
    <Header>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col style={{cursor: 'pointer'}} className="gutter-row" span={1} onClick={clearSongList}>
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

