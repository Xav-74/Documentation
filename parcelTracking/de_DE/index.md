---
layout: default
title: Plugin „Sendungsverfolgung“ – Dokumentation
lang: de_DE
pluginId: parcelTracking
---

# Übersicht

Mit diesem Plugin können Sie Ihre Sendungen der wichtigsten französischen und internationalen Versanddienstleister (La Poste, Mondial Relay, Relais Colis, Colis Privé, Aliexpress, Shein, Amazon, eBay, FedEx, UPS, ...) über die API von [**17Track**](https://www.17track.net/en) verfolgen.

Der kostenlose Tarif von 17Track umfasst die Sendungsverfolgung von 100 Paketen pro Monat (die Anzahl wird am ersten Tag des Monats auf 0 zurückgesetzt). Auf Wunsch können Sie einen kostenpflichtigen Tarif wählen.

> **Tipp**
>
> Die **Mindestversion von Jeedom**, die für den ordnungsgemäßen Betrieb des Plugins erforderlich ist, ist **Version 4.4**
>
> Das Plugin ist bereits mit den **Versionen Debian 11 und 12** kompatibel.

# Installation

Das Plugin lässt sich wie jedes andere Plugin auf Jeedom über den Market installieren.

# Konfiguration

1. Nach der Installation und Aktivierung müssen Sie auf der Konfigurationsseite den 17Track-API-Schlüssel angeben.
2. Besuchen Sie die Website [www.17track.net](https://user.17track.net/en)
3. Klicken Sie auf **„Kein Konto“** und erstellen Sie ein **Entwicklerkonto** oder melden Sie sich mit Ihren bestehenden Zugangsdaten an
4. Sobald Sie sich auf Ihrem Dashboard befinden, gehen Sie zum Menü **Einstellungen** und kopieren Sie den API-Schlüssel
5. Fügen Sie den API-Schlüssel in die Plugin-Konfiguration ein

![Dashboard 17Track](../images/dashboard_17Track.png)

6. Füllen Sie außerdem den Abschnitt „Webhook“ wie folgt aus: („jeedom-host“ ist die externe Adresse Ihrer Box)

![Webhook 17Track](../images/webhook_17Track.png)

7. Sie können die verbleibende Anzahl der Nachverfolgungen in Ihrem Kontingent einsehen, indem Sie auf die Schaltfläche **Überprüfen** klicken.
8. Wählen Sie die Sprache aus, die für die API-Antworten verwendet werden soll. Bitte beachten Sie: Wenn Sie eine andere Sprache als die Standard-Sprache wählen, werden Ihnen pro Paket 2 Sendungsverfolgungen von Ihrem Kontingent abgezogen.
9. Sie können die Liste der Versanddienstleister und die Liste der zusätzlichen Parameter aktualisieren. Standardmäßig werden diese täglich im Rahmen des täglichen Cron-Jobs aktualisiert.
10. Geben Sie die optionalen Parameter des Plugins ein:
    - Standard-Übergeordnetes Objekt ==> Automatisches Hinzufügen des angegebenen Objekts bei der Erstellung neuer Nachverfolgungen
    - Lagerzeit der Geräte nach der Lieferung (in Tagen) ==> Automatische Löschung der Geräte X Tage nach ihrer Lieferung
11. Geben Sie die Benachrichtigungseinstellungen ein, wenn Sie bei jeder Statusänderung benachrichtigt werden möchten
    - Die ersten beiden Zeilen beziehen sich auf das Versenden von Benachrichtigungen über einen Befehl vom Typ „Nachricht“

Option: Sie können die Nachricht mithilfe der folgenden Tags anpassen: `#name#`, `#trackingId#`, `#carrier#`, `#status#`, `#lastState#`, `#date#` und `#time#`

Sie können die ordnungsgemäße Funktion durch das Versenden einer Testbenachrichtigung überprüfen
    - Die letzten beiden Zeilen beziehen sich auf das Versenden von Benachrichtigungen über ein Szenario

Sie können die folgenden Tags verwenden: `#name#`, `#object#`, `#trackingId#`, `#carrier#`, `#status#`, `#lastState#`, `#date#` und `#time#`

So funktionieren sie: `nomdusuivi=#name#`, wobei „nomdusuivi“ der Name des Tags und „#name#“ der Wert des Tags ist
12. Geben Sie die Einstellungen für das Widget ein. Es stehen 3 Optionen zur Auswahl:
    - Kein Widget (Sie erhalten nur Benachrichtigungen)
    - Ein Widget pro Paket
    - Ein einziges Widget für alle Pakete
13. Speichern

![Paketverfolgung konfigurieren](../images/config_parcelTracking.png)

> **Tipp**
>
> Um die Fernunterstützung zu erleichtern, wird empfohlen, die Protokolle auf den **Debug-Modus** einzustellen.

# Anwendung

1. Starten Sie das Plugin, das sich in der Kategorie **Organisation** des Menüs **Plugins** befindet
2. Ein Paket hinzufügen, wie jedes andere Gerät unter Jeedom
3. Geben Sie den Namen Ihres Pakets an und tragen Sie anschließend die Sendungsverfolgungsnummer, den Spediteur (sofern bekannt) sowie den für die Sendungsverfolgung erforderlichen Zusatzparameter ein, falls dieser obligatorisch ist. Die Liste der Spediteure stammt direkt von 17Track und wird regelmäßig aktualisiert. Sollte für den ausgewählten Spediteur ein Zusatzparameter erforderlich sein, erscheint ein Hinweis, der Sie darauf aufmerksam macht und Ihnen das erwartete Format angibt.
4. Speichern Sie die Daten und starten Sie anschließend eine **Registrierung**, damit das Paket von den 17Track-APIs erfasst wird, und vergewissern Sie sich, dass dieser Vorgang erfolgreich war (grüne Benachrichtigung).

> **Tipp**
>
> Wenn Sie nach der ersten **erfolgreichen** Registrierung den Spediteur und/oder die Zusatzparameter ändern müssen, können Sie dies über die Schaltflächen zum Aktualisieren tun. Bitte beachten Sie, dass es manchmal vorkommen kann, dass die Sendungsverfolgungsdaten nach der Aktualisierung eines der beiden Parameter nicht sofort angezeigt werden. Bitte warten Sie 1 bis 2 Stunden. Nach Ablauf dieser Zeit ist es ratsam, das Paket zu löschen und es **mit allen Parametern, die bereits bei der ersten Erfassung aktuell waren**, neu anzulegen.

![Paketverfolgung konfigurieren](../images/eqt_parcelTracking.png)

# Steuerungen

Derzeit gibt es mehrere Befehle, die im Folgenden beschrieben werden.

> **Tipp**
>
> Wenn die Abfrage den Status „nicht verfügbar“ zurückgibt, bedeutet dies, dass die entsprechenden Informationen in der Sendungsverfolgung nicht vorhanden sind.

## Info

| Befehl | Beschreibung |
|---|---|
| **Paketstatus** | 5 mögliche Status (zugestellt, unterwegs, Abholung, angekommen, archiviert) |
| **Spediteur** | Name des Hauptspediteurs |
| **Herkunft** | Herkunftsland des Pakets |
| **Bestimmungsort** | Bestimmungsland des Pakets |
| **Status** | Liste aller Lieferphasen |
| **Letztes Ereignis** | Datum und Uhrzeit des letzten vom Transportunternehmen gesendeten Ereignisses. Wird zum Versenden von Benachrichtigungen verwendet |
| **Aktueller Status** | Zuletzt vom Spediteur übermittelter Status. Wird für den Versand von Benachrichtigungen verwendet |
| **Lieferdatum** | nur verfügbar, wenn das Paket zugestellt wurde |

## Aktion

| Befehl | Beschreibung |
|---|---|
| **Aktualisieren** | aktualisiert alle Informationen zum Paket |

# Dashboard

Das Plugin enthält zwei benutzerdefinierte Widgets, mit denen alle Informationen zu den Paketen angezeigt werden können. Sie haben die Wahl zwischen:

- ein Widget pro Paket

![Widget](../images/widget.png)

- ein einziges Widget für alle Pakete

![globales Widget](../images/widget_global.png)

- die oben genannten Widgets parallel

In jedem Fall haben Sie die Möglichkeit, Pakete zu löschen (Symbol <img src="../images/trash-solid.svg" class="inline-img" width="15" height="15">) oder ein neues hinzuzufügen (Symbol <img src="../images/plus-solid.svg" class="inline-img" width="15" height="15">) direkt über die Widgets hinzuzufügen.

> **Achtung**
>
> Das einzigartige Widget ist auf der Seite „Geräte“ des Plugins sichtbar. Es darf unter keinen Umständen gelöscht werden. Sollte es versehentlich gelöscht werden, müssen Sie lediglich eine Neuinstallation des Plugins erzwingen (kein Datenverlust), woraufhin es wiederhergestellt wird.

# Aktualisierung

## Automatik

Wie auf der Konfigurationsseite des Plugins angegeben:

- Täglich (um 00:00 Uhr) wird automatisch ein CRON-Job erstellt, um Pakete automatisch zu löschen

Was die Aktualisierung der Sendungen betrifft, ruft der Webhook die von 17Track übermittelten Informationen in Echtzeit ab.

## Handbuch

Sie können jederzeit den Befehl **Aktualisieren** verwenden, um die Paketinformationen zu aktualisieren.

# Roadmap & Support

Dieses Plugin wird im Laufe der Zeit entsprechend Ihren Anforderungen und den Möglichkeiten der 17Track-APIs weiterentwickelt.

In den nächsten Versionen werden folgende Funktionen eingeführt:

- Einrichtung eines Webhooks für den Empfang von Daten in Echtzeit
- ...

> **Tipp**
>
> Sie können Ihren Verbesserungsvorschlag einreichen, indem Sie auf [GitHub](https://github.com/Xav-74/parcelTracking/issues/new) ein „Enhancement“-Issue erstellen.
>
> Zögern Sie auch nicht, sich in der Jeedom-Community über dieses Plugin auszutauschen!

Im Falle einer Störung können Sie direkt von der Hauptseite des Plugins aus ein Thema in der Community erstellen. Die relevanten Informationen zu Jeedom und dem Plugin werden automatisch hinzugefügt. Zögern Sie auch nicht, die parcelTracking-Protokolle (Debug-Modus) zu kopieren, um eine schnellere Lösung zu ermöglichen!

![Community](../images/community.png)
