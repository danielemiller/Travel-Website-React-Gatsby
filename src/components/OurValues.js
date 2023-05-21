// OurValues.js
import React from "react";
import styled from "styled-components";

// Import your icons
import adventureIcon from '../assets/images/values_icons/adventure.png';
import excellenceIcon from '../assets/images/values_icons/excellence.png';
import integrityIcon from '../assets/images/values_icons/integrity.png';
import sustainabilityIcon from '../assets/images/values_icons/sustainability.png';
import inclusivityIcon from '../assets/images/values_icons/inclusivity.png';

const ValuesContainer = styled.div`
  padding: 2em;
  background-color: #fafafb;
`;

const ValuesHeading = styled.h2`
  color: #f26a2e;
  text-align: center;
`;

const ValuesIntro = styled.p`
  color: #3d3d4e;
  text-align: center;
  margin-bottom: 2em;
`;

const ValuesList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ValueItem = styled.li`
  margin-bottom: 1em;
  color: #3d3d4e;
  display: flex;
  align-items: center;
`;

const ValueName = styled.span`
  font-weight: bold;
  color: #077bf1;
  margin-left: 0.5em;
`;

const ValueIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const OurValues = () => {
  return (
    <ValuesContainer>
      <ValuesHeading>Our Values</ValuesHeading>
      <ValuesIntro>
        At Explorix, we hold these values dear:
      </ValuesIntro>
      <ValuesList>
        <ValueItem><ValueIcon src={adventureIcon} alt="Adventure Icon" /><ValueName>Adventure:</ValueName> We believe in fostering curiosity, promoting exploration, and inspiring you to step out of your comfort zone.</ValueItem>
        <ValueItem><ValueIcon src={excellenceIcon} alt="Excellence Icon" /><ValueName>Excellence:</ValueName> We are committed to delivering top-notch services, from customer support to the journey itself.</ValueItem>
        <ValueItem><ValueIcon src={integrityIcon} alt="Integrity Icon" /><ValueName>Integrity:</ValueName> We are transparent and honest in all our dealings, building trust with our customers.</ValueItem>
        <ValueItem><ValueIcon src={sustainabilityIcon} alt="Sustainability Icon" /><ValueName>Sustainability:</ValueName> We respect our environment and strive to promote responsible and sustainable tourism.</ValueItem>
        <ValueItem><ValueIcon src={inclusivityIcon} alt="Inclusivity Icon" /><ValueName>Inclusivity:</ValueName> We believe in creating experiences that are accessible and enjoyable for all.</ValueItem>
      </ValuesList>
    </ValuesContainer>
  )
}

export default OurValues;
