---
layout: default
title: myBMW Plugin - Changelog
lang: en_US
pluginId: myBMW
---

# Important—please read!

**Below are the release notes, additions, and fixes for each version of the plugin**

**Note**: If an update is not listed here, it is because it contains only minor changes of the type documentation updates or minor bug fixes.


# 2026-07-31

The following corrections:
 - Bug fix for battery percentage display - Support for the new "vehicle.drivetrain.batteryManagement.header" setting
 - Telematics catalog update with the addition of the "Condition-Based Service" field (246 to date)


# 2026-07-25

The following corrections:
 - Updated the Telematics catalog to include only streamable fields (245 to date)


# 2026-07-04

Added the following features:
 - Set up a customizable cron job to prevent "500" errors from BMW servers when queries are made at a fixed time (xx:00). By default, this cron job is set to run every 2 hours, 5 minutes past the hour (xx:05), but you can change the exact minute by modifying the first value of the cron job (5 */2 * * *)


# 2026-06-19

Added the following features:
 - Added an "Average Price per kWh" parameter to calculate the cost of an electric charge, visible on the charging history graph (Panel)
 
The following corrections:
 - Panel: Fixed the JavaScript error "Unexpected end of JSON input" that occurred when displaying the electricity usage history


# 2026-05-31

Icon update as part of a standardization effort for all my plugins


# 2025-11-09

Added the following features:
 - Switch to the **official BMW APIs**
 - Setup of the **MQTT stream** for real-time data retrieval

**IMPORTANT** This is a major update to the plugin that requires a complete reconfiguration. Please read the documentation carefully and follow all the steps described one by one (especially the actions to be performed in your BMW or Mini user account).


# 2025-09-12

Added the following features:
 - Ability to configure the charging target and charging current limit for compatible electric and plug-in hybrid vehicles
 - Add the corresponding info commands
 - Generating a generic, machine-specific x_user_agent to avoid 403 errors (Out of call volume quota)
 - Added an automatic refresh feature to immediately retrieve information after a vehicle synchronization or after using a remote service that requires it

**IMPORTANT** To take advantage of these new features, you'll need to resync all your vehicles (no CAPTCHA required)

The following corrections:
 - Code optimization
 - Configuration page: bug fix for the "save auto" function before synchronization or a change to settings
 - Configuration page: bug fix for the automatic removal of the CAPTCHA after synchronization


# 2025-05-20

Added the following features:
 - Removal of cron30 and addition of a customizable cron job from the plugin's configuration page


# 2025-03-09

Added the following features:
 - Added the info chargingTarget command (electric charging target in %)

The following corrections:
 - Panel: bug fix for displaying the open/closed status of the cover


# 2025-01-31

Added the following features:
 - Added the totalEnergyCost command (total monthly electricity cost)
 - Reduction in the number of calls to BMW servers based on the vehicle's capabilities (loads and routes)
 - Dashboard: Modification of the load statistics graph (addition of total cost)
 - Panel & dashboard: Graphs and buttons are now displayed based on the vehicle's capabilities

The following corrections:
 - Dashboard: Bug fix for initial display with port and window icons


# 2024-12-18

The following corrections:
 - Bug fix: Overwriting of trip history if the request mistakenly returns "TripHistoryNotActive"


# 2024-12-08

Added the following features:
 - Handling the CAPTCHA required by BMW during the first login (see documentation!!)
 - Displays the services available based on your subscription on the "Equipment" page

The following corrections:
 - Displaying the time along with the date on graphs


# 2024-10-22

The following corrections:
 - Bug fix for panel commands (sendPOI & vehicleFinder)


# 2024-09-06

Added the following features:
 - Support for the new BMW and Mini APIs (Mobile app v4.7.2)

The following corrections:
 - Bug fix for sendPOI request (API change)
 - Bug fix for vehicleFinder request (API change)
 - Bug fix for the lastTrip query (now takes the "NoTripsYet" information into account)


# 2024-07-07

Added the following features:
 - Added charging sessions for electric cars with range extenders (type ELECTRIC_WITH_RANGE_EXTENDER)

