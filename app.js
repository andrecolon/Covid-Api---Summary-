const countryCard = (obj) => {

    const newCard = document.createElement('li')
    const countryName = document.createElement('h3')
    const newConfirmed = document.createElement('p')
    const newDead = document.createElement('p')
    const newRcov = document.createElement('p')
    const newSlug = document.createElement('p')
    const totalConfirmed = document.createElement('p')
    const totalDeaths = document.createElement('p')
    const totalRecovered = document.createElement('p')


    countryName.textContent = obj.Country
    newConfirmed.textContent = `new confirmed = ${obj.NewConfirmed}`
    newDead.textContent = `new deaths = ${obj.NewDeaths }`
    newRcov.textContent = `new recovered = ${obj.TotalConfirmed}`
        //newSlug.textContent = obj.Slug
    totalConfirmed.textContent = `total confirmed = ${obj.TotalConfirmed}`
    totalRecovered.textContent = `total recovered = ${obj.TotalRecovered }`
    totalDeaths.textContent = `total deaths = ${obj.TotalDeaths }`


    newConfirmed.classList.add('cases-confirmed-p')
    newCard.classList.add('country-card')

    newCard.appendChild(newSlug)
    newCard.appendChild(countryName).style.color = "#333333"
    newCard.appendChild(newConfirmed).style.color = "#333333"
    newCard.appendChild(totalDeaths).style.color = "#333333"
    newCard.appendChild(newRcov).style.color = "#333333"
    newCard.appendChild(totalConfirmed).style.color = "#333333"
    newCard.appendChild(totalRecovered).style.color = "#333333"

    // newCard.addEventListener('click', () => {
    //     newCard.classList.add('selected')
    // })

    return newCard
}




axios.get('https://api.covid19api.com/summary')
    .then(response => {
        const entryPoint = document.querySelector('.entry')
        //console.log(response.data)

        response.data.Countries.forEach(cntry => {
            const newEntry = countryCard(cntry)
            entryPoint.appendChild(newEntry) - 1
        })
    })
    .catch(err => {
        console.log('What is your error?', err)
    });
// Do I need async first?
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    console.log(input.value)
    ul = document.getElementById("entry");
    li = ul.querySelector('li');

for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h3")[0];
    txtValue = h3.textContent || h3.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
    } else {
        li[i].style.display = "none";
    }
}

// let filterInput = document.getElementById('filterInput');
// filterInput.addEventListener('keyup', filterNames);

// /// Search feature found here -https://www.youtube.com/watch?v=G1eW3Oi6uoc&ab_channel=TraversyMedia
// function filterNames() {
//     //get value of input
//     let filterValue = document.getElementById('filterInput').value.toUpperCase();
//     console.log(filterValue)
//     //Get divs with country
//     let ul = document.getElementById('names');
//     //get .country-card 
//     let li = ul.querySelectorAll('li');

//     // Loop the cards

//     for (let i = 0; i < li.length; i++ ){ 
//         console.log(li.length)
//         let hThree = li[i].querySelector('country-card')[0];
//         // [0] = get the current link 
//         // if mathced 
//         console.log(results)
//         if (hThree.innerHTML.toUpperCase.indexOf(filterValue) > -1){
//             li[i].style.display = '';
//         } else {
//             li[i].style.display = 'none';

//             }
//         }
//     console.log('Hello Lists', li.length)
// }

// Try this one - https://www.w3schools.com/howto/howto_js_filter_lists.asp