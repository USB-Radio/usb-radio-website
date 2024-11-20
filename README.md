# Estructura del proyecto.

El proyecto esta dividido en dos secciones, el **frontend** encargado
de la parte visual el cual esta ubicado en la carpeta _client_ y
el _backend_ que es la carpeta raiz de este proyecto.

Todos los archivos del servidor se encuentran dentro de la carpeta src.

> .env: son las variables de configuración para la aplicación, contienen texto plano "string" donde se guarda las configuraciones de los puertos, claves API y URL's

En este archivo se encuentro

- Puerto : 3000 por defecto
- datos de acceso para API ACR Cloud
- link de la API y streaming de AzuraCast

> si se quiere modificar el puerto del backend, solamente modificar la varible PORT en el archivo.env

Desde la carpeta index.js se levanta la ejecución de todo el servidor. Para poder habilitar el codigo de
acrcloud_monitor.js se debe descomentar la linea donde se esta importando.

Se encuentra comentado para no hacer uso de ella, ya que el servicio tiene un limite diario de peticiones que se
pueden realizar, por motivos de pruebas tecnicas se hace esto para no consumir todas las peticiones del servicio.

![imports en archivo index](./client/public/images/readme-img/imports.png)

El archivo app.js es donde establece el uso de las rutas y permisos del servidor, haciendo uso de express
permite definir las rutas de la API:

cors es un middleware que permite o restrige los recursos de un servidor entre dominios.
el dominio del frontend al estar utilizando Vite es _"http://localhost:5173"_ en su defecto
si se esta trabajando desde local. Para poder utilizar el servidor en el deploy de oceandigital
esta comentado el dominio, siendo este *http://radiousbbog.tech*, habilitar el dominio al cual se
quiera utilizar para hacer pruebas, el primero solo funciona para ejecutarse en local y realizar pruebas.

![alt text](./client/public/images/readme-img/app.png)

## Rutas de peticion de datos de API

Las rutas que se definen son las siguientes.

> http://localhost:3000/api/radio

Esta recibe los datos de la api de radio de AzuraCast, con un servicio como postman podemos verificar
si las peticiones estan siendo recibidas de forma correcta. Adicionalmente haciendo uso de la libreria de
morgan, levantando el servidor ya sea: desde entorno de desarrollo _npm run dev_ ó producción _npm start_
podemos ver desde la consola si las peticiones estan siendo realizadas con exito.

si la consola estan imprimiendo las peticiones HTTP quiere decir que nuestro servidor esta activo,
debemos verificar que en ambos recursos sea **200** tanto para /api/radio y /api/data. Lo cual garantiza
que los datos estan siendo recibidos por el frontend con exito. Un **304** solo indica que no se ha actualizado
pero el que debemos tener precaución es con el **404** que nos inidica que hubo un error.

![alt text](./client/public/images/readme-img/consola.png)

Si estas trabajando desde local si consultas la ruta _http://localhost:3000/api/radio_ mediante petición **GET**
deberias obtener un JSON con la metadata de la radio de AzuraCast, *http://radiousbbog.tech:3000/api/radio* desde
el servidor de ocean digital.

Desde Postman podemos verificar si las peticiones estan siendo realizadas de forma correcta, **(nota: solo va a funcionar si el servidor esta activo)**

![alt text](./client/public/images/readme-img/image.png)
