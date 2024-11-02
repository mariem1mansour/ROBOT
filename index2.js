document.addEventListener('DOMContentLoaded', () => {
  const prices = document.querySelectorAll('.price');
  const conversionRate = 3.5;
   // 1 euro = 3.5 DT

  prices.forEach(priceElement => {
    const priceInDT = parseFloat(priceElement.getAttribute('data-price'));

    priceElement.addEventListener('mouseover', () => {
      const priceInEUR = (priceInDT / conversionRate).toFixed(2);
      priceElement.textContent = `${priceInEUR} EUR`;
    });

    priceElement.addEventListener('mouseout', () => {
      priceElement.textContent = `${priceInDT} DT`;
    });
  });
});
