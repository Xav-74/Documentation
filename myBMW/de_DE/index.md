---
layout: default
title: My BMW-Plugin – Dokumentation
lang: de_DE
pluginId: myBMW
---

# Übersicht

Mit diesem Plugin können Sie mit Ihrem **BMW**- oder **Mini**-Fahrzeug interagieren, das mit den Connected Drive-Diensten ausgestattet ist – genau wie mit der offiziellen App „My BMW“ oder „Mini“.

> **Tipp**
>
> Die **Mindestversion von Jeedom**, die für den ordnungsgemäßen Betrieb des Plugins erforderlich ist, ist **Version 4.2**
>
> Das Plugin ist bereits mit der **Version 4.5** von Jeedom sowie den **Versionen Debian 11 und 12** kompatibel.

# Prinzip

Dieses Plugin kommuniziert über die Cloud mit den **offiziellen BMW Connected Drive-APIs**, daher **benötigt dieses Plugin eine Internetverbindung**.

Außerdem benötigen Sie ein gültiges Abonnement für die BMW Connected Drive-Dienste für Ihr Fahrzeug sowie ein gültiges **Haupt**-Benutzerkonto für die App „My BMW“ oder „Mini“.

# Einrichtung Ihres BMW- oder Mini-Benutzerkontos

Bevor Sie das Plugin nutzen können, müssen Sie Ihr BMW-Benutzerkonto einrichten. Bitte befolgen Sie die folgenden Schritte genau:

