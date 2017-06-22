# YAPE
_Proyecto Final | Sprint 5_

## Descripcion del proyecto
_Yape es la nueva aplicación del Banco de Crédito del Perú, con la que tendrás la libertad de usar tu dinero como quieras, ya que pagar con ella es más rápido, sin pretextos y fácil. Solo con Yape podrás convertir tus planes en experiencias únicas, sin números de cuenta ni token._

## Requerimientos
1. En este proyecto pondremos a prueba todo lo aprendido durante el Sprint 5, por ello tendremos los siguientes requerimientos:
2. Trabajar con componentes
3. Usar la data del API
4. Seguir el diseño al 100%
5. Estructura con buenas prácticas (HTML,CSS,JS)

## Funcionalidad
- _**Pantalla 1:**_
  - [x] Debe tener un carrousel de íconos y un botón de registro
- _**Pantalla 2:**_
  - [x] Debe poder ingresar un teléfono y poder aceptar los términos y condiciones
  - [x] El botón de continuar sólo se activa cuando un teléfono es ingresado y los términos aceptados
  - [x] Cuando se hace clic en continuar, el sistema debe enviar un request al API para registrar el teléfono y generar el código
  - [x] Tener en cuenta que el API no permite más de 2 registros del mismo teléfono a la vez
- _**Pantalla 3:**_
  - [x] Debe validar el código previamente generado en la pantalla anterior, el código es enviado mediante el API
  - [x] Al ingresar un código válido la pantalla, salta a la siguiente pantalla
  - [x] Debe haber un contador que a los 21 segundos llame al API para ingresar un nuevo código e invalidar el anterior
- _**Pantalla 4:**_
  - [x] Debe poder ingresar mis datos de usuario
  - [x] Sólo cuando todos mis datos están ingresados se debe activar el botón amarillo
  - [x] Debe tener validaciones básicas (email) y la contraseña no debe poderse ver
  - [x] Al hacer clic sobre el botón, debe enviar los datos al API y cuando regresa, debe pasar a la pantalla 5
- _**Pantalla 5:**_
  - [x] A los 3 segundos de mostrar esta pantalla, debe pasar a la siguiente
- _**Pantalla 6:**_
  - [x] Debe poder registrar una nueva tarjeta de crédito
  - [x] Sólo debe poder ingresar 16 números en el input de tarjeta
  - [x] Sólo debe poder ingresar meses (01 al 12)
  - [x] Sólo debe poder ingresar años futuros (del 17 al 24) 
  - [x] El botón de registro sólo se activa si todos los campos han sido ingresados
- _**Pantalla 7:**_
  - [x] Es la pantalla final a donde se llega después del registro. Esta pantalla no tiene funcionalidad activa: sólo debe mostrarse tal cual se ve


