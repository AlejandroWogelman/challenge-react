export const backInListSelected = (name) => {
  const li_nodes = document.querySelectorAll(".select-container__ul li");

  li_nodes.forEach((el) => {
    const condition = el.title === name;
    return condition
      ? el.classList.add("select-container__active")
      : el.classList.remove("select-container__active");
  });
};
