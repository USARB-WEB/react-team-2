const getFilteredData = ({ data, key, value }) => {
  return data.filter((items) => items[`${key}`] !== value);
};

export { getFilteredData };
