function homeComponent() {
  const header = document.createElement("div");
  header.classList.add("header");

  const logo = document.createElement("h1");
  logo.textContent = "Burger Brewery";
  logo.classList.add("logo");

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  homeBtn.type = "button;";
  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  menuBtn.type = "button;";
  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";
  contactBtn.type = "button;";

  header.append(logo, homeBtn, menuBtn, contactBtn);

  const main = document.createElement("div");
  main.classList.add("main");

  for (let i = 1; i < 7; i++) {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add(`d${i}`);
    main.append(mainDiv);
  }

  const welcomeMsg = document.createElement("p");
  welcomeMsg.classList.add("welcome");
  welcomeMsg.textContent = "Welcome to the Burger Brewery";
  main.append(welcomeMsg);

  const footer = document.createElement("div");
  footer.classList.add("footer");

  const copyRight = document.createElement("p");
  copyRight.textContent = "Preslav Piroev @ 2023";
  footer.append(copyRight);

  return [header, main, footer];
}

export default homeComponent;
