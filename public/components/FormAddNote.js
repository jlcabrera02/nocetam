import Input from "./Input.js";
const FormAddNote = () => {
  const inputStyles = [
    "border",
    "border-red-500",
    "rounded-full",
    "mx-auto",
    "px-1",
    "block",
    "shadow-md",
    "sm:mx-2",
  ];

  return `
  <form id="addNote" class="w-full">
    <div id="row1" class="flex flex-col justify-center aling-center w-max mx-auto sm:flex-row sm:wrap">
      <div>
        <p class="text-gray-500 text-center text-sm font-medium">Latitud</p>
        ${
          Input({
            className: inputStyles,
            type: "number",
            step: "any",
            placeholder: "17.254136",
            name: "latitud",
          }).outerHTML
        }
      </div>
      <div>
        <p class="text-gray-500 text-center text-sm font-medium">Longitud</p>
        ${
          Input({
            className: inputStyles,
            type: "number",
            step: "any",
            placeholder: "-91.254136",
            name: "longitud",
          }).outerHTML
        }
      </div>
      <div>
        <p class="text-gray-500 text-center text-sm font-medium">Elevación (m)</p>
        <div class="inline-flex items-center gap-2 w-full relative">
        ${
          Input({
            className: inputStyles,
            type: "text",
            placeholder: "12.6±13.10",
            name: "elevacion",
          }).outerHTML
        }
        <button id="mas-menos" class="bg-red-400 rounded-r-full w-10 h-full text-white absolute right-0 z-0 hover:bg-red-600 border border-red-500" accessKey="m">±</button>
        </div>
      </div>
    </div>
    <div id="row2" class="flex flex-col justify-center aling-center w-max mx-auto sm:flex-row sm:wrap">
      <div>
        <p class="text-gray-500 text-center text-sm font-medium">Presición (m)</p>
        ${
          Input({
            className: inputStyles,
            type: "number",
            placeholder: "1.6",
            step: "any",
            name: "presicion",
          }).outerHTML
        }
      </div>
      <div>
        <p class="text-gray-500 text-center text-sm font-medium">Tiempo</p>
          ${
            Input({
              className: inputStyles,
              type: "datetime-local",
              name: "tiempo",
            }).outerHTML
          }
      </div>
      </div>
      <div id="row2" class="flex flex-col justify-center aling-center w-max mx-auto sm:flex-row sm:wrap">
      <div>
        <p class="text-gray-500 text-center text-sm font-medium">Nota</p>
        ${
          Input({
            className: inputStyles,
            type: "text",
            placeholder: "Reunión mensual",
            name: "nota",
          }).outerHTML
        }
      </div>
      </div>
  </form>
  `;
};

export default FormAddNote;
