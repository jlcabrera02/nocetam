//Componente botón para abrir el modal pasando como parametro el div principal del la pantalla modal

import { openModal } from "../helpers/actionsModal.js";

const BtnModal = (modal) => {
  const $btn = document.createElement("button");
  $btn.classList.add("bg-sky-700", "text-white", "p-3", "hover:bg-sky-800");
  $btn.textContent = "Abrir Modal";
  $btn.onclick = (e) => openModal(modal);

  return $btn;
};

export default BtnModal;
