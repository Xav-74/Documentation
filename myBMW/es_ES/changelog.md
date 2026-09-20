---
layout: default
title: Complemento myBMW - Historial de cambios
lang: es_ES
pluginId: myBMW
---

# ¡Es importante que lo leas!

**A continuación encontrarás las notas, las novedades y las correcciones de cada versión del complemento**

**Nota**: si una actualización no aparece en esta lista, es porque solo incluye cambios menores, como modificaciones en la documentación o correcciones de errores menores.


# 2026-07-31

Las siguientes correcciones:
 - Corrección de un error en la visualización del porcentaje de batería - Compatibilidad con el nuevo parámetro «vehicle.drivetrain.batteryManagement.header»
 - Actualización del catálogo de Telematics con la incorporación del campo «Condition Based Service» (246 hasta la fecha)


# 2026-07-25

Las siguientes correcciones:
 - Actualización del catálogo de Telematics con solo los campos transmitibles (245 hasta la fecha)


# 2026-07-04

Se han añadido las siguientes funciones:
 - Configuración de una tarea programada personalizable para evitar los errores «500» de los servidores de BMW si se realiza una consulta a una hora fija (xx:00). Por defecto, esta tarea está programada cada 2 horas, 5 minutos después de la hora (xx:05), pero puedes cambiar el minuto exacto modificando el primer valor de la tarea (5 */2 * * *).


# 2026-06-19

Se han añadido las siguientes funciones:
 - Se ha añadido un parámetro «Precio medio del kWh» para calcular el coste de una recarga eléctrica, visible en el gráfico del historial de recargas (Panel)
 
Las siguientes correcciones:
 - Panel: corrección del error de JavaScript «Unexpected end of JSON input» al mostrar el historial de consumo eléctrico


# 2026-05-31

Actualización del icono como parte de una armonización de todos mis complementos


# 2025-11-09

Se han añadido las siguientes funciones:
 - Cambio a las **API oficiales de BMW**
 - Configuración del **flujo MQTT** para la obtención de información en tiempo real

**ATENCIÓN** Se trata de una actualización importante del complemento que requiere una reconfiguración completa del mismo. Lee atentamente la documentación y sigue todos los pasos descritos uno a uno (especialmente las acciones que debes realizar en tu cuenta de usuario de BMW o Mini).


# 2025-09-12

Se han añadido las siguientes funciones:
 - Posibilidad de configurar el objetivo de recarga y el límite de corriente de carga para los vehículos eléctricos e híbridos enchufables compatibles
 - Incorporación de los comandos de información correspondientes
 - Generación de un x_user_agent genérico y específico para cada máquina con el fin de evitar errores 403 (Out of call volume quota)
 - Se ha añadido una actualización automática para recuperar inmediatamente la información tras la sincronización del vehículo o tras utilizar un servicio remoto que lo requiera.

**ATENCIÓN** Para poder utilizar estas nuevas funciones, es necesario volver a sincronizar todos tus vehículos (sin captcha)

Las siguientes correcciones:
 - Optimización del código
 - Página de configuración: corrección de un error en la función de guardado automático antes de una sincronización o de un cambio en los parámetros
 - Página de configuración: corrección de un error en la eliminación automática del captcha tras una sincronización


# 2025-05-20

Se han añadido las siguientes funciones:
 - Se ha eliminado el cron30 y se ha añadido un cron personalizable desde la página de configuración del complemento


# 2025-03-09

Se han añadido las siguientes funciones:
 - Se ha añadido el comando «info chargingTarget» (objetivo de recarga eléctrica en %)

Las siguientes correcciones:
 - Panel: corrección de un error en la visualización del estado de apertura/cierre de la cubierta


# 2025-01-31

Se han añadido las siguientes funciones:
 - Se ha añadido el comando totalEnergyCost (coste total mensual del consumo eléctrico)
 - Reducción del número de consultas a los servidores de BMW en función de las capacidades del vehículo (cargas y trayectos)
 - Panel: modificación del gráfico de estadísticas de carga (se añade el coste total)
 - Panel y pantalla de control: a partir de ahora, la visualización de gráficos y botones se adapta a las capacidades del vehículo

