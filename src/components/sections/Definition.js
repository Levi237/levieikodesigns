import React from 'react';
import styled from 'styled-components';

const Definition = () => {
    return(<Container className="page-width">
            <div>
                <div>
                    <h2>web developer</h2> 
                    <span>noun</span>
                    <ol>
                        <li>Someone who creates and maintains websites</li>
                        <li>Someone who develops World Wide Web software applications</li>
                        <li>Me!  <a href="https://levieikodesigns.com/portfolio" alt="my portfolio">Check out my work <small className="folder"></small></a></li>
                    </ol>
                </div>
            </div>
        </Container>
    );
};

const Container = styled.div`
margin: 80px auto;
> div { 
    max-width: 800px; 
    margin: 0 auto; 
    border: 1px solid white;
    > div {
        max-width: 600px;
        width: 90%;
        margin: 40px auto; 
    }
}
h2 {
    font-size: 36px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid white;
}
span {
    display: inline-block;
    font-weight: 600;
    margin-bottom: 4px;
}
ol {
    padding: 0 40px;
    margin: 0;
    li {
        padding-bottom: 8px;
    }
}
.folder::before {
    content: '📁';
    // transition: 33s ease;
}
a:hover .folder::before {
    content: '📂';
}
    @media screen and (max-width: 640px){
        > div {
            width: 90%;
            margin: 0 auto;
        }
    }
`;

export default Definition;