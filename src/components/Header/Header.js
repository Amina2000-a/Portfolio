import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link legacyBehavior href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white", marginBottom: '20px' }}>
          <DiCssdeck size="3rem" /> <Span>NorthWind</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Proyektlər</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Texnologiyalar</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>Haqqımda</NavLink>
        </Link>
      </li>        
    </Div2>
    <Div3>
        <SocialIcons href="https://github.com/Amina2000-a">
          <AiFillGithub size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
