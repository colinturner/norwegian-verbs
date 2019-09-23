import React, { Component } from "react";
import { Container, Row, Button } from "react-bootstrap";
import "./ChooseLanguagePage.css";
import norwayFlag from "../../../assets/norwayFlag.png";
import swedenFlag from "../../../assets/swedenFlag.png";
import denmarkFlag from "../../../assets/denmarkFlag.png";
import styled from "styled-components";
class ChooseLanguagePage extends Component {
  render() {
    const Header = () => (
      <>
        <h1>Let's begin.</h1>
        <h3>What are you learning?</h3>
      </>
    );

    const StyledButton = styled(Button)`
      border-radius: 40px;
      margin: 10px;
    `;

    const Language = styled.div`
      font-family: Bree Serif;
      font-size: 20px;
    `;

    const Quip = styled.div`
      font-family: Roboto;
    `;

    const FlagChoice = props => (
      <StyledButton
        disabled={!props.available}
        href="#learn"
        variant="light"
        className="flagButton"
      >
        <img
          className="imageFlagButton"
          src={props.flag}
          alt={`${props.flagName} flag`}
        />
        <Language>{props.language}</Language>
        <Quip>
          {props.available ? props.quip : "Under development! Check back soon."}
        </Quip>
      </StyledButton>
    );

    return (
      <>
        <Header />
        <Container>
          <Row>
            <FlagChoice
              flag={norwayFlag}
              flagName="Norwegian"
              language="Norwegian"
              available={true}
              quip="A fine choice."
            />
            <FlagChoice
              flag={swedenFlag}
              flagName="Swedish"
              language="Swedish"
              available={false}
              quip="How grand."
            />
            <FlagChoice
              flag={denmarkFlag}
              flagName="Danish"
              language="Danish"
              available={false}
              quip="Get ready to gargle sounds."
            />
          </Row>
        </Container>
      </>
    );
  }
}

export default ChooseLanguagePage;