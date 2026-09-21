---
layout: default
title: Plugin HP instantInk - Cronologia delle modifiche
lang: it_IT
pluginId: instantInk
---

# Da leggere assolutamente!

**Di seguito sono riportate le note, le aggiunte e le correzioni relative a ciascuna versione del plugin**

**Nota**: se un aggiornamento non è elencato qui, significa che comporta solo modifiche minori, come aggiornamenti alla documentazione o correzioni di bug minori.


# 2026-09-21 [+]

Passaggio alla versione stabile dalla versione beta 28/08/2026
Prima versione stabile del plugin

Attenzione: la versione minima richiesta di Jeedom è la v4.4 e Debian 11!


# 2026-08-28 [~]

Le seguenti correzioni:
 - Passaggio del log "expired shellSessionId" in modalità ERROR per la notifica nel centro messaggi Jeedom
 - Rimozione preventiva dei token durante l'aggiornamento dello shellSessionId


# 2026-06-07 [~]

Prima versione del plugin HP instantInk (instantInk)
 - Accesso all'account HP Smart tramite API (cloud)
 - Connessione locale alla stampante (se supportata)
 - Recupero delle informazioni relative al pacchetto: periodo, numero di pagine incluse nel pacchetto, numero di pagine riportate, numero di pagine aggiuntive, prezzo del pacchetto, prezzo fuori pacchetto, cronologia degli ultimi 12 mesi
 - Rilevamento del livello delle cartucce nero, ciano, magenta e giallo
 - Widget personalizzato
