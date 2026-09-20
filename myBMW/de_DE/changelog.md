---
layout: default
title: myBMW-Plugin – Änderungsprotokoll
lang: de_DE
pluginId: myBMW
---

# Bitte unbedingt lesen!

**Nachfolgend finden Sie die Hinweise, Ergänzungen und Korrekturen zu den einzelnen Versionen des Plugins**

**Hinweis**: Wenn ein Update hier nicht aufgeführt ist, bedeutet dies, dass es sich lediglich um geringfügige Änderungen handelt, wie z. B. Anpassungen in der Dokumentation oder die Behebung kleinerer Fehler.


# 2026-07-31

Folgende Korrekturen:
 - Fehlerbehebung bei der Anzeige des Ladestands der Batterie in Prozent – Unterstützung des neuen Parameters „vehicle.drivetrain.batteryManagement.header“
 - Aktualisierung des Telematik-Katalogs durch Hinzufügen des Feldes „Condition Based Service“ (derzeit 246 Einträge)


# 2026-07-25

Folgende Korrekturen:
 - Aktualisierung des Telematik-Katalogs mit ausschließlich streamfähigen Feldern (derzeit 245)


# 2026-07-04

Folgende Funktionen wurden hinzugefügt:
 - Einrichtung eines anpassbaren Cron-Jobs, um „500“-Fehler der BMW-Server bei Abfragen zu festen Zeiten (xx:00) zu vermeiden. Standardmäßig ist dieser Cron-Job alle 2 Stunden, 5 Minuten nach der vollen Stunde (xx:05) eingestellt, aber Sie können die genaue Minute ändern, indem Sie den ersten Wert des Cron-Jobs (5 */2 * * *) anpassen.


# 2026-06-19

Folgende Funktionen wurden hinzugefügt:
 - Hinzufügen eines Parameters „Durchschnittspreis pro kWh“ zur Berechnung der Kosten für eine elektrische Aufladung, sichtbar im Diagramm zum Ladeverlauf (Panel)
 
Folgende Korrekturen:
 - Panel: Fehlerbehebung beim JavaScript-Fehler „Unexpected end of JSON input“ bei der Anzeige des Stromverbrauchsverlaufs


# 2026-05-31

Aktualisierung des Symbols im Rahmen einer Vereinheitlichung aller meiner Plugins


# 2025-11-09

Folgende Funktionen wurden hinzugefügt:
 - Umstellung auf die **offiziellen BMW-APIs**
 - Einrichtung des **MQTT-Streams** für den Echtzeit-Abruf von Informationen

**ACHTUNG** Es handelt sich um ein umfangreiches Update des Plugins, das eine vollständige Neukonfiguration erfordert. Bitte lesen Sie die Dokumentation sorgfältig durch und befolgen Sie alle beschriebenen Schritte nacheinander (insbesondere die Maßnahmen, die Sie in Ihrem BMW- oder Mini-Benutzerkonto vornehmen müssen).


# 2025-09-12

Folgende Funktionen wurden hinzugefügt:
 - Möglichkeit, das Ladeziel und die Ladestrombegrenzung für kompatible Elektro- und Plug-in-Hybridfahrzeuge einzustellen
 - Hinzufügen der entsprechenden Info-Befehle
 - Generierung eines generischen und maschinenspezifischen x_user_agent, um 403-Fehler (Out of call volume quota) zu vermeiden
 - Einführung einer automatischen Aktualisierung für den sofortigen Abruf von Informationen nach einer Fahrzeugsynchronisierung oder nach der Nutzung eines Remote-Dienstes, der dies erfordert

**ACHTUNG** Um diese neuen Funktionen nutzen zu können, müssen alle Ihre Fahrzeuge erneut synchronisiert werden (ohne Captcha).

Folgende Korrekturen:
 - Code-Optimierung
 - Konfigurationsseite: Fehlerbehebung bei der Funktion „Automatisch speichern“ vor einer Synchronisierung oder einer Änderung der Einstellungen
 - Konfigurationsseite: Fehlerbehebung beim automatischen Entfernen des Captchas nach einer Synchronisierung


