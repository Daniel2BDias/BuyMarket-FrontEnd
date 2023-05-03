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
  display:flex;
  flex-direction:column;


  border: 1px solid var(--cor-borda);
  width: var(--tamanho-componente);
  margin: var(--espacamento);
  height:320px;
  padding: var(--espacamento);
  background-color: var(--cor-fundo);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  padding: 20px;
  transition: transform 0.3s ease-in-out;
  position:relative;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: auto;
    top:5px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 10px;
  }

  p {
    color: var(--cor-texto);
    margin: 0;
    text-align: center;
    margin-top:10px;
  }

  button {
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
    border: 1px solid var(--cor-borda);
    padding: var(--espacamento);
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    width: 150px;
    position:absolute;
    bottom: 10px;
   

    &:hover {
      background-color: var(--cor-texto);
      color: var(--cor-fundo);
    }
  }
`;