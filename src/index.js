import "./css/style.css";
import homeComponent from "./components/home";
import { menuComponent, menuPageContent } from "./components/menu";
import { contactComponent, contactContent } from "./components/contact";

const content = document.querySelector("#content");

const renderPage = (() => {
  homeComponent().forEach((element) => {
    content.append(element);
  });
})();

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    changeComponent(event.target.textContent);
  });
});

function changeComponent(page) {
  const main = document.querySelector(".main");
  if (page === "Home") {
    main.replaceWith(homeComponent()[1]);
  } else if (page === "Menu") {
    main.replaceWith(menuComponent());
    document.querySelector(".main").style.overflow = "hidden scroll";
    menuPageContent();
  } else if (page === "Contact") {
    main.replaceWith(contactComponent());
    contactContent();
  }
}
