import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const refs = {
  inputEl: document.querySelector('#search-box'),
  countryListEl: document.querySelector('.country-list'),
  countryInfoEl: document.querySelector('.country-info'),
};

const createCountryMarkup = countries => {
  const obj = countries[0];

  const name = obj.name.official;
  const flag = obj.flags.svg;
  const capital = obj.capital[0];
  const population = obj.population;
  const languages = Object.values(obj.languages).join(', ');

  refs.countryListEl.innerHTML = `<img src='${flag}' width=30px alt='' class='country-info__img' />
  <h2 class="country-info__title">${name}</h2>    
  <ul class="country-info__list">
        <li class="country-info__item">Capital: ${capital}</li>
        <li class="country-info__item">Population: ${population}</li>
        <li class="country-info__item">Languages: ${languages}</li>
    </ul>`;
};

const createAListOfCountries = countries => {
  //I NEED TO USE MAP()//
  const obj = countries[0];

  const name = obj.name.official;
  const flag = obj.flags.svg;

  refs.countryListEl.innerHTML = `<li class="country-list__item"></li>
        <li class="country-list__item"></li>`;
};

const handleInputElInput = event => {
  const seekedCountry = event.target.value.trim();

  if (seekedCountry === '') {
    console.log('empty');

    return;
  }

  fetchCountries(seekedCountry)
    .then(countries => {
      console.log(countries);

      if (countries.length > 10) {
        console.log(
          'Too many matches found. Please enter a more specific name.'
        );
      }
      if (countries.length >= 2 && countries.length <= 10) {
        console.log('change list');
        createAListOfCountries(countries);
      }
      if (countries.length === 1) {
        console.log('ok');
        createCountryMarkup(countries);
      }
    })
    .catch(error => {
      console.log('Oops, there is no country with that name');
      console.log(error);
    });
};

refs.inputEl.addEventListener(
  'input',
  debounce(handleInputElInput, DEBOUNCE_DELAY)
);
