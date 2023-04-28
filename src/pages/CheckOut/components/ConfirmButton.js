import { ConfirmButton } from "../styles";

const ConfirmButtonComp = ({content, onClick}) => {
    return (
        <ConfirmButton onClick={onClick}>{content}</ConfirmButton>
    )
};


export default ConfirmButtonComp;