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
/* Eserciio Alberto Olla */
var cats = 5;
var inLine = 2;
var numLines = Math.ceil(cats/inLine);
var missing = (numLines*inLine)-cats;
console.log( cats + ' gatti in fila per ' + inLine + ' si unirono compatti in ' + numLines + ' file. Nell ultima fila rimasero ' + missing + ' posti gatto disponibili.');
/* Eserciio Alberto Olla */
var cats = 44;
var inLine = 6;
var numLines = Math.ceil(cats/inLine);
var missing = (numLines*inLine)-cats;
console.log( cats + ' gatti in fila per ' + inLine + ' si unirono compatti in ' + numLines + ' file. Nell ultima fila rimasero ' + missing + ' posti gatto disponibili.');
/* esercizio mio più lungo e matematico */
var x6 = 'input: ';
var x7 = ' --- output: ';
var x1 = ' numero di gatti: ' + 44;
var x2 = ', gatti per fila ' + 6;
var x3 = ' numero di file ' + Math.ceil(44/6);
var x4 = ', gatti mancanti ';
var x5 = 6*Math.ceil(44/6) - 44;
console.log( x6 + x1 + x2 + x7 + x3 + x4 + x5);

/* filastrocca simpatica */
var x8 = 44 + ' gatti';
var x9 = ' in fila x ' + 6;
var x10 = ' con il resto di ' + Math.ceil(44/6) + ' (ma non erano 2 ? ehehehe)';
console.log(x8 + x9 + x10);
