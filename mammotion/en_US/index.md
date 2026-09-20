---
layout: default
title: Mammotion Plugin - Documentation
lang: en_US
pluginId: mammotion
---

# Overview

This plugin lets you control your **Mammotion** brand robotic lawn mowers (Luba, Yuka) and pool robots (Spino) from Jeedom, just like the official app.

Data is transmitted **automatically and in real time**: the plugin’s daemon maintains a constant connection to the Mammotion cloud (MQTT) and pushes every status change to Jeedom.

> **Disclaimer**
>
>This plugin relies on the unofficial [PyMammotion](https://github.com/mikey0000/PyMammotion) library. Mammotion’s terms of use prohibit unofficial access to their API: use this plugin at your own risk (theoretical risk of account suspension).

<!-- -->

> **Tip**
>
> The **minimum version of Jeedom** required for the plugin to work properly is **version 4.4**
> The plugin is already compatible with **version 4.6** of Jeedom as well as **Debian 12**

# Plugin Configuration

After downloading the plugin:

- Activate the plugin
- Start installing the dependencies (⚠ the initial installation may take a while: compiling Python 3.13 via pyenv)
- Enter your Mammotion account **email** and **password**
- Start the daemon

> **Tip**
>
>The Mammotion cloud allows only one session per account. Create a **secondary account** dedicated to Jeedom and share your robots with it from the official app; otherwise, the mobile app will be disconnected every time the daemon restarts (and vice versa).

## Settings

| Setting | Description |
| --------- | ----------- |
| Email | Mammotion account email |
| Password | Mammotion account password |
| Internal port | Jeedom → daemon communication port (default: 44090) |
| Custom Cron | Forced refresh rate (default: every 15 minutes) |

# Creating devices

Devices are created **automatically**:

- When the daemon starts, the list of robots in the account is retrieved, and any missing devices are created
- The **Synchronize** button on the plugin page forces a new discovery, updates statuses, and retrieves the **list of mowing zones** and the list of **activities**.

# Commands

## Info Controls (Lawn Mower)

| Command | Description |
| -------- | ----------- |
| Online | Cloud-connected robot |
| Battery | Battery level (%) |
| Charging | Charging in progress |
| Status | Operating mode (MODE_WORKING, MODE_CHARGING, ...) |
| Progress | Progress of the current task (%) |
| Mowed area | Mowed area per session (m²) |
| Time remaining / elapsed | Estimated duration of the current task in minutes |
| Blade height | Typical cutting height (mm) |
| Active blades | Blade rotation |
| Rain Detection | Active Rain Sensor |
| GPS coordinates | Position `latitude,longitude` (empty until the robot has transmitted its GNSS reference; see FAQ) |
| Orientation | Robot heading (°) |
| Wi-Fi Signal | Wi-Fi RSSI (dBm) |
| Blade Wear | Blade Service Life (hours) |
| Total distance | Distance traveled since commissioning (km) |
| Total work time | Cumulative work time (h) |
| Battery cycles | Number of battery cycles |
| Firmware | Firmware version |
| Errors | Active error codes |
| Connection | Robot connection type (Wi-Fi, 3G/4G, BLE) |
| Latest event | Event log (mowing started, returned to dock, charging, update...). History: view the command history for the complete log |
| Last update | Timestamp of the last data received |

## Action commands (lawn mower)

| Command | Description |
| -------- | ----------- |
| Refresh | Force a status update |
| Start | Start/Resume Scheduled Task |
| Pause | Pauses the task |
| Resume | Resumes the paused task |
| Cancel Task | Cancels the current task |
| Return to Station | Sends the robot back to its station |
| Leave the station | Moves the robot out of its station |
| Adjust slat height | Slider 25 → 70 mm (not available on the Yuka line, as in Home Assistant) |
| Adjust speed | Slider 20 → 60 cm/s (not available on the Yuka line) |
| Mow an area | Start mowing the selected area (list populated by synchronization) |

## Pool robot (Spino)

Support for pool robots is more limited in v1: status updates (online, battery, status, speed) and basic commands (start / pause / cancel / return).

# FAQ

**The daemon won't start**: Check your email and password, then review the `mammotion_daemon` log. If there are dependency errors, reinstall the dependencies. Startup may take 30 to 60 seconds on a Raspberry Pi (while the pymammotion library loads).

**The model / firmware / zones are not being reported**: the robot must be reachable (the plugin queries it and wakes it up if necessary during synchronization). Click *Synchronize*: the zones will appear a few seconds later, once the map has actually been received from the robot.

**The GPS Coordinates command is empty**: this is normal after restarting the daemon. The robot only transmits its geolocation reference (RTK base station or onboard GNSS fix for vision/LiDAR models) in certain reports, typically when it is active. The command will be populated the next time the robot is active. The plugin prefers an empty value to degenerate coordinates (close to the 0,0 point on the globe).

**Data is not updated in real time**: the bot only posts when it is active or when its status changes. The cron job also forces periodic refreshes.

# Roadmap & Support

This plugin will evolve over time based on your requests and the capabilities of the Mammotion APIs.

> **Tip**
>
> You can submit a feature request by creating an "enhancement" issue on [GitHub](https://github.com/Xav-74/mammotion/issues/new).
> Feel free to join the discussion about this plugin on the Jeedom Community!

If a problem occurs, you can create a thread directly on the Community from the plugin’s main page. Relevant information from Jeedom and the plugin is automatically included. Feel free to copy the mammotion logs (debug mode) as well to help resolve the issue more quickly!