Las siguientes correcciones:
 - Panel: corrección de un error en la primera visualización con los iconos de puertas y ventanas


# 2024-12-18

Las siguientes correcciones:
 - Corrección de un error que provocaba que se borrara el historial de trayectos si la consulta devolvía «TripHistoryNotActive» por error


# 2024-12-08

Se han añadido las siguientes funciones:
 - Se tiene en cuenta el captcha que exige BMW al iniciar sesión por primera vez (¡consulta la documentación!)
 - Visualización de los servicios disponibles según la suscripción en la página «Equipamiento»

Las siguientes correcciones:
 - Visualización de la hora junto con la fecha en los gráficos


# 2024-10-22

Las siguientes correcciones:
 - Corrección de errores en los comandos del panel (sendPOI y vehicleFinder)


# 2024-09-06

Se han añadido las siguientes funciones:
 - Compatibilidad con las nuevas API de BMW y Mini (aplicación móvil v4.7.2)

Las siguientes correcciones:
 - Corrección de un error en la solicitud sendPOI (modificación de la API)
 - Corrección de un error en la consulta vehicleFinder (modificación de la API)
 - Corrección de un error en la consulta «lastTrip» (se tiene en cuenta la información «NoTripsYet»)


# 2024-07-07

Se han añadido las siguientes funciones:
 - Incorporación de sesiones de recarga para coches eléctricos con extensor (tipo ELECTRIC_WITH_RANGE_EXTENDER)

Las siguientes correcciones:
 - Mejora en la visualización de las publicaciones en la comunidad
 - Corrección de un error en la visualización de los mensajes de servicio (modificación de la API)
 - Corrección de un error en la consulta «chargingStatistics» (modificación de la API)
 - Corrección de errores en la visualización del panel y el cuadro de mando para vehículos de tipo «mild_hybrid» (API v2) o «hybrid» (API v1)


# 2024-04-17

Se han añadido las siguientes funciones:
 - Se ha añadido un botón que permite eliminar manualmente el token del dispositivo
 - Incorporación de la solicitud de configuración de OAuth2
 - Se ha añadido la función unset() para las peticiones cURL (compatibilidad con PHP 8.x)

Las siguientes correcciones:
 - Corrección de la sincronización de los vehículos tras la modificación de las API (método SHA256)
 - Corrección de un error en la visualización de los mosaicos de los coches eléctricos con extensor (tipo ELECTRIC_WITH_RANGE_EXTENDER)


# 2024-04-16

Se han añadido las siguientes funciones:
 - Pequeños cambios en el diseño del widget y del panel
 - Panel: cambio en la visualización de las sesiones de carga, pasando del modo de tabla al modo gráfico
 - Panel: incorporación de un gráfico con las estadísticas de conducción (si está disponible)
 - Panel: se ha añadido un gráfico con los desplazamientos del mes actual (si está disponible)
 - Revisión del cron: cambio de 1 hora a 30 minutos (especialmente para recuperar los últimos trayectos)

Las siguientes correcciones:
- Corrección de un error en la visualización de las sesiones de carga de un vehículo de combustión
- Corrección de la URL de las sesiones de carga tras la modificación de las API


# 2024-03-14

Se han añadido las siguientes funciones:
 - Compatibilidad con las nuevas API de BMW y Mini v3.11.0
 - Reducción del número de llamadas a los servidores de BMW (en particular, el cambio de cron30 a cronHourly, ya sea de forma temporal o permanente)
 - Se ha añadido la consulta de API «lastTrips». Más adelante se añadirá un nuevo gráfico al panel.

Las siguientes correcciones:
 - Registro por defecto de los tres comandos necesarios para los gráficos del panel al crearlos
 - Eliminación de la consulta «chargingStatistics», que ya no funciona en la actualidad


# 2024-02-09

Se han añadido las siguientes funciones:
 - Incorporación de la imagen del vehículo en las miniaturas de la página del complemento

Las siguientes correcciones:
 - Actualización del botón para la creación automática de una publicación en la comunidad de Jeedom (vCore Jeedom 4.4 mini)
 - Actualización de las capturas de pantalla del complemento
 

# 2024-01-31

Las siguientes correcciones:
 - Corrección de los kilómetros restantes para los coches eléctricos con extensor (tipo ELECTRIC_WITH_RANGE_EXTENDER)
 

