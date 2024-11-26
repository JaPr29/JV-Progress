#Tabla de multiplicar:
#Pedí un número al usuario y mostrá su tabla de multiplicar hasta el 10.

numero = int(input("Ingresa el numero para ver la tabla de multiplicar: "))
print(f"Tabla del {numero}\n")

for i in range(0, 11):
    print(f"{numero} x {i} = {i * numero}")
