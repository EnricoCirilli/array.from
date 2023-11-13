###introduzione all'uso  del metodo Array.from

ESEMPI PRATICI PER CAPIRE COSA FA CONCRETAMENTE ARRAY.FOR


<span style="color:orangered">Il metodo statico Array.from() crea una nuova istanza Array con copia superficiale da un oggetto iterabile o simile ad un array.</span>

array.from è un construct method molto flessibile nel suo utilizzo.

à



###Vediamo la sintassi base e alcuni semplici esempi per capaire meglio di cosa si tratta??


<span style="color:orangered">Sintassi Base</span>

Array.from(arrayLike)

Esempio 1: In questo esempio vedremo l'uso di base del metodo Array from().

<span style="color:orangered">JavaScript Demo</span>
input:


console.log(Array.from("This is JavaScript Array " +"from() Method")); 


output:


T,h,i,s, ,i,s, ,J,a,v,a,S,c,r,i,p,t, ,A,r,r,a,y, 
 ,f,r,o,m,(,), ,M,e,t,h,o,d

Utilizzo concreto? non si vede perché e solo un modo didattico per iniziare a capire come funziona.

Esempio 2: 

<span style="color:orangered">JavaScript Demo</span>
input: 

console.log(Array.from("GeeksforGeeks"));
console.log(Array.from([10, 20, 30]));

output: 

G,e,e,k,s,f,o,r,G,e,e,k,s
10,20,30

Esempio 3: 

<span style="color:orangered">JavaScript Demo</span>
input:

Qui l'array di input è [1,2,3] e l'output
diventare il doppio di ogni elemento.

console.log(Array.from([1, 2, 3],
            x => x + x));

ouput:

2,4,6

<span style="color:orangered">JavaScript Demo</span>

ESEMPIO 4 ARRAY.FROM
 definiti tre parametri in un array 
 con la variabile e  un array.from posso creare un nuovo array con numeri che non hanno duplicati

const ary = [1, 1, 2];

const unique = Array.from(new Set(ary));

console.log(unique);

output : [1,2];

#####Nota: se prendiamo un numero complesso come parametro, restituisce un errore perché solo array e stringa possono essere presi come parametro.




(Il protocollo iterabile
Il protocollo iterable consente agli oggetti JavaScript di definire o personalizzare il loro comportamento di iterazione, ad esempio quali valori vengono ripetuti in un costrutto for...of. Alcuni tipi incorporati sono iterabili incorporati con un comportamento di iterazione predefinito, come Array o Map, mentre altri tipi (come Object) non lo sono.

Per essere iterabile, un oggetto deve implementare il metodo @@iterator, il che significa che l'oggetto (o uno degli oggetti nella sua catena di prototipi) deve avere una proprietà con una chiave @@iterator che è disponibile tramite la costante Symbol.iterator:)



Alcuni oggetti JavaScript, come il NodeList restituito da document.getElementsByTagName() o l'oggetto topics reso disponibile all'interno del corpo di una funzione, appaiono e si comportano come array in superficie ma non condividono tutti i loro metodi. L'oggetto topics fornisce un attributo length ma non implementa metodi di array come forEach().

I metodi array non possono essere chiamati direttamente su oggetti simili ad array.