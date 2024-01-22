import React    from 'react';
import styled   from 'styled-components';
import Gallery  from './Gallery';

const Skills = ({projects}) => {
  const skills = [
    `Shopify`,
    `Liquid`,
    `WordPress`,
    `PHP`,
    `React`,
    `JavaScript`,
    `VanillaJS`,
    `HTML`,
    `CSS`,
    `NodeJs`,
    `Firebase`,
    `GitHub`,
    `Git`,
    `MailChimp`,
    `Klaviyo`,
    `Figma`,
    `PhotoShop`,
  ];
  const skillsList = skills.map((skill, k) => {
    return <span key={k}>{skill}</span>
  });
  return(
    <Container>
      <h1>Skills</h1>
      <section>{skillsList}</section>
      <Gallery id='top-home' list={projects} width="24" height="13" gap="2" seconds="3"/>
    </Container>
  );
};

const Container = styled.div`
  padding: var(--small-section-padding) 0;
  background-image: linear-gradient(rgba(0,0,0,0.85),rgba(0,0,0,0.90)),url('grey-laptop-keyboard-close-up.jpg');
  background-size: cover;
  background-position: center;
  h1 {
    text-align: center;
    margin: 0!important;
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;

    max-width: 800px;
    padding: 30px 0 60px;
    margin: 0 auto;

    > span {
      border-right: 1px solid white;
      border-left: 1px solid white;
      padding: 0 10px;
      margin-bottom: 5px;
      font-size: 18px;
    }
    > span + span {
      margin-left: -1px;
    }
  }
`;

export default Skills; 