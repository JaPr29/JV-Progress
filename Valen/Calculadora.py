########################################### CALCULADORA BASICA ###########################################

print("Bienvenido a la calculadora.")

def Sumar():
    num1 = int(input("Ingresa el primer numero: "))
    num2 = int(input("Ingresa el segundo numero: "))
    res = num1 + num2
    print(f"El resultado de {num1} + {num2} es {res}")

def Restar():
    num1 = int(input("Ingresa el primer numero: "))
    num2 = int(input("Ingresa el segundo numero: "))
    res = num1 - num2
    print(f"El resultado de {num1} - {num2} es {res}")

def Multiplicar():
    num1 = int(input("Ingresa el primer numero: "))
    num2 = int(input("Ingresa el segundo numero: "))
    res = num1 * num2
    print(f"El resultado de {num1} * {num2} es {res}")
    
def Dividir():
    num1 = int(input("Ingresa el primer numero: "))
    num2 = int(input("Ingresa el segundo numero: "))
    res = num1 / num2
    print(f"El resultado de {num1} / {num2} es {res}")

def Calculadora():
    eleccion = int(input("Elegi una opcion:\n1_Suma\n2_Resta\n3_Multiplicar\n4_Dividir\n5_Salir\n"))
    while (eleccion != 5):
        try:
            if(eleccion == 1):
                Sumar()
                Calculadora()
                break
            elif(eleccion == 2):
                Restar()
                Calculadora()
                break
            elif(eleccion == 3):
                Multiplicar()
                Calculadora()
                break
            elif(eleccion == 4):
                Dividir()
                Calculadora()
                break
            else:
                print("Hubo un error")
        except ValueError:
            print("Porfavor, seleccione una opcion habilitada. ")

Calculadora()
