import React from "react";
import { Col, Container, Row } from "reactstrap";
import chat from "../assets/icons/messenger.svg";
import lessons from "../assets/icons/lessons.svg";
import logo from "../assets/icons/code-republic-logo.png";
import {
  Link
} from "react-router-dom";


function Header() {
  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <div className="header">
            <img src={logo} className="header__logo" alt="logo" />
            <div className="header__buttons">
            <Link to={'/chat'}>
              <button className="header__button">
                <img src={chat} alt="chat-icon" />
              </button>
            </Link>
              <button className="header__button">
                <img src={lessons} alt="lessons-icon" />
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
