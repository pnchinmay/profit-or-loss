var initialPrice = document.querySelector("#initial-price");
var StockQuantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
var btn = document.querySelector("#btn");
var output = document.querySelector("#output");


function calculator(initial, quantity, current) {
    if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitpercent = (profit / (initial * quantity)) * 100;
        toShowOutput(`Hey! your profit is ${profit} and profit percentage is ${profitpercent.toFixed(2)}🤑`);
        color("green");
    } else if(initial>current) {
        var loss = (initial - current)*quantity;
        var losspercent = (loss / (initial * quantity))* 100;
       toShowOutput(`Your loss is ${loss} and loss percentage is ${losspercent.toFixed(2)}😟`);
       color("red");
    } else if (initial === current) {
        toShowOutput(`No pain no gain, No gain no pain😁`);
        color("brown");
    }
    if ((initial && quantity && current) === 0) {
        toShowOutput(`Hey! fill all the boxes. Dont you want to know your profit or loss 😈`);
        color("black")
    }
}

function finalOut() {
    var ina = Number(initialPrice.value);
    var qna = Number(StockQuantity.value);
    var cna = Number(currentPrice.value);

    calculator(ina, qna, cna);
}





function toShowOutput(msg) {
    output.innerHTML = msg;
}

function color(col) {
    output.style.color = col
}



btn.addEventListener("click", finalOut);