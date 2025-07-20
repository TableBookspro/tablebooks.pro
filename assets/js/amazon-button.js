document.addEventListener('DOMContentLoaded', function() {
  const buttonDiv = document.getElementById('buy-with-prime-button');
  if (buttonDiv && typeof BuyWithPrime !== 'undefined') {
    BuyWithPrime.Button.render({
      elementId: 'buy-with-prime-button',
      sku: buttonDiv.dataset.sku,
      placementId: buttonDiv.dataset.placementId
      // Add other options here if needed, e.g., quantitySelectorId: 'your-quantity-id'
    });
  }
});