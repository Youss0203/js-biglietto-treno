const numeroChilometri = parseFloat(prompt("quanti chilometri vuoi percorrere"));
const etàPasseggero = parseInt(prompt("qunati anni hai"))


let TotaleBiglietto = (0.21 * numeroChilometri);
let sconto;
if (etàPasseggero > 18)
{
   sconto = ((TotaleBiglietto*40)/100)
} else (etàPasseggero <= 64)
{
    sconto = ((TotaleBiglietto * 20)/100)
}
let prezzoTotaleBiglietto = TotaleBiglietto - sconto;

console.log(prezzoTotaleBiglietto.toFixed(2))
document.getElementById("input").innerHTML = `il prezzo totale del biglietto è: ${prezzoTotaleBiglietto.toFixed(2)}`