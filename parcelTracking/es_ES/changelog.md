---
layout: default
title: Plugin de seguimiento de paquetes - Registro de cambios
lang: es_ES
pluginId: parcelTracking
---

# ¡Es importante que lo leas!

**A continuación encontrarás las notas, las novedades y las correcciones de cada versión del complemento**

**Nota**: si una actualización no aparece en esta lista, es porque solo incluye cambios menores, como modificaciones en la documentación o correcciones de errores menores.


# 31 de mayo de 2026 [s]

Actualización del icono como parte de una armonización de todos mis complementos


# 15 de febrero de 2026 [s]

Se han añadido las siguientes funciones:
 - Actualización automática de la lista de transportistas y de los parámetros adicionales (mediante un botón o mediante una tarea cron diaria)
 

# 10 de noviembre de 2025 [s]

Se han añadido las siguientes funciones:
 - Actualización de la lista de transportistas y de los parámetros adicionales
 - Se ha añadido un campo «Búsqueda» para filtrar los transportistas en la lista de opciones (por nombre, por país, etc.)

Las siguientes correcciones:
 - Se ha corregido una advertencia de PHP que se producía al mostrar el widget global en determinados casos (por ejemplo, cuando «states» estaba vacío).


# 20 de mayo de 2025 [s]

Se han añadido las siguientes funciones:
 - Posibilidad de mostrar simultáneamente los widgets individuales y el widget global
 - Inclusión del nombre del paquete en el título de las notificaciones


# 31 de diciembre de 2024 [s]

Se han añadido las siguientes funciones:
 - Se han añadido las etiquetas #url# y #location# para las notificaciones y los escenarios


# 17 de octubre de 2024 [s]

Se han añadido las siguientes funciones:
 - Se han añadido los campos «transportista» y «parámetro adicional» en la ventana emergente que permite añadir un paquete desde el widget o el panel de control.

Las siguientes correcciones:
 - Las fechas y horas se muestran ahora en la zona horaria configurada en tu Jeedom (widget único / widget global).
 - Se tienen en cuenta las descripciones traducidas por 17Track cuando se ha configurado un idioma específico
 

# 28 de septiembre de 2024 [s]

Se han añadido las siguientes funciones:
 - Implementación de un webhook que recoge en tiempo real la información transmitida por 17Track. Por lo tanto, se ha desactivado la tarea cron horaria.
 - Se ha añadido un botón que permite enviar una notificación de prueba en la página de configuración del complemento

> ¡¡¡ATENCIÓN!!!
> Es imprescindible que configures los parámetros del webhook en tu panel de control de 17Track; de lo contrario, ¡dejará de recibir información sobre tus paquetes!


# 7 de septiembre de 2024 [s]

Se han añadido las siguientes funciones:
 - Cambio de la API de ParcelsApp a 17Track

> ¡¡¡ATENCIÓN!!!
> Se trata de una modificación importante del complemento. Por lo tanto, debes volver a configurarlo (en particular, introducir una clave API de 17Track) y, a continuación, volver a crear todos tus paquetes. Todo el procedimiento se detalla en la documentación. ¡La gran ventaja de esta nueva versión es que el número de seguimientos aumenta a 100 paquetes al mes (la cuota se renueva cada primer día del mes)!


# 22 de agosto de 2024 [s]

Se han añadido las siguientes funciones:
 - Traducción del complemento (inglés, alemán, español, italiano, portugués)

Las siguientes correcciones:
 - Traducción de las etiquetas al inglés

> ¡¡¡ATENCIÓN!!!
> ¡Por lo tanto, debes modificar el formato de tus mensajes (notificaciones) y/o de tus escenarios!


# 1 de agosto de 2024 [s]

Se han añadido las siguientes funciones:
 - Eliminación automática de los espacios que puedan aparecer antes y/o después del trackingID

Las siguientes correcciones:
 - Recuperación de la información sobre la empresa de transporte, el origen y el destino (diferentes claves en el archivo JSON según las empresas de transporte)


# 27 de julio de 2024 [s]

Se han añadido las siguientes funciones:
 - Posibilidad de añadir o eliminar paquetes directamente desde los widgets (individuales o globales)
 - Posibilidad de añadir una clave API secundaria para el seguimiento de 10 paquetes adicionales
 - Incorporación de una notificación en el centro de mensajes de Jeedom cuando se alcanza el límite de 10 paquetes (solo durante la sincronización, no durante la actualización)

Las siguientes correcciones:
 - Advertencia de PHP en el registro http.error al llamar a la función buildList()
 - Actualización de los pedidos de los equipos cuando el JSON «Shipments» está vacío


# 16 de julio de 2024 [s]

Primera versión del complemento «Seguimiento de paquetes» (parcelTracking)
 - Conexión a la nube de Parcelsapp a través de la API
 - Obtención de información sobre los paquetes: estado, transportista, país de origen, país de destino, etapas de entrega, fecha de entrega
 - Funciones disponibles: widget por paquete o global, envío de notificaciones mediante comando y/o escenario, eliminación automática de paquetes tras un periodo de tiempo definido

  
