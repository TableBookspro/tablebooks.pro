document.addEventListener('DOMContentLoaded', function() {
  const buttonDiv = document.getElementById('buy-with-prime-button');
  const amazonButton = document.getElementById('amazon-buy-button');
  
  if (amazonButton) {
    amazonButton.style.display = 'inline-block'; // Ensure initial visibility as fallback
  }
  
  if (buttonDiv && typeof BuyWithPrime !== 'undefined') {
    BuyWithPrime.Button.render({
      elementId: 'buy-with-prime-button',
      sku: buttonDiv.dataset.sku,
      placementId: buttonDiv.dataset.placementId
      // Add other options if needed
    });
    
    // Check after a delay if Prime button rendered (has content)
    setTimeout(() => {
      if (buttonDiv.hasChildNodes() && amazonButton) {
        amazonButton.style.display = 'none'; // Hide Amazon if Prime loaded
      } else if (amazonButton) {
        amazonButton.style.display = 'inline-block'; // Show Amazon if Prime failed
      }
    }, 1000); // 1-second delay to allow SDK render time
  } else if (amazonButton) {
    // If SDK not loaded, ensure Amazon is shown
    amazonButton.style.display = 'inline-block';
  }
});