const lastName = "LoveLace";
const lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);
console.log(lastName);
console.log(lastName[0]);
console.log(lastName.length);
const lastLetterOfLastName1 = lastName[lastName.length - 2];
console.log(lastLetterOfLastName1);

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "The " + myNoun +" "+ myAdjective +", "+ myVerb +" "+ myAdverb + ".";
console.log(wordBlanks);

const myArray = [50, 70, 90];
 myArray[0] = 40;
console.log(myArray)

const myArrayNew = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArrayNew[2][1];
  console.log(myData);

  const newArray = [["jet", 'cat'], [20, 22]];
   newArray.push(['dog', 4]);
  console.log(newArray);

  const newLogin = [["jet", 'cat'], [20, 22]];
  const newPro = newLogin.pop();
  console.log(newPro);

  const deletePrimero = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
   const deletePrimeroNew = deletePrimero.shift();
   console.log(deletePrimeroNew);
  console.log(deletePrimero);

  const deleteIngresa = [["jet", 'cat'], [20, 22]];
  deleteIngresa.shift();
  deleteIngresa.unshift([1, 2, 3]);
  console.log(deleteIngresa);

  function reusableFunction(){
    console.log("Hello World")
  }
  reusableFunction();

  function resultadoSuma(a, b) {
    console.log(a +b);
  }
  resultadoSuma(7, 9);

function timesFive(num) {
    return num * 5;
}
const newTimesFive = timesFive(5);
console.log(newTimesFive);


 const myGlobal = 10;
 function fun1() {

}
fun1();

const oopsGlobal = 5;

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal * 2;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal * 3;
  }
  console.log(output);
}
fun2();

const varglobal = "camiza"

function ropa() {
    const varglobal = "chemize"
    return varglobal;
}
console.log(ropa())


let suma = 0;
function sumando() {
    suma = suma + 3;
};
function sumaMas() {
    suma = suma + 5;
};
console.log(sumando());
console.log(suma);
console.log(sumaMas());
console.log(suma); //aqui se ejecutan las dos funciones
