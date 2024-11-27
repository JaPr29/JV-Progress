


function Ejercicios(exnumber) {

    switch (exnumber) {
        ////////////////////////////////////////// EJERCICIO ///////////////////////////////////////////////
        case (1): {
            let number1 = Number(prompt("Ingrese el primer número: "))
            let number2 = Number(prompt("Ingrese el segundo número: "))
            if (isNaN(number1) || isNaN(number2)) {
                alert("El valor ingresado no es un número")
            }
            else {
                alert("Suma: " + (number1 + number2))
                alert("Resta: " + (number1 - number2))
                alert("Multiplicación: " + (number1 * number2))
                if (number2 != 0) {
                    alert("División: " + (number1 / number2))
                }
                else {
                    alert("No se puede dividir por 0")
                }
            } break
        }
        ////////////////////////////////////////// EJERCICIO ///////////////////////////////////////////////
        case (2): {
            let number = parseInt(prompt("Ingrese un número: "))
            if (typeof number !== "number") {
                alert("El valor ingresado no es un número") //Agregado para saber si siquiera es un número
            }
            else if (number % 2 === 0) {
                alert("El número es par")
            }
            else {
                alert("El número es impar")
            } break
        }
        ////////////////////////////////////////// EJERCICIO ///////////////////////////////////////////////
        case (3): {
            let temp = parseFloat(prompt("Ingrese la temperatura en Celcius o Fahrenheit: "))
            let type = prompt("Ingrese C para Celcius o F para Fahrenheit: ").toLowerCase()
            if (typeof temp !== "number") {
                alert("la temperatura ingresada no es un número")
                break
            } //Agregado para saber si siquiera es un número
            else {           
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
            }    
        }
        ////////////////////////////////////////// EJERCICIO ///////////////////////////////////////////////
        case (4): {
            let word = prompt("Ingrese una palabra.")

            if (word.includes(" ")) {
                alert("Lo ingresado es más que una sola palabra.")
            }
            else if (word.length == 0) {
                alert("No ingresaste ninguna palabra.") // Correción por si no se pone nada
            }
            else {
                alert("La palabra contiene " + word.length + " caracteres.")
            }
            break
        }
        ////////////////////////////////////////// EJERCICIO ///////////////////////////////////////////////
        case (5): {
            let operation = prompt("¿Qué operación desea realizar? (S)uma, (R)esta, (M)ultiplicación, (D)ivisión. Ingrese solo la primera letra").toLowerCase()
            let number1 = Number(prompt("Ingrese el primer número: "))
            let number2 = Number(prompt("Ingrese el segundo número: "))
            // CORRECCIÓN DE ERRORES:
            if (operation != "s" || operation != "r" || operation != "m" || operation != "d") {
                alert("La operación ingresada no existe o no está disponible.")
            }
            else if (typeof number1 !== "number" || typeof number2 !== "number") {
                alert("Los valores ingresados no son números.")
            }
            // Fin de la corrección
            else {
                switch (operation) {
                    case ("s"): {
                        alert("El resultado de la operación ingresada es " + (number1 + number2))
                        break
                    }
                    
                    case ("r"): {
                        alert("El resultado de la operación ingresada es " + (number1 - number2))
                        break
                    }

                    case ("m"): {
                        alert("El resultado de la operación ingresada es " + (number1 * number2))
                        break
                    }

                    case ("d"): {
                        alert("El resultado de la operación ingresada es " + (number1 / number2))
                        break
                    }
                }
            } break 
        }
        ////////////////////////////////////////// EJERCICIO ///////////////////////////////////////////////
        case (6): {
            alert("¡Juego de Adivinanza!")
            let randomNumber = Math.floor(Math.random() * 10) + 1
            while (true) {
                selectednumber = prompt("¡Elige un número del 1 al 10!")
                if (randomNumber == selectednumber) {
                    alert("¡GANASTE!")
                    break
                }
                else {
                    if (selectednumber < randomNumber) {
                        alert("Fallaste, pero no te desanimes, el número es más grande que el último que elegiste, ¡inténtalo de nuevo!")
                    }
                    else if (selectednumber > randomNumber) {
                        alert("Fallaste, pero no te desanimes, el número es más chico que el último que elegiste, ¡inténtalo de nuevo!")
                    }
                }
            }
        }
        ////////////////////////////////////////// EJERCICIO ///////////////////////////////////////////////
        case (7): {
            let number = parseInt(prompt("Escribe el número para dar la tabla de multiplicaciones."))
            if (typeof number !== "number") {
                alert("El valor ingresado no es un número") //Agregado para saber si siquiera es un número
                break
            }
            alert(number * 1 + "\n" + number * 2 + "\n" + number * 3 + "\n" + number * 4 + "\n" + number * 5 + "\n" + number * 6 + "\n" + number * 7 + "\n" + number * 8 + "\n" + number * 9 + "\n" + number * 10)
            break
        }
        ////////////////////////////////////////// EJERCICIO ///////////////////////////////////////////////
        case (8): {
            let number1 = parseInt(prompt("Ingresa el primer número: "))
            let number2 = parseInt(prompt("Ingresa el segundo número: "))
            let number3 = parseInt(prompt("Ingresa el tercer número: "))
            if (typeof number1 !== "number" || typeof number2 !== "number" || typeof number3 !== "number") {
                alert("Al menos uno de los valores ingresados no es un número.")
            }
            else if (number1 > number2 && number1 > number3) {
                alert("El primer número (" + number1 + ") es el mayor.")
            }
            else if (number2 > number1 && number2 > number3) {
                alert("El segundo número (" + number2 + ") es el mayor.")
            }
            else if (number3 > number1 && number3 > number2) {
                alert("El tercer número (" + number3 + ") es el mayor.")
            }
            else {
                alert("Los tres números son iguales.")
            }
        }
        ////////////////////////////////////////// EJERCICIO ///////////////////////////////////////////////
        case (9): {
            alert("Lista de compras.")
            let shoplist = []
            let whileshoplist = true
            while (whileshoplist) {
                product = prompt("Ingresa el nombre del producto a agregar a la lista.")
                if (product.length <= 0) {
                    alert("No escribiste nada mamerto...")
                }
                else {
                    shoplist.push(product)
                    let whiledecision = true
                    while (whiledecision) {
                        buydecision = (prompt("¿Quieres seguir comprando? S/N")).toLowerCase()
                        if (buydecision == "s") {
                            whiledecision = false
                        }
                        else if (buydecision == "n") {
                            whiledecision = false
                            whileshoplist = false
                        }
                        else {
                            alert("La opción elegida no está disponible.")
                        }
                    }
                }
            }
                function ShowList() {
                    alert("A continuación se mostrará la lista:")
                    shoplist.forEach(element => {
                        alert(element)
                });
                }
                function DeleteProduct() {
                    let deleteproduct = (prompt("¿Quieres eliminar algún producto? S/N")).toLowerCase()
                    if (deleteproduct == "s") {
                        let productiddelete = prompt("¿Qué producto quieres eliminar? Pon el nombre exacto que pusiste anteriormente.")
                        if (shoplist.includes(productiddelete)) {
                            shoplist = shoplist.filter(id => id !== productiddelete);
                        }
                        else {
                            alert("No existe ese producto en la lista.")
                        }
                        deleteproduct = prompt("¿Quieres eliminar otro producto? S/N").toLowerCase()
                        if (deleteproduct == "s") {
                            DeleteProduct()
                        }
                        else if (deleteproduct == "n") {
                            ShowList()
                            alert("Adiós!")
                        }
                        else {
                            alert("La opción elegida no está disponible.")
                        }
                    }

                    else if (deleteproduct == "n") {
                        alert("Adiós.")
                    }
                    else {
                        alert("La opción elegida no está disponible.")
                    }
                    }
                ShowList()
                DeleteProduct()

        }
        ////////////////////////////////////////// EJERCICIO ///////////////////////////////////////////////
        case (10): {

        }
        ////////////////////////////////////////// EJERCICIO ///////////////////////////////////////////////
    }
}