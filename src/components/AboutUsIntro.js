// AboutUsIntro.js
import React from "react";
import styled from "styled-components";
import aboutUsImg from "../assets/images/about-image.png"

const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em;
  background-color: #fafafb;
`;

const IntroText = styled.div`
  width: 60%;
`;

const IntroImage = styled.img`
  width: 35%;
  object-fit: cover;
  border-radius: 10px;
`;

const IntroHeading = styled.h2`
  color: #f26a2e;
`;

const IntroParagraph = styled.p`
  color: #3d3d4e;
  margin-bottom: 1em;
`;

const AboutUsIntro = () => (
  <IntroContainer>
    <IntroText>
      <IntroHeading>About Explorix</IntroHeading>
      <IntroParagraph>Founded in 2023, Explorix is a premier travel agency dedicated to creating unforgettable adventure experiences for our customers. We believe that every journey is a story, and we're here to help you write yours.</IntroParagraph>
      <IntroParagraph>Our team of seasoned travel experts and local guides work around the clock to ensure that every traveler gets a unique, personalized experience. From hidden gems to renowned hotspots, we've got you covered.</IntroParagraph>
      <IntroParagraph>With Explorix, you're not just booking a trip, you're crafting your next great adventure.</IntroParagraph>
      <IntroParagraph><strong>Are you ready to explore?</strong></IntroParagraph>
    </IntroText>
    <IntroImage src={aboutUsImg} alt="About Us" />
  </IntroContainer>
);

export default AboutUsIntro;

