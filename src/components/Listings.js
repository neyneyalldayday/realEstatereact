import React from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';
import styled from 'styled-components/macro';
import {Link} from 'react-router-dom';
import HomeOne from '../images/home-1.jpg';
import HomeTwo from '../images/home-2.jpg';

const Section = styled.section`
width: 100%;
height: 100%;
padding: 10rem calc((10vw - 1300px) / 2);
`;

const Container = styled.div`
height: 100%;
width: 100%;
padding: 2rem 1rem;
`;

const Heading = styled.div`
font-size: 1.5rem;
padding: 2rem;
margin-bottom: 40px;

@media screen and (max-width: 768px) {
    text-align: start;
}
`;


const InfoRow = styled.div`
display: flex;
flex-direction: row;
padding: 1rem 0rem;

@media screen and (max-width: 768px) {
    flex-direction: column;
}
`;

const InfoWrap = styled.div`
padding: 0rem 1rem;
min-height: 550px;
height: 100%;

h2 {
    margin-bottom: 1rem;
    font-weight: 400;
}

@media screen and (max-width: 768px) {
    margin-bottom: 1rem;
}
`;

const Image = styled.img`
width: 100%;
height: 100%;
max-width: 600px;
max-height: 400px;
object-fit: cover;
margin-bottom: 1rem;
`;
const InfoLink = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
color: #000d1a;
transition: 0.3s;

&:hover {
   transform: translateY(-2px); 
}
`;
const Arrow = styled(IoMdArrowRoundForward)`
margin-left: 10px;
`;

const Listings = () => {
    return (
        <Section>
            <Container>
                <Heading>
                    <h1>View our newest Holmes</h1>
                </Heading>
                <InfoRow>
                    <InfoWrap>
                        <Image src={HomeOne} alt="home" />
                        <h2>8 bed 10 bath house in venice, 
                         california</h2>
                         <InfoLink to="/homes">
                             <p>view details</p>
                             <Arrow />
                         </InfoLink>
                    </InfoWrap>
                    <InfoWrap>
                        <Image src={HomeTwo} alt="home" css=
                        {`margin-top: 120px; @media screen and (max-width: 768px) {
                            margin-top: 0px;
                        }`}/>
                        <h2>4 bed 2 bath house in san antonio, 
                         Texas</h2>
                         <InfoLink to="/homes">
                             <p>view details</p>
                             <Arrow />
                         </InfoLink>
                    </InfoWrap>
                </InfoRow>
            </Container>
        </Section>
    );
};

export default Listings
