import React from "react";
import { Link } from 'gatsby';
import DestinationMap from "../components/DestinationMap";

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components';

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  color: #f26a2e;
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: 2rem;
`;

const MapContainer = styled.div`
  height: 500px;
`;

const SecondPage = () => (
  <Layout>
    <SEO title="Destinations" />
    <Container>
      <Title>Our Favorite Destinations</Title>
      <Description>Explore some of the best destinations around the world.</Description>
      <MapContainer>
        <DestinationMap />
      </MapContainer>
    </Container>
  </Layout>
)

export default SecondPage;
