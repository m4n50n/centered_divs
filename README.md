# Formas de *centrar un div* 🤡

_Ejemplos de las diferentes maneras de **centrar un div**_

```text
Fuentes:
↗ https://www.youtube.com/watch?v=7M0U2BzZwpo
↗ https://github.com/powerhdeleon/100DaysAsAFrontendDev
↗ https://www.instagram.com/p/CSHdRwaCkA1/
```

## Forma 1 ◾ Tabla

En este ejemplo, el div a centrar se encontrará dentro de una tabla (_dentro de un \<td>_). De esta manera, el div quedará centrado por defecto y sólo habría que centrarlo horizontalmente con CSS.

## Forma 2 ◾ JavaScript

En este ejemplo, el div a centrar se encontrará dentro de un div padre, y el centrado se hará con JavaScript. Basta con cambiar la posición del div a 'relative' e indicar que, para el centrado horizontal, su propiedad 'left' sea "el ancho del div padre dividido entre 2 - el ancho del div hijo dividido entre 2", y para su centrado horizontal, lo mismo pero con 'top' y el largo.

## Forma 3 ◾ *Clásica*

En este ejemplo, el div a centrar se encontrará dentro de un div padre. Con CSS, se seleccionará el div y se le indicará que su propiedad 'top' y 'left' sean 50%, 'position' relative y se usará la propiedad '**transform**' con la función '**translate**' , que permitirá moverlo en horizontal y vertical (_-50% en las dos_).

## Forma 4 ◾ *Grid*

En este ejemplo, el div a centrar se encontrará dentro de un div padre, al cual se le aplicará las propiedad 'display: grid', y luego 'justify-content' y 'align-content' (o directamente 'place-items', que sería más rápido).

## Forma 5 ◾ *Flex*

En este ejemplo, el div a centrar se encontrará dentro de un div padre, al cual se le aplicará las propiedad 'display: flex', y luego 'justify-content' y 'align-items'.

## Forma 6 ◾ *Flex - Centrado absoluto*

En este ejemplo, el div a centrar se encontrará dentro de un div padre, al cual se le aplicará las propiedad 'display: flex', y luego 'justify-content' ,'align-items' y 'min-height'.
