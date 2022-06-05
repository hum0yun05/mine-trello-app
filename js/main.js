
function calc() {
    let kreditSumma = document.getElementById("kredit-sum").value;
    let yearPercent = document.getElementById("year-percent").value;
    let year = document.getElementById("year").value;
    let startPercent = document.getElementById("start-percent").value;
    let period = document.getElementById("year-period").value;
    let month = document.getElementById("month").value;

    let startPayment = kreditSumma * startPercent / 100;
    document.getElementById("start-payment").innerHTML = startPayment + " so'm";

    let givenSum = kreditSumma - startPayment;
    document.getElementById("given-sum").innerHTML = givenSum + " so'm";

    let monthPayment = kreditSumma / (period * 12);
    document.getElementById("month-payment").innerHTML = monthPayment + " so'm";

    let result = "";
    let percentPayment = givenSum * yearPercent / 1200;
    let oylar = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"]

    let oy = 0;
    let foiz = 0;
    let total = 0;

    for (let i = 0; i < period * 12; i++){
        result +=
            "<tr>" +
            "<td>"+ (i + 1) +"</td>" +
            "<td>"+ year +"</td>" +
            "<td>"+ oylar[i] +"</td>" +
            "<td>"+ givenSum +" so'm</td>" +
            "<td>"+ monthPayment +" so'm</td>" +
            "<td>"+ percentPayment +" so'm</td>" +
            "<td>"+ (monthPayment + percentPayment) +" so'm</td>" +
            "</tr>"
    }
    document.getElementById("result").innerHTML = result;
}
