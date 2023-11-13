/*Il metodo Array.from() restituisce un oggetto Array da qualsiasi oggetto con una proprietà length o qualsiasi oggetto iterabile.*/ 

/*Vediamo alcuni semplici esempi per capaire meglio di cosa si tratta??*/




//esempio 0 -- array da una stringa
const myArr = Array.from("ABCDEFG");
document.getElementById("demo").innerHTML = myArr;

//esempio 1 -- array da una stringa
const myArr2 = Array.from("This is JavaScript Array " +"from() Method");
document.getElementById("demo2").innerHTML = myArr2;
console.log(Array.from("This is JavaScript Array " +"from() Method")); 


//esempio 2

console.log(Array.from("GeeksforGeeks"));
console.log(Array.from([10, 20, 30]));


// esempio 3 ---Using arrow functions and Array.from()
// Using an arrow function as the map function to
// manipulate the elements
Array.from([1, 2, 3], (x) => x + x);
console.log(Array.from([1, 2, 3],x => x + x));



//esempio 4 -- array from a set

const ary = [1, 1, 2];
const unique = Array.from(new Set(ary));
console.log(unique);


const set = new Set(["enrico", "enrico", "baz", "foo"]);
Array.from(set);
console.log(set)





