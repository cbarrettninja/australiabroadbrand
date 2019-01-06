import React from 'react';
import Page from '../../components/Page';
import HeroSection from './HeroSection';
import BenefitSection from './BenefitSection';
import CheckAddress from './CheckAddress';
import Information from './ImpInformation';
import ReviewSection from './ReviewSection';
import Footer from './footer';
import EasyConnection from './EasyConnection';

import './style.scss';

export default () => (
  <Page id="homepage">
    <HeroSection />
    <BenefitSection />
    <div className="connection-check__section">
      <EasyConnection />
      <CheckAddress />
    </div>
    <ReviewSection />
    <Information />
    <Footer />
  </Page>
);
