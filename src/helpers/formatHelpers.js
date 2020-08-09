const formatter = Intl.NumberFormat('pt-BR');

export const formatNumber = (value) => {
  return formatter.format(value);
};
