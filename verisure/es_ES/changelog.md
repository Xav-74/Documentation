---
layout: default
title: Complemento Verisure - Registro de cambios
lang: es_ES
pluginId: verisure
---

# ¡Es importante que lo leas!

**A continuación encontrarás las notas, las novedades y las correcciones de cada versión del complemento**

**Nota**: si una actualización no aparece en esta lista, es porque solo incluye cambios menores, como modificaciones en la documentación o correcciones de errores menores.

# 2026-08-11

Novedades:

- Traducción del complemento a 5 idiomas (EN, DE, ES, PT, IT)
- Registros en inglés
- Actualización de los widgets como parte de una armonización de todos mis complementos

Atención: a partir de esta versión, la versión mínima necesaria de Jeedom es la v4.4 y Debian 11.

# 2026-05-31

Actualización del icono como parte de una armonización de todos mis complementos

# 2026-02-22

Se han añadido las siguientes funciones:

- Compatibilidad con los detectores de movimiento para exteriores QP (tipo 3)
- Compatibilidad con el modo exterior (tipo 3)
- Se ha añadido la actualización a través del historial (tipo 1 y 3)
- Compatibilidad con el «modo forzado» (tipo 3)
- Compatibilidad con detectores de agua (tipo 2)

Las siguientes correcciones:

- Corrección de un error en la cerradura conectada (tipo 3)
- Corrección de un error en la solicitud de inicio de sesión (tipo 2)
- Corrección de un error en la visualización del nombre del sensor en el widget (tipo 2)

# 2024-12-31

Se han añadido las siguientes funciones:

- Incorporación de cerraduras conectadas en las alarmas de última generación (tipo 3)
- Optimización del código (creación de comandos)

# 2024-12-13

Las siguientes correcciones:

- Se ha corregido un error en la consulta «getPhotos» para las alarmas de última generación (tipo 3)

# 2024-12-08

Las siguientes correcciones:

- Corrección de un error en la solicitud «logout»
- Optimización del código para PHP 8.0

# 2024-02-09

Se han añadido las siguientes funciones:

- Incorporación de la imagen de la alarma en las miniaturas de la página del complemento

Las siguientes correcciones:

- Actualización del botón para la creación automática de una publicación en la comunidad de Jeedom (vCore Jeedom 4.4 mini)
- Actualización de las capturas de pantalla del complemento

# 2024-01-17

Las siguientes correcciones:

- Alarmas de tipo 1 y 3: corrección tras las modificaciones en las API de Verisure y la aparición del error «Required request header 'x-installationNumber' not present»

# 2024-01-07

Se han añadido las siguientes funciones:

- Compatibilidad oficial con las alarmas de tipo 3
- Fin del soporte técnico para las versiones de Jeedom 3.x. La versión mínima del núcleo necesaria para el correcto funcionamiento del complemento es la 4.0.

# 2023-11-19

Se han añadido las siguientes funciones:

- Compatibilidad de Jeedom v4.4 con Debian 12 y PHP 8.x
- Se ha añadido un botón para crear automáticamente una publicación en la comunidad de Jeedom (vCore Jeedom 4.4 mini)

# 2023-09-11

Las siguientes correcciones:

- Visualización del widget en un smartphone o tableta en modo escritorio

# 2023-05-29

Se han añadido las siguientes funciones:

- Interruptor para mostrar o ocultar las contraseñas

Las siguientes correcciones:

- Alarma de tipo 2: creación de comandos de información «Humedad» para los detectores de humo

# 2023-05-22

Optimización del código y de los registros

Las siguientes correcciones:

- Alerta de tipo 1: corrección de un error en la función GetPictures tras la modificación de las API
- Alarma de tipo 2: conmutación automática al servidor secundario si el primario está inactivo, pero sigue aceptando el inicio de sesión

# 2023-04-11

Correcciones tras los cambios en las API de Verisure (autenticación MFA y solicitudes: migración de la API REST a GraphQL). Atención: se trata de una actualización **importante**. Tendrás que volver a autenticarte cada vez que crees una alarma (tipo 1 y 2).

Se han añadido las siguientes funciones:

- Compatibilidad con la nueva generación de alarmas (por el momento, a través del tipo 1)
- Rediseño de los widgets (compatibilidad con el núcleo de Jeedom v4.4)

# 2022-10-18

Se han añadido las siguientes funciones:

- Nueva visualización del cuadro de controles de los dispositivos (compatible con Jeedom v4.3)
- Rediseño de la página «Equipamiento»

# 2022-04-24

Se han añadido las siguientes funciones:

- Solicitudes de imágenes para las alarmas de tipo 2

Las siguientes correcciones:

