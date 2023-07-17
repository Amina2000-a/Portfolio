import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Şəxsi portfolioma <br />
        xoş gəlmisiniz
        </SectionTitle>
        <SectionText>
        Bir proqramçı kimi əsas məqsədim müştərinin bütün ehtiyaclarını nəzərə alan və istifadəçilər üçün qarşılıqlı əlaqədə maksimum rahatlığa nail olan yüksək keyfiyyətli, funksional, qüsursuz proqram yaratmaqdır. 
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;