import styled from "styled-components";

export default function CardCarrinho({ produto, removerDoCarrinho }) {
  const { id, nome, preco, imagem } = produto;

  return (
    <CarrinhoItemContainer>
      <ProductImage src={imagem} alt={nome} />
      <div>
        <ProductName>{nome}</ProductName>
        <ProductPrice>{preco}</ProductPrice>
      </div>
      <RemoveButton onClick={() => removerDoCarrinho(produto)}>X</RemoveButton>
    </CarrinhoItemContainer>
  );
}

const CarrinhoItemContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: #f9f9f9;
  margin: 10px;
  padding: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 10px;
`;

const ProductName = styled.strong`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 1.2rem;
`;

const ProductPrice = styled.p`
  margin: 0;
  font-size: 1.2rem;
  color: #555;
`;

const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.4rem;
  color: #999;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #f00;
  }
`;
