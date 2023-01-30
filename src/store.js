const state = {
   form: {
      name: '',
   },
   items: [],
};

function setFormValues(name, value) {
   const key = name.toLowerCase();

   if (key in state.form) {
      state.form[key] = value;
   }
}
function resetFormData() {
   state.form.name = '';
}

function addItem(data) {
   state.items.push(data);
}

export const store = {
   form: state.form,
   items: state.items,
   setFormValues,
   resetFormData,
   addItem,
};
