


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
            let gradequant = parseInt(prompt("¿Cuántas calificaciones hay para el promedio?"))
            let gradeinputtimes = 0
            let gradeaverage = 0
            if (typeof(gradequant) !== "number" || isNaN(gradequant) || gradequant < 2) {
                alert("La cantidad ingresada es invalida, ingrese solo números que sean mayores a 1")
                break
            }
            alert("Ingrese los números correctamente, solo se aceptarán números del 1 al 10 \nSi ingresa algún número o caracter no válido tendrá que empezar otra vez")
            for (let i = 0; i < gradequant; i++) {
                let grade = parseInt(prompt("Ingrese la calificación:"))
                if (typeof(grade) !== "number" || grade > 10 || grade < 1) {
                    alert("La calificación ingresada no es válida.")
                    break
                }
                gradeinputtimes++ 
                gradeaverage += grade
            }
            if (gradeinputtimes == gradequant) {
                alert("El promedio de notas es de " + (gradeaverage / gradeinputtimes))

            } break
        }
        ////////////////////////////////////////// EJERCICIO ///////////////////////////////////////////////
        case (11): {
            const palindrome = (prompt("Ingresa una palabra o frase:")).replace(/\s+/g, "")
            let wordlist = []
            for (i = 0; i < palindrome.length; i++){
                wordlist.push(palindrome.at(i))
            }
            let wordlistreverse = []
            for (let i = wordlist.length - 1; i != -1; i--) {
                wordletter = wordlist[i]
                wordlistreverse.push(wordletter)
            }
            function IsPalindrome (word, wordreverse) {
                for (let i = 0; i < word.length; i++) {
                    if (word[i] != wordreverse[i]) {
                        return false
                    }
                }
                return true
            }
            if (IsPalindrome(wordlist, wordlistreverse)) {
                alert("La palabra ingresada es un palíndromo")
            } else {
                alert("La palabra ingresada no es un palíndromo")
            } break
        }
        ////////////////////////////////////////// EJERCICIO ///////////////////////////////////////////////
        case (12) : {
            const phrase = prompt("Ingrese una frase: ");
            const words = phrase.toLowerCase().split(/\s+/);
            const wordFreq = {};  
            words.forEach(word => {
              word = word.replace(/[.,!?"']/g, '');
              if (word in wordFreq) {
                wordFreq[word]++;
              } else {
                wordFreq[word] = 1;
              }
            });
              
            for (const word in wordFreq) {
              alert('La palabra "' + word + '" aparece ' + wordFreq[word] + ' veces en la frase.');
            }
            break
        }
        ////////////////////////////////////////// EJERCICIO ///////////////////////////////////////////////
        case (13) : {
            //La verdad es que la consigna es malísima así que prefiero hacer una calculadora que pueda hacer múltiples cosas de una, sin funciones ni mierdas de esas.
            const operation = prompt("Escriba la operación que desea realizar a continuación, con números y signos (Ejemplo: 2 + 2)")
            alert("El resultado de la operación es: " + eval(operation))
            break
        }
        ////////////////////////////////////////// EJERCICIO ///////////////////////////////////////////////
        case (14) : {
            function IsPrime (num) {
                if (num % 2 == 0) {
                    alert("El número es primo");
                }
                else {
                    alert("El número no es primo");
                }
                return ;
            }
            const number = prompt("Ingrese un número:")
            IsPrime(number)
        }
        ////////////////////////////////////////// EJERCICIO ///////////////////////////////////////////////
        case (15) : {
            let numbers = [];
            while (true) {
                const number = prompt("Ingrese un número:");
                if (number == "") {
                    break
                }
                else {
                    numbers.push(number);
                }
            }
            for (let i = 0; i < numbers.length; i++) {
                let minIndex = i;
                for (let j = i + 1; j < numbers.length; j++) {
                  if (numbers[j] < numbers[minIndex]) {
                    minIndex = j;
                  }
                }
                const temp = numbers[i];
                numbers[i] = numbers[minIndex];
                numbers[minIndex] = temp;
              }
            alert("Los números en orden ascendente son: " + numbers)
            break
            
        }
        ////////////////////////////////////////// EJERCICIO ///////////////////////////////////////////////
        case (16) : {
            function Factorial (number, lastfactorial = 1) {
                if (number < 1) {
                    alert("Imposible calcular el factorial.");
                    return
                }
                if (number != 1) {
                    lastfactorial *= (number);
                    number -= 1;
                    Factorial(number, lastfactorial);
                }
                else {
                    alert("El factorial del número ingresado es: " + lastfactorial);
                }
                
            }
            const num = parseInt(prompt("Ingrese un número para calcular el factorial:"));
            Factorial(num);
        }
        ///////////////////////////////////////// EJERCICIO ///////////////////////////////////////////////
        case (17) : {
            //Solo funciona si se ejecuta en NodeJS
            alert("AVISO, ESTE EJERCICIO SOLO FUNCIONA EN NODEJS");
            const gradeavg = prompt("Ingrese la nota promedio de los exámenes: ");
            const fs = require('fs');
            fs.writeFile('grades.txt', `Average grade: ${gradeavg}`, (err) => {
                if (err) {
                  console.error(err);
                  alert("Ha habido un error, intentelo denuevo");
                } else {
                  console.log('Average saved to grades.txt');
                  alert("La nota promedio se ha guardado en el archivo correctamente!");
                }
              });
        }
        case (18) : {
            alert("Ejercicio salteado por pertenecer a NodeJS, se creará otra página en la que funcione...");
        }
        ///////////////////////////////////////// EJERCICIO ///////////////////////////////////////////////
        case (19) : {
            function CheckPassword (password, type) {
                switch (type) {
                    case ("Hard") : {
                        var hasnumber = false
                        var hasletters = false
                        var hassings = false
                        for (i = 0; i < password.length; i++) {
                            if (password.charAt(i).match(/[a-zA-Z]/)) {
                                hasnumber = true
                            } else if (password.charAt(i).match(/[0-9]/))  {
                                hasletters = true
                            } else if (password.charAt(i).match(/[!@#$%^&*()]/)) {
                                hassings = true
                            }
                        }
                        if (hasnumber == true && hasletters == true && hassings == true) {
                            return true
                        } else {
                            return false
                        }
                    }
                    case ("Mid") : {
                        var hasnumber = false
                        var hasletters = false
                        for (i = 0; i < password.length; i++) {
                            if (password.charAt(i).match(/[a-zA-Z]/)) {
                                hasnumber = true
                            } else if (password.charAt(i).match(/[0-9]/))  {
                                hasletters = true
                            }
                        }
                        if (hasnumber == true && hasletters == true) {
                            return true
                        } else {
                            return false
                        }
                    }
                }   
            }
            function GenerateHardPass (passwordlenght) {
                const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
                var password = "";
                for (i = 0; i < passwordlenght; i++) {
                    var charselector = Math.floor(Math.random() * charset.length);
                    password += charset.charAt(charselector);
                }
                if (CheckPassword(password, "Hard") == false) {
                    GenerateHardPass(passwordlenght);
                }
                return password;
            }
            function GenerateMidPass (passwordlenght) {
                const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                var password = "";
                for (i = 0; i < passwordlenght; i++) {
                    var charselector = Math.floor(Math.random() * charset.length);
                    password += charset.charAt(charselector);
                }
                if (CheckPassword(password, "Mid") == false) {
                    GenerateMidPass(passwordlenght);
                }
                return password;
            }
            function GenerateEasyPass (passwordlenght) {
                const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                var password = "";
                for (i = 0; i < passwordlenght; i++) {
                    var charselector = Math.floor(Math.random() * charset.length);
                    password += charset.charAt(charselector);
                }
                return password;
            }
            alert('¿Qué tan complicada quiere su contraseña? \nElija con los números "1 / 2 / 3" la dificultad de su contraseña.');
            const charsetdif = prompt("1. Dificultad Baja: Solo letras.\n2. Dificultad Media: Letras y números.\n3. Dificultad Alta: Letras, números y símbolos");
            const passwordlenght = parseInt(prompt("Ingrese en números la longitud de la contraseña:"));
            if (passwordlenght < 1) {
                charsetdif = NaN
            }

            switch (charsetdif) {
                case ("1") : {
                    alert("Tu contraseña es: " + GenerateEasyPass(passwordlenght));
                    break
                }
                case ("2") : {
                    alert("Tu contraseña es: " + GenerateMidPass(passwordlenght));
                    break
                }
                case ("3") : {
                    alert("Tu contraseña es: " + GenerateHardPass(passwordlenght));
                    break
                }
                default : {
                    alert("Los parámetros ingresados no son válidos.")
                    break
                }
            }
        }

        case (20) : {
            // Como JS no puede generar archivos, solo funciona en NodeJS, pero lo voy a hacer en modo local
            class Contact {
                constructor (name, number) {
                    this.name = name;
                    this.number = number;
                }
                toString () {
                    return ("Nombre: " + this.name + " \t Teléfono: " + this.number);
                }
            }
            function SaveContact (contactlist) {
                let name = prompt("Ingrese el nombre del contacto: ");
                let number = prompt("Ingrese el teléfono del contacto: ");
                let contact = new Contact(name, number);
                contactlist.push(contact);
                alert("Contacto guardado");
            }
            function ShowContact (contactlist) {
                let contactstring = "";
                for (let i = 0; i < contactlist.length; i++) {
                    contactstring += (contactlist[i].toString() + "\n");
                }
                alert (contactstring);
            }
            function DeleteContact (contactlist) {
                let name = prompt("Ingrese el nombre del contacto que quiere eliminar: ");
                for (let i = 0; i < contactlist.length; i++) {
                    if (contactlist[i].name == name) {
                        contactlist.splice(i, 1);
                        alert("Contacto eliminado.");
                        return
                    }
                }
                alert("No existe ese contacto en la lista.");
                }
                

            let contactlist = [];
            while (true) {
                let option = (prompt("Bienvenido a la agenda ¿Quién quieres hacer? \n1. Guardar contacto \n2. Mostrar contactos \n3. Eliminar contacto\n4. Salir"))
                switch (option) {
                    case ("1") : {
                        SaveContact(contactlist);
                        break
                    }
                    case ("2") : {
                        ShowContact(contactlist);
                        break
                    }
                    case ("3") : {
                        DeleteContact(contactlist);
                        break
                    }
                    case ("4") : {
                        alert("Hasta pronto");
                        return
                    }
                    default : {
                        alert("La opción elegida no es válida.");
                        break
                    }
                }
                
            }
        }
    }   
}