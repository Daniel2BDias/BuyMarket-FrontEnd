import styled from "styled-components";
import MyButton from "../../components/Button";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SellProduct() {
  const navigate = useNavigate();
  const [body, setBody] = useState({title: "", price: "", url: ""});
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    const { url, title, price } = body;
    
    if(url === "" || price === "" || title === "") {
        handleError();
        return
    };

    const promise = axios.post(``, body);
    promise.then(() => alert("Produto cadastrado e à venda!"));
    promise.catch((err) => alert(`Ocorreu um erro inesperado, tente novamente mais tarde.`));
  };

  const handleError = () => {
      setError(true);
  };

  return (
    <Wrapper>
      <Container>
        <Title>Cadastre um novo produto!</Title>
        <Input
          placeholder="imagem do produto"
          name="url"
          value={body.image}
          onChange={(e) =>
            setBody({ ...body, [e.target.name]: e.target.value })
          }
        />
        <Input
          placeholder="Nome do Produto"
          name="title"
          value=""
          onChange={(e) =>
            setBody({ ...body, [e.target.name]: e.target.value })
          }
        />
        <Input
          placeholder="Preço do produto"
          name="price"
          onChange={(e) =>
            setBody({ ...body, [e.target.name]: e.target.value })
          }
        />
        {error ? <Error>*Preencha todos os campos*</Error> : null}
        <MyButton Text="Cadastrar Produto" onClick={handleSubmit} />
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

const Error = styled.div`
  color: red;
  font-size: 10px;
`;