# 2023-11-30

Las siguientes correcciones:
 - Gestión del error «429 - Se ha superado el límite de solicitudes»
 - Visualización del panel aunque el equipo no sea visible


# 2023-11-19

Se han añadido las siguientes funciones:
 - Compatibilidad de Jeedom v4.4 con Debian 12 y PHP 8.x
 - Compatibilidad con las nuevas API de BMW y Mini v3.9.0
 - Se ha añadido un botón para crear automáticamente una publicación en la comunidad de Jeedom (vCore Jeedom 4.4 mini)


# 2023-10-10

Se han añadido las siguientes funciones:
 - Tema «Legacy» para la visualización del widget y del panel (vCore Jeedom < 4.4)

Las siguientes correcciones:
 - Repaso al cambio de la indicación del volumen de combustible restante, de litros a %, tras la modificación de las API. Ahora son posibles las dos opciones, que dependen del vehículo.
 - Se ha corregido el comando «sesiones de carga», que devolvía un JSON no válido si el vehículo no era eléctrico o híbrido.


# 2023-10-04

Se han añadido las siguientes funciones:
 - Compatibilidad con las nuevas API de BMW y Mini v3.3.1
 - Rediseño del widget con una vuelta a un diseño más tradicional/convencional para no sobrecargar innecesariamente el panel de control, y centrado únicamente en la información y las acciones importantes
 - Se ha añadido un panel mucho más completo que incluye, entre otras cosas, gráficos sobre el kilometraje, el nivel de combustible y la batería. Para ello, debes marcar la opción «panel» en la configuración del complemento y activar el registro de los comandos «kilometraje», «combustible» y/o «batería». El panel se puede personalizar desde la página de configuración del equipo (icono/texto del estado de apertura de puertas y ventanas, colores, etc.).
 - Se añade el historial de consumo del mes actual con la potencia consumida y el coste aproximado, si se ha configurado así en la aplicación de BMW o Mini.
 - Inclusión de la información sobre la carga en los datos brutos
 - Incorporación de los botones de inicio y parada de la recarga para vehículos eléctricos
 - Posibilidad de mostrar la contraseña en el dispositivo
 - Inicio de la compatibilidad con Jeedom v4.4

Las siguientes correcciones:
 - Corrección de la visualización del widget en un smartphone o tableta en modo escritorio (¡por fin, por así decirlo!)
 - Se añaden registros adicionales en caso de depuración al actualizar el token
 - Cambio de la unidad de medida del volumen de combustible restante de «litros» a «%» tras la modificación de las API
 - Optimización de la visualización de los mensajes de control o de servicios (si la descripción está vacía)
 - Corrección de la función «VehicleFinder» tras la modificación de las API. Se utiliza la última posición conocida del vehículo, ya que ahora es necesario enviar las coordenadas GPS de la persona que solicita la localización del vehículo. La posición solo se devuelve si el vehículo se encuentra en un radio inferior a 1,5 km.


# 2023-01-15

Se han añadido las siguientes funciones:
 - Compatibilidad con las nuevas API de BMW y Mini v2.12
 - Se ha añadido la presión y el valor de referencia de inflado de los neumáticos (Atención: esta función depende del modelo de vehículo. La información del widget solo se muestra si está disponible).
 - Se ha añadido el icono y se tienen en cuenta los mensajes relacionados con el líquido limpiaparabrisas

Las siguientes correcciones:
 - Ajuste de la vista del vehículo (vista de perfil de tres cuartos para todos los vehículos; requiere una nueva sincronización y vaciar la caché)
 - Modificación del mensaje sobre el tiempo restante para la recarga de vehículos eléctricos
 - Actualización de la documentación


# 2022-09-25

Se han añadido las siguientes funciones:
 - Incorporación de la presencia del vehículo en el domicilio
 - Incorporación de la distancia entre el vehículo y el domicilio
 - Toma en cuenta de los mensajes relativos a las pastillas de freno y al desgaste de los neumáticos
 - Eliminación de los dos comandos «unidad de distancia» y «unidad de combustible» (que no se utilizan)
 - Nueva visualización del cuadro de controles de los dispositivos (compatible con Jeedom v4.3)
 

