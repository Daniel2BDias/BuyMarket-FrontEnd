import styled from "styled-components";

export const Main = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 25px;
        margin: 3px;
        width: 50%;
        text-align: center;
    }

    button:nth-child(4) {
        height: 30px;
        width: 200px;
        border: none;
        border-radius: 5px;
    }

    button:nth-child(4):hover {
        cursor: pointer;
    }
`;

export const ProductList = styled.div`
    height: 80%;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border: 1px dotted #4682b4;
    border-radius: 5px;
    overflow-Y: scroll;

    margin-bottom: 10px;
`;


export const ProductImg = styled.img`
    height: 60%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    text-overflow: ellipsis;
`;

export const ProductContainer = styled.div`
    height: 150px;
    width: 150px;
    max-height: 150px;
    max-width: 150px;
    margin: 3px;
    padding: 3px;
    border: 1px solid #4682b4;
    border-radius: 5px;
    text-align: center;
    box-shadow: 1px 2px 1px #000000;

    p {height: 20%;}
`

export const ConfirmButton = styled.button`
    height: 60px;
    width: 90%;
    max-width: 326px;
    background-color: #046ee5;
    color: white;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    box-shadow: .5px 2px 3px #000;
    margin: 5px;

    &:hover {
        cursor: pointer;
    }

    &:active {
        transform: scale(0.97);
    }
`;

export const UserInfoForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 400px;
    width: 90%;
    max-width: 600px;
    background-color: #046ee5;
    border-radius: 5px;
    padding: 10px;

    h1 {
        font-size: 20px;
        width: 80%;
        white-space: pre-wrap;
        text-align: center;
    }

    input {
        width: 100%;
        height: 40px;
        margin: 5px;
        padding: 5px;
    }

    button {
        width: 200px;
        height: 30px;
        margin: 3px;
        border: none;
        border-radius: 5px;
        font-size: 20px;
        color: black;
        background-color: white;
    }

    button:last-child {
        background-color: #046ee5;
    }

    button:hover {
        cursor: pointer;
    }

    button:active {
        transform: scale(0.97);
    }
`;

export const PaymentInfoContainer = styled.div`
    display: ${props => props.modal === "none" ? "none" : props.modal};
    justify-content: center;
    align-items: center;
    z-index: 1;
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: white;
`