# 2025-05-20

Folgende Funktionen wurden hinzugefügt:
 - Entfernung des „cron30“ und Hinzufügung eines anpassbaren Cron-Jobs auf der Konfigurationsseite des Plugins


# 2025-03-09

Folgende Funktionen wurden hinzugefügt:
 - Hinzufügen des Befehls „info chargingTarget“ (Ladeziel in %)

Folgende Korrekturen:
 - Bedienfeld: Fehlerbehebung bei der Anzeige des Öffnungs-/Schließstatus der Abdeckung


# 2025-01-31

Folgende Funktionen wurden hinzugefügt:
 - Hinzufügen des Befehls „totalEnergyCost“ (monatliche Gesamtstromkosten)
 - Reduzierung der Anzahl der Abfragen bei den BMW-Servern entsprechend den Fahrzeugkapazitäten (Beladung und Fahrstrecken)
 - Dashboard: Änderung der Grafik zu den Laststatistiken (Hinzufügen der Gesamtkosten)
 - Panel & Dashboard: Die Anzeige der Grafiken und Schaltflächen richtet sich nun nach den Möglichkeiten des Fahrzeugs

Folgende Korrekturen:
 - Panel: Fehlerbehebung bei der ersten Anzeige mit Tür- und Fenstersymbolen


# 2024-12-18

Folgende Korrekturen:
 - Fehlerbehebung: Überschreiben des Fahrtenverlaufs, wenn die Abfrage fälschlicherweise „TripHistoryNotActive“ zurückgibt


# 2024-12-08

Folgende Funktionen wurden hinzugefügt:
 - Berücksichtigung des von BMW bei der ersten Anmeldung vorgeschriebenen Captchas (siehe Dokumentation!!)
 - Anzeige der je nach Abonnement verfügbaren Dienste auf der Seite „Ausstattung“

Folgende Korrekturen:
 - Anzeige der Uhrzeit zusätzlich zum Datum in den Diagrammen


# 2024-10-22

Folgende Korrekturen:
 - Fehlerbehebung bei den Befehlen des Panels (sendPOI & vehicleFinder)


# 2024-09-06

Folgende Funktionen wurden hinzugefügt:
 - Unterstützung der neuen BMW- und Mini-APIs (App v4.7.2)

Folgende Korrekturen:
 - Bugfix für sendPOI-Anfrage (API-Änderung)
 - Bugfix für die vehicleFinder-Abfrage (API-Änderung)
 - Bugfix für die Abfrage „lastTrip“ (Berücksichtigung der Information „NoTripsYet“)


# 2024-07-07

Folgende Funktionen wurden hinzugefügt:
 - Hinzufügen von Ladesitzungen für Elektroautos mit Reichweitenverlängerer (Typ ELECTRIC_WITH_RANGE_EXTENDER)

Folgende Korrekturen:
 - Verbesserung der Anzeige von Beiträgen in der Community
 - Fehlerbehebung bei der Anzeige von Servicemeldungen (API-Änderung)
 - Fehlerbehebung bei der Abfrage „chargingStatistics“ (API-Änderung)
 - Fehlerbehebung bei der Anzeige des Panels und des Dashboards für Fahrzeuge vom Typ „mild_hybrid“ (API v2) oder „hybrid“ (API v1)


# 2024-04-17

Folgende Funktionen wurden hinzugefügt:
 - Hinzufügen einer Schaltfläche zum manuellen Löschen des Tokens des Geräts
 - Hinzufügen der OAuth2-Einstellungen
 - Hinzufügen der Funktion unset() für cURL-Anfragen (Kompatibilität mit PHP 8.x)

Folgende Korrekturen:
 - Korrektur der Fahrzeugsynchronisation nach der Änderung der APIs (SHA256-Verfahren)
 - Fehlerbehebung bei der Anzeige der Kacheln für Elektroautos mit Reichweitenverlängerer (Typ ELECTRIC_WITH_RANGE_EXTENDER)


# 2024-04-16

