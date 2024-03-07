export const removeDuplicateNumbers = (data) => {
  const uniqueNumbers = new Set();
  return data.filter((item) => {
    if (!uniqueNumbers.has(item.number)) {
      uniqueNumbers.add(item.number);
      return true;
    }
    return false;
  });
};
