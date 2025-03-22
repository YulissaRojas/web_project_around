const popupSave = document.querySelector(".popup__save");
const popupButton = document.querySelector(".profile_button-edit");
const popup = document.querySelector(".popup");

popupButton.addEventListener("click", () => {
  popup.classList.remove("popup_visible");
});

popupSave.addEventListener("click", (e) => {
  e.preventDefault(); //ESTO EVITA QUE ACTUALICE
  popup.classList.add("popup_visible");
});
