import { UserInfoForm } from "../styles";
import styled from "styled-components";

const PaymentForm = ({ onClick }) => {
  const confirmPayment = (e) => {
    e.preventDefault();
  };

  return (
    <>
<UserInfoForm onSubmit={confirmPayment}>
  <h1>Insira seus dados, por obséquio.</h1>
  <input name="Cep" placeholder="CEP - XXXXX-XXX"></input>
  <input name="address" placeholder="Número XX-XX" required></input>
  <input name="complement" placeholder="Complemento"></input>
  <input name="card-number" placeholder="Número do Cartão" required></input>
  <CardInfoRadio>
    <label>Crédito</label>
    <input type="radio" name="option" value="credit" required></input>
    <label>Débito</label>
    <input type="radio" name="option" value="debit" required></input>
  </CardInfoRadio>
  <input placeholder="Vencimento - MM/YY" required></input>
  <input placeholder="CVC - XXX" required></input>
  <button type="submit">Confirmar Compra</button>
  <button onClick={onClick}>Cancelar</button>
</UserInfoForm>
    </>
  
  );
};

export default PaymentForm;

const CardInfoRadio = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  input {
    width: 10%;
    height: 20px !important;
  }
`;

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