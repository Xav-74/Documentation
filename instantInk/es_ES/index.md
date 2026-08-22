---
layout: default
title: Complemento HP instantInk - Documentación
lang: es_ES
pluginId: instantInk
---

# Presentación

Este complemento te permite recuperar la información de tu suscripción a InstantInk y de tus impresoras HP.

> **Consejo**
>
> La **versión mínima de Jeedom** necesaria para que el complemento funcione correctamente es la **versión 4.4**
> El complemento es compatible con las **versiones Debian 11 y 12**


# Instalación

El complemento se instala como cualquier otro complemento en Jeedom, a través del Market.


# Configuración

1. Una vez instalado y activado, en la página de configuración debes introducir un token **sessionId**
2. Abre [portal.hpsmart.com](https://portal.hpsmart.com) en tu navegador e inicia sesión
3. Pulsa **F12** para abrir DevTools
4. Ve a la pestaña **Aplicaciones** (Chrome) o **Almacenamiento** (Firefox)
5. En el panel lateral: **Cookies → https://portal.hpsmart.com**
6. Busca la cookie **shell-session-id** y copia su valor completo
7. Pégalo en el campo correspondiente y haz clic en **Iniciar sesión**
<br/>Este token tiene una validez de 90 días. Jeedom te avisará cuando sea necesario renovarlo manualmente.
8. Si tienes algún problema con la conexión, puedes eliminar los tokens que hayas obtenido previamente pulsando el botón **Eliminar tokens**
9. Introduce los parámetros opcionales del plugin:
 - Cron personalizado (valor recomendado: 1 h como mínimo)
10. Guardar

<br/>![Configuración de InstantInk](../images/config_instantInk.png)<br/>

> **Consejo**
>
> Para facilitar la solicitud de asistencia remota, se recomienda configurar los registros en **modo depuración**.


# Uso
1. Inicia el complemento que se encuentra en la categoría **Dispositivos conectados** del menú **Complementos**
2. Haz clic en el botón **Sincronizar**
3. Tu impresora aparece en la lista
4. Haz clic en el icono de tu impresora e introduce su dirección IP en el campo correspondiente
5. Guardar

<br/>![Equipo InstantInk](../images/eqt_instantInk.png)<br/>


# Controles

Actualmente existen varios comandos que se describen a continuación.

## Información

- **Número de páginas del plano**: el número de páginas incluidas en tu tarifa
- **Número máximo de páginas del informe**: el número máximo de páginas que se transfieren de un periodo a otro
- **Precio del plan**: el precio mensual de tu tarifa
- **Número máximo de páginas adicionales en la tarifa**: el número máximo de páginas permitidas en modo fuera de la tarifa
- **Periodo**: el periodo actual de la tarifa plana
- **Número de páginas impresas en el periodo**: el número de páginas impresas durante el periodo
- **Número de páginas impresas en el periodo**: el número de páginas impresas durante el periodo
- **Número máximo de páginas aplazadas en el periodo**: el número de páginas aplazadas durante el periodo
- **Número de páginas adicionales impresas en el periodo**: el número de páginas impresas fuera de la tarifa plana durante el periodo
- **Precio del periodo**: el precio actual del periodo
- **Estado del cartucho negro**: el nivel actual de tinta del cartucho negro (%)
- **Estado del cartucho de cian**: nivel actual de tinta del cartucho de cian (%)
- **Estado del cartucho magenta**: nivel actual de tinta del cartucho magenta (%)
- **Estado del cartucho amarillo**: nivel actual de tinta del cartucho amarillo (%)
- **Última actualización**: fecha y hora de la última actualización de la información
- **Historial**: toda la información sobre la tarifa (facturas impresas y precios) de los últimos 12 meses

> **Consejo**
>
>Si no quieres que aparezca el historial en el widget, solo tienes que desmarcar la casilla **Mostrar** de este comando.

## Acción

- **Actualizar**: actualiza toda la información de la impresora y del plan de tarifas
- **Consultar el historial**: permite consultar el historial de la tarifa de los últimos 12 meses


# Panel de control

El complemento incluye un widget personalizado que permite mostrar toda la información sobre el plan y la impresora.

![widget](../images/widget_instantInk.png)

Tienes la posibilidad de actualizar la información (icono <i class="fas fa-sync" style="width:15px; height:15px"></i>) o el historial (icono <i class="far fa-chart-bar" style="width:15px; height:15px"></i>) directamente desde el widget.


# Actualización

## Automático

Tal y como se indica en la página de configuración del complemento:
- Se crea automáticamente una **tarea CRON diaria** (a las 00:00) para actualizar el historial de la tarifa plana
- Se crea automáticamente una **tarea CRON personalizada** para recuperar la información del plan y de la impresora (se recomienda un mínimo de 1 hora).

## Manual

Puede utilizar en cualquier momento el comando **Actualizar** o el comando **Obtener historial** para actualizar la información del plan y de la impresora.


# Hoja de ruta y asistencia técnica

Este complemento irá evolucionando con el tiempo en función de vuestras peticiones y de las posibilidades que ofrezcan las API de instantInk.

Las próximas versiones incluirán las siguientes funciones:
- ...

> **Consejo**
>
>Puedes enviar tu solicitud de mejora creando una incidencia de «mejora» en [GitHub](https://github.com/Xav-74/instantInk/issues/new).
>¡No dudes en venir a compartir tus opiniones sobre este complemento en la comunidad de Jeedom!

En caso de fallo, puedes crear directamente un tema en la comunidad desde la página principal del complemento. La información relevante de Jeedom y del complemento se añade automáticamente. ¡No dudes en copiar también los registros de instantInk (modo depuración) para una resolución más rápida!

![Comunidad](../images/community.png)
