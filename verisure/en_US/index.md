---
layout: default
title: Verisure Plugin - Documentation
lang: en_US
pluginId: verisure
---

# Overview

This Jeedom plugin lets you interact with your Verisure Europe (Securitas Direct) alarm system just like the official “My Verisure” app.
It is compatible with three generations of Verisure devices.

**NOTE: THIS PLUGIN IS IN NO WAY ASSOCIATED WITH OR AFFILIATED WITH THE COMPANIES OF THE SECURITAS DIRECT - VERISURE GROUP.**

This plugin is intended for strictly personal and private use.
Consequently, the developer neither endorses nor condones any inappropriate use, and assumes no legal liability for the functionality or safety of your alarms and devices.

> **Tip**
>
> The **minimum version of Jeedom** required for the plugin to work properly is **version 4.4**
> The plugin is already compatible with **version 4.6** of Jeedom as well as **Debian 12**

# Principle

This plugin interacts with the Verisure APIs via the cloud; therefore, **this plugin requires an Internet connection**.
You must also have a Verisure service subscription. This plugin communicates with your alarm system’s control panel only through Verisure’s cloud infrastructure. It does not interact directly with the control panel or with the associated devices. If your subscription has been canceled, this plugin will not work.

# Plugin Configuration

After downloading the plugin, simply activate it. If you have a Type 1 or Type 3 alarm, you can enable (and disable) a custom cron job to refresh your alarm’s information based on the history of actions. Be sure to enable this option in your device’s settings.

> **Tip**
>
> To make it easier to request remote assistance, we recommend setting the logs to **debug mode**.

![Setup](../images/Config_verisure.png)

# Adding an Alarm

You can configure the Alarm devices from the Plugin > Security menu.

![Add Alarm](../images/Plugin_verisure.png)

Click the Add command to create a new alarm. Once added, you'll see:

