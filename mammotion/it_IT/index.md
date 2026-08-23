---
layout: default
title: Plugin Mammotion - Documentazione
lang: it_IT
pluginId: mammotion
---

# Presentazione

Questo plugin consente di controllare i vostri robot tosaerba (Luba, Yuka) e i robot per piscina (Spino) del marchio **Mammotion** da Jeedom, proprio come l'app ufficiale.

La trasmissione dei dati è **automatica e in tempo reale**: il daemon del plugin mantiene una connessione permanente al cloud Mammotion (MQTT) e invia ogni cambiamento di stato a Jeedom.

> **Avviso**: questo plugin si basa sulla libreria non ufficiale [PyMammotion](https://github.com/mikey0000/PyMammotion). Le condizioni d'uso di Mammotion vietano l'accesso non ufficiale alla loro API: l'utilizzo di questo plugin è a proprio rischio e pericolo (rischio teorico di bannaggio dell'account).

# Configurazione del plugin

Dopo aver scaricato il plugin:

- Attiva il plugin
- Avvia l'installazione dei dipendenze (⚠ la prima installazione potrebbe richiedere molto tempo: compilazione di Python 3.13 tramite pyenv)
- Inserisci l'**indirizzo e-mail** e la **password** del tuo account Mammotion
- Avvia il servizio

> **Suggerimento**: il cloud Mammotion consente una sola sessione per account. Create un **account secondario** dedicato a Jeedom e condividete con esso i vostri robot dall'app ufficiale, altrimenti l'app mobile verrà disconnessa ogni volta che il demone viene avviato (e viceversa).

## Impostazioni

| Parametro | Descrizione |
| --------- | ----------- |
| E-mail | E-mail dell'account Mammotion |
| Password | Password dell'account Mammotion |
| Porta socket interna | Porta di comunicazione Jeedom → demone (predefinita: 44090) |
| Cron personalizzato | Frequenza di aggiornamento forzato (impostazione predefinita: ogni 15 min) |

# Creazione dei dispositivi

Le apparecchiature vengono create **automaticamente**:

- All'avvio del demone, viene recuperato l'elenco dei robot dell'account e vengono creati i dispositivi mancanti
- Il pulsante **Sincronizza** nella pagina del plugin avvia una nuova ricerca, aggiorna gli stati e recupera l'**elenco delle zone** di taglio e l'elenco delle **attività**.

# Comandi

## Comandi informativi (tosaerba)

| Comando | Descrizione |
| -------- | ----------- |
| Online | Robot connesso al cloud |
| Batteria | Livello della batteria (%) |
| In carica | Ricarica in corso |
| Stato | Modalità di funzionamento (MODE_WORKING, MODE_CHARGING, ...) |
| Avanzamento | Avanzamento dell'attività in corso (%) |
| Superficie falciata | Superficie falciata nella sessione (m²) |
| Tempo rimanente / trascorso | Stima in minuti dell'attività in corso |
| Altezza della lama | Altezza di taglio standard (mm) |
| Pale attive | Rotazione delle pale |
| Rilevamento della pioggia | Sensore di pioggia attivo |
| Coordinate GPS | Posizione `latitudine,longitudine` (vuoto finché il robot non ha trasmesso il proprio riferimento GNSS, vedi FAQ) |
| Orientamento | Rotta del robot (°) |
| Segnale Wi-Fi | RSSI Wi-Fi (dBm) |
| Usura delle lame | Durata di utilizzo delle lame (h) |
| Distanza totale | Distanza percorsa dalla messa in servizio (km) |
| Orario di lavoro totale | Orario di lavoro cumulativo (h) |
| Cicli della batteria | Numero di cicli della batteria |
| Firmware | Versione del firmware |
| Errori | Codici di errore attivi |
| Connessione | Tipo di connessione del robot (Wi-Fi, 3G/4G, BLE) |
| Ultimo evento | Registro degli eventi (inizio taglio, ritorno alla stazione, ricarica, aggiornamento...). Cronologia: consulta la cronologia dei comandi per il registro completo |
| Ultimo aggiornamento | Data e ora dell'ultimo dato ricevuto |

## Comandi di azionamento (tosaerba)

| Comando | Descrizione |
| -------- | ----------- |
| Aggiorna | Forza un aggiornamento dello stato |
| Avvia | Avvia/riprendi l'attività pianificata |
| Pausa | Mette in pausa l'attività |
| Riprendi | Riprende l'attività messa in pausa |
| Annulla attività | Annulla l'attività in corso |
| Ritorno alla stazione | Rimanda il robot alla sua stazione |
| Lascia la stazione | Fa uscire il robot dalla sua stazione |
| Regolazione dell'altezza della lama | Cursore da 25 a 70 mm (non presente nella gamma Yuka, come in Home Assistant) |
| Regolazione della velocità | Cursore da 20 a 60 cm/s (non disponibile nella gamma Yuka) |
| Taglia un'area | Avvia il taglio dell'area selezionata (elenco aggiornato tramite sincronizzazione) |

## Robot per piscina (Spino)

Il supporto per i robot da piscina è più limitato nella versione v1: segnalazione dello stato (online, batteria, stato, velocità) e comandi di base (avvia / pausa / annulla / torna indietro).

# Domande frequenti

**Il demone non si avvia**: controllate l'indirizzo e-mail e la password, quindi consultate il log `mammotion_daemon`. In caso di errori relativi alle dipendenze, riavviate la loro installazione. L'avvio può richiedere dai 30 ai 60 secondi su Raspberry Pi (caricamento della libreria pymammotion).

**Il modello / il firmware / le zone non vengono rilevati**: il robot deve essere raggiungibile (il plugin lo interroga e lo riattiva se necessario durante la sincronizzazione). Fare clic su *Sincronizza*: le zone vengono visualizzate pochi secondi dopo, una volta che la mappa è stata effettivamente ricevuta dal robot.

**Il campo "Coordinate GPS" è vuoto**: è normale dopo il riavvio del demone. Il robot trasmette le proprie coordinate di geolocalizzazione (base RTK o GNSS integrato per i modelli con visione/LiDAR) solo in alcuni report, generalmente quando è attivo. Il campo verrà compilato alla successiva attività del robot. Il plugin preferisce un valore vuoto a coordinate degenerate (vicine al punto 0,0 del globo).

**I dati non vengono aggiornati in tempo reale**: il robot pubblica solo quando è attivo o quando il suo stato cambia. Il cron, inoltre, impone un aggiornamento periodico.
