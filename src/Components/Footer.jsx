import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, WhatsApp } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    
`;

const Desc = styled.p`
    margin: 20px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>MOMEN.</Logo>
            <Desc>A fashion brand that pays attention to details by carefully crafting handamde bespoke clothings for men. 
                Simplicity is the order of the day at MoMen Clothings, 
                Our simply made wears speaks exclusivity, sophistication and luxury!</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <WhatsApp/>
                    </SocialIcon>
                </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>Conditions</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/> 21, Alhaji Sanusi Street, Okota.
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/> +234 814 744 1749
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/> motunrayodusina@gmail.com
            </ContactItem>
            <Payment src="https://i.dlpng.com/static/png/7095793_preview.png"/>                                                                                                                                           
        </Right>
    </Container>
  )
}

export default Footer