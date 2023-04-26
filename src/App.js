import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./Styles/GlobalStyles";
import ResetStyles from "./Styles/ResetStyles";

function App() {
  return (
    <>
    <ResetStyles />
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
          rota login
          rota cadastro/signup
          rota produtos/carrinho
          rota checkout ou um modal na rota produtos mesmo? (tipo o do driven eats)
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
