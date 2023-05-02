import styled from "styled-components";
import MyButton from "../../components/Button";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SellProduct() {

    const navigate = useNavigate();
    const [body, setBody] = useState({})

    const handleSubmit = () => {
        const promise = axios.post();
        promise.then();
        promise.catch();
    };

  return (
    <Wrapper>
      <Container>
        <Title>Cadastre um novo produto!</Title>
        <Input placeholder="imagem do produto" name="image" value={body.image} onChange={(e) => setBody({...body, [e.target.name]: e.target.value})}/>
        <Input placeholder="Nome do Produto" name="name" value="" onChange={(e) => setBody({...body, [e.target.name]: e.target.value})}/>
        <Input placeholder="Preço do produto" name="value" onChange={(e) => setBody({...body, [e.target.name]: e.target.value})}/>
        <MyButton Text="Cadastrar Produto" onClick={handleSubmit}/>
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
