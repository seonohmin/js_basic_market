
import { getProductCard } from "../module/productCard.js"

const sectionDOM = document.getElementsByTagName('section')[0];
const productCard = getProductCard({
    "id": 4,
    "imgSrc": "/public/assets/파프리카.jpg",
    "name": "냉장용",
    "discountPercent": 5,
    "price": 14820,
    "originalPrice": 15600
});

sectionDOM.appendChild(productCard);