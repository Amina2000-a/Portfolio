import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Texnologiyalar</SectionTitle>
    <SectionText>
    Veb inkişafı dünyasında mən Front-enddən UX/UI dizayna qədər bir sıra texnologiyalarla işləmişəm.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Html<br />
            Css, Scss, Sass<br />
            JavaScript<br />
            Typescript<br />
            JQuerry<br />
            React.js<br />
            Vite.js<br />
            Tailwind Css<br />
            Rest APIs<br />
            React Hooks, Props<br />
            Bootstrap<br />
            WordPress<br />
            Responsibility<br />
            Git<br />
            Swagger<br />
            Postman<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js<br />
            Express.js<br />
            MongoDB<br />
            Next.js<br />
            C#<br />
            .Net (MS/SQL), MVC<br />
            Asp.NetCore<br />
            MySql<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Figma<br />
            Adobe PhotoShop<br />
            Adobe Illustrator<br />
            Adobe CoralDraw<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;