Las siguientes correcciones:
 - Eliminación de la «o» en el título de los mensajes de servicio si no hay fecha
 - Corrección del color azul de los iconos de Font Awesome del widget flatdesign
 - Corrección de la API para la recuperación de «status event» (eliminación del checkauth)
 - Actualización de la documentación
 

# 2022-09-02

Se han añadido las siguientes funciones:
 - Se han añadido los nuevos comandos de información «Todas las puertas» y «Todas las ventanas»
 - Nuevo widget «Flat Design»: puedes seleccionar el widget que desees en la página del dispositivo (compatible con los temas oscuro y claro). Este widget es personalizable (consulta la documentación).

Las siguientes correcciones:
 - Modificación del tiempo de espera en la actualización del token para evitar errores de conexión


# 2022-08-01

Se han añadido las siguientes funciones:
 - Incorporación de iconos para la gestión de los mensajes de control del vehículo (aceite, frenos, presión de los neumáticos, control general del vehículo)

Las siguientes correcciones:
 - Corrección de un error de sincronización si el equipo no se ha guardado (a partir de ahora se guarda automáticamente)


# 2022-07-25

Se han añadido las siguientes funciones:
 - Compatibilidad con las nuevas API de BMW y Mini v2
 - Se han añadido información sobre herramientas en el widget para conocer el estado de las puertas y ventanas

Las siguientes correcciones:
 - Corrección de un error relacionado con el token de actualización


# 2022-06-12

Se han añadido las siguientes funciones:
 - Compatibilidad con las nuevas API Mini
 - Fusión de las API de BMW y Mini y optimización del código
 - Compatibilidad con el francés en la información devuelta (unidades y mensajes del vehículo)
 - Cambio de los registros de «debug» a «error» si la solicitud no se completa con éxito
 - Uso del «logicalID» de los dispositivos con vistas a futuros desarrollos

Las siguientes correcciones:
 - Corrección de un error en la función CreateCmd
 - Corrección de los kilómetros restantes de los motores de combustión (restando los kilómetros restantes de los motores eléctricos)
 - Muestra la última conexión como «desconocida» si el valor devuelto es 01/01/1970
 - Se ha corregido el problema de visualización de los mensajes cuando estos contienen un « ’ ».


# 2022-05-28

Las siguientes correcciones:
 - Modificación de las API de BMW Connected Drive (x-user-agent)
 - Corrección de un error en la URL de la imagen del vehículo si Jeedom no está instalado en el directorio raíz
 - Conversión de millas a kilómetros para la distancia total


# 2022-04-24

Se han añadido las siguientes funciones:
 - Compatibilidad con el modo «Secured» en el widget (bloqueo)
 - Se ha añadido la posibilidad de guardar el historial de pedidos en la pestaña «Equipos\Pedidos»
 - Compatibilidad con la visualización de información histórica en el fondo de un mosaico (core v4.2)
 

# 2022-04-11

Se han añadido las siguientes funciones:
 - Ventilación: se han añadido los modos «start» y «stop»
 - Búsqueda de vehículos: localización del vehículo en tiempo real
 - Función para enviar un punto de interés (POI) a través de los mensajes del coche
 - Comprobación del estado de cada acción durante 2 minutos («PENDING» -> «EXECUTED» o «ERROR»)
 - Se han añadido los comandos «Status» para cada comando de acción (para su seguimiento mediante guiones).
 - Cambio de los iconos de acciones
 
Las siguientes correcciones:
 - Corrección de un error que mostraba «enchufe desconectado» si el valor era «false» en lugar de «0» en un vehículo eléctrico
 - optimización del código


# 2022-03-28

Primera versión del complemento myBMW
 - Conexión a la nube de BMW Connected Drive
 - Recopilación de información del vehículo: estado del cierre, estado de puertas y ventanas, kilometraje total, porcentaje de carga y kilómetros restantes para los motores eléctricos, nivel de combustible y kilómetros restantes para los motores de combustión, ubicación del vehículo, mensajes de alerta
 - Funciones disponibles: bloqueo/desbloqueo del vehículo, puesta en marcha de la ventilación, luz de emergencia, bocina
  
