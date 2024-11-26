#Lista de compras:
#Pedí al usuario que ingrese productos para una lista de compras y mostrá la lista completa al final.
#Permití que elimine algún elemento.

lista = ["manzana", "pan", "atun", "sopa"]
#Me di cuenta que podia dar muchos errores y el usuario podia ingresar cualquier cosa.
def validar_entrada():
    while True:
        agregar = input("Agrega un elemento a la lista del supermercado: \n").strip()
        if len(agregar) >= 3 and agregar.isalpha():
            return agregar
        else:
            print("La entrada no puede estar vacía y debe tener 3 letras. Intente de nuevo.")

nuevo_elemento = validar_entrada()
lista.append(nuevo_elemento)

print(f"\nlista del supermercado actual:")
for i in lista:
    print(i)

while True:
    eliminar = input("¿Desea eliminar un alimento de la lista? (SI/NO)").lower()
    if(eliminar != "si" and eliminar != "no"):
        print("Ingresa solo 'si' o 'no'")
    else:
        if (eliminar == "si"):
            print(f"Productos a eliminar: {lista}")
            producto = input("Elimina un producto: ")
            if producto in lista:
                lista.remove(producto)
                print(f"Producto eliminado correctamente\nLista actualizada: {lista}")
                break
            else:
                print("El producto no esta en la lista.")
        elif(eliminar == "no"):
            print("Adios entonces")
            break
