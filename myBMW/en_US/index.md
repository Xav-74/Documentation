---
layout: default
title: My BMW Plugin - Documentation
lang: en_US
pluginId: myBMW
---

# Overview

This plugin lets you interact with your **BMW** or **Mini** vehicle equipped with Connected Drive services, just like the official “My BMW” or “Mini” app.

> **Tip**
>
> The **minimum version of Jeedom** required for the plugin to work properly is **version 4.2**
> The plugin is already compatible with **version 4.5** of Jeedom as well as **Debian versions 11 and 12**


# Principle

This plugin interacts with the **official BMW Connected Drive APIs** via the cloud; therefore, **this plugin requires an Internet connection**.
You must also have a valid subscription to BMW Connected Drive services for your vehicle, as well as a valid **primary** user account for the "My BMW" or "Mini" app.


# Setting Up Your BMW or Mini User Account

Before you can use the plugin, you must set up your BMW user account. Please follow these steps carefully:

1. Log in to the **[BMW ConnectedDrive](https://www.bmw.fr/fr-fr/mybmw/vehicle-overview)** or **[Mini ConnectedDrive](https://www.mini.fr/fr-fr/mymini/vehicle-overview)** portal
3. Click the **BMW CarData** icon

![CarData](../images/CarData_section.png)

4. Click the **"Create a CarData Customer"** button
5. Make sure to copy **your customer ID** and keep it in a safe place!
4. Please wait **30 seconds**
6. Click on **"Request access to the CarData API"**
7. Wait **30 seconds** (if the toggle does not switch back to "off" and you do not see an error message, you can continue; otherwise, you must repeat this step)
8. Click on **"CarData Streaming"**
9. Wait **30 seconds** (if the toggle does not switch back to "off" and you do not see an error message, you can continue; otherwise, you must repeat this step)

![CarData](../images/CarData_clientID.png)

10. Go to the **CarData Stream** section
11. Verify that the connection status is **"ready"**

![CarData](../images/CarData_stream.png)

12. Click the **"Edit Data Selection"** button
13. Select **"All Categories"** (Vehicle Status, Charging, Trip Data, etc.), then click the **Load** button several times to display all attributes
12. Select the 244 individual attributes **manually**, or press F12 to open the **developer console** and type: (copying and pasting is not allowed)
```
document.querySelectorAll('label.chakra-checkbox:not([data-checked])').forEach(l => l.click());
```
14. Then **save** your configuration
15. Make sure to write down **the username** somewhere safe!

**It is important that all attributes be checked in order to receive all vehicle data.**


# Plugin Configuration

After downloading the plugin, simply activate it, then configure the client ID and username you obtained in the previous step. Leave the other fields blank unless specifically instructed to fill them in by the developer.
Then wait for the dependencies to finish installing and for the daemon to start.

> **Tip**
>
> To make it easier to request remote assistance, we recommend setting the logs to **debug mode**.

![Setup](../images/Config_myBMW.png)


# Add a vehicle

You can configure MyBMW devices from the Plugin > Connected Devices menu.

![Add Vehicle](../images/Plugin_myBMW.png)

Click the Add command to create a new vehicle. Once added, you will see:

-   **Device Name**: Name of your vehicle
-   **Parent object**: Specifies the parent object to which the device belongs
-   **Category**: the equipment category
-   **Activate**: turns your device active
-   **Visible**: Makes your devices visible on the dashboard
-   **Make**: Enter the make of your vehicle (BMW or Mini)
-   **VIN**: Enter the VIN, or Vehicle Identification Number. You can find this number in box E of your vehicle registration certificate. This number consists of 17 characters.
-   **Door/Window Status Display**: You can choose between two options for displaying the status of doors and windows on the panel: text mode or icon mode.
-   **Port/Window Icon Colors**: If you have selected icon mode, you can also choose the color of the icons (green or black and white).
-   **Home (presence)**: You have three options for specifying the GPS coordinates of your home: you can use the coordinates entered in Jeedom, use the vehicle's current coordinates, or manually enter the latitude and longitude.
-   **Maximum distance (in meters)**: Enter the maximum distance in meters between your home and the vehicle for the vehicle to be considered present at your home.

Then simply click the **Authentication** button to retrieve your vehicle's information (if available, you'll see the model, year, engine type, and an image of your vehicle). A pop-up window will open **(Be mindful of your browser’s pop-up blocker; disable it if necessary)** so you can log in using your BMW account credentials (email and password). You have 5 minutes to do this, and you should see a **“Login Successful”** message when you’re done.

> **Tip**
>
> Don't forget to **save** your information!
> When you save, new commands will be created on the device.

![Equipment](../images/Eqpt_myBMW.png)


# Raw data

To make troubleshooting easier in case of a problem, you can retrieve your vehicle’s raw data by clicking the **Raw Data** button. Please note: Before posting this data on the forum, for example, be sure to hide sensitive information such as the VIN!


# Commands

There are currently several commands, which are described below.

> **Tip**
>
>If the command returns "not available," it means that the corresponding information is not available for your vehicle.

## Info

