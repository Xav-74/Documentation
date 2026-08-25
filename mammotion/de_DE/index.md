---
layout: default
title: Mammotion-Plugin – Dokumentation
lang: de_DE
pluginId: mammotion
---

# Übersicht

Mit diesem Plugin können Sie Ihre Mähroboter (Luba, Yuka) und Poolroboter (Spino) der Marke **Mammotion** über Jeedom steuern, genau wie mit der offiziellen App.

Die Datenübertragung erfolgt **automatisch und in Echtzeit**: Der Plugin-Daemon hält eine permanente Verbindung zur Mammotion-Cloud (MQTT) aufrecht und übermittelt jede Statusänderung an Jeedom.

> **Haftungsausschluss**
>
>Dieses Plugin basiert auf der inoffiziellen Bibliothek [PyMammotion](https://github.com/mikey0000/PyMammotion). Die Nutzungsbedingungen von Mammotion verbieten den inoffiziellen Zugriff auf deren API: Die Verwendung dieses Plugins erfolgt auf eigene Gefahr (theoretisches Risiko einer Kontosperrung).

<!-- -->

> **Tipp**
>
> Die **Mindestversion von Jeedom**, die für den ordnungsgemäßen Betrieb des Plugins erforderlich ist, ist **Version 4.4**
> Das Plugin ist bereits mit der **Version 4.6** von Jeedom sowie den **Debian-12-Versionen** kompatibel.

# Einrichtung des Plugins

Nach dem Herunterladen des Plugins:

- Aktivieren Sie das Plugin
- Starten Sie die Installation der Abhängigkeiten (⚠ Die Erstinstallation kann einige Zeit dauern: Kompilierung von Python 3.13 über pyenv)
- Geben Sie die **E-Mail-Adresse** und das **Passwort** Ihres Mammotion-Kontos ein
- Starten Sie den Daemon

> **Tipp**: Die Mammotion-Cloud lässt nur eine Sitzung pro Konto zu. Erstellen Sie ein **zweites Konto** speziell für Jeedom und weisen Sie diesem Ihre Roboter über die offizielle App zu, da sonst die mobile App bei jedem Start des Daemons (und umgekehrt) die Verbindung verliert.

## Einstellungen

| Parameter | Beschreibung |
| --------- | ----------- |
| E-Mail | E-Mail des Mammotion-Kontos |
| Passwort | Passwort für das Mammotion-Konto |
| Interner Socket-Port | Kommunikationsport Jeedom → Daemon (Standard: 44090) |
| Benutzerdefinierter Cron-Job | Häufigkeit der erzwungenen Aktualisierung (Standard: alle 15 Minuten) |

# Anlegen von Geräten

Die Geräte werden **automatisch** angelegt:

- Beim Start des Daemons wird die Liste der Roboter des Kontos abgerufen und fehlende Geräte werden angelegt
- Die Schaltfläche **Synchronisieren** auf der Plugin-Seite löst eine erneute Erkennung aus, aktualisiert die Status und ruft die **Liste der Mähzonen** sowie die Liste der **Aktivitäten** ab.

# Steuerungen

## Info-Befehle (Rasenmäher)

| Befehl | Beschreibung |
| -------- | ----------- |
| Online | Mit der Cloud verbundener Roboter |
| Batterie | Akkustand (%) |
| Wird geladen | Ladevorgang läuft |
| Status | Betriebsmodus (MODE_WORKING, MODE_CHARGING, ...) |
| Fortschritt | Fortschritt der aktuellen Aufgabe (%) |
| Gemähte Fläche | Gemähte Fläche pro Mähgang (m²) |
| Verbleibende/verstrichene Zeit | Geschätzte Dauer der aktuellen Aufgabe in Minuten |
| Messerhöhe | Übliche Schnitthöhe (mm) |
| Aktive Flügel | Flügelrotation |
| Regenerkennung | Aktiver Regensensor |
| GPS-Koordinaten | Position `Breitengrad,Längengrad` (leer, solange der Roboter seine GNSS-Referenz noch nicht übermittelt hat, siehe FAQ) |
| Ausrichtung | Kurs des Roboters (°) |
| WLAN-Signal | WLAN-RSSI (dBm) |
| Verschleiß der Klingen | Betriebsdauer der Klingen (h) |
| Gesamtstrecke | Seit Inbetriebnahme zurückgelegte Strecke (km) |
| Gesamtarbeitszeit | Kumulierte Arbeitszeit (Std.) |
| Batteriezyklen | Anzahl der Batteriezyklen |
| Firmware | Firmware-Version |
| Fehler | Aktive Fehlercodes |
| Verbindung | Verbindungsart des Roboters (WLAN, 3G/4G, BLE) |
| Letzte Aktion | Aktionsprotokoll (Mähen gestartet, Rückkehr zur Ladestation, Aufladen, Update ...). Verlauf: Sehen Sie sich den Befehlsverlauf an, um das vollständige Protokoll einzusehen |
| Letzte Aktualisierung | Zeitstempel der zuletzt empfangenen Daten |

## Befehle (Rasenmäher)

| Befehl | Beschreibung |
| -------- | ----------- |
| Aktualisieren | Statusaktualisierung erzwingen |
| Starten | Geplante Aufgabe starten/fortsetzen |
| Pause | Setzt die Aufgabe auf Pause |
| Fortsetzen | Die angehaltene Aufgabe fortsetzen |
| Aufgabe abbrechen | Bricht die aktuelle Aufgabe ab |
| Zurück zur Ladestation | Schickt den Roboter zurück zu seiner Ladestation |
| Station verlassen | Bringt den Roboter aus seiner Station heraus |
| Lamellenhöhe einstellen | Schieberegler 25 → 70 mm (in der Yuka-Reihe nicht vorhanden, wie in Home Assistant) |
| Geschwindigkeit einstellen | Schieberegler 20 → 60 cm/s (bei der Yuka-Serie nicht vorhanden) |
| Eine Fläche mähen | Startet den Mähvorgang für die ausgewählte Fläche (Liste wird durch Synchronisierung aktualisiert) |

## Poolroboter (Spino)

Die Unterstützung für Schwimmbadroboter ist in Version 1 eingeschränkter: Statusmeldung (Online, batterie, Status, Geschwindigkeit) und grundlegende Befehle (Start / Pause / Abbrechen / Zurück).

# Häufig gestellte Fragen

**Der Daemon startet nicht**: Überprüfen Sie die E-Mail-Adresse und das Passwort und sehen Sie sich anschließend das Protokoll `mammotion_daemon` an. Bei Fehlern bei den Abhängigkeiten führen Sie deren Installation erneut durch. Der Startvorgang kann auf dem Raspberry Pi 30 bis 60 Sekunden dauern (Laden der Bibliothek pymammotion).

**Das Modell / die Firmware / die Zonen werden nicht übertragen**: Der Roboter muss erreichbar sein (das Plugin fragt ihn ab und weckt ihn bei Bedarf während der Synchronisierung auf). Klicken Sie auf *Synchronisieren*: Die Zonen werden einige Sekunden später angezeigt, sobald die Karte tatsächlich vom Roboter empfangen wurde.

**Der Befehl „GPS-Koordinaten“ ist leer**: Dies ist nach einem Neustart des Daemons normal. Der Roboter übermittelt seine Geolokalisierungsdaten (RTK-Basisstation oder integriertes GNSS-Fix für Vision-/LiDAR-Modelle) nur in bestimmten Berichten, in der Regel wenn er aktiv ist. Der Befehl wird bei der nächsten Aktivität des Roboters ausgefüllt. Das Plugin zieht einen leeren Wert degenerierten Koordinaten (nahe dem Punkt 0,0 auf dem Globus) vor.

**Die Daten werden nicht in Echtzeit übertragen**: Der Roboter sendet nur dann Daten, wenn er aktiv ist oder sich sein Status ändert. Der Cron-Job sorgt zudem für eine regelmäßige Aktualisierung.

# Roadmap & Support

Dieses Plugin wird im Laufe der Zeit entsprechend Ihren Anforderungen und den Möglichkeiten der Mammotion-APIs weiterentwickelt.

> **Tipp**
>
> Sie können Ihren Verbesserungsvorschlag einreichen, indem Sie auf [GitHub](https://github.com/Xav-74/mammotion/issues/new) ein „Enhancement“-Issue erstellen.
> Zögern Sie auch nicht, sich in der Jeedom-Community über dieses Plugin auszutauschen!

Im Falle einer Störung können Sie direkt von der Hauptseite des Plugins aus ein Thema in der Community erstellen. Die relevanten Informationen zu Jeedom und dem Plugin werden automatisch hinzugefügt. Zögern Sie auch nicht, die Mammotion-Protokolle (Debug-Modus) zu kopieren, um eine schnellere Lösung zu erreichen!
