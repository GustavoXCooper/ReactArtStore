import Menu from "../components/menu/Menu"
import ProductDisplay from "../components/product/ProductDisplay"

const Gallery = () => {
    const item1 = {
        name: 'Teste',
        price: 1.55,
        category: '03',
        desc: 'aaaaaaaaaajja aajaja aja  aja aj ajajja a',
        sellable: false
    }
    const item2 = {
        name: 'Teste2',
        price: 16.55,
        category: '01',
        desc: 'aaaaaaaaaajja aajaja aja  aja aj ajajja a',
        sellable: false
    }
    const item3 = {
        name: 'Teste3',
        price: 12.55,
        category: '03',
        desc: 'aaaaaaaaaajja aajaja aja  aja aj ajajja a',
        sellable: true
    }
    const item4 = {
        name: 'Teste4',
        price: 12.55,
        category: '02',
        desc: 'aaaaaaaaaajja aajaja aja  aja aj ajajja a',
        sellable: true
    }
    const item5 = {
        name: 'Teste5',
        price: 11.55,
        category: '03',
        desc: 'aaaaaaaaaajja aajaja aja  aja aj ajajja a',
        sellable: true
    }
    const item6 = {
        name: 'Teste6',
        price: 12.05,
        category: '01',
        desc: 'aaaaaaaaaajja aajaja aja  aja aj ajajja a',
        sellable: false
    }
    const item7 = {
        name: 'Teste7',
        price: 13.00,
        category: '03',
        desc: 'aaaaaaaaaajja aajaja aja  aja aj ajajja a',
        sellable: false
    }
    const item8 = {
        name: 'Teste8',
        price: 2.35,
        category: '01',
        desc: 'aaaaaaaaaajja aajaja aja  aja aj ajajja a',
        sellable: true
    }
    const item9 = {
        name: 'Teste9',
        price: 20.45,
        category: '02',
        desc: 'aaaaaaaaaajja aajaja aja  aja aj ajajja a',
        sellable: false
    }

        
    
    const items = [item1, item2, item3, item4, item5,item6, item7, item8, item9,item9,item9]  

    return(
        <div>
            <Menu/>
            <ProductDisplay
                items = {items}
            />
        </div>
    )
}

export default Gallery