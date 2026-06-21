
      const INR_TO_USD = 0.0112;
  
      const inrInput = document.getElementById("inr");
      const usdOutput = document.getElementById("usd");
      const convertBtn = document.getElementById("convert");

      convertBtn.addEventListener("click", function () {
        let inrValue = parseFloat(inrInput.value);


        if (isNaN(inrValue) || inrValue < 0) {
          usdOutput.textContent = "Please enter a valid amount!";
          return;
        }
        let usdValue = inrValue * INR_TO_USD;
        usdOutput.textContent = usdValue.toFixed(2) + " USD";
      });
