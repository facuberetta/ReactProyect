import { Link } from "react-router-dom";
import amalayaImg from '../src/assets/img/amalaya.jpeg'
import elementosImg from '../src/assets/img/elementos.jpeg'
import RutiniImg from '../src/assets/img/rutini-cabernet.jpg'
import TrumpeterImg from '../src/assets/img/Trumpeter-Cabernet-Sauvignon.jpg'
import NinaImg from '../src/assets/img/Nina-Gold-Petit-Verdot.jpg'

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
        description: 'Vino tinto joven argentino de color rojo rubí con destellos violáceos. Se caracteriza por sus aromas frutados, su suave aporte de madera y sus taninos dulces y suaves.',
},
{
    id: '3',
    name:'Rutini',
    price: 7500,
    img: RutiniImg,
    category: 'Cabernet',
    stock: 15,
    description:' Intenso con matices púrpura, brillante. Impacta su carácter frutado (frambuesa, frutilla, mora), combinado con frescos acentos mentolados, especias y ahumados, que provienen de su cuidada crianza en barrica. Firme en paladar, es redondo, carnoso, fluido y persisten suaves taninos dejando un agradable final.',
},
{
    id: '4',
    name:'Trumpeter',
    price: 6800,
    img: TrumpeterImg,
    category: 'Cabernet',
    stock: 25,
    description:'Rubí intenso y profundo con matices violáceos. Nariz frutal y especiada que recuerda a frutos rojos maduros y a especias como la pimienta y el clavo de olor',
},
{
    id: '5',
    name:'Nina',
    price: 10000,
    img: NinaImg,
    category: 'Petit Verdot',
    stock: 25,
    description:'Se destaca por su rojo profundo impactante y denso con tonalidades violáceas, exhibiendo una lágrima abundante y coloreada. En Nariz despliega notas de frutos rojos, arándanos, elementos minerales, todos en armonía con toques de chocolate y vainilla.',
},
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(products);
            } catch (error) {
                reject("Error al obtener productos");
            }
        }, 500);
    });
};

export const getProductsById = async (productId) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return products.find(prod => prod.id === productId);
};

export const getProductsByCategory = async (categoryId) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return products.filter(prod => prod.category === categoryId);
};