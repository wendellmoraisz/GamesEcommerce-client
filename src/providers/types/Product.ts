interface Product {
    id: number
    name: string
    imgSRC: string
    price: number
    quantityInCart: number
    stockQuantity?: number
}

export default Product;