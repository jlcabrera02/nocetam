import BtnModal from "./BtnModal.js";
import UploadImage from "./UploadImage.js";
import Modal from "./Modal.js";
const d = document;

function App() {
  const $root = d.getElementById("root");

  let $modal = Modal();

  $root.innerHTML = null;
  $root.appendChild(BtnModal($modal));
  $root.appendChild($modal);
  $root.appendChild(UploadImage());
}

d.addEventListener("DOMContentLoaded", App);
