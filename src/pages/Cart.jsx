import { Details } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import Announcements from '../Components/Announcements'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar'

const Container = styled.div`
    
`;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

const TopButton = styled.div`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props)=>props.type === "filled" && "none"};
    background-color: ${(props)=>props.type === "filled" ? "black" : "transparent"};
    color: ${(props)=>props.type === "filled" && "white"}; 
`;

const TopTexts = styled.div`
    
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: center;
`;

const Info = styled.div`
    flex: 3;
`;

const Summary = styled.div`
    flex: 1;
`;

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your WishList(0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECK OUT</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image/>
                            <Details>
                                <ProductName><b>Product:</b>JOLOMI COLLECTIONS</ProductName>
                                <ProductName><b>ID:</b>347899</ProductName>
                                <ProductName><b>Size:</b>42.5</ProductName>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>Summary</Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart