async function populateCountries() {
    const selectElement = document.getElementById("countrySelect");
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    data.forEach(country => {
        const option = document.createElement("option");
        option.textContent = country.name.common;
        option.value = country.name.common;
        selectElement.appendChild(option);
    });
}

window.onload = populateCountries

//on the HTML file there is select option with countries
//i used API to get the countries and populate the select option with the countries