---
layout: default
title: Verisure-Plugin – Änderungsprotokoll
lang: de_DE
pluginId: verisure
---

# Bitte unbedingt lesen!

**Nachfolgend finden Sie die Hinweise, Ergänzungen und Korrekturen zu den einzelnen Versionen des Plugins**

**Hinweis**: Wenn ein Update hier nicht aufgeführt ist, bedeutet dies, dass es sich lediglich um geringfügige Änderungen handelt, wie z. B. Anpassungen in der Dokumentation oder die Behebung kleinerer Fehler.

# 11.08.2026 [s]

Neuheiten:

- Übersetzung des Plugins in 5 Sprachen (EN, DE, ES, PT, IT)
- Umstellung der Protokolle auf Englisch
- Aktualisierung der Widgets im Rahmen einer Vereinheitlichung aller meiner Plugins

Achtung: Ab dieser Version sind Jeedom v4.4 und Debian 11 die erforderlichen Mindestvoraussetzungen!

# 31.05.2026 [s]

Aktualisierung des Symbols im Rahmen einer Vereinheitlichung aller meiner Plugins

# 22.02.2026 [s]

Folgende Funktionen wurden hinzugefügt:

- Unterstützung für QP-Außenbewegungsmelder (Typ 3)
- Unterstützung des Außenmodus (Typ 3)
- Aktualisierung über den Verlauf hinzufügen (Typ 1 & 3)
- Unterstützung des „Zwangsbetriebs“ (Typ 3)
- Unterstützung von Wassermeldern (Typ 2)

Folgende Korrekturen:

- Fehlerbehebung beim vernetzten Schloss (Typ 3)
- Fehlerbehebung bei der Anmeldeanfrage (Typ 2)
- Fehlerbehebung bei der Anzeige des Sensornamens im Widget (Typ 2)

# 31.12.2024 [s]

Folgende Funktionen wurden hinzugefügt:

- Berücksichtigung von vernetzten Schlössern bei Alarmanlagen der neuesten Generation (Typ 3)
- Code-Optimierung (Erstellung von Befehlen)

# 13.12.2024 [s]

Folgende Korrekturen:

- Behebung eines Fehlers bei der „getPhotos“-Abfrage für Alarme der neuesten Generation (Typ 3)

# 08.12.2024 [s]

Folgende Korrekturen:

- Behebung eines Fehlers bei der „logout“-Anfrage
- Code-Optimierung für PHP 8.0

# 09.02.2024 [s]

Folgende Funktionen wurden hinzugefügt:

- Hinzufügen des Alarmbildes zu den Miniaturansichten auf der Plugin-Seite

Folgende Korrekturen:

- Aktualisierung der Schaltfläche zur automatischen Erstellung eines Beitrags in der Jeedom-Community (vCore Jeedom 4.4 mini)
- Aktualisierung der Screenshots des Plugins

# 17.01.2024 [s]

Folgende Korrekturen:

- Alarmtyp 1 & 3: Korrektur aufgrund von Änderungen an den Verisure-APIs und dem Auftreten des Fehlers „Required request header 'x-installationNumber' not present“

# 07.01.2024 [s]

Folgende Funktionen wurden hinzugefügt:

- Offizielle Kompatibilität mit Alarmen vom Typ 3
- Ende des Supports für Jeedom-Versionen der Reihe 3.x. Die für den ordnungsgemäßen Betrieb des Plugins erforderliche Mindestversion des Core ist Version 4.0

# 19.11.2023 [s]

Folgende Funktionen wurden hinzugefügt:

- Kompatibilität von Jeedom v4.4 mit Debian 12 und PHP 8.x
- Hinzufügen einer Schaltfläche zur automatischen Erstellung eines Beitrags in der Jeedom-Community (vCore Jeedom 4.4 mini)

# 11.09.2023 [s]

Folgende Korrekturen:

- Anzeige des Widgets auf einem Smartphone/Tablet im Desktop-Modus

# 29.05.2023 [s]

Folgende Funktionen wurden hinzugefügt:

- Schaltfläche zum Ein- und Ausblenden von Passwörtern

Folgende Korrekturen:

- Alarm Typ 2: Erstellung der Informationsbefehle „Luftfeuchtigkeit“ für Rauchmelder

# 22.05.2023 [s]

Optimierung von Code und Protokollen

Folgende Korrekturen:

- Alarm Typ 1: Behebung eines Fehlers in der Funktion „GetPictures“ infolge der Änderung der APIs
- Alarm Typ 2: Automatische Umschaltung auf den sekundären Server, wenn der primäre Server ausgefallen ist, die Anmeldung jedoch weiterhin akzeptiert wird

# 11.04.2023 [s]

Korrekturen aufgrund von Änderungen an den Verisure-APIs (MFA-Authentifizierung und Anfragen – Migration von der REST-API zu GraphQL). Achtung, es handelt sich hierbei um ein **großes** Update. Sie müssen sich für jeden erstellten Alarm (Typ 1 & 2) erneut authentifizieren.

Folgende Funktionen wurden hinzugefügt:

- Unterstützung der neuen Alarmgeneration (derzeit über Typ 1)
- Überarbeitung der Widgets (Kompatibilität mit Jeedom Core v4.4)

# 18.10.2022 [s]

Folgende Funktionen wurden hinzugefügt:

- Neue Darstellung der Gerätesteuerungstabelle (kompatibel mit Jeedom Core v4.3)
- Neugestaltung der Anzeige der Seite „Ausstattung“

# 24.04.2022 [s]

Folgende Funktionen wurden hinzugefügt:

- Bildanforderungen für Alarme vom Typ 2

Folgende Korrekturen:

