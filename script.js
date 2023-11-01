buttons = document.querySelectorAll(".slide-buttons li");
maps = document.querySelectorAll(".slide li");

faqButtons = document.querySelectorAll(".faq li");

const faqActive = (event) => {
  index = event.currentTarget.id;
  faqButtons[index - 1].classList.toggle("faq-active");
};

faqButtons.forEach((button) => button.addEventListener("click", faqActive));

const changeActive = (event) => {
  index = event.currentTarget.id;
  event.currentTarget.classList.remove("active");

  maps.forEach((map) => map.classList.remove("active"));
  maps[index - 1].classList.add("active");

  buttons.forEach((button) => button.classList.remove("active"));
  buttons[index - 1].classList.add("active");
};

buttons.forEach((button) => button.addEventListener("click", changeActive));
