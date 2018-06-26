var popupForm = document.querySelector(".modal-form");

if (popupForm) {
  var linkForm = document.querySelector(".js-open-form");
  var closeForm = popupForm.querySelector(".js-close-form");

  var form = popupForm.querySelector("form");
  var login = popupForm.querySelector("[name=name]");
  var email = popupForm.querySelector("[name=email]");
  var text = popupForm.querySelector("[name=message]");

  var storage = {
    login: "",
    email: ""
  };

  storage.login = localStorage.getItem("login");
  storage.email = localStorage.getItem("email");

  linkForm.addEventListener("click", function (event) {
    event.preventDefault();
    popupForm.classList.add("modal-show");

    if (storage.login && storage.email) {
      login.value = storage.login;
      email.value = storage.email;
      text.focus();
    } else {
      login.focus();
    }
  });

  closeForm.addEventListener("click", function (event) {
    event.preventDefault();
    popupForm.classList.remove("modal-show");
  });

  form.addEventListener("submit", function (event) {
    if (!login.value || !email.value) {
      event.preventDefault();
      popupForm.classList.remove("modal-error");
      popupForm.offsetWidth = popupForm.offsetWidth;
      popupForm.classList.add("modal-error");
    } else {
      localStorage.setItem("login", login.value);
      localStorage.setItem("email", email.value);
    }
  });

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (popupForm.classList.contains("modal-show")) {
        popupForm.classList.remove("modal-show");
        popupForm.classList.remove("modal-error");

      }
    }
  });
}

var popupMap = document.querySelector(".modal-map");

if (popupMap) {
  var linkMap = document.querySelector(".js-open-map");
  var closeMap = popupMap.querySelector(".js-close-map");

  linkMap.addEventListener("click", function (event) {
    event.preventDefault();
    popupMap.classList.add("modal-show");
  });

  closeMap.addEventListener("click", function (event) {
    event.preventDefault();
    popupMap.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (popupMap.classList.contains("modal-show")) {
        popupMap.classList.remove("modal-show");
      }
    }
  });
}

var popupGood = document.querySelector(".modal-good");

if (popupGood) {
  var linkGood = document.querySelector(".js-open-good");
  var closeGood = popupGood.querySelector(".js-close-good");

  linkGood.addEventListener("click", function (event) {
    event.preventDefault();
    popupGood.classList.add("modal-show");
  });

  closeGood.addEventListener("click", function (event) {
    event.preventDefault();
    popupGood.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (popupGood.classList.contains("modal-show")) {
        popupGood.classList.remove("modal-show");
      }
    }
  });
}
