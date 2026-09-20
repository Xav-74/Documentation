---
layout: default
title: Package Tracking Plugin - Changelog
lang: en_US
pluginId: parcelTracking
---

# Important—please read!

**Below are the release notes, additions, and fixes for each version of the plugin**

**Note**: If an update is not listed here, it is because it contains only minor changes of the type documentation updates or minor bug fixes.


# 2026-05-31

Icon update as part of a standardization effort for all my plugins


# 2026-02-15

Added the following features:
 - Automatic update of the list of carriers and additional settings (via button or daily cron job)
 

# 2025-11-10

Added the following features:
 - Update to the list of carriers and additional settings
 - Added a "Search" field to filter carriers in the drop-down list (by name, by country, etc.)

The following corrections:
 - Fixed a PHP warning that occurred when displaying the global widget in certain cases (e.g., when "states" is empty)


# 2025-05-20

Added the following features:
 - Ability to display both individual widgets and the global widget simultaneously
 - Add the package name to the notification subject line


# 2024-12-31

Added the following features:
 - Added the #url# and #location# tags for notifications and scenarios


# 2024-10-17

Added the following features:
 - Added the "Carrier" and "Additional Parameter" fields to the modal used to add a package from the widget/dashboard

The following corrections:
 - Dates and times are now displayed in the time zone configured in your Jeedom (single widget / global widget)
 - Incorporation of descriptions translated by 17Track when you have set a specific language
 

# 2024-09-28

Added the following features:
 - Implementation of a webhook that retrieves information transmitted by 17Track in real time. The hourly cron job has therefore been disabled.
 - Added a button to send a test notification on the plugin's configuration page

> WARNING!!!
> You must configure the webhook settings on your 17Track dashboard; otherwise, you will no longer receive any information about your packages!


# 2024-09-07

Added the following features:
 - Migration from the ParcelsApp API to 17Track

> WARNING!!!
> This is a major update to the plugin. You’ll need to reconfigure it (including adding a 17Track API key) and then recreate all your packages. The entire process is detailed in the documentation. The big advantage of this new version is that the tracking limit has increased to 100 packages per month (the quota resets on the 1st of every month)!


# 2024-08-22

Added the following features:
 - Plugin translation (English, German, Spanish, Italian, Portuguese)

The following corrections:
 - Translation of tags into English

> WARNING!!!
> So you'll need to change the format of your messages (notifications) and/or your scenarios!


# 2024-08-01

Added the following features:
 - Automatically remove spaces if they appear before and/or after the trackingID

The following corrections:
 - Retrieving carrier, origin, and destination information (different keys in the JSON depending on the carrier)


# 2024-07-27

Added the following features:
 - Ability to add or remove packages directly from the widgets (individual or global)
 - Option to add a secondary API key to track 10 additional packages
 - Add a notification to the Jeedom message center when the 10-package limit is reached (only during synchronization, not during refreshes)

The following corrections:
 - PHP Warning in the http.error log when calling the buildList() function
 - Update device commands when the "Shipments" JSON is empty


# 2024-07-16

First version of the Parcel Tracking plugin (parcelTracking)
 - Connection to the Parcelsapp cloud via API
 - Retrieving package information: status, carrier, country of origin, destination country, delivery stages, delivery date
 - Available features: widget by package or global, sending notifications via command and/or scenario, automatic deletion of packages after a specified time

  
