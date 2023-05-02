import Carrinho from "./Carrinho"
import ListaProduto from "./ListaProduto"
import styled from "styled-components"
import PRODUTOS from "./mock"
import { useState } from "react"

export default function Main () {
  const [carrinho, setCarrinho] = useState([])

  function adicionarAoCarrinho(item) {
    const estaNoArray = carrinho.some((prodAdicionado) => prodAdicionado.id === item.id)
    if (!estaNoArray) {
      setCarrinho([...carrinho, item])
    }
  }

  function removerDoCarrinho(item) {
    const novoCarrinho = carrinho.filter((prod) => prod.id !== item.id)
    setCarrinho(novoCarrinho)
  }

  return (
    <ContainerApp>
      <ListaProduto
        produtos={PRODUTOS}
        adicionarAoCarrinho={adicionarAoCarrinho}
      />
      <Carrinho carrinho={carrinho} removerDoCarrinho={removerDoCarrinho} />
    </ContainerApp>
  )
}

const ContainerApp = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  padding-right: 400px;
`;
