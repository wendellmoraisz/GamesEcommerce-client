const formatPrice = (value: number) => {
    return `R$${value.toFixed(2).toString().replace(".", ",")}`;
}

export default formatPrice;