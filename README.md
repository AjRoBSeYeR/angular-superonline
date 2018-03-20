# Web Inmobiliaria

Inmobiliaria con filtros de busqueda según nombre de la vivienda, dirección, posibilidad de compra/alquiler y un rango de precio.

Muestra una lista de viviendas obtenidas de un servidor local (localhost:3000).

Al pulsar sobre una miniatura de las viviendas, se muestra su detalle.

##Instalación
`npm i` para descargar todas las librerias necesarias en node_modules.    
`ng serve --open` arracar proyecto, primero es necesario preparar el servidor.


## Preparar servidor

Se puede usar un servidor local gracias al proyecto [json-server](https://github.com/typicode/json-server) de GitHub.

### Instalar servidor

`npm install -g json-server`

### Arrancar servidor

`json-server --watch db.json`

#### screenshot

![Alt text](https://github.com/anderuraga/angular-inmobiliaria/blob/master/screenshot.png)