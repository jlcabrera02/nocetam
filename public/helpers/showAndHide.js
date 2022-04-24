//Agrega las clases que asignemos para mostras el elemento
const showAndHide = (el, classesToAdd, classesToRemove) => {
  el.classList.remove(...classesToRemove);
  el.classList.add(...classesToAdd);
};

export default showAndHide;
