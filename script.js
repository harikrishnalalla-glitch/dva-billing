function addBill() {
    let name = document.getElementById('pname').value;
    let service = document.getElementById('service').value;
    let amount = document.getElementById('amount').value;

    document.getElementById('result').innerHTML =
        `<h3>Bill Added</h3>
        <p>Name: ${name}</p>
        <p>Service: ${service}</p>
        <p>Amount: ₹${amount}</p>`;
}
