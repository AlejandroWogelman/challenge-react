const config = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  minimumFractionDigits: 0,
});

export const formatPrice = (number) => {
  return config.format(number);
};
