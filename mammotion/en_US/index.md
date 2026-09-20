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

Robots are discovered using the **Synchronize** button on the plugin page. It queries the Mammotion account, creates any missing devices, updates their model and firmware, and then retrieves the list of mowing zones and the list of activities.

Run it after the daemon has started for the first time, and then every time you add a robot to your account or change the settings for your robots, zones, and/or activities from the app.

The robot type is detected automatically (lawn mower or pool) and determines the commands created as well as the widget displayed on the dashboard. Zones and activities apply only to lawn mowers.

The device page and its widget display a photo corresponding to the detected model. When the exact model is not available, the photo of the closest matching model is used.

# Commands — Lawn Mower (Luba, Yuka)

## Info Controls

| Command | Description |
| -------- | ----------- |
| Online | Cloud-connected robot |
| Battery | Battery level (%) |
| Status | Mode (mowing, charging, returning to the station, etc.) |
| Speed | Current travel speed (m/s) |
| Charging | Charging in progress |
| On the base | Robot on its charging station |
| Progress | Progress of the current task (%) |
| Mowed area | Mowed area per session (m²) |
| Current Zone | Name of the zone currently being mowed |
| Time remaining / elapsed | Estimated duration of the current task in minutes |
| Blade height | Typical cutting height (mm) |
| Active blades | Blade rotation |
| Rain Detection | Active Rain Sensor |
| GPS coordinates | Position `latitude,longitude` (empty until the robot has transmitted its GNSS reference; see FAQ) |
| Orientation | Robot heading (°) |
| Wi-Fi / Bluetooth / cellular signal | RSSI for each link (dBm) |
| Blade service life | Cumulative blade wear (h) |
| Blade wear threshold | Threshold beyond which replacement is recommended (h) |
| Remaining blade life | Difference between threshold and cumulative wear (h) |
| Total distance | Distance traveled since commissioning (km) |
| Total work time | Cumulative work time (h) |
| Battery cycles | Number of battery cycles |
| Firmware | Firmware version |
| Errors | Active error codes, along with their descriptions |
| Connection | Robot connection type (Wi-Fi, 3G/4G, BLE) |
| Latest event | Event log (mowing started, returned to dock, charging, update...). History: view the command history for the complete log |
| Blade height setting / Speed setting | The last value set using the sliders is reused when a mowing session begins |
| Winterization | Winterization active mode or off (see *Winterization Mode*) |
| Last update | Timestamp of the last data received |

## Action Commands

| Command | Description |
| -------- | ----------- |
| Refresh | Force a status update |
| Start | Start/Resume Scheduled Task |
| Pause | Pauses the task |
| Resume | Resumes the paused task |
| Cancel Task | Cancels the current task |
| Return to Station | Sends the robot back to its station |
| Leave the station | Moves the robot out of its station |
| Adjust slat height | Slider in mm, default 30 → 70 (not available on the Yuka line) |
| Set speed | Slider in m/s, default 0.2 → 0.6 (not available on the Yuka series) |
| Mow an area | Start mowing the selected area (list populated by synchronization) |
| Start an activity | Start a scheduled activity in the app (list populated by synchronization) |
| Toggle hibernation | Enables hibernation mode, or disables it if it is already active (see *Hibernation Mode*) |

> **Tip**
>
> The limits of the two sliders are automatically adjusted based on the capabilities reported by your model: the values above are only fallback values.

A dedicated widget is provided for the robotic lawn mower, featuring 7 (Yuka) or 9 (Luba) command buttons and key information.

# Commands — Pool Robot (Spino)

## Info Controls

| Command | Description |
| -------- | ----------- |
| Online | Cloud-connected robot |
| Battery | Battery level (%) |
| Charging | Charging in progress |
| Status | Robot status: Standby, Preparing, Waiting to be deployed, Cleaning in progress, Returning to the dock, Charging, Leaving the dock, Recall in progress |
| Cleaning mode | Active mode: Full, Floor, Walls, Eco — or *None* when the robot is not cleaning (see FAQ) |
| Wi-Fi Signal | Wi-Fi RSSI (dBm) |
| Bluetooth Signal | Bluetooth RSSI (dBm) |
| Connected to Wi-Fi | Wi-Fi connection established |
| Firmware | Firmware version |
| Winterization | Winterization active mode or off (see *Winterization Mode*) |
| Last update | Timestamp of the last data received |

