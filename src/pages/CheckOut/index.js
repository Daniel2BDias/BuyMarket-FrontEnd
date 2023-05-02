import { Main, ProductList } from "./styles";
import ProductComp from "./components/Product";
import ConfirmButtonComp from "./components/ConfirmButton";
import ConfirmationModal from "./Modal/ConfirmationModal";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/carrinho";
import styled from "styled-components";

const CheckOut = () => {

    const navigate = useNavigate();
    const { cart } = useContext(CartContext);

  const [modal, setModal] = useState("none");

  const hideModal = () => {
    if (modal === "none") {
      setModal("flex");
    }

    if (modal === "flex") {
      setModal("none");
    }
  };

  const cancelOperation = () => {
    navigate("/main");
  };

  return (

    <ConfirmPage>
    <Logo>BuyMarket</Logo>
        <Main>
        <Title>Deseja adquirir estes items/serviços?</Title>
      <ProductList>
        {cart.map((p, i) => (
          <ProductComp key={i} image={p.imagem} value={p.preco} name={p.nome} />
        ))}
      </ProductList>
      <ConfirmButtonComp content={"É isso mesmo!"} onClick={hideModal} />
      <button onClick={cancelOperation}>Voltar</button>
      <ConfirmationModal modal={modal} onClick={hideModal}/>
    </Main>
    </ConfirmPage>

  );
};

export default CheckOut;


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

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top:40px;
  margin-bottom:20px;
`;


const ConfirmPage = styled.div`
background-color:white;

img {
  width:75px;
  height:75px;
}
`;


