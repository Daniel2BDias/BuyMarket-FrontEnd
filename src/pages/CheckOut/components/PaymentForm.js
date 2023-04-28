import { UserInfoForm } from "../styles";
import styled from "styled-components";

const PaymentForm = ({ onClick }) => {
  const confirmPayment = (e) => {
    e.preventDefault();
  };

  return (
    <UserInfoForm onSubmit={confirmPayment}>
      <h1>Insira seus dados, por obséquio.</h1>
      <input name="address" placeholder="Endereço" required></input>
      <input name="card-number" placeholder="Número do Cartão" required></input>
      <CardInfoRadio>
        <label htmlFor="Crédito">Crédito</label>
        <input type="radio" name="option" value="credit" required></input>
        <label htmlFor="Débito">Débito</label>
        <input type="radio" name="option" value="debit" required></input>
      </CardInfoRadio>
      <input placeholder="Vencimento" required></input>
      <input placeholder="CVC" required></input>
      <button type="submit">Confirmar Compra</button>
      <button onClick={onClick}>Cancelar</button>
    </UserInfoForm>
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