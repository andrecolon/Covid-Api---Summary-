const countryCard = (obj) => {
  const newCard = document.createElement("li");
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
  newCard.appendChild(countryName);
  // .style.color = "#333333";
  newCard.appendChild(newConfirmed);
  // .style.color = "#333333";
  newCard.appendChild(totalDeaths);
  // .style.color = "#333333";
  newCard.appendChild(newRcov);
  // .style.color = "#333333";
  newCard.appendChild(totalConfirmed);
  // .style.color = "#333333";
  newCard.appendChild(totalRecovered);
  // .style.color = "#333333";

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

//  World pop data
axios
  .get("https://www.worldpop.org/rest/data/pop/wpgp")
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) => {
    console.log("What is your error?", err);
  });

let filterInput = document.getElementById("filterInput");
filterInput.addEventListener("keyup", filterNames);

/// Search feature found here -https://www.youtube.com/watch?v=G1eW3Oi6uoc&ab_channel=TraversyMedia
function filterNames() {
  let filterValue = document.getElementById("filterInput").value.toUpperCase();
  let ul = document.getElementById("names");
  let li = ul.querySelectorAll("li.country-card");

  for (let i = 0; i < li.length; i++) {
    let hThree = li[i].getElementsByTagName("h3")[0];
    if (hThree.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
// Short polling = new data refresh on state change
// https://viktorfejes.com/article/simple-state-management-with-vanilla-js

// Multiple axios calls
// https://www.storyblok.com/tp/how-to-send-multiple-requests-using-axios
