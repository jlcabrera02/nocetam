//Actiones para interactuar con la ventana modal
import showAndHide from "./showAndHide.js";

//Reciben como parámetro el contenedor padre del modal

export const openModal = (modal) => {
  showAndHide(
    modal,
    ["block", "animate-fadeIn"],
    ["hidden", "animate-fadeOut"]
  );

  showAndHide(
    modal.children[0].children[1],
    ["animate-scaleIn"],
    ["animate-scaleOut"]
  );
};

export const closeModal = (modal) => {
  showAndHide(modal, ["animate-fadeOut"], ["block", "animate-fadeIn"]);

  showAndHide(
    modal.children[0].children[1],
    ["animate-scaleOut"],
    ["animate-scaleIn"]
  );

  //Coloco el setTimeout porque los display no son animables

  setTimeout(() => {
    modal.classList.add("hidden");
  }, 1000);
};
