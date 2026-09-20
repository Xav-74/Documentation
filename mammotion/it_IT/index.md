---
layout: default
title: Plugin Mammotion - Documentazione
lang: it_IT
pluginId: mammotion
---

# Presentazione

Questo plugin consente di controllare i vostri robot tosaerba (Luba, Yuka) e i robot per piscina (Spino) del marchio **Mammotion** da Jeedom, proprio come l'app ufficiale.

La trasmissione dei dati è **automatica e in tempo reale**: il daemon del plugin mantiene una connessione permanente al cloud Mammotion (MQTT) e invia ogni cambiamento di stato a Jeedom.

> **Avviso**
>
>Questo plugin si basa sulla libreria non ufficiale [PyMammotion](https://github.com/mikey0000/PyMammotion). Le condizioni d'uso di Mammotion vietano l'accesso non ufficiale alla loro API: l'utilizzo di questo plugin è a proprio rischio e pericolo (rischio teorico di blocco dell'account).

<!-- -->

> **Suggerimento**
>
> La **versione minima di Jeedom** necessaria per il corretto funzionamento del plugin è la **versione 4.4**
> Il plugin è già compatibile con la **versione 4.6** di Jeedom e con le **versioni Debian 12**

# Configurazione del plugin

Dopo aver scaricato il plugin:

- Attiva il plugin
- Avvia l'installazione dei dipendenze (⚠ la prima installazione potrebbe richiedere molto tempo: compilazione di Python 3.13 tramite pyenv)
- Inserisci l'**indirizzo e-mail** e la **password** del tuo account Mammotion
- Avvia il servizio

> **Suggerimento**
>
>Il cloud Mammotion consente una sola sessione per account. Crea un **account secondario** dedicato a Jeedom e condividi i tuoi robot dall'app ufficiale; in caso contrario, l'app mobile verrà disconnessa ogni volta che il demone viene avviato (e viceversa).

## Impostazioni

| Parametro | Descrizione |
| --------- | ----------- |
| E-mail | E-mail dell'account Mammotion |
| Password | Password dell'account Mammotion |
| Porta socket interna | Porta di comunicazione Jeedom → demone (predefinita: 44090) |
| Cron personalizzato | Frequenza di aggiornamento forzato (impostazione predefinita: ogni 15 min) |

# Creazione dei dispositivi

Il rilevamento dei robot avviene tramite il pulsante **Sincronizza** nella pagina del plugin. Il plugin interroga l'account Mammotion, crea i dispositivi mancanti, ne aggiorna il modello e il firmware, quindi recupera l'elenco delle zone di taglio e l'elenco delle attività.

Eseguitelo dopo il primo avvio del demone, quindi ogni volta che aggiungete un robot al vostro account o modificate le impostazioni dei vostri robot, delle vostre zone e/o delle vostre attività dall'applicazione.

Il tipo di robot viene rilevato automaticamente (tosaerba o piscina) e determina i comandi creati e il widget visualizzato sulla dashboard. Le zone e le attività riguardano solo i tosaerba.

La pagina dedicata all'apparecchio e il relativo widget mostrano un'immagine corrispondente al modello rilevato. Quando il modello esatto non è disponibile, viene utilizzata l'immagine del modello più simile.

# Comandi — Tosaerba (Luba, Yuka)

## Comandi e informazioni

| Comando | Descrizione |
| -------- | ----------- |
| Online | Robot connesso al cloud |
| Batteria | Livello della batteria (%) |
| Stato | Modalità di funzionamento (taglio, ricarica, ritorno alla stazione, ...) |
| Velocità | Velocità di spostamento attuale (m/s) |
| In carica | Ricarica in corso |
| Sulla base | Robot posizionato sulla sua stazione |
| Avanzamento | Avanzamento dell'attività in corso (%) |
| Superficie falciata | Superficie falciata nella sessione (m²) |
| Area corrente | Nome dell'area attualmente sottoposta a taglio |
| Tempo rimanente / trascorso | Stima in minuti dell'attività in corso |
| Altezza della lama | Altezza di taglio standard (mm) |
| Pale attive | Rotazione delle pale |
| Rilevamento della pioggia | Sensore di pioggia attivo |
| Coordinate GPS | Posizione `latitudine,longitudine` (vuoto finché il robot non ha trasmesso il proprio riferimento GNSS, vedi FAQ) |
| Orientamento | Rotta del robot (°) |
| Segnale Wi-Fi / Bluetooth / cellulare | RSSI di ciascun collegamento (dBm) |
| Durata di utilizzo delle lame | Usura cumulativa delle lame (h) |
| Soglia di usura delle lame | Soglia oltre la quale si consiglia la sostituzione (h) |
| Tempo residuo di utilizzo delle lame | Differenza tra la soglia e l'usura cumulativa (h) |
| Distanza totale | Distanza percorsa dalla messa in servizio (km) |
| Orario di lavoro totale | Orario di lavoro cumulativo (h) |
| Cicli della batteria | Numero di cicli della batteria |
| Firmware | Versione del firmware |
| Errori | Codici di errore attivi, con relativa descrizione |
| Connessione | Tipo di connessione del robot (Wi-Fi, 3G/4G, BLE) |
| Ultimo evento | Registro degli eventi (inizio taglio, ritorno alla stazione, ricarica, aggiornamento...). Cronologia: consulta la cronologia dei comandi per il registro completo |
| Impostazione dell'altezza della lama / Impostazione della velocità | L'ultimo valore impostato tramite i cursori viene riutilizzato all'avvio di un ciclo di taglio |
| Messa in letargo | Modalità di messa in letargo attiva o disattivata (vedi *Modalità di messa in letargo*) |
| Ultimo aggiornamento | Data e ora dell'ultimo dato ricevuto |

## Comandi di azione

| Comando | Descrizione |
| -------- | ----------- |
| Aggiorna | Forza un aggiornamento dello stato |
| Avvia | Avvia/riprendi l'attività pianificata |
| Pausa | Mette in pausa l'attività |
| Riprendi | Riprende l'attività messa in pausa |
| Annulla attività | Annulla l'attività in corso |
| Ritorno alla stazione | Rimanda il robot alla sua stazione |
| Lascia la stazione | Fa uscire il robot dalla sua stazione |
| Regolazione dell'altezza della lama | Cursore in mm, impostazione predefinita 30 → 70 (non disponibile nella gamma Yuka) |
| Regolazione della velocità | Cursore in m/s, impostazione predefinita da 0,2 a 0,6 (non disponibile nella gamma Yuka) |
| Taglia un'area | Avvia il taglio dell'area selezionata (elenco aggiornato tramite sincronizzazione) |
| Avvia un'attività | Avvia un'attività programmata nell'applicazione (elenco aggiornato tramite sincronizzazione) |
| Attiva/disattiva la modalità invernale | Attiva la modalità invernale oppure la disattiva se è già attiva (vedi *Modalità invernale*) |

> **Suggerimento**
>
> I limiti dei due cursori vengono regolati automaticamente in base alle capacità rilevate dal vostro modello: i valori sopra indicati sono solo quelli di riserva.

Per il robot tosaerba è disponibile un widget dedicato, con i 7 (Yuka) o 9 (Luba) pulsanti di comando e le informazioni principali.

# Comandi — Robot per piscina (Spino)

## Comandi e informazioni

| Comando | Descrizione |
| -------- | ----------- |
| Online | Robot connesso al cloud |
| Batteria | Livello della batteria (%) |
| In carica | Ricarica in corso |
| Stato | Stato del robot: In standby, In preparazione, In attesa di essere messo in acqua, Pulizia in corso, Ritorno alla stazione, In ricarica, Partenza dalla stazione, Richiamo in corso |
| Modalità di pulizia | Modalità attiva: Completa, Pavimento, Pareti, Eco — oppure *Nessuna* quando il robot non sta pulendo (vedi FAQ) |
| Segnale Wi-Fi | RSSI Wi-Fi (dBm) |
| Segnale Bluetooth | RSSI Bluetooth (dBm) |
| Connessione Wi-Fi | Connessione Wi-Fi stabilita |
| Firmware | Versione del firmware |
| Messa in letargo | Modalità di messa in letargo attiva o disattivata (vedi *Modalità di messa in letargo*) |
| Ultimo aggiornamento | Data e ora dell'ultimo dato ricevuto |

## Comandi di azione

| Comando | Descrizione |
| -------- | ----------- |
| Aggiorna | Forza un aggiornamento dello stato |
| Pulizia completa | Pulizia del fondo e delle pareti (modalità **ALL** dell'app) |
| Pulizia del pavimento | Solo fondo della vasca (**FLOOR**) |
| Pulizia delle pareti | Solo pareti (**WALL**) |
| Pulizia ecologica | Spazzamento della superficie (**ECO**) |
| Arresto e ritorno alla ricarica | Interrompe la pulizia in corso e rimanda il robot a ricaricarsi (pulsante *ricarica* dell'applicazione) |
| Attiva/disattiva la modalità invernale | Attiva la modalità invernale oppure la disattiva se è già attiva (vedi *Modalità invernale*) |

> **Suggerimento**
>
> Le 4 modalità corrispondono esattamente ai 4 pulsanti della schermata iniziale dell'applicazione Mammotion. Nel protocollo sono presenti altre modalità (linea d'acqua, personalizzata), ma non sono ancora disponibili.

Per il robot per piscina è disponibile un widget dedicato, con i 5 pulsanti di comando e le informazioni principali.

# Modalità svernamento

Quando un robot viene riposto per la stagione, viene spento. La **modalità svernamento** mette questo dispositivo in stato di sospensione.

Quando è attivo:

- il **cron ignora il dispositivo**: non vengono più inviate richieste di aggiornamento;
- i **comandi di controllo sono bloccati** e restituiscono un messaggio esplicito, anche da uno scenario;
- l'**apparecchio rimane visibile** sul pannello di controllo e conserva la cronologia;
- il **demone continua a funzionare** normalmente per gli altri robot.

Questa impostazione è **specifica per ogni apparecchiatura**: è possibile mettere in modalità invernale il robot per la piscina pur continuando a pulire il fondo.

## Come attivarla

Tre opzioni, che agiscono tutte sulla stessa impostazione:

- la casella **Modalità svernamento**, sezione *Svernamento* della pagina dedicata all'apparecchiatura;
- l'**icona nella barra del titolo del widget**: un fiocco di neve quando il robot è in modalità standard, un sole quando è in modalità di ibernazione. Un clic permette di passare da una modalità all'altra;
- il comando **Attivare la modalità invernale**, utilizzabile in uno scenario.

Il comando info **Messa in letargo** indica lo stato attuale. Viene registrato in un archivio storico, il che consente di risalire alle date di inizio e fine della messa in letargo.

> **Suggerimento**
>
> Il comando *Attiva/disattiva modalità invernale* inverte lo stato: se chiamato due volte, torna al punto di partenza. In uno scenario che automatizza l'attivazione della modalità invernale, provate prima il comando info **Modalità invernale** e chiamate il comando di attivazione/disattivazione solo se il valore è 0.

Al termine del periodo di inattività invernale, i dati vengono aggiornati al prossimo passaggio del cron, oppure immediatamente se si fa clic su *Aggiorna*.

# Domande frequenti

**Il demone non si avvia**: controllate l'indirizzo e-mail e la password, quindi consultate il log `mammotion_daemon`. In caso di errori relativi alle dipendenze, riavviate la loro installazione. L'avvio può richiedere dai 30 ai 60 secondi su Raspberry Pi (caricamento della libreria pymammotion).

**Il modello / il firmware / le zone non vengono rilevati**: il robot deve essere raggiungibile (il plugin lo interroga e lo riattiva se necessario durante la sincronizzazione). Fare clic su *Sincronizza*: le zone vengono visualizzate pochi secondi dopo, una volta che la mappa è stata effettivamente ricevuta dal robot.

**Il campo "Coordinate GPS" è vuoto**: è normale dopo il riavvio del demone. Il robot trasmette le proprie coordinate di geolocalizzazione (base RTK o GNSS integrato per i modelli con visione/LiDAR) solo in alcuni report, generalmente quando è attivo. Il campo verrà compilato alla successiva attività del robot. Il plugin preferisce un valore vuoto a coordinate degenerate (vicine al punto 0,0 del globo).

**I dati non vengono aggiornati in tempo reale**: il robot pubblica solo quando è attivo o quando il suo stato cambia. Il cron, inoltre, impone un aggiornamento periodico.

**Il mio robot non si aggiorna più e i suoi pulsanti non rispondono**: controllate l'icona nella barra del titolo del widget. Un sole indica che il dispositivo è in **modalità hibernazione**: il cron lo ignora e i suoi comandi sono bloccati. Cliccando sull'icona, tornerà alla modalità standard.

**Spino: la modalità di pulizia mostra "Nessuna"**: si tratta del comportamento normale in stato di riposo. Uno Spino spento non segnala alcuna modalità attiva nei suoi messaggi di stato. Utilizzate il comando **Stato** per verificare se il robot è in funzione.

**Spino: perché non c'è il pulsante "Pausa"?**: il protocollo del robot non lo prevede. Per interrompere un ciclo, utilizzare *Arresto e ritorno alla ricarica*.

# Piano d'azione e assistenza

Questo plugin si evolverà nel tempo in base alle vostre richieste e alle possibilità offerte dalle API di Mammotion.

> **Suggerimento**
>
> È possibile inviare una richiesta di miglioramento creando un ticket "enhancement" su [GitHub](https://github.com/Xav-74/mammotion/issues/new).
> Non esitate a partecipare alla discussione su questo plugin nella Community Jeedom!

In caso di malfunzionamento, è possibile creare direttamente un thread nella Community dalla pagina principale del plugin. Le informazioni utili relative a Jeedom e al plugin vengono aggiunte automaticamente. Non esitate a copiare anche i log di Mammotion (modalità debug) per una risoluzione più rapida!
