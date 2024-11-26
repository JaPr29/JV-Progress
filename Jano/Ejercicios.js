


function Ejercicios(exnumber) {

    switch (exnumber) {
        case (1): {
            /*1. Cálculo básico:
            // Escribí un programa que tome dos números ingresados por el usuario y devuelva su suma, resta, multiplicación y división.*/

            let number1 = Number(prompt("Ingrese el primer número: "))
            let number2 = Number(prompt("Ingrese el segundo número: "))
            if (isNaN(number1) || isNaN(number2)) {
                alert("El valor ingresado no es un número")
            }
            else {
                alert("Suma: " + (number1 + number2))
                alert("Resta: " + (number1 - number2))
                alert("Multiplicación: " + (number1 * number2))
                alert("División: " + (number1 / number2))
            }

            break

        }

        case (2): {
            // 2. Número par o impar:
            // Escribí un programa que determine si un número ingresado por el usuario es par o impar.

            let number = parseInt(prompt("Ingrese un número: "))
            if (number % 2 === 0) {
                alert("El número es par")
            }
            else {
                alert("El número es impar")
            }

            break

        }

        case (3): {
            // 3. Conversión de temperatura:

            // Escribí un programa que convierta una temperatura de grados Celsius a Fahrenheit o viceversa.


            let temp = parseFloat(prompt("Ingrese la temperatura en Celcius o Fahrenheit: "))
            let type = prompt("Ingrese C para Celcius o F para Fahrenheit: ").toLowerCase()
            switch (type) {
                case ("c"): {
                    alert("La temperatura es de " + (temp*(9/5)+32) + "° en Fahreinheit")
                    break
                }
                case ("f"): {
                    alert("La temperatura es de " + (temp-32)*(5/9) + "° en Celsius")
                    break
                }
                default: {
                    alert("El tipo seleccionado no es ni C ni F")
                    break
                }
            }



            break


        }
        
        case (4): {
            // 4. Contar caracteres:

            // Pedí al usuario que ingrese una palabra y mostrá cuántos caracteres tiene.

            let word = prompt("Ingrese una palabra.")

            if (word.includes(" ")) {
                alert("Lo ingresado es más que una sola palabra.")
            }
            else {
                alert("La palabra contiene " + word.length + " caracteres.")
            }

            break
        }

        case (5): {
            
            



        }
    }
}



