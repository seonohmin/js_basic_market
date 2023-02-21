import { appendChildrenList, makeDOMwithProperties } from "./utils/dom.js";

const sectionDOM = document.getElementsByTagName('section')[0];


const productCard = makeDOMwithProperties('div',{
    className : 'product-card',
})

// -- product-image-con --
const productImageCon = makeDOMwithProperties('div',{
    className : 'product-image-con',
})

const productImage = makeDOMwithProperties('img',{
    src: "public/assets/파프리카.jpg",
    alt: "파프리카"
})

const cartToggleBtn = makeDOMwithProperties('button',{
    className : 'cart-toggle-btn',
    type: 'button',
})

const cartImage = makeDOMwithProperties('img',{
    className: 'cart-image',
    src: "public/assets/cart.png",
    alt: "카트"
})

cartToggleBtn.appendChild(cartImage);
appendChildrenList(productImageCon, [productImage, cartToggleBtn]);

// -- product-description --
const productDescription = makeDOMwithProperties('div',{
    className : 'product-description',
})

const productName = makeDOMwithProperties('div',{
    className : 'product-name',
    innerHTML : '파프리카 2입',
})

const productPriceCon = makeDOMwithProperties('div',{
    className : 'product-price-con',
})

const productDiscountPercent = makeDOMwithProperties('div',{
    className : 'product-discount-percent',
    innerHTML : '20%',
})

const productPrice = makeDOMwithProperties('div',{
    className : 'product-price',
    innerHTML : '2000원',
})

const productOriginalPrice = makeDOMwithProperties('div',{
    className : 'product-original-price',
    innerHTML : '2500원',
})

appendChildrenList(productPriceCon, [productDiscountPercent, productPrice]);
appendChildrenList(productDescription, [productName, productPriceCon, productOriginalPrice]);

appendChildrenList(productCard, [productImageCon, productDescription]);

sectionDOM.appendChild(productCard);