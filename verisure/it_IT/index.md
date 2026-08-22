---
layout: default
title: Plugin Verisure - Documentazione
lang: it_IT
pluginId: verisure
---

# Presentazione

Questo plugin Jeedom ti permette di interagire con il tuo sistema di allarme Verisure Europe (Securitas Direct) proprio come l'app ufficiale "My Verisure".
È compatibile con 3 generazioni di dispositivi Verisure.

**NOTA: QUESTO PLUGIN NON È IN ALCUN MODO ASSOCIATO O COLLEGATO ALLE SOCIETÀ DEL GRUPPO SECURITAS DIRECT - VERISURE.**

L'uso di questo plugin è destinato esclusivamente a fini personali e privati.
Di conseguenza, lo sviluppatore non approva né tollera alcun utilizzo improprio e non si assume alcuna responsabilità legale per la funzionalità o la sicurezza dei vostri allarmi e dispositivi.

> **Suggerimento**
>
> La **versione minima di Jeedom** necessaria per il corretto funzionamento del plugin è la **versione 4.4**
> Il plugin è già compatibile con la **versione 4.6** di Jeedom e con le **versioni Debian 12**

# Principio

Questo plugin interagisce con le API Verisure tramite il cloud, pertanto **richiede una connessione a Internet**.
È inoltre necessario disporre di un abbonamento ai servizi Verisure. Infatti, questo plugin comunica con la centrale del vostro allarme solo tramite le infrastrutture cloud di Verisure. Non interagisce direttamente con la centrale né con i dispositivi collegati. Se il vostro abbonamento è stato disdetto, questo plugin non funzionerà.

# Configurazione del plugin

Dopo aver scaricato il plugin, è sufficiente attivarlo. Se disponete di un allarme di tipo 1 o 3, avete la possibilità di attivare (e disattivare) un cron personalizzato per aggiornare le informazioni relative al vostro allarme in base alla cronologia delle azioni. Ricordatevi di attivare l'opzione nelle impostazioni del vostro dispositivo.

> **Suggerimento**
>
> Per facilitare una richiesta di assistenza da remoto, si consiglia di impostare i log in **modalità debug**.

![Configurazione](../images/Config_verisure.png)

# Aggiunta di un allarme

È possibile accedere alla configurazione dei dispositivi di allarme dal menu Plugin > Sicurezza.

![Aggiunta allarme](../images/Plugin_verisure.png)

Fare clic sul comando Aggiungi per creare un nuovo allarme. Una volta aggiunto, si otterrà:

- **Nome dell'apparecchio**: nome del vostro allarme
- **Oggetto padre**: indica l'oggetto padre a cui appartiene l'apparecchio
- **Categoria**: la categoria dell'apparecchiatura (sicurezza in generale per un allarme)
- **Attiva**: consente di attivare il dispositivo
- **Visibile**: rende il tuo dispositivo visibile sulla dashboard
- **Tipo di allarme**: scelta del tipo di allarme (tipo 1 = Europa meridionale (Francia, Spagna, ...) / tipo 2 = Europa settentrionale (Belgio, Regno Unito, ...) / tipo 3 = nuova generazione (dal 2022))
- **Numero di installazione** (allarme di tipo 1 e 3): inserisci il tuo numero di installazione Verisure. **Attenzione! Questo numero deve corrispondere esattamente a quello visualizzato sull'app My Verisure. Se il tuo numero di installazione inizia con uno 0 ma quest'ultimo non è presente nell'app, eliminalo!**
- **ID** (allarme di tipo 1, 2 e 3): inserisci l'ID Verisure che utilizzi per accedere al sito [https://customers.securitasdirect.fr](https://customers.securitasdirect.fr) o [https://mypages.verisure.com/](https://mypages.verisure.com)
- **Password** (allarme tipo 1, 2 e 3): inserisci la tua password
- **Codice allarme** (allarme di tipo 2): inserisci il codice PIN del tuo allarme (4 o 6 cifre)
- **Paese** (allarmi di tipo 1 e 3): selezionare il paese in cui è installato l'allarme (paesi attualmente supportati: Francia, Spagna, Gran Bretagna, Italia, Portogallo). Per gli allarmi di tipo 2, la selezione del paese avviene automaticamente (paesi attualmente supportati: Belgio, Paesi Bassi, Germania, Gran Bretagna, Danimarca, Finlandia, Norvegia, Svezia)
- **Opzioni** (allarme di tipo 1 e 3): a seconda del tipo di allarme, è possibile selezionare le seguenti opzioni:
  - **Aggiornamento tramite cronologia** (allarmi di tipo 1 e 3): consente di aggiornare lo stato degli allarmi in base alla cronologia delle azioni. Ricordarsi di impostare e attivare il cron nella configurazione del plugin
    - **Allarme di presenza esterno** (allarme di tipo 3): da spuntare se si dispone di rilevatori esterni e se la modalità esterna è attivata sull'allarme
    - **Attivazione forzata** (allarme di tipo 3): consente di attivare forzatamente l'allarme anche se una porta o una finestra è rimasta aperta. A proprio rischio e pericolo!

