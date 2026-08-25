---
layout: default
title: Verisure-Plugin – Dokumentation
lang: de_DE
pluginId: verisure
---

# Übersicht

Mit diesem Jeedom-Plugin können Sie mit Ihrer Verisure Europe-Alarmanlage (Securitas Direct) genauso interagieren wie mit der offiziellen App „My Verisure“.
Es ist mit drei Generationen von Verisure-Geräten kompatibel.

> **Wichtig**
>
> **DIESES PLUGIN STEHT IN KEINER WEISE IN VERBINDUNG MIT DEN UNTERNEHMEN DER SECURITAS DIRECT-VERISURE-GRUPPE.**
>
> Die Nutzung dieses Plugins ist ausschließlich für persönliche und private Zwecke bestimmt.
> Daher billigt oder duldet der Entwickler keine unsachgemäße Nutzung und übernimmt keine rechtliche Haftung für die Funktionsfähigkeit oder Sicherheit Ihrer Alarmanlagen und Geräte.

<!-- -->

> **Tipp**
>
> Die **Mindestversion von Jeedom**, die für den ordnungsgemäßen Betrieb des Plugins erforderlich ist, ist **Version 4.4**
>
> Das Plugin ist bereits mit der **Version 4.6** von Jeedom sowie den **Debian-12-Versionen** kompatibel.

# Prinzip

Dieses Plugin kommuniziert über die Cloud mit den Verisure-APIs, daher **benötigt dieses Plugin eine Internetverbindung**.

Außerdem benötigen Sie ein Abonnement für die Dienste von Verisure. Dieses Plugin kommuniziert nämlich ausschließlich über die Cloud-Infrastruktur von Verisure mit der Zentrale Ihrer Alarmanlage. Es interagiert weder direkt mit der Zentrale noch mit den angeschlossenen Geräten. Wenn Ihr Abonnement gekündigt wurde, funktioniert dieses Plugin nicht.

# Einrichtung des Plugins

Nachdem Sie das Plugin heruntergeladen haben, müssen Sie es lediglich aktivieren. Wenn Sie über einen Alarm vom Typ 1 oder 3 verfügen, haben Sie die Möglichkeit, einen benutzerdefinierten Cron-Job zu aktivieren (und zu deaktivieren), um die Informationen zu Ihrem Alarm basierend auf dem Aktionsverlauf zu aktualisieren. Denken Sie daran, die Option in den Einstellungen Ihres Geräts zu aktivieren.

> **Tipp**
>
> Um die Fernunterstützung zu erleichtern, wird empfohlen, die Protokolle auf den **Debug-Modus** einzustellen.

![Konfiguration](../images/Config_verisure.png)

# Alarm hinzufügen

Die Konfiguration der Alarmgeräte ist über das Menü „Plugin > Sicherheit“ zugänglich.

![Alarm hinzufügen](../images/Plugin_verisure.png)

Klicken Sie auf die Schaltfläche „Hinzufügen“, um einen neuen Alarm zu erstellen. Nach dem Hinzufügen erhalten Sie folgende Anzeige:

