export const filterArrayByText = ({ array, text }) => {
  return array.filter(item => new RegExp(text, 'i').test(item));
};

export const filterArrayObjectByText = ({ array, text, property }) => {
  return array.filter(item => new RegExp(text, 'i').test(item[property]));
};
