import CardCarrinho from "./CardCarrinho"
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/carrinho";

export default function Carrinho({ carrinho, removerDoCarrinho }) {
    const navigate = useNavigate();
    const { setCart } = useContext(CartContext);

    const finalizarCompra = () => {
        navigate("/check-out");
        setCart(carrinho);

    };

    return (
        <ContainerCarrinho carrinho={carrinho}>
            {carrinho.map((prodAdicionado) => (
                <CardCarrinho
                    key={prodAdicionado.id}
                    produto={prodAdicionado}
                    removerDoCarrinho={removerDoCarrinho}
                />
            ))}
            <Button onClick={finalizarCompra}>Finalizar Compra</Button>
        </ContainerCarrinho>
    )
}

const ContainerCarrinho = styled.div`
  border: 1px solid #f2f2f2;
  width: ${props => props.carrinho.length === 0 ? "0px" : "25vw"};
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 0;
  background-color:#f2f2f2;
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
`;