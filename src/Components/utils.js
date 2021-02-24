export const filterArrayByText = ({ array, text }) => {
  return array.filter(item => new RegExp(text, 'i').test(item));
};
