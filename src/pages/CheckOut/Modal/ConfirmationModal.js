import PaymentForm from "../components/PaymentForm";
import { PaymentInfoContainer } from "../styles";

const ConfirmationModal = ({ modal, onClick }) => {
  return (
    <PaymentInfoContainer modal={modal}>
      <PaymentForm onClick={onClick}/>
    </PaymentInfoContainer>
  );
};

export default ConfirmationModal;
