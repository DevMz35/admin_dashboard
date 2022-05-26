;(function(){
  const amount = document.querySelector('#amount');
  const apr = document.querySelector('#apr');
  const years = document.querySelector('#years');
  const zipCode = document.querySelector('#zipCode');
  const Payment = document.querySelector('#payment');
  const total= document.querySelector('#total');
  const totalInterest = document.querySelector('#totalinterest');

  const calculate = () =>{
     const principal = parseFloat(amount.value);
     const interest = parseFloat(apr.value) /100/12;
     const payments = parseFloat(years.value) * 12;

     const x =Math.pow(1 + interest, payments);
     const montly =(principal * x *interest) / (x - 1)
    
     if(isFinite(montly)){
         Payment.textContent = montly.toFixed(2);
         total.textContent = (montly * payments).toFixed(2)
         totalInterest.textContent = ((montly * payments)- principl).toFixed(2);
         save(amount.value, apr.value, years.value, zipCode.value)
    
    try{
        getLenders(amount.value, apr.value, years.value, zipCode.value)
    }
    catch{

    }

    chart(principal, interest, montly, payments);
 }else{
     Payment.textContent= '';
     total.textContent ='';
     totalInterest.textContent = '';
     chart();
 }
}

function save(amount, apr, years, zipcode) {
    if (window.localStorage) {
    localStorage.loan_amount = amount;
    localStorage.loan_apr = apr;
    localStorage.loan_years = years;
    localStorage.loan_zipcode = zipcode;
    }
    }

    window.onload = function() {
        if (window.localStorage && localStorage.loan_amount) {
        document.getElementById("amount").value = localStorage.loan_amount;
        document.getElementById("apr").value = localStorage.loan_apr;
        document.getElementById("years").value = localStorage.loan_years;
        document.getElementById("zipcode").value = localStorage.loan_zipcode;
        }
        };

        function getLenders(amount, apr, years, zipcode) {
            if (!window.XMLHttpRequest) return;
            const ad = document.querySelector('#lenders');
            if(!ad)return;
            const url = 'getLenders.php' + "?amt=" + encodeURIComponent(amount) + "&apr=" + encodeURIComponent(apr) +
            "&yrs=" + encodeURIComponent(years) +
            "&zip=" + encodeURIComponent(zipcode);

            let req = new XMLHttpRequest(); 
            req.open("GET", url); 
            req.send(null);

            req.onreadystatechange = function() {
                if (req.readyState == 4 && req.status == 200) {
                let response = req.responseText;
                let lenders = JSON.parse(response);
        }

          let list = "";
         for(var i = 0; i < lenders.length; i++) {
         list += "<li><a href='" + lenders[i].url + "'>" +
          lenders[i].name + "</a>";
        }
    }
}

const btn = document.querySelector('#btn');
btn.addEventListener('click, change', calculate)

function chart(principal, interest, monthly, payments) {
    var graph = document.getElementById("graph");
    graph.width = graph.width;
    if (arguments.length == 0 || !graph.getContext) return;
 
    let g = graph.getContext("2d");
let width = graph.width, height = graph.height;
function paymentToX(n) { return n * width/payments; }
function amountToY(a) { return height-(a * height/(monthly*payments*1.05));}

g.moveTo(paymentToX(0), amountToY(0)); 
g.lineTo(paymentToX(payments), 
amountToY(monthly*payments));
g.lineTo(paymentToX(payments), amountToY(0)); 
g.closePath(); 
g.fillStyle = "#f88"; 
g.fill(); 
g.font = "bold 12px sans-serif"; 
g.fillText("Total Interest Payments", 20,20);
const equity = 0;
g.beginPath();
g.moveTo(paymentToX(0), amountToY(0));

for(let p = 1; p <= payments; p++) {
    let thisMonthsInterest = (principal-equity)*interest;
    equity += (monthly - thisMonthsInterest); 
    g.lineTo(paymentToX(p),amountToY(equity));
    }
    g.lineTo(paymentToX(payments), amountToY(0)); 
    g.closePath();
    g.fillStyle = "green";
    g.fill();
    g.fillText("Total Equity", 20,35);

    let bal = principal;
g.beginPath();
g.moveTo(paymentToX(0),amountToY(bal));
for(let p = 1; p <= payments; p++) {
let thisMonthsInterest = bal*interest;
bal -= (monthly - thisMonthsInterest); 
g.lineTo(paymentToX(p),amountToY(bal)); 
}
g.lineWidth = 3; 
g.stroke(); 
g.fillStyle = "black"; 
g.fillText("Loan Balance", 20,50); 
g.textAlign="center"; 
var y = amountToY(0); 
for(let year=1; year*12 <= payments; year++) { 
const x = paymentToX(year*12); 
g.fillRect(x-0.5,y-3,1,3); 
if (year == 1) g.fillText("Year", x, y-5); 

if (year % 5 == 0 && year*12 !== payments){
return
}


g.textAlign = "right";
g.textBaseline = "middle"; 
var ticks = [monthly*payments, principal];
var rightEdge = paymentToX(payments); 
for(var i = 0; i < ticks.length; i++) { 
var y = amountToY(ticks[i]);
g.fillRect(rightEdge-3, y-0.5, 3,1); 
g.fillText(String(ticks[i].toFixed(0)), 
rightEdge-5, y);
}
} 
}
})();