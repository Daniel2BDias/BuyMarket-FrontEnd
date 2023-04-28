import { ProductImg, ProductContainer } from "../styles";

const ProductComp = ({image, name, value}) => {
    return (
        <ProductContainer>
        <ProductImg src={image}/>
        <p>{name}</p>
        <p>{value}</p>
        </ProductContainer>
    )
};

export default ProductComp;