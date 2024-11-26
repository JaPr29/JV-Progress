#Probare una calculadora que permita ingresar varias operaciones en pocas lineas de codigo.

while True:
    try:
        operacion = (input("Ingrese la operacion que desea realizar:\n"))
        resultado = eval(operacion)
        
        if isinstance(resultado, (int, float)) and len(operacion.split()):
            if(resultado >= 2):
                print(f"El resultado es: {resultado}")
            else:
                print("Hubo un error, ingresa dos numeros")
        else:
            print("Hubo un error, ingresa dos numeros")
    except (ValueError, SyntaxError):
        print("Ingresa dos numeros por favor")