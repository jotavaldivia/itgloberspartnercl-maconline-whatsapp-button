![logo itg](/docs/images/itgloberslogo.png)


#itgloberspartnercl.whatsapp-button


Componente creado con el fin de tener un botón de whastaap de comunicación rápida con la marca.

##Configuracion inicial

lo primero será agregar este componente en nustro archivo de manifest.json de nuestro sitio web

![manifest](/docs/images/manifest.png)

Para que funcione correctamente se deberán entregar 3 parámetros importantes:

* Número de teléfono
* Mensaje 
* logo
* width

![types](/docs/images/types.png)

2 de estos elementos son totalmente requeridos `logo` y `Número de telefono`
se usa además la librería de `loproptypes` para generar un valor por defecto de las propiedades

![proptypes](/docs/images/porptypes.png)

Los datos mostrados anteriormente son datos por defecto, si necesitas agregar tus datos en el componente, para poder utilizar este componente en tú desarrollos se deberá llenar los siguientes datos.

![wsp](/docs/images/wsp.png)



Verificar que te encuentras en tu workspace y utiliza el comando 
`vtex link` para ver el sitio en su worksapce.