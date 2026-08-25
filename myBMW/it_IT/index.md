---
layout: default
title: Plugin My BMW - Documentazione
lang: it_IT
pluginId: myBMW
---

# Presentazione

Questo plugin ti permette di interagire con la tua **BMW** o **Mini** dotata dei servizi Connected Drive, proprio come l'app ufficiale “My BMW” o “Mini”.

> **Suggerimento**
>
> La **versione minima di Jeedom** necessaria per il corretto funzionamento del plugin è la **versione 4.2**
>
> Il plugin è già compatibile con la **versione 4.5** di Jeedom e con le **versioni Debian 11 e 12**

# Principio

Questo plugin interagisce con le **API ufficiali di BMW Connected Drive** tramite il cloud, pertanto **richiede una connessione a Internet**.

È inoltre necessario disporre di un abbonamento valido ai servizi BMW Connected Drive per il proprio veicolo e di un account utente **principale** valido per l'app "My BMW" o "Mini".

# Configurazione del tuo account utente BMW o Mini

Prima di poter utilizzare il plugin, è necessario configurare il proprio account utente BMW. Si prega di seguire attentamente i seguenti passaggi:

1. Accedi al portale **[BMW ConnectedDrive](https://www.bmw.fr/fr-fr/mybmw/vehicle-overview)** o **[Mini ConnectedDrive](https://www.mini.fr/fr-fr/mymini/vehicle-overview)**
2. Fare clic sull'icona **BMW CarData**

![CarData](../images/CarData_section.png)

3. Fare clic sul pulsante **"Crea un cliente CarData"**
4. Salva **l'ID cliente** in un luogo sicuro!
5. Attendere **30 secondi**
6. Fai clic su **"Richiedi l'accesso all'API CarData"**
7. Attendere **30 secondi** (se l'interruttore non torna su "off" e non viene visualizzato alcun messaggio di errore, è possibile continuare; in caso contrario, è necessario ripetere questo passaggio)
8. Fare clic su **"CarData Streaming"**
9. Attendere **30 secondi** (se l'interruttore non torna su "off" e non viene visualizzato alcun messaggio di errore, è possibile continuare; in caso contrario, è necessario ripetere questo passaggio)

![CarData](../images/CarData_clientID.png)

10. Vai alla sezione **CarData Stream**
11. Verificate che lo stato della connessione sia **"ready"**

![CarData](../images/CarData_stream.png)

12. Fare clic sul pulsante **"Modifica selezione dati"**
13. Selezionare **"Tutte le categorie"** (Stato del veicolo, Ricarica, Dati di viaggio, ecc.) quindi fare clic più volte sul pulsante **Carica** per visualizzare tutti gli attributi
14. Selezionare **manualmente** i 244 attributi singoli oppure premere F12 per accedere alla **console di sviluppo** e digitare: (non è possibile copiare e incollare)

    ```js
    document.querySelectorAll('label.chakra-checkbox:not([data-checked])').forEach(l => l.click());
    ```

15. Quindi **salvate** la vostra configurazione
16. Salva **il nome utente** in un posto sicuro!

> **Importante**
>
> È importante che tutti gli attributi siano selezionati per ricevere tutti i dati relativi al veicolo.

# Configurazione del plugin

Dopo aver scaricato il plugin, è sufficiente attivarlo e configurare l'ID cliente e il nome utente recuperati nella fase precedente. Lasciare vuoti gli altri campi, salvo diversa indicazione espressa dello sviluppatore.
Attendere quindi il completamento dell'installazione dei pacchetti dipendenti e l'avvio del demone.

> **Suggerimento**
>
> Per facilitare una richiesta di assistenza da remoto, si consiglia di impostare i log in **modalità debug**.

![Configurazione](../images/Config_myBMW.png)

# Aggiunta di un veicolo

La configurazione dei dispositivi MyBMW è accessibile dal menu Plugin > Oggetti connessi.

![Aggiunta di un veicolo](../images/Plugin_myBMW.png)

Fare clic sul comando Aggiungi per creare un nuovo veicolo. Una volta aggiunto, si otterrà:

| Campo | Descrizione |
|---|---|
| **Nome dell'apparecchiatura** | nome del veicolo |
| **Oggetto padre** | indica l'oggetto padre a cui appartiene l'apparecchio |
| **Categoria** | la categoria dell'apparecchiatura |
| **Attiva** | consente di attivare il dispositivo |
| **Visibile** | rende le tue apparecchiature visibili sulla dashboard |
| **Marca** | indicare la marca del proprio veicolo (BMW o Mini) |
| **VIN** | inserire il numero VIN (Vehicle Identification Number, numero di identificazione del veicolo). Questo numero è riportato nella casella E della carta di circolazione. È composto da 17 caratteri. |
| **Visualizzazione dello stato di porte e finestre** | È possibile scegliere tra due opzioni per la visualizzazione dello stato di porte e finestre sul pannello: la modalità testo o la modalità icona. |
| **Colore delle icone delle porte e delle finestre** | Se avete scelto la modalità icona, potete anche decidere il colore delle icone (verde o bianco e nero). |
| **A casa (presenza)** | Sono disponibili 3 opzioni per indicare le coordinate GPS della propria abitazione: utilizzando le coordinate inserite in Jeedom, utilizzando le coordinate attuali del veicolo oppure inserendo manualmente la latitudine e la longitudine. |
| **Distanza massima (in m)** | Indicare la distanza massima in metri tra la propria abitazione e il veicolo affinché quest'ultimo sia considerato presente presso la propria abitazione. |

A questo punto è sufficiente cliccare sul pulsante **Autenticazione** per recuperare le informazioni relative al proprio veicolo (se disponibili, verranno visualizzati il modello, l'anno, il tipo di motorizzazione e un'immagine del veicolo). Si aprirà una finestra pop-up **(attenzione al blocco pop-up del browser, disattivalo se necessario)** per effettuare l'autenticazione con le credenziali (e-mail) e la password del tuo account BMW. Hai 5 minuti di tempo per farlo e al termine dovresti ricevere un messaggio **Connessione riuscita**.

> **Suggerimento**
>
> Non dimenticate di **salvare** le vostre informazioni!
>
> Durante il salvataggio, verranno creati nuovi comandi sull'apparecchio.

![Apparecchiature](../images/Eqpt_myBMW.png)

# Dati grezzi

Per facilitare il debug in caso di problemi, è possibile recuperare i dati grezzi del proprio veicolo cliccando sul pulsante **Dati grezzi**. Attenzione: prima di copiarli, ad esempio sul forum, ricordatevi di nascondere le informazioni sensibili come il numero di telaio (VIN)!

# Comandi

Attualmente esistono diversi comandi, descritti di seguito.

> **Suggerimento**
>
> Se il comando restituisce "not available", significa che l'informazione corrispondente non è presente sul vostro veicolo.

## Informazioni

| Comando | Descrizione |
|---|---|
| **Marca** | |
| **Modello** | |
| **Anno** | |
| **Tipo** | elettrico, termico o ibrido |
| **Chilometraggio** | chilometraggio totale del veicolo |
| **Blocco** | riporta lo stato di blocco del veicolo |
| **Stato della porta del conducente anteriore** | |
| **Stato della portiera del conducente posteriore** | |
| **Stato della portiera del passeggero anteriore** | |
| **Stato della portiera del passeggero posteriore** | |
| **Stato di tutte le porte** | |
| **Stato finestrino lato guidatore** | |
| **Stato finestrino lato passeggero posteriore** | |
| **Stato finestrino passeggero anteriore** | |
| **Stato finestrino passeggero posteriore** | |
| **Stato di tutte le finestre** | |
| **Stato del caveau** | |
| **Stato del cofano motore** | |
| **Stato tetto apribile** | |
| **Pressione pneumatico anteriore sinistro** | |
| **Istruzioni per il gonfiaggio dello pneumatico anteriore sinistro** | |
| **Pressione dello pneumatico anteriore destro** | |
| **Istruzioni per il gonfiaggio dello pneumatico anteriore destro** | |
| **Pressione dello pneumatico posteriore sinistro** | |
| **Istruzioni per il gonfiaggio dello pneumatico posteriore sinistro** | |
| **Pressione dello pneumatico posteriore destro** | |
| **Istruzioni per il gonfiaggio dello pneumatico posteriore destro** | |
| **Stato di carica** | solo su veicoli elettrici o ibridi |
| **Stato della presa** | solo su veicoli elettrici o ibridi |
| **Ora di fine ricarica** | solo su veicoli elettrici o ibridi |
| **Carica residua** | solo su veicoli elettrici o ibridi |
| **Chilometri rimanenti (in modalità elettrica)** | motore elettrico e/o ibrido |
| **Carburante residuo** | solo su veicoli termici o ibridi |
| **Chilometri rimanenti (motore termico)** | motore termico |
| **Messaggi** | visualizza i messaggi visualizzati a bordo del veicolo (controllo e servizi) |
| **Cicli di ricarica** | riporta le statistiche relative alla ricarica delle batterie nel mese in corso (solo per veicoli elettrici o ibridi) |
| **Carica elettrica totale** | indica la carica elettrica totale utilizzata nel mese in corso (solo per veicoli elettrici o ibridi) |
| **Costo totale dell'energia elettrica** | indica il costo mensile delle spese elettriche |
| **Obiettivo di ricarica** | indica l'obiettivo di ricarica elettrica configurato per il veicolo (in %) |
| **Limite di corrente di ricarica** | indica il limite della corrente di ricarica utilizzata quando il veicolo è collegato |
| **Limitazione della corrente di carica** | fornisce informazioni sullo stato di attivazione o meno di un limite della corrente di carica sul veicolo |
| **Coordinate GPS** | riporta la posizione del veicolo nel formato "latitudine, longitudine" |
| **Ultimo aggiornamento** | indica la data e l'ora dell'ultima connessione tra l'auto e i server BMW |
| **Stato sblocco** | restituisce l'ultimo stato ricevuto in seguito a una richiesta di sblocco. Se l'azione è stata eseguita correttamente, lo stato passa da "PENDING" a "EXECUTED". In caso contrario, restituisce "ERROR" |
| **Stato: Bloccato** | |
| **Stato Caricamento** | |
| **Stato "Stop charger"** | |
| **Stato Ventilazione** | |
| **Stato "Stop Ventilazione"** | |
| **Stato "Luci abbaglianti"** | |
| **Stato Klaxonner** | |
| **Stato Ricerca** | |
| **Stato invio POI** | |
| **Presenza a domicilio** | indica se il veicolo si trova a domicilio (1 = presente, 0 = assente) in base alla distanza massima specificata |
| **Distanza da casa** | indica la distanza (in m o km) tra il veicolo e la propria abitazione |

## Azione

| Comando | Descrizione |
|---|---|
| **Aggiorna** | aggiorna tutte le informazioni relative al veicolo |
| **Blocca** | consente di bloccare l'auto a distanza |
| **Sblocco** | consente di sbloccare l'auto a distanza |
| **Ricarica** | consente di avviare la ricarica del veicolo |
| **Stop charger** | consente di interrompere la ricarica del veicolo |
| **Ventilazione (Avvio)** | consente di avviare il sistema di ventilazione alla temperatura impostata all'interno del veicolo |
| **Ventilazione (Stop)** | consente di arrestare il sistema di ventilazione alla temperatura impostata nell'abitacolo |
| **Lampeggio dei fari** | attiva il lampeggio dei fari |
| **Suonare il clacson** | attiva un segnale acustico |
| **Cerca** | localizza il veicolo in tempo reale e lo visualizza su una mappa di Google Maps |
| **Invio POI** | invio di un punto di interesse (POI) al centro messaggi del veicolo inserendo il nome, la latitudine e la longitudine del luogo |

> **Attenzione**
>
> Al momento, è operativa solo la funzione **Aggiorna**. Le altre azioni torneranno a funzionare non appena le API BMW lo consentiranno!

# Pannello di controllo

Il plugin include un widget personalizzato che consente di visualizzare tutte le informazioni essenziali relative al veicolo.

![Widget myBMW](../images/Widget_myBMW.png)

# Pannello

Se avete selezionato l'opzione **Mostra pannello desktop** nella pagina di configurazione del plugin, potrete visualizzare un pannello dedicato al vostro veicolo che raggruppa tutte le informazioni disponibili in questo plugin. È accessibile tramite il menu **Home \ My BMW**

![Pannello myBMW](../images/Panel_myBMW_1.png)

![Pannello myBMW](../images/Panel_myBMW_2.png)

> **Suggerimento**
>
> Affinché i grafici vengano visualizzati, non dimenticate di selezionare l'opzione **Cronologia** nei seguenti 3 comandi: Chilometraggio, Carica residua e Carburante residuo.

# Aggiornamento

## Automatica

Grazie al flusso MQTT, riceverete la maggior parte delle informazioni relative al vostro veicolo in tempo reale (chilometraggio, carburante, batteria, stato di chiusura del veicolo, delle porte e dei finestrini, posizione, ecc.)!

Viene inoltre creato un CRON personalizzabile (con cadenza ogni 2 ore, 5 minuti dopo l'ora) per recuperare le informazioni non trasmettibili in streaming (messaggi di controllo, di servizio, cronologia di carico). Attenzione a non aumentare eccessivamente questa frequenza, per non superare le quote di richieste consentite da BMW (50 al giorno)!

## Manuale

È possibile utilizzare in qualsiasi momento il comando **Aggiorna** per recuperare lo stato dei veicoli.

> **Attenzione**
>
> BMW consente solo 50 richieste al giorno, quindi non aggiornate manualmente troppo spesso (l'attuale CRON utilizza 24 richieste al giorno), altrimenti rischiate di essere bloccati fino al giorno successivo.

# Piano d'azione e assistenza

Questo plugin si evolverà nel tempo in base alle vostre richieste e alle possibilità offerte dalle API di BMW Connected Drive.

Le prossime versioni introdurranno le seguenti funzionalità:

- Aggiunta di nuove funzionalità in base alle possibilità offerte dalle API
- Traduzione del plugin in inglese
- ...

> **Suggerimento**
>
> È possibile inviare una richiesta di miglioramento creando un ticket "enhancement" su [GitHub](https://github.com/Xav-74/myBMW/issues/new).
>
> Non esitate a partecipare alla discussione su questo plugin nella Community Jeedom!

In caso di malfunzionamento, è possibile creare direttamente un thread nella Community dalla pagina principale del plugin. Le informazioni utili relative a Jeedom e al plugin vengono aggiunte automaticamente. Non esitate a copiare anche i log myBMW, myBMW_daemon, myBMW_update (modalità debug) per una risoluzione più rapida!

![Comunità](../images/community.png)
