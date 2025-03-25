const popupSave = document.querySelector(".popup__save");
const popupButton = document.querySelector(".profile_button-edit");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");

const inputName = document.querySelector("#inputname");
const inputJob = document.querySelector("#inputjob");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

popupButton.addEventListener("click", () => {
  popup.classList.remove("popup_opened");
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

//EL TEXTO DE LOS P SE LEE CON TEXTCONTENT
//EL TEXTO DINAMICO DE LOS INPUT SE LEE CON VALUE
