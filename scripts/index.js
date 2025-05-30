const template = document.querySelector("#template").content;
const popupSave = document.querySelector(".popup__save");
const popupButton = document.querySelector(".profile__button-edit");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");

const inputName = document.querySelector("#inputname");
const inputJob = document.querySelector("#inputjob");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

const popupPlace = document.querySelector(".place-popup");
const popupPlus = document.querySelector(".profile__button-plus");
const popupClose2 = document.querySelector(".place-popup__close");
const popupCreate = document.querySelector(".popup__create");

popupButton.addEventListener("click", () => {
  popup.classList.remove("popup_opened");
});

popupPlus.addEventListener("click", () => {
  popupPlace.classList.remove("popup_opened-card");
});

popupCreate.addEventListener("click", () => {
  popupPlace.classList.remove("popup_opened-card");
});

popupSave.addEventListener("click", (e) => {
  e.preventDefault(); //ESTO EVITA QUE ACTUALICE
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  popup.classList.add("popup_opened");
});

popupClose.addEventListener("click", (e) => {
  e.preventDefault(); //ESTO EVITA QUE ACTUALICE
  popup.classList.add("popup_opened");
});

popupCreate.addEventListener("click", (e) => {
  e.preventDefault(); //ESTO EVITA QUE ACTUALICE
  popupPlace.classList.add("popup_opened-card");
});

popupClose2.addEventListener("click", (e) => {
  e.preventDefault(); //ESTO EVITA QUE ACTUALICE
  popupPlace.classList.add("popup_opened-card");
});

const initialCards = [
  {
    name: "Las Vegas",
    link: "/images/lasvegas.jpg",
  },
  {
    name: "New York",
    link: "/images/newyork.jpg",
  },
  {
    name: "Chicago",
    link: "/images/chicago.png",
  },
  {
    name: "San Francisco",
    link: "/images/sanfrancisco.png",
  },
  {
    name: "Boston",
    link: "/images/boston.png",
  },
  {
    name: "Orlando",
    link: "/images/orlando.png",
  },
];

//ZOOM EN IMAGEN

document.addEventListener("DOMContentLoaded", () => {
  const popupImg = document.getElementById("popup-img");
  const popupImgContainer = document.querySelector(".popup-img");
  const popupClose3 = document.querySelector(".popup-img__close");

  popupClose3.addEventListener("click", () => {
    popupImgContainer.classList.remove("popup-img_opened");
    popupImg.src = "";
  });
});

//AGREGAR FOTO

const inputTitle = document.querySelector("#inputtitle");
const inputPhoto = document.querySelector("#inputphoto");
const buttonAgregar = document.querySelector(".popup__create");
const newCardsContainer = document.querySelector(".newcards");

buttonAgregar.addEventListener("click", (evt) => {
  evt.preventDefault();

  const clon = document.importNode(template, true).firstElementChild;

  const title = clon.querySelector(".title");
  const image = clon.querySelector(".gallery__photo-card");

  title.textContent = inputTitle.value;
  image.src = inputPhoto.value;

  newCardsContainer.prepend(clon);
  activarEventosEnCard(clon);
});

function activarEventosEnCard(cardElement) {
  const img = cardElement.querySelector(".gallery__photo-card");
  const trash = cardElement.querySelector(".gallery__trash");
  const like = cardElement.querySelector(".gallery__photo-like");

  img.addEventListener("click", () => {
    const popupImg = document.getElementById("popup-img");
    const popupImgContainer = document.querySelector(".popup-img");
    popupImg.src = img.src;
    popupImgContainer.classList.add("popup-img_opened");
  });

  trash.addEventListener("click", () => {
    cardElement.remove();
  });

  like.addEventListener("click", () => {
    like.classList.toggle("gallery__photo-liked");
  });
}

window.addEventListener("load", () => {
  document.querySelectorAll(".gallery__photos").forEach((card) => {
    activarEventosEnCard(card);
  });
});

// VALIDACION DE FORMULARIOS Y BOTONES

const editForm = document.querySelector(".popup__form");
const nameInput = editForm.querySelector("#inputname");
const aboutInput = editForm.querySelector("#inputjob");
const saveButton = editForm.querySelector(".popup__save");

function checkFormValidity() {
  if (editForm.checkValidity()) {
    saveButton.disabled = false;
    saveButton.classList.remove("popup__save_disabled");
  } else {
    saveButton.disabled = true;
    saveButton.classList.add("popup__save_disabled");
  }
}

[nameInput, aboutInput].forEach((input) => {
  input.addEventListener("input", checkFormValidity);
});

checkFormValidity();

// ----------

const formPlace = document.querySelector(".place-popup__form");

function validarFormulario() {
  const esTituloValido = inputTitle.validity.valid;
  const esFotoValida = inputPhoto.validity.valid;

  if (esTituloValido && esFotoValida) {
    buttonAgregar.disabled = false;
    buttonAgregar.classList.remove("popup__create_disabled");
  } else {
    buttonAgregar.disabled = true;
    buttonAgregar.classList.add("popup__create_disabled");
  }
}

inputTitle.addEventListener("input", validarFormulario);
inputPhoto.addEventListener("input", validarFormulario);

popupPlus.addEventListener("click", () => {
  popupPlace.classList.remove("popup_opened-card");
  inputTitle.value = "";
  inputPhoto.value = "";
  buttonAgregar.disabled = true;
  buttonAgregar.classList.add("popup__create_disabled");
});

// CERRAR POPUP CON TECLA ESC

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // Cierra el popup de editar perfil si está abierto
    if (!popup.classList.contains("popup_opened")) {
      popup.classList.add("popup_opened");
    }

    // Cierra el popup de crear tarjeta si está abierto
    if (!popupPlace.classList.contains("popup_opened-card")) {
      popupPlace.classList.add("popup_opened-card");
    }

    // Cierra el popup de imagen si está abierto
    const popupImgContainer = document.querySelector(".popup-img");
    if (popupImgContainer.classList.contains("popup-img_opened")) {
      popupImgContainer.classList.remove("popup-img_opened");
    }
  }
});

// CERRAR POPUP CON SUPERPOSICION

document.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("popup")) {
    popup.classList.add("popup_opened");
  }

  // Cerrar popup de creación de tarjetas
  if (e.target.classList.contains("place-popup")) {
    popupPlace.classList.add("popup_opened-card");
  }

  // Cerrar popup de zoom en imagen
  const popupImgContainer = document.querySelector(".popup-img");
  if (e.target.classList.contains("popup-img")) {
    popupImgContainer.classList.remove("popup-img_opened");
  }
});
