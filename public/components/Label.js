const Label = (props) => {
  const label = document.createElement("label");
  const { className, content, htmlFor = null } = props;
  label.classList.add(...className);
  label.innerHTML = content;

  if (htmlFor) {
    label.htmlFor = htmlFor;
  }

  return label;
};

export default Label;
