import React from "react";
import styled from "styled-components";
import BluePNG from "../img/bluepng.png";
import BgStyle from "../img/bgStyle.png";
import LogoImg from "../img/style1.png";

const Section = styled.div`
  height: 90vh;
  background-color: #fff8f5;
  background-image: url(${BluePNG});
  background-repeat: no-repeat;
  background-position: 50% 90%, 100% 0;
  background-size: auto;
  border-radius: 0;
  position: relative;
`;
const Section2 = styled.div`
  background-image: url(${BgStyle});
  background-position: 110% 320%;
  background-repeat: no-repeat;
  background-size: auto;
`;
const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 100px;
  max-width: 48rem;
`;
const LogoCon = styled.div`
  display: flex;
  margin-bottom: 1.25rem;
`;
const Logo = styled.img`
  width: 100%;
  border-width: 0;
`;
const Title = styled.h2`
  font-size: 3rem;
  font-family: "Old Standard TT", serif;
  font-weight: 400;
  text-align: center;
  line-height: 1.25;
  margin-top: 1.25rem;
  justify-content: center;
`;
const Desc = styled.p`
  font-size: 0.875rem;
  text-align: center;
  line-height: 1.25rem;
  color: rgba(67, 72, 78, 0.7);
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
  font-weight: 300;
  line-height: 1.86em;
`;

const About = () => {
  return (
    <Section>
      <Section2>
        <Container>
          <LogoCon>
            <Logo src={LogoImg} />
          </LogoCon>
          <Title>Welcome to Home of Tranquility, Relaxation and Respite.</Title>
          <Desc>
            Everybody is looking for places where to relax and get more energy.
            In our wellness center silence, energy, beauty and vitality meet.
            The treatments we offer will refresh both your body and soul.We'll
            be glad to welcome you and recommend our facilities and services.
          </Desc>
        </Container>
      </Section2>
    </Section>
  );
};

export default About;
