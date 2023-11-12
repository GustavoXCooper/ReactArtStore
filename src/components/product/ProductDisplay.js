import { useState, useEffect } from "react";
import ProductItem from "./ProductItem"
import styled from "styled-components"
import ProductHighlighted from "./ProductHighlighted";
import categories from "../../constants/categories";
import CategoryItem from "../menu/CategoryItem";

const ProductDisplay = ({items}) => {
    const [products, setProducts] = useState([])
    const [productHighlighted, setHighlighted] = useState(null)
    const [activeCategory, setCategory] = useState(categories[0].id);
    useEffect(() => {
        setProducts(items)
        
        return;
    },[items])

    return(
        <Body>
            <SizeRestriction>
                <div></div>
                <IconBody>
                {productHighlighted && (
                    <ProductHighlighted
                        item={productHighlighted}
                    />
                )}
                </IconBody>
                <IconsContainer>
                    <IconsBody>
                        <CategoryMenu>
                            {categories.map((category, index) => (
                                <CategoryItem
                                    onClick={() => setCategory(category.id)}
                                    key={index}
                                    text={category.name}
                                    category={category.id}
                                    activeCategory={activeCategory}
                                />
                             ))}
                        </CategoryMenu>
                        {products.map((product, index) => (
                            product.category === activeCategory &&  (
                                <ProductItem 
                                    key={index} 
                                    info={product} 
                                    onClick={() => setHighlighted(product)}
                                />
                            )
                        ))}
                    </IconsBody> 
                </IconsContainer> 
            </SizeRestriction>         
        </Body>
    )
}
const CategoryMenu = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;   
`

const SizeRestriction = styled.div`
    width: 90vw;
    margin: 0px;
    padding: 0px;
    display: flex;
    justify-content: space-between;
`

const Body = styled.div`
    margin-top: 20px;
    width: 100%;
    display:flex;
    justify-content: space-around;

`
const IconBody = styled.div`
    position: fixed;
    width: 25vw;
    height: 80vh;
    background-color: #000; 
    border-radius: 5px;
    color: #fff;
    @media (max-width: 768px) {
        display: none;
    }
`
const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #000;
    border-radius: 5px;
`
const IconsBody = styled.div`
    height: auto;
    width: 60vw;
    display: flex;
    justify-content: space-eevenly;
    flex-wrap: wrap;
    background-color: #000;
    border-radius: 5px;
`

export default ProductDisplay