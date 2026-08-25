---
layout: default
title: Plugin Tracciamento pacchi - Documentazione
lang: it_IT
pluginId: parcelTracking
---

# Presentazione

Questo plugin ti permette di tracciare i tuoi pacchi provenienti dai principali corrieri francesi e internazionali (La Poste, Mondial Relay, Relais Colis, Colis Privé, Aliexpress, Shein, Amazon, eBay, FedEx, UPS, ...) tramite l'API di [**17Track**](https://www.17track.net/en).

Il piano gratuito di 17Track consente di tracciare 100 pacchi al mese (il conteggio si azzera il primo giorno del mese). Se lo desideri, puoi passare a un piano a pagamento di livello superiore.

> **Suggerimento**
>
> La **versione minima di Jeedom** necessaria per il corretto funzionamento del plugin è la **versione 4.4**
> Il plugin è già compatibile con la **versione 4.6** di Jeedom e con le **versioni Debian 12**

# Installazione

Il plugin si installa come qualsiasi altro plugin su Jeedom, tramite il Market.

# Configurazione

1. Una volta installato e attivato, nella pagina di configurazione è necessario inserire la chiave API 17Track
2. Visita il sito [www.17track.net](https://user.17track.net/en)
3. Clicca su **Nessun account** e crea un account **Sviluppatore**, oppure accedi con le tue credenziali esistenti
4. Una volta nella dashboard, vai al menu **Impostazioni** e copia la chiave API
5. Inserisci la chiave API nelle impostazioni del plugin

![Dashboard 17Track](../images/dashboard_17Track.png)

6. Compilate anche la sezione Webhook come segue: ("jeedom-host" è l'indirizzo esterno del vostro router)

![Webhook 17Track](../images/webhook_17Track.png)

7. È possibile verificare il numero di monitoraggi rimanenti nella propria quota cliccando sul pulsante **Verifica**
8. Selezionare la lingua da utilizzare per i riscontri API. Attenzione: se si sceglie una lingua diversa da quella predefinita, verranno conteggiati 2 tracciamenti per ogni pacco sulla propria quota
9. È possibile aggiornare l'elenco dei corrieri e l'elenco dei parametri aggiuntivi. Per impostazione predefinita, questi verranno aggiornati ogni giorno durante l'esecuzione del cron giornaliero.
10. Inserisci i parametri opzionali del plugin:
    - Oggetto padre predefinito ==> Aggiunta automatica dell'oggetto specificato durante la creazione di nuovi monitoraggi
    - Periodo di conservazione dell'apparecchiatura dopo la consegna (in giorni) ==> Eliminazione automatica dell'apparecchiatura X giorni dopo la consegna
11. Inserisci le impostazioni delle notifiche se desideri essere avvisato ogni volta che lo stato cambia
    - Le prime due righe riguardano l'invio di notifiche tramite un comando di azione di tipo messaggio

Opzione: è possibile personalizzare il messaggio utilizzando i seguenti tag: `#name#`, `#trackingId#`, `#carrier#`, `#status#`, `#lastState#`, `#date#` e `#time#`

È possibile verificare il corretto funzionamento inviando una notifica di prova
    - Le ultime due righe riguardano l'invio delle notifiche tramite uno scenario

È possibile utilizzare i seguenti tag: `#name#`, `#object#`, `#trackingId#`, `#carrier#`, `#status#`, `#lastState#`, `#date#` e `#time#`

Funzionano così: `nomdusuivi=#name#`, dove nomdusuivi è il nome del tag e `#name#` il valore del tag
12. Inserisci le impostazioni del widget. Sono disponibili 3 opzioni:
    - Nessun widget (riceverai solo le notifiche)
    - Un widget per ogni pacco
    - Un unico widget per tutti i pacchi
13. Salva

![Configurazione del tracciamento dei pacchi](../images/config_parcelTracking.png)

> **Suggerimento**
>
> Per facilitare una richiesta di assistenza da remoto, si consiglia di impostare i log in **modalità debug**.

# Utilizzo

1. Avvia il plugin che si trova nella categoria **Organizzazione** del menu **Plugin**
2. Aggiungere un pacco, come qualsiasi altro dispositivo in Jeedom
3. Inserisci il nome del tuo pacco, quindi inserisci il numero di tracciamento, il corriere (se lo conosci) e l'parametro aggiuntivo necessario per il tracciamento, se richiesto. L'elenco dei corrieri proviene direttamente da 17Track e verrà aggiornato regolarmente. Se per il corriere selezionato è necessario un parametro aggiuntivo, apparirà una nota per segnalartelo e indicarti il formato richiesto.
4. Salvare e avviare una **registrazione** affinché il pacco venga preso in carico dalle API 17Track e assicurarsi che l'operazione sia andata a buon fine (notifica verde)

> **Suggerimento**
>
> Se, al termine della prima registrazione **riuscita**, è necessario modificare il corriere e/o il parametro aggiuntivo, è possibile farlo utilizzando i pulsanti di aggiornamento. Attenzione: a volte capita che, dopo l'aggiornamento di uno dei due parametri, le informazioni di tracciamento non vengano aggiornate immediatamente. Attendere da 1 a 2 ore. Trascorso questo tempo, è preferibile eliminare il pacco e ricrearlo **con tutti i parametri aggiornati sin dalla prima registrazione**

![Configurazione del tracciamento dei pacchi](../images/eqt_parcelTracking.png)

# Comandi

Attualmente esistono diversi comandi, descritti di seguito.

> **Suggerimento**
>
> Se il comando restituisce "non disponibile", significa che l'informazione corrispondente non è presente nel tracciamento del pacco.

## Informazioni

| Comando | Descrizione |
|---|---|
| **Stato del pacco** | 5 stati possibili (consegnato, in transito, da ritirare, arrivato, archiviato) |
| **Vettore** | nome del vettore principale |
| **Origine** | paese di origine del pacco |
| **Destinazione** | paese di destinazione del pacco |
| **Stati** | elenco di tutte le fasi della consegna |
| **Ultimo evento** | data e ora dell'ultimo evento inviato dal corriere. Utilizzato per l'invio delle notifiche |
| **Ultimo aggiornamento** | ultimo aggiornamento inviato dal corriere. Utilizzato per l'invio delle notifiche |
| **Data di consegna** | disponibile solo una volta che il pacco è stato consegnato |

## Azione

| Comando | Descrizione |
|---|---|
| **Aggiorna** | aggiorna tutte le informazioni relative al pacco |

# Pannello di controllo

Il plugin include 2 widget personalizzati che consentono di visualizzare tutte le informazioni relative ai pacchi. È possibile scegliere tra:

- un widget per ogni pacco

![widget](../images/widget.png)

- un unico widget per tutti i pacchi

![widget globale](../images/widget_global.png)

- i widget sopra riportati in parallelo

In ogni caso, è possibile eliminare i pacchi (icona <img src="../images/trash-solid.svg" class="inline-img" width="15" height="15">) o aggiungerne uno nuovo (icona <img src="../images/plus-solid.svg" class="inline-img" width="15" height="15">) direttamente dai widget.

> **Attenzione**
>
> Il widget unico è visibile nella pagina delle apparecchiature del plugin. Non deve essere rimosso in nessun caso. Se dovesse essere rimosso per errore, è sufficiente forzare una reinstallazione del plugin (senza perdita di dati) e il widget verrà ricreato.

# Aggiornamento

## Automatica

Come indicato nella pagina di configurazione del plugin:

- Viene creato automaticamente un cron job su base giornaliera (alle 00:00) per l'eliminazione automatica dei pacchi

Per quanto riguarda l'aggiornamento delle spedizioni, il webhook recupera in tempo reale le informazioni trasmesse da 17Track.

## Manuale

È possibile utilizzare in qualsiasi momento il comando **Aggiorna** per aggiornare le informazioni relative ai pacchi.

# Piano d'azione e assistenza

Questo plugin si evolverà nel tempo in base alle vostre richieste e alle possibilità offerte dalle API di 17Track.

> **Suggerimento**
>
> È possibile inviare una richiesta di miglioramento creando un ticket "enhancement" su [GitHub](https://github.com/Xav-74/parcelTracking/issues/new).
> Non esitate a partecipare alla discussione su questo plugin nella Community Jeedom!

In caso di malfunzionamento, è possibile creare direttamente un thread nella Community dalla pagina principale del plugin. Le informazioni utili relative a Jeedom e al plugin vengono aggiunte automaticamente. Non esitate a copiare anche i log di parcelTracking (modalità debug) per una risoluzione più rapida!

![Comunità](../images/community.png)
