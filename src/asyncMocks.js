import { Link } from "react-router-dom";
import amalayaImg from '../src/assets/img/amalaya.jpeg'
import elementosImg from '../src/assets/img/elementos.jpeg'

const products = [
    {
        id: '1',
        name:'amalaya',
        price: 5000,
        img: amalayaImg,
        category: 'Malbec',
        stock: 25,
        description:'Brillante color rubí con bordes violetas. Fresas, frambuesas y fruta madura con toque de pimienta y aromas de especias y elegantes notas florales',
    },
        {
        id: '2',
        name: 'Elementos',
        price: 3000,
        img: elementosImg,
        category: 'Malbec',
        stock: 15,
        description: 'Vino tinto joven argentino de color rojo rubí con destellos violáceos. Se caracteriza por sus aromas frutados, su suave aporte de madera y sus taninos dulces y suaves.'
}]

export const getProducts = () => {
    return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
    });
};

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products.find((prod) => prod.id === productId));
    }, 500);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
    });
};