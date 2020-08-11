/* const formatterCoin = Intl.NumberFormat(
  'pt-BR',
  {
    style: 'currency',
    currency: 'BRL',
  },
  { minimumFractionDigits: 2 }
); */

const formatter = Intl.NumberFormat('pt-BR');

export const formatNumber = (value) => {
  return formatter.format(value);
};
