/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/
var x6 = 'input';
var x7 = 'output';
var x1 = 'numero di gatti ' + 44;
var x2 = 'gatti per fila ' + 6;
var x3 = 'numero di file ' + Math.ceil(44/6);
var x4 = 'gatti mancanti ';
var x5 = 6*Math.ceil(44/6) - 44;
console.log(x6);
console.log(x1);
console.log(x2);
console.log(x7);
console.log(x3);
console.log(x4);
console.log(x5);


var x8 = 44 + ' gatti';
var x9 = ' in fila x ' + 6;
var x10 = 'con il resto di ' + Math.ceil(44/6) + ' (ma non erano 2 ? ehehehe)';
console.log(x8);
console.log(x9);
console.log(x10);
