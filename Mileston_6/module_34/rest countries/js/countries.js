const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}

const displayCountry = countries => {
    const countryContainer = document.getElementById('all-countries');

    // for (const country of countries) {
    //     console.log(country)
    // }

    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `
            <h3>Country Name: ${country.name.common}</h3>
            <h4>Country official Name: ${country.name.official}</h4>
            <p>Capital: ${country.capital ? country.capital[0]: 'No Capital'}</p>
            <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `
        countryContainer.appendChild(countryDiv);
    });
} 

const loadCountryDetails = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = code => {
    console.log(code.flags.png)
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
        <h3>Name: ${code.name.common}</h3>
        <h4>Official Name: ${code.name.official}</h4>
        <p>Capital: ${code.capital ? code.capital[0]: 'No Capital'}</p>
        <img src="${code.flags.png}">
    `
    
}

loadCountries()