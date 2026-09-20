---
layout: default
title: Plugin „Sendungsverfolgung“ – Changelog
lang: de_DE
pluginId: parcelTracking
---

# Bitte unbedingt lesen!

**Nachfolgend finden Sie die Hinweise, Ergänzungen und Korrekturen zu den einzelnen Versionen des Plugins**

**Hinweis**: Wenn ein Update hier nicht aufgeführt ist, bedeutet dies, dass es sich lediglich um geringfügige Änderungen handelt, wie z. B. Anpassungen in der Dokumentation oder die Behebung kleinerer Fehler.


# 2026-05-31

Aktualisierung des Symbols im Rahmen einer Vereinheitlichung aller meiner Plugins


# 2026-02-15

Folgende Funktionen wurden hinzugefügt:
 - Automatische Aktualisierung der Liste der Transportunternehmen und der zusätzlichen Parameter (per Schaltfläche oder über täglichen Cron-Job)
 

# 2025-11-10

Folgende Funktionen wurden hinzugefügt:
 - Aktualisierung der Liste der Transportunternehmen und der zusätzlichen Einstellungen
 - Hinzufügen eines Feldes „Suche“ zum Filtern der Transportunternehmen in der Auswahlliste (nach Name, nach Land, ...)

Folgende Korrekturen:
 - Behebung einer PHP-Warnung bei der Anzeige des globalen Widgets in bestimmten Fällen (z. B. bei leerem Feld „states“)


# 2025-05-20

Folgende Funktionen wurden hinzugefügt:
 - Möglichkeit, einzelne Widgets und das globale Widget gleichzeitig anzuzeigen
 - Hinzufügen des Paketnamens zum Titel der Benachrichtigungen


# 2024-12-31

Folgende Funktionen wurden hinzugefügt:
 - Hinzufügen der Tags #url# und #location# für Benachrichtigungen und Szenarien


# 2024-10-17

Folgende Funktionen wurden hinzugefügt:
 - Hinzufügen der Felder „Spediteur“ und „Zusatzparameter“ im Modal, über das ein Paket über das Widget bzw. das Dashboard hinzugefügt werden kann

Folgende Korrekturen:
 - Datum und Uhrzeit werden nun in der in Ihrem Jeedom konfigurierten Zeitzone angezeigt (einzelnes Widget / globales Widget)
 - Berücksichtigung der von 17Track übersetzten Beschreibungen, wenn Sie eine bestimmte Sprache eingestellt haben
 

# 2024-09-28

Folgende Funktionen wurden hinzugefügt:
 - Implementierung eines Webhooks, der die von 17Track übermittelten Informationen in Echtzeit abruft. Der stündliche Cron-Job wird daher deaktiviert.
 - Hinzufügen einer Schaltfläche zum Senden einer Testbenachrichtigung auf der Konfigurationsseite des Plugins

> ACHTUNG!!!
> Sie müssen unbedingt die Webhook-Einstellungen in Ihrem 17Track-Dashboard konfigurieren, da Sie sonst keine Informationen mehr zu Ihren Sendungen erhalten!


# 2024-09-07

Folgende Funktionen wurden hinzugefügt:
 - Umstellung der APIs von ParcelsApp auf 17Track

> ACHTUNG!!!
> Es handelt sich um eine wesentliche Änderung des Plugins. Sie müssen es daher neu konfigurieren (insbesondere einen 17Track-API-Schlüssel einbinden) und anschließend alle Ihre Sendungen neu anlegen. Der gesamte Vorgang wird in der Dokumentation ausführlich beschrieben. Der große Vorteil dieser neuen Version besteht darin, dass die Anzahl der Sendungsverfolgungen auf 100 Sendungen pro Monat erhöht wurde (die Quote wird jeweils am 1. des Monats zurückgesetzt)!


# 2024-08-22

Folgende Funktionen wurden hinzugefügt:
 - Übersetzung des Plugins (Englisch, Deutsch, Spanisch, Italienisch, Portugiesisch)

Folgende Korrekturen:
 - Übertragung der Tags ins Englische

> ACHTUNG!!!
> Sie müssen daher das Format Ihrer Nachrichten (Benachrichtigungen) und/oder Ihrer Szenarien anpassen!


# 2024-08-01

Folgende Funktionen wurden hinzugefügt:
 - Automatisches Entfernen von Leerzeichen, falls diese vor und/oder nach der Tracking-ID vorhanden sind

Folgende Korrekturen:
 - Abruf von Informationen zu Spediteur, Abgangs- und Bestimmungsort (verschiedene Schlüssel im JSON-Format je nach Spediteur)


# 2024-07-27

Folgende Funktionen wurden hinzugefügt:
 - Möglichkeit, Pakete direkt über die Widgets hinzuzufügen oder zu entfernen (einzeln oder pauschal)
 - Möglichkeit, einen zweiten API-Schlüssel hinzuzufügen, um 10 weitere Pakete zu verfolgen
 - Hinzufügen einer Meldung im Jeedom-Nachrichtencenter, sobald die Grenze von 10 Paketen erreicht ist (nur bei der Synchronisierung, nicht bei der Aktualisierung)

Folgende Korrekturen:
 - PHP-Warnung im http.error-Protokoll beim Aufruf der Funktion buildList()
 - Aktualisierung der Gerätebestellungen, wenn das JSON-Objekt „Shipments“ leer ist


# 2024-07-16

Erste Version des Plugins „Paketverfolgung“ (parcelTracking)
 - Anbindung an die Parcelsapp-Cloud über API
 - Abruf von Paketinformationen: Status, Spediteur, Herkunftsland, Bestimmungsland, Lieferetappen, Liefertermin
 - Verfügbare Funktionen: Widget pro Paket oder insgesamt, Versand von Benachrichtigungen per Befehl und/oder Szenario, automatisches Löschen von Paketen nach einer festgelegten Zeitspanne

  