Folgende Funktionen wurden hinzugefügt:
 - Leichte Änderung am Design des Widgets und des Panels
 - Panel: Umschaltung der Anzeige der Ladevorgänge vom Tabellen- in den Grafikmodus
 - Dashboard: Hinzufügen eines Diagramms zu den Fahrstatistiken (sofern verfügbar)
 - Dashboard: Hinzufügen eines Diagramms zu den Fahrten des laufenden Monats (sofern verfügbar)
 - Rückblick auf den Cron-Job: Umstellung von 1 Stunde auf 30 Minuten (insbesondere für die Abfrage der letzten Fahrten)

Folgende Korrekturen:
- Fehlerbehebung bei der Anzeige der Ladevorgänge für ein Fahrzeug mit Verbrennungsmotor
- Korrektur der URL für Ladesitzungen nach der Änderung der APIs


# 2024-03-14

Folgende Funktionen wurden hinzugefügt:
 - Unterstützung der neuen BMW- und Mini-APIs v3.11.0
 - Reduzierung der Anzahl der Aufrufe an die BMW-Server (insbesondere Umstellung von cron30 auf cronHourly (vorübergehend oder dauerhaft))
 - Hinzufügen der API-Abfrage „lastTrips“. Ein neues Diagramm wird später im Dashboard verfügbar sein

Folgende Korrekturen:
 - Standardmäßige Speicherung der drei Befehle, die für die Diagramme des Panels bei deren Erstellung erforderlich sind
 - Entfernung der Abfrage „chargingStatistics“, die derzeit nicht mehr funktioniert


# 2024-02-09

Folgende Funktionen wurden hinzugefügt:
 - Hinzufügen des Fahrzeugbildes zu den Miniaturansichten auf der Plugin-Seite

Folgende Korrekturen:
 - Aktualisierung der Schaltfläche zur automatischen Erstellung eines Beitrags in der Jeedom-Community (vCore Jeedom 4.4 mini)
 - Aktualisierung der Screenshots des Plugins
 

# 2024-01-31

Folgende Korrekturen:
 - Korrektur der verbleibenden Kilometer für Elektroautos mit Reichweitenverlängerer (Typ ELECTRIC_WITH_RANGE_EXTENDER)
 

# 2023-11-30

Folgende Korrekturen:
 - Behandlung des Fehlers „429 – Rate Limit überschritten“
 - Anzeige des Panels, auch wenn das Gerät nicht sichtbar ist


# 2023-11-19

Folgende Funktionen wurden hinzugefügt:
 - Kompatibilität von Jeedom v4.4 mit Debian 12 und PHP 8.x
 - Unterstützung der neuen BMW- und Mini-APIs v3.9.0
 - Hinzufügen einer Schaltfläche zur automatischen Erstellung eines Beitrags in der Jeedom-Community (vCore Jeedom 4.4 mini)


# 2023-10-10

Folgende Funktionen wurden hinzugefügt:
 - Berücksichtigung des „Legacy“-Themas bei der Anzeige des Widgets und des Panels (vCore Jeedom < 4.4)

Folgende Korrekturen:
 - Rückblick auf die Umstellung der Anzeige der verbleibenden Kraftstoffmenge von Litern auf Prozent infolge der Änderung der APIs. Beide Optionen sind nun möglich und hängen vom jeweiligen Fahrzeug ab.
 - Korrektur des Befehls „Ladesitzungen“, der ungültiges JSON zurückgab, wenn es sich bei dem Fahrzeug nicht um ein Elektro- oder Hybridfahrzeug handelte


# 2023-10-04

