function formatToTwoDecimals(num) {
  const parsed = typeof num === "number" ? num : parseFloat(num);

  if (isNaN(parsed)) return "0.00";

  return parsed.toFixed(2);
}

export { formatToTwoDecimals };
