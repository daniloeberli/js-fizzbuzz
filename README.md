Creiamo un ciclo for, definendo una variabile i contatore che partirà da 1 fino ad arrivare a 100. All'interno del ciclo con un if statement controlliamo se i vari numeri i siano multipli di 3, 5 oppure di entrambi. Per controllare usiamo l'operatore modulo % :
multiplo di 3: i%3===0
multiplo di 5: i%5==0
multiplo di entrambi i%3===0 && i%5===0
Infine stampiano in console i vari risultati.

Bonus 1:
Definisco una variabile relativa al mio ul presente nel documento html.
Dentro al ciclo definisco una seconda variabile, relativa ai vari li, che verranno inseriti nel documento attraverso .createElement. A seconda del caso in cui ci troviamo ( multiplo 3,5, entrambi) andiamo a inserire una classe che andrà a stilizzare il risultato.

Bonus 2:
All'interno del ciclo, nella sezione relativa ai vari classList.add dei li, aggiungiamo la classe box che costruirà i vari quadrati che conterranno i nostri elementi. Inoltre aggiungiamo sempre con classList.Add i colori relativi ai vari Fizz,Buzz,FizzBuzz e numero.