#Creá un programa que permita al usuario guardar,
#buscar y eliminar contactos de una agenda
#(almacenando la información en un archivo o lista).

def Agregar_usuario(agenda):
    contacto = input("Ingrese el nombre del contacto: ")
    agenda.append(contacto)
    while True:
        seguir = input("¿Desea seguir agregando? (SI/NO)\n")
        try:
            if seguir == "si":
                contacto = input("Ingrese el nombre del contacto: ")
                agenda.append(contacto)
            elif(seguir == "no"):
                print("\nSaliendo\n")
                break
            else:
                print("Ingrese la opcion habilitada.")
        except ValueError:
            print("Ingrese solo lo indicado")
    return agenda

def Buscar_contacto(agendas):
    print("\nLos contactos son: ")
    for contactos in agendas:
        print(f"-{contactos}\n")

def  Eliminar_contacto(agendas):
    while True:
        choice = input("¿Desea eliminar contactos? (SI/NO)\n")
        if not agendas:
            print("\nNo hay contactos... Retornando al menu.\n")
            Menu_agenda() # Usar return es mejor opcion
        elif (choice == "si"):
            print("Los contactos existentes son: ")
            for i,contactos in enumerate(agendas, start=1):
                print(f"{i} - {contactos}")
                
            eliminar = input("Cual desea eliminar: ").lower()
            if eliminar in agendas:
                agendas.remove(eliminar)
                print(f"Contacto {eliminar} eliminado")
            else:
                print("\nNo se encontro contacto")
        elif (choice == "no"):
            print("\nSaliendo al menu\n")
            Menu_agenda()
        else:
            print("Opcion invalida, intente denuevo")
        
def Menu_agenda():
    Mi_agenda = []
    while True:
        try:
            menu = int(input("Bienvenido a la agenda\n1_Guardar contactos\n2_Buscar contactos\n3_Eliminar contactos\n4_Salir\n"))
            
            if menu == 1:
                Agregar_usuario(Mi_agenda)
            elif menu == 2:
                Buscar_contacto(Mi_agenda)
            elif menu == 3:
                Eliminar_contacto(Mi_agenda)
            elif menu == 4:
                print("Saliendo")
                break
            else:
                print("Ingresa una opcion del menu.")
        except ValueError:
            print("Ingresa un numero")

Menu_agenda()