export const normaliceText = (text) => {
  const firstClose = text.indexOf(">");
  const lastClose = text.lastIndexOf("<");
  const newDescript = text.slice(firstClose + 1, lastClose);

  return newDescript;
};
