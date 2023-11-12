import styled from "styled-components"
const SocialMedia = ({text, link}) => {
    return(
        <Redirect href={link}>{text}</Redirect>
    )
}

const Redirect = styled.a`
    display: block;
    width: 50%;
    text-align: center;
    color: #fff;
    padding: 10px 0px;
    transition: 0.3s;
    text-decoration: none;
    &:hover{
        background-color: #fff;
        color: #000;
    }
`
export default SocialMedia