/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1,l2){
    return l1*l2
}
console.log(area(7, 3))



/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(n1,n2){
    if(n1 !== n2){
        return n1+n2

    }
    else{
        return (n1+n2) * 3
    }
}
console.log("la loro somma è " + crazySum(2, 6))
console.log("la loro somma moltiplicata per 3 è uguale a " + crazySum(6, 6))



/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(n1){
    if(n1 <= 19) {
        return Math.abs(n1 - 19) 

    }
    else{
        return  Math.abs(n1 - 19) * 3
    }
}
console.log(crazyDiff(10))
console.log(crazyDiff(30))


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n){
    if(n <= 100 && n > 20){
        return true
    }
    else if (n === 400){
        console.log("n è uguale a 400")
    }
}
console.log(boundary(50))
console.log(boundary(400))


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(string1) {

    if (string1.startsWith("EPICODE")) {
    return string1; 

  } else {
    return "EPICODE" + string1;
  }
}
console.log(epify("EPICODE corso"))
console.log(epify("ciao"))






/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(numero) {
  if (numero > 0 && (numero % 3 === 0 || numero % 7 === 0)) {
    return true 

  }
  return false
}


console.log(check3and7(23))
console.log(check3and7(21))
console.log(check3and7(30))



/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function revereString(parola) {

    let stringaInvertita = parola.split('').reverse().join('');
    return stringaInvertita
}

console.log(revereString("ITALIA"))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(stringa) {

     let parole = stringa.split(' ');

    for (let i = 0; i < parole.length; i++) {
        
    }

}

console.log(upperFirst("ciao come stai"))


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(lettere) {
 
  if (lettere.length >= 2) {
    
    let newstringa = lettere.slice(1, -1);
    return newstringa;
  } else {
   
    return "";
  }
}


console.log(cutString("riccardo"))
console.log(cutString("scuola"))          
console.log(cutString("milan"))
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n){
    let numeri = new Array (n)
    for (let i = 0 ; i < numeri.length ; i++) {
        numeri[i] = Math.random(0, 10) * 10

    }
    return numeri
}

console.log(giveMeRandom(3))