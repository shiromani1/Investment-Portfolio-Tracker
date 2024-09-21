const investments = [];
let totalValue = 0;

document.getElementById('addInvestmentBtn').addEventListener('click', function () {
    document.getElementById('investmentForm').classList.toggle('hidden');
});

document.getElementById('submitInvestment').addEventListener('click', function () {
    const assetName = document.getElementById('assetName').value;
    const amountInvested = parseFloat(document.getElementById('amountInvested').value);
    const currentValue = parseFloat(document.getElementById('currentValue').value);


    investments.push({ assetName, amountInvested, currentValue });
    updateInvestmentTable();
    updateChart();

    document.getElementById('investmentForm').classList.add('hidden');
});

function updateInvestmentTable() {
    const tbody = document.getElementById('investmentTable').querySelector('tbody');
    tbody.innerHTML = '';

    totalValue = investments.reduce((sum, inv) => sum + inv.currentValue, 0);
    document.getElementById('totalValue').innerText = totalValue.toFixed(2);

    investments.forEach((inv, index) => {
        const changePercent = (((inv.currentValue - inv.amountInvested) / inv.amountInvested) * 100).toFixed(2);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${inv.assetName}</td>
            <td>$${inv.amountInvested.toFixed(2)}</td>
            <td>$${inv.currentValue.toFixed(2)}</td>
            <td>${changePercent}%</td>
            <td><button onclick="removeInvestment(${index})">Remove</button></td>
        `;
        tbody.appendChild(row);
    });
}

function removeInvestment(index) {
    investments.splice(index, 1);
    updateInvestmentTable();
    updateChart();
}