- Corrección de la altura automática del widget si hay varias alarmas en el panel de control
- Corrección de un error en la función SetEqLogic()

# 2022-02-02

Las siguientes correcciones:

- Se ha corregido el error de visualización del widget de tipo 2 en la versión 4.2 si el usuario conectado no es administrador.

# 2022-01-31

Se han añadido las siguientes funciones:

- Prueba y validación del complemento para la versión 4.2 del núcleo de Jeedom
- Seguridad: cifrado de la contraseña de los dispositivos en la base de datos de Jeedom
- Se ha añadido una información emergente sobre el número de instalación en la página principal de un dispositivo
- Pestaña «Notificaciones de Verisure»: se ha añadido el escenario de notificaciones por SMS
- Pequeños cambios en la interfaz (incorporación del nuevo modo de tabla en la versión 4.2)

Las siguientes correcciones:

- Corrección de errores presentes en el registro http.error de Jeedom (si la variable SESSIONID está vacía)

# 2021-07-07

Se han añadido las siguientes funciones:

- Se han añadido los comandos «información» y «acciones» para los dispositivos de alarmas de tipo 2 (temperatura, humedad, estado/encendido/apagado de los enchufes conectados, estado (abierto/cerrado) de los sensores de apertura).
- Aparece un error en el centro de notificaciones de Jeedom al activarse la alarma porque una puerta o ventana se ha quedado abierta

Las siguientes correcciones:

- Modificaciones y correcciones en los registros

# 2021-01-06

Se han añadido las siguientes funciones:

- Se ha añadido un comando de información «Calidad de la red» para las alarmas de tipo 1. Este indicador se basa en el número de solicitudes completadas con éxito al conectarse a la nube de Verisure.
- Se ha añadido a el panel de control la visualización del nivel de humedad de los enchufes inteligentes compatibles para las alarmas de tipo 2

Las siguientes correcciones:

- Nueva presentación de la lista de objetos (conforme al núcleo v4.1)
- Error en la zona horaria (UTC) del informe de actividad de las alarmas de tipo 2 (que ahora se basa en la zona horaria de Jeedom)
- Corrección de errores en el registro hhtp_error al visualizar el informe de actividad de las alarmas de tipo 1

# 2020-11-06

Correcciones tras los cambios en las API de Verisure (autenticación y parámetros de las solicitudes)

# 2020-10-13

Se han añadido las siguientes funciones:

- Compatibilidad con las alarmas Verisure disponibles en Bélgica y el norte de Europa. El comando «Solicitar imágenes» aún no está operativo para este tipo de dispositivos.
- Posibilidad de ocultar determinados controles en el widget (solicitud de imágenes, activación del modo nocturno, activación del modo diurno, activación del modo exterior)
- Actualización de los iconos del informe de actividad

Las siguientes correcciones:

- Error de visualización de Homebridge en modo nocturno y diurno (Hogar)
- Error en la visualización del informe de actividad al activar el modo nocturno mediante un mando a distancia

# 2020-09-04

Externalización de la documentación del complemento

# 2020-08-22

Las siguientes correcciones:

- Cambio de los registros de «Error» a «Advertencia» para evitar sobrecargar el centro de mensajes de Jeedom
- Modificaciones y correcciones menores

# 2020-06-30

Se han añadido las siguientes funciones:

- Consideración de los modos mixtos (Total + Exterior, Noche + Exterior, Día + Exterior)

# 2020-06-14

Se han añadido las siguientes funciones:

- Implementación de una plantilla para el panel de control móvil compatible con las versiones 3 y 4 (Core2019 Light, Dark y Legacy)

# 2020-06-11

Se han añadido las siguientes funciones y correcciones:

- Solicitudes de imágenes
- Gestión de la excepción del cron todos los días a las 00:00 para evitar una actualización durante el mantenimiento de los servidores Versiure
- Implementación de una plantilla para el panel de control compatible con las versiones v3 y v4 (Core2019 Light, Dark y Legacy)
- Optimización global del código
- Rediseño de los registros del complemento

# 2020-05-04

Se han añadido las siguientes funciones:

- Acceso al registro de actividad de Verisure
- Pestaña «Notificaciones de Verisure» para configurar escenarios de notificaciones por correo electrónico y SMS
  
# 2020-04-15

Primera versión del complemento de Verisure

- Conexión a la nube de Verisure
- Recuperación de la información de la instalación
- Funciones: activación en modo total, activación en modo nocturno, activación en modo diurno, activación en modo exterior, desactivación, consulta del estado de la alarma (en modo manual o automático (cada 30 minutos))
- Compatibilidad con Homebridge

**ATENCIÓN**: en esta primera versión, ¡aún no se tiene en cuenta el evento relacionado con la activación de la alarma!
