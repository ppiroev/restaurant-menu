function menuComponent() {
  const main = document.createElement("div");
  main.classList.add("main");

  const menuCard = document.createElement("div");
  menuCard.classList.add("menuCard");

  for (let i = 0; i < 6; i++) {
    const card = document.createElement("div");
    const burgerInfo = document.createElement("div");
    burgerInfo.classList.add("burgerInfo");
    const burgerImg = document.createElement("img");
    const burgerName = document.createElement("p");
    burgerName.classList.add(`burgerName${i}`);
    burgerName.textContent = "Burger Name";
    const burgerDescript = document.createElement("p");
    burgerDescript.classList.add(`burgerDescript${i}`);
    const burgerPrice = document.createElement("p");
    burgerPrice.classList.add(`burgerPrice${i}`);
    burgerInfo.append(burgerName, burgerDescript, burgerPrice);
    card.append(burgerImg, burgerInfo);
    card.classList.add(`card${i}`);
    menuCard.append(card);
  }

  main.append(menuCard);

  return main;
}

function menuPageContent() {
  const classicBurgerName = document.querySelector(".burgerName0");
  const classicBurgerDescript = document.querySelector(".burgerDescript0");
  const classicBurgerPrice = document.querySelector(".burgerPrice0");

  classicBurgerName.textContent = "Classic Cheese Burger";
  classicBurgerDescript.textContent =
    "Brioche bread, 100% fresh ground beef pattie, melted English cheddar, homemade pickles, iceberg, Chefs sauce. Paired with our homemade fries and our lager brew.";
  classicBurgerPrice.textContent = "18 BGN";

  const doubleBurgerName = document.querySelector(".burgerName1");
  const doubleBurgerDescript = document.querySelector(".burgerDescript1");
  const doubleBurgerPrice = document.querySelector(".burgerPrice1");

  doubleBurgerName.textContent = "Double Cheese Burger";
  doubleBurgerDescript.textContent =
    "Brioche bread, 100% fresh ground beef pattie x 2, melted English cheddar, crispy bacon, jalapeno, caramelized onions, iceberg, Chefs sauce. Paired with our homemade fries and our lager brew.";
  doubleBurgerPrice.textContent = "21 BGN";

  const americanoBurgerName = document.querySelector(".burgerName2");
  const americanoBurgerDescript = document.querySelector(".burgerDescript2");
  const americanoBurgerPrice = document.querySelector(".burgerPrice2");

  americanoBurgerName.textContent = "American Hot Burger";
  americanoBurgerDescript.textContent =
    "Brioche bread, 100% fresh ground beef pattie, melted English cheddar, crispy bacon, jalapeno, caramelized onions, iceberg, Chefs sauce. Paired with our homemade fries and our lager brew.";
  americanoBurgerPrice.textContent = "19 BGN";

  const turkeyBurgerName = document.querySelector(".burgerName3");
  const turkeyBurgerDescript = document.querySelector(".burgerDescript3");
  const turkeyBurgerPrice = document.querySelector(".burgerPrice3");

  turkeyBurgerName.textContent = "Turkey Burger";
  turkeyBurgerDescript.textContent =
    "Brioche bread, slices of turkey breast in Asian sauce and coconut milk, iceberg, sautéed fennel and crispy fried onions, mayo-jalapeno sauce. Paired with our homemade fries and our lager brew.";
  turkeyBurgerPrice.textContent = "20 BGN";

  const veggieBurgerName = document.querySelector(".burgerName4");
  const veggieBurgerDescript = document.querySelector(".burgerDescript4");
  const veggieBurgerPrice = document.querySelector(".burgerPrice4");

  veggieBurgerName.textContent = "Veggie Burger";
  veggieBurgerDescript.textContent =
    "Brioche bread, homemade pattie with cauliflower, chickpeas, carrot and zucchini, iceberg, fennel, crispy fried onions and Miso Mayo sauce. Paired with our homemade fries and our lager brew.";
  veggieBurgerPrice.textContent = "17 BGN";

  const porkBurgerName = document.querySelector(".burgerName5");
  const porkBurgerDescript = document.querySelector(".burgerDescript5");
  const porkBurgerPrice = document.querySelector(".burgerPrice5");

  porkBurgerName.textContent = "Pulled Pork Sandwich";
  porkBurgerDescript.textContent =
    "Brioche, salad coleslaw, pork roasted five hours on slow fire with homemade BBQ sauce and crispy fried onions. Paired with our homemade fries and our lager brew.";
  porkBurgerPrice.textContent = "19 BGN";
}

export { menuComponent, menuPageContent };
