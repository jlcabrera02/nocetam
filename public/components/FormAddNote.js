const FormAddNote = () => {
  const inputStyles = [
    "border",
    "border-red-500",
    "rounded-full",
    "mx-auto",
    "px-1",
    "block",
    "shadow-md",
  ];

  return `
  <form class="w-full">
    <div id="row1" class="flex flex-col justify-center aling-center w-1/2 mx-auto">
      <div>
        <p class="text-gray-500 text-center text-sm font-medium">Latitud</p>
        ${Input({
          className: inputStyles,
          type: "number",
          step: "any",
          placeholder: "17.254136",
          name: "latitud",
        })}
      </div>
      <div>
        <p class="text-gray-500 text-center text-sm font-medium">Longitud</p>
        ${Input({
          className: inputStyles,
          type: "number",
          step: "any",
          placeholder: "-91.254136",
          name: "longitud",
        })}
      </div>
      <div>
        <p class="text-gray-500 text-center text-sm font-medium">Elevación</p>
        <div class="inline-flex items-center gap-2 w-full">
        ${Input({
          className: inputStyles,
          type: "text",
          placeholder: "12.6±13.10",
          name: "elevacion",
        })}
          <button class="bg-red-500 rounded-lg w-20 h-10 text-white hover:bg-red-600" access="d">±</button>
        </div>
      </div>
    </div>
    <div id="row2" class="flex flex-col justify-center aling-center w-1/2 mx-auto">
      <div>
        <p class="text-gray-500 text-center text-sm font-medium">Presición</p>
        <input class="border border-red-500 rounded-full mx-auto px-1 block shadow-md" type="number" step="any"
          placeholder="1.6" name="precision">
      </div>
      <div>
        <p class="text-gray-500 text-center text-sm font-medium">Tiempo</p>
        <input class="border border-red-500 rounded-full mx-auto px-1 block shadow-md" type="datetime-local"
          name="tiempo">
      </div>
      <div>
        <p class="text-gray-500 text-center text-sm font-medium">Nota</p>
        <input class="border border-red-500 rounded-full mx-auto px-1 block shadow-md" type="text"
          placeholder="Reunion mensual" name="nota">
      </div>
    </div>
  </form>
  `;
};

function Input(obj) {
  const input = document.createElement("input");
  const { type, className, name, step = null, placeholder = null } = obj;

  input.type = type;
  input.classList.add(...className);
  input.name = name;

  if (placeholder) {
    input.placeholder = placeholder;
  }

  if (step) {
    input.step = step;
  }

  return input.outerHTML;
}

export default FormAddNote;
