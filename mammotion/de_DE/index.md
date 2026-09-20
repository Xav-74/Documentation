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

> **Tipp**
>
>Die Mammotion-Cloud erlaubt nur eine Sitzung pro Konto. Erstellen Sie ein **Zweitkonto** speziell für Jeedom und weisen Sie diesem Ihre Roboter über die offizielle App zu. Andernfalls wird die mobile App bei jedem Start des Daemons (und umgekehrt) getrennt.

## Einstellungen

| Parameter | Beschreibung |
| --------- | ----------- |
| E-Mail | E-Mail des Mammotion-Kontos |
| Passwort | Passwort für das Mammotion-Konto |
| Interner Socket-Port | Kommunikationsport Jeedom → Daemon (Standard: 44090) |
| Benutzerdefinierter Cron-Job | Häufigkeit der erzwungenen Aktualisierung (Standard: alle 15 Minuten) |

# Anlegen von Geräten

Die Erkennung der Roboter erfolgt über die Schaltfläche **Synchronisieren** auf der Plugin-Seite. Das Plugin fragt das Mammotion-Konto ab, legt fehlende Geräte an, aktualisiert deren Modell und Firmware und ruft anschließend die Liste der Mähbereiche sowie die Liste der Aktivitäten ab.

Starten Sie es nach dem ersten Start des Daemons und anschließend jedes Mal, wenn Sie Ihrem Konto einen Roboter hinzufügen oder die Einstellungen Ihrer Roboter, Zonen und/oder Aktivitäten über die App ändern.

Der Robotertyp wird automatisch erkannt (Rasenmäher oder Poolroboter) und bestimmt die erstellten Befehle sowie das auf dem Dashboard angezeigte Widget. Die Zonen und Aktivitäten gelten nur für Rasenmäher.

Auf der Geräteseite und im entsprechenden Widget wird ein Foto angezeigt, das dem erkannten Modell entspricht. Ist das genaue Modell nicht verfügbar, wird das Foto des am ehesten entsprechenden Modells verwendet.

# Bedienelemente – Rasenmäher (Luba, Yuka)

## Info-Befehle

| Befehl | Beschreibung |
| -------- | ----------- |
| Online | Mit der Cloud verbundener Roboter |
| Batterie | Akkustand (%) |
| Status | Betriebsmodus (Mähen, Laden, Rückkehr zur Ladestation, ...) |
| Geschwindigkeit | Aktuelle Fahrgeschwindigkeit (m/s) |
| Wird geladen | Ladevorgang läuft |
| Auf der Basis | Roboter auf seiner Station |
| Fortschritt | Fortschritt der aktuellen Aufgabe (%) |
| Gemähte Fläche | Gemähte Fläche pro Mähgang (m²) |
| Aktueller Bereich | Name des Bereichs, der gerade gemäht wird |
| Verbleibende/verstrichene Zeit | Geschätzte Dauer der aktuellen Aufgabe in Minuten |
| Messerhöhe | Übliche Schnitthöhe (mm) |
| Aktive Flügel | Flügelrotation |
| Regenerkennung | Aktiver Regensensor |
| GPS-Koordinaten | Position `Breitengrad,Längengrad` (leer, solange der Roboter seine GNSS-Referenz noch nicht übermittelt hat, siehe FAQ) |
| Ausrichtung | Kurs des Roboters (°) |
| WLAN-/Bluetooth-/Mobilfunk-Signal | RSSI jeder Verbindung (dBm) |
| Betriebszeit der Klingen | Kumulierter Verschleiß der Klingen (h) |
| Verschleißgrenze der Klingen | Grenze, ab der ein Austausch empfohlen wird (h) |
| Verbleibende Lebensdauer der Klingen | Differenz zwischen Schwellenwert und kumuliertem Verschleiß (h) |
| Gesamtstrecke | Seit Inbetriebnahme zurückgelegte Strecke (km) |
| Gesamtarbeitszeit | Kumulierte Arbeitszeit (Std.) |
| Batteriezyklen | Anzahl der Batteriezyklen |
| Firmware | Firmware-Version |
| Fehler | Aktive Fehlercodes mit Beschreibung |
| Verbindung | Verbindungsart des Roboters (WLAN, 3G/4G, BLE) |
| Letzte Aktion | Aktionsprotokoll (Mähen gestartet, Rückkehr zur Ladestation, Aufladen, Update ...). Verlauf: Sehen Sie sich den Befehlsverlauf an, um das vollständige Protokoll einzusehen |
| Sollwert für die Messerhöhe / Sollwert für die Geschwindigkeit | Der zuletzt über die Schieberegler eingestellte Wert wird beim Start eines Mähvorgangs wiederverwendet |
| Überwinterung | Überwinterungsmodus aktiv oder deaktiviert (siehe *Überwinterungsmodus*) |
| Letzte Aktualisierung | Zeitstempel der zuletzt empfangenen Daten |

## Aktionsbefehle

