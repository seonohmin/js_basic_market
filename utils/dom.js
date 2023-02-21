export const makeDOMwithProperties = (domType, propertyMap) => {
    const dom = document.createElement(domType);
    Object.keys(propertyMap).forEach((key) => {
        dom[key] = propertyMap[key];
    });
    return dom;
};
//test! home22
export const appendChildrenList = (target, childrenList) => {
    if (!Array.isArray(childrenList)) return;

    childrenList.forEach((children) => {
        target.appendChild(children);
    })

};
