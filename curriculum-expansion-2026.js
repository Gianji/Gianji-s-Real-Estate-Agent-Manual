/* Estensione didattica originale del 06/11/2026. Aggiunge 65 lezioni
 * in 18 moduli esistenti senza alterare i quiz camerali o gli ID preesistenti.
 * Le fonti segnalate consentono di controllare la disciplina vigente. */
(function(){
 const ADDITIONS={
 "dir-garanzie": [
  [
   "Fideiussione: struttura, funzione e accessorietà",
   "La fideiussione è una garanzia personale di un’obbligazione altrui, non un diritto reale su un immobile.",
   "L’art. 1936 c.c. disciplina il soggetto che si obbliga personalmente verso il creditore a garantire il debito di un altro. La garanzia può essere prestata anche senza che il debitore principale ne sia a conoscenza. È normalmente accessoria: segue l’obbligazione garantita e non può eccedere quanto dovuto né essere assunta a condizioni più onerose (art. 1941), salva la riduzione nei limiti previsti. Diversamente dall’ipoteca, il creditore non acquisisce per effetto della sola fideiussione un diritto di prelazione su uno specifico immobile: il garante risponde con il proprio patrimonio secondo la disciplina applicabile. Il debitore garantito, il fideiussore e il creditore sono figure da distinguere.",
   "Banca concede 180.000 euro a Tizio e Caio garantisce il rimborso: Caio assume un impegno personale; se è iscritta anche ipoteca, quella è una garanzia distinta.",
   "Non confondere fideiussione, mutuo cointestato e ipoteca: possono coesistere ma hanno effetti diversi.",
   "Fideiussione = garanzia personale accessoria ex art. 1936 c.c."
  ],
  [
   "Volontà espressa, forma e oggetto garantito",
   "La dichiarazione del fideiussore deve esprimere inequivocabilmente l’impegno a garantire.",
   "L’art. 1937 c.c. richiede volontà espressa: non basta dedurre la garanzia dalla semplice parentela, dalla presenza a un incontro o da un generico interesse economico. Occorre individuare quale obbligazione viene garantita, chi siano creditore e debitore, il massimale se richiesto e le condizioni delle eventuali clausole. La fideiussione è un contratto distinto dall’obbligazione principale, pur essendone legata nella struttura accessoria. La legge può richiedere forme o documentazioni particolari in determinati settori e prodotti. Per l’esame distinguere il requisito dell’espressa volontà dalla necessità di una forma solenne che non può essere affermata indistintamente in ogni fideiussione.",
   "Il padre dell’acquirente accompagna il figlio in banca, ma non sottoscrive alcun impegno: la sola presenza non costituisce una fideiussione.",
   "Non dire che ogni fideiussione richiede sempre un atto pubblico notarile; separa prova, dichiarazione espressa ed eventuali regole speciali.",
   "Art. 1937: volontà fideiussoria espressa, non presunta."
  ],
  [
   "Fideiussione omnibus e obbligazioni future",
   "È possibile garantire debiti futuri o condizionati, ma il contenuto dell’impegno non è illimitato per definizione.",
   "L’art. 1938 c.c. ammette la fideiussione per obbligazioni future o condizionali; per quelle future va indicato l’importo massimo garantito. Nel rapporto bancario una clausola omnibus può riferirsi a più esposizioni derivanti da rapporti individuati, ma occorre verificare massimale, durata, maturazione dei debiti, modifiche del rapporto principale, clausole contrattuali e disciplina di trasparenza. Una garanzia rilasciata per un mutuo specifico non equivale automaticamente alla copertura di qualsiasi obbligazione del debitore verso la banca. La valutazione della validità di clausole standardizzate richiede attenzione anche alla disciplina concorrenziale e alle decisioni applicabili.",
   "Un garante sottoscrive una fideiussione bancaria per debiti futuri sino a 100.000 euro: va verificato il massimale e il perimetro dei rapporti garantiti.",
   "Non confondere plafond di credito al debitore e importo massimo del rischio assunto dal fideiussore.",
   "Art. 1938: obbligazioni future ammesse, con massimale."
  ],
  [
   "Solidarietà e beneficio della preventiva escussione",
   "Normalmente il creditore può chiedere il pagamento al fideiussore senza dover prima agire contro il debitore.",
   "L’art. 1944 c.c. prevede in via generale obbligazione solidale del fideiussore con il debitore principale. Le parti possono però pattuire il beneficio di escussione: il fideiussore convenuto deve allora indicare i beni del debitore principale sui quali procedere secondo la regola legale. Non si deve confondere questo beneficio con il beneficio della divisione nella pluralità di fideiussori. Il termine ‘garante’ non consente quindi di sapere da solo se il creditore debba agire prima sul debitore: serve leggere la clausola e verificare la disciplina applicabile. La solidarietà è un effetto sulla possibilità di richiesta del pagamento, non un trasferimento automatico dell’immobile del garante.",
   "Due obbligati, debitore e fideiussore: senza beneficio di escussione pattuito, il creditore può rivolgersi direttamente al fideiussore.",
   "Errore frequente: ritenere sempre necessaria una preventiva sentenza o esecuzione infruttuosa contro il debitore.",
   "Art. 1944: solidarietà ordinaria; escussione preventiva solo se pattuita."
  ],
  [
   "Eccezioni opponibili dal fideiussore",
   "Il fideiussore può far valere molte difese che spettano al debitore principale.",
   "Ai sensi dell’art. 1945 c.c. il fideiussore può opporre al creditore tutte le eccezioni che spettano al debitore principale, salva quella derivante dall’incapacità. Sono rilevanti, secondo il caso, pagamento già eseguito, estinzione o invalida pretesa del credito principale. Il garante dispone inoltre delle proprie eccezioni inerenti al contratto di garanzia. L’accessorietà va distinta da una garanzia autonoma a prima richiesta, la cui struttura e opponibilità delle eccezioni possono essere diverse. Davanti a un quesito d’esame, leggere attentamente se il problema riguarda l’obbligazione principale, il rapporto fideiussorio o una clausola a prima richiesta.",
   "La banca chiede 50.000 euro al garante nonostante il mutuo sia stato interamente estinto: il pagamento è fatto potenzialmente opponibile.",
   "Non sostenere che il fideiussore non possa mai contestare l’esistenza o la misura del debito principale.",
   "Art. 1945: opponibilità delle eccezioni del debitore, con eccezione legale."
  ],
  [
   "Surrogazione, regresso e rapporti interni",
   "Il fideiussore che paga non deve necessariamente sopportare in via definitiva il debito altrui.",
   "Il pagamento del garante può determinare surrogazione nei diritti del creditore verso il debitore principale (art. 1949 c.c.) e il diritto di regresso (art. 1950 c.c.) per capitale, interessi e spese nei limiti stabiliti. Surrogazione e regresso non sono concetti identici: la prima riguarda il subentro nella posizione creditoria e nelle garanzie trasmissibili, il secondo la pretesa di rimborso nei rapporti interni. Vi sono specifici obblighi informativi e limitazioni in ipotesi particolari. Per applicare la regola in un caso immobiliare occorre considerare se il credito pagato fosse assistito da ipoteca e quali effetti derivino dall’eventuale surrogazione.",
   "Il padre paga il residuo debito garantito del figlio: deve valutare il regresso e l’eventuale subentro nei diritti del creditore.",
   "Pagamento del garante non equivale automaticamente a donazione definitiva al debitore.",
   "Artt. 1949-1950: surrogazione e regresso dopo il pagamento."
  ],
  [
   "Liberazione del garante: artt. 1955, 1956 e 1957",
   "La garanzia può estinguersi o liberare il fideiussore per ragioni ulteriori al pagamento.",
   "Art. 1955 c.c.: il garante è liberato quando il creditore, con fatto proprio, ha reso impossibile la surrogazione nei suoi diritti, pegni, ipoteche e privilegi. Art. 1956: specifiche conseguenze per l’ulteriore concessione di credito a un terzo in condizioni patrimoniali divenute notevolmente peggiori e conosciute dal creditore, senza speciale autorizzazione del garante, nell’ambito dell’obbligazione futura. Art. 1957: dopo la scadenza dell’obbligazione principale, il mantenimento della garanzia è collegato all’attivazione diligente del creditore nei termini legali, da valutare anche in rapporto alle clausole e alla giurisprudenza. I sei mesi costituiscono il termine ordinario previsto dal primo comma, ma non vanno applicati meccanicamente a qualunque fattispecie.",
   "Il creditore rinuncia volontariamente a un’ipoteca essenziale per il recupero del garante: occorre valutare l’art. 1955.",
   "Non affermare che tutte le fideiussioni cessano automaticamente sei mesi dopo la firma.",
   "Artt. 1955-1957: liberazione e termini, con presupposti specifici."
  ],
  [
   "Pluralità di fideiussori e beneficio della divisione",
   "Più garanti dello stesso debito possono essere chiamati ciascuno per l’intero salvo patto diverso.",
   "Gli artt. 1946-1947 c.c. disciplinano la fideiussione prestata da più persone a garanzia del medesimo debito. In via generale ciascuna risponde dell’intero; il beneficio della divisione deve essere pattuito ed è cosa diversa dal beneficio di escussione del debitore principale. La ripartizione nei rapporti interni tra fideiussori può poi generare azioni di regresso e dipende dalla loro posizione concreta. Se in un contratto di mutuo tre familiari sono garanti, la presenza di tre firme non significa automaticamente che ciascuno debba solo un terzo alla banca. Leggi sempre eventuali massimali individuali.",
   "Tre fideiussori garantiscono 120.000 euro; senza beneficio della divisione la banca potrebbe rivolgersi per l’intero a uno nei limiti dell’impegno assunto.",
   "Divisione tra garanti non coincide con preventiva escussione del debitore.",
   "Artt. 1946-1947: co-fideiussori, regola dell’intero e possibile divisione."
  ],
  [
   "Garanzia autonoma e fideiussione: differenze",
   "Il contratto autonomo di garanzia può essere strutturalmente diverso dalla fideiussione accessoria.",
   "Nel contratto autonomo di garanzia, usualmente a prima richiesta, l’impegno del garante può essere concepito come autonomo rispetto alle vicende del rapporto principale, secondo le clausole e i limiti applicabili. La formula ‘a prima richiesta’ da sola non esaurisce la qualificazione: occorre leggere l’intero contratto e la giurisprudenza rilevante. La fideiussione tipica mantiene accessorietà e regole sulle eccezioni; nella garanzia autonoma l’eccezione di abuso o frode manifesta e le difese proprie sono questioni distinte. In locazioni commerciali e contratti con imprese la distinzione incide sul rischio assunto da banca o assicurazione.",
   "Una polizza bancaria garantisce il pagamento immediato su richiesta del locatore: prima di definirla fideiussione tipica esamina le clausole.",
   "Non classificare qualsiasi garanzia bancaria come ipoteca o qualsiasi ‘prima richiesta’ come identica struttura giuridica.",
   "Fideiussione accessoria ≠ contratto autonomo di garanzia."
  ]
 ],
 "obbligazioni": [
  [
   "Mora del debitore e mora del creditore",
   "Ritardo, imputabilità e cooperazione del creditore producono effetti diversi.",
   "La mora debendi si collega all’inadempimento ritardato e ai presupposti dell’art. 1219 c.c.; non sempre serve un’intimazione formale nei casi previsti dalla legge. La mora accipiendi attiene invece alla mancata cooperazione del creditore quando il debitore offre correttamente la prestazione nei modi richiesti. Gli effetti possono riguardare rischio, spese, interessi e responsabilità, con disciplina differente per obbligazioni pecuniarie. Un semplice sollecito commerciale non va confuso automaticamente con un atto di costituzione in mora idoneo a tutti gli effetti.",
   "L’acquirente offre il saldo nei tempi e modi pattuiti ma il venditore non collabora al rogito: occorre distinguere le rispettive posizioni.",
   "Mora del debitore e mora del creditore non sono due nomi per lo stesso ritardo.",
   "Mora debendi: ritardo imputabile; mora accipiendi: mancata cooperazione del creditore."
  ],
  [
   "Interessi corrispettivi, moratori e anatocismo",
   "Gli interessi possono remunerare capitale oppure risarcire il ritardo nel pagamento.",
   "Gli interessi corrispettivi remunerano l’uso di denaro; gli interessi moratori maturano per il ritardo secondo la disciplina applicabile. Il tasso legale varia nel tempo; i tassi convenzionali devono rispettare forma, trasparenza e limiti antiusura nei casi previsti. L’anatocismo, cioè interessi su interessi, è soggetto a limiti e discipline speciali, specie bancarie. Nell’esame calcolare sempre la base, il tempo, il tipo di interesse e il tasso corretto prima di applicare una formula. Un tasso annuo non può essere applicato integralmente a un ritardo di soli tre mesi senza ragguaglio.",
   "Rata di 1.000 euro pagata in ritardo: gli interessi di mora non sono automaticamente identici agli interessi corrispettivi contrattuali.",
   "Non confondere TAN, TAEG, tasso legale e tasso di mora.",
   "Interessi: funzione, base, durata, tasso e norme di settore."
  ],
  [
   "Clausola penale, caparra e risarcimento",
   "Tre strumenti possono incidere sull’inadempimento, ma hanno meccanismi diversi.",
   "La clausola penale ex art. 1382 c.c. predetermina una prestazione dovuta in caso di inadempimento o ritardo; opera secondo il patto e può essere soggetta a riduzione giudiziale nei casi previsti dall’art. 1384. La caparra confirmatoria ex art. 1385 è una somma o quantità di cose fungibili consegnata con specifica funzione di garanzia, con diversi rimedi secondo chi è inadempiente. L’acconto prezzo è invece imputazione anticipata al corrispettivo. Il risarcimento ordinario è altro istituto e richiede la verifica del danno secondo le relative regole. La combinazione di rimedi non è sempre cumulabile a discrezione.",
   "Preliminare con caparra di 10.000 euro e penale per ritardo: occorre leggere quali inadempimenti copre ciascuna clausola.",
   "Non trattare qualsiasi somma incassata come caparra o penale.",
   "Art. 1382: penale; art. 1385: caparra; acconto: anticipazione."
  ],
  [
   "Cessione del credito, delegazione, espromissione e accollo",
   "Modifica del lato attivo o passivo dell’obbligazione non equivale necessariamente a estinguere il debito originario.",
   "La cessione del credito trasferisce in via generale la posizione creditoria senza richiedere il consenso del debitore, salvo limiti di legge e opponibilità. Delegazione, espromissione e accollo riguardano invece il lato passivo e differiscono per iniziativa e rapporti tra debitore, terzo e creditore. L’accollo del mutuo nell’acquisto di un immobile richiede particolare attenzione: può avere struttura interna o esterna e non libera automaticamente il debitore originario senza il consenso del creditore nei presupposti di legge. L’adesione della banca incide sulle posizioni dei soggetti e non è sostituita dalla sola clausola tra venditore e acquirente.",
   "L’acquirente assume il mutuo del venditore con accordo tra loro, ma la banca non libera il venditore: occorre valutare l’accollo cumulativo.",
   "Trasferimento dell’immobile e liberazione dal debito bancario sono effetti distinti.",
   "Credito: cessione. Debito: delegazione, espromissione, accollo."
  ],
  [
   "Adempimento del terzo e prestazione in luogo dell’adempimento",
   "Un terzo può pagare il debito, ma pagare con altra prestazione richiede una disciplina differente.",
   "L’art. 1180 c.c. prevede in generale la possibilità di adempimento del terzo, salvi casi particolari. La datio in solutum ex art. 1197 riguarda invece prestazione diversa da quella originariamente dovuta, che il creditore può accettare e che produce l’effetto liberatorio alle condizioni previste. Nel rapporto immobiliare, trasferire un bene per estinguere una somma può essere prestazione sostitutiva, da distinguere da cessione del credito o compensazione. Va analizzata l’esistenza del consenso e il momento in cui l’obbligazione si estingue.",
   "Debitore deve 90.000 euro e propone di trasferire un box in soddisfazione del credito: non può imporre unilateralmente al creditore il bene.",
   "Pagamento del terzo non coincide con l’assunzione permanente del debito da parte del terzo.",
   "Art. 1180: terzo adempie; art. 1197: prestazione diversa accettata."
  ]
 ],
 "vendita": [
  [
   "Immobile da costruire: fideiussione obbligatoria",
   "Nelle ipotesi del d.lgs. 122/2005, l’acquirente persona fisica dispone di una tutela sulle somme anticipate.",
   "Il costruttore deve fornire una fideiussione bancaria o assicurativa che garantisca le somme e gli altri corrispettivi riscossi o da riscuotere prima del trasferimento del diritto, se ricorrono i presupposti soggettivi e oggettivi della normativa. Per gli immobili coperti dalle novità 2019 il preliminare va stipulato in forma notarile, così da consentirne la trascrizione. La disciplina tutela specificamente l’acquirente di immobile da costruire da costruttore, non ogni compravendita tra privati. L’omissione della garanzia comporta una nullità di protezione azionabile dall’acquirente nei casi previsti. Occorre verificare la data di richiesta del titolo edilizio, lo stato dei lavori e il perimetro effettivo della tutela.",
   "Il costruttore chiede 40.000 euro alla firma del preliminare per appartamento ancora non ultimato: verifica i presupposti e la fideiussione obbligatoria prima del pagamento.",
   "Non confondere la fideiussione dell’acquirente da costruttore con la fideiussione dei genitori per il mutuo.",
   "D.lgs. 122/2005: tutela acconti dell’acquirente di immobile da costruire."
  ],
  [
   "Polizza decennale postuma e garanzie edilizie",
   "La polizza decennale postuma copre determinati danni gravi successivi al trasferimento.",
   "Il costruttore, nei casi previsti dal d.lgs. 122/2005, deve consegnare al definitivo una polizza assicurativa indennitaria decennale a copertura dei danni materiali e diretti all’immobile derivanti da rovina totale o parziale o da gravi difetti costruttivi alle condizioni legali. Questa garanzia non coincide con la fideiussione sugli anticipi, che opera nella fase precedente al trasferimento e secondo differenti presupposti. La tutela va inoltre distinta dalla responsabilità dell’appaltatore per gravi difetti ex art. 1669 c.c. e dalle garanzie per vizi nella compravendita. Il mediatore deve indirizzare al notaio e al tecnico le verifiche sulla documentazione e sulla copertura.",
   "L’acquirente riceve chiavi e rogito di un immobile nuovo: occorre verificare l’esistenza della polizza, non soltanto della fideiussione usata per gli acconti.",
   "Polizza decennale postuma, APE e assicurazione incendio del mutuo hanno oggetti e beneficiari differenti.",
   "Acconti: fideiussione. Difetti gravi post-vendita: polizza decennale."
  ],
  [
   "Prezzo depositato dal notaio e tracciabilità",
   "Il deposito del prezzo è un meccanismo diverso dalla caparra e dall’assegno custodito dal mediatore.",
   "In determinati trasferimenti immobiliari il notaio può gestire il deposito del saldo prezzo su conto dedicato secondo le norme applicabili, su richiesta nei casi disciplinati. La regolazione del pagamento può essere coordinata con la trascrizione e con gli adempimenti concordati tra le parti. È necessario distinguere deposito prezzo notarile, escrow privata, caparra confirmatoria e deposito fiduciario dell’assegno in agenzia; cambiano soggetto custode, presupposti e momento di liberazione delle somme. In presenza di ipoteche da estinguere occorre coordinare notaio, banca e venditore.",
   "L’acquirente vuole liberare il saldo solo dopo esito di formalità: il notaio valuta se e come utilizzare il deposito prezzo.",
   "Non dedurre che l’assegno consegnato all’agente sia automaticamente depositato su conto dedicato notarile.",
   "Deposito prezzo: gestione notarile del saldo secondo legge e accordi."
  ],
  [
   "Accollo del mutuo e liberazione del venditore",
   "Il pagamento del mutuo da parte del compratore non libera sempre il venditore originario.",
   "L’accollo può essere interno, con effetti essenzialmente tra le parti, oppure esterno se intervengono i presupposti per il creditore; può inoltre rimanere cumulativo o diventare liberatorio quando il creditore libera espressamente il debitore originario o ricorrono i presupposti legali. L’ipoteca sul bene è una garanzia reale distinta dall’obbligazione personale di rimborso. La banca verifica il merito creditizio e non è obbligata ad accettare qualsiasi impostazione contrattuale proposta da venditore e acquirente. Occorre leggere saldo residuo, rate, tasso, arretrati e disciplina dell’operazione prima di indicare il ‘mutuo incluso nel prezzo’.",
   "Acquirente paga direttamente le rate residue ma il venditore rimane obbligato verso la banca: l’accollo non è liberatorio.",
   "Il trasferimento della casa non trasferisce automaticamente il ruolo di mutuatario né estingue l’ipoteca.",
   "Accollo cumulativo ≠ accollo liberatorio; rileva la posizione della banca."
  ]
 ],
 "locazioni": [
  [
   "Fideiussione locatizia e deposito cauzionale",
   "Il garante del canone e il deposito cauzionale proteggono il locatore con strumenti giuridici differenti.",
   "Il deposito cauzionale è una somma consegnata al locatore, soggetta alla disciplina e ai limiti applicabili, mentre la fideiussione impegna un terzo a soddisfare obbligazioni del conduttore nei limiti del contratto. Possono essere garantiti canoni, oneri accessori, danni e obblighi di rilascio se formulati e ammissibili; vanno verificati durata, massimale, operatività a prima richiesta e restituzione o liberazione. Una garanzia bancaria o assicurativa non equivale automaticamente a una cauzione in denaro. L’eventuale modifica, proroga o rinnovo della locazione può creare questioni sull’estensione della garanzia.",
   "Affitto commerciale: conduttore versa tre mensilità e offre fideiussione per dodici canoni; sono due coperture con disciplina diversa.",
   "Non applicare meccanicamente il limite del deposito cauzionale a qualsiasi fideiussione senza analizzarne natura e disciplina.",
   "Cauzione = somma depositata; fideiussione = obbligo personale del garante."
  ],
  [
   "Rinnovo, disdetta e recesso nelle locazioni",
   "Scadenza contrattuale, rinnovo legale, disdetta e recesso anticipato sono istituti diversi.",
   "Nei contratti abitativi le durate minime e le condizioni per impedire determinati rinnovi derivano dalla disciplina speciale. Occorre distinguere il diniego del locatore alla prima scadenza nei casi consentiti dalla legge, il successivo rinnovo e il recesso del conduttore per gravi motivi secondo regole e patti applicabili. Nei contratti non abitativi sono rilevanti ulteriori durate minime, indennità per perdita dell’avviamento ove spettante e particolari regole di preavviso. La formula ‘6 mesi di preavviso’ non descrive da sola tutte le fattispecie.",
   "Un 4+4 arriva alla prima scadenza: il locatore non può sempre impedire il rinnovo solo perché vuole aumentare il canone.",
   "Non confondere diniego di rinnovo del locatore e recesso del conduttore per gravi motivi.",
   "Rinnovo e recesso: controllare tipo di locazione, scadenza e motivazione."
  ],
  [
   "Morosità, sfratto e rilascio dell’immobile",
   "La risoluzione per morosità non equivale alla liberazione materiale immediata dell’immobile.",
   "Il mancato pagamento può determinare rimedi contrattuali e procedimenti giudiziari specifici per convalida dello sfratto o altre azioni, con termini, sanatorie e tutele variabili per tipologia di rapporto. La riconsegna effettiva non coincide automaticamente con la comunicazione di disdetta né con l’emissione di un primo provvedimento. Per vendere una casa locata occorre quindi verificare contratto registrato, durata, eventuali pendenze, titolo di occupazione e tempi realistici di rilascio. La presenza di un garante non autorizza il locatore a cambiare serratura o sgomberare senza titolo.",
   "Un acquirente compra una casa occupata da inquilino moroso: la prospettiva di rilascio richiede verifica legale, non semplice data indicata dal venditore.",
   "Il mediatore non deve promettere un rilascio entro una data senza titolo e riscontri.",
   "Morosità: rimedi contrattuali e processuali, non autotutela materiale."
  ]
 ],
 "dir-crisi": [
  [
   "Codice della crisi: procedure e termini da distinguere",
   "La disciplina moderna della crisi d’impresa non coincide con il vecchio linguaggio fallimentare.",
   "Il d.lgs. 14/2019 ha introdotto il Codice della crisi d’impresa e dell’insolvenza, progressivamente entrato in vigore e modificato. Per l’esame occorre distinguere stato di crisi, insolvenza, strumenti di regolazione negoziale, concordato, liquidazione giudiziale e procedure rivolte ai debitori non assoggettabili alla stessa. Gli effetti su atti, creditori, rappresentanza e beni immobili variano secondo la procedura e il momento del suo avvio. La formula ‘il venditore è in procedura’ non basta a sapere chi abbia potere di vendere o quali autorizzazioni servano.",
   "Una S.r.l. in liquidazione giudiziale è proprietaria di un capannone: occorre accertare organi e procedura di dismissione prima di acquisire l’incarico.",
   "Non usare ‘fallimento’ come sinonimo tecnico universale di qualunque situazione di crisi.",
   "CCII: crisi, insolvenza, strumenti negoziali e liquidazione giudiziale sono distinti."
  ],
  [
   "Composizione negoziata e misure protettive",
   "La composizione negoziata mira al risanamento in situazioni che lo consentono.",
   "L’imprenditore può accedere alla composizione negoziata con l’ausilio di un esperto indipendente alle condizioni previste dal CCII. Non equivale automaticamente a una liquidazione né comporta di per sé il trasferimento dei beni a un curatore. Possono intervenire misure protettive o autorizzazioni giudiziali in ipotesi specifiche. Nel campo immobiliare va verificato se l’impresa possa vendere beni non strategici, se l’operazione richieda particolari passaggi e quale posizione assumano i creditori garantiti. La due diligence deve essere affidata a professionisti competenti quando l’atto può interferire con la tutela della massa.",
   "L’impresa vende un immobile per sostenere il piano di risanamento: la validità operativa va valutata nel quadro della specifica procedura.",
   "Non assimilare l’esperto della composizione negoziata al curatore della liquidazione giudiziale.",
   "Composizione negoziata: risanamento e negoziazione, non liquidazione automatica."
  ],
  [
   "Liquidazione giudiziale, massa e vendita immobiliare",
   "La liquidazione giudiziale comporta regole specifiche di gestione e realizzo dell’attivo.",
   "L’apertura della procedura incide sulla disponibilità e amministrazione dei beni del debitore nei limiti e modi stabiliti dal Codice della crisi. Curatore, giudice delegato e altri organi hanno competenze differenti; la vendita immobiliare avviene secondo le regole della procedura e con verifiche su stima, pubblicità, competitività e cancellazione delle formalità quando applicabile. Per un mediatore il primo passo è acquisire il documento che individua la procedura, il soggetto autorizzato e le condizioni di vendita. Le garanzie reali e i crediti privilegiati incidono sulla distribuzione, non eliminano le regole procedurali.",
   "Un curatore propone la vendita di un appartamento: bisogna verificare incarico, autorizzazioni e procedura di realizzo prima di annunciare l’immobile.",
   "Non trattare il curatore come semplice proprietario privato che firma liberamente qualsiasi proposta.",
   "Liquidazione giudiziale: organi, autorizzazioni, procedura di realizzo e creditori."
  ],
  [
   "Esdebitazione: significato e limiti",
   "L’esdebitazione consente, al ricorrere dei presupposti, la liberazione da determinati debiti residui.",
   "Il CCII disciplina l’esdebitazione in rapporto alle procedure e ai requisiti del debitore. L’effetto concerne l’inesigibilità di determinati crediti rimasti insoddisfatti nei confronti del debitore beneficiario, non la cancellazione indistinta di tutti i rapporti giuridici e delle garanzie di terzi. Alcuni debiti possono essere esclusi dalla liberazione secondo la legge; vanno inoltre distinti gli effetti per debitore, coobbligati e fideiussori. Nell’esame la domanda può giocare sulla confusione fra chiusura della liquidazione, cancellazione della società e liberazione personale del debitore.",
   "Persona fisica ottiene l’esdebitazione dopo procedura: occorre verificare effetti sul creditore e su un eventuale garante distinto.",
   "Non concludere che ogni fideiussore sia automaticamente liberato dall’esdebitazione del debitore principale.",
   "Esdebitazione: inefficacia della pretesa su alcuni debiti residui, con limiti."
  ]
 ],
 "successioni": [
  [
   "Accettazione, rinuncia e possesso dei beni ereditari",
   "Il comportamento del chiamato può incidere sui termini e sulle forme dell’acquisto ereditario.",
   "L’accettazione dell’eredità può essere espressa o tacita quando un atto presuppone necessariamente la qualità di erede. La rinuncia è formale e segue le modalità stabilite; il chiamato che si trovi nel possesso dei beni ereditari è soggetto a precisi obblighi e termini per l’inventario e la scelta successiva. La dichiarazione fiscale di successione, l’intestazione catastale e la trascrizione sono adempimenti o pubblicità di natura diversa. In una vendita si deve ricostruire la catena dei titoli e valutare i casi in cui occorra documentare o trascrivere un’accettazione.",
   "Un figlio vende l’appartamento del defunto dopo avere già compiuto atti dispositivi: occorre distinguere accettazione tacita e formalità di pubblicità.",
   "Non qualificare il semplice pagamento di una bolletta come accettazione tacita in ogni circostanza senza valutazione concreta.",
   "Chiamata, accettazione, rinuncia e trascrizione sono quattro piani distinti."
  ],
  [
   "Legittima, collazione e riduzione delle disposizioni",
   "La devoluzione ereditaria deve rispettare i diritti riservati ai legittimari secondo la legge.",
   "Le quote di riserva spettano a categorie individuate dalla legge, in rapporto a composizione della famiglia e patrimonio. Donazioni in vita e disposizioni testamentarie possono richiedere riunione fittizia per calcolare lesioni; la collazione riguarda conferimenti tra determinati coeredi, mentre l’azione di riduzione è un rimedio distinto a tutela della legittima. Nella circolazione di immobili provenienti da donazioni o successioni occorre verificare provenienza e rischi giuridici senza presumere che qualunque testamento o donazione impedisca il trasferimento. Le regole dipendono dal caso e dalla disciplina vigente.",
   "Il de cuius ha donato una casa al figlio anni prima e dispone del residuo a favore di terzi: va esaminata la posizione di coniuge e discendenti.",
   "Non identificare collazione e riduzione: la prima opera tra coeredi nei casi previsti, la seconda protegge la riserva lesa.",
   "Legittima, collazione e riduzione: funzioni e presupposti diversi."
  ],
  [
   "Rappresentazione, accrescimento e trasmissione del diritto di accettare",
   "Il subentro degli eredi non segue sempre una semplice divisione aritmetica per teste.",
   "La rappresentazione consente in determinate linee familiari il subentro dei discendenti nel luogo e grado dell’ascendente che non può o non vuole accettare. L’accrescimento opera in differenti condizioni tra chiamati; la trasmissione del diritto di accettare interviene quando il chiamato muore senza aver ancora accettato. L’individuazione degli aventi diritto dipende da testamento, grado di parentela, rinunce, premorienza e regole specifiche. Una visura con quote apparentemente coerenti non sostituisce l’analisi della devoluzione successoria.",
   "Un figlio premuore al proprietario lasciando due figli: va verificato il meccanismo della rappresentazione.",
   "Non assumere che i nipoti subentrino sempre direttamente per semplice accordo familiare.",
   "Rappresentazione, accrescimento e trasmissione: cause diverse di devoluzione."
  ],
  [
   "Legato, eredità e debiti del defunto",
   "Il legatario e l’erede non assumono necessariamente la stessa posizione giuridica.",
   "L’erede succede a titolo universale nell’intero patrimonio o in una quota, il legatario riceve invece una attribuzione a titolo particolare, salvo qualificazioni concrete. L’acquisto del legato avviene in generale senza bisogno di accettazione, restando salva la facoltà di rinuncia e la disciplina applicabile. Responsabilità per debiti, oneri e formalità immobiliari richiedono quindi un’analisi differenziata. Nelle pratiche di compravendita il testamento può attribuire una casa a un legatario e altri beni agli eredi: chi ha potere dispositivo va verificato sul titolo e sulle regole specifiche.",
   "Il testatore lascia ‘il mio appartamento di via X’ a un amico e il restante patrimonio ai figli: occorre qualificare l’attribuzione.",
   "Non identificare il legatario con un erede universale ai fini della responsabilità per tutti i debiti.",
   "Eredità = titolo universale; legato = titolo particolare, in linea generale."
  ]
 ],
 "commerciale": [
  [
   "Rappresentanza delle società e limiti dei poteri",
   "Il nome del firmatario non basta: vanno verificati i poteri di impegnare l’ente.",
   "Amministratori, legali rappresentanti, procuratori e soci non hanno sempre le stesse attribuzioni. La visura del Registro delle imprese, lo statuto, la delibera dell’organo competente e le procure possono essere necessari per verificare la legittimazione al trasferimento immobiliare. Nelle società di persone occorre distinguere le responsabilità e i poteri dei soci; nelle società di capitali la rappresentanza deve essere valutata secondo disciplina e assetto concreto. Restrizioni interne e opponibilità ai terzi seguono regole specifiche. Un preliminare sottoscritto da soggetto privo di poteri genera rischi sulla vincolatività.",
   "Una S.r.l. vende un immobile e firma un socio non amministratore: va cercata procura o altro titolo di rappresentanza.",
   "Non equiparare automaticamente partecipazione al capitale e potere di firma.",
   "Legittimazione societaria: visura, statuto, procure e delibere."
  ],
  [
   "Cessione d’azienda, avviamento e contratti pendenti",
   "L’azienda è un complesso organizzato di beni, non necessariamente il fabbricato che la ospita.",
   "La cessione d’azienda implica possibili successioni nei contratti, questioni sui crediti e sui debiti e una componente di avviamento economico. La proprietà o il godimento dell’immobile utilizzato dall’impresa costituiscono rapporti da analizzare separatamente. La cessione di quote societarie è ancora diversa dalla cessione del complesso aziendale: cambia il soggetto titolare dei beni e possono cambiare rischi e garanzie. L’agente deve distinguere vendita delle mura, vendita dell’attività e cessione delle partecipazioni, soprattutto per licenze, locazioni, personale e fiscalità.",
   "Si vende un bar comprensivo di arredi e avviamento, ma i muri sono in locazione: l’acquirente non diventa proprietario dell’immobile.",
   "Non usare l’espressione ‘vendo il locale’ senza precisare se si cede proprietà, azienda o quote.",
   "Azienda, immobile e partecipazioni: oggetti giuridici distinti."
  ],
  [
   "Procedure di liquidazione volontaria e liquidazione giudiziale",
   "‘Società in liquidazione’ può descrivere situazioni molto diverse.",
   "La liquidazione volontaria segue il percorso societario con nomina dei liquidatori e poteri rivolti al realizzo dell’attivo e al pagamento dei debiti. La liquidazione giudiziale è invece una procedura concorsuale disciplinata dal CCII con organi e vincoli propri. Per un acquisto immobiliare è essenziale leggere i dati del Registro imprese e gli atti che conferiscono poteri. Non basta la parola liquidazione a concludere che l’atto di vendita sia nullo o che il curatore sia necessariamente coinvolto.",
   "Società in liquidazione volontaria vende un magazzino tramite liquidatore; non si presume l’esistenza di un curatore giudiziale.",
   "Non confondere liquidatore volontario, amministratore e curatore.",
   "Liquidazione volontaria ≠ liquidazione giudiziale."
  ]
 ],
 "dir-titoli": [
  [
   "Avallo cambiario e fideiussione: confronto",
   "L’avallo garantisce un’obbligazione cambiaria, la fideiussione garantisce un’obbligazione altrui secondo il Codice civile.",
   "L’avallo è una dichiarazione su titolo cambiario e segue i principi di autonomia e formalità previsti dalla disciplina cambiaria. La fideiussione ordinaria è accessoria all’obbligazione principale e consente specifiche eccezioni del debitore. La garanzia personale rilasciata in banca non diventa avallo perché firmata su un foglio o perché usa la parola ‘garante’. Nell’esame distinguere forma, oggetto garantito, eccezioni opponibili e mezzo di circolazione del diritto.",
   "Una persona appone avallo su pagherò cambiario mentre un’altra firma una garanzia per mutuo: gli effetti non sono identici.",
   "Non confondere avallo, girata, fideiussione e coobbligazione.",
   "Avallo = garanzia cambiaria; fideiussione = garanzia civile accessoria."
  ]
 ],
 "eco-credito": [
  [
   "Merito creditizio: capacità di rimborso e garanzie",
   "La banca valuta la solvibilità del richiedente oltre al valore dell’immobile.",
   "Il merito creditizio deriva da reddito disponibile, continuità lavorativa, altri impegni, esposizioni esistenti, patrimonio, spese e caratteristiche del finanziamento. L’ipoteca migliora la posizione del creditore sul bene ma non sostituisce la capacità prospettica di pagare le rate. Fideiussori e coobbligati assumono ruoli diversi, da leggere nel contratto. Un mutuo richiesto all’80% del prezzo non viene approvato automaticamente se il reddito è insufficiente. All’esame conviene distinguere valutazione del collaterale, merito creditizio e sostenibilità del piano di rimborso.",
   "Immobile stimato 300.000 euro, mutuo richiesto 180.000 euro, rata molto alta rispetto al reddito: il basso LTV non elimina il problema.",
   "Non dedurre che qualsiasi finanziamento sotto l’80% LTV sia obbligatoriamente erogato.",
   "Merito creditizio = redditi, spese, indebitamento, garanzie e rischio."
  ],
  [
   "LTV, DSTI e tasso di sforzo: indicatori distinti",
   "Loan-to-value e rapporto rata/reddito misurano rischi diversi.",
   "LTV si calcola come capitale finanziato diviso per valore di riferimento dell’immobile, moltiplicato per cento. Il rapporto rata/reddito o debt-service-to-income confronta invece oneri di rimborso con reddito secondo la definizione utilizzata. Le banche applicano metriche e politiche differenti, quindi una percentuale non è una soglia legale universale per tutti i mutui. Un’alta percentuale di anticipo riduce il LTV; l’aumento della rata può peggiorare la sostenibilità anche senza variazione del valore della casa. In un esame attenzione al denominatore e a eventuali altri finanziamenti.",
   "Mutuo 180.000 euro su perizia 240.000 = 75% LTV; rata 900 su reddito netto 3.000 = 30% rapporto semplice rata/reddito.",
   "Non dividere il mutuo per il reddito annuo quando la domanda chiede LTV.",
   "LTV = debito/valore; DSTI = servizio del debito/reddito."
  ],
  [
   "Centrale dei Rischi, SIC e segnalazioni",
   "Le banche utilizzano diverse fonti informative sul credito.",
   "La Centrale dei Rischi della Banca d’Italia è distinta dai sistemi di informazione creditizia privati (SIC). I dati riguardano rapporti e segnalazioni secondo soglie e criteri propri; una segnalazione non equivale sempre a un’insolvenza o a una ‘lista dei cattivi pagatori’. Il mutuatario può esercitare i diritti di accesso e contestazione nei modi previsti. In una trattativa immobiliare l’agente non deve promettere che un mutuo sarà approvato perché il cliente non conosce segnalazioni a suo carico.",
   "Il cliente presenta buste paga solide ma segnala un precedente ritardo: la banca valuta dati e politiche applicabili.",
   "Non chiamare Centrale dei Rischi qualsiasi database privato del credito.",
   "CR pubblica e SIC privati: basi, finalità e regole differenti."
  ],
  [
   "Tasso fisso, variabile, spread e parametri",
   "Il costo del mutuo dipende dalla struttura del tasso e dalle clausole.",
   "Il tasso fisso viene convenuto secondo la disciplina contrattuale e rende prevedibile la rata di capitale e interessi nel caso standard; il variabile segue un indice di riferimento con spread bancario, secondo periodicità e regole. TAN e TAEG non sono sinonimi: quest’ultimo comprende specifiche componenti di costo e ipotesi legali di calcolo. In un mutuo variabile possono esistere floor, cap, opzioni o altre clausole. Il tasso di riferimento può variare e produrre aumento del servizio del debito, anche se il prezzo della casa è stabile.",
   "Euribor ipotetico 3% + spread 1,5% = TAN nominale 4,5% se contratto così previsto; il TAEG incorpora altri costi.",
   "Non sommare in modo indifferenziato tutte le spese al TAN come se fosse il TAEG.",
   "Fisso/variabile; indice + spread; TAN ≠ TAEG."
  ],
  [
   "Crediti deteriorati, sofferenze e recupero",
   "Un credito problematico può essere classificato secondo il grado di deterioramento.",
   "La classificazione delle esposizioni bancarie comprende categorie diverse di crediti deteriorati, con criteri prudenziali. La sofferenza è una classificazione specifica, non sinonimo di ogni singola rata tardiva. Cessione del credito a terzi, cartolarizzazioni, procedure esecutive e accordi di ristrutturazione possono incidere sul recupero, ma la vendita del credito non implica automaticamente cancellazione dell’ipoteca o trasformazione della proprietà. Per un immobile gravato da procedura esecutiva è cruciale verificare titolarità del credito e formalità.",
   "Il mutuo è stato ceduto a un servicer: occorre verificare chi sia legittimato a rilasciare conteggi e quietanze.",
   "Non dire che una banca perde ogni garanzia reale appena cede il credito.",
   "Deterioramento, sofferenza, cessione e recupero hanno effetti differenti."
  ]
 ],
 "eco-investimenti": [
  [
   "Valore attuale netto (VAN/NPV)",
   "Il VAN misura la differenza tra investimenti e flussi futuri attualizzati.",
   "In un modello semplificato VAN = somma dei flussi di cassa attesi scontati al costo del capitale meno esborso iniziale. Occorre definire durata, flussi netti, tempi, valore finale e tasso di sconto coerente con il rischio. Un VAN positivo al tasso prescelto indica che il progetto supera quel rendimento richiesto nelle ipotesi usate; non garantisce guadagni certi. Per il settore immobiliare vanno inclusi costi di acquisto, lavori, vacanza locativa, manutenzioni e costi di uscita quando rilevanti.",
   "Acquisto 200.000, flussi attualizzati 170.000, rivendita attualizzata 60.000: VAN semplificato +30.000 prima di altri costi.",
   "Non confrontare euro futuri e euro odierni senza attualizzazione.",
   "VAN = flussi attualizzati − investimento iniziale."
  ],
  [
   "TIR/IRR e confronto con il costo del capitale",
   "Il TIR è il tasso che rende nullo il VAN dei flussi del progetto.",
   "Il tasso interno di rendimento considera tempi e segno dei flussi e viene confrontato con un rendimento minimo richiesto coerente per rischio e durata. Può dare risultati ambigui con flussi non convenzionali o progetti di diversa scala: quindi il VAN resta uno strumento di confronto complementare. In una compravendita d’investimento le plusvalenze ipotizzate, le imposte e le spese devono essere esplicitate. Il rendimento lordo da canone non è uguale al TIR dell’intero investimento.",
   "Un locale ha rendimento lordo annuo del 7%, ma il TIR può essere diverso per spese iniziali, vacancy e rivendita.",
   "Non chiamare TIR il semplice rapporto canone annuo/prezzo.",
   "TIR: tasso che azzera il VAN dei flussi."
  ],
  [
   "Vacancy, costi di gestione e reddito netto normalizzato",
   "La capitalizzazione richiede un reddito coerente con il rischio e il tasso applicato.",
   "Il canone potenziale annuo deve essere rettificato per periodi di sfitto prevedibili, morosità attesa, costi non recuperabili, manutenzioni ordinarie, amministrazione e altre uscite secondo il perimetro di stima. La scelta fra reddito lordo, netto operativo e flusso dopo il servizio del debito cambia le grandezze da usare. Un saggio derivato da redditi netti comparabili non può essere applicato a un canone lordo senza normalizzarlo. L’esame può chiedere la distinzione tra reddito netto della proprietà e cash flow dell’investitore indebitato.",
   "Canone annuo 18.000; vacancy 5% = 900; spese 2.100; reddito operativo ipotetico 15.000 prima di altre componenti.",
   "Non trattare 12 mensilità contrattuali come 12 mensilità certamente incassate.",
   "Reddito netto normalizzato = potenziale − vacancy − costi pertinenti."
  ],
  [
   "Leva finanziaria e rischio immobiliare",
   "Il debito può amplificare sia il rendimento sul capitale proprio sia le perdite.",
   "La leva si analizza confrontando capitale proprio investito e capitale preso a prestito. Se il rendimento dell’attivo supera il costo effettivo del debito, l’effetto sul rendimento dell’equity può essere positivo; al contrario, tassi e costi più elevati possono comprimere o rendere negativo il flusso. Il valore del bene può ridursi senza una riduzione equivalente del debito, aumentando il rischio patrimoniale dell’investitore. Un basso equity iniziale non rende per definizione l’operazione più redditizia in termini di rischio.",
   "Casa da 250.000 con mutuo 200.000: una diminuzione del valore di 30.000 incide fortemente sui 50.000 iniziali di capitale proprio.",
   "Non confondere rendimento dell’immobile e rendimento dell’equity dopo rate e interessi.",
   "Leva = opportunità e amplificazione del rischio."
  ]
 ],
 "eco-bilancio": [
  [
   "Stato patrimoniale, conto economico e flussi di cassa",
   "Le tre rappresentazioni aziendali rispondono a domande diverse.",
   "Lo stato patrimoniale mostra attività, passività e patrimonio netto a una data; il conto economico sintetizza ricavi e costi di un periodo; il rendiconto finanziario ricostruisce i movimenti di liquidità. Un’impresa può essere redditizia ma avere difficoltà di cassa, o liquidità temporanea senza redditività strutturale. Nella vendita di un’azienda immobiliare è necessario distinguere utile contabile, debiti verso banche e capitale circolante. Ammortamenti sono costi economici ma non necessariamente uscite di cassa del periodo.",
   "Società registra utile 50.000 ma incassa crediti dopo sei mesi e deve pagare subito fornitori: reddito positivo non equivale a cassa disponibile.",
   "Non confondere ricavi fatturati, incassi e profitto netto.",
   "Patrimoniale = stock; economico = reddito; flussi = liquidità."
  ],
  [
   "DSCR e sostenibilità del debito aziendale",
   "Il rapporto di copertura del servizio del debito usa flussi disponibili e rate dovute.",
   "In forma semplificata DSCR = flusso di cassa disponibile per servizio del debito / servizio del debito nel periodo. Le definizioni operative dipendono da finanziatore, modello e contratto. Un valore sopra uno indica nel modello copertura del servizio previsto, ma non dimostra da solo l’assenza di rischio. Il mediatore che esamina un acquirente società deve evitare di equiparare utile fiscale o EBITDA alla liquidità liberamente disponibile. L’analisi va collegata a debiti scaduti, capitale circolante, investimenti e scadenze.",
   "Cash flow disponibile 120.000, rate capitale+interessi 100.000: DSCR semplificato 1,20.",
   "Non usare il canone lordo immobiliare come DSCR senza sottrarre costi pertinenti.",
   "DSCR = flusso per debito / servizio del debito."
  ],
  [
   "Capitale circolante netto e liquidità",
   "La struttura temporale degli incassi e pagamenti influenza l’equilibrio finanziario.",
   "Il capitale circolante netto operativo combina crediti commerciali, scorte e debiti verso fornitori in un quadro semplificato. Un aumento dei crediti non incassati può assorbire liquidità pur facendo crescere il fatturato. Nei cicli immobiliari i lavori, le caparre, gli acconti e i tempi notarili possono produrre fabbisogni di cassa molto diversi dal risultato economico del progetto. Gli anticipi dei clienti non sono sempre risorse liberamente utilizzabili a prescindere da obblighi di garanzia e restituzione.",
   "Impresa costruisce tre appartamenti e paga imprese subito ma incassa saldi soltanto ai rogiti: serve copertura finanziaria del ciclo.",
   "Non trattare un acconto incassato come utile netto definitivo.",
   "Capitale circolante: differenza temporale tra impieghi e fonti correnti."
  ]
 ],
 "eco-dati-mercato": [
  [
   "Media, mediana e valori anomali nel mercato immobiliare",
   "La media dei prezzi può essere distorta da poche compravendite estreme.",
   "La media aritmetica somma i valori e divide per il numero delle osservazioni; la mediana è il valore centrale della distribuzione ordinata. In mercati con campioni piccoli o immobili eterogenei, la mediana può descrivere meglio il prezzo tipico ma non sostituisce l’analisi comparativa del singolo bene. È necessario distinguere euro totali da euro al metro quadrato, controllare qualità delle fonti, data, posizione e stato degli immobili. Un valore anomalo non va scartato senza una ragione documentata.",
   "Prezzi 100, 110, 120, 130 e 500 mila euro: media 192 mila, mediana 120 mila.",
   "Non calcolare la media di prezzi assoluti di superfici molto diverse come stima €/m².",
   "Media sensibile agli estremi; mediana valore centrale ordinato."
  ],
  [
   "Campione, bias di selezione e prezzi di offerta",
   "I dati di annunci e atti notarili descrivono popolazioni diverse.",
   "Le richieste di prezzo negli annunci non coincidono necessariamente con prezzi di transazione; immobili rimasti invenduti possono essere sovrarappresentati nel portale. Selezionare soltanto gli immobili più simili per metratura ma ignorare zona, piano, stato e data crea distorsioni. Una stima affidabile richiede fonti verificabili, criteri di campionamento, documentazione delle rettifiche e analisi delle incertezze. I range OMI sono strumenti informativi territoriali, non quotazioni vincolanti per ogni singola unità.",
   "Nella stessa strada compaiono dieci annunci a 3.000 €/m² ma tre rogiti a 2.500 €/m²: la differenza deve essere indagata.",
   "Non trattare una mediana di annunci come prezzo medio effettivo di vendita.",
   "Dati: fonte, campione, selezione, comparabilità, rettifiche."
  ],
  [
   "Regressione, correlazione e causalità",
   "Una correlazione nei dati immobiliari non prova automaticamente un rapporto causale.",
   "Una regressione può tentare di stimare l’effetto marginale di superfici, posizione, piano, condizioni e altri caratteri sul prezzo, ma richiede campione adeguato, qualità dei dati e controllo delle variabili confondenti. La correlazione tra prezzo e metratura è normalmente attesa, ma non determina da sola il valore unitario corretto. Modelli complessi possono adattarsi bene ai dati osservati e funzionare male fuori campione. All’esame conta saper interpretare il risultato, non solo calcolare un coefficiente.",
   "Un modello attribuisce 8.000 euro a un piano più alto: verifica presenza di ascensore, vista e altre caratteristiche.",
   "Non interpretare un R² alto come garanzia che la stima del singolo immobile sia corretta.",
   "Correlazione ≠ causalità; controllare bias e variabili."
  ]
 ],
 "eco-microeconomia": [
  [
   "Elasticità della domanda e offerta di immobili",
   "Le reazioni a variazioni di prezzo dipendono dal tempo e dalla sostituibilità.",
   "L’elasticità-prezzo della domanda misura la variazione percentuale della quantità domandata in rapporto alla variazione percentuale del prezzo, con segno normalmente negativo per la domanda ordinaria. Nel mercato immobiliare l’offerta di nuove abitazioni può reagire lentamente per vincoli urbanistici e tempi di costruzione. Differenze tra mercato della prima casa, investimenti e immobili di pregio influiscono sulla sensibilità ai prezzi. Una domanda relativamente rigida nel breve periodo non significa che il prezzo possa crescere senza limiti.",
   "Se il prezzo sale del 10% e le compravendite scendono del 15%, elasticità semplice in valore assoluto 1,5.",
   "Non confondere elasticità con crescita nominale del prezzo o con tasso di capitalizzazione.",
   "Elasticità = variazione percentuale quantità / variazione percentuale prezzo."
  ]
 ],
 "imm-documenti": [
  [
   "Due diligence: titoli, gravami e continuità delle trascrizioni",
   "Un’immagine catastale corretta non prova la titolarità né la libertà da vincoli.",
   "La verifica documentale di un acquisto deve ricostruire provenienza e catena dei titoli, ispezioni ipotecarie, trascrizioni e iscrizioni, eventuali domande giudiziali, pignoramenti, servitù e formalità pregiudizievoli. I documenti vanno confrontati per soggetti, quote, identificativi catastali e date. Una successione può richiedere attenzione alla trascrizione dell’accettazione dell’eredità; un’ipoteca estinta economicamente può non essere stata ancora cancellata formalmente. Il mediatore deve riconoscere segnali di rischio e coordinarsi con notaio e tecnici senza sostituirsi a loro.",
   "Il venditore produce visura aggiornata ma un’ispezione mostra ipoteca ventennale: occorre verificare esistenza, rinnovo, estinzione e cancellazione.",
   "Non considerare la visura catastale certificazione definitiva e sufficiente di proprietà.",
   "Due diligence titoli: provenienza + continuità + gravami + corrispondenze."
  ],
  [
   "Stato legittimo e doppia conformità: verifiche tecniche",
   "Regolarità edilizia e catastale sono piani documentali diversi.",
   "Lo stato legittimo di un fabbricato richiede ricostruzione dei titoli edilizi e dei provvedimenti rilevanti secondo la disciplina vigente. La conformità catastale riguarda consistenza e planimetrie, ma il deposito di una variazione DOCFA non sana automaticamente opere prive di titolo. Le procedure di sanatoria e i loro presupposti possono mutare; per la doppia conformità e gli interventi minori occorre distinguere le diverse fattispecie del Testo unico edilizia. All’agente spetta segnalare criticità e richiedere una valutazione asseverata quando necessario.",
   "Una veranda è visibile in planimetria catastale ma non emerge nel progetto comunale: serve accertamento tecnico urbanistico.",
   "Non promettere la sanabilità di un abuso senza un tecnico e un inquadramento normativo.",
   "Stato legittimo ≠ allineamento catastale; sanatoria secondo regime applicabile."
  ],
  [
   "Servitù, usi civici e vincoli di destinazione",
   "Un bene può essere commerciabile ma gravato da limiti importanti al godimento.",
   "Le servitù prediali possono derivare da titolo, destinazione del padre di famiglia o usucapione quando ne ricorrono i presupposti; i vincoli urbanistici e paesaggistici hanno fonti e conseguenze differenti. Terreni soggetti a usi civici o altre forme di proprietà collettiva richiedono verifiche specialistiche sulla disponibilità e sulla circolazione giuridica. Occorre distinguere oneri reali, obbligazioni propter rem, vincoli convenzionali, trascrizioni e limiti pubblicistici. Il solo fatto che il Comune qualifichi un’area edificabile non elimina diritti di terzi.",
   "Terreno edificabile presenta passaggio per fondi confinanti e sospetti usi civici: il valore va stimato dopo verifica dei vincoli.",
   "Non confondere servitù iscritta nei registri con un mero accesso tollerato di fatto.",
   "Vincoli: individuare fonte, opponibilità, estensione e impatto economico."
  ],
  [
   "APE, certificazioni impianti e agibilità",
   "Documenti energetici, impiantistici ed edilizi attestano aspetti differenti.",
   "L’APE descrive prestazione energetica secondo le regole applicabili; la dichiarazione di conformità o rispondenza degli impianti ha oggetto e presupposti diversi; l’agibilità riguarda condizioni e requisiti disciplinati dal Testo unico edilizia. Un documento non sostituisce automaticamente gli altri né prova l’assenza di abusi. Gli obblighi in contratto, pubblicità e consegna possono dipendere da tipo di immobile, data e fattispecie. In caso di edificio storico o impianti datati occorre distinguere obbligo di adeguamento, conformità al momento di installazione e documentazione disponibile.",
   "Casa con APE classe D e caldaia senza libretti: la presenza dell’APE non certifica ogni impianto.",
   "Non considerare l’APE un collaudo strutturale o una sanatoria urbanistica.",
   "APE, impianti, agibilità: tre oggetti e fonti distinti."
  ],
  [
   "Condominio: pendenze, lavori e delibere",
   "Una liberatoria informativa non esaurisce tutti i rischi condominiali.",
   "Prima di una vendita si verificano spese ordinarie e straordinarie, rate scadute, bilanci, fondi, contenziosi, delibere già approvate e lavori programmati. L’art. 63 disp. att. c.c. disciplina una specifica responsabilità solidale per contributi relativi all’anno in corso e precedente, che va distinta dai rapporti interni di riparto tra venditore e compratore. La data della delibera e lo stato dei lavori sono elementi importanti per definire contrattualmente chi sopporta il costo; le regole di legge e gli accordi tra parti non sempre coincidono negli effetti verso il condominio.",
   "L’assemblea ha già approvato rifacimento tetto per 50.000 euro: la ripartizione tra parti va chiarita nella proposta.",
   "Non equiparare una liberatoria generica ad assenza garantita di future spese straordinarie.",
   "Due diligence condominio: debiti, bilanci, delibere, fondi, cause e riparti."
  ]
 ],
 "imm-estimo-approfondito": [
  [
   "Metodo del confronto di mercato (MCA): rettifiche e comparabili",
   "Il confronto di mercato richiede analisi delle differenze, non media automatica di annunci.",
   "Il procedimento comparativo può basarsi su compravendite verificate, con rettifiche per data, localizzazione, superficie, piano, stato manutentivo, consistenza e altri caratteri. Ogni aggiustamento deve essere coerente con il mercato osservato e spiegabile; non esiste un coefficiente unico valido ovunque. Le correzioni possono essere percentuali o monetarie, ma devono evitare duplicazioni e usare una direzione coerente dal comparabile al subject. La media dei prezzi rettificati è solo una fase da valutare insieme alla dispersione e affidabilità dei dati.",
   "Comparabile venduto a 280.000 euro ha terrazzo di maggior valore per 10.000: la rettifica può ridurne il prezzo di confronto a 270.000.",
   "Non correggere la superficie due volte, una nel €/m² e una con un coefficiente aggiuntivo non motivato.",
   "MCA: prezzo osservato + rettifiche motivate = indicazione di valore."
  ],
  [
   "DCF immobiliare: attualizzazione dei flussi variabili",
   "Il discounted cash flow considera evoluzione dei canoni, costi e prezzo finale.",
   "Nel modello DCF si stimano i flussi netti di ciascun periodo e il valore di uscita, che sono poi attualizzati con un tasso coerente con il rischio. È necessario considerare vacancy, lavori futuri, indicizzazioni, manutenzione straordinaria, imposte quando pertinenti e possibili variazioni del valore residuo. Non si deve usare contemporaneamente un flusso prima del debito e un tasso di rendimento sul solo equity senza riconciliazione. Differenze minime di saggio o terminal value possono produrre variazioni rilevanti del risultato: serve analisi di sensibilità.",
   "Locale genera 20.000 euro netti nel primo anno e 22.000 nel secondo, poi è venduto: ciascun flusso si sconta alla sua data.",
   "Non sommare canoni di anni differenti come se fossero incassati tutti oggi.",
   "DCF: flussi netti datati + prezzo finale, tutti attualizzati."
  ],
  [
   "Valore di trasformazione e principio del massimo utilizzo",
   "Il valore di un’area può dipendere dal progetto legalmente ed economicamente realizzabile.",
   "Il metodo del valore di trasformazione confronta il valore ipotetico del prodotto finito con costi di realizzazione, tempi, oneri, rischio e utile imprenditoriale atteso, secondo il modello scelto. L’uso più conveniente deve essere fisicamente possibile, legalmente consentito e sostenibile dal mercato: una volumetria teorica non equivale a guadagno certo. Il procedimento va integrato con verifiche su PGT, permessi, infrastrutture, convenzioni, tempi di assorbimento e costo del capitale. Un errore sui ricavi o sul costo di costruzione può propagarsi fortemente nel valore residuo dell’area.",
   "Operazione ipotetica: ricavi 2 milioni, costi complessivi 1,55 milioni, remunerazione del rischio 0,2 milioni: residuo semplificato 0,25 milioni.",
   "Non sottrarre solo i costi di cantiere ignorando oneri, imposte, progettazione e utile.",
   "Valore trasformazione = prodotto atteso − costi − rischio/remunerazione."
  ],
  [
   "Saggi di capitalizzazione e coerenza reddituale",
   "Il valore capitalizzato è molto sensibile a reddito e saggio scelti.",
   "La capitalizzazione diretta semplificata V = R/r richiede reddito annuo normalizzato sostenibile e un tasso di capitalizzazione coerente con comparabili e caratteristiche del rischio. Confondere il tasso del mutuo con il cap rate è un errore: hanno funzioni diverse e non sono intercambiabili. Il saggio può riflettere crescita attesa, rischi, posizione e qualità del reddito, ma deve derivare da un processo argomentato, non da una percentuale universale. Se R aumenta o r diminuisce, il valore teorico cresce, a parità di altre ipotesi.",
   "Reddito netto 15.000 con cap rate 5% vale 300.000; con cap rate 6% vale 250.000.",
   "Non applicare lo stesso saggio a un immobile vuoto da rilocare e a uno con contratto stabile senza spiegazione.",
   "Capitalizzazione V = R/r; coerenza tra saggio, reddito e rischio."
  ]
 ],
 "imm-estimo-legale3": [
  [
   "Valutazione di usufrutto e nuda proprietà",
   "La ripartizione del valore può richiedere criteri civilistici ed economici diversi.",
   "Il valore economico dell’usufrutto dipende da durata prevista, utilità del godimento, redditi, spese e tasso di attualizzazione; in ambito fiscale si applicano coefficienti legali specifici e periodicamente aggiornati. Il valore della nuda proprietà non va sempre stimato come una percentuale arbitraria del pieno valore. Se l’usufrutto è vitalizio, l’età del beneficiario assume un ruolo nei calcoli tabellari previsti dalle norme fiscali; nel mercato può incidere anche l’effettiva commerciabilità. Occorre distinguere uso, abitazione e usufrutto, perché hanno diverso contenuto e trasferibilità.",
   "Casa del valore pieno ipotetico di 300.000 gravata da usufrutto vitalizio: la quota fiscale non coincide per forza col prezzo di mercato della nuda proprietà.",
   "Non utilizzare coefficienti fiscali come unica e infallibile prova del valore di mercato.",
   "Usufrutto: valore del godimento; nuda proprietà: diritto residuo, metodi coerenti."
  ],
  [
   "Indennità di esproprio, occupazione e valore residuo",
   "L’espropriazione può creare una perdita anche sulla porzione di bene che rimane al proprietario.",
   "Nelle espropriazioni la base e i criteri di indennità dipendono da natura del bene, vincoli, destinazione e disciplina vigente. In ipotesi di esproprio parziale si possono usare principi di stima differenziale tra bene prima e bene residuo, quando pertinenti. Occupazione legittima, acquisizioni, indennità aggiuntive e danni non sono sinonimi. La valutazione deve esaminare accessibilità, forma, redditività residua e possibilità di utilizzazione del fondo rimasto. La disciplina è speciale e varia per caso, quindi non ogni esproprio segue una formula identica.",
   "Terreno vale 400.000 prima, 250.000 il residuo dopo: la perdita differenziale è 150.000, ma la disciplina dell’indennità va verificata.",
   "Non chiamare valore di mercato la cifra di indennizzo senza analisi della norma applicabile.",
   "Esproprio parziale: stimare perdita e residuo, poi applicare disciplina indennitaria."
  ],
  [
   "Diritto di superficie, enfiteusi e livelli",
   "I diritti reali limitati modificano disponibilità, durata e valore del bene.",
   "Il diritto di superficie può separare la proprietà della costruzione da quella del suolo; enfiteusi e diritti storici di livello possono imporre canoni, poteri e procedimenti peculiari. Nella valutazione va ricostruito il titolo, la durata, gli obblighi economici e le condizioni del trasferimento. Un diritto temporaneo non possiede lo stesso profilo di valore di una piena proprietà perpetua; può esistere un valore di reversione al proprietario del suolo. Affrancazione e devoluzione hanno significati e presupposti specifici e non vanno presunti.",
   "Fabbricato realizzato su suolo comunale in diritto di superficie per 99 anni: verifica convenzione, scadenza e limiti alla cessione.",
   "Non confondere proprietà superficiaria con semplice autorizzazione edilizia o concessione d’uso.",
   "Diritti limitati: titolo, durata, obblighi e valore di reversione."
  ]
 ],
 "imm-rurale-diritto": [
  [
   "Prelazione e riscatto agrario: titolari e condizioni",
   "La vendita di terreni agricoli può attivare diritti di preferenza legali.",
   "La prelazione agraria può spettare a determinate categorie di coltivatori, affittuari o confinanti in presenza dei presupposti normativi. Non basta essere proprietari di terreno confinante: occorre verificare requisiti soggettivi, conduzione, caratteristiche del fondo, esclusioni e comunicazioni. Il diritto di riscatto in caso di violazione della prelazione segue regole speciali. Per il mediatore è essenziale raccogliere dati su conduzione, colture, contratti agrari e confinanti senza promettere che un terreno sia liberamente trasferibile a chiunque.",
   "Fondo agricolo locato a coltivatore diretto: va esaminata l’eventuale prelazione prima di raccogliere una proposta irrevocabile.",
   "Non attribuire automaticamente prelazione a qualunque vicino, parente o agricoltore generico.",
   "Prelazione agraria: titolare qualificato + requisiti + procedura."
  ],
  [
   "Compendio unico, vincoli e fabbricati rurali",
   "Un terreno agricolo può essere soggetto a regimi e vincoli che incidono sulla divisione.",
   "La disciplina del compendio unico e i vincoli connessi a specifici benefici agrari possono influire su alienabilità, frazionamento e destinazione del fondo, con possibili conseguenze in caso di violazione. Le agevolazioni tributarie per imprenditori agricoli seguono presupposti soggettivi e oggettivi propri. La ruralità fiscale o catastale di un fabbricato non determina da sola la legittimità urbanistica dell’immobile o la sua destinazione effettiva. Devono essere analizzate eventuali servitù irrigue, accessi e diritti di terzi.",
   "Casa rurale e terreni acquistati con agevolazioni: occorre verificare termini di mantenimento e possibili vincoli di indivisibilità.",
   "Non presumere che una categoria catastale rurale consenta qualsiasi cambio d’uso.",
   "Fondi rustici: verificare compendio, agevolazioni, ruralità e vincoli."
  ]
 ],
 "imm-condominio-operativo": [
  [
   "Supercondominio, scale e impianti comuni",
   "La gestione di parti comuni può interessare più fabbricati o solo alcuni partecipanti.",
   "Il supercondominio può derivare dalla presenza di beni o servizi comuni a più edifici autonomi, secondo i presupposti del Codice civile. Il condominio parziale riguarda cose destinate al servizio di una parte delle unità, con conseguenze sull’imputazione delle spese e sulla partecipazione alle decisioni. Tabelle millesimali generali, scale, ascensori, riscaldamento e lastrici possono seguire criteri differenziati. È importante distinguere la semplice suddivisione catastale dall’effettiva titolarità e destinazione delle parti comuni.",
   "Due palazzine condividono giardino e rampa box, ma hanno scale indipendenti: gli oneri non sono per forza ripartiti con un’unica tabella.",
   "Non far pagare automaticamente un ascensore a tutti in misura identica senza leggere proprietà, uso e norme.",
   "Supercondominio e condominio parziale: beni comuni e partecipanti effettivi."
  ],
  [
   "Revisione millesimi e riparto lavori straordinari",
   "I millesimi rappresentano quote, ma le spese non sono sempre proporzionali a una sola tabella.",
   "Le tabelle millesimali possono essere approvate e rettificate secondo le norme applicabili e i casi di errore o alterazione rilevante dei rapporti originari. La ripartizione delle spese di conservazione o utilizzo può seguire differenti criteri in funzione della funzione del bene, della sua destinazione e degli articoli del Codice civile. Per il rogito è utile sapere se vi sono lavori deliberati e pendenze, ma il riparto interno tra venditore e compratore va contrattualizzato senza ignorare la posizione verso il condominio.",
   "Condominio delibera facciata prima del rogito: vanno chiariti costi, scadenze e riparto, oltre alla responsabilità verso l’ente.",
   "Non confondere millesimi di proprietà con tutti i criteri di spesa per scale, ascensore o lastrico.",
   "Millesimi e riparti: norma applicabile, destinazione del bene, delibera."
  ]
 ]
};
 const SOURCES={
 "dir-garanzie": [
  "https://www.normattiva.it/eli/id/1942/04/04/042U0262/CONSOLIDATED",
  "Codice civile, artt. 1936–1957 e garanzie"
 ],
 "obbligazioni": [
  "https://www.normattiva.it/eli/id/1942/04/04/042U0262/CONSOLIDATED",
  "Codice civile, obbligazioni"
 ],
 "vendita": [
  "https://www.notariato.it/it/guida/acquisto-in-costruzione/",
  "Consiglio Nazionale del Notariato · Acquisto in costruzione"
 ],
 "locazioni": [
  "https://www.normattiva.it/eli/id/1998/12/15/098G0489/CONSOLIDATED",
  "Legge 431/1998 e disciplina delle locazioni"
 ],
 "dir-crisi": [
  "https://www.normattiva.it/atto/caricaDettaglioAtto?atto.codiceRedazionale=19G00007&atto.dataPubblicazioneGazzetta=2019-02-14",
  "Codice della crisi d’impresa e dell’insolvenza"
 ],
 "successioni": [
  "https://www.normattiva.it/eli/id/1942/04/04/042U0262/CONSOLIDATED",
  "Codice civile, successioni"
 ],
 "commerciale": [
  "https://www.normattiva.it/eli/id/1942/04/04/042U0262/CONSOLIDATED",
  "Codice civile, impresa e società"
 ],
 "dir-titoli": [
  "https://www.normattiva.it/eli/id/1942/04/04/042U0262/CONSOLIDATED",
  "Codice civile e disciplina dei titoli"
 ],
 "eco-credito": [
  "https://www.bancaditalia.it/pubblicazioni/guide-bi/guida-mutuo/index.html",
  "Banca d’Italia · Guida al mutuo"
 ],
 "eco-investimenti": [
  "https://economiapertutti.bancaditalia.it/",
  "Banca d’Italia · L’economia per tutti"
 ],
 "eco-bilancio": [
  "https://www.bancaditalia.it/",
  "Banca d’Italia · Approfondimenti economici"
 ],
 "eco-dati-mercato": [
  "https://www.agenziaentrate.gov.it/portale/",
  "Agenzia delle Entrate · Dati immobiliari"
 ],
 "eco-microeconomia": [
  "https://economiapertutti.bancaditalia.it/",
  "Banca d’Italia · Economia per tutti"
 ],
 "imm-documenti": [
  "https://www.normattiva.it/eli/id/2001/11/20/001G0471/CONSOLIDATED",
  "D.P.R. 380/2001 · Testo unico edilizia"
 ],
 "imm-estimo-approfondito": [
  "https://www.agenziaentrate.gov.it/portale/",
  "Agenzia delle Entrate · Osservatorio immobiliare"
 ],
 "imm-estimo-legale3": [
  "https://www.normattiva.it/eli/id/1942/04/04/042U0262/CONSOLIDATED",
  "Codice civile · Diritti reali"
 ],
 "imm-rurale-diritto": [
  "https://www.normattiva.it/",
  "Normattiva · Normativa vigente"
 ],
 "imm-condominio-operativo": [
  "https://www.normattiva.it/eli/id/1942/04/04/042U0262/CONSOLIDATED",
  "Codice civile · Condominio"
 ]
};
 let count=0;
 for(const [id,chapters] of Object.entries(ADDITIONS)){
  const module=MODULES.find(m=>m.id===id);
  if(!module)continue;
  const [url,label]=SOURCES[id]||[];
  for(const row of chapters){
   if(module.lessons.some(lesson=>lesson.title===row[0]))continue;
   const lesson=L(...row);
   lesson.sourceUrl=url||'';
   lesson.sourceTitle=label||'Fonte di approfondimento';
   module.lessons.push(lesson);
   module.summary.push(row[5]);
   module.oral.push('Spiega '+row[0].toLowerCase()+' e applica la regola a un caso immobiliare concreto.');
   count++;
  }
 }
 if(typeof window!=='undefined')window.NEW_THEORY_EXPANSION_STATS={lessons:count,modules:Object.keys(ADDITIONS).length};
})();
