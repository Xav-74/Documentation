---
layout: default
title: Plugin Verisure - Cronologia delle modifiche
lang: it_IT
pluginId: verisure
---

# Da leggere assolutamente!

**Di seguito sono riportate le note, le aggiunte e le correzioni relative a ciascuna versione del plugin**

**Nota**: se un aggiornamento non è elencato qui, significa che comporta solo modifiche minori, come aggiornamenti alla documentazione o correzioni di bug minori.

# 11 agosto 2026 [s]

Novità:

- Traduzione del plugin in 5 lingue (EN, DE, ES, PT, IT)
- Trascrizione dei log in inglese
- Aggiornamento dei widget nell'ambito di un processo di armonizzazione di tutti i miei plugin

Attenzione: a partire da questa versione, la versione minima richiesta di Jeedom è la v4.4 e Debian 11!

# 31 maggio 2026 [s]

Aggiornamento dell'icona nell'ambito di un processo di armonizzazione di tutti i miei plugin

# 22/02/2026 [s]

Aggiunte le seguenti funzioni:

- Supporto dei sensori di movimento per esterni QP (tipo 3)
- Supporto della modalità esterna (tipo 3)
- Aggiunta dell'aggiornamento tramite cronologia (tipo 1 e 3)
- Supporto della "modalità forzata" (tipo 3)
- Supporto per i rilevatori di acqua (tipo 2)

Le seguenti correzioni:

- Correzione di un bug relativo alla serratura connessa (tipo 3)
- Correzione di un bug nella richiesta di accesso (tipo 2)
- Correzione di un bug relativo alla visualizzazione del nome del sensore nel widget (tipo 2)

# 31 dicembre 2024 [s]

Aggiunte le seguenti funzioni:

- Integrazione delle serrature connesse negli allarmi di ultima generazione (tipo 3)
- Ottimizzazione del codice (creazione dei comandi)

# 13 dicembre 2024 [s]

Le seguenti correzioni:

- Correzione di un bug nella richiesta "getPhotos" per gli allarmi di ultima generazione (tipo 3)

# 8 dicembre 2024 [s]

Le seguenti correzioni:

- Correzione di un errore nella richiesta "logout"
- Ottimizzazione del codice per PHP 8.0

# 9 febbraio 2024 [s]

Aggiunte le seguenti funzioni:

- Aggiunta dell'immagine dell'allarme nelle miniature della pagina del plugin

Le seguenti correzioni:

- Aggiornamento del pulsante per la creazione automatica di un post sulla Community Jeedom (vCore Jeedom 4.4 mini)
- Aggiornamento degli screenshot del plugin

# 17 gennaio 2024 [s]

Le seguenti correzioni:

- Allarmi di tipo 1 e 3: correzione a seguito delle modifiche alle API Verisure e della comparsa dell'errore "Required request header 'x-installationNumber' not present"

# 7 gennaio 2024 [s]

Aggiunte le seguenti funzioni:

- Compatibilità ufficiale degli allarmi di tipo 3
- Fine del supporto per le versioni di Jeedom 3.x. La versione minima del core necessaria per il corretto funzionamento del plugin è la 4.0

# 19 novembre 2023 [s]

Aggiunte le seguenti funzioni:

- Compatibilità Jeedom v4.4 con Debian 12 e PHP 8.x
- Aggiunta di un pulsante per la creazione automatica di un post sulla Community Jeedom (vCore Jeedom 4.4 mini)

# 11 settembre 2023 [s]

Le seguenti correzioni:

- Visualizzazione del widget su uno smartphone/tablet in modalità desktop

# 29 maggio 2023 [s]

Aggiunte le seguenti funzioni:

- Interruttore per la visualizzazione delle password

Le seguenti correzioni:

- Allarme di tipo 2: creazione dei comandi informativi "Umidità" per i rilevatori di fumo

# 22 maggio 2023 [s]

Ottimizzazione del codice e dei log

Le seguenti correzioni:

- Allarme di tipo 1: correzione di un bug nella funzione GetPictures a seguito della modifica delle API
- Allarme di tipo 2: passaggio automatico al server secondario se quello primario è inattivo, ma accetta comunque il login

# 11 aprile 2023 [s]

