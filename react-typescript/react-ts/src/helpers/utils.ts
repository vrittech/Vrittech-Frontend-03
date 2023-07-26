export const getCurrentYear = () => {
    return new Date().getFullYear();
}

export const dateFormatter = (data: any) => {
    return `${new Date(data).getFullYear()}-${new Date(data).getMonth()}`;
}