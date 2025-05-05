function calculateEMI() {
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const annualInterestRate = parseFloat(document.getElementById('interest-rate').value);
    const loanTenure = parseInt(document.getElementById('loan-tenure').value);

    if (isNaN(loanAmount) || isNaN(annualInterestRate) || isNaN(loanTenure)) {
        alert('Please fill in all fields');
        return;
    }

    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const numberOfMonths = loanTenure * 12;

    const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) / (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
    const emiFormatted = emi.toFixed(2);

    document.getElementById('emi-value').innerText = emiFormatted;
}