A questo punto basta cliccare sul pulsante **Autenticazione** per recuperare le informazioni relative al proprio sistema di allarme. Se tutto va a buon fine, verrà visualizzata una tabella che riporta tutti i dispositivi installati nella propria abitazione (ID, nome e tipo).

**Attenzione**: si consiglia vivamente di creare, nel proprio spazio Verisure, un utente dedicato a Jeedom con i diritti di "amministratore". Il plugin gestisce l'autenticazione a più fattori (MFA) per gli allarmi di tipo 1. Lo stesso vale per gli allarmi di tipo 2, ma al momento si consiglia di disattivare questa opzione poiché l'aggiornamento del token è molto oneroso. In caso di problemi di connessione, il pulsante **Elimina token** consente di eliminare i cookie salvati e di ricominciare con un'autenticazione iniziale.

> **Suggerimento**
>
> Non dimenticate di **salvare** le vostre informazioni!
> Durante il salvataggio, verranno creati nuovi comandi sull'apparecchio.

![Apparecchiature](../images/Eqpt_verisure.png)

# Registro delle attività

È possibile consultare il registro delle attività del proprio sistema di allarme cliccando sul pulsante **Registro delle attività**. Questo rapporto riporta gli ultimi eventi verificatisi sulla propria centrale (allarmi antintrusione, SOS, attivazione/disattivazione, interruzione di corrente).

![Diario](../images/journal_verisure.png)

# Notifiche Verisure

Le API Verisure non consentono l'invio diretto di informazioni e notifiche automatiche, come l'attivazione/disattivazione tramite badge o telecomando o l'attivazione dell'allarme.
Questa scheda descrive in dettaglio come configurare Jeedom (scenari) per ovviare a questa mancanza per:

