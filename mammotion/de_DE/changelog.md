---
layout: default
title: Mammotion-Plugin – Änderungsprotokoll
lang: de_DE
pluginId: mammotion
---

# Bitte unbedingt lesen!

**Nachfolgend finden Sie die Hinweise, Ergänzungen und Korrekturen zu den einzelnen Versionen des Plugins**

**Hinweis**: Wenn ein Update hier nicht aufgeführt ist, bedeutet dies, dass es sich lediglich um geringfügige Änderungen handelt, wie z. B. Anpassungen in der Dokumentation oder die Behebung kleinerer Fehler.


# 2026-09-21 [+]

Umstellung der Beta-Version auf die stabile Version 19.09.2026
Erste stabile Version des Plugins

Achtung: Die erforderliche Mindestversion von Jeedom ist v4.4 und Debian 11!


# 2026-09-19 [~]

Neuheiten:
- Hinzufügen der Befehle „hibernation“ und „set_hibernation“ zur Anzeige im Widget und zur Verwendung in einem Szenario

Korrekturen:
- Verbesserung der Roboterbilder


# 2026-09-17 [~]

Neuheiten:
- Wintermodus hinzugefügt
- Hinzufügen von Verlaufsdaten über die Widgets
- Bereiche und Aktivitäten in alphabetischer Reihenfolge

Korrekturen:
- Fehlerbehebung: Fehlende Vorlage für die Spino-Modelle
- Bugfix: Fehler bei der Synchronisierung der Spino-Geräte (device_limits)


# 2026-09-08 [~]

Neuheiten:
- Neugestaltung des Bereichs „Spino“ mit Unterstützung für Aktionsbefehle
- Spezielles Widget für „Spino“-Roboter


# 2026-07-10 [~]

Erste Version des Mammotion-Plugins (mammotion)
- Unterstützung für die Mähroboter Luba / Yuka und die Poolroboter Spino (Status)
- Automatische Erkennung von Geräten
- Echtzeit-Datenübertragung über die Mammotion-Cloud (MQTT)
- Wiederherstellung der Mähflächen
- Wiederherstellung von Aktivitäten
- Anzeigefunktionen: Batterie / Ladezustand / Status / Geschwindigkeit / Fortschritt / Fläche / Verbindungsart / Signalstärke ...
- Befehle: Starten / Pause / Fortsetzen / Abbrechen / Zurück und Verlassen der Station / Mähklingenhöhe / Geschwindigkeit / Mähen nach Zone / Mähen nach Aktivität
