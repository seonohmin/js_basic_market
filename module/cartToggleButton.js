import { makeDOMwithProperties } from '../utils/dom.js';
import { CART_COOKIE_KEY } from '../constants/cart.js';

export const getCartInfo = () => JSON.parse(localStorage.getItem(CART_COOKIE_KEY)) || [];

const isInCart = ({ id }) => {
    const originalCartInfo = getCartInfo();
    return !!originalCartInfo.find((cartInfo) => cartInfo.id === id); // true, false boolean값으로 명시적 형변환과 같다.
};

const addCartInfo = (productInfo) => {
    const originalCartInfo = getCartInfo();

    if (originalCartInfo.findIndex((cartInfo) => cartInfo.id === productInfo.id) !== -1) return;
    
    localStorage.setItem(CART_COOKIE_KEY, JSON.stringify([
        ...originalCartInfo,
        productInfo,
    ]));
};

const removeCartInfo = ({ id }) => {
    //장바구니에서 해당 물풀의 정보를 삭제
    const originalCartInfo = getCartInfo();
    const newCartInfo = originalCartInfo.filter((cartInfo) => cartInfo.id !== id);
    localStorage.setItem(CART_COOKIE_KEY, JSON.stringify(newCartInfo));
}

export const getCartToggleButton = (productInfo) => {
    let inCart = isInCart(productInfo);
    const cartToggleBtn = makeDOMwithProperties('button', {
        type : 'button',
        className : 'cart-toggle-btn',
        onclick: () => {
            if (inCart) { //이미 장바구니에 들어가 있으면
                if (!confirm(`[${productInfo.name}]을 장바구니에서 삭제할까요?`)) return; //early-return
                removeCartInfo(productInfo);
                cartImage.src = 'public/assets/cart.png';
            }else { //장바구니에 없으면
                addCartInfo(productInfo); //장바구니 넣기
                cartImage.src = 'public/assets/cartDisabled.png';
                if (!confirm("장바구니에 담았습니다. 장바구니 페이지로 이동할까요?")) {
                    location.href = '/js_basic_market/cart.html';
                }   
            }
            inCart = !inCart;
        }
    });
    const cartImage = makeDOMwithProperties('img', {
        src : inCart ? 'public/assets/cartDisabled.png' : 'public/assets/cart.png',
        className: 'cart-image'
    });
    cartToggleBtn.appendChild(cartImage);

  return cartToggleBtn;
};