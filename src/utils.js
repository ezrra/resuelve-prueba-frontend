export const filterArrayByText = ({ array, text }) => {
  return array.filter(item => new RegExp(text, 'i').test(item));
};

export const filterObjectArrayByText = ({ array, text, property }) => {
  return array.filter(item => new RegExp(text, 'i').test(item[property]));
};
