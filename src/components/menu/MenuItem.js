import styled from "styled-components";

const MenuItem = ({text}) => {
    return(
        <Item>
            {text}
        </Item>
    )
}

const Item = styled.li`
    min-width: 100px;
    text-align: center;
    padding: 15px;
    font-size: 20px
    background-color: #000;
    color: #fff;
    transition: 0.3s;
    cursor: pointer;
    color: #fff;
    background-color: #000;
    &:hover{
        background-color: #fff;
        color: #000;
    }

`
export default MenuItem