import secrets
import string

#Aca tuve un error importante y es que defini una variable fuera de la funcion y despues
#la llame dentro, arreglando eso el codigo funciono.
#Este es mi primer proyecto

def GenerarContraseña():
    caracteres = string.ascii_letters + string.digits + string.punctuation
    password = ""
    Longitud = int(input("Ingrese la longitud de contraseña: "))
    for _ in range(Longitud):
        password += secrets.choice(caracteres)
    return password
    
print(GenerarContraseña())
