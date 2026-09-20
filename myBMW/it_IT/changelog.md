---
layout: default
title: Plugin myBMW - Cronologia delle modifiche
lang: it_IT
pluginId: myBMW
---

# Da leggere assolutamente!

**Di seguito sono riportate le note, le aggiunte e le correzioni relative a ciascuna versione del plugin**

**Nota**: se un aggiornamento non è elencato qui, significa che comporta solo modifiche minori, come aggiornamenti alla documentazione o correzioni di bug minori.


# 2026-07-31

Le seguenti correzioni:
 - Correzione di un bug relativo alla visualizzazione della percentuale di carica della batteria - Supporto del nuovo parametro "vehicle.drivetrain.batteryManagement.header"
 - Aggiornamento del catalogo Telematics con l'aggiunta del campo "Condition Based Service" (246 fino ad oggi)


# 2026-07-25

Le seguenti correzioni:
 - Aggiornamento del catalogo Telematics con i soli campi streamabili (245 ad oggi)


# 2026-07-04

Aggiunte le seguenti funzioni:
 - Configurazione di un cron personalizzabile per evitare gli errori "500" dei server BMW in caso di interrogazione a un'ora fissa (xx:00). Per impostazione predefinita, questo cron è impostato ogni 2 ore, 5 minuti dopo l'ora (xx:05), ma è possibile modificare il minuto esatto modificando il primo valore del cron (5 */2 * * *)


# 2026-06-19

Aggiunte le seguenti funzioni:
 - Aggiunta di un parametro "Prezzo medio del kWh" per calcolare il costo di una ricarica elettrica, visibile nel grafico della cronologia delle ricariche (Pannello)
 
Le seguenti correzioni:
 - Pannello: correzione dell'errore JavaScript "Unexpected end of JSON input" durante la visualizzazione della cronologia dei consumi elettrici


# 2026-05-31

Aggiornamento dell'icona nell'ambito di un processo di armonizzazione di tutti i miei plugin


# 2025-11-09

Aggiunte le seguenti funzioni:
 - Passa alle **API ufficiali BMW**
 - Configurazione dello **stream MQTT** per il recupero in tempo reale delle informazioni

**ATTENZIONE** Si tratta di un aggiornamento importante del plugin che richiede una configurazione completa dello stesso. Si prega di leggere attentamente la documentazione e di seguire passo dopo passo tutte le istruzioni descritte (in particolare le operazioni da effettuare sul proprio account utente BMW o Mini)


# 2025-09-12

Aggiunte le seguenti funzioni:
 - Possibilità di configurare l'obiettivo di ricarica e il limite di corrente di carica per i veicoli elettrici e ibridi ricaricabili compatibili
 - Aggiunta dei comandi informativi corrispondenti
 - Generazione di un x_user_agent generico e specifico per il dispositivo per evitare errori 403 (Out of call volume quota)
 - Aggiunta di un aggiornamento automatico per il recupero immediato delle informazioni dopo la sincronizzazione del veicolo o dopo l'utilizzo di un servizio remoto che lo richieda

**ATTENZIONE** Per poter usufruire di queste nuove funzionalità è necessario eseguire una nuova sincronizzazione di tutti i tuoi veicoli (senza captcha)

Le seguenti correzioni:
 - Ottimizzazione del codice
 - Pagina di configurazione: correzione di un bug relativo alla funzione di salvataggio automatico prima di una sincronizzazione o di una modifica delle impostazioni
 - Pagina di configurazione: correzione di un bug relativo alla rimozione automatica del captcha dopo una sincronizzazione


# 2025-05-20

Aggiunte le seguenti funzioni:
 - Rimozione di cron30 e aggiunta di un cron personalizzabile dalla pagina di configurazione del plugin


# 2025-03-09

Aggiunte le seguenti funzioni:
 - Aggiunta del comando info chargingTarget (obiettivo di ricarica elettrica in %)

Le seguenti correzioni:
 - Pannello: correzione di un bug relativo alla visualizzazione dello stato di apertura/chiusura del cofano


# 2025-01-31

Aggiunte le seguenti funzioni:
 - Aggiunta del comando totalEnergyCost (costo totale mensile del consumo elettrico)
 - Riduzione del numero di richieste ai server BMW in base alle capacità del veicolo (carichi e percorsi)
 - Pannello: modifica del grafico relativo alle statistiche di carico (aggiunta del costo totale)
 - Pannello e dashboard: la visualizzazione dei grafici e dei pulsanti avviene ora in base alle capacità del veicolo

