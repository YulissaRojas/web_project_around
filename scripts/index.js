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

//EL TEXTO DE LOS P SE LEE CON TEXTCONTENT
//EL TEXTO DINAMICO DE LOS INPUT SE LEE CON VALUE

const initialCards = [
  {
    name: "Las Vegas",
    link: "/image/lasvegas.jpg",
  },
  {
    name: "New York",
    link: "/image/newyork.jpg",
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

document.addEventListener("DOMContentLoaded", () => {
  const likedButton = document.querySelectorAll(".gallery__photo-like");

  likedButton.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("gallery__photo-liked");
      button.classList.contains("gallery__photo-like");
    });
  });
});