| Befehl | Beschreibung |
| -------- | ----------- |
| Aktualisieren | Statusaktualisierung erzwingen |
| Starten | Geplante Aufgabe starten/fortsetzen |
| Pause | Setzt die Aufgabe auf Pause |
| Fortsetzen | Die angehaltene Aufgabe fortsetzen |
| Aufgabe abbrechen | Bricht die aktuelle Aufgabe ab |
| Zurück zur Ladestation | Schickt den Roboter zurück zu seiner Ladestation |
| Station verlassen | Bringt den Roboter aus seiner Station heraus |
| Klingenhöhe einstellen | Schieberegler in mm, Standardwert 30 → 70 (bei der Yuka-Serie nicht vorhanden) |
| Geschwindigkeit einstellen | Schieberegler in m/s, Standardwert 0,2 → 0,6 (bei der Yuka-Reihe nicht vorhanden) |
| Eine Fläche mähen | Startet den Mähvorgang für die ausgewählte Fläche (Liste wird durch Synchronisierung aktualisiert) |
| Eine Aktivität starten | Eine in der App geplante Aktivität starten (Liste wird durch Synchronisierung aktualisiert) |
| Wintermodus umschalten | Aktiviert den Wintermodus oder deaktiviert ihn, falls er bereits aktiv ist (siehe *Wintermodus*) |

> **Tipp**
>
> Die Endpunkte der beiden Schieberegler werden automatisch an die von Ihrem Modell gemeldeten Kapazitäten angepasst: Die oben genannten Werte dienen lediglich als Ausweichwerte.

Für den Mähroboter wird ein spezielles Widget bereitgestellt, das die 7 (Yuka) bzw. 9 (Luba) Bedientasten sowie die wichtigsten Informationen enthält.

# Steuerung – Poolroboter (Spino)

## Info-Befehle

| Befehl | Beschreibung |
| -------- | ----------- |
| Online | Mit der Cloud verbundener Roboter |
| Batterie | Akkustand (%) |
| Wird geladen | Ladevorgang läuft |
| Status | Roboter-Status: Im Standby-Modus, Vorbereitung, Wartet auf das Zu-Wasser-Lassen, Reinigung läuft, Rückkehr zur Ladestation, Lädt, Verlässt die Ladestation, Rückruf läuft |
| Reinigungsmodus | Aktiver Modus: Komplett, Boden, Wände, Eco – oder *Keiner*, wenn der Roboter nicht reinigt (siehe FAQ) |
| WLAN-Signal | WLAN-RSSI (dBm) |
| Bluetooth-Signal | Bluetooth-RSSI (dBm) |
| Mit WLAN verbunden | WLAN-Verbindung hergestellt |
| Firmware | Firmware-Version |
| Überwinterung | Überwinterungsmodus aktiv oder deaktiviert (siehe *Überwinterungsmodus*) |
| Letzte Aktualisierung | Zeitstempel der zuletzt empfangenen Daten |

## Aktionsbefehle

| Befehl | Beschreibung |
| -------- | ----------- |
| Aktualisieren | Statusaktualisierung erzwingen |
| Komplettreinigung | Reinigung des Bodens und der Wände (Modus **ALL** in der App) |
| Bodenreinigung | Nur Beckenboden (**FLOOR**) |
| Wandreinigung | Nur Wände (**WALL**) |
| Umweltfreundliche Reinigung | Oberflächenreinigung (**ECO**) |
| Anhalten und zum Aufladen zurückkehren | Unterbricht den laufenden Reinigungsvorgang und schickt den Roboter zum Aufladen zurück (Schaltfläche *Aufladen* in der App) |
| Wintermodus umschalten | Aktiviert den Wintermodus oder deaktiviert ihn, falls er bereits aktiv ist (siehe *Wintermodus*) |

> **Tipp**
>
> Die 4 Modi entsprechen genau den 4 Schaltflächen auf dem Startbildschirm der Mammotion-App. Im Protokoll sind weitere Modi vorhanden (Wasserstand, Benutzerdefiniert), die jedoch noch nicht verfügbar sind.

Für den Poolroboter wird ein spezielles Widget bereitgestellt, das die 5 Bedientasten und die wichtigsten Informationen enthält.

# Überwinterungsmodus

Wenn ein Roboter für die Saison eingelagert wird, wird er ausgeschaltet. Der **Überwinterungsmodus** versetzt das Gerät in den Ruhezustand.

Wenn diese Funktion aktiv ist:

- Der **Cron-Job ignoriert das Gerät**: keine Aktualisierungsanfragen mehr;
- Die **Steuerbefehle sind gesperrt** und geben eine eindeutige Meldung zurück, auch wenn sie aus einem Szenario heraus aufgerufen werden;
- Das **Gerät bleibt** auf dem Dashboard sichtbar und behält seinen Verlauf bei;
- Der **Daemon läuft** für Ihre anderen Roboter weiterhin normal weiter.

