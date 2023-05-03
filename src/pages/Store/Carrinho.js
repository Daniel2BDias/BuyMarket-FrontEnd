import CardCarrinho from "./CardCarrinho";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/carrinho";

export default function Carrinho({ carrinho, removerDoCarrinho, hasProducts }) {
  const navigate = useNavigate();
  const { setCart } = useContext(CartContext);

  const finalizarCompra = () => {
    navigate("/check-out");
    setCart(carrinho);
  };

  return (
    <ContainerCarrinho hasProducts={hasProducts} carrinho={carrinho}>
      {carrinho.map((prodAdicionado) => (
        <CardCarrinho
          key={prodAdicionado.id}
          produto={prodAdicionado}
          removerDoCarrinho={removerDoCarrinho}
        />
      ))}
      <Button hidden={carrinho} onClick={finalizarCompra}>
        Finalizar Compra
      </Button>
        {carrinho.length === 0 ? <Msg>Não há itens no seu carrinho</Msg> : null}
    </ContainerCarrinho>
  );
}

const ContainerCarrinho = styled.div`
  border: 1px solid #f2f2f2;
  width: 25vw;
  height: 100vh;
  position: fixed;
  display: ${(props) => (props.hasProducts ? "flex" : "none")};
  overflow-y: scroll;
  flex-direction: column;
  align-items: center;
  right: 0;
  top: 100px;
  background-color: #f2f2f2;
  border-left: 1px solid #046ee5;
`;

const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 80%;
  cursor: pointer;
  background-color: #046ee5;
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
  display: ${(props) => (props.hidden.length === 0 ? "none" : "initial")};
`;

const Msg = styled.h1`
    font-size: 20px;
    text-align: center;
    color: black;
    margin: 10px;
`;