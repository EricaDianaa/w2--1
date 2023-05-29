/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//le variabili sono una porzione di memoria che memorizza dei valori. Vengono dichiarate tramite l'attributo let a cui viene dato un nome e un valore; Ci sono 5 tipi di valori:
let animale="gatto"//1)Valore stringa--> il valore stringa viene racchiuso da una o due virgolette( 1.""2.''), e puo contenere qualsiasi contenuto.
let animale2       //2)Valore underlined-->il valore underlined è un valore non definito,privo di contenuto.
let animale3= null //3)Valore null--> il valore null è un valore vuoto, che quindi non può contenere alcun tipo di valore.
let number= 10     //Valore number-->il valore number  racchiude semplicemente dei numeri al suo interno.
let animale4= true //Valore booeland-->il valore booeland è un valore che dichiara cosa è vero e cosa è falso.

/* ESERCIZIO 2
 Crea una variable chiamata "nome" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const nome="erica"

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number1= 12
let number2= 20
let number3= number1 + number2
console.log("number3",number3)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x=12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "nome" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 //nome= "diana"
//console.log("Name",nome)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let y= 4
let z= x-y
console.log("x-y",z)
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1="john"
let name2="John"
console.log("name1!==name2",name1!==name2)

//EXTRA

if(name1.toLowerCase()=== 'john'){
  name2= true
}
if(name1.toLowerCase()=== "John"){
  name2= false
}
 console.log(name2);


