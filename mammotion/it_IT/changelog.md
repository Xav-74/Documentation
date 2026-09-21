---
layout: default
title: Plugin Mammotion - Cronologia delle modifiche
lang: it_IT
pluginId: mammotion
---

# Da leggere assolutamente!

**Di seguito sono riportate le note, le aggiunte e le correzioni relative a ciascuna versione del plugin**

**Nota**: se un aggiornamento non è elencato qui, significa che comporta solo modifiche minori, come aggiornamenti alla documentazione o correzioni di bug minori.


# 2026-09-21 [+]

Passaggio alla versione stabile dalla versione beta 19/09/2026
Prima versione stabile del plugin

Attenzione: la versione minima richiesta di Jeedom è la v4.4 e Debian 11!


# 2026-09-19 [~]

Novità:
- Aggiunti i comandi "hibernation" e "set_hibernation" per la visualizzazione sul widget e l'utilizzo in uno scenario

Correzioni:
- Miglioramento delle immagini dei robot


# 2026-09-17 [~]

Novità:
- Aggiunta della modalità "letargo"
- Aggiunta della cronologia dai widget
- Aree e attività in ordine alfabetico

Correzioni:
- Correzione di un bug: modello mancante per gli Spino
- Correzione di un bug: errore durante la sincronizzazione per gli Spino (device_limits)


# 2026-09-08 [~]

Novità:
- Riorganizzazione della sezione "Spino" con supporto per i comandi di azione
- Widget dedicato per i robot "Spino"


# 2026-07-10 [~]

Prima versione del plugin Mammotion (mammotion)
- Supporto per i robot tosaerba Luba / Yuka e i robot per piscina Spino (stato)
- Rilevamento automatico dei dispositivi
- Acquisizione dei dati in tempo reale tramite il cloud Mammotion (MQTT)
- Recupero delle aree da falciare
- Recupero delle attività
- Comandi e informazioni: batteria / ricarica / stato / velocità / avanzamento / superficie / tipo di connessione / potenza del segnale ...
- Comandi: avvio / pausa / ripresa / annullamento / ritorno e uscita dalla stazione / altezza della lama / velocità / taglio per zona / taglio per attività
