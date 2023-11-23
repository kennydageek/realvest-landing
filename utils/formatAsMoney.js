export const formatAsMoney = (amount) => {
  if (!amount) {
    amount = 0;
  }
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(amount);
};
