import React                from 'react';
import styled               from 'styled-components';

const WebsiteInfo = () => {
    return(
        <Container>
            This website was built with React and is hosted by Firebase for free.
            Imports include: 
                'react'
                'react-dom'
                'styled-components'
                'raect-router-dom'
            Custom coded MailChimp contact from
        </Container>
    )
};

const Container = styled.div``;

export default WebsiteInfo;