Le seguenti correzioni:
 - Pannello: correzione di un bug nella prima visualizzazione con le icone di porte e finestre


# 2024-12-18

Le seguenti correzioni:
 - Correzione di un bug che causava la sovrascrittura della cronologia dei viaggi se la richiesta restituiva erroneamente "TripHistoryNotActive"


# 2024-12-08

Aggiunte le seguenti funzioni:
 - Gestione del captcha richiesto da BMW al primo accesso (vedi documentazione!!)
 - Visualizzazione dei servizi disponibili in base all'abbonamento nella pagina "Apparecchiature"

Le seguenti correzioni:
 - Visualizzazione dell'ora in aggiunta alla data sui grafici


# 2024-10-22

Le seguenti correzioni:
 - Correzione di bug relativi ai comandi del pannello (sendPOI e vehicleFinder)


# 2024-09-06

Aggiunte le seguenti funzioni:
 - Supporto delle nuove API BMW e Mini (app mobile v4.7.2)

Le seguenti correzioni:
 - Correzione di un bug nella richiesta sendPOI (modifica dell'API)
 - Correzione di un bug nella richiesta vehicleFinder (modifica API)
 - Correzione di un bug nella richiesta lastTrip (considerazione dell'informazione "NoTripsYet")


# 2024-07-07

Aggiunte le seguenti funzioni:
 - Aggiunta delle sessioni di ricarica per le auto elettriche con range extender (tipo ELECTRIC_WITH_RANGE_EXTENDER)

Le seguenti correzioni:
 - Miglioramento della visualizzazione dei post nella community
 - Correzione di un bug relativo alla visualizzazione dei messaggi di servizio (modifica dell'API)
 - Correzione di un bug nella richiesta chargingStatistics (modifica API)
 - Correzione di un bug relativo alla visualizzazione del pannello e della dashboard per i veicoli di tipo "mild_hybrid" (API v2) o "hybrid" (API v1)


# 2024-04-17

Aggiunte le seguenti funzioni:
 - Aggiunta di un pulsante che consente la rimozione manuale del token dal dispositivo
 - Aggiunta della richiesta "Impostazioni OAuth2"
 - Aggiunta della funzione unset() per le richieste cURL (compatibilità con PHP 8.x)

Le seguenti correzioni:
 - Correzione della sincronizzazione dei veicoli a seguito della modifica delle API (metodo SHA256)
 - Correzione di un bug relativo alla visualizzazione delle tessere per le auto elettriche con range extender (tipo ELECTRIC_WITH_RANGE_EXTENDER)


# 2024-04-16

Aggiunte le seguenti funzioni:
 - Leggera modifica al design del widget e del pannello
 - Pannello: passaggio dalla visualizzazione delle sessioni di ricarica dalla modalità tabella alla modalità grafica
 - Pannello: aggiunta di un grafico sulle statistiche di guida (se disponibile)
 - Pannello: aggiunta di un grafico sui percorsi del mese in corso (se disponibile)
 - Modifica del cron: passaggio da 1 ora a 30 minuti (in particolare per il recupero degli ultimi percorsi)

Le seguenti correzioni:
- Correzione di un bug relativo alla visualizzazione delle sessioni di ricarica per un veicolo a combustione interna
- Correzione dell'URL delle sessioni di caricamento a seguito della modifica delle API


# 2024-03-14

Aggiunte le seguenti funzioni:
 - Supporto delle nuove API BMW e Mini v3.11.0
 - Riduzione del numero di richieste ai server BMW (in particolare passaggio da cron30 a cronHourly (temporaneo o meno))
 - Aggiunta della richiesta API "lastTrips". Un nuovo grafico sarà disponibile in seguito nel pannello di controllo

Le seguenti correzioni:
 - Registrazione predefinita dei 3 comandi necessari per i grafici del pannello al momento della loro creazione
 - Rimozione della richiesta "chargingStatistics", che attualmente non funziona più


# 2024-02-09

Aggiunte le seguenti funzioni:
 - Aggiunta dell'immagine del veicolo nelle miniature della pagina del plugin

Le seguenti correzioni:
 - Aggiornamento del pulsante per la creazione automatica di un post sulla Community Jeedom (vCore Jeedom 4.4 mini)
 - Aggiornamento degli screenshot del plugin
 

# 2024-01-31

Le seguenti correzioni:
 - Correzione dei km rimanenti per le auto elettriche con range extender (tipo ELECTRIC_WITH_RANGE_EXTENDER)
 

# 2023-11-30

Le seguenti correzioni:
 - Gestione dell'errore "429 - Limite di frequenza superato"
 - Visualizzazione del pannello anche se l'apparecchiatura non è visibile


# 2023-11-19

Aggiunte le seguenti funzioni:
 - Compatibilità Jeedom v4.4 con Debian 12 e PHP 8.x
 - Supporto delle nuove API BMW e Mini v3.9.0
 - Aggiunta di un pulsante per la creazione automatica di un post sulla Community Jeedom (vCore Jeedom 4.4 mini)


# 2023-10-10

Aggiunte le seguenti funzioni:
 - Supporto del tema Legacy per la visualizzazione del widget e del pannello (vCore Jeedom < 4.4)

Le seguenti correzioni:
 - Ritorno sul passaggio della quantità di carburante residuo da litri a %, a seguito della modifica delle API. Ora sono disponibili entrambe le opzioni, a seconda del veicolo
 - Correzione del comando «sessioni di ricarica», che restituiva un JSON non valido se il veicolo non era di tipo elettrico o ibrido


# 2023-10-04

Aggiunte le seguenti funzioni:
 - Supporto delle nuove API BMW e Mini v3.3.1
 - Ridisegnato il widget con un ritorno a un design più tradizionale/convenzionale per non sovraccaricare inutilmente la dashboard, concentrandosi esclusivamente sulle informazioni e sulle azioni importanti
 - Aggiunta di un pannello molto più completo, che include in particolare grafici relativi al chilometraggio, al volume di carburante e alla batteria. A tal fine, è necessario selezionare l'opzione «pannello» nelle impostazioni del plugin e attivare la registrazione dei dati relativi a «chilometraggio», «carburante» e/o «batteria». Il pannello è personalizzabile dalla pagina di configurazione del dispositivo (icona/testo dello stato di apertura di porte e finestre, colori, ecc.)
 - Aggiunta della cronologia dei consumi del mese in corso con la potenza consumata e il costo approssimativo, se configurato nell'app BMW o Mini
 - Aggiunta delle informazioni sul carico nei dati grezzi
 - Aggiunta dei pulsanti "Start" e "Stop" per la ricarica dei veicoli elettrici
 - Possibilità di visualizzare la password sul dispositivo
 - Inizio della compatibilità con Jeedom v4.4

Le seguenti correzioni:
 - Correzione della visualizzazione del widget su smartphone/tablet in modalità desktop (beh, più o meno!)
 - Aggiunta di log supplementari in caso di debug durante l'aggiornamento del token
 - Conversione del volume di carburante residuo da litri a % a seguito della modifica delle API
 - Ottimizzazione della visualizzazione dei messaggi relativi ai controlli o ai servizi (se la descrizione è vuota)
 - Correzione della funzione "VehicleFinder" a seguito della modifica delle API. Utilizzo dell'ultima posizione nota del veicolo, poiché ora è necessario inviare le coordinate GPS di chi richiede la localizzazione del veicolo. La posizione viene restituita solo se il veicolo si trova in un raggio inferiore a 1,5 km.


# 2023-01-15

Aggiunte le seguenti funzioni:
 - Supporto delle nuove API BMW e Mini v2.12
 - Aggiunta della pressione e del valore di gonfiaggio consigliato per gli pneumatici (Attenzione: la funzionalità varia a seconda del veicolo. Le informazioni sul widget sono visibili solo se disponibili)
 - Aggiunta dell'icona e gestione dei messaggi relativi al liquido lavavetri

Le seguenti correzioni:
 - Regolazione della visuale del veicolo (vista di profilo a 3/4 per tutti i veicoli - richiede una nuova sincronizzazione e lo svuotamento della cache)
 - Modifica del messaggio relativo al tempo rimanente per la ricarica dei veicoli elettrici
 - Aggiornamento della documentazione


# 2022-09-25

Aggiunte le seguenti funzioni:
 - Aggiunta della presenza del veicolo a casa
 - Aggiunta della distanza tra il veicolo e l'abitazione
 - Gestione dei messaggi relativi alle pastiglie dei freni e all'usura degli pneumatici
 - Rimozione dei 2 comandi «unità di misura della distanza» e «unità di misura del carburante» (non utilizzati)
 - Nuova visualizzazione della tabella dei comandi delle apparecchiature (compatibilità con Jeedom v4.3 core)
 

Le seguenti correzioni:
 - Eliminazione della congiunzione «o» dal titolo dei messaggi di servizio in assenza di data
 - Correzione del colore blu delle icone Font Awesome del widget flatdesign
 - Correzione dell'API per il recupero degli "status event" (eliminazione del check-out)
 - Aggiornamento della documentazione
 

# 2022-09-02

Aggiunte le seguenti funzioni:
 - Aggiunti i nuovi comandi informativi «Tutte le porte» e «Tutte le finestre»
 - Nuovo widget «Flat Design»: è possibile selezionare il widget desiderato nella pagina dell'apparecchio (compatibile con i temi dark e light). Questo widget è personalizzabile (vedere la documentazione).

Le seguenti correzioni:
 - Modifica del timeout per l'aggiornamento del token al fine di evitare errori di connessione


# 2022-08-01

Aggiunte le seguenti funzioni:
 - Aggiunta di icone per la gestione dei messaggi di controllo del veicolo (olio, freni, pressione dei pneumatici, controllo generale del veicolo)

Le seguenti correzioni:
 - Correzione di un bug relativo alla sincronizzazione in caso di apparecchiature non salvate (da ora in poi il salvataggio sarà automatico)


# 2022-07-25

Aggiunte le seguenti funzioni:
 - Supporto delle nuove API BMW e Mini v2
 - Aggiunta di tooltip sul widget per conoscere lo stato di porte e finestre

Le seguenti correzioni:
 - Correzione di un bug relativo al token di aggiornamento


# 2022-06-12

Aggiunte le seguenti funzioni:
 - Supporto delle nuove API Mini
 - Fusione delle API BMW e Mini e ottimizzazione del codice
 - Supporto della lingua francese per le informazioni restituite (unità e messaggi del veicolo)
 - Passaggio dei log da «debug» a «error» se la richiesta non va a buon fine
 - Utilizzo del logicalID dei dispositivi in vista di futuri sviluppi

Le seguenti correzioni:
 - Correzione di un bug nella funzione CreateCmd
 - Correzione dei km rimanenti dei motori a combustione (sottrazione dei km rimanenti dei motori elettrici)
 - Visualizzazione dell'ultima connessione come «sconosciuta» se il valore restituito è 01/01/1970
 - Risoluzione del problema di visualizzazione dei messaggi che contengono un « ’ »


# 2022-05-28

Le seguenti correzioni:
 - Modifica delle API BMW Connected Drive (x-user-agent)
 - Correzione di un bug relativo all'URL dell'immagine del veicolo se Jeedom non è installato nella directory principale
 - Conversione da miglia a km per la distanza totale


# 2022-04-24

Aggiunte le seguenti funzioni:
 - Supporto della modalità "Secured" a livello di widget (blocco)
 - Aggiunta la possibilità di archiviare i comandi nella scheda Apparecchiature\Comandi
 - Supporto per la visualizzazione di informazioni storiche sullo sfondo delle tessere (core v4.2)
 

# 2022-04-11

Aggiunte le seguenti funzioni:
 - Ventilazione: aggiunta delle modalità start/stop
 - Ricerca veicolo: localizzazione del veicolo in tempo reale
 - Funzione di invio di un POI tramite i messaggi dell'auto
 - Verifica dello stato di ciascuna azione per 2 minuti ("PENDING" -> "EXECUTED" o "ERROR")
 - Aggiunta dei comandi "Status" per ogni comando di azione (per il monitoraggio tramite scenario)
 - Modifica delle icone delle azioni
 
Le seguenti correzioni:
 - Correzione di un bug che causava la visualizzazione di "presa scollegata" se il valore era "false" anziché "0" su un veicolo elettrico
 - ottimizzazione del codice


# 2022-03-28

Prima versione del plugin myBMW
 - Connessione al cloud BMW Connected Drive
 - Rilevamento delle informazioni relative al veicolo: stato delle serrature, stato delle porte e dei finestrini, chilometraggio totale, percentuale di carica e autonomia residua per i motori elettrici, livello di carburante e autonomia residua per i motori termici, posizione del veicolo, messaggi di avviso
 - Funzioni disponibili: blocco/sblocco del veicolo, avvio della ventilazione, lampeggio dei fari, clacson
  