Folgende Funktionen wurden hinzugefügt:
 - Unterstützung der neuen BMW- und Mini-APIs v3.3.1
 - Neugestaltung des Widgets mit einer Rückkehr zu einem traditionelleren/konventionelleren Design, um das Dashboard nicht unnötig zu überladen, wobei der Fokus ausschließlich auf wichtigen Informationen und Aktionen liegt
 - Es wurde ein wesentlich umfassenderes Dashboard hinzugefügt, das insbesondere Diagramme zu Kilometerstand, Kraftstoffmenge und Batteriestand enthält. Dazu müssen Sie in den Plugin-Einstellungen die Option „Dashboard“ aktivieren und die Protokollierung der Befehle „Kilometerstand“, „Kraftstoff“ und/oder „Batterie“ einschalten. Das Panel lässt sich über die Konfigurationsseite des Geräts anpassen (Symbol/Text für den Öffnungsstatus von Türen und Fenstern, Farben usw.).
 - Ergänzung des Ladeverlaufs für den laufenden Monat mit der verbrauchten Leistung und den ungefähren Kosten, sofern dies in der BMW- oder Mini-App eingestellt wurde
 - Hinzufügen von Informationen zur Last in den Rohdaten
 - Hinzufügen der Start-/Stopp-Tasten zum Aufladen von Elektrofahrzeugen
 - Möglichkeit, das Passwort auf dem Gerät anzuzeigen
 - Erste Kompatibilität mit Jeedom v4.4

Folgende Korrekturen:
 - Korrektur der Widget-Anzeige auf einem Smartphone/Tablet im Desktop-Modus (naja, sozusagen!)
 - Hinzufügen zusätzlicher Protokolle zur Fehlerbehebung beim Aktualisieren des Tokens
 - Umstellung der Anzeige des verbleibenden Kraftstoffvolumens von Litern auf % infolge der Änderung der APIs
 - Optimierung der Anzeige von Kontroll- oder Servicemeldungen (bei leerer Beschreibung)
 - Korrektur der Funktion „VehicleFinder“ aufgrund von Änderungen an den APIs. Es wird die zuletzt bekannte Position des Fahrzeugs verwendet, da nun die GPS-Koordinaten des Anfragenden an den Standort des Fahrzeugs gesendet werden müssen. Die Position wird nur zurückgegeben, wenn sich das Fahrzeug in einem Umkreis von weniger als 1,5 km befindet.


# 2023-01-15

Folgende Funktionen wurden hinzugefügt:
 - Unterstützung der neuen BMW- und Mini-APIs v2.12
 - Anzeige des Reifendrucks und des vorgeschriebenen Reifendrucks (Achtung: Diese Funktion ist fahrzeugabhängig. Die Informationen im Widget werden nur angezeigt, sofern sie verfügbar sind.)
 - Hinzufügen des Symbols und Berücksichtigung von Meldungen zur Scheibenwaschflüssigkeit

Folgende Korrekturen:
 - Anpassung der Fahrzeugansicht (3/4-Profilansicht für alle Fahrzeuge – erfordert eine erneute Synchronisierung und das Leeren des Caches)
 - Änderung der Anzeige der verbleibenden Ladezeit für Elektrofahrzeuge
 - Aktualisierung der Dokumentation


# 2022-09-25

Folgende Funktionen wurden hinzugefügt:
 - Hinzufügen der Fahrzeugpräsenz am Wohnort
 - Hinzufügen der Entfernung zwischen dem Fahrzeug und dem Wohnort
 - Berücksichtigung von Meldungen zu Bremsbelägen und Reifenverschleiß
 - Entfernung der beiden Befehle „Entfernungseinheit“ und „Kraftstoffeinheit“ (werden nicht verwendet)
 - Neue Darstellung der Gerätesteuerungstabelle (kompatibel mit Jeedom Core v4.3)
 

Folgende Korrekturen:
 - Entfernung des „oder“ aus dem Titel von Servicemeldungen, wenn kein Datum angegeben ist
 - Korrektur der blauen Farbe der Font-Awesome-Symbole im Flatdesign-Widget
 - Korrektur der API zum Abrufen von „Status-Ereignissen“ (Entfernung des Checkauth)
 - Aktualisierung der Dokumentation
 

# 2022-09-02

Folgende Funktionen wurden hinzugefügt:
 - Hinzufügen der neuen Befehle „Alle Türen“ und „Alle Fenster“
 - Neues „Flat Design“-Widget: Sie können das gewünschte Widget auf der Geräteseite auswählen (kompatibel mit Dark- und Light-Themes). Dieses Widget ist anpassbar (siehe Dokumentation).

Folgende Korrekturen:
 - Änderung des Timeouts für die Token-Aktualisierung, um Verbindungsfehler zu vermeiden


