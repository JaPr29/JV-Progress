// Structure_exercises
let MyArray = ["Gato", "Perro", "Pato", "León", "Gaviota"];
console.log(MyArray);
MyArray.push("Elefante");
MyArray.unshift("Tigre");
console.log(MyArray);
MyArray.splice(2, 1);
console.log(MyArray);

let MySet = new Set(["Libro 1", "Libro 2", "Libro 3", "Libro 4", "Libro 5"]);
console.log(MySet);
MySet.delete("Libro 3");
console.log(MySet);
MySet.add("Libro 6");
MySet.add("Libro 5");
console.log(MySet);

MyMap = new Map([
    ["1", "Enero"],
    ["2", "Febrero"],
    ["3", "Marzo"],
    ["4", "Abril"],
    ["5", "Mayo"],
    ["6", "Junio"],
    ["7", "Julio"],
    ["8", "Agosto"],
    ["9", "Septiembre"],
    ["10", "Octubre"],
    ["11", "Noviembre"],
    ["12", "Diciembre"]
])
console.log(MyMap);
console.log(MyMap.has("5"));

SummerArray = ["12", "1", "2"];

MyMap.set("Summer", SummerArray);
console.log(MyMap);

let MyNewArray = ["1", "2", "3", "4", "5"];
let MyNewSet = new Set(MyNewArray);
let MyNewMap = new Map();

MyNewMap.set("MySet", (Array.from(MyNewSet)));
console.log(MyNewMap);