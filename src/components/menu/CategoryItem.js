import styled from "styled-components";

const CategoryItem = ({text, onClick, category, activeCategory}) => {
    const isActive = (category === activeCategory);
    return(
        <Body onClick={onClick} isActive={isActive}>
            {text}
        </Body>
    )
}

const Body = styled.div`
    height: 100%;
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #fff;
    transition: 0.3s;
    cursor: pointer;
    color: ${(props) => (props.isActive ? "#000" : "#fff")};
    background-color: ${(props) => (props.isActive ? "#fff" : "#000")};
    &:hover{
        background-color: ${(props) => (props.isActive ? "none" : "#fff")};
        color: #000;
    }
    &:first-child{
        border-top-left-radius: 5px;
    }
    &:last-child{
        border-top-right-radius: 5px;
    }
`


export default CategoryItem