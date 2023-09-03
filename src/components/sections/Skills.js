import React from 'react';
import styled from 'styled-components';

const Skills =()=> {
  const skills = [
    `Shopify`,
    `Liquid`,
    `WordPress`,
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
  ]
  const skillsList = skills.map((skill, k) => {
    return <span key={k}>{skill}</span>
  });
  return(
    <Container>
      <h1>Skills</h1>
      <section>
        {skillsList}
      </section>
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 80px;
  
  h1 {
    padding-top: 20px;
    margin-bottom: 40px!important;
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;

    padding: 5%;
    margin: 0 auto;
    max-width: 100%;

    > span {
      border-right: 1px solid white;
      border-left: 1px solid white;
      padding: 0 10px;
      margin-bottom: 5px;
    }
    > span + span {
      margin-left: -1px;
    }
  }
`;

export default Skills; 