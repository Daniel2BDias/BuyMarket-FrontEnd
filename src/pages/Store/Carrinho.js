import CardCarrinho from "./CardCarrinho"
import styled from "styled-components"

export default function Carrinho({ carrinho, removerDoCarrinho }) {
    return (
        <ContainerCarrinho carrinho={carrinho}>
            {carrinho.map((prodAdicionado) => (
                <CardCarrinho
                    key={prodAdicionado.id}
                    produto={prodAdicionado}
                    removerDoCarrinho={removerDoCarrinho}
                />
            ))}
        </ContainerCarrinho>
    )
}

const ContainerCarrinho = styled.div`
  border: 1px solid #f2f2f2;
  width: ${props => props.carrinho.length === 0 ? "0px" : "25vw"};
  height: 100vh;
  position: absolute;
  right: 0;
  background-color:#f2f2f2;
`;