- le **notifiche via e-mail** per l'attivazione/disattivazione dell'allarme tramite il plugin [Mail Listener](https://www.jeedom.com/market/index.php?v=d&p=market&author=Lunarok&&name=maillistener) di Lunarok!
- le **notifiche SMS** per l'attivazione/disattivazione dell'allarme tramite il plugin [SMS](https://www.jeedom.com/market/index.php?v=d&p=market_display&id=16) di Jeedom SAS!

# Comandi

Attualmente esistono diversi comandi, descritti di seguito.

## Informazioni

- **Stato di attivazione**: consente di verificare lo stato di attivazione dell'allarme
  - **0**: disattivata
  - **1**: esercito
- **Stato allarme**: consente di conoscere lo stato dell'allarme
  - **0**: stato normale
  - **1**: allarme attivato
- **Modalità Allarme**: consente di verificare la modalità di attivazione dell'allarme
  - **Modalità totale**: l'allarme è attivato in modalità totale (allarmi di tipo 1, 2 e 3)
  - **Modalità notturna**: l'allarme è attivato in modalità notturna (allarme di tipo 1)
  - **Modalità giorno**: l'allarme è attivato in modalità giorno (allarme di tipo 1)
  - **Modalità esterno**: l'allarme è attivato in modalità esterno (allarme di tipo 1)
  - **Modalità parziale**: l'allarme è attivato in modalità parziale (allarme di tipo 2 e 3)
- **Qualità della rete**: consente di valutare la qualità della rete 3G/4G degli allarmi di tipo 1 e 3 (in base al risultato delle ultime 25 richieste)

**Attenzione**: in questa versione, l'evento relativo all'attivazione dell'allarme non è ancora stato preso in considerazione!

## Azione

- **Modalità Totale**: attiva l'allarme in modalità totale (allarmi di tipo 1, 2 e 3)
- **Modalità notturna**: attiva l'allarme in modalità notturna (allarme di tipo 1)
- **Modalità Giorno**: attiva l'allarme in modalità giorno (allarme di tipo 1)
- **Modalità Esterno**: attiva l'allarme in modalità esterno (allarme di tipo 1)
- **Modalità parziale**: attiva l'allarme in modalità parziale (allarme di tipo 2 e 3)
- **Disattivazione**: disattiva l'allarme, indipendentemente dalla modalità (allarme di tipo 1, 2 e 3)
- **Aggiorna**: aggiorna lo stato dell'allarme (allarmi di tipo 1, 2 e 3)
- **Richiesta immagini**: attiva lo scatto di una foto tramite un sensore di movimento compatibile e la visualizza sullo schermo (allarmi di tipo 1, 2 e 3)

> **Suggerimento**
>
> Quando viene richiesta un'immagine, la foto viene salvata e archiviata nella cartella **/verisure/data/**. Ricordatevi di svuotare la cartella di tanto in tanto!

![Comandi](../images/Command_verisure.png)

## Compatibilità con Homebridge

I comandi sono stati creati in modo da essere compatibili in modo nativo con il plugin [Homebridge](https://www.jeedom.com/market/index.php?v=d&p=market&author=Nebz&&name=Homebridge) di Nebz! (Grazie a lui per il suo aiuto)

Non è quindi necessario effettuare alcuna configurazione specifica nel plugin Homebridge.
In HomeKit, la funzione allarme è gestita secondo 4 modalità: “Disattivata”, “Notte”, “Da remoto” e “A casa”.

![HomeKit](../images/homekit.png)

La corrispondenza tra le modalità è la seguente:

- **Casa**  --> Modalità Giorno / Modalità Parziale
- **Da remoto** --> Modalità Totale
- **Notte**   --> Modalità notturna
- **Disattivata** --> Disattivazione

Le altre modalità (Esterno, ecc.) non sono supportate da HomeKit.

## Dispositivi di allarme di tipo 2

Per gli allarmi di tipo 2 (**e solo di tipo 2!**), il plugin creerà i comandi associati ai dispositivi dell'allarme:

- **Presa intelligente** --> stato / accesa / spenta
- **Sensori compatibili** --> temperatura / umidità
- **Sensore di apertura**  --> stato (aperto / chiuso)

Per impostazione predefinita, i comandi non vengono visualizzati sul widget. L'obiettivo è quindi quello di creare un dispositivo virtuale per ogni sensore. In questo modo potrete recuperare le informazioni relative all'apertura, alla chiusura, alla temperatura e all'umidità dei vari sensori, oppure controllare a distanza le prese connesse Versiure da Jeedom.

> **Suggerimento**
>
>Attenzione: gli stati non vengono aggiornati in tempo reale (al momento impossibile a causa di Versiure). Per aggiornarli, sarà necessario rinfrescare lo stato dell'allarme tramite uno scenario oppure attendere il cron30. In un secondo momento sarà possibile personalizzare il cron (5, 10, 15, 30...). **Attenzione però a non inviare troppe richieste ai server Verisure, per evitare di finire nella blacklist.**

## Dispositivi di allarme di tipo 3

Per gli allarmi di tipo 3 (**e solo di tipo 3!**), il plugin creerà i comandi associati ai dispositivi dell'allarme:

- **Serratura connessa** --> stato / apertura / chiusura

# Pannello di controllo

Il plugin include una dashboard che consente di:

- Verifica dello stato dell'allarme (allarmi di tipo 1, 2 e 3)
- Verificare lo stato dell'allarme (allarme di tipo 1, 2 e 3)
- Conoscere la modalità dell'allarme (allarme di tipo 1, 2 e 3)
- Verifica dello stato della serratura connessa (allarme di tipo 3)
- Attivare la modalità "totale" dell'allarme (allarmi di tipo 1, 2 e 3)
- Attivare la modalità notturna dell'allarme (allarme di tipo 1)
- Attivare la modalità giorno dell'allarme (allarme di tipo 1)
- Attivare la modalità esterna dell'allarme (allarme di tipo 1)
- Attivare la modalità parziale dell'allarme (allarme di tipo 2 e 3)
- Disattivare l'allarme (allarmi di tipo 1, 2 e 3)
- Aggiornamento dello stato dell'allarme (allarmi di tipo 1, 2 e 3)
- Aprire/chiudere la serratura connessa (allarme di tipo 3)
- Richiedere lo scatto di una foto da un sensore di movimento compatibile (allarme di tipo 1, 2 e 3)
- Visualizzare le informazioni relative ad alcuni dispositivi, quali la temperatura, l'umidità o lo stato di apertura (**!!! SOLO allarme di tipo 2 !!!**)
- Visualizza il livello di qualità della rete 3G/4G dell'allarme (allarmi di tipo 1 e 3)
  - icona con 5 barre: nessuna richiesta con errore nelle ultime 25
    - icona con 4 barre: da 1 a 2 richieste errate sulle ultime 25
    - icona con 3 barre: da 3 a 7 richieste con errore sulle ultime 25
    - icona con 2 barre: da 8 a 17 richieste con errore sulle ultime 25
    - icona con 1 barra: da 18 a 24 richieste con errore sulle ultime 25
    - icona 0 barre: 25 richieste con errore sulle ultime 25

**Attenzione**: a volte i comandi possono richiedere diversi secondi per essere eseguiti (da 15 a 25 secondi, o anche più di un minuto per le richieste di foto). Ciò dipende dalla qualità della connessione 3G o 4G della centrale del vostro allarme. Quindi abbiate pazienza!

![Pannello di controllo tipo 1](../images/Dashboard_verisure.png)
![Pannello di controllo tipo 2](../images/Dashboard_verisure_2.png)
![Pannello di controllo tipo 3](../images/Dashboard_verisure_3.png)

# Aggiornamento

## Automatica

Viene creato automaticamente un cron con intervallo di 30 minuti, come indicato nella configurazione del plugin.
**Attenzione**: questo valore di 30 minuti potrebbe subire variazioni in base al feedback e alle richieste degli utenti, nonché al numero di richieste consentite ogni ora da Verisure sui propri server!

## Manuale

È possibile utilizzare in qualsiasi momento il comando **Aggiorna** per aggiornare lo stato dell'allarme.

# Piano d'azione e assistenza

Questo plugin si evolverà nel tempo in base alle vostre richieste e alle possibilità offerte dalle API di Versiure.

> **Suggerimento**
>
>È possibile inviare la richiesta creando una richiesta di "miglioramento" [GitHub](https://github.com/Xav-74/verisure/issues/new).
>Non esitate a partecipare alla discussione su questo plugin nella Community Jeedom!

In caso di malfunzionamento, è possibile creare direttamente un thread nella Community dalla pagina principale del plugin. Le informazioni utili relative a Jeedom e al plugin vengono aggiunte automaticamente. Non esitate a copiare anche i log di Verisure (modalità debug) per una risoluzione più rapida!

![Comunità](../images/community.png)
