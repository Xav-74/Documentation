---
layout: default
title: Plugin Mammotion - Documentación
lang: es_ES
pluginId: mammotion
---

# Presentación

Este complemento te permite controlar tus robots cortacésped (Luba, Yuka) y robots para piscinas (Spino) de la marca **Mammotion** desde Jeedom, igual que con la aplicación oficial.

La transmisión de datos es **automática y en tiempo real**: el servicio en segundo plano del complemento mantiene una conexión permanente con la nube de Mammotion (MQTT) y envía cada cambio de estado a Jeedom.

> **Advertencia**
>
>Este complemento se basa en la biblioteca no oficial [PyMammotion](https://github.com/mikey0000/PyMammotion). Las condiciones de uso de Mammotion prohíben el acceso no oficial a su API: utiliza este complemento bajo tu propia responsabilidad (existe un riesgo teórico de que se bloquee tu cuenta).

<!-- -->

> **Consejo**
>
> La **versión mínima de Jeedom** necesaria para que el complemento funcione correctamente es la **versión 4.4**
> El complemento ya es compatible con la **versión 4.6** de Jeedom, así como con las **versiones de Debian 12**

# Configuración del complemento

Una vez descargado el complemento:

- Activa el complemento
- Inicia la instalación de las dependencias (⚠ la primera instalación puede tardar bastante: compilación de Python 3.13 mediante pyenv)
- Introduce el **correo electrónico** y la **contraseña** de tu cuenta de Mammotion
- Inicia el demonio

> **Consejo**
>
>La nube de Mammotion solo permite una sesión por cuenta. Crea una **cuenta secundaria** dedicada a Jeedom y compártele tus robots desde la aplicación oficial; de lo contrario, la aplicación móvil se desconectará cada vez que se inicie el demonio (y viceversa).

## Configuración

| Parámetro | Descripción |
| --------- | ----------- |
| Correo electrónico | Correo electrónico de la cuenta de Mammotion |
| Contraseña | Contraseña de la cuenta de Mammotion |
| Puerto interno | Puerto de comunicación Jeedom → demonio (por defecto: 44090) |
| Cron personalizado | Frecuencia de actualización forzada (por defecto: cada 15 minutos) |

# Creación de dispositivos

La detección de los robots se realiza mediante el botón **Sincronizar** de la página del complemento. Este consulta la cuenta de Mammotion, crea los dispositivos que faltan, actualiza su modelo y su firmware y, a continuación, recupera la lista de zonas de corte y la lista de actividades.

Ejecútalo tras el primer inicio del demonio y, a partir de entonces, cada vez que añadas un robot a tu cuenta o modifiques la configuración de tus robots, tus zonas y/o actividades desde la aplicación.

El tipo de robot se detecta automáticamente (cortacésped o piscina) y determina los comandos creados, así como el widget que se muestra en el panel de control. Las zonas y las actividades solo se aplican a los cortacéspedes.

La página del dispositivo y su widget muestran una foto correspondiente al modelo detectado. Cuando no se dispone del modelo exacto, se utiliza la del modelo más parecido.

# Mandos — Cortacésped (Luba, Yuka)

## Información sobre controles

| Control | Descripción |
| -------- | ----------- |
| En línea | Robot conectado a la nube |
| Batería | Nivel de batería (%) |
| Estado | Modo de funcionamiento (corte, carga, regreso a la estación, etc.) |
| Velocidad | Velocidad de desplazamiento habitual (m/s) |
| Cargando | Carga en curso |
| En la base | Robot colocado en su estación |
| Avance | Avance de la tarea en curso (%) |
| Superficie segada | Superficie segada en la sesión (m²) |
| Zona actual | Nombre de la zona que se está segando |
| Tiempo restante / transcurrido | Estimación en minutos de la tarea en curso |
| Altura de la cuchilla | Altura de corte habitual (mm) |
| Lamas activas | Rotación de las lamas |
| Detección de lluvia | Sensor de lluvia activo |
| Coordenadas GPS | Posición `latitud,longitud` (vacío hasta que el robot haya transmitido su referencia GNSS; véase la sección de preguntas frecuentes) |
| Orientación | Rumbo del robot (°) |
| Señal wifi / Bluetooth / móvil | RSSI de cada enlace (dBm) |
| Tiempo de uso de las cuchillas | Desgaste acumulado de las cuchillas (h) |
| Umbral de desgaste de las lamas | Umbral a partir del cual se recomienda su sustitución (h) |
| Tiempo restante de vida útil de las lamas | Diferencia entre el umbral y el desgaste acumulado (h) |
| Distancia total | Distancia recorrida desde la puesta en servicio (km) |
| Tiempo total de trabajo | Tiempo acumulado de trabajo (h) |
| Ciclos de la batería | Número de ciclos de la batería |
| Firmware | Versión del firmware |
| Errores | Códigos de error activos, acompañados de su descripción |
| Conexión | Tipo de conexión del robot (Wi-Fi, 3G/4G, BLE) |
| Último evento | Registro de eventos (inicio del corte, regreso a la base, carga, actualización...). Historial: consulta el historial del pedido para ver el registro completo |
| Ajuste de la altura de la cuchilla / Ajuste de la velocidad | Último valor ajustado mediante los controles deslizantes, que se vuelve a utilizar al iniciar un corte |
| Invernaje | Modo de invernaje activo o inactivo (véase *Modo de invernaje*) |
| Última actualización | Fecha y hora de los últimos datos recibidos |

## Comandos de acción

| Control | Descripción |
| -------- | ----------- |
| Actualizar | Forzar una actualización del estado |
| Iniciar | Iniciar/reanudar la tarea programada |
| Pausa | Pone la tarea en pausa |
| Reanudar | Reanuda la tarea en pausa |
| Cancelar la tarea | Cancela la tarea en curso |
| Volver a la estación | Devuelve el robot a su estación |
| Salir de la estación | Hace que el robot salga de su estación |
| Ajustar la altura de la lama | Control deslizante en mm, por defecto 30 → 70 (no disponible en la gama Yuka) |
| Ajustar velocidad | Control deslizante en m/s, por defecto 0,2 → 0,6 (no disponible en la gama Yuka) |
| Cortar una zona | Inicia el corte de la zona seleccionada (lista generada mediante sincronización) |
| Iniciar una actividad | Inicia una actividad programada en la aplicación (lista generada mediante la sincronización) |
| Activar o desactivar el modo de invierno | Activa el modo de invierno o lo desactiva si ya está activo (véase *Modo de invierno*) |

> **Consejo**
>
> Los límites de los dos controles deslizantes se ajustan automáticamente en función de las capacidades indicadas por tu modelo: los valores anteriores son solo valores de reserva.

Se incluye un widget específico para el robot cortacésped, con los 7 (Yuka) o 9 (Luba) botones de control y la información principal.

# Mandos — Robot para piscinas (Spino)

## Información sobre controles

| Control | Descripción |
| -------- | ----------- |
| En línea | Robot conectado a la nube |
| Batería | Nivel de batería (%) |
| Cargando | Carga en curso |
| Estado | Estado del robot: En reposo, Preparación, A la espera de ser puesto en el agua, Limpieza en curso, Regreso a la estación, Cargando, Salida de la estación, Llamada en curso |
| Modo de limpieza | Modo activo: Completo, Suelo, Paredes, Eco — o *Ninguno* cuando el robot no está limpiando (véase la sección de preguntas frecuentes) |
| Señal wifi | RSSI wifi (dBm) |
| Señal Bluetooth | RSSI de Bluetooth (dBm) |
| Conectado a la red Wi-Fi | Conexión Wi-Fi establecida |
| Firmware | Versión del firmware |
| Invernaje | Modo de invernaje activo o inactivo (véase *Modo de invernaje*) |
| Última actualización | Fecha y hora de los últimos datos recibidos |

## Comandos de acción

| Control | Descripción |
| -------- | ----------- |
| Actualizar | Forzar una actualización del estado |
| Limpieza completa | Limpieza del fondo y las paredes (modo **ALL** de la aplicación) |
| Limpieza del suelo | Solo fondo de la piscina (**FLOOR**) |
| Limpieza de paredes | Solo paredes (**WALL**) |
| Limpieza ecológica | Barrido de la superficie (**ECO**) |
| Parada y vuelta a la base de recarga | Interrumpe la limpieza en curso y envía al robot a recargarse (botón *recarga* de la aplicación) |
| Activar o desactivar el modo de invierno | Activa el modo de invierno o lo desactiva si ya está activo (véase *Modo de invierno*) |

> **Consejo**
>
> Los 4 modos se corresponden exactamente con los 4 botones de la pantalla de inicio de la aplicación Mammotion. Existen otros modos en el protocolo (línea de agua, personalizado), pero aún no están disponibles.

Se incluye un widget específico para el robot de piscina, con los 5 botones de control y la información principal.

# Modo de hibernación

Cuando se guarda un robot al final de la temporada, se apaga. El **modo de hibernación** pone este equipo en modo de reposo.

Cuando está activo:

- el **cron ignora el equipo**: ya no hay ninguna solicitud de actualización;
- los **comandos de control están bloqueados** y devuelven un mensaje explícito, incluso desde un escenario;
- el **equipo sigue siendo visible** en el panel de control y conserva su historial;
- El **demonio sigue funcionando** con normalidad para el resto de tus robots.

Este ajuste es **específico para cada equipo**: puedes preparar tu robot de piscina para el invierno sin dejar de cortar el césped.

## Cómo activarla

Tres opciones, todas ellas relacionadas con el mismo ajuste:

- la casilla **Modo de hibernación**, en la sección *Hibernación* de la página del equipo;
- el **icono de la barra de título del widget**: un copo de nieve cuando el robot está en modo estándar, un sol cuando está en modo de hibernación. Con un clic se cambia de un modo a otro;
- la acción **Activar el modo de invierno**, que se puede utilizar en un escenario.

El comando de información **Invernaje** indica el estado actual. Se registra en el historial, lo que permite consultar las fechas de inicio y fin del invernaje.

> **Consejo**
>
> El comando *Activar/desactivar el modo de invierno* invierte el estado: si se ejecuta dos veces, vuelve al estado inicial. En un escenario que automatice el modo de invierno, comprueba primero el comando de información **Modo de invierno** y solo ejecuta el comando de activación/desactivación si su valor es 0.

Al finalizar el modo de hibernación, los datos se actualizan en la siguiente ejecución de la tarea programada, o inmediatamente si haces clic en *Actualizar*.

# Preguntas frecuentes

**El demonio no se inicia**: comprueba el correo electrónico y la contraseña, y luego consulta el registro `mammotion_daemon`. Si hay algún error de dependencias, vuelve a instalarlas. El inicio puede tardar entre 30 y 60 segundos en una Raspberry Pi (carga de la biblioteca pymammotion).

**El modelo, el firmware o las zonas no se actualizan**: el robot debe estar accesible (el complemento lo consulta y lo activa si es necesario durante la sincronización). Haz clic en *Sincronizar*: las zonas aparecerán unos segundos después, una vez que se haya recibido realmente el mapa del robot.

**El campo «Coordenadas GPS» está vacío**: esto es normal tras reiniciar el demonio. El robot solo transmite su referencia de geolocalización (base RTK o fijación GNSS integrada para los modelos con visión/LiDAR) en determinados informes, normalmente cuando está activo. El campo se rellenará en cuanto el robot vuelva a estar activo. El complemento prefiere un valor vacío a unas coordenadas degeneradas (cercanas al punto 0,0 del globo terráqueo).

**Los datos no se transmiten en tiempo real**: el robot solo publica cuando está activo o cuando cambia su estado. Además, el cron fuerza una actualización periódica.

**Mi robot ya no se actualiza y sus botones no responden**: comprueba el icono de la barra de título del widget. Un sol indica que el dispositivo está en **modo de hibernación**: el cron lo ignora y sus comandos están bloqueados. Al hacer clic en el icono, volverá al modo estándar.

**Spino: el modo de limpieza muestra «Ninguno»**: este es el comportamiento normal en reposo. Un Spino en reposo no indica ningún modo activo en sus mensajes de estado. Consulta el comando **Estado** para saber si el robot está trabajando.

**Spino: ¿por qué no hay un botón de «Pausa»?**: el protocolo del robot no lo incluye. Para interrumpir un ciclo, utiliza *Parar y volver a la base de recarga*.

# Hoja de ruta y asistencia técnica

Este complemento irá evolucionando con el tiempo en función de vuestras peticiones y de las posibilidades que ofrezcan las API de Mammotion.

> **Consejo**
>
> Puedes enviar tu solicitud de mejora creando una incidencia de «mejora» en [GitHub](https://github.com/Xav-74/mammotion/issues/new).
> ¡No dudes en venir a compartir tus opiniones sobre este complemento en la comunidad de Jeedom!

En caso de fallo, puedes crear directamente un tema en la Comunidad desde la página principal del complemento. La información relevante de Jeedom y del complemento se añade automáticamente. ¡No dudes tampoco en copiar los registros de Mammotion (modo depuración) para una resolución más rápida!
