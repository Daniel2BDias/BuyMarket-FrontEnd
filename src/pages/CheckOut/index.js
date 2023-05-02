import { Main, ProductList } from "./styles";
import ProductComp from "./components/Product";
import ConfirmButtonComp from "./components/ConfirmButton";
import ConfirmationModal from "./Modal/ConfirmationModal";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/carrinho";

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
    <Main>
        <h1>Deseja adquirir estes items/serviços?</h1>
      <ProductList>
        {cart.map((p, i) => (
          <ProductComp key={i} image={p.imagem} value={p.preco} name={p.nome} />
        ))}
      </ProductList>
      <ConfirmButtonComp content={"É isso mesmo!"} onClick={hideModal} />
      <button onClick={cancelOperation}>Voltar</button>
      <ConfirmationModal modal={modal} onClick={hideModal}/>
    </Main>
  );
};

export default CheckOut;
