function Input(obj) {
  const input = document.createElement("input");
  const {
    type,
    className,
    name,
    step = null,
    placeholder = null,
    id = null,
  } = obj;

  input.type = type;
  input.classList.add(...className);
  input.name = name;
  input.autocomplete = "off";
  input.required = true;

  if (placeholder) {
    input.placeholder = placeholder;
  }
  if (step) {
    input.step = step;
  }
  if (id) {
    input.id = id;
  }

  return input;
}

export default Input;
