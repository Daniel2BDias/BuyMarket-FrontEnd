import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import styled from "styled-components";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <>
    <Logo>BuyMarket</Logo>
     <Container>
      <Label>LOGIN</Label>
      <Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <labelError>{error}</labelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <LabelSignup>
          Não tem uma conta?
          <Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </Strong>
        </LabelSignup>
      </Content>
    </Container>
    
    </>
   
  );
};

export default Signin;


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 70vh;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;
  a {
    text-decoration: none;
    color: #676767;
  }
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

