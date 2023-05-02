import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import styled from "styled-components";



const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
    <Logo>BuyMarket</Logo>
    <Container>
      <Title>Bem-vindo à nossa plataforma!</Title>
      <Button Text="Prosseguir" onClick={() => navigate("/main")}></Button>
      <LogoutButton Text="Sair" onClick={() => [signout(), navigate("/login")]}>
      </LogoutButton>
    </Container>
    </>
    
  );
};

export default Home;

const Logo = styled.div`
  background: linear-gradient(to right, #0d5c92, #4682b4); /* alterando as cores para uma tonalidade mais azulada */
  color: white;
  padding: 20px;
  text-align: center;
  text-shadow: 2px 2px #333;
  font-size: 3rem;
  font-family: "Arial Black", sans-serif;
  width: 100vw;
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const LogoutButton = styled(Button)`
  margin-top: 2rem;
  background-color: #e91e63;
  color: white;
  &:hover {
    background-color: #c2185b;
  }
`;

