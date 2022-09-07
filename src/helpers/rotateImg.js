export const rotateImg = (ul, img_arrow, className_showUl) => {
  ul.current.className.includes(className_showUl)
    ? img_arrow.current.classList.add("img_rotate")
    : img_arrow.current.classList.remove("img_rotate");
};
