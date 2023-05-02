import styled from "styled-components"

export default function CardProduto({ produto, adicionarAoCarrinho, carrinhoFechado }) {
  const {imagem, nome, preco} = produto
  
  return (
    <ItemProduto carrinhoFechado={carrinhoFechado}>
      <img src={imagem} alt={nome} />
      <div>
        <p>{nome}</p>
        <p>{preco}</p>
      </div>
      <button onClick={() => adicionarAoCarrinho(produto)}>Comprar</button>
    </ItemProduto>    
  )
}

const ItemProduto = styled.div`
  --cor-fundo: #f8f8f8;
  --cor-borda: #ddd;
  --cor-texto: #333;
  --espacamento: 10px;
  --tamanho-componente: ${props => props.carrinhoFechado ? '100%' : '200px'};

  border: 1px solid var(--cor-borda);
  width: var(--tamanho-componente);
  display: flex;
  flex-direction: column;
  margin: var(--espacamento);
  padding: var(--espacamento);
  background-color: var(--cor-fundo);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  padding: 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 200px;
    height: 200px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: var(--espacamento) 0;
  }

  p {
    color: var(--cor-texto);
    margin: 0;
  }

  button {
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
    border: 1px solid var(--cor-borda);
    padding: var(--espacamento);
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: var(--cor-texto);
      color: var(--cor-fundo);
    }
  }
`;
