import Carrinho from "./Carrinho"
import ListaProduto from "./ListaProduto"
import styled from "styled-components"
import PRODUTOS from "./mock"
import { useEffect, useState } from "react"
import MOTD from "./MOTD"

export default function Main () {
  const [ carrinho, setCarrinho ] = useState([])
  const [ products, setProducts ] = useState(undefined);

  useEffect(() => {
      setProducts(PRODUTOS)
  }, []);

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
      {products ? <ListaProduto
        produtos={products}
        adicionarAoCarrinho={adicionarAoCarrinho}
      /> : <MOTD/>}
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
