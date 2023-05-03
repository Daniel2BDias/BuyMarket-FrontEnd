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
  height: 100%;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow-Y: scroll;
  padding: 20px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #4682b4;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }
`;


export const ProductImg = styled.img`
    height: 60%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    text-overflow: ellipsis;
`;

export const ProductContainer = styled.div`
    height: auto;
    width: auto;
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
  height: 460px;
  width: 90%;
  max-width: 600px;
  background-color: #046ee5;
  border-radius: 5px;
  padding: 20px;
  margin-top: 10px;

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: white;
    margin-bottom: 20px;
    text-align: center;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  }

  label {
    display: block;
    width: 100%;
    color: white;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  }

  input {
    width: 100%;
    height: 40px;
    margin: 5px 0 20px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    background-color: #f0f0f0;

  }

  button {
    width: 200px;
    height: 40px;
    margin: 20px 0 10px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    background-color: #0d5c92;
    transition: transform 0.1s ease-in-out;
  }

  button:hover {
    cursor: pointer;
    transform: scale(1.05);
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