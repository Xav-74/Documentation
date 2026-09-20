---
layout: default
title: Plugin Tracciamento pacchi - Cronologia delle modifiche
lang: it_IT
pluginId: parcelTracking
---

# Da leggere assolutamente!

**Di seguito sono riportate le note, le aggiunte e le correzioni relative a ciascuna versione del plugin**

**Nota**: se un aggiornamento non è elencato qui, significa che comporta solo modifiche minori, come aggiornamenti alla documentazione o correzioni di bug minori.


# 2026-05-31

Aggiornamento dell'icona nell'ambito di un processo di armonizzazione di tutti i miei plugin


# 2026-02-15

Aggiunte le seguenti funzioni:
 - Aggiornamento automatico dell'elenco dei corrieri e dei parametri aggiuntivi (tramite pulsante o tramite cron giornaliero)
 

# 2025-11-10

Aggiunte le seguenti funzioni:
 - Aggiornamento dell'elenco dei corrieri e delle impostazioni aggiuntive
 - Aggiunta di un campo "Ricerca" per filtrare i corrieri nell'elenco a discesa (per nome, per paese, ecc.)

Le seguenti correzioni:
 - Correzione di un avviso PHP durante la visualizzazione del widget globale in determinati casi (ad es. quando "states" è vuoto)


# 2025-05-20

Aggiunte le seguenti funzioni:
 - Possibilità di visualizzare contemporaneamente i singoli widget e il widget globale
 - Aggiunta del nome del pacco nel titolo delle notifiche


# 2024-12-31

Aggiunte le seguenti funzioni:
 - Aggiunta dei tag #url# e #location# per le notifiche e gli scenari


# 2024-10-17

Aggiunte le seguenti funzioni:
 - Aggiunta dei campi "corriere" e "parametro aggiuntivo" nella finestra pop-up che consente di aggiungere un pacco dal widget / dashboard

Le seguenti correzioni:
 - Le date e gli orari vengono ora visualizzati nel fuso orario configurato nel vostro Jeedom (widget singolo / widget globale)
 - Integrazione delle descrizioni tradotte da 17Track quando è stata impostata una lingua specifica
 

# 2024-09-28

Aggiunte le seguenti funzioni:
 - Implementazione di un webhook che recupera in tempo reale le informazioni trasmesse da 17Track. Il cron Hourly viene quindi disattivato
 - Aggiunta di un pulsante che consente di inviare una notifica di prova nella pagina di configurazione del plugin

> ATTENZIONE!!!
> È indispensabile configurare le impostazioni del webhook sulla tua dashboard 17Track, altrimenti non riceverai più alcuna informazione sui tuoi pacchi!


# 2024-09-07

Aggiunte le seguenti funzioni:
 - Passaggio dalle API di ParcelsApp a 17Track

> ATTENZIONE!!!
> Si tratta di una modifica importante al plugin. È quindi necessario configurarlo nuovamente (in particolare, inserire una chiave API 17Track) e poi ricreare tutti i vostri pacchi. L'intera procedura è descritta in dettaglio nella documentazione. Il grande vantaggio di questa nuova versione è che il numero di tracciamenti passa a 100 pacchi al mese (l'aggiornamento della quota avviene ogni primo del mese)!


# 2024-08-22

Aggiunte le seguenti funzioni:
 - Traduzione del plugin (inglese, tedesco, spagnolo, italiano, portoghese)

Le seguenti correzioni:
 - Conversione dei tag in inglese

> ATTENZIONE!!!
> È quindi necessario modificare il formato dei messaggi (notifiche) e/o degli scenari!


# 2024-08-01

Aggiunte le seguenti funzioni:
 - Rimozione automatica degli spazi, se presenti prima e/o dopo il trackingID

Le seguenti correzioni:
 - Recupero delle informazioni relative al corriere, all'origine e alla destinazione (chiavi diverse nel file JSON a seconda dei corrieri)


# 2024-07-27

Aggiunte le seguenti funzioni:
 - Possibilità di aggiungere o eliminare pacchi direttamente dai widget (singoli o globali)
 - Possibilità di aggiungere una chiave API secondaria per il monitoraggio di altri 10 pacchi
 - Aggiunta di un'informazione nel centro messaggi Jeedom quando viene raggiunto il limite di 10 pacchi (solo durante la sincronizzazione, non durante l'aggiornamento)

Le seguenti correzioni:
 - Avviso PHP nel log http.error durante la chiamata alla funzione buildList()
 - Aggiornamento dei comandi delle apparecchiature quando il JSON "Shipments" è vuoto


# 2024-07-16

Prima versione del plugin "Tracciamento pacchi" (parcelTracking)
 - Connessione al cloud di Parcelsapp tramite API
 - Recupero delle informazioni sui pacchi: stato, corriere, paese di origine, paese di destinazione, tappe della consegna, data di consegna
 - Funzioni disponibili: widget per singolo pacco o globale, invio di notifiche tramite comando e/o scenario, eliminazione automatica dei pacchi dopo un periodo di tempo definito

  