## Action Commands

| Command | Description |
| -------- | ----------- |
| Refresh | Force a status update |
| Full Clean | Clean the bottom and sides (**ALL** mode in the app) |
| Floor cleaning | Pool bottom only (**FLOOR**) |
| Wall cleaning | Walls only (**WALL**) |
| Eco Cleaning | Surface Sweeping (**ECO**) |
| Stop and Return to Charge | Pauses the current cleaning session and sends the robot back to recharge (the *Recharge* button in the app) |
| Toggle hibernation | Enables hibernation mode, or disables it if it is already active (see *Hibernation Mode*) |

> **Tip**
>
> The 4 modes correspond exactly to the 4 buttons on the Mammotion app's home screen. Other modes exist within the protocol (waterline, custom) but are not yet available.

A dedicated widget is provided for the pool robot, featuring 5 command buttons and key information.

# Winterization mode

When a robot is stored for the season, it is turned off. **Winterization mode** puts the equipment into sleep mode.

When it is active:

- **cron ignores the device**: no more refresh requests;
- **Control commands are blocked** and return an explicit message, even when executed from a scenario;
- the **device remains visible** on the dashboard and retains its history;
- The **daemon continues to run** normally for your other robots.

This setting is **specific to each device**: you can winterize your pool robot while it continues to clean the pool.

## How to enable it

Three options, all of which affect the same setting:

- the **Winter mode** checkbox in the *Winterization* section of the device page;
- the **icon in the widget's title bar**: a snowflake when the robot is in standard mode, a sun when it is in hibernation mode. Clicking switches between modes;
- The **Switch to Winter Mode** command, which can be used in a scenario.

The **Winterization** command displays the current status. It is logged, allowing you to retrieve the dates when winterization began and ended.

> **Tip**
>
> The *Toggle Hibernation* command reverses the state: when called twice, it returns to its original state. In a scenario that automates hibernation, first test the **Hibernation** info command and only call the toggle if its value is 0.

After winter mode, the data will be updated the next time the cron job runs, or immediately if you click *Refresh*.

# FAQ

**The daemon won't start**: Check your email and password, then review the `mammotion_daemon` log. If there are dependency errors, reinstall the dependencies. Startup may take 30 to 60 seconds on a Raspberry Pi (while the pymammotion library loads).

**The model / firmware / zones are not being reported**: the robot must be reachable (the plugin queries it and wakes it up if necessary during synchronization). Click *Synchronize*: the zones will appear a few seconds later, once the map has actually been received from the robot.

**The GPS Coordinates command is empty**: this is normal after restarting the daemon. The robot only transmits its geolocation reference (RTK base station or onboard GNSS fix for vision/LiDAR models) in certain reports, typically when it is active. The command will be populated the next time the robot is active. The plugin prefers an empty value to degenerate coordinates (close to the 0,0 point on the globe).

**Data is not updated in real time**: the bot only posts when it is active or when its status changes. The cron job also forces periodic refreshes.

**My robot isn't updating anymore and its buttons aren't responding**: check the icon in the widget's title bar. A sun icon indicates that the device is in **hibernation mode**: the cron job ignores it, and its commands are blocked. Clicking the icon returns it to standard mode.

**Spino: The Cleaning Mode displays “None”**: This is normal behavior when the device is idle. A Spino that is turned off does not report any active modes in its status messages. Use the **Status** command to determine whether the robot is working.

**Spino: Why isn't there a Pause button?**: The robot's protocol does not support one. To interrupt a cycle, use *Stop and Return to Charging*.

# Roadmap & Support

This plugin will evolve over time based on your requests and the capabilities of the Mammotion APIs.

> **Tip**
>
> You can submit a feature request by creating an "enhancement" issue on [GitHub](https://github.com/Xav-74/mammotion/issues/new).
> Feel free to join the discussion about this plugin on the Jeedom Community!

If a problem occurs, you can create a thread directly on the Community from the plugin’s main page. Relevant information from Jeedom and the plugin is automatically included. Feel free to copy the mammotion logs (debug mode) as well to help resolve the issue more quickly!
