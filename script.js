document.getElementById('emi-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const loanAmount = parseFloat(document.getElementById('loanAmount').value);
  const annualInterest = parseFloat(document.getElementById('interestRate').value);
  const tenureYears = parseFloat(document.getElementById('loanTenure').value);

  const monthlyInterestRate = annualInterest / 12 / 100;
  const tenureMonths = tenureYears * 12;

  const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureMonths)) /
              (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1);

  const resultBox = document.getElementById('result');
  if (isFinite(emi)) {
    resultBox.innerHTML = `
      <h3>EMI Result:</h3>
      <p><strong>Monthly EMI:</strong> ₹${emi.toFixed(2)}</p>
      <p><strong>Total Payment:</strong> ₹${(emi * tenureMonths).toFixed(2)}</p>
      <p><strong>Total Interest:</strong> ₹${((emi * tenureMonths) - loanAmount).toFixed(2)}</p>
    `;
  } else {
    resultBox.innerHTML = `<p>Please enter valid inputs.</p>`;
  }
});
