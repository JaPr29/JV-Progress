


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
            
            let operation = prompt("¿Qué operación desea realizar? (S)uma, (R)esta, (M)ultiplicación, (D)ivisión. Ingrese solo la primera letra").toLowerCase()
            let number1 = Number(prompt("Ingrese el primer número: "))
            let number2 = Number(prompt("Ingrese el segundo número: "))
            if (operation.length > 1 || operation.length < 1) {
                alert("La operación ingresada no existe o no está disponible.")
            }
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
            }


        }

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

        case (7): {

            let number = parseInt(prompt("Escribe el número para dar la tabla de multiplicaciones."))
            alert(number * 1 + "\n" + number * 2 + "\n" + number * 3 + "\n" + number * 4 + "\n" + number * 5 + "\n" + number * 6 + "\n" + number * 7 + "\n" + number * 8 + "\n" + number * 9 + "\n" + number * 10)
            break
        }

        case (8): {

            let number1 = parseInt(prompt("Ingresa el primer número: "))
            let number2 = parseInt(prompt("Ingresa el segundo número: "))
            let number3 = parseInt(prompt("Ingresa el tercer número: "))

            if (number1 > number2 && number1 > number3) {
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

        case (9): {

            alert("Lista de compras.")
            let product
            let shoplist = []
            let endlist = false
            while (!(endlist)) {
                product = prompt("Ingresa el nombre del producto a agregar a la lista.")
                if (product.length <= 0) {
                    alert("No escribiste nada mamerto...")
                }
                else {
                    shoplist.push(product)
                    let decision = true
                    while (decision) {
                    buydecision = (prompt("¿Quieres seguir comprando? S/N")).toLowerCase()
                    if (buydecision == "s") {
                        decision = false
                    }
                    else if (buydecision == "n") {
                        decision = false
                        endlist = true
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

        case (10): {
            
        }
    }
}



