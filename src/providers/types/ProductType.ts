interface ProducsContextType {
    products: {
        id: number
        name: string
        imgSRC: string
        price: number
    }[],
    getProducts: (param: string) => Promise<void>
    changeUrlParam: (param: string) => void
}

export default ProducsContextType;