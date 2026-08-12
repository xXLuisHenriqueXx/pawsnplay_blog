export const formatNumber = (value: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    minimumIntegerDigits: 2,
  });
  return formatter.format(value);
};
