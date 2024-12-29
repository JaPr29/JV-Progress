#Escribí un programa que simule lanzar dos dados y muestre los resultados. 
#Permití al usuario tirar tantas veces como desee.

import random

def Dados():
    while True:
        seguir = input("¿Desea tirar dados?(SI/NO)\n").lower()
        
        if seguir == "si":
            tiradas = int(input("Seleccione el numero de tiradas que desea realizar: "))
            for i in range(tiradas):
                tiradas += 1
                dado1 = random.randint(1,6)
                dado2 = random.randint(1,6)
                resultado = f"Resultados de la tirada: {i+1}\n Dado1: {dado1}, Dado2: {dado2}"
                print(resultado)
        elif seguir == "no":
            print("Saliendo")
            break
        else:
            print("Presiona si o no")
Dados()