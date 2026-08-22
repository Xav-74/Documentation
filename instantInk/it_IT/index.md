---
layout: default
title: Plugin HP instantInk - Documentazione
lang: it_IT
pluginId: instantInk
---

# Presentazione

Questo plugin ti permette di recuperare le informazioni relative al tuo abbonamento InstantInk e alle tue stampanti HP.

> **Suggerimento**
>
> La **versione minima di Jeedom** necessaria per il corretto funzionamento del plugin è la **versione 4.4**
> Il plugin è compatibile con le **versioni Debian 11 e 12**


# Installazione

Il plugin si installa come qualsiasi altro plugin su Jeedom, tramite il Market.


# Configurazione

1. Una volta installato e attivato, nella pagina di configurazione è necessario inserire un token **sessionId**
2. Apri [portal.hpsmart.com](https://portal.hpsmart.com) nel browser ed effettua l'accesso
3. Premere **F12** per aprire DevTools
4. Vai alla scheda **Applicazioni** (Chrome) o **Archiviazione** (Firefox)
5. Nel pannello laterale: **Cookie → https://portal.hpsmart.com**
6. Individua il cookie **shell-session-id** e copia il suo valore completo
7. Incollatela nell'apposito campo e cliccate su **Accedi**
<br/>Questo token ha una validità di 90 giorni. Jeedom ti avviserà quando sarà necessario rinnovarlo manualmente
8. In caso di problemi di connessione, è possibile eliminare i token precedentemente recuperati tramite il pulsante **Elimina token**
9. Inserisci i parametri opzionali del plugin:
 - Cron personalizzato (valore consigliato: almeno 1 ora)
10. Salva

<br/>![Config instantInk](../images/config_instantInk.png)<br/>

> **Suggerimento**
>
> Per facilitare una richiesta di assistenza da remoto, si consiglia di impostare i log in **modalità debug**.


# Utilizzo
1. Avvia il plugin che si trova nella categoria **Dispositivi connessi** del menu **Plugin**
2. Fare clic sul pulsante **Sincronizza**
3. La tua stampante compare nell'elenco
4. Fare clic sull'icona della stampante e inserire il suo indirizzo IP nell'apposito campo
5. Salva

<br/>![Attrezzatura InstantInk](../images/eqt_instantInk.png)<br/>


# Comandi

Attualmente esistono diversi comandi, descritti di seguito.

## Informazioni

- **Numero di pagine del progetto**: il numero di pagine previste nel vostro pacchetto
- **Numero massimo di pagine riportabili**: il numero massimo di pagine riportabili da un periodo all'altro
- **Prezzo del piano**: il canone mensile del tuo abbonamento
- **Numero massimo di pagine aggiuntive**: il numero massimo di pagine consentite in modalità fuori dal pacchetto
- **Periodo**: il periodo di validità dell'abbonamento
- **Numero di pagine stampate nel periodo**: il numero di pagine stampate nel periodo
- **Numero di pagine stampate nel periodo di riferimento**: il numero di pagine stampate nel periodo di riferimento
- **Numero massimo di pagine riportate nel periodo**: il numero di pagine riportate nel periodo
- **Numero di pagine aggiuntive stampate nel periodo**: il numero di pagine stampate al di fuori del pacchetto nel periodo
- **Prezzo del periodo**: il prezzo attuale relativo al periodo
- **Stato cartuccia nera**: il livello attuale di inchiostro della cartuccia nera (%)
- **Stato cartuccia ciano**: il livello attuale di inchiostro nella cartuccia ciano (%)
- **Stato cartuccia magenta**: il livello attuale di inchiostro della cartuccia magenta (%)
- **Stato della cartuccia gialla**: il livello attuale di inchiostro della cartuccia gialla (%)
- **Ultimo aggiornamento**: data e ora dell'ultimo aggiornamento delle informazioni
- **Cronologia**: tutte le informazioni relative al piano tariffario (pagine stampate e prezzi) degli ultimi 12 mesi

> **Suggerimento**
>
>Se non si desidera visualizzare la cronologia sul widget, è sufficiente deselezionare la casella **Visualizza** di questo comando.

## Azione

- **Aggiorna**: aggiorna tutte le informazioni relative alla stampante e al piano tariffario
- **Visualizza cronologia**: consente di visualizzare la cronologia del piano tariffario degli ultimi 12 mesi


# Pannello di controllo

Il plugin include un widget personalizzato che consente di visualizzare tutte le informazioni relative al piano tariffario e alla stampante.

![widget](../images/widget_instantInk.png)

È possibile aggiornare le informazioni (icona <i class="fas fa-sync" style="width:15px; height:15px"></i>) o la cronologia (icona <i class="far fa-chart-bar" style="width:15px; height:15px"></i>) direttamente dal widget.


# Aggiornamento

## Automatica

Come indicato nella pagina di configurazione del plugin:
- Viene creato automaticamente un **CRON giornaliero** ogni giorno (alle 00:00) per l'aggiornamento della cronologia del pacchetto
- viene creato automaticamente un **CRON personalizzato** per il recupero delle informazioni relative al piano tariffario e alla stampante (si consiglia un intervallo minimo di 1 ora)

## Manuale

È possibile utilizzare in qualsiasi momento il comando **Aggiorna** o il comando **Ottieni cronologia** per aggiornare le informazioni relative al piano tariffario e alla stampante.


# Piano d'azione e assistenza

Questo plugin si evolverà nel tempo in base alle vostre richieste e alle possibilità offerte dalle API di InstantInk.

Le prossime versioni introdurranno le seguenti funzionalità:
- ...

> **Suggerimento**
>
>È possibile inviare una richiesta di miglioramento creando un ticket "enhancement" su [GitHub](https://github.com/Xav-74/instantInk/issues/new).
>Non esitate a partecipare alla discussione su questo plugin nella Community Jeedom!

In caso di malfunzionamento, è possibile creare direttamente un thread sulla Community dalla pagina principale del plugin. Le informazioni utili relative a Jeedom e al plugin vengono aggiunte automaticamente. Non esitate inoltre a copiare i log di instantInk (modalità debug) per una risoluzione più rapida!

![Comunità](../images/community.png)
