import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Welcome to my <br />
        personal portfolio
        </SectionTitle>
        <SectionText>
        My main goal as a programmer is to create a high-quality, functional, seamless program that takes into account all the needs of the client and achieves maximum convenience in interaction for users. 
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;