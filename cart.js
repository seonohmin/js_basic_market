import { getCartInfo } from "./module/cartToggleButton.js";
import { getProductList } from "./module/productList.js";
import { makeDOMwithProperties } from "./utils/dom.js";

const sectionDOM = document.getElementsByTagName('section')[0];
const cartPayContainerDOM = document.getElementById('cart-pay-container');

const cartInfo = getCartInfo();

if (cartInfo.length < 1) {
    const noticeDOM = makeDOMwithProperties('div', {
        innerHTML: '장바구니에 상품이 없습니다.',
        className: 'product-list-con',
    });
    sectionDOM.insertBefore(noticeDOM, cartPayContainerDOM);
} else {
   const productListDOM = getProductList(cartInfo);
   sectionDOM.insertBefore(productListDOM, cartPayContainerDOM);

   // A.insertBefore(B, C); - B가 A 아래의 C앞에 삽입되는 메서드
}