| Feld | Beschreibung |
|---|---|
| **Gerätename** | Name Ihrer Alarmanlage |
| **Übergeordnetes Objekt** | gibt das übergeordnete Objekt an, zu dem das Gerät gehört |
| **Kategorie** | die Kategorie des Geräts (allgemeine Sicherheit bei einer Alarmanlage) |
| **Aktivieren** | damit werden Ihre Geräte aktiviert |
| **Sichtbar** | macht Ihre Geräte auf dem Dashboard sichtbar |
| **Alarmtyp** | Auswahl des Alarmtyps (Typ 1 = Südeuropa (Frankreich, Spanien, ...) / Typ 2 = Nordeuropa (Belgien, Großbritannien, ...) / Typ 3 = neue Generation (seit 2022)) |
| **Installationsnummer**<br/>(Alarm Typ 1 & 3) | Geben Sie Ihre Verisure-Installationsnummer ein. **Achtung! Diese Nummer muss genau mit der in Ihrer My Verisure-App angezeigten Nummer übereinstimmen. Wenn Ihre Installationsnummer mit einer 0 beginnt, diese aber in der App nicht vorhanden ist, löschen Sie sie!** |
| **Benutzername**<br/>(Alarmtyp 1, 2 und 3) | Geben Sie Ihre Verisure-ID ein, mit der Sie sich auf der Website [https://customers.securitasdirect.fr](https://customers.securitasdirect.fr) oder [https://mypages.verisure.com/](https://mypages.verisure.com) anmelden |
| **Passwort**<br/>(Alarm Typ 1, 2 und 3) | Geben Sie Ihr Passwort ein |
| **Alarmcode**<br/>(Alarm Typ 2) | Geben Sie den PIN-Code Ihres Alarms ein (4 oder 6 Ziffern) |
| **Land**<br/>(Alarmsysteme Typ 1 und 3) | Wählen Sie das Land aus, in dem Ihr Alarmsystem installiert ist (derzeit unterstützte Länder: Frankreich, Spanien, Großbritannien, Italien, Portugal). Bei Alarmanlagen vom Typ 2 erfolgt die Länderauswahl automatisch (derzeit unterstützte Länder: Belgien, Niederlande, Deutschland, Großbritannien, Dänemark, Finnland, Norwegen, Schweden) |

**Optionen** (Alarmtyp 1 & 3): Je nach Art Ihres Alarms haben Sie die Möglichkeit, die folgenden Optionen zu aktivieren:

- **Aktualisierung über den Verlauf** (Alarmtyp 1 & 3): Ermöglicht die Aktualisierung des Alarmstatus auf Grundlage des Aktionsverlaufs. Denken Sie daran, den Cron-Job in der Plugin-Konfiguration einzurichten und zu aktivieren.
- **Außenalarm** (Alarmtyp 3): Bitte ankreuzen, wenn Sie über Außensensoren verfügen und der Außenmodus an Ihrer Alarmanlage aktiviert ist
- **Zwangsaktivierung** (Alarmtyp 3): Ermöglicht die erzwungene Aktivierung des Alarms, auch wenn eine Tür oder ein Fenster offen geblieben ist. Auf eigene Gefahr!

Klicken Sie anschließend einfach auf die Schaltfläche **Authentifizierung**, um die Informationen zu Ihrer Alarmanlage abzurufen. Wenn alles reibungslos verläuft, erhalten Sie eine Übersicht über alle in Ihrem Haushalt installierten Geräte (ID, Name und Typ).

> **Achtung**
>
> Es wird dringend empfohlen, in Ihrem Verisure-Bereich einen speziellen Benutzer für Jeedom mit „Administrator“-Rechten anzulegen. Das Plugin unterstützt die Multi-Faktor-Authentifizierung (MFA) für Alarme vom Typ 1. Dies gilt auch für Alarme vom Typ 2, es wird jedoch empfohlen, diese Option vorerst zu deaktivieren, da die Aktualisierung des Tokens sehr aufwendig ist. Bei Verbindungsproblemen können Sie über die Schaltfläche **Token löschen** die gespeicherten Cookies löschen und die Authentifizierung von vorne beginnen.

<!-- -->

> **Tipp**
>
> Vergessen Sie nicht, Ihre Daten **zu speichern**!
>
> Beim Speichern werden neue Befehle auf dem Gerät erstellt.

![Ausstattung](../images/Eqpt_verisure.png)

# Aktivitätsprotokoll

Sie können das Aktivitätsprotokoll Ihrer Alarmanlage einsehen, indem Sie auf die Schaltfläche **Aktivitätsprotokoll** klicken. Dieser Bericht enthält die letzten Ereignisse, die an Ihrer Zentrale aufgetreten sind (Einbruchalarme, SOS-Meldungen, Aktivierung/Deaktivierung, Stromausfall).

![Tagebuch](../images/journal_verisure.png)

# Benachrichtigungen von Verisure

Die Verisure-APIs ermöglichen keine automatische, direkte Übermittlung von Informationen und Benachrichtigungen, wie beispielsweise das Aktivieren/Deaktivieren über einen Ausweis oder eine Fernbedienung oder das Auslösen des Alarms.
Auf dieser Registerkarte wird detailliert beschrieben, wie Sie Jeedom (Szenarien) so konfigurieren können, um diese Lücke zu schließen für:

- **E-Mail-Benachrichtigungen** zum Aktivieren/Deaktivieren des Alarms über das Plugin [Mail Listener](https://www.jeedom.com/market/index.php?v=d&p=market&author=Lunarok&&name=maillistener) von Lunarok!
- **SMS-Benachrichtigungen** zum Aktivieren/Deaktivieren des Alarms über das [SMS](https://www.jeedom.com/market/index.php?v=d&p=market_display&id=16)-Plugin von Jeedom SAS!

# Steuerungen

Derzeit gibt es mehrere Befehle, die im Folgenden beschrieben werden.

## Info

- **Aktivierungsstatus**: Zeigt den Aktivierungsstatus des Alarms an
  - **0**: deaktiviert
  - **1**: Armee
- **Alarmstatus**: Zeigt den Status des Alarms an
  - **0**: Normalzustand
  - **1**: Alarm ausgelöst
- **Alarmmodus**: Zeigt an, in welchem Modus der Alarm aktiviert ist
  - **Vollmodus**: Der Alarm ist im Vollmodus aktiviert (Alarmtyp 1, 2 und 3)
  - **Nachtmodus**: Der Alarm ist im Nachtmodus aktiviert (Alarmtyp 1)
  - **Tagmodus**: Die Alarmanlage ist im Tagmodus aktiviert (Alarmtyp 1)
  - **Außenmodus**: Der Alarm ist im Außenmodus aktiviert (Alarm Typ 1)
  - **Teilalarm**: Der Alarm ist im Teilalarmmodus aktiviert (Alarmtyp 2 und 3)
- **Netzqualität**: Ermöglicht die Einschätzung der 3G/4G-Netzqualität für Alarme vom Typ 1 und 3 (basierend auf den Ergebnissen der letzten 25 Abfragen)

> **Achtung**
>
> In dieser Version wird das Ereignis im Zusammenhang mit der Auslösung des Alarms noch nicht berücksichtigt!

## Aktion

| Befehl | Beschreibung |
|---|---|
| **Gesamtmodus** | aktiviert den Alarm im Gesamtmodus (Alarmtyp 1, 2 und 3) |
| **Nachtmodus** | aktiviert den Alarm im Nachtmodus (Alarmtyp 1) |
| **Tagesstandby** | aktiviert den Alarm im Tagesstandby (Alarm Typ 1) |
| **Außenmodus** | aktiviert den Alarm im Außenmodus (Alarm Typ 1) |
| **Teilalarm** | aktiviert den Alarm im Teilalarmmodus (Alarmtyp 2 & 3) |
| **Deaktivierung** | Deaktiviert den Alarm unabhängig vom Modus (Alarmtyp 1, 2 und 3) |
| **Aktualisieren** | aktualisiert den Alarmstatus (Alarmtyp 1, 2 und 3) |
| **Bildanforderung** | löst die Aufnahme eines Fotos durch einen kompatiblen Bewegungsmelder aus und zeigt es auf dem Bildschirm an (Alarmtyp 1, 2 und 3) |

> **Tipp**
>
> Bei einer Bildanforderung wird das Foto gespeichert und im Verzeichnis **/verisure/data/** abgelegt. Denken Sie daran, das Verzeichnis von Zeit zu Zeit zu leeren!

![Steuerungen](../images/Command_verisure.png)

## Homebridge-Kompatibilität

Die Befehle wurden so erstellt, dass sie von Haus aus mit dem [Homebridge](https://www.jeedom.com/market/index.php?v=d&p=market&author=Nebz&&name=Homebridge)-Plugin von Nebz kompatibel sind! (Vielen Dank an ihn für seine Hilfe)

Es sind also keine speziellen Einstellungen im Homebridge-Plugin erforderlich.
In HomeKit wird die Alarmfunktion in vier Modi verwaltet: „Aus“, „Nacht“, „Fern“ und „Zuhause“.

![HomeKit](../images/homekit.png)

Die Zuordnung der Modi lautet wie folgt:

| HomeKit | Verisure-Plugin |
|---|---|
| **Zuhause** | Tagesmodus / Teilmodus |
| **Fernsteuerung** | Gesamtmodus |
| **Nacht** | Nachtmodus |
| **Deaktiviert** | Deaktivierung |

Die anderen Modi (Außenmodus usw.) werden von HomeKit nicht berücksichtigt.

## Alarmgeräte vom Typ 2

Bei Alarmen vom Typ 2 (**und ausschließlich Typ 2!**) erstellt das Plugin die Befehle, die den Geräten des Alarms zugeordnet sind:

| Gerät | Erstellte Befehle |
|---|---|
| **Smart-Steckdose** | Status / Ein / Aus |
| **Kompatible Sensoren** | Temperatur / Luftfeuchtigkeit |
| **Öffnungssensor** | Status (offen / geschlossen) |

Standardmäßig werden die Steuerelemente nicht im Widget angezeigt. Das Ziel ist es, anschließend für jeden Sensor ein virtuelles Element zu erstellen. Auf diese Weise können Sie die Informationen zu Öffnungs-/Schließstatus, Temperatur und Luftfeuchtigkeit der verschiedenen Sensoren abrufen oder die angeschlossenen Verisure-Steckdosen über Jeedom fernsteuern.

> **Achtung**
>
> Die Statusmeldungen werden nicht in Echtzeit aktualisiert (derzeit aufgrund von Verisure nicht möglich). Sie müssen den Alarmstatus über ein Szenario aktualisieren oder auf den cron30 warten. Eine individuelle Anpassung des cron (5, 10, 15, 30...) wird zu einem späteren Zeitpunkt verfügbar sein. **Achten Sie jedoch darauf, nicht zu viele Anfragen an die Verisure-Server zu senden, da Sie sonst auf die Blacklist gesetzt werden könnten.**

## Alarmgeräte vom Typ 3

Bei Alarmen vom Typ 3 (**und ausschließlich vom Typ 3!**) erstellt das Plugin die Befehle, die den Geräten des Alarms zugeordnet sind:

| Gerät | Erstellte Befehle |
|---|---|
| **Vernetztes Schloss** | Status / Öffnen / Schließen |

# Dashboard

Das Plugin enthält ein Dashboard, mit dem Sie:

- Alarmstatus abfragen (Alarmtyp 1, 2 und 3)
- Alarmstatus abfragen (Alarmtyp 1, 2 und 3)
- Den Alarmmodus kennen (Alarmtyp 1, 2 und 3)
- Den Status des vernetzten Schlosses abfragen (Alarm Typ 3)
- Gesamtalarmmodus aktivieren (Alarmtyp 1, 2 und 3)
- Nachtmodus der Alarmanlage aktivieren (Alarmtyp 1)
- Tagesmodus der Alarmanlage aktivieren (Alarmtyp 1)
- Den Außenalarmmodus aktivieren (Alarm Typ 1)
- Teilalarmmodus aktivieren (Alarmtyp 2 und 3)
- Alarm deaktivieren (Alarmtyp 1, 2 und 3)
- Alarmstatus aktualisieren (Alarmtyp 1, 2 und 3)
- Das vernetzte Schloss öffnen/schließen (Alarm Typ 3)
- Anforderung einer Fotoaufnahme über einen kompatiblen Bewegungsmelder (Alarmtyp 1, 2 und 3)
- Anzeige von Informationen zu bestimmten Geräten wie Temperatur, Luftfeuchtigkeit oder Öffnungsstatus (**!!! NUR Alarmtyp 2 !!!**)
- Anzeige der 3G/4G-Netzqualität des Alarms (Alarmtyp 1 & 3)
  - Symbol mit 5 Balken: Keine fehlerhaften Anfragen in den letzten 25
  - Symbol mit 4 Balken: 1 bis 2 fehlerhafte Anfragen bei den letzten 25
  - Symbol mit 3 Balken: 3 bis 7 fehlerhafte Anfragen bei den letzten 25
  - Symbol mit 2 Balken: 8 bis 17 fehlerhafte Anfragen bei den letzten 25
  - Symbol mit einem Balken: 18 bis 24 fehlerhafte Anfragen bei den letzten 25
  - Symbol „0 Balken“: 25 fehlerhafte Anfragen von den letzten 25

> **Achtung**
>
> Es kann manchmal mehrere Sekunden dauern, bis Befehle ausgeführt werden (zwischen 15 und 25 Sekunden, bei Fotoanfragen sogar mehr als eine Minute). Dies hängt von der Qualität der 3G- oder 4G-Verbindung der Basisstation Ihrer Alarmanlage ab. Haben Sie also bitte etwas Geduld!

![Dashboard Typ 1](../images/Dashboard_verisure.png)

![Dashboard Typ 2](../images/Dashboard_verisure_2.png)

![Dashboard Typ 3](../images/Dashboard_verisure_3.png)

# Aktualisierung

## Automatik

Ein CRON-Job wird automatisch im 30-Minuten-Takt erstellt, wie in der Plugin-Konfiguration angegeben.

> **Achtung**
>
> Dieser Wert von 30 Minuten kann sich je nach Rückmeldungen und Anfragen der Nutzer sowie der Anzahl der von Verisure pro Stunde auf ihren Servern zugelassenen Anfragen ändern!

## Handbuch

Sie können jederzeit den Befehl **Aktualisieren** verwenden, um den Status des Alarms zu aktualisieren.

# Roadmap & Support

Dieses Plugin wird im Laufe der Zeit entsprechend Ihren Anforderungen und den Möglichkeiten der Verisure-APIs weiterentwickelt.

> **Tipp**
>
> Sie können Ihren Verbesserungsvorschlag einreichen, indem Sie auf [GitHub](https://github.com/Xav-74/verisure/issues/new) ein „Enhancement“-Issue erstellen.
>
> Zögern Sie auch nicht, sich in der Jeedom-Community über dieses Plugin auszutauschen!

Im Falle einer Störung können Sie direkt von der Startseite des Plugins aus ein Thema in der Community erstellen. Die relevanten Informationen zu Jeedom und dem Plugin werden automatisch hinzugefügt. Zögern Sie nicht, auch die Verisure-Protokolle (Debug-Modus) zu kopieren, um eine schnellere Lösung zu erreichen!

![Community](../images/community.png)
