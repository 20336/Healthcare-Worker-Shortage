"use strict"

const $ = selector => document.querySelector(selector);

const getErrorMsg = (lbl, max) =>
    `${lbl} must be a valid number greater than zero and less than or equal to ${max}`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};


const calculateFV = (investment, rate, years) => {

    let futureValue = investment;
    for(let i = 1; i <= years; i++) {
        futureValue += futureValue * rate / 100;
    }
    return futureValue;
};

//const processEntries = () => {
//    const investment = parseFloat($("#investment").value);
//    const rate = parseFloat($("#rate").value);
//    const years = parseFloat($("#years").value);

//    if (isNaN(investment) || investment <= 0 || investment > 100000) {
//        alert(getErrorMsg("Total investment", "100,000"));
//        focusAndSelect("#investment");
//    } else if (isNaN(rate) || rate <= 0 || rate > 15) {
//        alert(getErrorMsg("Annual interest rate", "15"));
//        focusAndSelect("#rate");
//    } else if (isNaN(years) || years <= 0 || years > 50) {
//        alert(getErrorMsg("Number of years", "50"));
//        focusAndSelect("#years");
//    }  else {
//        
//        $("#future").value = calculateFV(investment, rate, years).toFixed(2);
//    }
//};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", () => {
        const investment = parseFloat($("#investment").value);
        const rate = parseFloat($("#rate").value);
        const years = parseFloat($("#years").value);

        if (isNaN(investment) || investment <= 0 || investment > 100000) {
            alert(getErrorMsg("Total investment", "100,000"));
            focusAndSelect("#investment");
        } else if (isNaN(rate) || rate <= 0 || rate > 15) {
            alert(getErrorMsg("Annual interest rate", "15"));
            focusAndSelect("#rate");
        } else if (isNaN(years) || years <= 0 || years > 50) {
            alert(getErrorMsg("Number of years", "50"));
            focusAndSelect("#years");
        }  else {
            
            $("#future").value = calculateFV(investment, rate, years).toFixed(2);
        }
    });
    $("#investment").focus();    
});