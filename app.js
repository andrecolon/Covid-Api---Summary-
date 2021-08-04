const countryCard = (obj) => {
  const newCard = document.createElement("div");
  const countryName = document.createElement("h3");
  const newConfirmed = document.createElement("p");
  const newDead = document.createElement("p");
  const newRcov = document.createElement("p");
  const newSlug = document.createElement("p");
  const totalConfirmed = document.createElement("p");
  const totalDeaths = document.createElement("p");
  const totalRecovered = document.createElement("p");

  countryName.textContent = obj.Country;
  newConfirmed.textContent = `new confirmed = ${obj.NewConfirmed}`;
  newDead.textContent = `new deaths = ${obj.NewDeaths}`;
  newRcov.textContent = `new recovered = ${obj.TotalConfirmed}`;
  //newSlug.textContent = obj.Slug
  totalConfirmed.textContent = `total confirmed = ${obj.TotalConfirmed}`;
  totalRecovered.textContent = `total recovered = ${obj.TotalRecovered}`;
  totalDeaths.textContent = `total deaths = ${obj.TotalDeaths}`;

  newConfirmed.classList.add("cases-confirmed-p");
  newCard.classList.add("country-card");

  newCard.appendChild(newSlug);
  newCard.appendChild(countryName).style.color = "#333333";
  newCard.appendChild(newConfirmed).style.color = "#333333";
  newCard.appendChild(totalDeaths).style.color = "#333333";
  newCard.appendChild(newRcov).style.color = "#333333";
  newCard.appendChild(totalConfirmed).style.color = "#333333";
  newCard.appendChild(totalRecovered).style.color = "#333333";

  // newCard.addEventListener('click', () => {
  //     newCard.classList.add('selected')
  // })

  return newCard;
};

axios
  .get("https://api.covid19api.com/summary")
  .then((response) => {
    const entryPoint = document.querySelector(".entry");
    console.log(response.data);

    response.data.Countries.forEach((cntry) => {
      const newEntry = countryCard(cntry);
      entryPoint.appendChild(newEntry) - 1;
    });
  })
  .catch((err) => {
    console.log("What is your error?", err);
  });
// Search feature 
//https://www.florin-pop.com/blog/2019/06/vanilla-javascript-instant-search/