Correzioni a seguito delle modifiche alle API Verisure (autenticazione MFA e richieste - Migrazione dall'API REST a GraphQL). Attenzione: si tratta quindi di un aggiornamento **significativo**. Sarà necessario effettuare nuovamente l'autenticazione per ogni allarme creato (tipo 1 e 2).

Aggiunte le seguenti funzioni:

- Supporto per la nuova generazione di allarmi (attualmente tramite il tipo 1)
- Ridisegnazione dei widget (compatibilità con il core Jeedom v4.4)

# 18 ottobre 2022 [s]

Aggiunte le seguenti funzioni:

- Nuova visualizzazione della tabella dei comandi delle apparecchiature (compatibilità con Jeedom v4.3 core)
- Riorganizzazione della visualizzazione della pagina "Attrezzature"

# 24 aprile 2022 [s]

Aggiunte le seguenti funzioni:

- Richieste di immagini per gli allarmi di tipo 2

Le seguenti correzioni:

- Regolazione automatica dell'altezza del widget in caso di più allarmi sulla dashboard
- Correzione di un errore nella funzione SetEqLogic()

# 2 febbraio 2022 [s]

Le seguenti correzioni:

- Correzione del bug di visualizzazione del widget di tipo 2 nella versione 4.2 se l'utente connesso non è un amministratore

# 31 gennaio 2022 [s]

Aggiunte le seguenti funzioni:

- Test e convalida del plugin per la versione 4.2 del core di Jeedom
- Sicurezza: crittografia della password dei dispositivi nel database Jeedom
- Aggiunta di un tooltip relativo al numero di installazione nella pagina principale di un dispositivo
- Scheda "Notifiche Verisure": aggiunta dello scenario di notifiche via SMS
- Modifiche minori all'interfaccia (integrazione della nuova modalità tabella nella versione 4.2)

Le seguenti correzioni:

- Correzione degli errori presenti nel log http.error di Jeedom (se la variabile SESSIONID è vuota)

# 7 luglio 2021 [s]

Aggiunte le seguenti funzioni:

- Aggiunta dei comandi "informazioni" / "azioni" per i dispositivi degli allarmi di tipo 2 (temperatura, umidità, stato/acceso/spento delle prese collegate, stato (aperto/chiuso) dei sensori di apertura)
- Visualizzazione di un errore nel centro notifiche Jeedom all'attivazione dell'allarme a causa di una porta o una finestra rimasta aperta

Le seguenti correzioni:

- Modifiche e correzioni ai log

# 6 gennaio 2021 [s]

Aggiunte le seguenti funzioni:

- Aggiunta di un comando informativo "Qualità della rete" per gli allarmi di tipo 1. Questo indicatore si basa sul numero di richieste andate a buon fine durante la connessione al cloud Verisure
- Aggiunta della visualizzazione sul dashboard del livello di umidità delle smartplug compatibili per gli allarmi di tipo 2

Le seguenti correzioni:

- Nuova visualizzazione dell'elenco degli oggetti (conforme al core v4.1)
- Errore relativo al fuso orario (UTC) nel rapporto di attività degli allarmi di tipo 2 (ora basato sul fuso orario di Jeedom)
- Correzione degli errori nel log hhtp_error durante la visualizzazione del rapporto di attività degli allarmi di tipo 1

# 6 novembre 2020 [s]

Correzioni a seguito delle modifiche alle API Verisure (autenticazione e parametri delle richieste)

# 13 ottobre 2020 [s]

Aggiunte le seguenti funzioni:

- Supporto per gli allarmi Verisure presenti in Belgio e nell'Europa settentrionale. Il comando "Richiedi immagini" non è ancora operativo per questo tipo di apparecchiatura
- Possibilità di nascondere alcuni comandi sul widget (Richiesta immagini, attivazione in modalità notturna, attivazione in modalità diurna, attivazione in modalità esterna)
- Aggiornamento delle icone del rapporto di attività

Le seguenti correzioni:

- Errore di visualizzazione di Homebridge in modalità Notte e Giorno (Casa)
- Errore di visualizzazione del rapporto di attività durante l'attivazione della modalità notturna tramite telecomando

# 4 settembre 2020 [s]

Esternalizzazione della documentazione del plugin

# 22 agosto 2020 [s]

Le seguenti correzioni:

- Trasferimento dei log da "Errore" a "Avviso" per evitare di sovraccaricare il centro messaggi Jeedom
- Modifiche e correzioni minori

# 30 giugno 2020 [s]

Aggiunte le seguenti funzioni:

- Gestione delle modalità miste (Totale + Esterno, Notte + Esterno, Giorno + Esterno)

# 14 giugno 2020 [s]

Aggiunte le seguenti funzioni:

- Implementazione di un template per la dashboard mobile compatibile con le versioni v3 e v4 (Core2019 Light, Dark e Legacy)

# 11 giugno 2020 [s]

Aggiunte le seguenti funzioni e correzioni:

- Richieste di immagini
- Gestione dell'eccezione del cron ogni giorno alle 00:00 per evitare un aggiornamento durante la manutenzione dei server Versiure
- Implementazione di un template per la dashboard compatibile con le versioni v3 e v4 (Core2019 Light, Dark e Legacy)
- Ottimizzazione globale del codice
- Riorganizzazione dei log del plugin

# 4 maggio 2020 [s]

Aggiunte le seguenti funzioni:

- Accesso al registro delle attività di Verisure
- Scheda "Notifiche Verisure" per la configurazione degli scenari di notifica via e-mail e SMS
  
# 15 aprile 2020 [s]

Prima versione del plugin Verisure

- Connessione al cloud Verisure
- Recupero delle informazioni relative all'impianto
- Funzioni: attivazione in modalità totale, attivazione in modalità notturna, attivazione in modalità diurna, attivazione in modalità esterna, disattivazione, recupero dello stato dell'allarme (in modalità manuale o automatica (ogni 30 min))
- Compatibilità con Homebridge

**ATTENZIONE**: in questa prima versione, l'evento relativo all'attivazione dell'allarme non è ancora stato preso in considerazione!
