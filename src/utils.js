function indexOfMaxNumber(array) {
  const numbers = Array.from(array);

  if (!Array.isArray(numbers) || numbers.length === 0) {
    return -1;
  }

  const reducer = (max, current, currentIndex) => (current > max.value
    ? { value: current, index: currentIndex }
    : max);

  const { index } = numbers.reduce(reducer, { value: numbers[0], index: 0 });

  return index;
}

export { indexOfMaxNumber };
