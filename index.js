import { store } from './src/store.js';
import { validations } from './src/validations.js';

const ID_MAPS = {
   INPUT_NAME: 'name',
   FORM: 'form',
   TABLE: 'list',
};

const inputName = document.getElementById(ID_MAPS.INPUT_NAME);
const form = document.getElementById(ID_MAPS.FORM);
const table = document.getElementById(ID_MAPS.TABLE);

inputName.onkeyup = function (e) {
   const { name, value } = e.target;

   store.setFormValues(name, value);
};

form.onsubmit = function (e) {
   e.preventDefault();

   if (validations.isFormValid(store.form)) {
      store.addItem(store.form.name);
      store.resetFormData();
      inputName.value = '';
      inputName.focus();

      const bodyTable = table.getElementsByTagName('tbody')[0];
      renderItems(bodyTable, store.items);
   }
};

function getRow(name, position) {
   const row = document.createElement('tr');
   const cell = document.createElement('td');

   cell.innerHTML = name || '';
   if (position % 3 === 0) {
      cell.style.color = 'red';
   }
   row.appendChild(cell);

   return row;
}
function renderItems(bodyTable, data) {
   bodyTable.innerHTML = '';

   data.forEach((item, i) => {
      bodyTable.appendChild(getRow(item, i + 1));
   });
}
