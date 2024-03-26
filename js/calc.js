function calculateDeposit(){
    const depositType = document.getElementById("depositType");
    const depositTerm = document.getElementById("depositTerm");

    const depositAmount = parseFloat(document.getElementById("depositAmount").value);
    
    const deposType = depositType.selectedOptions[0].textContent;
    const deposTerm = depositTerm.selectedOptions[0].textContent;
    

    let annualInterestRate = 0;

    if (depositType.value === "replenishable"){
        annualInterestRate = {
            6: 0.20,
            12: 0.22,
            18: 0.15,
            24: 0.10
        }; 
    }   else if (depositType.value === "time") {
        annualInterestRate = {
            3: 0.20,
            6: 0.22,
            9: 0.23,
            12: 0.24,
            18: 0.18,
            24: 0.15
        };
    }

    const selectedTerm = parseInt(depositTerm.value);
    let totalAmount = depositAmount;
    let year = parseInt(depositTerm.value);

    totalAmount = totalAmount * (annualInterestRate[selectedTerm])/12*year + totalAmount;
    
    
    
    document.getElementById("resultMessage").innerText = `Выбран вид вклада: ${deposType}, срок вклада: ${deposTerm}, сумма вклада: ${depositAmount} руб. В конце срока сумма составит: ${totalAmount.toFixed(2)} руб.`;
}


function showData(){
    const depositType = document.getElementById("depositType").value;
    const depositTermSelect = document.getElementById("depositTerm");
    depositTermSelect.innerHTML = "";

    if (depositType === "replenishable"){
        depositTermSelect.innerHTML = `
        <option value="6">6 месяцев</option>
        <option value="12">1 год</option>
        <option value="18">1.5 года</option>
        <option value="24">2 года</option>
    `;
    annualInterestRate = {
        6: 0.20,
        12: 0.22,
        18: 0.15,
        24: 0.10
    }; 
    }   else if (depositType === "time") {
        depositTermSelect.innerHTML = `
            <option value="3">3 месяца</option>
            <option value="6">6 месяцев</option>
            <option value="9">9 месяцев</option>
            <option value="12">1 год</option>
            <option value="18">1.5 года</option>
            <option value="24">2 года</option>
        `;
        annualInterestRate = {
            3: 0.20,
            6: 0.22,
            9: 0.23,
            12: 0.24,
            18: 0.18,
            24: 0.15
        };
    }
}