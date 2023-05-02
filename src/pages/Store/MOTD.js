import styled from "styled-components";
import MyButton from "../../components/Button";
import { useNavigate } from "react-router-dom";


export default function MOTD () {

    const navigate = useNavigate();

    return (
        <Container>
        <Logo>BuyMarket</Logo>
        <Message>Ainda não há produtos à venda :(</Message>
        <MyButton Text="Cadastre um produto!" onClick={() => navigate("/cadastro-produto")}></MyButton>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: spece-evenly;
    align-items: center;
`

const Message = styled.h1`
    color: lightgrey;
    font-size: 30px;
    text-align: center;
    white-space: pre-wrap;
    margin: 30px;
`;

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