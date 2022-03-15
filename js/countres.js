const lodeCounrise = () => {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countrise => {
    console.log(countrise);
    const allCountriseHtml = countrise.map(contry => getCountryHtml(contry));
    // console.log(allCountriseHtml[0]);
    const container = document.getElementById('countrise');
    container.innerHTML = allCountriseHtml.join(' ');
}

const getCountryHtml = country => {
    return `
    <div class="country">
      <h2>${country.name.common}</h2>
      <h2>Id: ${country.area}</h2>
      <img src="${country.flags.png}">
    </div>
    `
}

lodeCounrise()