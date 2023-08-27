import React from 'react';
import styled from 'styled-components';

const Definition = () => {
    return(<Container className="page-width">
            <div>
                <h2>web developer</h2> 
                <span>noun</span>
                <ol>
                    <li>a person or company that develops World Wide Web software applications, or that creates and maintains websites.
                        <small>
                            ~ <a href="https://www.dictionary.com/browse/web-developer">Dictionary.com</a>
                        </small>
                    </li>
                </ol>
            </div>
        </Container>
    );
};

const Container = styled.div`
margin-top: 40px;
> div { 
    max-width: 800px; 
    margin: 0 auto; 
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
}
ol {
    padding: 0 20px;
    margin: 0;
}
    @media screen and (max-width: 640px){
        > div {
            width: 90%;
            margin: 0 auto;
        }
    }
`;

export default Definition;