# 2022-08-01

Folgende Funktionen wurden hinzugefügt:
 - Hinzufügen von Symbolen zur Verwaltung der Fahrzeugkontrollmeldungen (Öl, Bremsen, Reifendruck, allgemeine Fahrzeugkontrolle)

Folgende Korrekturen:
 - Fehlerbehebung bei der Synchronisierung, wenn Geräte nicht gesichert wurden (ab sofort automatische Sicherung)


# 2022-07-25

Folgende Funktionen wurden hinzugefügt:
 - Unterstützung der neuen BMW- und Mini-APIs v2
 - Hinzufügen von Tooltips zum Widget, um den Status der Türen/Fenster anzuzeigen

Folgende Korrekturen:
 - Fehlerbehebung beim Refresh-Token


# 2022-06-12

Folgende Funktionen wurden hinzugefügt:
 - Unterstützung der neuen Mini-APIs
 - Zusammenführung der BMW- und Mini-APIs und Code-Optimierung
 - Unterstützung der französischen Sprache bei den zurückgegebenen Informationen (Einheiten und Meldungen des Fahrzeugs)
 - Umschaltung der Protokollierung von „Debug“ auf „Error“, wenn die Anfrage fehlschlägt
 - Verwendung der Logical-IDs der Geräte im Hinblick auf zukünftige Entwicklungen

Folgende Korrekturen:
 - Fehlerbehebung bei der Funktion „CreateCmd“
 - Korrektur der verbleibenden Kilometer bei Verbrennungsmotoren (Abzug der verbleibenden Kilometer bei Elektromotoren)
 - Anzeige der letzten Verbindung als „unbekannt“, wenn der Wert 01.01.1970 zurückgibt
 - Behebung des Problems bei der Anzeige von Nachrichten, wenn diese ein „’ “ enthalten


# 2022-05-28

Folgende Korrekturen:
 - Änderung der BMW Connected Drive-APIs (x-user-agent)
 - Fehlerbehebung bei der URL des Fahrzeugbildes, wenn Jeedom nicht im Stammverzeichnis installiert ist
 - Umrechnung von Meilen in Kilometer für die Gesamtstrecke


# 2022-04-24

Folgende Funktionen wurden hinzugefügt:
 - Unterstützung des „Secured“-Modus auf Widget-Ebene (Sperre)
 - Es wurde die Möglichkeit hinzugefügt, Befehle auf der Registerkarte „Ausstattung\Befehle“ zu protokollieren.
 - Unterstützung für die Anzeige historisierter Informationen im Hintergrund einer Kachel (Core v4.2)
 

# 2022-04-11

Folgende Funktionen wurden hinzugefügt:
 - Lüftung: Start-/Stopp-Modi hinzugefügt
 - Fahrzeugsuche: Fahrzeugortung in Echtzeit
 - Funktion zum Senden eines POI in den Fahrzeugnachrichten
 - Überprüfung des Status jeder Aktion über einen Zeitraum von 2 Minuten („PENDING“ -> „EXECUTED“ oder „ERROR“)
 - Hinzufügen der „Status“-Befehle für jeden Aktionsbefehl (zur Nachverfolgung über Szenarien)
 - Änderung der Aktionssymbole
 
Folgende Korrekturen:
 - Fehlerbehebung: Anzeige „Stecker getrennt“, wenn bei Elektrofahrzeugen der Wert „false“ statt „0“ angegeben ist
 - Code-Optimierung


# 2022-03-28

Erste Version des myBMW-Plugins
 - Verbindung zur BMW Connected Drive Cloud
 - Abruf von Fahrzeugdaten: Verriegelungsstatus, Status der Türen und Fenster, Gesamtkilometerstand, Ladezustand in % und verbleibende Reichweite bei Elektromotoren, Kraftstoffstand und verbleibende Reichweite bei Verbrennungsmotoren, Standort des Fahrzeugs, Warnmeldungen
 - Verfügbare Funktionen: Verriegeln/Entriegeln des Fahrzeugs, Einschalten der Belüftung, Lichthupen, Hupen
  
