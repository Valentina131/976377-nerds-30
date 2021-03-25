const buttonСontacts = document.querySelector(".button-contacts");
const modalWindowSend = document.querySelector(".modal-window-send");
const buttonClose = modalWindowSend.querySelector(".button-close");
const windowForm = modalWindowSend.querySelector(".window-form");
const modalNameFocus = modalWindowSend.querySelector(".modal-name-focus");
const modalEmailWindow = modalWindowSend.querySelector(".modal-email-window");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

buttonСontacts.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWindowSend.classList.add("modal-show");

  if (storage) {
    modalNameFocus.value = storage;
    modalEmailWindow.focus();
  } else {
    modalNameFocus.focus();
  }
});

buttonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWindowSend.classList.remove("modal-show");
  modalWindowSend.classList.remove("modal-error");
});

windowForm.addEventListener("submit", function (evt) {
  if (!modalNameFocus.value || !modalEmailWindow.value) {
    evt.preventDefault();
    modalWindowSend.classList.remove("modal-error");
    modalWindowSend.offsetWidth = modalWindowSend.offsetWidth;
    modalWindowSend.classList.add("modal-error");
  }else {
    if (isStorageSupport) {
    localStorage.setItem("name", modalNameFocus.value);
  }
}
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalWindowSend.classList.contains("modal-show")) {
      evt.preventDefault();
      modalWindowSend.classList.remove("modal-show");
    }
  }
});


