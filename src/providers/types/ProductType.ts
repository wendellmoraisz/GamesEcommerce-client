interface ProducsContextType {
    products: {
        name: string
        imgSRC: string
        price: number
    }[],
    getProducts: () => Promise<void>
}

export default ProducsContextType;