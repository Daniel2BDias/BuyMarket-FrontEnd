import { Main, ProductList } from "./styles";
import ProductComp from "./components/Product";
import ConfirmButtonComp from "./components/ConfirmButton";
import ConfirmationModal from "./Modal/ConfirmationModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const produtos = [
  {
    name: "produto",
    value: "valor",
    image:
      "https://betelbrasileiro.com.br/wp-content/uploads/2022/09/produto.png",
  },
  {
    name: "produto",
    value: "valor",
    image:
      "https://betelbrasileiro.com.br/wp-content/uploads/2022/09/produto.png",
  },
  {
    name: "produto",
    value: "valor",
    image:
      "https://betelbrasileiro.com.br/wp-content/uploads/2022/09/produto.png",
  },
  {
    name: "produto",
    value: "valor",
    image:
      "https://betelbrasileiro.com.br/wp-content/uploads/2022/09/produto.png",
  },
  {
    name: "produto",
    value: "valor",
    image:
      "https://betelbrasileiro.com.br/wp-content/uploads/2022/09/produto.png",
  },
  {
    name: "produto",
    value: "valor",
    image:
      "https://betelbrasileiro.com.br/wp-content/uploads/2022/09/produto.png",
  },
  {
    name: "produto",
    value: "valor",
    image:
      "https://betelbrasileiro.com.br/wp-content/uploads/2022/09/produto.png",
  },
  {
    name: "produto",
    value: "valor",
    image:
      "https://betelbrasileiro.com.br/wp-content/uploads/2022/09/produto.png",
  },
  {
    name: "produto",
    value: "valor",
    image:
      "https://betelbrasileiro.com.br/wp-content/uploads/2022/09/produto.png",
  },
  {
    name: "produto",
    value: "valor",
    image:
      "https://betelbrasileiro.com.br/wp-content/uploads/2022/09/produto.png",
  },
];

const CheckOut = () => {

    const navigate = useNavigate();

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
    navigate("home");
  };

  return (
    <Main>
        <h1>Deseja adquirir estes items/serviços?</h1>
      <ProductList>
        {produtos.map((p, i) => (
          <ProductComp key={i} image={p.image} value={p.value} name={p.name} />
        ))}
      </ProductList>
      <ConfirmButtonComp content={"É isso mesmo!"} onClick={hideModal} />
      <button onClick={cancelOperation}>Voltar</button>
      <ConfirmationModal modal={modal} onClick={hideModal}/>
    </Main>
  );
};

export default CheckOut;
