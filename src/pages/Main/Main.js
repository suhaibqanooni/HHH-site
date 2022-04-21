import React from "react";
import { Helmet } from "react-helmet";

import {
  Navbar,
  Footer,
  Landing,
  About,
  Skills,
  Testimonials,
  Blog,
  Education,
  // Experience,
  Contacts,
  Projects,
  Services,
  Achievement,
} from "../../components";
import CoreCompetence from "../../components/CoreCompetance/CoreCompetence";
import KeyHighlights from "../../components/KeyHighlights/KeyHighlights";
import { headerData } from "../../data/headerData";
import { achievementData } from "../../data/achievementData";
import { certificationData } from "../../data/CertificationsData";

function Main() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
      </Helmet>

      <Navbar />
      <Landing />
      <About />
      <CoreCompetence />
      <Skills />
      <KeyHighlights />
      <Education />
      <Projects />
      <Achievement title="Achievements" data={achievementData} />
      <Achievement
        title="CERTIFICATIONS & TRAININGS"
        data={certificationData}
      />
      <Testimonials />
      <Services />
      <Blog />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;
