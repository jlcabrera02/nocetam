const d = document,
  $forBtn = d.getElementById("forBtn"),
  $btnLoadImage = d.getElementById("btnLoadImage"),
  $inputFile = d.getElementById("uploadImage"),
  $formCreateNote = d.getElementById("createNota"),
  $formFile = document.getElementById("uploadFileForm"),
  edit = {},
  state = {}; /* = { sx, sy, swidth, sheight, dx, dy, dwidth, dheight } */

const canvass = document.getElementById("canvas");

const app = (function () {
  const canvas = d.createElement("canvas"),
    canvasNota = d.createElement("canvas"),
    contextNota = canvasNota.getContext("2d"),
    context = canvas.getContext("2d"),
    main = d.getElementById("main");

  canvas.classList.add("canvas", "w-10/12", "m-auto");

  public = {};

  public.loadPicture = function (edit) {
    main.innerHTML = "";
    let imageObj = new Image();
    imageObj.src = edit.url;

    main.appendChild(canvas);
    //Carga la imagen cuando el recorte esta listo en un canvas
    imageObj.onload = function () {
      canvas.width = edit.swidth;
      canvas.height = edit.sheight;
      context.drawImage(
        imageObj,
        edit.sx,
        edit.sy,
        edit.swidth,
        edit.sheight,
        0,
        0,
        edit.swidth,
        edit.sheight
      );
    };
  };

  public.getImgData = function () {
    return context.getImageData(0, 0, canvas.width, canvas.height);
  };

  public.drawImage = (url) => {
    main.innerHTML = "";
    let img = new Image();
    img.src = url;
    img.alt = "Recortador";
    img.classList.add("canvas", "w-10/12");
    main.appendChild(img);

    new Cropper(img, {
      aspectRatio: NaN,
      viewMode: 2,
      dragMode: "none",
      zoomOnWheel: false,
      crop(event) {
        edit.sx = event.detail.x;
        edit.sy = event.detail.y;
        edit.swidth = event.detail.width;
        edit.sheight = event.detail.height;
        edit.url = url;
      },
    });
  };

  public.createNote = function (coor) {
    canvasNota.width = 2000;
    canvasNota.height = 380;

    state.nombre = coor.nota;

    let time = new Date(coor.tiempo),
      year = time.getFullYear(),
      month = time.getMonth() + 1,
      day = time.getDate(),
      hour = time.getHours(),
      minute = time.getMinutes();

    contextNota.fillStyle = "rgb(255,255,255, 0.5)";
    contextNota.fillRect(0, 0, 820, 380);
    contextNota.font = `50pt sans-serif`;
    contextNota.fillStyle = "black";
    contextNota.fillText(`Latitud: ${coor.latitud}`, 5, 60);
    contextNota.fillText(`Longitud: ${coor.longitud}`, 5, 120);
    contextNota.fillText(`Elevación: ${coor.altitud} m`, 5, 180);
    contextNota.fillText(`Precisión: ${coor.presicion} m`, 5, 240);
    contextNota.fillText(
      `Tiempo: ${zfill(day, 2)}-${zfill(month, 2)}-${zfill(year, 4)} ${zfill(
        hour,
        2
      )}:${zfill(minute, 2)}`,
      5,
      300
    );
    contextNota.fillText(`Nota: ${coor.nota}`, 5, 360);
    app.aplastarNota(canvasNota.toDataURL());
  };

  public.aplastarNota = function (urlImage) {
    let nota = new Image();
    nota.src = urlImage;

    let pitagoras =
      Math.sqrt(Math.pow(edit.swidth, 2) + Math.pow(edit.sheight, 2)) / 6;

    let relacionAspecto = 380 / 820,
      newHeight = relacionAspecto * pitagoras;

    nota.onload = function () {
      context.drawImage(
        nota,
        8,
        edit.sheight - (newHeight + 5),
        pitagoras * 2.4,
        newHeight
      );
    };
  };

  public.generarImage = function () {
    let a = d.createElement("a");
    a.href = canvas.toDataURL("image/jpeg");
    a.download = state.nombre || "notecam";
    a.click();
    guardarBitacora();
  };

  return public;
})();

//Evento que dectecta el cambio si el input file tiene un archivo guardado
d.addEventListener("change", (e) => {
  if (e.target.matches("#uploadImage")) {
    if (e.target.files.length > 0) {
      $forBtn.classList.remove("bg-gray-500");
      $forBtn.classList.add("bg-lime-500");
      $forBtn.textContent = $inputFile.files[0].name;
      $btnLoadImage.classList.remove("bg-gray-500", "opacity-50");
      $btnLoadImage.classList.add("bg-lime-500");
      $btnLoadImage.disabled = false;
    }
  }
});

// Formulario para subir un archivo
$formFile.addEventListener("submit", (e) => {
  e.preventDefault();
  let url = URL.createObjectURL(e.target.nada.files[0]);
  $forBtn.classList.remove("bg-lime-500");
  $btnLoadImage.classList.remove("bg-lime-500");
  $forBtn.classList.add("bg-gray-500");
  $btnLoadImage.classList.add("bg-gray-500", "opacity-50");
  $btnLoadImage.disabled = true;
  $forBtn.textContent = "Seleccionar archivo";
  app.drawImage(url);
});

//Eventos para recortar y generar imagen
d.addEventListener("click", (e) => {
  if (e.target.matches("#recortar")) {
    app.loadPicture(edit);
  } else if (e.target.matches("#cleanNota")) {
    app.loadPicture(edit);
  } else if (e.target.matches("#masmenos")) {
    $formCreateNote.altitud.value += "±";
  }
});

//formulario que obtendra los datos de la nota
$formCreateNote.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = {
    [e.target.latitud.name]: e.target.latitud.value,
    [e.target.longitud.name]: e.target.longitud.value,
    [e.target.altitud.name]: e.target.altitud.value,
    [e.target.presicion.name]: e.target.presicion.value,
    [e.target.tiempo.name]: e.target.tiempo.value,
    [e.target.nota.name]: e.target.nota.value,
  };

  toggleModal("defaultModal", false);

  app.createNote(formData);
});

//Devuelve numero 0 a izquierda si es necesario
function zfill(number, width) {
  var numberOutput = Math.abs(number); /* Valor absoluto del número */
  var length = number.toString().length; /* Largo del número */
  var zero = "0"; /* String de cero */

  if (width <= length) {
    if (number < 0) {
      return "-" + numberOutput.toString();
    } else {
      return numberOutput.toString();
    }
  } else {
    if (number < 0) {
      return "-" + zero.repeat(width - length) + numberOutput.toString();
    } else {
      return zero.repeat(width - length) + numberOutput.toString();
    }
  }
}

//peticion que me ayuda a saber cuantas personas lo usan al mes

async function guardarBitacora(body) {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(body),
    };

    let res = await fetch(
      "https://sembrandovida.herokuapp.com/api/notecam",
      options
    );

    let json = await res.json();

    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
