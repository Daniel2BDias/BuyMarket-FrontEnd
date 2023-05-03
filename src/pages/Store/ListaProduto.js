import CardProduto from "./CardProduto";
import styled, { keyframes } from 'styled-components';
import { useNavigate } from "react-router-dom";
import CarrinhoFundoPreto from "./img/cart1-svgrepo-com (1).svg"
import user from "./img/user-svgrepo-com (2).svg"
import { useState } from "react";
import PRODUTOS from "./mock";




const MyButton = ({ Text, onClick, Type = "button" }) => {
  return (
    <Button type={Type} onClick={onClick}>
      {Text}
    </Button>
  );
};


export default function ListaProduto({ adicionarAoCarrinho, hasProducts, setHasProducts }) {
  const navigate = useNavigate();
  const [busca, setBusca] = useState("");

  const produtosFiltrados = PRODUTOS.filter((produtoPesquisado) =>
    produtoPesquisado.nome.toLowerCase().startsWith(busca.toLowerCase())
  );

  const displayCart = () => {
    setHasProducts(!hasProducts)
    console.log(hasProducts)
  };

  return (
    <PageStore>
      <Logo>
        <h1> BuyMarket </h1>
        <Input
          type=""
          value={busca}
          onChange={(ev) => setBusca(ev.target.value)}
        
        />

        <Aviso>
          <p>Frete grátis </p>
          <MyButton
            Text="Cadastre seu produto"
            onClick={() => navigate("/cadastro-produto")}

          />
          <img src={user} />
          <img onClick={displayCart} src={CarrinhoFundoPreto} />
        </Aviso>
      </Logo>
      <ContainerListaProdutos>
        {produtosFiltrados.map((prod) => (
          <CardProduto
            key={prod.id}
            produto={prod}
            adicionarAoCarrinho={adicionarAoCarrinho}
          />
        ))}
      </ContainerListaProdutos>
    </PageStore>
  );
}

const Logo = styled.div`
  background: radial-gradient(circle, #393939 0%, #000000 100%);
  background: linear-gradient(to right, #0d5c92, #4682b4);
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.2), 0 0 20px rgba(255, 255, 255, 0.2);
  height:100px;
  display:flex;
  align-items: center;


  h1 {
    color: white;
    font-size: 2.5rem;
    font-family: "Arial Black", sans-serif;
    letter-spacing: 2px;
    padding: 20px;
    text-shadow: 2px 2px #333;
    width: 100vw;
    margin-left:10px;
    flex:1;

  }
  img {
            width: 40px;
            color:white;
            flex:1;
            text-align:center;
          }
`;

const PageStore = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
const ContainerListaProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left:80px;
  margin-top:20px;

  img {
    width:150px;
    height:150px;
  }
`;



const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: transparent;
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 200px;
  margin: 3px;

  &:active {
    transform: scale(0.97);
  }
`;

const Input = styled.input`
height: 48px;
border: 1px solid #EDEDED;
border-radius: 8px 0px 0px 0px;
padding: 8px 16px;
font-family: "Roboto",sans-serif;
font-size: 14px;
display: flex;
justify-content: center;
align-items: center;
margin-right:100px;
width: 500px;
outline: none;

`;


const Aviso = styled.div`
color:red;
margin-right:10px;
display:flex;
justify-content:space-between;
align-items: center;
p {
  animation: ${keyframes`
  0% {
    color:red;
  }
  50% {
    color:#ddd;
  }
  100% {
    color:red;
  }
  `
  } 2s linear infinite;
}

img {
  margin: 10px;
}

img:last-child:hover {
  cursor: pointer;
}

img:last-child:active {
  transform: scale(1.1);
}
`;
