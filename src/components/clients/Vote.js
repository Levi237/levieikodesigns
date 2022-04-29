import React  from 'react';
import styled from 'styled-components';

const Vote =()=> {
    return(
        <Container>
            <section>
            <h1>
                VOTE 2020
            </h1>
            <div>
              <img src="vote2020/Ginsburg-VOTE_1200x628.png"/>
                <h2>
                1200x628
                </h2>
              </div>
            <div>
              <img src="vote2020/Ginsburg-VOTE_1080x1080.png"/>
                <h2>
                1080x1080
                </h2>
            </div>
            <div>
              <img src="vote2020/Ginsburg-VOTE_1080x1920.png"/>
                <h2>
                1080x1920
                </h2>
            </div>
            <p>
            “Fight for the things that you care about. But do it in a way that will lead others to join you.”
            </p>
            </section>
        </Container>
        );
};

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: #fff;
    display : flex;
    align-items : center;
    justify-content: center;
    section {
        text-align: center;
    }
    h1 {
        font-size: 48px;
        font-family: Didot, Times New Roman;
        padding: 30px 0;
    }
    h2 {
        text-align: center;
        padding: 10px 0 40px;
    }
    div {
        width: 30%;
        margin: 1.5%;
        display: inline-block;
        vertical-align: middle;

    }
    img {
        width: 100%;
    }
    p {
        font-family: Didot,Times New Roman;
        font-style: italic;
        font-weight: 800;
        font-size: 14px;
        width: 200px;
        padding: 30px 50px;
        background: white;
        margin: 0 auto 40px;
        box-shadow: 4px 4px 12px rgba(0,0,0,.8);
    }
    @media screen and (max-width: 900px) {
        background: transparent;
        div {
            display: block;
            position: relative;
            width: 80%;
            margin: 0 auto;
        }
    }
`;

export default Vote;