- Automatische Anpassung der Widget-Höhe, wenn mehrere Alarme auf dem Dashboard angezeigt werden
- Behebung eines Fehlers in der Funktion SetEqLogic()

# 02.02.2022 [s]

Folgende Korrekturen:

- Behebung des Anzeigefehlers beim Widget Typ 2 in Version 4.2, wenn der angemeldete Benutzer kein Administrator ist

# 31.01.2022 [s]

Folgende Funktionen wurden hinzugefügt:

- Test und Validierung des Plugins für die Version 4.2 des Jeedom-Kerns
- Sicherheit: Verschlüsselung der Passwörter der Geräte in der Jeedom-Datenbank
- Hinzufügen eines Tooltips zur Installationsnummer auf der Hauptseite eines Geräts
- Registerkarte „Verisure-Benachrichtigungen“: Hinzufügen des SMS-Benachrichtigungsszenarios
- Kleinere Änderungen an der Benutzeroberfläche (Integration des neuen Tabellenmodus in Version 4.2)

Folgende Korrekturen:

- Behebung von Fehlern im Jeedom-Protokoll „http.error“ (wenn die Variable SESSIONID leer ist)

# 07.07.2021 [s]

Folgende Funktionen wurden hinzugefügt:

- Hinzufügen von Info-/Aktionsbefehlen für Geräte des Alarmtyps 2 (Temperatur, Luftfeuchtigkeit, Status/Ein/Aus der angeschlossenen Steckdosen, Status (offen/geschlossen) der Öffnungssensoren)
- Anzeige eines Fehlers im Jeedom-Benachrichtigungscenter bei Auslösung des Alarms durch eine offen stehende Tür oder ein offen stehendes Fenster

Folgende Korrekturen:

- Änderungen und Korrekturen in den Protokollen

# 06.01.2021 [s]

Folgende Funktionen wurden hinzugefügt:

- Hinzufügen eines Info-Befehls „Netzwerkqualität“ für Alarme vom Typ 1. Dieser Indikator basiert auf der Anzahl der erfolgreichen Anfragen bei der Verbindung zur Verisure-Cloud.
- Anzeige der Luftfeuchtigkeit kompatibler Smartplugs für Alarme vom Typ 2 im Dashboard hinzugefügt

Folgende Korrekturen:

- Neue Darstellung der Objektliste (gemäß Core v4.1)
- Fehler bei der Zeitzone (UTC) im Aktivitätsbericht für Alarme vom Typ 2 (basiert nun auf der Jeedom-Zeitzone)
- Behebung von Fehlern im hhtp_error-Protokoll bei der Anzeige des Aktivitätsberichts für Alarme vom Typ 1

# 06.11.2020 [s]

Korrekturen aufgrund von Änderungen an den Verisure-APIs (Authentifizierung und Anfrageparameter)

# 13.10.2020 [s]

Folgende Funktionen wurden hinzugefügt:

- Unterstützung für Verisure-Alarme in Belgien und Nordeuropa. Der Befehl „Bilder anfordern“ ist für diese Art von Geräten noch nicht funktionsfähig.
- Möglichkeit, bestimmte Befehle im Widget auszublenden (Bildanforderung, Aktivierung im Nachtmodus, Aktivierung im Tagesmodus, Aktivierung im Außenmodus)
- Aktualisierung der Symbole im Aktivitätsbericht

Folgende Korrekturen:

- Anzeigefehler bei Homebridge im Nacht- und Tagesmodus (Zuhause)
- Anzeigefehler im Aktivitätsbericht bei Aktivierung des Nachtmodus über eine Fernbedienung

# 04.09.2020 [s]

Auslagerung der Plugin-Dokumentation

# 22.08.2020 [s]

Folgende Korrekturen:

- Umwandlung der „Error“-Protokolle in „Warning“-Protokolle, um eine Überlastung des Jeedom-Meldungszentrums zu vermeiden
- Kleinere Änderungen und Korrekturen

# 30.06.2020 [s]

Folgende Funktionen wurden hinzugefügt:

- Berücksichtigung von Mischmodi (Gesamt + Außen, Nacht + Außen, Tag + Außen)

# 14.06.2020 [s]

Folgende Funktionen wurden hinzugefügt:

- Einrichtung einer Vorlage für das mobile Dashboard, kompatibel mit v3 und v4 (Core2019 Light, Dark & Legacy)

# 11.06.2020 [s]

Folgende Funktionen wurden hinzugefügt und Fehler behoben:

- Bildanfragen
- Behandlung der Cron-Ausnahme täglich um 0:00 Uhr, um eine Aktualisierung während der Wartungsarbeiten an den Versiure-Servern zu vermeiden
- Einrichtung einer Vorlage für das Dashboard, die mit Version 3 und 4 kompatibel ist (Core2019 Light, Dark & Legacy)
- Umfassende Code-Optimierung
- Überarbeitung der Logs des Plugins

# 04.05.2020 [s]

Folgende Funktionen wurden hinzugefügt:

- Zugriff auf das Verisure-Aktivitätsprotokoll
- Registerkarte „Verisure-Benachrichtigungen“ zur Einrichtung von E-Mail- und SMS-Benachrichtigungsszenarien
  
# 15.04.2020 [s]

Erste Version des Verisure-Plugins

- Verbindung zur Verisure-Cloud
- Abruf der Anlageninformationen
- Funktionen: Aktivierung im Vollmodus, Aktivierung im Nachtmodus, Aktivierung im Tagesmodus, Aktivierung im Außenmodus, Deaktivierung, Abruf des Alarmstatus (manuell oder automatisch (alle 30 Minuten))
- Homebridge-Kompatibilität

**ACHTUNG**: In dieser ersten Version wird das Ereignis, das mit dem Auslösen des Alarms verbunden ist, noch nicht berücksichtigt!