-   **Brand**
-   **Model**
-   **Year**
-   **Type**: electric, thermal, or hybrid
-   **Mileage**: total mileage of the vehicle
-   **Locking**: Retrieves the vehicle's lock status
-   **Front Port Status**
-   **Rear Port Status**
-   **Front Port Status**
-   **Rear Port Status**
-   **Status of all doors**
-   **Front Driver's Window Status**
-   **Rear Driver's Window Status**
-   **Front Passenger Window Status**
-   **Rear Passenger Window Status**
-   **Status of all windows**
-   **Safe Status**
-   **Engine Hood Status**
-   **Sunroof Status**
-   **Front left tire pressure**
-   **Front Left Tire Inflation Guidelines**
-   **Front right tire pressure**
-   **Front Right Tire Inflation Guidelines**
-   **Left rear tire pressure**
-   **Left Rear Tire Inflation Guidelines**
-   **Right Rear Tire Pressure**
-   **Right Rear Tire Inflation Instructions**
-   **Charge Status** (only on electric or hybrid vehicles)
-   **Charging Status** (only on electric or hybrid vehicles)
-   **Charge end time** (only for electric or hybrid vehicles)
-   **Remaining Charge** (only for electric or hybrid vehicles)
-   **Remaining range (electric)** (electric and/or hybrid engine)
-   **Remaining Fuel** (only for gasoline or hybrid vehicles)
-   **Remaining range (internal combustion)** (internal combustion engine)
-   **Messages**: Displays the messages shown in the vehicle (controls and services)
-   **Charging Sessions**: Displays statistics on battery charging for the current month (for electric or hybrid vehicles only)
-   **Total electricity consumption**: shows the total electricity consumed during the current month (for electric or hybrid vehicles only)
-   **Total electricity cost**: shows the monthly cost of electricity
-   **Charging Target**: Displays the configured electric charging target for the vehicle (as a percentage)
-   **Charging current limit**: specifies the maximum charging current when the vehicle is plugged in
-   **Charging Current Limit**: Provides information on whether a charging current limit is enabled or disabled on the vehicle
-   **GPS coordinates**: returns the vehicle's location in the format "latitude,longitude"
-   **Last Update**: Displays the date and time of the last connection between the car and the BMW servers
-   **Unlock Status**: Returns the last status received during an unlock request. If the action was completed successfully, the status changes from "PENDING" to "EXECUTED." Otherwise, it returns "ERROR."
-   **Lock Status**
-   **Loading Status**
-   **Charger Stop Status**
-   **Ventilation Status**
-   **Stop Ventilation Status**
-   **Headlight Flashing Status**
-   **Status: Beep**
-   **Search Status**
-   **POI Shipping Status**
-   **At Home**: Indicates whether your vehicle is at your home (1 = present, 0 = absent) based on the maximum distance you entered
-   **Distance from home**: shows the distance (in meters or kilometers) between the vehicle and your home


## Action

-   **Refresh**: Updates all vehicle information
-   **Lock**: Locks the car remotely
-   **Unlock**: allows you to unlock the car remotely
-   **Charge**: starts charging the vehicle
-   **Stop Charging**: stops the vehicle from charging
-   **Ventilation (Start)**: Starts the ventilation system at the temperature set in the vehicle
-   **Ventilation (Stop)**: Stops the ventilation system at the temperature set in the vehicle
-   **Headlight flash**: triggers a headlight flash
-   **Honk**: Triggers an audible alert
-   **Search**: Locates the vehicle in real time and displays its location on Google Maps
-   **Send POI**: Send a point of interest (POI) to the vehicle's message center by entering the name, latitude, and longitude of the location

> **WARNING**
>
> As of now, only the **Refresh** function is operational. The other actions will be functional again once the BMW APIs allow it!


# Dashboard

The plugin includes a custom widget that displays all the vehicle's essential information.

![myBMW Widget](../images/Widget_myBMW.png)


# Panel

If you have checked the **Show Desktop Panel** option on the plugin's configuration page, you will be able to view a panel dedicated to your vehicle that consolidates all the information available in this plugin. It can be accessed via the **Home \ My BMW** menu

![myBMW Panel](../images/Panel_myBMW_1.png)
![myBMW Panel](../images/Panel_myBMW_2.png)

> **Tip**
>
> To display the graphs, be sure to check the **Log** option for the following three commands: Mileage, Remaining Charge, and Remaining Fuel.


# Refresh

## Automatic

Thanks to the MQTT stream, you receive most of your vehicle's information in real time (mileage, fuel level, battery status, vehicle lock status, door and window status, location, etc.)!
A customizable CRON job is also created (set to run every 2 hours, 5 minutes past the hour) to retrieve non-streamable information (control messages, service messages, and charging history). Be careful not to increase this frequency too much, or you may exceed the request quota allowed by BMW (50 per day)!

## Manual

You can use the **Refresh** command at any time to retrieve vehicle statuses.

>**Warning**
>
>BMW limits requests to 50 per day, so please do not manually refresh too often (the current CRON job uses 24 requests per day), or you risk being blocked until the next day.


# Roadmap & Support

This plugin will evolve over time based on your requests and the capabilities of the BMW Connected Drive APIs.

The following features will be included in upcoming versions:
-   Adding new features based on the capabilities offered by the APIs
-   English translation of the plugin
-   ...

> **Tip**
>
>You can submit your enhancement request by creating an "enhancement" issue on [GitHub](https://github.com/Xav-74/myBMW/issues/new).
>Feel free to join the discussion about this plugin on the Jeedom Community!

If a problem occurs, you can create a thread directly on the Community from the plugin's main page. Relevant information from Jeedom and the plugin is automatically included. Feel free to copy the myBMW, myBMW_daemon, and myBMW_update (debug mode) logs to help resolve the issue more quickly!

![Community](../images/community.png)
