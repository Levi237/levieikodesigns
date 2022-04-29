import React        from 'react';
import styled       from 'styled-components';

const ModalWindow = ({ toggleModal }) => { 
    return(
        <Container id="modal" className="inactive contact-container">
            <CloseBtn name="modalWindow" className="close xClose white" onClick={(e) => {toggleModal(e)}}>X</CloseBtn>
        </Container>
    );
};

const Container = styled.div`
height: 100vh;
width: 100vw;
    position: fixed;
    overflow: scroll;
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(255,255,255,1);
    @media screen and (max-width: 745px) {
        align-items: start;
        background-color: #fff;
    }
    form {
        box-shadow: 5px 5px 15px rgba(0,0,0,.2);
    }
`;

const CloseBtn = styled.button`
    background-color: transparent;
    border-radius: 100px;

    font-size: 14px;
    max-height: 30px;
    max-width: 30px;
    min-height: 30px;
    min-width: 30px;

    padding: 0;
    text-align: center;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 99999;
`;

export default ModalWindow;