function contactComponent() {
  const main = document.createElement("div");
  main.classList.add("main");

  const contactCard = document.createElement("div");
  contactCard.classList.add("contactCard");

  const orderNum = document.createElement("p");
  orderNum.classList.add("orderNum");

  const address = document.createElement("p");
  address.classList.add("address");

  const googleMaps = document.createElement("div");
  const iframeMaps = document.createElement("iframe");
  iframeMaps.classList.add("googleMaps");
  googleMaps.append(iframeMaps);

  const workingHours = document.createElement("p");
  workingHours.classList.add("workingHours");

  contactCard.append(orderNum, googleMaps, address, workingHours);

  main.append(contactCard);

  return main;
}

function contactContent() {
  const orderNum = document.querySelector(".orderNum");
  orderNum.textContent = "For Orders - 080012340 / 0897123867";

  const address = document.querySelector(".address");
  address.textContent = "Address: ul. Rakovska 106, Sofia, 1000";

  const workingHours = document.querySelector(".workingHours");
  workingHours.textContent = "Monday/Sunday: 10:00 - 22:00";

  const googleMaps = document.querySelector(".googleMaps");
  googleMaps.src =
    "https://maps.google.com/maps?q=ulitsa%20%E2%80%9EGeorgi%20S.%20Rakovski%E2%80%9C%20106&t=&z=17&ie=UTF8&iwloc=&output=embed";
}

export { contactComponent, contactContent };
