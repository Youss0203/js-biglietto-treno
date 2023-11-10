const numeroChilometri = parseInt(prompt("quanti chilometri vuoi percorrere"));
const etàPasseggero = parseInt(prompt("qunati anni hai"))




const prezzoTotaleBiglietto= (0,21 * numeroChilometri);

if (etàPasseggero > 18){
    ((prezzoTotaleBiglietto*40)/100)
} else(etàPasseggero<18){
    ((prezzoTotaleBiglietto*20)/100)
}

