import React from 'react';
import styled from 'styled-components';

const Skills =()=> {
  const skills = [
    `Shopify`,
    `Liquid`,
    `WordPress`,
    `JavaScript`,
    `VanillaJS`,
    `HTML`,
    `CSS`,
    `React`,
    `NodeJs`,
    `Firebase`,
    `GitHub`,
    `Git`,
    `MailChimp`,
    `Klaviyo`,
    `Figma`,
    `Adobe PhotoShop`,
]
  const skillsList = skills.map((skill, k) => {
    return <span key={k}>{skill}</span>
  })
  return(
      <Container>
          <h1>Skills</h1>
          <br/>
          <section>
            {skillsList}
          </section>
    </Container>
  );
};

const Container = styled.div`
  h1 {
    padding-top: 20px;
    margin-bottom: 30px;
  }
  section {
    text-align: center;
    padding: 2% 0% 40px;
  }
  br {
    display: none;
  }
  section {
    >span::after {
      content: ' | ';
    }
    >span:last-of-type::after   {
      content: '';
    }
  }
  @media screen and (max-width: 400px){
  }
  @media screen and (max-width: 900px){
    section {
      margin: 0 auto;
      >span::after {
        content: ' | ';
      }
      >span:nth-of-type(4)::after,
      >span:nth-of-type(9)::after,
      >span:nth-of-type(12)::after {
        content: '';
        display: block;
      }
    }
  }
  @media screen and (max-width: 1200px){
    section {
      margin: 0 auto;
      >span::after {
        content: ' | ';
      }
      >span:nth-of-type(9)::after {
        content: '';
        display: block;
      }
    }
  }
`;

export default Skills; 