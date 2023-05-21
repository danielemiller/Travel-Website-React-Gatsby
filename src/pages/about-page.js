// about-page.js
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import AboutUsIntro from "../components/AboutUsIntro";
import TeamMembers from "../components/TeamMembers";
import OurValues from "../components/OurValues";
import Testimonials from "../components/Testimonials";

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <AboutUsIntro />
    <TeamMembers />
    <OurValues />
    <Testimonials />
  </Layout>
);

export default AboutPage;
