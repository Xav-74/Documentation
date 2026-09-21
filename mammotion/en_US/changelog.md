---
layout: default
title: Mammotion Plugin - Changelog
lang: en_US
pluginId: mammotion
---

# Important—please read!

**Below are the release notes, additions, and fixes for each version of the plugin**

**Note**: If an update is not listed here, it is because it contains only minor changes of the type documentation updates or minor bug fixes.


# 2026-09-21 [+]

Release of the stable version from beta on September 19, 2026
First stable version of the plugin

Please note: The minimum required version of Jeedom is v4.4, and Debian 11 is required!


# 2026-09-19 [~]

What's New:
- Added the "hibernation" and "set_hibernation" commands for display on the widget and use in a scenario

Corrections:
- Improving Robot Imaging


# 2026-09-17 [~]

What's New:
- Add "Winter Mode"
- Adding history data from widgets
- Areas and Activities Listed in Alphabetical Order

Corrections:
- Bug fix: missing template for Spinos
- Bug fix: error during synchronization for Spino devices (device_limits)


# 2026-09-08 [~]

What's New:
- Redesign of the "Spino" section with support for action commands
- Dedicated widget for "Spino" robots


# 2026-07-10 [~]

First version of the Mammotion plugin (mammotion)
- Support for Luba/Yuka robotic lawn mowers and Spino pool robots (status)
- Automatic device discovery
- Real-time data transmission via the Mammotion cloud (MQTT)
- Mowing Area Recovery
- Retrieving Activities
- Commands and information: battery / charge / status / speed / progress / area / connection type / signal strength ...
- Action commands: start / pause / resume / cancel / return and exit station / blade height / speed / zone mowing / activity-based mowing
