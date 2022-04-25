// Venta modal
import { closeModal } from "../helpers/actionsModal.js";
import FormAddNote from "./FormAddNote.js";

const d = document;

const Modal = () => {
  const div = d.createElement("div");
  const form = FormAddNote();
  div.classList.add("hidden", "fixed", "inset-0");
  div.innerHTML = `
  <div
    class="
        modal-flex-conteiner flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
  >
    <div
      id="modal-conteiner"
      class="modal-bg-conteiner fixed inset-0 bg-gray-700 bg-opacity-75"
    ></div>

    <div class="modal-conteiner inline-block aling-botton bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:aling-middle sm:max-w-max w-full">
      <div class="modal-wrapper bg-white px-4 pt-5 pb-4  sm:p-6 sm:pb-4">
        <div class="modal-wrapper-flex sm:flex sm:items-start">
          <div class="modal-icon flex mx-auto flex-shrink-0 items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"></div>
          <div class="modal-content w-full text-center mt-3 sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg font-medium text-gray-900">
              Añadir nota
            </h3>
            <div class="modal-text mt-2">
              ${form}
            </div>
          </div>
        </div>
      </div>

      <div class="modal-actions bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button form="addNote" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-md px-4 py-2 bg-red-700 font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
          Añadir
        </button>
        <button
          id="close-modal"
          class="w-full inline-flex justify-center rounded-md border border-gray-200 shadow-md px-4 py-2 mt-3 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
          Cancelar
        </button>
      </div>
    </div>
  </div>
  `;

  div.onclick = (e) => {
    if (e.target.matches("#close-modal")) {
      closeModal(div);
    } else if (e.target.matches("#mas-menos")) {
      console.log(e);
      e.target.previousElementSibling.value += "±";
      e.target.previousElementSibling.focus();
    }
  };

  div.oninput = (e) => {
    let masmenos = document.getElementById("addNote").elevacion;

    if (e.target === masmenos) {
      let signo = document.getElementById("mas-menos");

      if (/±/.test(e.target.value)) {
        signo.disabled = true;
        signo.classList.remove(
          "hover:bg-red-600",
          "border-red-500",
          "bg-red-400"
        );
        signo.classList.add("border-yellow-500", "bg-yellow-400");
      } else {
        signo.classList.add("hover:bg-red-600", "border-red-500", "bg-red-400");
        signo.classList.remove(
          "border-yellow-500",
          "hover:bg-red-600",
          "bg-yellow-400"
        );
        e.target.value = e.target.value.replace(/\+-/, "±");
        signo.disabled = false;
      }
    }
  };

  div.onsubmit = (e) => {
    if (e.target.matches("#addNote")) {
      e.preventDefault();
      console.log("correcto");
      closeModal(div);
    }
  };

  return div;
};

export default Modal;
