const { request } = require('http');
const readline = require('readline-sync');
let dict = {} //Diccionario acá para que no se borren los datos y se puedan agregar nuevos
function GradeSaver(dict) {
    function GradeQualify(dict = {}) { //Primera función para recursividad
        console.clear()
        for (let student in dict) {
            if (dict[student] >= 4) {
                console.log("El alumno " + student + " ha aprobado con una nota de " + dict[student])
            } else {
                console.log("El alumno " + student + " ha suspendido con una nota de " + dict[student])
            }
        }
    }
    function GradeAndStudentInput(dict = {}) { //Segunda función para recursividad
        console.clear()
        const student = readline.question("Ingrese el nombre del alumno: ")
        const grade = parseInt(readline.question("Ingrese la nota del alumno: "))
        const grade2 = parseInt(readline.question("Ingrese la segunda nota del alumno: "))
        const grade3 = parseInt(readline.question("Ingrese la tercera nota del alumno: "))
        const average = Math.round((grade + grade2 + grade3) / 3)
        if (isNaN(average)) {
            console.log("El dato ingresado no es un número")
            return
        }
        dict[student] = average
        requestforgrade = (readline.question("Desea ver las notas de los alumnos? (si/no): ")).toLowerCase()
        if (requestforgrade == "si") {
            GradeQualify(dict)
        } if (requestforgrade != "no" && requestforgrade != "si") {
            console.log("Valor ingresado no válido, continuando...")
        }
        return
    }
    GradeAndStudentInput(dict)
    const requestforstudent = (readline.question("Desea ingresar un nuevo alumno? (si/no): ")).toLowerCase()
    if (requestforstudent == "si") {
        GradeSaver(dict)
    }
    if (requestforstudent != "no" && requestforstudent != "si") {
        console.log("Valor ingresado no válido, continuando...")
    }
}
GradeSaver(dict)