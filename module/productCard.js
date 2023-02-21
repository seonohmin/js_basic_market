import { appendChildrenList, makeDOMwithProperties } from "./utils/dom.js";

const getProductCard = (
    imgSrc,
    name,
    discountPercent,
    price,
    originalPrice,
) => {
    const productCard = makeDOMwithProperties('div',{
        className : 'product-card',
    })
    
    // -- product-image-con --
    const productImageCon = makeDOMwithProperties('div',{
        className : 'product-image-con',
    })
    
    const productImage = makeDOMwithProperties('img',{
        src: imgSrc,
        alt: name
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
        innerHTML : name,
    })
    
    const productPriceCon = makeDOMwithProperties('div',{
        className : 'product-price-con',
    })
    
    const productDiscountPercent = makeDOMwithProperties('div',{
        className : 'product-discount-percent',
        innerHTML : `${discountPercent}%`,
    })
    
    const productPrice = makeDOMwithProperties('div',{
        className : 'product-price',
        innerHTML : `${price.toLocaleString()}원`,
    })
    
    const productOriginalPrice = makeDOMwithProperties('div',{
        className : 'product-original-price',
        innerHTML : `${originalPrice.toLocaleString()}원`,
    })
    
    appendChildrenList(productPriceCon, [productDiscountPercent, productPrice]);
    appendChildrenList(productDescription, [productName, productPriceCon, productOriginalPrice]);
    
    appendChildrenList(productCard, [productImageCon, productDescription]);

    return productCard;
};