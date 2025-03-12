 
  async function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    
    if (!amount || amount <= 0) {
      alert("Please enter a valid amount!");
      return;
    }
  
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    const response = await fetch(url);
    const data = await response.json();
  
    if (data.error) {
      alert("Error fetching exchange rates.");
      return;
    }
  
    const rate = data.rates[toCurrency];
    if (rate) {
      const convertedAmount = (amount * rate).toFixed(2);
      document.getElementById("convertedAmount").textContent = `${convertedAmount} ${toCurrency}`;
    } else {
      alert("Invalid currency conversion!");
    }
  }
  