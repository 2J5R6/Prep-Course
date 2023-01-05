/*  CSS--> Cascading Style Sheets -->  Posicionar elementos HTML

Propiedad "display: "
    Cómo se muestra contenido respecto a elemntos alrededor?

    EN HTML
        -display: block  -- <p>, <div>, <h1-6> son elementos block
            Arranca en nueva línea
            Toma ancho máx. de su contenedor

        -display: inline   (opuesto a elemnto block)  -- <span>, <a>, <img>
            NO nueva línea
            Toma espacio suficiente para mostrar su info.

        -display: none       ≠    visibility: hidden
        Desaparece elemento       Elelemnto invisible, pero no lo elimina
       
        -display: flex
            En qué paarte de la página los items?

        -display: grid
            Crear sistemas de grillas (cuadrícula/rejilla/red) dentro de elemento

Propiedad "position: "  -- ¿En qué posición?

    position: static   -- by default
        NO ofecta comportamiento del objeto

    position: relative    
        Como si fuese estático, pero permite usar otros métodos

    position: fixed   -- FIJO -- Ej: header, barra navegción de buscador
        Fijo en lugar de pantalla, sin iportar scols

    position: absolute  --> like "fixed", but depents on it´s parent
        Elemento anclado de forma "relativa" a su "parent"
        Sólo si "parent" tiene posición definita  ≠  "static"

        PROPIEDADES DE POSICIÓN ≠ static   
        ¿Qué tan lejos del borde?
            top:
            left:
            bottom:

Flexbox --> CSS3 -- Posicionar elementos respecto a parent y otro elemento    div{ 
     display: flex        ----block                                             display: fixed;
     display: inline-flex ----inline                                            justify-content: center;   //JC  izquierda a derecha---fila
                                                                                aling-items: center;       //AI  arriba a abajo--columna                 
                                                                               }                              

    
                                                                               
    center
    flex-start:    --By default -- Comienzo de fila o columna
    flex-end:                   -- Final de un grupo al comienzo de fila o columna
    space-between:              -- Esspacia uniformemente elementos en fila o columna,
                                   primer elemento como felx-start  y último como flex-end
    space-around:               -- Like "space-between", pero aplica márgenes igualitarios
                                   NO elemntos sobre borde del contenedor
FLEX-DIRECTION
row: by default--> JC- izquierda, derecha    AI- ariba, abajo
column: JC-->AI       AI-->JC
row-reverse: Invierte JC
column-reverse: Invierte AI

align-self:
A elemtn dentro del flex-box-->separar control de "align-items" ---> Colocar en cualquier lugar en eje de elementos

    */