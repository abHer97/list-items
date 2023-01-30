import { store } from './src/store.js';

const ID_MAPS = {
   INPUT_NAME: 'name',
};

const inputName = document.getElementById(ID_MAPS.INPUT_NAME);

inputName.onkeyup = function (e) {
   const { name, value } = e.target;

   store.setFormValues(name, value);
};
