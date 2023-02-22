import { makeDOMwithProperties } from '../utils/dom.js';

const addCartInfo = () => {
    localStorage.setItem('', )
};


export const getCartToggleButton = () => {
    const cartToggleBtn = makeDOMwithProperties('button', {
        type : 'button',
        className : 'cart-toggle-btn',
        onclick: () => {
            addCartInfo();
        }
    });
    const cartImage = makeDOMwithProperties('img', {
        src : 'public/assets/cart.png',
        className: 'cart-image'
    });
    cartToggleBtn.appendChild(cartImage);

  return cartToggleBtn;
};