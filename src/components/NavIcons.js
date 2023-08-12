import React                            from 'react';
import styled                           from 'styled-components';
import { NavLink }                      from 'react-router-dom';
import * as routes                      from '../constants/routes';

import { ReactComponent as Mail }       from '../svg/icons/iconfinder_mail.svg';
import { ReactComponent as Instagram }  from '../svg/icons/iconfinder_instagram.svg';
import { ReactComponent as Linkedin }   from '../svg/icons/iconfinder_linkedin.svg';
import { ReactComponent as Github }     from '../svg/icons/iconfinder_github.svg';


const NavIcons = ({  }) => { 
  return(
      <Container>
          <section>
            <a target="_blank" rel="noreferrer" href="https://github.com/Levi237">
              <Github className="svg-about-link"/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/leviwinans">
              <Linkedin className="svg-about-link"/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/levi_eiko/">
              <Instagram className="svg-about-link"/>
            </a>
            <NavLink to={routes.MAIL}>
              <Mail className="svg-about-link"/>
            </NavLink>
        </section>
      </Container>
  );
};

const Container = styled.section`
background-color: transparent!important;
section {
    text-align: center;
    img {
      width: 15%;
      max-width: 40px;
      margin: .5%;
    }
    > span {
      width: 15%;
      max-height: 40px;
      max-width: 40px;
      margin: 2.5%;
      transition: .3s ease;
      &:hover {
        cursor: pointer;
      }
    }
    a {
        font-weight: 500;
        transition: .3s ease;
        > svg.svg-about-link {
            width: 40px;
            height: 40px;
            margin: 2.5%;
            fill: rgb(var(--color-rgb-darkgrey-new));
          }
        &:hover {
          > svg.svg-about-link * {
            fill: var(--blue)!important;
          }
        }
      }
    }
  @media screen and (max-width: 900px) {
  }
`;

export default NavIcons;