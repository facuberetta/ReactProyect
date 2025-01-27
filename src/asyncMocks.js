const products = [
    {
        id: '1',
        name:'amalaya',
        price: 5000,
        category: 'Malbec',
        img: 'https://www.espaciovino.com.ar/media/default/0001/61/thumb_60937_default_big.jpeg',
        stock: 25,
        description:'Brillante color rubí con bordes violetas. Fresas, frambuesas y fruta madura con toque de pimienta y aromas de especias y elegantes notas florales',
    },
    {id: '2', name: 'elementos', price: 3000, category: 'malbec', stock: 15, description:'vino tinto joven argentino de color rojo rubí con destellos violáceos. Se caracteriza por sus aromas frutados, su suave aporte de madera y sus taninos dulces y suaves.'},
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(products);
            }, 500);
        } catch (error) {
            reject(error);
        }
    });
};