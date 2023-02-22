import { makeDOMwithProperties } from '../utils/dom.js';
import { getProductCard } from './productCard.js';

export const getProductList = (productInfoList, removeCartCallback) => {
    if (productInfoList == null || !Array.isArray(productInfoList)) return; // 타입스크립트 필성성
    const productListContainer = makeDOMwithProperties('div',{
        className: 'product-list-con',
    });

    productInfoList.forEach((productInfo) => {
        productListContainer.appendChild(
            getProductCard({
                ...productInfo,
            }, removeCartCallback)
        )
    });

    return productListContainer;
};
