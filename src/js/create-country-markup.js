'use strict';

export const createCountryMarkup = (DOMElement, [country]) => {
  const {
    name: { official },
    flags: { svg },
    capital: [capital],
    population,
    languages: langs,
  } = country;
  const languages = Object.values(langs).join(', ');

  DOMElement.innerHTML = `<img src='${svg}' width=30px alt='' class='country-info__img' />
  <h2 class="country-info__title">${official}</h2>
  <ul class="country-info__list">
        <li class="country-info__item">Capital: ${capital}</li>
        <li class="country-info__item">Population: ${population}</li>
        <li class="country-info__item">Languages: ${languages}</li>
    </ul>`;
};
