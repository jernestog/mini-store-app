1 - Clona el repositorio :  https://github.com/jernestog/mini-store-app.git
2 - Entra  a la carpeta del proyecto : mini-store-app
3 - Instala las dependencias : npm i
4 - Ejecuta : npm run dev
5 - Abre el navegador en : http://localhost:3000

IMPORTANTE : para usuario admin y tener acceso al dashboard de productos y las ordenes 
se debe usar estas credenciales :

Admin :
user : pedrito - password: '0000'
Customer :
user : sancho96 - password: '4544'

Los usuaios nuevos pueden ser unicamente customer

Funcionalidad basica : 
-Listado de productos
-Formulario de filtrado por nombre,  categoria y ordenado alfabeticamente y por precio
-Detalle de productos
-Agregar productos al carrito
-Gestionar los productos agregados al carrito
-Unicamente usuarios logeados pueden comprar ( generar orden de compra )
-Login de usuarios existentes ( con credenciales indicadas anteriormente )
-Registrar usuarios nuevos ( todos los usuarios nuevos son customer )
-Unicamente el usuario admin puede ingresar al panel de gestion de productos
-En el panel de gestion de productos se listan, cada producto puede ser editado, eliminado (No impacta el fronted
pero se envia la solicitud correspondiente a la API para su accion )
-Unicamente el usuario admin puede ingresar al listado de ordenes generadas por usuarios ( Importante no
parar el servidor para visualizar ordenes de compra hechas por otros usuarios)




