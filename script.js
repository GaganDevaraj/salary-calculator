var empName;
var cmpName;
var empCTC;

function calculateCTC() {
    empName = document.getElementById("fullName").value;
    cmpName = document.getElementById("companyName").value;
    empCTC = document.getElementById("yearlyCTC").value;

    console.log(empName + ", " + cmpName + ", " + empCTC);

    if (empName.length == 0) {
        document.getElementById("nameError").innerHTML = "Name field can't be left empty";
        document.getElementById("fullName").style.borderColor = "red";
    }

    if (cmpName.length == 0) {
        document.getElementById("companyError").innerHTML = "Company name field can't be left empty";
        document.getElementById("companyName").style.borderColor = "red";
    }

    if (empCTC.length == 0) {
        document.getElementById("ctcError").innerHTML = "CTC field can't be left empty";
        document.getElementById("yearlyCTC").style.borderColor = "red";
    }

    calculateDetailedCTC()

    return false;
}

function calculateDetailedCTC() {

    var monthlyGrossPay = (empCTC / 12).toFixed(2);
    var yearlyGrossPay = empCTC;

    document.getElementById("empName").innerHTML = empName;
    document.getElementById("cmpName").innerHTML = cmpName;
    document.getElementById("ctc").innerHTML = empCTC;
    document.getElementById("monthlyGrossPay").innerHTML = monthlyGrossPay;
    document.getElementById("yearlyGrossPay").innerHTML = yearlyGrossPay + ".00";

    // Professional Tax Calculation
    var monthlyProfessionalTax = 200.0;
    var yearlyProfessionalTax = 12 * monthlyProfessionalTax;
    document.getElementById("monthlyProfessionalTax").innerHTML = monthlyProfessionalTax + ".00";
    document.getElementById("yearlyProfessionalTax").innerHTML = yearlyProfessionalTax + ".00";


    // Employer PF Calculation
    var yearlyEmployerPF = empCTC * .06;
    var monthlyEmployerPF = yearlyEmployerPF / 12;
    document.getElementById("monthlyEmployerPF").innerHTML = monthlyEmployerPF + ".00";
    document.getElementById("yearlyEmployerPF").innerHTML = yearlyEmployerPF + ".00";


    // Employer PF Calculation
    var yearlyEmployeePF = empCTC * .06;
    var monthlyEmployeePF = yearlyEmployerPF / 12;
    document.getElementById("monthlyEmployeePF").innerHTML = monthlyEmployeePF + ".00";
    document.getElementById("yearlyEmployeePF").innerHTML = yearlyEmployeePF + ".00";

    //Employee Insurance Calculation
    var yearlyEmployeeInsurance = 6600.0; //for 5,00,000 coverage
    var monthlyEmployeeInsurance = yearlyEmployeeInsurance / 12;
    document.getElementById("monthlyEmployeeInsurance").innerHTML = monthlyEmployeeInsurance + ".00";
    document.getElementById("yearlyEmployeeInsurance").innerHTML = yearlyEmployeeInsurance + ".00";

    //Additional deduction Calculation
    var monthlyAdditionalDeduction = 150.0;
    var yearlyAdditionalDeduction = monthlyAdditionalDeduction * 12;
    document.getElementById("monthlyAdditionalDeduction").innerHTML = monthlyAdditionalDeduction + ".00";
    document.getElementById("yearlyAdditionalDeduction").innerHTML = yearlyAdditionalDeduction + ".00";

    //Sub total Calculation
    var monthlySubTotal = monthlyProfessionalTax + monthlyEmployerPF + monthlyEmployeePF + monthlyEmployeeInsurance + monthlyAdditionalDeduction;
    var yearlySubTotal = yearlyProfessionalTax + yearlyEmployerPF + yearlyEmployeePF + yearlyEmployeeInsurance + yearlyAdditionalDeduction;
    document.getElementById("monthlySubTotal").innerHTML = monthlySubTotal + ".00";
    document.getElementById("yearlySubTotal").innerHTML = yearlySubTotal + ".00";

    //Net Pay/ Take Home Salary Calculation
    var monthlyTakeHome = ((empCTC / 12) - monthlySubTotal).toFixed(2);
    var yearlyTakeHome = yearlyGrossPay - yearlySubTotal;
    document.getElementById("monthlyTakeHome").innerHTML = monthlyTakeHome;
    document.getElementById("yearlyTakeHome").innerHTML = yearlyTakeHome + ".00";

    //Tax calcultion - Existing Scheme
    var taxableAmount = yearlyTakeHome;
    var slabOneTaxAmount = 0.0;             //Up to 2,50,000            :0%
    var slabTwoTaxAmount = 12500.0;         //2,50,001 to 5,00,000      :5%
    var slabThreeTaxAmount = 50000.0;       //5,00,001 to 7,50,000     :20%
    var slabFourTaxAmount = 50000.0;        //7,50,000 to 10,00,000    :20%
    var slabFiveTaxAmount = 75000.0;        //10,00,000 to 12,50,000    :30%
    var slabSixTaxAmount = 75000.0;        //12,50,000 to 15,00,000    :30%
    var slabSevenTaxAmount = 75000.0;        //15,00,000 to 17,50,000    :30%
    var slabEightTaxAmount = 75000.0;        //17,50,000 to 20,00,000    :30%

    var taxAmount = 0.0;
    var existSlabTaxAmount = 0.0;

    //Slab-1
    if(taxableAmount >= 0.0 && taxableAmount <= 250000.0) {
        taxAmount = 0.0;
        console.log(taxAmount);
        document.getElementById("taxAmountExisting").innerHTML = taxAmount;
        existSlabTaxAmount = taxAmount;
    }

    //Slab-2
    if(taxableAmount >= 250000.0 && taxableAmount <= 500000.0) {
        taxAmount = (taxableAmount*0.05);
        console.log(taxAmount);
        document.getElementById("taxAmountExisting").innerHTML = taxAmount;
        existSlabTaxAmount = taxAmount;
    }

    //Slab-3
    if(taxableAmount >= 500000.0 && taxableAmount <= 750000.0) {
        taxAmount = taxAmount + slabTwoTaxAmount;
        var amount = 750000.0 - taxableAmount;
        taxAmount = taxAmount + (amount*0.20);
        console.log(taxAmount);
        document.getElementById("taxAmountExisting").innerHTML = taxAmount;
        existSlabTaxAmount = taxAmount;
    }

    //Slab-4
    if(taxableAmount >= 750000.0 && taxableAmount <= 1000000.0) {
        taxAmount = (taxAmount + slabTwoTaxAmount + slabThreeTaxAmount);
        var amount = 1000000.0 - taxableAmount;
        taxAmount = taxAmount + (amount*0.20);
        console.log(taxAmount);
        document.getElementById("taxAmountExisting").innerHTML = taxAmount;
        existSlabTaxAmount = taxAmount;
    }

    //Slab-5
    if(taxableAmount >= 1000000.0 && taxableAmount <= 1250000.0) {
        taxAmount = (taxAmount + slabTwoTaxAmount + slabThreeTaxAmount + slabFourTaxAmount);
        var amount = 1250000.0 - taxableAmount;
        taxAmount = taxAmount + (amount*0.30);
        console.log(taxAmount);
        document.getElementById("taxAmountExisting").innerHTML = taxAmount;
        existSlabTaxAmount = taxAmount;
    }

    //Slab-6
    if(taxableAmount >= 1250000.0 && taxableAmount <= 1500000.0) {
        taxAmount = (taxAmount + slabTwoTaxAmount + slabThreeTaxAmount + slabFourTaxAmount + slabFiveTaxAmount);
        var amount = 1500000.0 - taxableAmount;
        taxAmount = taxAmount + (amount*0.30);
        console.log(taxAmount);
        document.getElementById("taxAmountExisting").innerHTML = taxAmount;
        existSlabTaxAmount = taxAmount;
    }

    //Slab-7
    if(taxableAmount >= 1500000.0 && taxableAmount <= 1750000.0) {
        taxAmount = (taxAmount + slabTwoTaxAmount + slabThreeTaxAmount + slabFourTaxAmount + slabFiveTaxAmount + slabSixTaxAmount);
        var amount = 1750000.0 - taxableAmount;
        taxAmount = taxAmount + (amount*0.30);
        console.log(taxAmount);
        document.getElementById("taxAmountExisting").innerHTML = taxAmount;
        existSlabTaxAmount = taxAmount;
    }

    //Slab-8
    if(taxableAmount >= 1750000.0 && taxableAmount <= 2000000.0) {
        taxAmount = (taxAmount + slabTwoTaxAmount + slabThreeTaxAmount + slabFourTaxAmount + slabFiveTaxAmount + slabSixTaxAmount + slabSevenTaxAmount);
        var amount = 2000000.0 - taxableAmount;
        taxAmount = taxAmount + (amount*0.30);
        console.log(taxAmount);
        document.getElementById("taxAmountExisting").innerHTML = taxAmount;
        existSlabTaxAmount = taxAmount;
    }

    //Slab-9
    if(taxableAmount >= 2000000.0 && taxableAmount <= 2250000.0) {
        taxAmount = (taxAmount + slabTwoTaxAmount + slabThreeTaxAmount + slabFourTaxAmount + slabFiveTaxAmount + slabSixTaxAmount + slabSevenTaxAmount + slabEightTaxAmount);
        var amount = 2250000.0 - taxableAmount;
        taxAmount = taxAmount + (amount*0.30);
        console.log(taxAmount);
        document.getElementById("taxAmountExisting").innerHTML = taxAmount;
        existSlabTaxAmount = taxAmount;
    }


    //Tax calcultion - New Scheme
    var taxableAmount = yearlyTakeHome;
    var slabOneTaxAmount = 0.0;             //Up to 2,50,000            :0%
    var slabTwoTaxAmount = 12500.0;         //2,50,001 to 5,00,000      :5%
    var slabThreeTaxAmount = 25000.0;       //5,00,001 to 7,50,000     :10%
    var slabFourTaxAmount = 37500.0;        //7,50,000 to 10,00,000    :15%
    var slabFiveTaxAmount = 50000.0;        //10,00,000 to 12,50,000    :20%
    var slabSixTaxAmount = 62500.0;        //12,50,000 to 15,00,000    :25%
    var slabSevenTaxAmount = 75000.0;        //15,00,000 to 17,50,000    :30%
    var slabEightTaxAmount = 75000.0;        //17,50,000 to 20,00,000    :30%

    var taxAmount = 0.0;
    var newSlabTaxAmount = 0.0;

    //Slab-1
    if(taxableAmount >= 0.0 && taxableAmount <= 250000.0) {
        taxAmount = 0.0;
        console.log(taxAmount);
        document.getElementById("taxAmountNew").innerHTML = taxAmount;
        newSlabTaxAmount = taxAmount;
    }

    //Slab-2
    if(taxableAmount >= 250000.0 && taxableAmount <= 500000.0) {
        taxAmount = (taxableAmount*0.05);
        console.log(taxAmount);
        document.getElementById("taxAmountNew").innerHTML = taxAmount;
        newSlabTaxAmount = taxAmount;
    }

    //Slab-3
    if(taxableAmount >= 500000.0 && taxableAmount <= 750000.0) {
        taxAmount = taxAmount + slabTwoTaxAmount;
        var amount = 750000.0 - taxableAmount;
        taxAmount = taxAmount + (amount*0.10);
        console.log(taxAmount);
        document.getElementById("taxAmountNew").innerHTML = taxAmount;
        newSlabTaxAmount = taxAmount;
    }

    //Slab-4
    if(taxableAmount >= 750000.0 && taxableAmount <= 1000000.0) {
        taxAmount = (taxAmount + slabTwoTaxAmount + slabThreeTaxAmount);
        var amount = 1000000.0 - taxableAmount;
        taxAmount = taxAmount + (amount*0.15);
        console.log(taxAmount);
        document.getElementById("taxAmountNew").innerHTML = taxAmount;
        newSlabTaxAmount = taxAmount;
    }

    //Slab-5
    if(taxableAmount >= 1000000.0 && taxableAmount <= 1250000.0) {
        taxAmount = (taxAmount + slabTwoTaxAmount + slabThreeTaxAmount + slabFourTaxAmount);
        var amount = 1250000.0 - taxableAmount;
        taxAmount = taxAmount + (amount*0.20);
        console.log(taxAmount);
        document.getElementById("taxAmountNew").innerHTML = taxAmount;
        newSlabTaxAmount = taxAmount;
    }

    //Slab-6
    if(taxableAmount >= 1250000.0 && taxableAmount <= 1500000.0) {
        taxAmount = (taxAmount + slabTwoTaxAmount + slabThreeTaxAmount + slabFourTaxAmount + slabFiveTaxAmount);
        var amount = 1500000.0 - taxableAmount;
        taxAmount = taxAmount + (amount*0.25);
        console.log(taxAmount);
        document.getElementById("taxAmountNew").innerHTML = taxAmount;
        newSlabTaxAmount = taxAmount;
    }

    //Slab-7
    if(taxableAmount >= 1500000.0 && taxableAmount <= 1750000.0) {
        taxAmount = (taxAmount + slabTwoTaxAmount + slabThreeTaxAmount + slabFourTaxAmount + slabFiveTaxAmount + slabSixTaxAmount);
        var amount = 1750000.0 - taxableAmount;
        taxAmount = taxAmount + (amount*0.30);
        console.log(taxAmount);
        document.getElementById("taxAmountNew").innerHTML = taxAmount;
        newSlabTaxAmount = taxAmount;
    }

    //Slab-8
    if(taxableAmount >= 1750000.0 && taxableAmount <= 2000000.0) {
        taxAmount = (taxAmount + slabTwoTaxAmount + slabThreeTaxAmount + slabFourTaxAmount + slabFiveTaxAmount + slabSixTaxAmount + slabSevenTaxAmount);
        var amount = 2000000.0 - taxableAmount;
        taxAmount = taxAmount + (amount*0.30);
        console.log(taxAmount);
        document.getElementById("taxAmountNew").innerHTML = taxAmount;
        newSlabTaxAmount = taxAmount;
    }

    //Slab-9
    if(taxableAmount >= 2000000.0 && taxableAmount <= 2250000.0) {
        taxAmount = (taxAmount + slabTwoTaxAmount + slabThreeTaxAmount + slabFourTaxAmount + slabFiveTaxAmount + slabSixTaxAmount + slabSevenTaxAmount + slabEightTaxAmount);
        var amount = 2250000.0 - taxableAmount;
        taxAmount = taxAmount + (amount*0.30);
        console.log(taxAmount);
        document.getElementById("taxAmountNew").innerHTML = taxAmount;
        newSlabTaxAmount = taxAmount;
    }

    if(existSlabTaxAmount < newSlabTaxAmount) {
        document.getElementById("betterSlab").innerHTML = "Existing Tax scheme is suitable for your current CTC";
        document.getElementById("save").innerHTML = "You can save: "+(newSlabTaxAmount-existSlabTaxAmount);
        document.getElementById("taxAmountExisting").className = "text-success | text-center";
        document.getElementById("taxAmountNew").className = "text-danger | text-center";

    } else {
        document.getElementById("betterSlab").innerHTML = "New Tax scheme is suitable for your current CTC";
        document.getElementById("save").innerHTML = "You can save: "+(existSlabTaxAmount-newSlabTaxAmount);
        document.getElementById("taxAmountExisting").className = "text-danger | text-center";
        document.getElementById("taxAmountNew").className = "text-success | text-center";
    }
}


