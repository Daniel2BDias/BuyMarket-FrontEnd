import styled from "styled-components";
import MyButton from "../../components/Button";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";

export default function SellProduct() {
    const navigate = useNavigate()
  return (
    <Wrapper>
      <Container>
        <Title>Cadastre um novo produto!</Title>
        <Input placeholder="imagem do produto" />
        <Input placeholder="Nome do Produto" />
        <Input placeholder="Preço do produto" />
        <MyButton Text="Cadastrar Produto" />
        <Cancel onClick={() => navigate(-1)}>Cancelar</Cancel>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 50vh;
`;

const Title = styled.h1`
  font-size: 30px;
  white-space: pre-wrap;
  text-align: center;
  margin-bottom: 10px;
`;

const Cancel = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  color: black;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
  margin: 3px;
`;
