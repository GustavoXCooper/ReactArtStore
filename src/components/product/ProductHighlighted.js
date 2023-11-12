const ProductHighlighted = ({item}) => {
    return(
        <div>
            <p>lola ta feio mas é só pra mostrar o layout ok</p>
            <p>título: {item.name}</p>
            <p>preço: {item.price}</p>
            <p>descrição:{item.desc}</p>
        </div>
    )
}


export default ProductHighlighted