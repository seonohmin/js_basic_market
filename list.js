import { getProductCard } from "./module/productCard.js"


const sectionDOM = document.getElementsByTagName('section')[0];
const productCard = getProductCard({
    "id": 3,
    "imgSrc": "/js_basic_market/public/assets/삼겹살.jpg",
    "name": "구이용 삼겹살 599g (냉장)",
    "discountPercent": 4,
    "price": 14819,
    "originalPrice": 15599
});

sectionDOM.appendChild(productCard);
