### Link Video:
https://usmcl-my.sharepoint.com/:f:/g/personal/felipe_buscaglia_usm_cl/Et-y5sbel-pKrgc6si93peYBC9ra3H0UpluL5a07xh8VdQ?e=9FNs6h
# Documentación del Proyecto

# Guía de Instalación

### 1. Iniciar la instancia RDS en AWS

Para ejecutar el proyecto, es necesario iniciar la instancia RDS en AWS. Sigue estos pasos:

### a) Ingreso con credenciales IAM

Utiliza las siguientes credenciales para acceder a la consola de AWS desde el siguiente enlace:

https://533267310060.signin.aws.amazon.com/console

- **Usuario IAM**: `ProyectoIAM`
- **Contraseña**: `ProyectoEquipo9`

### b) Buscar y acceder a RDS

1. Una vez dentro de la consola de AWS, busca "RDS" en la barra de búsqueda, como se muestra en la siguiente imagen:

   ![Buscar RDS](https://github.com/user-attachments/assets/447b7d17-064b-43aa-88dc-8c515f8c8456)

2. En el panel izquierdo, selecciona la opción **"Bases de datos"**.

### c) Verificar la región

Asegúrate de que te encuentras en la **región de São Paulo**, como se muestra en la siguiente imagen:

   ![Región de São Paulo](https://github.com/user-attachments/assets/bd8cfcbe-afde-4271-8891-13ab8db508f2)

### d) Iniciar la base de datos

1. Selecciona la base de datos en la lista.
2. En las **acciones** disponibles, selecciona la opción **"Comenzar"**. El proceso de inicio puede tardar unos minutos:

   ![Iniciar base de datos](https://github.com/user-attachments/assets/31518e8d-6d32-4824-be7d-46a6cbb5e2f0)

### 2. Ejecutar el programa y las pruebas

Una vez que la base de datos esté activa, puedes proceder a ejecutar el programa y las pruebas unitarias utilizando los siguientes comandos en la terminal:

- `make run` ejecuta el programa
- `make Compra_test` ejecuta las pruebas del modulo de compra

Desde la carpeta test puedes ejecutar `npm test` para las pruebas de ProductController

# 1. Alcances de la Herramienta

Este proyecto utiliza **unittest** como herramienta de pruebas unitarias para garantizar la calidad y el correcto funcionamiento de las funcionalidades desarrolladas. Unittest permite validar el comportamiento esperado de los diferentes módulos de la aplicación de manera aislada, detectando errores o desviaciones en las distintas etapas del desarrollo.

Este proyecto también utiliza **Jest** como herramienta de pruebas unitarias para garantizar la calidad y el correcto funcionamiento de las funcionalidades desarrolladas. Jest permite validar el comportamiento esperado de los diferentes módulos de la aplicación de manera aislada, detectando errores o desviaciones en las distintas etapas del desarrollo.

# 2. Descripción del Trabajo Realizado

## Proyecto
El proyecto realizado consiste en una tienda de ropa en línea en la que se abordaron una serie de requerimientos como el despliegue de productos en la página para su visualización, también se desarrolló un carrito de compras y un sistema de autenticación, entre otros requerimientos.

La metodología de trabajo fue la asignación de tareas en jira que se iban desarrollando por etapas hasta completarlas, de igual forma el flujo de trabajo consistió en la utilización de GitFlow para integrar el progreso obtenido. Un canal de comunicación utilizado fue Slack que integrado con GitHub y Jira nos permitió hacer un seguimiento de la aplicación y a su vez se realizaban reuniones en línea para evaluar el progreso y asignar nuevas tareas.

## Jira
![image](https://github.com/user-attachments/assets/0983aa7a-9ba8-401d-98bf-4c7e49ed7e82)
## Slack
![image](https://github.com/user-attachments/assets/ca1f9ef4-88b4-4471-b62f-e1d63b2a5774)
## Ramas de GitFlow
![image](https://github.com/user-attachments/assets/0a555cd3-c4d6-4b0e-981e-b7ffbaab6e98)

Ademas en etapas tempranas del proyecto realizamos diseños iniciales de como prodria verse la aplicacion y tambien realizamos diagramas que para modelar las bases de datos, todo esto con el proposito de tener una idea inicial sobre como iniciar el desarrollo

## Esquemas de diseño
![image](https://github.com/user-attachments/assets/5ac36f3d-d1dd-49f0-9646-6c98a896a357)
![image](https://github.com/user-attachments/assets/dc7e9666-1948-4564-8127-2014078ca677)

## Modelado de bases de datos
![image](https://github.com/user-attachments/assets/6286cd7f-f1c8-44e1-98a5-1b5e35f49106)

## Especificar dependencias entre la herramienta y la aplicación
La infraestructura del proyecto consiste en un front-end desarrollado con React que se comunica con un servidor en el Back-end de la aplicación realizado con Node.js, de igual forma, para el almacenamiento de recursos y bases de datos se utilizaron servicios de aws como RDS o Buckets S3.

Las pruebas unitarias se desarrollan en un entorno independiente de la aplicación, estas consisten principalmente en probar los distintos resultados obtenidos de los endpoints del servidor en Node.js, no existen dependencias adicionales entre la aplicación y las pruebas excepto de que la aplicación debe estar ejecutándose localmente para ser accedida desde los enlaces del localhost y además la instancia de RDS debe estar ejecutándose.

# 3. Pruebas

## Estrategia de pruebas utilizadas

Cada uno de los archivos que contienen las pruebas se encargan de realizar un proceso de testing de las funcionalidades más importantes de los principales módulos de la aplicación, estos módulos probados son los de usuarios, compra y productos, adicionalmente se iran realizando mas pruebas en las siguientes entregas.

Las condiciones de cada prueba, como el tener un usuario autenticado, se estructuran de manera automática antes de iniciar con el proceso y cuando este termina se eliminan todo nuevo registro en la base de datos a utilizar en las pruebas para dejar al sistema en el estado anterior al testing de las componentes.

## Procedimiento de ejecución de pruebas

Para la ejecución de las pruebas, se utilizaron extensiones de Visual Studio Code, las cuales proporcionan un entorno cómodo y eficiente, junto con una interfaz visual para la ejecución y visualización de los resultados. Estas herramientas permiten realizar las pruebas de manera rápida e intuitiva dentro del propio IDE.

Imagen de la interfaz de Visual Studio Code
![image](https://github.com/user-attachments/assets/f49f9428-f143-4597-b415-a30d5001b7b9)

Alternativamente, las pruebas también pueden ejecutarse desde la terminal utilizando el siguiente comando de Python

`python -m unittest test_example.py`

De igual modo, desde la carpeta test las pruebas que utilizen jest pueden ejecutarse con el comando

`npm test`

## Resultados: pruebas de Carrito de Compras

### Prueba 1.1: Añadir un nuevo producto al carrito

- **Descripción**: Añadir un nuevo producto al carrito virtual del usuario. Este producto será eliminado del carrito al finalizar la prueba.
- **Entradas**: Credenciales del usuario creado para las pruebas, ID del producto a agregar y cantidad a agregar.
- **Salida esperada**: Una respuesta con estatus 200 y un mensaje del tipo "Producto añadido al carrito".
- **Salida obtenida**: `test_AddCartNewProduct (Compra_test.TestCompra.test_AddCartNewProduct)` ... **OK**.

---

### Prueba 1.2: Añadir un producto con cantidad igual a 0

- **Descripción**: Añadir un nuevo producto al carrito virtual del usuario con una cantidad igual a 0.
- **Entradas**: Credenciales del usuario creado para las pruebas, ID del producto a agregar y cantidad igual a 0.
- **Salida esperada**: Una respuesta con estatus 500 y un mensaje del tipo "Cantidad del producto es 0".
- **Salida obtenida**: `test_AddCart0Quantity (Compra_test.TestCompra.test_AddCart0Quantity)` ... **FAIL**.
  - **Error**: AssertionError: 200 != 500.

---

### Prueba 1.3: Actualizar cantidad de producto en el carrito

- **Descripción**: Actualizar la cantidad de un producto ya añadido al carrito.
- **Entradas**: Credenciales del usuario creado para las pruebas, ID del producto a actualizar y cantidad igual a 1.
- **Salida esperada**: Una respuesta con estatus 200 y que la cantidad actualizada sea igual a 3.
- **Salida obtenida**: `test_UpdateCartNewProduct (Compra_test.TestCompra.test_UpdateCartNewProduct)` ... **OK**.

---

### Prueba 1.4: Modificar cantidad de producto en el carrito

- **Descripción**: Modificar la cantidad de un producto en el carrito virtual.
- **Entradas**: Credenciales del usuario creado para las pruebas, ID del producto a actualizar, pasando la cantidad de 3 a 7.
- **Salida esperada**: Una respuesta con estatus 200 en cada procedimiento realizado.
- **Salida obtenida**: `test_AddCartModifyProduct (Compra_test.TestCompra.test_AddCartModifyProduct)` ... **OK**.

---

### Prueba 1.5: Probar compra de un producto

- **Descripción**: Añadir un producto al carrito, luego realizar la compra y verificar que se haya añadido a la tabla de compras.
- **Entradas**: Credenciales del usuario creado para las pruebas, ID y cantidad del producto a agregar al carrito.
- **Salida esperada**: Una respuesta con estatus 200 y que la cantidad actualizada sea igual a 7.
- **Salida obtenida**: `test_PurchaseProduct (Compra_test.TestCompra.test_PurchaseProduct)` ... **OK**.

---

### Prueba 1.6: Realizar una compra sin productos en el carrito

- **Descripción**: Realizar una compra sin productos en el carrito.
- **Entradas**: Credenciales del usuario creado para las pruebas.
- **Salida esperada**: Una respuesta con estatus 500 y un mensaje del tipo "No existen productos en el carrito".
- **Salida obtenida**: `test_PurchaseProductNoCart (Compra_test.TestCompra.test_PurchaseProductNoCart)` ... **FAIL**.
  - **Error**: AssertionError: 200 != 500.

---

### Prueba 1.7: Eliminar Producto
- **Descripción**: Eliminar un producto de la base de datos.
- **Entradas**: ID del producto a eliminar (en este caso, id: 1).
- **Salida esperada**: Una respuesta con estatus 200 y un mensaje que indique que la eliminación fue exitosa.
- **Salida obtenida**: test_DeleteProduct (Product_test.ProductController.test_DeleteProduct) ... PASS.
  - **Resultado**: Se eliminó correctamente el producto con ID 1.

---

### Prueba 1.8: Obtener Stock de Producto
- **Descripción**: Obtener el stock de un producto por su ID.
- **Entradas**: ID del producto (en este caso, ProductosId: 1).
- **Salida esperada**: Una respuesta con estatus 200 y un JSON con los detalles del stock (en este caso, Stock: 10, Tamaño: M).
- **Salida obtenida**: test_GetStock (Product_test.ProductController.test_GetStock) ... PASS.
  - **Resultado**: Se obtuvo correctamente el stock del producto con ID 1, con 10 unidades disponibles en tamaño M.
  
---

# 4. Problemas encontrados y soluciones

Un problema recurrente fue el de encontrar una solución para diferenciar las cuentas de los modistas que tienen permisos de administrador de los usuarios normales, para esto se asumió que como en el contexto del problema este desarrollo va dirigido a una tienda, esta posee su propio dominio de correos electrónicos que se les otorga a los modistas, por lo que cada usuario cuyo correo termine en @neon.com podrá acceder a las funcionalidades extra de la página.

Otro problema encontrado fue el de procesar los pagos, para propósitos de esta entrega solo se realizó una simulación de cómo se verían estos en el que el usuario debe ingresar un método de pago y luego la página se encarga de validar el formato de los datos y generar un código de compra.
