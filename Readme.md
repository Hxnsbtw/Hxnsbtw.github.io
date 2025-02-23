# Parte Teórica  

1. ¿Qué es HTML y cuál es su función en la web?  

El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar y desplegar una página web y sus contenidos. Por ejemplo, sus contenidos podrían ser párrafos, una lista con viñetas, o imágenes y tablas de datos. 

El lenguaje HTML sirve para describir la estructura básica de una página y organizar la forma en que se mostrará su contenido, además de que HTML permite incluir enlaces hacia otras páginas o documentos. 

2. ¿Que es una etiqueta HTML y menciona las etiquetas más comunes?  

Las etiquetas de código HTML son fragmentos de texto rodeados por paréntesis angulares <>, que tienen funciones y usos específicos y se utilizan para escribir código HTML. Las etiquetas HTML suelen ser semánticas, esto es, que describen cómo entender y mostrar lo que encierran. 

Las etiquetas HTML más usadas para crear la estructura básica de un documento son: 

<head> para información sobre el documento 

<body> para el contenido 

<div> división o bloque dentro del contenido, el más común para componer elementos complejos 

<a> para enlaces 

<strong> para poner el texto en negrita 

<br> para saltos de línea 

<p> para párrafos 

<h1>…<h6> para títulos dentro del contenido 

<img> para añadir imágenes al documento 

3. ¿Que es un atributo de una etiqueta HTML y menciona los más comunes?  

Un atributo de HTML es una palabra especial que se agrega a una etiqueta de apertura para modificar su comportamiento. Los atributos pueden controlar la apariencia, establecer enlaces, o configurar campos de entrada.   

atributos específicos más comunes utilizados incluyen: 

-  "class" y "id": Asignan clases e identificadores a elementos para aplicar estilos o referenciar en CSS y JavaScript. 

- style: Permite aplicar estilos en línea directamente al elemento. 

- "src" y "alt" (en elementos <img>): src especifica la fuente de la imagen, mientras que alt proporciona texto alternativo para accesibilidad. 

- href (en elementos <a>): Especifica la URL de destino para un enlace. 

- "width" y "height" (en elementos <img>): Ajustan el ancho y la altura de una imagen. 

