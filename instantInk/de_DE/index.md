---
layout: default
title: HP InstantInk-Plugin – Dokumentation
lang: de_DE
pluginId: instantInk
---

# Übersicht

Mit diesem Plugin können Sie die Informationen zu Ihrem InstantInk-Abonnement und Ihren HP-Druckern abrufen.

> **Tipp**
>
> Die **Mindestversion von Jeedom**, die für den ordnungsgemäßen Betrieb des Plugins erforderlich ist, ist **Version 4.4**
>
> Das Plugin ist kompatibel mit den **Debian-Versionen 11 und 12**

# Installation

Das Plugin lässt sich wie jedes andere Plugin auf Jeedom über den Market installieren.

# Konfiguration

1. Nach der Installation und Aktivierung müssen Sie auf der Konfigurationsseite ein **sessionId**-Token eingeben.
2. Öffnen Sie [portal.hpsmart.com](https://portal.hpsmart.com) in Ihrem Browser und melden Sie sich an
3. Drücken Sie **F12**, um die DevTools zu öffnen
4. Wechseln Sie zur Registerkarte **Anwendungen** (Chrome) oder **Speicher** (Firefox)
5. Im Seitenmenü: **Cookies → https://portal.hpsmart.com**
6. Suchen Sie das Cookie **shell-session-id** und kopieren Sie dessen vollständigen Wert
7. Fügen Sie ihn in das entsprechende Feld ein und klicken Sie auf **Anmelden**

Dieses Token ist 90 Tage lang gültig. Jeedom benachrichtigt Sie, wenn es manuell erneuert werden muss.

8. Sollten Probleme mit der Verbindung auftreten, können Sie die zuvor abgerufenen Tokens über die Schaltfläche **Tokens löschen** löschen.
9. Geben Sie die optionalen Parameter des Plugins ein:
    - Benutzerdefinierter Cron-Job (empfohlener Wert: mindestens 1 Stunde)
10. Speichern

![InstantInk-Konfiguration](../images/config_instantInk.png)

> **Tipp**
>
> Um die Fernunterstützung zu erleichtern, wird empfohlen, die Protokolle auf den **Debug-Modus** einzustellen.

# Anwendung

1. Starten Sie das Plugin, das sich in der Kategorie **Vernetzte Geräte** im Menü **Plugins** befindet
2. Klicken Sie auf die Schaltfläche **Synchronisieren**
3. Ihr Drucker wird in der Liste angezeigt
4. Klicken Sie auf das Symbol Ihres Druckers und geben Sie dessen IP-Adresse in das dafür vorgesehene Feld ein
5. Speichern

![instantInk-Ausstattung](../images/eqt_instantInk.png)

# Steuerungen

Derzeit gibt es mehrere Befehle, die im Folgenden beschrieben werden.

## Info

| Befehl | Beschreibung |
|---|---|
| **Anzahl der Seiten im Plan** | die Anzahl der in Ihrem Paket vorgesehenen Seiten |
| **Maximale Seitenanzahl für den Planübertrag** | die maximale Anzahl an Seiten, die von einem Zeitraum in den nächsten übertragen werden |
| **Tarif** | der monatliche Preis Ihres Tarifs |
| **Max. Anzahl zusätzlicher Seiten im Tarif** | die maximal zulässige Seitenanzahl im Nicht-Tarif-Modus |
| **Zeitraum** | der aktuelle Zeitraum des Tarifs |
| **Anzahl der gedruckten Seiten im Berichtszeitraum** | die Anzahl der im Berichtszeitraum gedruckten Seiten |
| **Anzahl der gedruckten Seiten im Berichtszeitraum** | die Anzahl der im Berichtszeitraum gedruckten Seiten |
| **Anzahl der auf den Berichtszeitraum übertragenen Seiten** | die Anzahl der auf den Berichtszeitraum übertragenen Seiten |
| **Anzahl der zusätzlich gedruckten Seiten im Zeitraum** | die Anzahl der Seiten, die über das Pauschalvolumen hinaus im Zeitraum gedruckt wurden |
| **Preis im Zeitraum** | der aktuelle Preis im Zeitraum |
| **Status der schwarzen Patrone** | Aktueller Tintenstand der schwarzen Patrone (%) |
| **Status der Cyan-Patrone** | Aktueller Tintenstand der Cyan-Patrone (%) |
| **Status der Magenta-Patrone** | Aktueller Tintenstand der Magenta-Patrone (%) |
| **Status der gelben Patrone** | Aktueller Tintenstand der gelben Patrone (%) |
| **Letzte Aktualisierung** | Datum und Uhrzeit der letzten Aktualisierung der Informationen |
| **Verlauf** | alle Informationen zum Tarif (ausgedruckte Seiten und Preise) der letzten 12 Monate |

> **Tipp**
>
> Wenn Sie den Verlauf nicht im Widget anzeigen möchten, deaktivieren Sie einfach das Kontrollkästchen **Anzeigen** bei diesem Befehl.

## Aktion

| Befehl | Beschreibung |
|---|---|
| **Aktualisieren** | aktualisiert alle Informationen zum Drucker und zum Tarif |
| **Verbrauchsübersicht abrufen** | ermöglicht es, die Verbrauchsübersicht der letzten 12 Monate abzurufen |

# Dashboard

Das Plugin enthält ein benutzerdefiniertes Widget, mit dem alle Informationen zum Tarif und zum Drucker angezeigt werden können.

![Widget](../images/widget_instantInk.png)

Sie haben die Möglichkeit, die Informationen zu aktualisieren (Symbol <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px"><path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 3v6h-6"/></svg>) oder den Verlauf (Symbol <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px"><path d="M3 3v18h18"/><path d="M7 16v2M12 11v7M17 7v11"/></svg>) direkt über das Widget aufrufen.

# Aktualisierung

## Automatik

Wie auf der Konfigurationsseite des Plugins angegeben:

- Ein **täglicher CRON-Job** wird automatisch täglich (um 00:00 Uhr) erstellt, um den Verlauf des Tarifs zu aktualisieren.
- Es wird automatisch ein **benutzerdefinierter CRON-Job** erstellt, um die Informationen zum Tarif und zum Drucker abzurufen (empfohlenes Minimum: 1 Stunde)

## Handbuch

Sie können jederzeit den Befehl **Aktualisieren** oder den Befehl **Verlauf abrufen** verwenden, um die Informationen zum Tarif und zum Drucker zu aktualisieren.

# Roadmap & Support

Dieses Plugin wird im Laufe der Zeit entsprechend Ihren Anforderungen und den Möglichkeiten der instantInk-APIs weiterentwickelt.

In den nächsten Versionen werden folgende Funktionen eingeführt:

- ...

> **Tipp**
>
> Sie können Ihren Verbesserungsvorschlag einreichen, indem Sie auf [GitHub](https://github.com/Xav-74/instantInk/issues/new) ein „Enhancement“-Issue erstellen.
>
> Zögern Sie auch nicht, sich in der Jeedom-Community über dieses Plugin auszutauschen!

Im Falle einer Fehlfunktion können Sie direkt von der Hauptseite des Plugins aus ein Thema in der Community erstellen. Die relevanten Informationen zu Jeedom und dem Plugin werden automatisch hinzugefügt. Zögern Sie nicht, auch die InstantInk-Protokolle (Debug-Modus) zu kopieren, um eine schnellere Lösung zu ermöglichen!

![Community](../images/community.png)
