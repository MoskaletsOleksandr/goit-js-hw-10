'use strict';

export const createAListOfCountries = (DOMElement, countries) => {
  DOMElement.innerHTML = countries
    .map(({ name, flags }) => {
      const officialName = name.official;
      const flag = flags.svg;

      return `<li class="country-list__item"><img src='${flag}' width=30px alt='' class='country-info__img' /> ${officialName}</li>`;
    })
    .join('');
};