1. Melden Sie sich auf dem Portal **[BMW ConnectedDrive](https://www.bmw.fr/fr-fr/mybmw/vehicle-overview)** oder **[Mini ConnectedDrive](https://www.mini.fr/fr-fr/mymini/vehicle-overview)** an
2. Klicken Sie auf das Symbol **BMW CarData**

![CarData](../images/CarData_section.png)

3. Klicken Sie auf die Schaltfläche **„CarData-Kunde anlegen“**
4. Notieren Sie sich **die Kunden-ID** an einem sicheren Ort!
5. Bitte **30 Sekunden** warten
6. Klicken Sie auf **„Zugriff auf die CarData-API beantragen“**
7. Warten Sie **30 Sekunden** (wenn der Schalter nicht wieder auf „Aus“ springt und keine Fehlermeldung angezeigt wird, können Sie fortfahren; andernfalls müssen Sie diesen Schritt wiederholen)
8. Klicken Sie auf **„CarData Streaming“**
9. Warten Sie **30 Sekunden** (wenn der Schalter nicht wieder auf „Aus“ springt und keine Fehlermeldung angezeigt wird, können Sie fortfahren; andernfalls müssen Sie diesen Schritt wiederholen)

![CarData](../images/CarData_clientID.png)

10. Gehen Sie zum Abschnitt **CarData Stream**
11. Stellen Sie sicher, dass der Verbindungsstatus auf **„ready“** steht.

![CarData](../images/CarData_stream.png)

12. Klicken Sie auf die Schaltfläche **„Datenauswahl bearbeiten“**
13. Wählen Sie **„Alle Kategorien“** (Fahrzeugstatus, Laden, Fahrdaten usw.) aus und klicken Sie mehrmals auf die Schaltfläche **Laden**, um alle Attribute anzuzeigen
14. Wählen Sie die 244 einzelnen Attribute **manuell** aus oder drücken Sie F12, um die **Entwicklerkonsole** zu öffnen, und geben Sie Folgendes ein: (Kopieren und Einfügen ist nicht möglich)

    ```js
    document.querySelectorAll('label.chakra-checkbox:not([data-checked])').forEach(l => l.click());
    ```

15. Speichern Sie anschließend Ihre Konfiguration
16. Notieren Sie sich **den Benutzernamen** an einem sicheren Ort!

> **Wichtig**
>
> Es ist wichtig, dass alle Attribute angekreuzt sind, um alle Fahrzeugdaten zu erhalten.

# Einrichtung des Plugins

Nachdem Sie das Plugin heruntergeladen haben, müssen Sie es lediglich aktivieren und anschließend die im vorherigen Schritt ermittelte Client-ID und den Benutzernamen konfigurieren. Lassen Sie die übrigen Felder leer, sofern der Entwickler nichts anderes ausdrücklich verlangt.
Warten Sie anschließend, bis die Installation der Abhängigkeiten abgeschlossen ist und der Daemon gestartet wurde.

> **Tipp**
>
> Um die Fernunterstützung zu erleichtern, wird empfohlen, die Protokolle auf den **Debug-Modus** einzustellen.

![Konfiguration](../images/Config_myBMW.png)

# Fahrzeug hinzufügen

Die Konfiguration der MyBMW-Geräte ist über das Menü „Plugin > Vernetzte Geräte“ zugänglich.

![Fahrzeug hinzufügen](../images/Plugin_myBMW.png)

Klicken Sie auf die Schaltfläche „Hinzufügen“, um ein neues Fahrzeug anzulegen. Nach dem Hinzufügen sehen Sie Folgendes:

| Feld | Beschreibung |
|---|---|
| **Gerätename** | Name Ihres Fahrzeugs |
| **Übergeordnetes Objekt** | gibt das übergeordnete Objekt an, zu dem das Gerät gehört |
| **Kategorie** | die Kategorie des Geräts |
| **Aktivieren** | damit werden Ihre Geräte aktiviert |
| **Sichtbar** | macht Ihre Geräte auf dem Dashboard sichtbar |
| **Marke** | Geben Sie die Marke Ihres Fahrzeugs an (BMW oder Mini) |
| **VIN** | Geben Sie die VIN-Nummer (Vehicle Identification Number, Fahrzeugidentifikationsnummer) an. Diese Nummer finden Sie in Feld E Ihres Fahrzeugscheins. Die Nummer besteht aus 17 Zeichen. |
| **Anzeige des Tür- und Fensterstatus** | Sie haben die Wahl zwischen zwei Optionen für die Anzeige des Tür- und Fensterstatus auf dem Bedienfeld: dem Textmodus oder dem Symbolmodus. |
| **Farbe der Tür-/Fenster-Symbole** | Wenn Sie den Symbolmodus gewählt haben, können Sie auch die Farbe der Symbole festlegen (grün oder schwarz-weiß). |
| **Wohnort (Anwesenheit)** | Sie haben drei Möglichkeiten, die GPS-Koordinaten Ihres Wohnorts anzugeben: entweder über die in Jeedom hinterlegten Koordinaten, über die aktuellen Koordinaten des Fahrzeugs oder durch manuelle Eingabe von Breiten- und Längengrad. |
| **Max. Entfernung (in m)** | Geben Sie die maximale Entfernung in Metern zwischen Ihrem Wohnort und dem Fahrzeug an, damit dieses als an Ihrem Wohnort vorhanden gilt. |

Klicken Sie anschließend einfach auf die Schaltfläche **Authentifizierung**, um die Informationen zu Ihrem Fahrzeug abzurufen (sofern diese verfügbar sind, erhalten Sie das Modell, das Baujahr, die Motorisierung sowie ein Bild Ihres Fahrzeugs). Es öffnet sich ein Pop-up-Fenster **(Achten Sie auf den Pop-up-Blocker Ihres Browsers und deaktivieren Sie ihn gegebenenfalls)**, in dem Sie sich mit den Zugangsdaten (E-Mail-Adresse) und dem Passwort Ihres BMW-Kontos authentifizieren können. Dafür haben Sie 5 Minuten Zeit und sollten anschließend die Meldung **„Anmeldung erfolgreich“** erhalten.

> **Tipp**
>
> Vergessen Sie nicht, Ihre Daten **zu speichern**!
>
> Beim Speichern werden neue Befehle auf dem Gerät erstellt.

![Ausstattung](../images/Eqpt_myBMW.png)

# Rohdaten

Um die Fehlersuche im Falle eines Problems zu erleichtern, haben Sie die Möglichkeit, die Rohdaten Ihres Fahrzeugs abzurufen, indem Sie auf die Schaltfläche **Rohdaten** klicken. Achtung: Bevor Sie diese beispielsweise im Forum veröffentlichen, denken Sie bitte daran, sensible Informationen wie die Fahrgestellnummer zu verbergen!

# Steuerungen

Derzeit gibt es mehrere Befehle, die im Folgenden beschrieben werden.

> **Tipp**
>
> Wenn der Befehl „not available“ zurückgibt, bedeutet dies, dass die entsprechende Information in Ihrem Fahrzeug nicht vorhanden ist.

## Info

| Befehl | Beschreibung |
|---|---|
| **Marke** | |
| **Modell** | |
| **Jahr** | |
| **Typ** | elektrisch, thermisch oder hybrid |
| **Kilometerstand** | Gesamtkilometerstand des Fahrzeugs |
| **Verriegelung** | Ruft den Verriegelungsstatus des Fahrzeugs ab |
| **Status der vorderen Fahrertür** | |
| **Status der hinteren Fahrertür** | |
| **Status der Beifahrertür** | |
| **Status der hinteren Beifahrertür** | |
| **Status aller Türen** | |
| **Status des vorderen Fahrerfensters** | |
| **Status des hinteren Fahrerfensters** | |
| **Status des Beifahrerfensters** | |
| **Status des hinteren Beifahrerfensters** | |
| **Status aller Fenster** | |
| **Tresorstatus** | |
| **Status Motorhaube** | |
| **Status Schiebedach** | |
| **Reifendruck vorne links** | |
| **Reifendruckangabe für den linken Vorderreifen** | |
| **Reifendruck vorne rechts** | |
| **Reifendruckangabe für den rechten Vorderreifen** | |
| **Reifendruck hinten links** | |
| **Reifendruckangabe für den linken Hinterreifen** | |
| **Reifendruck hinten rechts** | |
| **Reifendruckangabe für den rechten Hinterreifen** | |
| **Ladezustand** | nur bei Elektro- oder Hybridfahrzeugen |
| **Steckdosenstatus** | nur bei Elektro- oder Hybridfahrzeugen |
| **Ladeende** | nur bei Elektro- oder Hybridfahrzeugen |
| **Verbleibende Ladung** | nur bei Elektro- oder Hybridfahrzeugen |
| **Verbleibende Reichweite (elektrisch)** | Elektromotor und/oder Hybridantrieb |
| **Verbleibender Kraftstoff** | nur bei Fahrzeugen mit Verbrennungsmotor oder Hybridantrieb |
| **Verbleibende Reichweite (Verbrennungsmotor)** | Verbrennungsmotor |
| **Meldungen** | zeigt die im Fahrzeug angezeigten Meldungen an (Steuerung und Dienste) |
| **Ladevorgänge** | zeigt die Statistiken zum Ladeverhalten der Batterien im laufenden Monat an (nur bei Elektro- oder Hybridfahrzeugen) |
| **Gesamtstromverbrauch** | gibt den Gesamtstromverbrauch im laufenden Monat an (gilt nur für Elektro- oder Hybridfahrzeuge) |
| **Gesamtstromkosten** | gibt die monatlichen Stromkosten an |
| **Ladeziel** | gibt das für das Fahrzeug konfigurierte Ladeziel an (in %) |
| **Ladestromgrenze** | gibt die Grenze des Ladestroms an, der verwendet wird, wenn das Fahrzeug angeschlossen ist |
| **Ladestrombegrenzung** | gibt Auskunft darüber, ob eine Ladestrombegrenzung für das Fahrzeug aktiviert ist oder nicht |
| **GPS-Koordinaten** | gibt die Position des Fahrzeugs im Format „Breitengrad, Längengrad“ an |
| **Letzte Aktualisierung** | gibt Datum und Uhrzeit der letzten Verbindung zwischen dem Fahrzeug und den BMW-Servern an |
| **Status „Entsperren“** | gibt den zuletzt bei einer Entsperranfrage empfangenen Status zurück. Wenn die Aktion erfolgreich ausgeführt wurde, ändert sich der Status von „PENDING“ zu „EXECUTED“. Andernfalls wird „ERROR“ zurückgegeben |
| **Status: Sperren** | |
| **Status: Laden** | |
| **Status: Ladung gestoppt** | |
| **Status aufschlüsseln** | |
| **Status „Lüftung stoppen“** | |
| **Status „Lichthupen“** | |
| **Status „Hupen“** | |
| **Status suchen** | |
| **Status der POI-Übermittlung** | |
| **Anwesenheit zu Hause** | gibt an, ob sich Ihr Fahrzeug an Ihrem Wohnort befindet (1 = vorhanden, 0 = nicht vorhanden), basierend auf der angegebenen maximalen Entfernung |
| **Entfernung zum Wohnort** | gibt die Entfernung (in m oder km) zwischen dem Fahrzeug und Ihrem Wohnort an |

## Aktion

| Befehl | Beschreibung |
|---|---|
| **Aktualisieren** | aktualisiert alle Fahrzeugdaten |
| **Verriegeln** | ermöglicht das Fernverriegeln des Fahrzeugs |
| **Entriegeln** | ermöglicht das Entriegeln des Fahrzeugs aus der Ferne |
| **Laden** | ermöglicht das Starten des Ladevorgangs für das Fahrzeug |
| **Ladevorgang unterbrechen** | ermöglicht es, den Ladevorgang des Fahrzeugs zu unterbrechen |
| **Lüften (Start)** | dient zum Starten der Lüftungsanlage auf die im Fahrzeug eingestellte Temperatur |
| **Belüftung (Stopp)** | dient zum Ausschalten der Belüftungsanlage bei Erreichen der im Fahrzeug eingestellten Temperatur |
| **Lichthupen** | löst eine Lichthupe aus |
| **Hupen** | löst einen akustischen Alarm aus |
| **Suchen** | Ortet das Fahrzeug in Echtzeit und zeigt es auf einer Google Maps-Karte an |
| **POI senden** | Senden eines Points of Interest (POI) an das Fahrzeug-Nachrichtenzentrum durch Eingabe des Namens sowie der Breiten- und Längengrade des Ortes |

> **Achtung**
>
> Derzeit ist nur die Funktion **Aktualisieren** verfügbar. Die anderen Funktionen werden wieder verfügbar sein, sobald die BMW-APIs dies zulassen!

# Dashboard

Das Plugin enthält ein benutzerdefiniertes Widget, mit dem alle wichtigen Fahrzeugdaten angezeigt werden können.

![myBMW-Widget](../images/Widget_myBMW.png)

# Bedienfeld

Wenn Sie auf der Konfigurationsseite des Plugins die Option **Desktop-Panel anzeigen** aktiviert haben, können Sie ein spezielles Panel für Ihr Fahrzeug aufrufen, das alle in diesem Plugin verfügbaren Informationen zusammenfasst. Es ist über das Menü **Startseite \ My BMW** zugänglich.

![myBMW-Panel](../images/Panel_myBMW_1.png)

![myBMW-Panel](../images/Panel_myBMW_2.png)

> **Tipp**
>
> Damit die Grafiken angezeigt werden, vergessen Sie nicht, bei den folgenden drei Befehlen die Option **„Historien erstellen“** anzukreuzen: Kilometerstand, verbleibende Ladung und verbleibender Kraftstoff.

# Aktualisierung

## Automatik

Dank des MQTT-Streams erhalten Sie die meisten Informationen zu Ihrem Fahrzeug in Echtzeit (Kilometerstand, Kraftstoffstand, status der batterie, Verriegelungsstatus des Fahrzeugs, der Türen und Fenster, Standort usw.)!

Zudem wird ein anpassbarer CRON-Job eingerichtet (im 2-Stunden-Takt, jeweils 5 Minuten nach der vollen Stunde), um nicht per Stream abrufbare Informationen (Steuerungs- und Servicemeldungen, Lastverlauf) abzurufen. Achten Sie darauf, diese Häufigkeit nicht zu stark zu erhöhen, da sonst die von BMW festgelegten zulässigen Abfragequoten (50 pro Tag) überschritten werden könnten!

## Handbuch

Sie können jederzeit den Befehl **Aktualisieren** verwenden, um den Fahrzeugstatus abzurufen.

> **Achtung**
>
> BMW erlaubt nur 50 Anfragen pro Tag. Aktualisieren Sie die Seite daher nicht zu oft manuell (der aktuelle CRON-Job nutzt 24 Anfragen pro Tag), da Sie sonst bis zum nächsten Tag gesperrt werden könnten.

# Roadmap & Support

Dieses Plugin wird im Laufe der Zeit entsprechend Ihren Anforderungen und den Möglichkeiten der BMW Connected Drive-APIs weiterentwickelt.

In den nächsten Versionen werden folgende Funktionen eingeführt:

- Hinzufügen neuer Funktionen entsprechend den Möglichkeiten der APIs
- Übersetzung des Plugins ins Englische
- ...

> **Tipp**
>
> Sie können Ihren Verbesserungsvorschlag einreichen, indem Sie auf [GitHub](https://github.com/Xav-74/myBMW/issues/new) ein „Enhancement“-Issue erstellen.
>
> Zögern Sie auch nicht, sich in der Jeedom-Community über dieses Plugin auszutauschen!

Im Falle einer Störung können Sie direkt von der Hauptseite des Plugins aus ein Thema in der Community erstellen. Die relevanten Informationen zu Jeedom und dem Plugin werden automatisch hinzugefügt. Zögern Sie auch nicht, die Logs von myBMW, myBMW_daemon und myBMW_update (Debug-Modus) zu kopieren, um eine schnellere Lösung zu ermöglichen!

![Community](../images/community.png)