- "colspan" y "rowspan" (en celdas de tablas: Combina celdas en tablas, especificando el número de columnas o filas que debe abarcar. 

- "placeholder" (en campos de entrada de formularios): Proporciona un texto de ejemplo dentro del campo de entrada. 

- "disabled" (en botones u otros elementos): Desactiva la interactividad del elemento. 

- "value" (en campos de entrada de formularios): Define un valor predeterminado para el campo de entrada. 

- name (en campos de entrada de formularios): Define el nombre del campo de entrada. Es importante para enviar datos a través de formularios. 

- type (en campos de entrada de formularios): Especifica el tipo de campo de entrada, como texto, contraseña, checkbox, etc. 

4. ¿Qué es CSS y cómo se utiliza para el diseño web?  

El CSS podría definirse como un tipo de lenguaje que permite definir y crear la presentación visual de un documento ya estructurado y escrito en un lenguaje de marcado como puede ser HTML. Es decir, permite generar el diseño visual de páginas web e interfaces de usuario. 

Se puede escribir dentro del archivo HTML o en un archivo separado. 

5. ¿Que es una propiedad en CSS y menciona las propiedades más comunes?  

Una propiedad CSS es una característica de un elemento HTML que se define con un valor. El valor puede ser un color, un número, una cadena de texto, una unidad de medida, o una variable.   

Las propiedades CSS determinan el estilo o comportamiento de los elementos HTML. Algunos ejemplos de propiedades CSS son:  Color, fuente, borde, posicion, texto, ... . 

6. ¿Que es un selector en CSS y cuales tipos existen?  

Un selector CSS es una herramienta que indica al navegador qué elementos HTML se van a estilizar. Cada selector tiene sus propias reglas y usos.   

Tipos de selectores CSS 

Selector de tipo: Selecciona elementos por su nombre de etiqueta HTML. Por ejemplo, para aplicar estilo a todos los párrafos, se usa el selector "p".  

Selector de clase: Selecciona un conjunto de elementos a los que se les asigna un nombre. Se usa para reutilizar estilos en varios lugares de un documento.  

Selector de ID: Selecciona un solo elemento en un documento.  

Selector de hermanos: Aplica estilos a todos los elementos que son hermanos de otro elemento.  

Selector de hijo: Aplica estilos a los elementos que son hijos directos de otro elemento.  

7. ¿Qué es JavaScript y cómo añade la interactividad a las páginas web?  

JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas. Desde actualizar fuentes de redes sociales a mostrar animaciones y mapas interactivos, las funciones de JavaScript pueden mejorar la experiencia del usuario de un sitio web. 

Cómo se coloca el código JavaScript en una página HTML: 

Se puede colocar en el <head> o en el <body> de tu HTML 

Se recomienda colocarlo justo antes de cerrar la etiqueta </body> 

 

8. ¿Cuáles son los tipos de datos primitivos en Javascript?  

String: Cadenas de texto que pueden tener cero o más caracteres 

Number: Números de cualquier tipo, enteros o de punto flotante 

BigInt: Números enteros de longitud arbitraria 

Boolean: Valores de verdadero o falso: true / false 

Null: Valores desconocidos 

Undefined: Valores no asignados 

Symbol: Identificadores únicos 

9. ¿Cómo funcionan las estructuras de control de flujo como if, else, switch y bucles en Javascript?  

Las estructuras de control de flujo if, else, switch y bucles en JavaScript permiten modificar el flujo de ejecución de un programa.  

Estructuras de control condicionales 

If: Ejecuta una instrucción si una expresión booleana es verdadera.  

If...else: Ejecuta una instrucción si una condición es verdadera, y otra si es falsa.  

Switch: Ejecuta las sentencias de la etiqueta case que corresponda al valor que se le dio al switch.  

Estructuras de control repetitivas  

Bucle: Repite una acción varias veces. 

10. ¿Por qué es importante usar nombres significativos para variables y métodos? 

Los nombres de variables claros y significativos hacen que el código sea más legible y comprensible. Cuando alguien, incluido usted, lea el código más adelante, los nombres de variables descriptivos facilitan la comprensión del propósito y la intención de la variable. 

 11. ¿Qué es una variable de entorno y por qué son importantes para Javascript o la programación en general?  

Una variable de entorno es un valor externo al código fuente que se configura en el entorno donde se ejecuta una aplicación. Son importantes porque permiten gestionar datos sensibles (como claves API o credenciales) y configurar entornos (desarrollo, pruebas, producción) sin modificar el código, facilitando la portabilidad y seguridad de las aplicaciones. 

12. ¿Qué son las herramientas de desarrollo de Chrome y cómo se accede a ellas?  

Las herramientas de desarrollo de Chrome (Chrome DevTools) son un conjunto de herramientas integradas en el navegador que ayudan a los desarrolladores a depurar, analizar y optimizar sitios web y aplicaciones web. Se accede a ellas haciendo clic derecho en una página web, seleccionando "Inspeccionar", o presionando F12 o Ctrl + Shift + I en Windows/Linux y Cmd + Option + I en Mac. 

13. ¿Qué se puede hacer en el panel "Elements" de las herramientas de desarrollo?  

El panel "Elements" permite inspeccionar, modificar y depurar el HTML y CSS de una página en tiempo real. Puedes: 

Ver y editar la estructura HTML. 

Modificar estilos CSS aplicados a los elementos. 

Añadir o eliminar clases y atributos. 

Analizar el modelo de caja (box model) de los elementos. 

14. ¿Cómo se utiliza el panel "Console" de las herramientas de desarrollo y para qué es útil?  

El panel "Console" permite ejecutar y probar comandos JavaScript directamente en el navegador. Es útil para: 

Registrar mensajes con console.log() para depurar. 

Probar fragmentos de código sin modificar el archivo original. 

Ver errores y advertencias de JavaScript. 

Interactuar con elementos del DOM. 

15. ¿Qué información se puede obtener del panel "Network" y por qué es importante 

El panel "Network" muestra todas las solicitudes de red que realiza una página web, incluyendo: 

Archivos cargados (HTML, CSS, JS, imágenes). 

Tiempos de carga y respuestas del servidor. 

Códigos de estado (200, 404, 500, etc.). 

Información sobre solicitudes AJAX/Fetch. Es importante para optimizar el rendimiento, identificar cuellos de botella, y depurar errores de carga o solicitudes fallidas. 