Diese Einstellung ist **gerätespezifisch**: Sie können Ihren Poolroboter winterfest machen und ihn trotzdem weiter mähen lassen.

## So aktivieren Sie die Funktion

Drei Möglichkeiten, die sich alle auf dieselbe Einstellung auswirken:

- das Kontrollkästchen **Wintermodus** im Abschnitt *Winterbetrieb* auf der Geräteseite;
- das **Symbol in der Titelleiste des Widgets**: eine Schneeflocke, wenn sich der Roboter im Standardmodus befindet, eine Sonne, wenn er im Wintermodus ist. Ein Klick wechselt zwischen den beiden Modi hin und her;
- Der Befehl **Winterbetrieb umschalten**, der in einem Szenario verwendet werden kann.

Der Befehl „**Überwinterung**“ zeigt den aktuellen Status an. Er wird protokolliert, sodass sich die Daten für den Beginn und das Ende der Überwinterung nachverfolgen lassen.

> **Tipp**
>
> Der Befehl *Wintermodus umschalten* kehrt den Status um: Wird er zweimal aufgerufen, kehrt er zum Ausgangszustand zurück. In einem Szenario, das den Wintermodus automatisiert, testen Sie zunächst den Befehl info **Wintermodus** und rufen Sie die Umschaltung nur auf, wenn der Wert 0 ist.

Nach dem Überwintern werden die Daten beim nächsten Durchlauf des Cron-Jobs wieder angezeigt oder sofort, wenn Sie auf *Aktualisieren* klicken.

# Häufig gestellte Fragen

**Der Daemon startet nicht**: Überprüfen Sie die E-Mail-Adresse und das Passwort und sehen Sie sich anschließend das Protokoll `mammotion_daemon` an. Bei Fehlern bei den Abhängigkeiten führen Sie deren Installation erneut durch. Der Startvorgang kann auf dem Raspberry Pi 30 bis 60 Sekunden dauern (Laden der Bibliothek pymammotion).

**Das Modell / die Firmware / die Zonen werden nicht übertragen**: Der Roboter muss erreichbar sein (das Plugin fragt ihn ab und weckt ihn bei Bedarf während der Synchronisierung auf). Klicken Sie auf *Synchronisieren*: Die Zonen werden einige Sekunden später angezeigt, sobald die Karte tatsächlich vom Roboter empfangen wurde.

**Der Befehl „GPS-Koordinaten“ ist leer**: Dies ist nach einem Neustart des Daemons normal. Der Roboter übermittelt seine Geolokalisierungsdaten (RTK-Basisstation oder integriertes GNSS-Fix für Vision-/LiDAR-Modelle) nur in bestimmten Berichten, in der Regel wenn er aktiv ist. Der Befehl wird bei der nächsten Aktivität des Roboters ausgefüllt. Das Plugin zieht einen leeren Wert degenerierten Koordinaten (nahe dem Punkt 0,0 auf dem Globus) vor.

**Die Daten werden nicht in Echtzeit übertragen**: Der Roboter sendet nur dann Daten, wenn er aktiv ist oder sich sein Status ändert. Der Cron-Job sorgt zudem für eine regelmäßige Aktualisierung.

**Mein Roboter aktualisiert sich nicht mehr und die Tasten reagieren nicht mehr**: Überprüfen Sie das Symbol in der Titelleiste des Widgets. Eine Sonne zeigt an, dass sich das Gerät im **Winterschlafmodus** befindet: Der Cron-Job ignoriert es und seine Befehle sind gesperrt. Ein Klick auf das Symbol versetzt es wieder in den Standardmodus.

**Spino: Der Reinigungsmodus zeigt „Keiner“ an**: Dies ist das normale Verhalten im Ruhezustand. Ein ausgeschalteter Spino meldet in seinen Statusmeldungen keinen aktiven Modus. Verwenden Sie den Befehl **Status**, um festzustellen, ob der Roboter arbeitet.

**Spino: Warum gibt es keine Pause-Taste?**: Das Protokoll des Roboters sieht keine solche vor. Um einen Zyklus zu unterbrechen, verwenden Sie *Stopp und Rückkehr zur Ladestation*.

# Roadmap & Support

Dieses Plugin wird im Laufe der Zeit entsprechend Ihren Anforderungen und den Möglichkeiten der Mammotion-APIs weiterentwickelt.

> **Tipp**
>
> Sie können Ihren Verbesserungsvorschlag einreichen, indem Sie auf [GitHub](https://github.com/Xav-74/mammotion/issues/new) ein „Enhancement“-Issue erstellen.
> Zögern Sie auch nicht, sich in der Jeedom-Community über dieses Plugin auszutauschen!

Im Falle einer Störung können Sie direkt von der Hauptseite des Plugins aus ein Thema in der Community erstellen. Die relevanten Informationen zu Jeedom und dem Plugin werden automatisch hinzugefügt. Zögern Sie auch nicht, die Mammotion-Protokolle (Debug-Modus) zu kopieren, um eine schnellere Lösung zu erreichen!
