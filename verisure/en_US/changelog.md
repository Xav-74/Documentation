---
layout: default
title: Verisure Plugin - Changelog
lang: en_US
pluginId: verisure
---

# Important—please read!

**Below are the release notes, additions, and fixes for each version of the plugin**

**Note**: If an update is not listed here, it is because it contains only minor changes of the type documentation updates or minor bug fixes.

# 2026-08-11

What's New:

- Translation of the plugin into 5 languages (EN, DE, ES, PT, IT)
- Switching log entries to English
- Updating widgets as part of a effort to standardize all my plugins

Please note: Starting with this version, the minimum required version of Jeedom is v4.4, and Debian 11!

# 2026-05-31

Icon update as part of a standardization effort for all my plugins

# 2026-02-22

Added the following features:

- Support for QP outdoor motion detectors (type 3)
- Support for outdoor mode (type 3)
- Added refresh via history (types 1 & 3)
- Support for "forced mode" (type 3)
- Support for water detectors (type 2)

The following corrections:

- Bug fix for smart lock (type 3)
- Bug fix for login request (type 2)
- Bug fix for sensor name display in widget (type 2)

# 2024-12-31

Added the following features:

- Support for smart locks in the latest generation of alarms (type 3)
- Code optimization (creating commands)

# 2024-12-13

The following corrections:

- Fixed a bug in the "getPhotos" request for the latest-generation alarms (type 3)

# 2024-12-08

The following corrections:

- Fixed an error with the "logout" request
- Code optimization for PHP 8.0

# 2024-02-09

Added the following features:

- Added the alarm image to the thumbnails on the plugin page

The following corrections:

- Update to the button for automatically creating a post on the Jeedom Community (vCore Jeedom 4.4 mini)
- Update to the plugin's screenshots

# 2024-01-17

The following corrections:

- Alarm Types 1 & 3: Fix following changes to the Verisure APIs and the appearance of the error "Required request header 'x-installationNumber' not present"

# 2024-01-07

Added the following features:

- Official compatibility with type 3 alarms
- End of support for Jeedom 3.x versions. The minimum core version required for the plugin to function properly is 4.0.

# 2023-11-19

Added the following features:

- Jeedom v4.4 Compatibility with Debian 12 and PHP 8.x
- Added a button to automatically create a post on the Jeedom Community (vCore Jeedom 4.4 mini)

# 2023-09-11

The following corrections:

- Displaying the widget on a smartphone or tablet in desktop mode

# 2023-05-29

Added the following features:

- Toggle to show or hide passwords

The following corrections:

- Alarm Type 2: Creating "Humidity" information commands for smoke detectors

# 2023-05-22

Code and Log Optimization

The following corrections:

- Type 1 Alert: Fixed a bug in the GetPictures function following changes to the APIs
- Alarm Type 2: Automatically switches to the secondary server if the primary is down, but still accepts logins

# 2023-04-11

Fixes following changes to the Verisure APIs (MFA authentication and requests—migration from REST API to GraphQL). Please note that this is a **major** update. You will need to re-authenticate for each alarm created (types 1 & 2).

Added the following features:

- Support for the new generation of alarms (via type 1 for now)
- Widget redesign (Jeedom Core v4.4 compatibility)

# 2022-10-18

Added the following features:

- New display for the equipment command table (compatible with Jeedom Core v4.3)
- Redesign of the "Equipment" page

# 2022-04-24

Added the following features:

- Image requests for Type 2 alarms

The following corrections:

- Automatically adjusts the widget's height if there are multiple alarms on the dashboard
- Fixed a bug in the SetEqLogic() function

# 2022-02-02

The following corrections:

- Fixed a display bug with Type 2 widgets in v4.2 when the logged-in user is not an admin

# 2022-01-31

Added the following features:

- Testing and validation of the plugin for version 4.2 of the Jeedom core
- Security: Encrypting Device Passwords in the Jeedom Database
- Added a tooltip regarding the installation number on the main page for a device
- "Verisure Notifications" tab: SMS notification scenario added
- Minor interface changes (integration of the new grid mode in v4.2)

The following corrections:

- Fixed errors in Jeedom's http.error log (if the SESSIONID variable is empty)

# 2021-07-07

Added the following features:

- Added info/action commands for Type 2 alarm devices (temperature, humidity, status/on/off of connected outlets, status (open/closed) of door/window sensors)
- An error appears in the Jeedom notification center when the alarm is triggered by a port or window that has been left open

The following corrections:

- Changes and fixes to the logs

# 2021-01-06

Added the following features:

- Added a "Network Quality" info command for type 1 alarms. This indicator is based on the number of successful requests when connecting to the Verisure cloud
- Added a display on the dashboard showing the humidity level of compatible smart plugs for type 2 alarms

The following corrections:

- New layout for the list of objects (compliant with Core v4.1)
- Bug regarding the time zone (UTC) in the Type 2 alarm activity report (now based on the Jeedom time zone)
- Fixed errors in the hhtp_error log when displaying the activity report for type 1 alarms

# 2020-11-06

Fixes following changes to the Verisure APIs (authentication and request parameters)

# 2020-10-13

Added the following features:

- Support for Verisure alarms available in Belgium and Northern Europe. The "Request Images" command is not yet functional for this type of device.
- Option to hide certain commands on the widget (Request Images, Night Mode, Day Mode, Outdoor Mode)
- Update to the activity report icons

The following corrections:

- Homebridge display bug in Night mode and Day mode (Home)
- Display error in the activity report when activating night mode via a remote control

# 2020-09-04

Outsourcing of plugin documentation

# 2020-08-22

The following corrections:

- Changing "Error" logs to "Warning" to avoid overloading the Jeedom message center
- Minor changes and fixes

# 2020-06-30

Added the following features:

- Support for mixed modes (Total + Outdoor, Night + Outdoor, Day + Outdoor)

# 2020-06-14

Added the following features:

- Implementation of a template for the mobile dashboard compatible with v3 and v4 (Core2019 Light, Dark, and Legacy)

# 2020-06-11

The following features and fixes have been added:

- Image Requests
- Handling the cron exception every day at 12:00 a.m. to prevent a refresh during Versiure server maintenance
- Implementation of a dashboard template compatible with v3 and v4 (Core2019 Light, Dark, and Legacy)
- Overall code optimization
- Rewrite of the plugin's logs

# 2020-05-04

Added the following features:

- Access to the Verisure Activity Log
- "Verisure Notifications" tab for setting up email and SMS notification scenarios
  
# 2020-04-15

First version of the Verisure plugin

- Verisure Cloud Connection
- Retrieving system information
- Functions: Full Mode activation, Night Mode activation, Day Mode activation, Outdoor Mode activation, deactivation, alarm status retrieval (manually or automatically every 30 minutes)
- Homebridge compatibility

**WARNING**: In this first version, the event related to the alarm triggering is not yet supported!
