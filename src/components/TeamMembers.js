// TeamMembers.js
import React from "react";
import styled from "styled-components";

import isabellaRossiImg from "../assets/images/isabella-rossi.png";
import carlosAlvarezImg from "../assets/images/carlos-alvarez.png";
import lenaSchmidtImg from "../assets/images/lena-schmidt.png";

const TeamContainer = styled.div`
  padding: 2em;
  background-color: #fafafb;
`;

const TeamHeading = styled.h2`
  color: #f26a2e;
  text-align: center;
`;

const TeamIntro = styled.p`
  color: #3d3d4e;
  text-align: center;
  margin-bottom: 2em;
`;

const TeamList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TeamMember = styled.li`
  margin-bottom: 2em;
  display: flex;
  align-items: center;
`;

const MemberImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 1em;
`;

const MemberName = styled.h3`
  color: #077bf1;
`;

const MemberRole = styled.p`
  font-weight: bold;
  color: #3d3d4e;
`;

const MemberDescription = styled.p`
  color: #3d3d4e;
`;

const TeamMembers = () => (
  <TeamContainer>
    <TeamHeading>Meet the Team</TeamHeading>
    <TeamIntro>
      At Explorix, we're proud to have a team of dedicated travel professionals who are passionate about making your journey unforgettable. Meet some of our team:
    </TeamIntro>
    <TeamList>
      <TeamMember>
        <MemberImage src={isabellaRossiImg} alt="Isabella Rossi" />
        <div>
          <MemberName>Isabella Rossi</MemberName>
          <MemberRole>Founder and CEO</MemberRole>
          <MemberDescription>
            With a vision to transform the travel industry, Isabella founded Explorix. Her passion for exploration and two decades of experience in adventure tourism guide us every day.
          </MemberDescription>
        </div>
      </TeamMember>
      <TeamMember>
        <MemberImage src={carlosAlvarezImg} alt="Carlos Alvarez" />
        <div>
          <MemberName>Carlos Alvarez</MemberName>
          <MemberRole>Head of Operations</MemberRole>
          <MemberDescription>
            Carlos ensures all our trips run seamlessly. His meticulous planning and passion for logistics make him a critical part of the Explorix team.
          </MemberDescription>
        </div>
      </TeamMember>
      <TeamMember>
        <MemberImage src={lenaSchmidtImg} alt="Lena Schmidt" />
        <div>
          <MemberName>Lena Schmidt</MemberName>
          <MemberRole>Travel Consultant</MemberRole>
          <MemberDescription>
            Lena's deep understanding of global destinations and her warm personality make her your perfect partner for planning your next adventure.
          </MemberDescription>
        </div>
      </TeamMember>
    </TeamList>
  </TeamContainer>
);

export default TeamMembers;