- **Device Name**: Name of your alarm
- **Parent object**: Specifies the parent object to which the device belongs
- **Category**: the category of the equipment (general security for an alarm)
- **Activate**: turns your device active
- **Visible**: Makes your devices visible on the dashboard
- **Alarm Type**: Select your alarm type (Type 1 = Southern Europe (France, Spain, etc.) / Type 2 = Northern Europe (Belgium, UK, etc.) / Type 3 = New Generation (since 2022))
- **Installation Number** (Alarm Types 1 & 3): Enter your Verisure installation number. **Important! This number must match exactly the one displayed in your My Verisure app. If your installation number starts with a 0 but that 0 does not appear in the app, remove it!**
- **Username** (alarm types 1, 2, and 3): Enter the Verisure username you use to log in to the website [https://customers.securitasdirect.fr](https://customers.securitasdirect.fr) or [https://mypages.verisure.com/](https://mypages.verisure.com)
- **Password** (alarm types 1, 2, and 3): Enter your password
- **Alarm Code** (type 2 alarm): Enter your alarm's PIN (4 or 6 digits)
- **Country** (Alarm Types 1 & 3): Select the country where your alarm is installed (currently supported countries: France, Spain, Great Britain, Italy, Portugal). For Type 2 alarms, the country is selected automatically (currently supported countries: Belgium, the Netherlands, Germany, Great Britain, Denmark, Finland, Norway, Sweden)
- **Options** (Alarm Types 1 & 3): Depending on your alarm type, you can select the following options:
  - **Refresh via History** (Alarm Types 1 & 3): Allows you to update alarm statuses based on the history of actions. Be sure to set up and enable the cron job in the plugin's configuration.
    - **Outdoor Alarm** (Type 3 alarm): Check this box if you have outdoor motion detectors and if outdoor mode is enabled on your alarm system
    - **Forced Arming** (Type 3 alarm): allows you to force the alarm to activate even if a door or window has been left open. Use at your own risk!

Then simply click the **Authentication** button to retrieve your alarm system's information. If everything goes well, you'll see a table listing all the devices installed in your home (ID, name, and type).

**Important**: We strongly recommend creating a dedicated user for Jeedom in your Verisure account with "administrator" privileges. The plugin supports multi-factor authentication (MFA) for Type 1 alarms. This also applies to Type 2 alarms, but it is recommended that you disable this option for now, as the token refresh process is very restrictive. If you encounter connection issues, the **Delete Token** button allows you to delete the stored cookies and restart the authentication process from the beginning.

> **Tip**
>
> Don't forget to **save** your information!
> When you save, new commands will be created on the device.

![Equipment](../images/Eqpt_verisure.png)

# Activity Log

You can view your alarm system's activity log by clicking the **Activity Log** button. This report lists the most recent events that have occurred on your control panel (intrusion alerts, SOS alerts, arming/disarming, power outages).

![Journal](../images/journal_verisure.png)

# Verisure Notifications

Verisure APIs do not support direct, automatic information feeds or notifications, such as arming or disarming the system using a key fob or remote control, or triggering the alarm.
This tab provides detailed instructions on how to configure Jeedom (scenarios) to address this shortcoming for:

- **Email notifications** for arming/disarming the alarm via Lunarok’s [Mail Listener](https://www.jeedom.com/market/index.php?v=d&p=market&author=Lunarok&&name=maillistener) plugin!
- **SMS notifications** for arming/disarming the alarm via the [SMS](https://www.jeedom.com/market/index.php?v=d&p=market_display&id=16) plugin from Jeedom SAS!

# Commands

There are currently several commands, which are described below.

## Info

- **Activation Status**: allows you to check the alarm's activation status
  - **0**: disarmed
  - **1**: armed
- **Alarm Status**: shows the status of the alarm
  - **0**: normal status
  - **1**: Alarm triggered
- **Alarm Mode**: shows how the alarm is activated
  - **Full Mode**: The alarm is activated in full mode (alarm types 1, 2, and 3)
  - **Night Mode**: The alarm is activated in night mode (type 1 alarm)
  - **Day Mode**: The alarm is activated in Day Mode (type 1 alarm)
  - **Away Mode**: The alarm is activated in Away Mode (type 1 alarm)
  - **Partial mode**: The alarm is activated in partial mode (alarm types 2 & 3)
- **Network Quality**: Estimates the quality of the 3G/4G network for type 1 & 3 alarms (based on the results of the last 25 requests)

**Note**: In this version, the event related to the alarm triggering is not yet supported!

## Action

- **Full Mode**: Makes the alarm active in full mode (alarm types 1, 2, and 3)
- **Night Mode**: Makes the alarm active in night mode (type 1 alarm)
- **Day Mode**: Makes the day mode alarm active (type 1 alarm)
- **Away Mode**: Makes the alarm active in away mode (type 1 alarm)
- **Partial Mode**: Activates the alarm in partial mode (type 2 & 3 alarms)
- **Deactivation**: Deactivates the alarm, regardless of the mode (alarm types 1, 2, and 3)
- **Refresh**: Updates the alarm status (alarm types 1, 2, and 3)
- **Request Images**: Triggers a photo to be taken by a compatible motion detector and displays it on the screen (alarm types 1, 2, and 3)

> **Tip**
>
> When an image is requested, the photo is saved and stored in the **/verisure/data/** directory. Be sure to clear out the directory from time to time!

![Commands](../images/Command_verisure.png)

## Homebridge compatibility

The commands have been designed to be natively compatible with Nebz's [Homebridge](https://www.jeedom.com/market/index.php?v=d&p=market&author=Nebz&&name=Homebridge) plugin! (Thanks to him for his help.)

Therefore, there is no specific configuration required in the Homebridge plugin.
In HomeKit, the alarm feature is managed in four modes: “Off,” “Night,” “Away,” and “Home.”

![HomeKit](../images/homekit.png)

The mode mappings are as follows:

- **Home**  --> Day Mode / Partial Mode
- **Remote** --> Full Mode
- **Night**   --> Night Mode
- **Disabled** --> Disabling

Other modes (Outdoor, etc.) are not supported by HomeKit.

## Type 2 alarm devices

For Type 2 alarms (**and only Type 2!**), the plugin will create the commands associated with the alarm's devices:

- **Smart plug** --> status / on / off
- **Compatible sensors** --> temperature / humidity
- **Open/Closed Sensor**  --> status (open / closed)

By default, commands are not displayed on the widget. The goal is to then create a virtual device for each sensor. This will allow you to retrieve information on the status (open/closed), temperature, and humidity from the various sensors, or even remotely control Versiure-connected outlets from Jeedom.

> **Tip**
>
>Please note that statuses are not updated in real time (currently impossible due to Versiure). You will need to refresh the alarm status via a scenario to update them or wait for the cron30. The ability to customize the cron interval (5, 10, 15, 30...) will be available in a future update. **Be careful, however, not to send too many requests to the Verisure servers, or you risk being blacklisted.**

## Type 3 alarm devices

For Type 3 alarms (**and only Type 3!**), the plugin will create the commands associated with the alarm's devices:

- **Smart lock** --> status / open / closed

# Dashboard

The plugin includes a dashboard that allows you to:

- Check the alarm status (type 1, 2, and 3 alarms)
- Check the alarm status (type 1, 2, and 3 alarms)
- Check the alarm mode (type 1, 2, and 3 alarms)
- Check the status of the smart lock (type 3 alarm)
- Enable full alarm mode (alarm types 1, 2, and 3)
- Enable night mode for the alarm (type 1 alarm)
- Enable the alarm's day mode (type 1 alarm)
- Activate the outdoor alarm mode (type 1 alarm)
- Enable partial alarm mode (alarm types 2 & 3)
- Disable the alarm (alarm types 1, 2, and 3)
- Refresh the alarm status (alarm types 1, 2, and 3)
- Open/close the smart lock (type 3 alarm)
- Request a photo to be taken by a compatible motion sensor (Alarm Types 1, 2, & 3)
- Display information about certain devices, such as temperature, humidity, or whether a door or window is open (**!!! ONLY type 2 alarms !!!**)
- Display the 3G/4G network quality level for the alarm (alarm types 1 & 3)
  - 5-bar icon: no errors in the last 25 queries
    - 4-bar icon: 1 to 2 failed requests out of the last 25
    - 3-bar icon: 3 to 7 failed requests out of the last 25
    - 2-bar icon: 8 to 17 failed requests out of the last 25
    - 1-bar icon: 18 to 24 failed requests out of the last 25
    - 0-bar icon: 25 failed requests out of the last 25

**Please note**: Commands may sometimes take several seconds to process (between 15 and 25 seconds, or even more than a minute for photo requests). This depends on the quality of the 3G or 4G connection at your alarm base station. So please be patient!

![Dashboard Type 1](../images/Dashboard_verisure.png)
![Dashboard Type 2](../images/Dashboard_verisure_2.png)
![Dashboard Type 3](../images/Dashboard_verisure_3.png)

# Refresh

## Automatic

A CRON job is automatically created with a 30-minute interval, as specified in the plugin's configuration.
**Please note**: This 30-minute value may change based on user feedback and requests, as well as the number of requests Verisure allows per hour on its servers!

## Manual

You can use the **Refresh** command at any time to refresh the alarm status.

# Roadmap & Support

This plugin will evolve over time based on your requests and the capabilities of the Versiure APIs.

> **Tip**
>
>You can submit your request by creating an "enhancement" pull request [on GitHub](https://github.com/Xav-74/verisure/issues/new).
>Feel free to join the discussion about this plugin on the Jeedom Community!

If a problem occurs, you can create a thread directly on the Community from the plugin’s main page. Relevant information from Jeedom and the plugin is automatically included. Feel free to copy the Verisure logs (debug mode) as well to help resolve the issue more quickly!

![Community](../images/community.png)
