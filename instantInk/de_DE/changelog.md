---
layout: default
title: HP InstantInk-Plugin – Änderungsprotokoll
lang: de_DE
pluginId: instantInk
---

# Bitte unbedingt lesen!

**Nachfolgend finden Sie die Hinweise, Ergänzungen und Korrekturen zu den einzelnen Versionen des Plugins**

**Hinweis**: Wenn ein Update hier nicht aufgeführt ist, bedeutet dies, dass es sich lediglich um geringfügige Änderungen handelt, wie z. B. Anpassungen in der Dokumentation oder die Behebung kleinerer Fehler.


# 28.08.2026 [b]

Folgende Korrekturen:
 - Weiterleitung des Log-Eintrags „expired shellSessionId“ im ERROR-Modus zur Benachrichtigung im Jeedom-Nachrichtencenter
 - Vorheriges Löschen der Tokens beim Aktualisieren der shellSessionId


# 07.06.2026 [b]

Erste Version des HP InstantInk-Plugins (instantInk)
 - Anmeldung beim HP Smart-Konto über die API (Cloud)
 - Lokale Verbindung zum Drucker (sofern dieser dies unterstützt)
 - Abruf von Informationen zum Pauschaltarif: Laufzeit, Anzahl der im Pauschaltarif enthaltenen Seiten, Anzahl der auf die nächste Abrechnungsperiode übertragenen Seiten, Anzahl der zusätzlichen Seiten, Preis des Pauschaltarifs, Preis außerhalb des Pauschaltarifs, Verlauf der letzten 12 Monate
 - Anzeige des Füllstands der Patronen für Schwarz, Cyan, Magenta und Gelb
 - Benutzerdefiniertes Widget
