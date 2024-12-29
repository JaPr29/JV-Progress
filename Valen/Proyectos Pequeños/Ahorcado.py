#Juego del ahorcado:
#Programá un ahorcado simple que permita al usuario adivinar una palabra,
#con un número limitado de intentos.

import random 

palabras = [
    "silla", "mesa", "cama", "sofá", "televisor", "lámpara", "espejo", "alfombra", "reloj",
    "computadora", "teclado", "ratón", "mochila", "estante", "libro", "cuaderno", "bolígrafo",
    "lápiz", "borrador", "tijeras", "grapadora", "regla", "teléfono", "celular", "cámara",
    "micrófono", "altavoz", "ventilador", "aire acondicionado", "frigorífico", "horno",
    "microondas", "tostadora", "cafetera", "licuadora", "sartén", "olla", "cacerola",
    "plato", "vaso", "taza", "cuchillo", "tenedor", "cuchara", "servilleta", "paraguas",
    "abrigo", "sombrero", "zapato", "calcetín", "cinturón", "camisa", "pantalón", "vestido",
    "chaqueta", "bufanda", "mochila", "bolso", "billetera", "cartera", "maleta", "bicicleta",
    "coche", "moto", "camión", "barco", "avión", "tren", "helicóptero", "juguete", "pelota",
    "muñeca", "rompecabezas", "tablero", "pincel", "pintura", "cámara", "linterna", "caja",
    "botiquín", "lámpara de pie", "escritorio", "persiana", "cortina", "estufa", "radiador",
    "escalera", "llave", "candado", "martillo", "destornillador", "clavo", "tornillo",
    "serrucho", "taladro", "paleta", "regadera", "manguera"
]
palabra = random.choice(palabras)
letras_adivinadas = set()

def Contar_palabras():
    # c.isalpha(): Verifica si un carácter es una letra. 
    # sum(1 for c in palabra ...): Cuenta cuántos caracteres cumplen la condición.
    Cantidad_letras = sum(1 for i in palabra if i.isalpha()) 
    print(f"La palabra elegida tiene: {Cantidad_letras}")

def Juego_principal():
    Contar_palabras()
    print("Tenes 15 intentos\n")
    letras = "".join(letra for letra in palabra if letra.isalpha())
    intentos = 0
    while intentos <= 15:
        choice = input("Ingrese la letra o palabra: ")
        if (choice == palabra):
            print(f"GANASTEE!\nIntentos: {intentos}\n")
            break
        elif (len(choice) == 1 and choice.isalpha()):
            if(choice in letras):  
                letras_adivinadas.add(choice)
                print(f"Adivinaste la letra {choice}\nIntentos: {intentos}\n")
            else:
                print(f"No esta la letra {choice} en la palabra\n{intentos}")
                intentos += 1
                
            progreso = "".join(letras if letras in letras_adivinadas else "_" for letras in palabra)
            print(f"Progreso: {progreso}\nIntentos: {intentos}\n")
            
            if letras_adivinadas == palabra:
                print(f"¡Felicidades, adivinaste toda la palabra!\nLa palabra era: {palabra}\nIntentos: {intentos}\n")
                break
        else:
            print("Porfavor solo ingresa una letra o una palabra\n")
            
    if (intentos >= 15):
        print("Perdiste, ahorcado")
    
Juego_principal()