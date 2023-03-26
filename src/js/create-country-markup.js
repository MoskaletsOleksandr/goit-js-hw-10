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
        <li class="country-info__item"><span class='item__headline'>Capital:</span> ${capital}</li>
        <li class="country-info__item"><span class='item__headline'>Population:</span> ${population}</li>
        <li class="country-info__item"><span class='item__headline'>Languages:</span> ${languages}</li>
    </ul>`;
};
