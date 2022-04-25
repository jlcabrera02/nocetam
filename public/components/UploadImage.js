import Input from "./Input.js";
import Label from "./Label.js";

const d = document;
const UploadImage = () => {
  const div = d.createElement("div");
  div.classList.add(
    "border",
    "border-2",
    "border-dashed",
    "border-sky-300",
    "w-11/12",
    "max-h-max",
    "m-3",
    "sm:w-1/2",
    "mx-auto"
  );
  div.appendChild(formUploadImage());
  div.ondragover = (e) => {
    div.classList.add("border-red-300");
    div.classList.remove("border-sky-300");
  };
  div.ondragleave = (e) => {
    div.classList.remove("border-red-300");
    div.classList.add("border-sky-300");
  };
  return div;
};

function formUploadImage() {
  const form = d.createElement("form");
  form.appendChild(
    Input({
      type: "file",
      id: "file",
      className: ["hidden"],
      name: "file",
    })
  );

  form.appendChild(
    Label({
      content: `
        <div class='bg-sky-300 flex w-1/2 mx-auto p-2 rounded-lg hover:bg-sky-500 cursor-pointer'>

          <img class='w-10 h-10' src="./assets/upload.png" alt="upload">


          <p>Subir archivo</p>
        </div>
      `,
      className: ["my-20", "block"],
      htmlFor: "file",
    })
  );

  return form;
}

export default UploadImage;
