import './css/styles.css';
import { fetchCountries } from './js/fetch-countries';
import { createCountryMarkup } from './js/create-country-markup';
import { createAListOfCountries } from './js/create-a-list-of-countries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;
const refs = {
  inputEl: document.querySelector('#search-box'),
  countryListEl: document.querySelector('.country-list'),
  countryInfoEl: document.querySelector('.country-info'),
};

const resetContent = () => {
  refs.countryListEl.innerHTML = '';
  refs.countryInfoEl.innerHTML = '';
};

const handleInputElInput = event => {
  const seekedCountry = event.target.value.trim();

  if (seekedCountry === '') {
    return;
  }

  fetchCountries(seekedCountry)
    .then(countries => {
      if (countries.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );

        resetContent();
      }

      if (countries.length >= 2 && countries.length <= 10) {
        resetContent();
        createAListOfCountries(refs.countryListEl, countries);
      }
      if (countries.length === 1) {
        resetContent();
        createCountryMarkup(refs.countryInfoEl, countries);
      }
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');

      resetContent();
      console.log(error);
    });
};

refs.inputEl.addEventListener(
  'input',
  debounce(handleInputElInput, DEBOUNCE_DELAY)
);
