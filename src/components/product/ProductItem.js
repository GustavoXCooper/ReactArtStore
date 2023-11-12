import styled from 'styled-components'

const ProductItem = ({info, onClick}) => {
    return (
        <Body> 
            <BodyContainer onClick={onClick}>
                <Icon/>   
                <Info className="Info">
                    <Warning sellable={info.sellable}>Não está a venda.</Warning>
                    <h1>Título: {info.name}</h1>
                    {!info.sellable &&
                        <p>Preço: R${info.price}</p>
                    }
                </Info>
            </BodyContainer>    
        </Body>
    )
}

const Warning = styled.div`
    height: 15px;
    width: 100%;
    font-size: 10px;
    background-color: #000;
    color: #fff;
    display: ${(props) => (props.sellable ? 'block' : 'none')};
    justify-content: center;
`

const Body = styled.div`
    width: 20vw;
    min-width: 250px;
    padding: 0px
    display: flex;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        .Info{
            background-color: #fff;
            h1{
                color: #000;
            }
            p{
                color: #000;
            }
        }
    }
   
`
const BodyContainer = styled.div`
    margin: 5px;
    padding: 5px;
    width: 90%;
    display: flex;
    flex-direction: column;
`

// Icon vai virar img depois
const Icon = styled.div`
    height: 120px;
    width: 100%;
    background-color: green;
`
const Info = styled.div`
    height: 70px;
    background-color: #181818;
    text-align: center;
    color: #fff;
    transition: 0.3s;
    h1{
        font-size: 15px;
        padding: 0px;
        margin-bottom: 0px;
    }
    p{
        margin-top: 0px;
        font-size: 10px
    }
`

export default ProductItem