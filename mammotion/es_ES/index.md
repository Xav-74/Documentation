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

Los dispositivos se crean **automáticamente**:

- Al iniciar el demonio, se recupera la lista de robots de la cuenta y se crean los dispositivos que faltan
- El botón **Sincronizar** de la página del complemento fuerza una nueva detección, actualiza los estados y recupera la **lista de zonas** de corte y la lista de **actividades**.

# Controles

## Instrucciones de uso (cortacésped)

| Control | Descripción |
| -------- | ----------- |
| En línea | Robot conectado a la nube |
| Batería | Nivel de batería (%) |
| Cargando | Carga en curso |
| Estado | Modo de funcionamiento (MODE_WORKING, MODE_CHARGING, ...) |
| Avance | Avance de la tarea en curso (%) |
| Superficie segada | Superficie segada en la sesión (m²) |
| Tiempo restante / transcurrido | Estimación en minutos de la tarea en curso |
| Altura de la cuchilla | Altura de corte habitual (mm) |
| Lamas activas | Rotación de las lamas |
| Detección de lluvia | Sensor de lluvia activo |
| Coordenadas GPS | Posición `latitud,longitud` (vacío hasta que el robot haya transmitido su referencia GNSS; véase la sección de preguntas frecuentes) |
| Orientación | Rumbo del robot (°) |
| Señal wifi | RSSI wifi (dBm) |
| Desgaste de las cuchillas | Tiempo de uso de las cuchillas (h) |
| Distancia total | Distancia recorrida desde la puesta en servicio (km) |
| Tiempo total de trabajo | Tiempo acumulado de trabajo (h) |
| Ciclos de la batería | Número de ciclos de la batería |
| Firmware | Versión del firmware |
| Errores | Códigos de error activos |
| Conexión | Tipo de conexión del robot (Wi-Fi, 3G/4G, BLE) |
| Último evento | Registro de eventos (inicio del corte, regreso a la base, carga, actualización...). Historial: consulta el historial del pedido para ver el registro completo |
| Última actualización | Fecha y hora de los últimos datos recibidos |

## Comandos de acción (cortacésped)

| Control | Descripción |
| -------- | ----------- |
| Actualizar | Forzar una actualización del estado |
| Iniciar | Iniciar/reanudar la tarea programada |
| Pausa | Pone la tarea en pausa |
| Reanudar | Reanuda la tarea en pausa |
| Cancelar la tarea | Cancela la tarea en curso |
| Volver a la estación | Devuelve el robot a su estación |
| Salir de la estación | Hace que el robot salga de su estación |
| Ajustar la altura de la lama | Deslizador de 25 a 70 mm (no disponible en la gama Yuka, como en Home Assistant) |
| Ajustar velocidad | Control deslizante de 20 a 60 cm/s (no disponible en la gama Yuka) |
| Cortar una zona | Inicia el corte de la zona seleccionada (lista generada mediante sincronización) |

## Robot para piscinas (Spino)

La compatibilidad con los robots de piscina es más limitada en la versión 1: información de estado (en línea, batería, estado, velocidad) y comandos básicos (iniciar / pausar / cancelar / volver).

# Preguntas frecuentes

**El demonio no se inicia**: comprueba el correo electrónico y la contraseña, y luego consulta el registro `mammotion_daemon`. Si hay algún error de dependencias, vuelve a instalarlas. El inicio puede tardar entre 30 y 60 segundos en una Raspberry Pi (carga de la biblioteca pymammotion).

**El modelo, el firmware o las zonas no se actualizan**: el robot debe estar accesible (el complemento lo consulta y lo activa si es necesario durante la sincronización). Haz clic en *Sincronizar*: las zonas aparecerán unos segundos después, una vez que se haya recibido realmente el mapa del robot.

**El campo «Coordenadas GPS» está vacío**: esto es normal tras reiniciar el demonio. El robot solo transmite su referencia de geolocalización (base RTK o fijación GNSS integrada para los modelos con visión/LiDAR) en determinados informes, normalmente cuando está activo. El campo se rellenará en cuanto el robot vuelva a estar activo. El complemento prefiere un valor vacío a unas coordenadas degeneradas (cercanas al punto 0,0 del globo terráqueo).

**Los datos no se transmiten en tiempo real**: el robot solo publica cuando está activo o cuando cambia su estado. Además, el cron fuerza una actualización periódica.

# Hoja de ruta y asistencia técnica

Este complemento irá evolucionando con el tiempo en función de vuestras peticiones y de las posibilidades que ofrezcan las API de Mammotion.

> **Consejo**
>
> Puedes enviar tu solicitud de mejora creando una incidencia de «mejora» en [GitHub](https://github.com/Xav-74/mammotion/issues/new).
> ¡No dudes en venir a compartir tus opiniones sobre este complemento en la comunidad de Jeedom!

En caso de fallo, puedes crear directamente un tema en la Comunidad desde la página principal del complemento. La información relevante de Jeedom y del complemento se añade automáticamente. ¡No dudes tampoco en copiar los registros de Mammotion (modo depuración) para una resolución más rápida!
