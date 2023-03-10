const loadDrings = async (search) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
  const res = await fetch(url);
  const data = await res.json();
  displayDrinks(data.drinks);
};

const displayDrinks = (drinks) => {
  const drinksContainer = document.getElementById("drinks-container");
  drinksContainer.innerText = "";
  drinks.forEach((drink) => {
    const creatDiv = document.createElement("div");
    creatDiv.classList.add("col");
    creatDiv.innerHTML = `
      <div onclick='loadDetails(${drink.idDrink})' class="card h-100">
          <img src="${drink.strDrinkThumb}" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title text-center">${drink.strDrink}</h5>
          </div>
      </div>
    `;
    drinksContainer.appendChild(creatDiv);
  });
};

const input = document.getElementById("exampleDataList");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search-button").click();
  }
});

const searchingData = () => {
  const searchField = document.getElementById("exampleDataList");
  const searchText = searchField.value;
  loadDrings(searchText);
  searchField.value = "";
};

const loadDetails = async (id) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayDetails(data.drinks[0]);
};

const displayDetails = (drink) => {
  console.log(drink);
  const drinksDetails = document.getElementById("detail-photo");
  drinksDetails.innerText = "";
  const rowDiv = document.createElement("div");
  rowDiv.classList.add("row");
  rowDiv.innerHTML = `
    <div class="col-md-4">
      <img src="${drink.strDrinkThumb}" class="img-fluid rounded-start" alt="" />
    </div>
    <div class="col-md-8">
      <div class="card-body text-center">
       <h3 class="card-title">Element</h3>
        <p class="card-title">${drink.strIngredient1 ? drink.strIngredient1 : ""}</p>
        <p class="card-title">${drink.strIngredient2 ? drink.strIngredient2 : ""}</p>
        <p class="card-title">${drink.strIngredient3 ? drink.strIngredient3 : ""}</p>
        <p class=liard-title">${drink.strIngredient4 ? drink.strIngredient4 : ""}</h>
        <p class="card-title">${drink.strIngredient5 ? drink.strIngredient5 : ""}</p>
        <p class="card-title">${drink.strIngredient6 ? drink.strIngredient6 : ""}</p>
        <p class="card-title">${drink.strIngredient7 ? drink.strIngredient7 : ""}</p>
        <p class="card-title">${drink.strIngredient8 ? drink.strIngredient8 : ""}</p>
      </div>
    </div>
  `;
  drinksDetails.appendChild(rowDiv);
};

loadDrings("margarita");