The following corrections:
 - Improvements to how posts are displayed in the community
 - Bug fix for displaying service messages (API change)
 - Bug fix for the chargingStatistics request (API change)
 - Bug fix for panel and dashboard display for "mild_hybrid" (API v2) or "hybrid" (API v1) vehicles of type "mild_hybrid" or "hybrid"


# 2024-04-17

Added the following features:
 - Added a button to manually delete the device's token
 - Added the OAuth2 settings request
 - Added the unset() function for cURL requests (PHP 8.x compatibility)

The following corrections:
 - Fixed vehicle synchronization following API changes (SHA256 method)
 - Bug fix for tile display for electric cars with a range extender (type ELECTRIC_WITH_RANGE_EXTENDER)


# 2024-04-16

Added the following features:
 - Minor changes to the widget and panel design
 - Panel: Switching the display of charging sessions from table mode to graph mode
 - Dashboard: Add a graph showing driving statistics (if available)
 - Dashboard: Add a graph showing trips for the current month (if available)
 - Cron schedule update: changed from 1 hour to 30 minutes (specifically to retrieve the most recent trips)

The following corrections:
- Bug fix for displaying charging sessions for a gasoline-powered vehicle
- Correction of the URL for load sessions following API changes


# 2024-03-14

Added the following features:
 - Support for the new BMW and Mini APIs v3.11.0
 - Reduction in the number of calls to BMW servers (specifically, switching from cron30 to cronHourly—whether temporarily or permanently)
 - Added the "lastTrips" API request. A new graph will be added to the dashboard later.

The following corrections:
 - Default logging of the 3 commands required for the panel's graphs when they are created
 - Removal of the "chargingStatistics" query, which is no longer functional as of today


# 2024-02-09

Added the following features:
 - Added the vehicle image to the thumbnails on the plugin page

The following corrections:
 - Update to the button for automatically creating a post on the Jeedom Community (vCore Jeedom 4.4 mini)
 - Update to the plugin's screenshots
 

# 2024-01-31

The following corrections:
 - Correction of remaining kilometers for electric cars with range extenders (type ELECTRIC_WITH_RANGE_EXTENDER)
 

# 2023-11-30

The following corrections:
 - Handling the "429 - Rate limit exceeded" error
 - Display the panel even if the device is not visible


# 2023-11-19

Added the following features:
 - Jeedom v4.4 Compatibility with Debian 12 and PHP 8.x
 - Support for the new BMW and Mini APIs, v3.9.0
 - Added a button to automatically create a post on the Jeedom Community (vCore Jeedom 4.4 mini)


# 2023-10-10

Added the following features:
 - Support for the "Legacy" theme for widget and panel display (vCore Jeedom < 4.4)

The following corrections:
 - A look back at the change in how the remaining fuel volume is displayed—from liters to %—following the API update. Both options are now available and depend on the vehicle.
 - Fixed the "charging sessions" command, which returned invalid JSON if the vehicle did not have an electric or hybrid type


# 2023-10-04

Added the following features:
 - Support for the new BMW and Mini APIs v3.3.1
 - Redesign of the widget, returning to a more traditional/conventional design to avoid unnecessarily cluttering the dashboard, and focusing solely on important information and actions
 - A much more comprehensive dashboard has been added, featuring graphs showing mileage, fuel level, and battery status. To enable this, check the “dashboard” option in the plugin settings and enable logging for the “mileage,” “fuel,” and/or “battery” commands. The panel can be customized from the device’s configuration page (icon/text for door and window status, colors, etc.).
 - Added monthly charging history for the current month, including power consumption and approximate cost, if configured in the BMW or Mini app
 - Adding load information to the raw data
 - Addition of start/stop charging buttons for electric vehicles
 - Option to display the password on the device
 - Initial compatibility with Jeedom v4.4

