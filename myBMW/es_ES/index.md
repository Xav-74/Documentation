---
layout: default
title: Complemento My BMW - Documentación
lang: es_ES
pluginId: myBMW
---

# Presentación

Este complemento te permite interactuar con tu vehículo **BMW** o **Mini** equipado con los servicios Connected Drive, al igual que la aplicación oficial «My BMW» o «Mini».

> **Consejo**
>
> La **versión mínima de Jeedom** necesaria para que el complemento funcione correctamente es la **versión 4.2**
>
> El complemento ya es compatible con la **versión 4.5** de Jeedom, así como con las **versiones Debian 11 y 12**.

# Principio

Este complemento interactúa con las **API oficiales de BMW Connected Drive** a través de la nube, por lo que **necesita conexión a Internet**.

También es necesario disponer de una suscripción válida a los servicios de BMW Connected Drive para tu vehículo, así como de una cuenta de usuario **principal** válida para la aplicación «My BMW» o «Mini».

# Configuración de tu cuenta de usuario de BMW o Mini

Antes de poder utilizar el complemento, debes configurar tu cuenta de usuario de BMW. Sigue al pie de la letra los siguientes pasos:

1. Inicia sesión en el portal **[BMW ConnectedDrive](https://www.bmw.fr/fr-fr/mybmw/vehicle-overview)** o **[Mini ConnectedDrive](https://www.mini.fr/fr-fr/mymini/vehicle-overview)**
2. Haz clic en el icono **BMW CarData**

![CarData](../images/CarData_section.png)

3. Haz clic en el botón **«Crear un cliente CarData»**
4. ¡Anota **el ID de cliente** en un lugar seguro!
5. Espera **30 segundos**
6. Haz clic en **«Solicitar acceso a la API de CarData»**
7. Espera **30 segundos** (si el interruptor no vuelve a la posición «off» y no aparece ningún mensaje de error, puedes continuar; de lo contrario, debes repetir este paso)
8. Haz clic en **«CarData Streaming»**
9. Espera **30 segundos** (si el interruptor no vuelve a la posición «off» y no aparece ningún mensaje de error, puedes continuar; de lo contrario, debes repetir este paso)

![CarData](../images/CarData_clientID.png)

10. Ve a la sección **CarData Stream**
11. Comprueba que el estado de la conexión sea **«ready»**.

![CarData](../images/CarData_stream.png)

12. Haz clic en el botón **«Modificar la selección de datos»**
13. Selecciona **«Todas las categorías»** (Estado del vehículo, Carga, Datos del viaje, etc.) y, a continuación, haz clic varias veces en el botón **Cargar** para mostrar todos los atributos
14. Selecciona **manualmente** los 244 atributos individuales o pulsa F12 para acceder a la **consola de desarrollador** y escribe: (no se puede copiar y pegar)

    ```js
    document.querySelectorAll('label.chakra-checkbox:not([data-checked])').forEach(l => l.click());
    ```

15. A continuación, **guarda** tu configuración
16. ¡Anota **el nombre de usuario** en un lugar seguro!

> **Importante**
>
> Es importante que todos los atributos estén marcados para recibir todos los datos del vehículo.

# Configuración del complemento

Una vez descargado el complemento, solo tienes que activarlo y, a continuación, configurar el ID de cliente y el nombre de usuario obtenidos en el paso anterior. Deja los demás campos en blanco, salvo que el desarrollador lo indique expresamente.
A continuación, espera a que finalice la instalación de los paquetes dependientes y se inicie el demonio.

> **Consejo**
>
> Para facilitar la solicitud de asistencia remota, se recomienda configurar los registros en **modo depuración**.

![Configuración](../images/Config_myBMW.png)

# Añadir un vehículo

Se puede acceder a la configuración de los dispositivos MyBMW desde el menú «Plugin» > «Dispositivos conectados».

![Añadir vehículo](../images/Plugin_myBMW.png)

Haz clic en el botón «Añadir» para crear un nuevo vehículo. Una vez añadido, aparecerá lo siguiente:

| Campo | Descripción |
|---|---|
| **Nombre del equipo** | nombre de tu vehículo |
| **Objeto principal** | indica el objeto principal al que pertenece el equipo |
| **Categoría** | la categoría del equipo |
| **Activar** | permite activar tu equipo |
| **Visible** | hace que tu equipo sea visible en el panel de control |
| **Marca** | indica la marca de tu vehículo (BMW o Mini) |
| **VIN** | Indica el número VIN o Vehicle Identification Number (número de identificación del vehículo). Encontrarás este número en la casilla E de tu permiso de circulación. Este número consta de 17 caracteres. |
| **Visualización del estado de puertas y ventanas** | Puede elegir entre dos opciones para visualizar el estado de las puertas y ventanas en el panel: el modo de texto o el modo de iconos. |
| **Color de los iconos de puertas y ventanas** | Si has elegido el modo de iconos, también puedes decidir el color de los mismos (verde o blanco y negro). |
| **Domicilio (presencia)** | Dispones de tres opciones para indicar las coordenadas GPS de tu domicilio: bien utilizando las coordenadas introducidas en Jeedom, bien utilizando las coordenadas actuales del vehículo, bien introduciendo manualmente la latitud y la longitud. |
| **Distancia máxima (en m)** | Indica la distancia máxima en metros entre tu domicilio y el vehículo para que este se considere presente en tu domicilio. |

A continuación, solo tienes que hacer clic en el botón **Autenticación** para recuperar la información de tu vehículo (si está disponible, obtendrás el modelo, el año, el tipo de motor y una imagen de tu vehículo). Se abrirá una ventana emergente **(tenga cuidado con el bloqueador de su navegador; desactívelo si es necesario)** para que se autentifique con el correo electrónico y la contraseña de su cuenta BMW. Dispone de 5 minutos para hacerlo y, al finalizar, debería recibir un mensaje que indique **«Conexión realizada con éxito»**.

> **Consejo**
>
> ¡No te olvides de **guardar** tus datos!
>
> Al guardar, se crearán nuevos comandos en el equipo.

![Equipamiento](../images/Eqpt_myBMW.png)

# Datos sin procesar

Para facilitar la depuración en caso de problemas, tienes la posibilidad de recuperar los datos sin procesar de tu vehículo haciendo clic en el botón **Datos sin procesar**. ¡Ojo, antes de copiarlos en el foro, por ejemplo, recuerda ocultar la información confidencial, como el número de chasis!

# Controles

Actualmente existen varios comandos que se describen a continuación.

> **Consejo**
>
> Si el comando devuelve «not available», significa que la información correspondiente no está disponible en tu vehículo.

## Información

| Control | Descripción |
|---|---|
| **Marca** | |
| **Modelo** | |
| **Año** | |
| **Tipo** | eléctrico, térmico o híbrido |
| **Kilometraje** | kilometraje total del vehículo |
| **Bloqueo** | muestra el estado de bloqueo del vehículo |
| **Estado de la puerta del conductor delantero** | |
| **Estado de la puerta del conductor trasero** | |
| **Estado de la puerta del acompañante** | |
| **Estado de la puerta del acompañante trasero** | |
| **Estado de todas las puertas** | |
| **Estado de la ventanilla del conductor delantero** | |
| **Estado de la ventanilla del conductor trasero** | |
| **Estado de la ventanilla del acompañante** | |
| **Estado de la ventanilla del acompañante** | |
| **Estado de todas las ventanas** | |
| **Estado de la caja fuerte** | |
| **Estado de la cubierta del motor** | |
| **Estado del techo corredizo** | |
| **Presión del neumático delantero izquierdo** | |
| **Instrucciones para el inflado del neumático delantero izquierdo** | |
| **Presión del neumático delantero derecho** | |
| **Instrucciones para el inflado del neumático delantero derecho** | |
| **Presión del neumático trasero izquierdo** | |
| **Instrucciones para inflar el neumático trasero izquierdo** | |
| **Presión del neumático trasero derecho** | |
| **Instrucciones para inflar el neumático trasero derecho** | |
| **Estado de la carga** | solo en vehículos eléctricos o híbridos |
| **Estado de la toma** | solo en vehículos eléctricos o híbridos |
| **Hora de finalización de la recarga** | solo en vehículos eléctricos o híbridos |
| **Carga restante** | solo en vehículos eléctricos o híbridos |
| **Km restantes (eléctricos)** | motor eléctrico y/o híbrido |
| **Combustible restante** | solo en vehículos de combustión o híbridos |
| **Km restantes (motor térmico)** | motor térmico |
| **Mensajes** | muestra los mensajes que aparecen en el vehículo (control y servicios) |
| **Sesiones de carga** | muestra las estadísticas de carga eléctrica de las baterías durante el mes en curso (solo en vehículos eléctricos o híbridos) |
| **Carga eléctrica total** | indica la carga eléctrica total consumida durante el mes en curso (solo en vehículos eléctricos o híbridos) |
| **Coste eléctrico total** | indica el coste mensual de los gastos de electricidad |
| **Objetivo de recarga** | indica el objetivo de recarga eléctrica configurado para el vehículo (en %) |
| **Límite de corriente de carga** | indica el límite de la corriente de carga utilizada cuando el vehículo está conectado |
| **Limitación de la corriente de carga** | proporciona información sobre si está activada o no una limitación de la corriente de carga en el vehículo |
| **Coordenadas GPS** | indica la posición del vehículo en formato «latitud, longitud» |
| **Última actualización** | indica la fecha y la hora de la última conexión entre el coche y los servidores de BMW |
| **Estado de desbloqueo** | devuelve el último estado recibido tras una solicitud de desbloqueo. Si la acción se ha realizado correctamente, el estado pasa de «PENDING» a «EXECUTED». De lo contrario, devuelve «ERROR» |
| **Estado: Bloqueado** | |
| **Estado: Cargando** | |
| **Estado: Carga detenida** | |
| **Estado Ventilar** | |
| **Estado «Detener ventilación»** | |
| **Estado: Luz de cruce** | |
| **Estado de la sirena** | |
| **Estado Buscar** | |
| **Estado del envío del POI** | |
| **Presencia en el domicilio** | indica si tu vehículo se encuentra en tu domicilio (1 = presente, 0 = ausente) en función de la distancia máxima indicada |
| **Distancia a casa** | indica la distancia (en metros o kilómetros) entre el vehículo y tu domicilio |

## Acción

| Control | Descripción |
|---|---|
| **Actualizar** | actualiza toda la información del vehículo |
| **Bloquear** | permite bloquear el coche a distancia |
| **Desbloquear** | permite desbloquear el coche a distancia |
| **Cargar** | permite iniciar la carga del vehículo |
| **Detener la recarga** | permite detener la recarga del vehículo |
| **Ventilación (Inicio)** | permite poner en marcha el sistema de ventilación a la temperatura ajustada en el vehículo |
| **Ventilación (Parar)** | permite detener el sistema de ventilación a la temperatura ajustada en el vehículo |
| **Luz de emergencia** | activa la luz de emergencia |
| **Hacer sonar la bocina** | activa una señal acústica |
| **Buscar** | localiza el vehículo en tiempo real y lo muestra en un mapa de Google Maps |
| **Envío de POI** | envío de un punto de interés (POI) al centro de mensajes del vehículo introduciendo el nombre, la latitud y la longitud del lugar |

> **Atención**
>
> Por el momento, solo está operativa la función **Actualizar**. ¡El resto de acciones volverán a estar operativas cuando las API de BMW lo permitan!

# Panel de control

El complemento incluye un widget personalizado que permite mostrar toda la información esencial del vehículo.

![Widget myBMW](../images/Widget_myBMW.png)

# Panel

Si has marcado la opción **Mostrar el panel de escritorio** en la página de configuración del complemento, podrás ver un panel dedicado a tu vehículo que reúne toda la información disponible en este complemento. Se puede acceder a él a través del menú **Inicio \ Mi BMW**

![Panel myBMW](../images/Panel_myBMW_1.png)

![Panel myBMW](../images/Panel_myBMW_2.png)

> **Consejo**
>
> Para que se muestren los gráficos, no olvides marcar la opción **Historial** en los tres controles siguientes: Kilometraje, Carga restante y Combustible restante.

# Actualización

## Automático

¡Gracias al flujo MQTT, recibirás la mayor parte de la información de tu vehículo en tiempo real (kilometraje, combustible, batería, estado de cierre del vehículo, de las puertas y ventanas, ubicación, etc.)!

También se crea una tarea CRON personalizable (cada 2 horas, 5 minutos después de la hora) para recuperar la información que no se puede transmitir en tiempo real (mensajes de control, de servicios, historial de carga). ¡Cuidado, no aumentes demasiado esta frecuencia, ya que podrías superar los límites de solicitudes permitidos por BMW (50 al día)!

## Manual

Puede utilizar en cualquier momento el comando **Actualizar** para obtener el estado de los vehículos.

> **Atención**
>
> BMW solo permite 50 solicitudes al día, así que no actualices manualmente con demasiada frecuencia (el CRON actual utiliza 24 solicitudes al día), ya que corres el riesgo de que te bloqueen hasta el día siguiente.

# Hoja de ruta y asistencia técnica

Este complemento irá evolucionando con el tiempo en función de vuestras peticiones y de las posibilidades que ofrezcan las API de BMW Connected Drive.

Las próximas versiones incluirán las siguientes funciones:

- Incorporación de nuevas funcionalidades en función de las posibilidades que ofrecen las API
- Traducción del complemento al inglés
- ...

> **Consejo**
>
> Puedes enviar tu solicitud de mejora creando una incidencia de «mejora» en [GitHub](https://github.com/Xav-74/myBMW/issues/new).
>
> ¡No dudes en venir a compartir tus opiniones sobre este complemento en la comunidad de Jeedom!

En caso de fallo, puedes crear directamente un tema en la Comunidad desde la página principal del complemento. La información útil de Jeedom y del complemento se añade automáticamente. ¡No dudes tampoco en copiar los registros de myBMW, myBMW_daemon y myBMW_update (modo de depuración) para una resolución más rápida!

![Comunidad](../images/community.png)