The following corrections:
 - Fixed the widget display on a smartphone/tablet in desktop mode (well, sort of!)
 - Add additional logs for debugging when refreshing the token
 - Remaining fuel volume now displayed as a percentage instead of liters following API changes
 - Optimization of the display of control or service messages (if the description is empty)
 - Correction to the "VehicleFinder" feature following API changes. The vehicle's last known location is now used because it is now necessary to send the GPS coordinates of the user requesting the vehicle's location. The location is returned only if the vehicle is within a radius of less than 1.5 km.


# 2023-01-15

Added the following features:
 - Support for the new BMW and Mini APIs v2.12
 - Added tire pressure and inflation target (Note: This feature depends on the vehicle. The information on the widget is only visible if available)
 - Added the icon and implemented handling of messages regarding windshield washer fluid

The following corrections:
 - Vehicle view adjustment (3/4-profile view for all vehicles—requires a resync and clearing the cache)
 - Change to the message indicating the remaining charging time for electric vehicles
 - Documentation Update


# 2022-09-25

Added the following features:
 - Adding the vehicle's presence at home
 - Add the distance between the vehicle and home
 - Action taken on messages regarding brake pads and tire wear
 - Removed the two commands "distance unit" and "fuel unit" (unused)
 - New display for the equipment command table (compatible with Jeedom Core v4.3)
 

The following corrections:
 - Remove the "or" from the title of service messages if there is no date
 - Fixed the blue color of the Font Awesome icons in the flatdesign widget
 - API fix for retrieving "status events" (removal of the check-out)
 - Documentation Update
 

# 2022-09-02

Added the following features:
 - Added new "All Doors" and "All Windows" info commands
 - New “Flat Design” widget: You can select the widget you want on the device page (compatible with dark and light themes). This widget is customizable (see the documentation).

The following corrections:
 - Changing the token refresh timeout to prevent connection errors


# 2022-08-01

Added the following features:
 - Added icons for managing vehicle status alerts (oil, brakes, tire pressure, general vehicle status)

The following corrections:
 - Bug fix for synchronization when a device isn't backed up (automatic backup now enabled)


# 2022-07-25

Added the following features:
 - Support for the new BMW and Mini v2 APIs
 - Added tooltips to the widget to show the status of doors and windows

The following corrections:
 - Refresh token bug fix


# 2022-06-12

Added the following features:
 - Support for the new Mini APIs
 - Merging the BMW and Mini APIs and optimizing the code
 - Support for the French language in the returned information (vehicle units and messages)
 - Change log levels from "debug" to "error" if the request fails
 - Using device logical IDs in anticipation of future developments

The following corrections:
 - Bug fix for the CreateCmd function
 - Adjustment of remaining mileage for internal combustion engines (subtraction of remaining mileage for electric motors)
 - Displays the last login as “unknown” if the value returns 01/01/1970
 - Fixed an issue with message display when messages contain a "’"


# 2022-05-28

The following corrections:
 - Changes to the BMW Connected Drive APIs (x-user-agent)
 - Bug fix for vehicle image URL if Jeedom is not installed in the root directory
 - Convert miles to kilometers for the total distance


# 2022-04-24

Added the following features:
 - Support for "Secured" mode at the widget level (lock)
 - Added the ability to log commands in the Equipment\Commands tab
 - Support for displaying historical information in the background of a tile (core v4.2)
 

# 2022-04-11

Added the following features:
 - Ventilation: Addition of start/stop modes
 - Vehicle Search: Real-Time Vehicle Location
 - Function to send a POI in the car's messages
 - Check the status of each action for 2 minutes ("PENDING" -> "EXECUTED" or "ERROR")
 - Added "Status" commands for each action command (for monitoring via scenarios)
 - Changing action icons
 
The following corrections:
 - Bug fix: Displayed "disconnected" if the value was "false" instead of 0 for an electric vehicle
 - code optimization


# 2022-03-28

First version of the myBMW plugin
 - Connection to the BMW Connected Drive cloud
 - Retrieval of vehicle information: lock status, door and window status, total mileage, charge percentage and remaining range for electric motors, fuel level and remaining range for internal combustion engines, vehicle location, alert messages
 - Available features: locking/unlocking the vehicle, turning on the ventilation, flashing the headlights, honking the horn
  
