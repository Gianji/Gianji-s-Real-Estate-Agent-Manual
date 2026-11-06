/* Rielaborazione dei distrattori SOLO per i 91 quesiti creati dall'autore.
 * Le tracce camerali e le alternative editoriali associate a Milano/Roma
 * restano intatte. I testi delle domande originali restano invariati. */
(function(){
 const HARD_DISTRACTORS={
 "n01": [
  "La terzietà richiede che il mediatore non riceva incarichi da nessuna delle parti, anche non esclusivi.",
  "La mediazione tipica presuppone un mandato senza rappresentanza, purché manchi una procura notarile.",
  "È sufficiente la neutralità nella fissazione del prezzo, a prescindere da poteri e rapporti contrattuali."
 ],
 "n02": [
  "La provvigione sorge soltanto con l’esecuzione del preliminare, purché sia versato almeno il 20% del prezzo.",
  "La rinuncia al definitivo elimina retroattivamente la conclusione dell’affare, anche se il preliminare era valido.",
  "Il diritto nasce con la trascrizione del preliminare, mentre la firma privata costituisce solo aspettativa."
 ],
 "n04": [
  "Il mediatore deve comunicare le controversie solo se il giudizio è già trascritto contro il proprietario.",
  "L’obbligo di informazione riguarda esclusivamente circostanze risultanti da documenti ufficiali acquisiti dall’agente.",
  "Il mediatore può differire l’informazione al rogito se ritiene probabile la soluzione favorevole della causa."
 ],
 "n07": [
  "La prescrizione decennale si applica alla provvigione, mentre il termine annuale riguarda solo il rimborso spese.",
  "Il termine annuale decorre sempre dal rogito, senza rilievo di preliminare o atti interruttivi.",
  "Il diritto è soggetto a decadenza semestrale, che non ammette interruzione o sospensione."
 ],
 "n08": [
  "La proprietà si estingue per non uso ventennale soltanto quando il terreno è agricolo non coltivato.",
  "Il vicino ottiene la proprietà se dimostra uso continuo del fondo, anche quando questo è mera tolleranza.",
  "Il proprietario perde il diritto dopo venti anni di mancata trascrizione di atti conservativi."
 ],
 "n10": [
  "Può mutare liberamente la destinazione economica se ripristina il bene alla cessazione dell’usufrutto.",
  "I canoni percepiti spettano al nudo proprietario dal momento in cui l’usufruttuario concede locazione.",
  "L’usufruttuario può concedere il godimento, ma solo previa autorizzazione scritta del nudo proprietario."
 ],
 "n11": [
  "È sufficiente che il passaggio favorisca personalmente l’attuale acquirente, pur senza utilità stabile del fondo.",
  "È necessaria la contiguità catastale e l’identità della destinazione agricola tra fondo dominante e servente.",
  "Il passaggio costituisce servitù reale soltanto se il contratto prevede un corrispettivo periodico."
 ],
 "n14": [
  "Il creditore deve prima escutere il patrimonio comune dei debitori e poi chiedere le rispettive quote.",
  "Può richiedere l’intero a ciascuno, ma il pagamento di uno non libera gli altri verso il creditore.",
  "La solidarietà comporta diritto di regresso del creditore sui condebitori, non di chi abbia pagato."
 ],
 "n17": [
  "Il debitore si libera se dimostra che il costo supera di oltre il 30% quello prevedibile alla firma.",
  "L’impossibilità libera da responsabilità anche quando è dovuta a scelte organizzative imputabili al debitore.",
  "La difficoltà economica del settore vale automaticamente come impossibilità oggettiva sopravvenuta."
 ],
 "n18": [
  "La forma scritta è richiesta soltanto per trascrivere la vendita, non per la sua validità tra le parti.",
  "L’assenza della scrittura comporta annullabilità soggetta a convalida tacita mediante pagamento.",
  "La prova testimoniale dell’accordo sostituisce la forma ad substantiam se le parti sono concordi."
 ],
 "n19": [
  "È valida l’accettazione con modifica se il prezzo differisce di meno del 5% e il proponente non protesta.",
  "La proposta iniziale rimane efficace e il mediatore può perfezionare il contratto comunicando la media dei prezzi.",
  "Il contratto si conclude a 220.000 euro con facoltà dell’acquirente di recedere entro quindici giorni."
 ],
 "n20": [
  "Il mutuo integra un termine incerto nel quando, mentre la data integra una condizione certa nell’evento.",
  "Entrambe sono condizioni sospensive, perché rinviano la produzione degli effetti a un momento successivo.",
  "La data è un termine risolutivo e il mutuo è condizione risolutiva, indipendentemente dal testo."
 ],
 "n22": [
  "Il giudice può trasferire la proprietà anche se manca un preliminare valido, purché sia versata caparra.",
  "La sentenza può sostituire soltanto la dichiarazione del venditore, mai produrre gli effetti del contratto.",
  "Il rimedio consiste nella trascrizione unilaterale della proposta accettata, che trasferisce direttamente il bene."
 ],
 "n23": [
  "Il preliminare produce subito effetti reali se individua catastalmente l’immobile e contiene la data del rogito.",
  "La consegna anticipata trasferisce automaticamente la proprietà, mentre resta sospeso soltanto il saldo del prezzo.",
  "La trascrizione del preliminare equivale al definitivo per il trasferimento, salvo patto contrario."
 ],
 "n26": [
  "La conformità catastale presume quella edilizia, salvo contestazione formale del Comune entro cinque anni.",
  "Una variazione DOCFA protocollata sana la veranda se non cambia la categoria o la rendita dell’unità.",
  "L’assenza del titolo edilizio non incide sull’operazione purché la planimetria sia allegata al rogito."
 ],
 "n27": [
  "L’accettazione comunicata produce soltanto un obbligo morale fino alla registrazione fiscale della proposta.",
  "Il preliminare nasce unicamente con atto notarile; la scrittura privata accettata è sempre un accordo preparatorio.",
  "Una condizione sospensiva rende la proposta giuridicamente inesistente fino alla concessione del mutuo."
 ],
 "n28": [
  "La prima scadenza legale coincide sempre con cessazione definitiva, salvo che il conduttore chieda un nuovo contratto.",
  "Il secondo quadriennio opera solo se le parti ripetono la registrazione ed eseguono una nuova caparra.",
  "Il locatore può negare il primo rinnovo per qualsiasi interesse economico comunicato tre mesi prima."
 ],
 "n30": [
  "I trenta giorni decorrono sempre dall’inizio materiale dell’occupazione anche se il contratto è firmato prima.",
  "Per i contratti pluriennali il termine parte dal primo pagamento del canone, se successivo alla firma.",
  "Per le locazioni abitative il termine ordinario è sessanta giorni dalla registrazione in anagrafe del conduttore."
 ],
 "n32": [
  "L’erede acquisisce automaticamente la qualità con l’apertura della successione; l’accettazione conferma solo le quote.",
  "La presentazione della dichiarazione di successione produce sempre accettazione espressa in sede civile.",
  "La voltura catastale è l’unico atto necessario per sostituire ogni prova dell’accettazione ereditaria."
 ],
 "n35": [
  "Una rinuncia privata firmata davanti a due testimoni consente di conservare i beni attivi senza subire i debiti.",
  "L’inventario da solo separa i patrimoni anche quando l’eredità è stata accettata puramente e semplicemente.",
  "L’accettazione con beneficio d’inventario impedisce ogni azione dei creditori anche entro il valore dei beni ricevuti."
 ],
 "n37": [
  "Nella S.n.c. la responsabilità illimitata riguarda solo i soci amministratori; nella S.r.l. gli altri rispondono pro quota.",
  "Nella S.r.l. i soci sono ordinariamente solidali entro il valore nominale della partecipazione per ogni debito.",
  "Nella S.n.c. il patrimonio sociale è separato e rende i soci responsabili solo dopo la cancellazione della società."
 ],
 "n40": [
  "Il 2% grava sul prezzo dichiarato anche se viene chiesto e ammesso il sistema prezzo-valore.",
  "Il 2% si applica alla rendita catastale non rivalutata, senza coefficienti, se la compravendita è tra privati.",
  "L’aliquota del 2% è valida solo per vendite imponibili IVA da imprese costruttrici."
 ],
 "n43": [
  "Il registro si basa sempre sul maggiore tra prezzo dichiarato e importo del mutuo approvato dalla banca.",
  "Il valore catastale è la base anche per vendite di fabbricati strumentali a soggetti IVA, per scelta dell’acquirente.",
  "Il prezzo-valore si applica a qualsiasi vendita se l’acquirente dichiara il valore OMI nell’atto."
 ],
 "n44": [
  "Una casa comprata con benefici prima casa è esente IMU se il proprietario non possiede altri immobili, anche se affittata.",
  "L’esenzione IMU si conserva fino al termine dei cinque anni fiscali dopo l’acquisto agevolato.",
  "La residenza anagrafica in un altro Comune è sufficiente per esenzione IMU se la casa è locata a canone concordato."
 ],
 "n46": [
  "La cedolare esclude soltanto l’aggiornamento obbligatorio, ma consente l’ISTAT pattuito per intero.",
  "La rinuncia agli aggiornamenti è facoltativa per l’anno di opzione se il conduttore riceve avviso scritto.",
  "L’ISTAT si applica solo alla seconda annualità e resta compatibile con la cedolare, entro il 75%."
 ],
 "n48": [
  "L’esenzione successione opera soltanto se il bene è stata abitazione principale del de cuius per almeno cinque anni.",
  "La plusvalenza si tassa sempre se la rivendita è entro cinque anni dall’accettazione tacita dell’eredità.",
  "La vendita è imponibile sul differenziale soltanto quando l’acquirente è soggetto IVA, a prescindere dall’origine successoria."
 ],
 "n50": [
  "Il legale rappresentante è titolare effettivo per presunzione assoluta quando la società è una S.r.l.",
  "Il titolare effettivo coincide necessariamente con il socio di maggioranza relativa anche sotto le soglie di controllo.",
  "La banca è esonerata da ricostruire le partecipazioni quando l’immobile è acquistato con mezzi propri della società."
 ],
 "t01": [
  "A/2 individua abitazioni economiche, mentre C/6 identifica esclusivamente stalle e scuderie.",
  "A/2 identifica abitazioni civili solo se non locabili, mentre C/6 è sempre un locale deposito.",
  "A/2 e C/6 differiscono per classe energetica e non per destinazione catastale del bene."
 ],
 "t06": [
  "L’intestazione catastale prevale sui titoli se la voltura è successiva alla trascrizione dell’atto.",
  "La visura dimostra il proprietario fino a rettifica giudiziale anche quando l’atto trascritto indica altro soggetto.",
  "La posizione si risolve col solo nuovo DOCFA, senza esaminare continuità delle trascrizioni e titoli."
 ],
 "t09": [
  "La visura catastale integrata con la mappa terreni sostituisce sempre il certificato urbanistico comunale.",
  "Il piano attuativo privato firmato dai confinanti certifica la destinazione legale ai fini del rogito.",
  "L’APE del fabbricato confinante documenta la destinazione del terreno non edificato."
 ],
 "t12": [
  "Il grado dipende dalla data di iscrizione nel contratto, mentre la trascrizione rileva soltanto per le compravendite.",
  "Il creditore con capitale nominale maggiore ottiene grado prioritario anche se iscrive successivamente.",
  "Il grado dipende dalla data in cui il debitore ha ricevuto materialmente il finanziamento garantito."
 ],
 "t14": [
  "Prevale il primo acquirente che abbia registrato fiscalmente l’atto, anche in assenza di trascrizione.",
  "Prevale sempre l’atto notarile rispetto a qualsiasi scrittura privata autenticata, senza confrontare le formalità.",
  "La priorità dipende dalla data del contratto trascritto, non dalla data di esecuzione della trascrizione."
 ],
 "t17": [
  "La variazione catastale elimina automaticamente le sanzioni edilizie se aggiorna la superficie utile.",
  "La regolarità edilizia si presume dopo cinque anni dalla presentazione del DOCFA, salvo opposizione del Comune.",
  "La conformità catastale vale come prova dello stato legittimo se il proprietario firma dichiarazione sostitutiva."
 ],
 "t19": [
  "La nomina diventa obbligatoria dal nono subalterno catastale, anche se i proprietari sono meno di nove.",
  "Conta il numero delle unità immobiliari e non quello dei partecipanti, purché l’edificio abbia almeno tre piani.",
  "La presenza di un regolamento contrattuale rende facoltativa la nomina anche con nove condòmini."
 ],
 "t21": [
  "La responsabilità si estende ai soli importi deliberati dopo il rogito, mai a contributi precedenti.",
  "Il compratore risponde dei contributi dei due anni solari anteriori, indipendentemente dall’anno gestionale.",
  "La solidarietà opera per qualsiasi arretrato ultradecennale purché certificato dall’amministratore."
 ],
 "t23": [
  "La stima deve coincidere col prezzo più recente richiesto in zona se l’immobile è pubblicizzato da un’agenzia.",
  "Il prezzo di annuncio costituisce sempre valore minimo del bene, da rettificare solo verso l’alto.",
  "Basta prendere la media aritmetica degli asking prices, purché almeno tre annunci siano comparabili."
 ],
 "t25": [
  "270.000 euro, perché si applica il saggio al valore prima della capitalizzazione.",
  "318.000 euro, considerando reddito annuale come ulteriore capitale accanto alla capitalizzazione.",
  "360.000 euro, perché 18.000 euro corrispondono al 5% del valore, non al 6% dato."
 ],
 "t27": [
  "360.000 euro, capitalizzando il canone lordo perché le spese non influenzano il reddito della proprietà.",
  "240.000 euro, sottraendo i costi dal valore già capitalizzato al 4%.",
  "330.000 euro, scontando il 2.400 euro di costi al saggio del 5% anziché al 4%."
 ],
 "t28": [
  "98,2 m², applicando al balcone il 35% invece del 30% indicato.",
  "97,0 m², arrotondando la pertinenza al metro quadrato intero prima di sommarla.",
  "92,54 m², trattando il 30% come moltiplicatore di 0,03."
 ],
 "t29": [
  "840 euro, perché il periodo di nove mesi equivale a un intero anno commerciale.",
  "720 euro, usando implicitamente il 4% annuo per tre quarti d’anno.",
  "607,50 euro, applicando erroneamente il tasso al capitale già ridotto del 3,5%."
 ],
 "t31": [
  "Il TAN nominale incrementato delle commissioni espresse in euro, senza attualizzare scadenze diverse.",
  "Il tasso contrattuale di mora, perché incorpora tutte le spese indipendenti dal finanziamento.",
  "Il rendimento dei titoli di Stato decennali, poiché assorbe i costi bancari accessori."
 ],
 "t32": [
  "80%, calcolando sul prezzo di richiesta ipotetico invece che sulla perizia.",
  "70%, dopo aver sottratto dal finanziamento il 5% di spese notarili presunte.",
  "85%, applicando il 10% di riduzione prudenziale al valore di perizia prima del rapporto."
 ],
 "t33": [
  "La quota capitale cresce inizialmente e poi diminuisce, mentre la quota interessi segue l’andamento inverso.",
  "Le due quote sono variabili, ma la quota interessi resta crescente perché il capitale residuo si riduce.",
  "La quota capitale rimane costante e varia soltanto la quota interessi, come nell’ammortamento italiano."
 ],
 "t37": [
  "La fascia OMI fissa il valore di mercato individuale, salvo riduzione obbligatoria per classe energetica.",
  "Si può usare il prezzo medio OMI come perizia solo se entrambi gli immobili hanno uguale consistenza catastale.",
  "È sufficiente applicare il minimo OMI all’immobile peggiore e il massimo al migliore senza comparabili."
 ],
 "t42": [
  "L’ipoteca si estingue con il versamento del saldo e non necessita di alcuna formalità o verifica successiva.",
  "La semplice quietanza firmata dal venditore dimostra la cancellazione nei registri immobiliari.",
  "L’ipoteca non può essere estinta mediante il prezzo di vendita e impedisce in assoluto ogni rogito."
 ],
 "t43": [
  "È sufficiente indicare la banca prescelta, lasciando importo e termine alla discrezione dell’acquirente.",
  "La condizione è certa se precisa l’importo richiesto ma non stabilisce alcun termine finale.",
  "La formula ‘salvo parere favorevole della banca’ rende sempre determinabile oggettivamente la scadenza."
 ],
 "t46": [
  "La prelazione del confinante opera automaticamente per tutti i proprietari di terreni agricoli adiacenti.",
  "La prelazione agraria è esclusa per definizione quando l’acquirente intende costruire entro dieci anni.",
  "La verifica riguarda esclusivamente la quota di reddito dominicale del confinante, non la sua qualifica."
 ],
 "t49": [
  "101.200 euro, usando 920×110 senza la rivalutazione del 5%.",
  "111.573 euro, rivalutando due volte il 5% prima del moltiplicatore.",
  "106.750 euro, applicando un arrotondamento della rendita all’euro superiore dopo la rivalutazione."
 ],
 "t52": [
  "336.000 euro, moltiplicando il reddito per venti come se il saggio fosse il 5%.",
  "400.000 euro, usando un rendimento del 4,2% al posto del 4,8%.",
  "348.000 euro, effettuando una riduzione forfetaria del valore capitalizzato non richiesta dal quesito."
 ],
 "a001": [
  "La provvigione richiede che il mediatore partecipi all’ultima trattativa, anche se ha creato il contatto iniziale.",
  "Il compenso sorge solo quando l’acquirente cita espressamente il mediatore nel rogito notarile.",
  "È decisiva l’esistenza di un incarico in esclusiva, indipendentemente dall’effettivo nesso con l’affare."
 ],
 "a002": [
  "Il mediatore può tacere finché un’ispezione non riveli la trascrizione della domanda giudiziale.",
  "Il dovere di informare sorge solo dopo la firma della proposta, purché il preliminare non sia trascritto.",
  "La circostanza può essere omessa se l’agente ritiene che la causa abbia probabilità inferiori al 50% di successo."
 ],
 "a003": [
  "Il contratto vincola Caio se il rappresentante ha dichiarato ai terzi di essere autorizzato, anche senza ratifica.",
  "La responsabilità esclusiva ricade su Caio se il falsus procurator ha compiuto atti utili al suo patrimonio.",
  "È sufficiente che il rappresentante sia iscritto nella stessa anagrafe familiare del presunto rappresentato."
 ],
 "a004": [
  "È sufficiente la conoscenza della morte, anche senza atti incompatibili con lo stato di semplice chiamato.",
  "Si configura una rinuncia per comportamento concludente quando il chiamato utilizza i beni per spese correnti.",
  "La dichiarazione di successione costituisce accettazione tacita in modo automatico in qualsiasi fattispecie."
 ],
 "a005": [
  "Il semplice uso continuo del percorso per quindici anni, senza opere visibili, costituisce sempre servitù apparente usucapibile.",
  "La tolleranza del proprietario rende irrilevante la durata del passaggio, ma trasforma il rapporto in servitù coattiva.",
  "L’esistenza di una mappa catastale con traccia del sentiero prova comunque il titolo costitutivo della servitù."
 ],
 "a006": [
  "Acquista il godimento immediato dei frutti civili, ma non può disporre del bene fino a estinzione dell’usufrutto.",
  "Acquista un diritto personale di credito alla restituzione dell’immobile, non un diritto reale trascrivibile.",
  "Può trasferire la piena proprietà senza il consenso dell’usufruttuario, estinguendo il diritto limitato con la vendita."
 ],
 "a007": [
  "Si verifica compensazione legale, purché i valori delle prestazioni siano equivalenti, anche se le parti sono d’accordo.",
  "Si realizza cessione del credito perché il creditore riceve una prestazione diversa dall’importo originario.",
  "La sostituzione determina sempre novazione oggettiva e libera il debitore prima dell’effettivo adempimento."
 ],
 "a008": [
  "L’ipoteca segue la persona del mutuatario ma non il bene, quindi il nuovo proprietario non è esposto all’esecuzione.",
  "L’iscrizione ipotecaria si trasferisce automaticamente su qualsiasi altro bene del debitore al momento della vendita.",
  "L’ipoteca decade con il rogito, ma il creditore conserva soltanto un privilegio generale sul patrimonio dell’acquirente."
 ],
 "a009": [
  "L’invalidità può essere sanata con dichiarazione unilaterale del contraente non inadempiente dopo cinque anni.",
  "La nullità è soggetta alla stessa convalida espressa dell’annullabilità, purché entrambi riconoscano il vizio.",
  "La ratifica del rappresentato elimina sempre le nullità per contrarietà a norme imperative, anche se il contratto resta illecito."
 ],
 "a010": [
  "La denominazione acconto può essere superata unilateralmente dal venditore quando il compratore è inadempiente.",
  "Il versamento anticipato si trasforma in caparra confirmatoria non appena il preliminare viene registrato.",
  "L’acconto consente automaticamente il recesso con ritenzione della somma, anche senza specifica pattuizione."
 ],
 "a011": [
  "L’impedimento doloso comporta la risoluzione automatica del contratto senza esame dell’interesse contrario.",
  "La condizione deve essere ritenuta non avverata ogni volta che la parte obbligata ostacola l’evento.",
  "La finzione di avveramento opera anche quando l’impedimento proviene da un estraneo non collegato alle parti."
 ],
 "a012": [
  "La titolarità parziale non incide sulla validità della vendita, perché il venditore trasferisce automaticamente anche la quota altrui.",
  "Il contratto è nullo per oggetto impossibile anche se la legge disciplina ipotesi di acquisto successivo del bene altrui.",
  "Il venditore può sostituire il consenso del comproprietario mancante con una planimetria catastale firmata."
 ],
 "a013": [
  "La trascrizione produce subito trasferimento della proprietà subordinato solo al versamento del saldo prezzo.",
  "Il preliminare trascritto rende inefficace ogni ipoteca precedente alla sua stessa sottoscrizione.",
  "L’effetto prenotativo prevale indefinitamente su tutte le formalità successive, senza limiti temporali."
 ],
 "a014": [
  "Il consenso del locatore è necessario solo se la sublocazione totale riguarda un contratto inferiore a quattro anni.",
  "La sublocazione totale è libera nei contratti abitativi, mentre è vietata soltanto nelle locazioni commerciali.",
  "La comunicazione della sublocazione sostituisce in ogni caso il consenso del locatore, indipendentemente dal patto."
 ],
 "a015": [
  "Il limite riguarda soltanto i contratti concordati, mentre nei 4+4 il deposito può raggiungere quattro mensilità.",
  "Il limite di tre mensilità esclude ogni altra garanzia contrattuale, anche fideiussoria, per lo stesso rapporto.",
  "Il deposito può superare tre mensilità quando il locatore non sceglie il regime della cedolare secca."
 ],
 "a016": [
  "La verifica riguarda soltanto il numero dei figli alla data del testamento, senza considerare le donazioni precedenti.",
  "La quota disponibile prevale sulla riserva se il testamento ha forma notarile e viene trascritto.",
  "La legittima può essere esclusa con dichiarazione unilaterale del testatore se un erede ha già ricevuto immobili."
 ],
 "a017": [
  "Può firmare qualunque socio accomandatario o accomandante purché sia presente al rogito.",
  "La capacità di rappresentare la società deriva automaticamente dal possesso della maggioranza del capitale sociale.",
  "È sufficiente la firma del socio che gestisce i rapporti bancari anche se privo dei poteri richiesti."
 ],
 "a018": [
  "La proprietà dell’immobile viene trasferita se esso era utilizzato dall’azienda da almeno cinque anni, anche senza titolo.",
  "La cessione d’azienda determina subentro automatico nella proprietà di tutti i beni immobili occupati, anche locati.",
  "Il valore dell’avviamento comprende necessariamente il valore catastale del fabbricato, a prescindere dal proprietario."
 ],
 "a019": [
  "L’IVA viene applicata al valore catastale in quanto l’agevolazione prima casa rende obbligatorio il prezzo-valore.",
  "La base IVA coincide col valore OMI della zona se è inferiore al corrispettivo dichiarato.",
  "L’IVA si calcola sulla rendita rivalutata se l’acquirente è persona fisica che non agisce nell’impresa."
 ],
 "a020": [
  "L’aliquota ordinaria è il 2% anche senza requisiti prima casa, purché si chieda il prezzo-valore.",
  "Il 9% si applica al prezzo del mutuo, mentre la base catastale è riservata all’IVA.",
  "Il registro ordinario del 9% diventa 4% se il trasferimento è fra parenti di primo grado."
 ],
 "a021": [
  "L’IMU grava sul nudo proprietario se il bene è locato dall’usufruttuario a un terzo, perché percepisce reddito.",
  "La soggettività passiva si ripartisce tra usufruttuario e nudo proprietario in proporzione alle quote di valore fiscale.",
  "Il proprietario paga sempre l’IMU, mentre l’usufruttuario risponde solo delle spese condominiali ordinarie."
 ],
 "a022": [
  "La cedolare vieta aumenti solo per la prima annualità; successivamente l’ISTAT è cumulabile senza rinunciare all’opzione.",
  "La rinuncia agli aggiornamenti è subordinata alla registrazione notarile del contratto, non all’opzione fiscale.",
  "Si può continuare a chiedere il 75% dell’ISTAT se il contratto è a canone concordato anche durante la cedolare."
 ],
 "a023": [
  "L’identificazione del legale rappresentante elimina ogni necessità di analizzare controllo e partecipazioni societarie.",
  "Il titolare effettivo coincide sempre con il socio di maggioranza relativa, a prescindere da partecipazioni indirette.",
  "La verifica può essere rinviata al rogito anche se il mediatore ha già instaurato il rapporto con la società."
 ],
 "a024": [
  "La destinazione a ufficio è legittima quando il proprietario aggiorna la planimetria, anche se la categoria resta A/2.",
  "Il cambio d’uso si presume autorizzato se il Comune non emette una contestazione entro due anni.",
  "La categoria A/2 è sufficiente a dimostrare l’uso ammesso, mentre i titoli urbanistici rilevano solo per le dimensioni."
 ],
 "a025": [
  "Il reddito di mercato si ricava rivalutando automaticamente i redditi dominicale e agrario con coefficienti fiscali.",
  "Il canone potenziale lordo coincide col reddito netto ordinario quando il terreno è condotto dal proprietario.",
  "Le rendite catastali sono misure economiche attuali direttamente capitalizzabili con il saggio OMI dell’abitativo."
 ],
 "a026": [
  "La vendita non trascritta è opponibile a ogni successivo acquirente dal momento della firma del rogito.",
  "La priorità si determina dalla data del pagamento del prezzo e non dalla formalità nei registri immobiliari.",
  "La voltura catastale del primo acquirente impedisce sempre la trascrizione del secondo titolo."
 ],
 "a027": [
  "La presenza di un APE implica verifica della regolarità urbanistica da parte del certificatore energetico.",
  "Il classamento aggiornato costituisce prova dello stato legittimo degli ampliamenti per tutte le opere posteriori.",
  "Il rogito può sostituire un titolo edilizio mancante se contiene dichiarazione del venditore di buona fede."
 ],
 "a028": [
  "Le spese sono sempre divise a metà tra usuario esclusivo e condominio coperto, indipendentemente dalle quote.",
  "Le spese gravano per intero sul titolare dell’uso esclusivo se il lastrico svolge anche funzione di copertura.",
  "La quota dei due terzi si divide fra tutti i condòmini, anche quelli non coperti dal lastrico, senza verifiche."
 ],
 "a029": [
  "Il prezzo di sei mesi fa resta valido come stima odierna, purché il notaio abbia registrato l’atto.",
  "Si applica sempre il coefficiente ISTAT generale, anche se il mercato locale ha un andamento differente.",
  "È sufficiente correggere l’inflazione e non serve confrontare posizione, stato o caratteristiche del bene."
 ],
 "a030": [
  "La capitalizzazione del lordo con saggio netto è ammessa quando il contratto prevede indicizzazione ISTAT.",
  "La differenza tra lordo e netto può essere ignorata se entrambi i saggi sono espressi su base annua.",
  "Il reddito lordo deve essere diviso per il tasso netto e soltanto dopo vanno sottratte le spese annuali."
 ],
 "a031": [
  "250.000 euro, impiegando il 4,32% anziché il 4,5% per il rapporto di capitalizzazione.",
  "243.000 euro, sommando al valore capitalizzato un quarto del reddito annuo.",
  "216.000 euro, capitalizzando 10.800 euro con un saggio del 5%."
 ],
 "a032": [
  "96,0 m², applicando il 25% al terrazzo e il 25% anche alla cantina.",
  "94,4 m², ragguagliando la cantina al 15% anziché al 20%.",
  "95,8 m², applicando erroneamente il 22% al terrazzo e il 30% alla cantina."
 ],
 "a033": [
  "170.000 euro, perché si detrae il valore residuo dal valore iniziale dopo un ulteriore 15.000 di danno presunto.",
  "265.000 euro, assumendo il valore della parte residua come indennità della porzione sottratta.",
  "140.000 euro, trascurando nella stima la perdita di utilità della porzione rimasta."
 ],
 "a034": [
  "71,43%, dividendo per il prezzo d’acquisto invece che per la perizia della banca.",
  "75%, applicando uno scarto prudenziale del 5% al finanziamento anziché al valore.",
  "83,33%, usando una perizia ipotetica di 240.000 euro non indicata nei dati."
 ],
 "a035": [
  "Il solo TAN, purché le due offerte prevedano identico numero di rate e la stessa durata.",
  "Il rendimento dei titoli di Stato a pari scadenza, per neutralizzare i diversi costi di istruttoria.",
  "Il tasso di mora contrattuale, che per legge assorbe anche le spese obbligatorie iniziali."
 ],
 "a036": [
  "Il prezzo richiesto va assunto come massimo di stima e i rogiti corretti solo verso l’alto.",
  "Basta scartare il rogito più basso e capitalizzare il prezzo d’offerta al saggio della zona.",
  "La media dei prezzi di richiesta è preferibile agli atti se gli annunci sono più recenti di trenta giorni."
 ],
 "a037": [
  "La verifica strutturale è necessaria soltanto se il muro supera 20 centimetri di spessore finito.",
  "L’autorizzazione edilizia può essere determinata dal mediatore sulla base della sola planimetria catastale.",
  "La dichiarazione del proprietario sulla funzione non portante della parete è sufficiente salvo contestazioni scritte."
 ],
 "a038": [
  "La dichiarazione di successione fiscale equivale sempre a continuità della trascrizione se tutti gli eredi sono indicati.",
  "La voltura catastale prova l’accettazione espressa di tutte le quote e sostituisce la ricerca in Conservatoria.",
  "Un testamento pubblicato rende inutile verificare eventuali disposizioni successive e formalità trascritte."
 ],
 "a039": [
  "Identiche qualità e classi catastali comportano identico valore, salvo correzione percentuale massima del 5%.",
  "L’irrigazione incide soltanto sul reddito agrario fiscale, non sul valore economico del fondo.",
  "Le differenze si compensano automaticamente mediante la medesima rendita dominicale catastale."
 ],
 "a040": [
  "175.000 euro, perché un aumento e una diminuzione dell’8% hanno effetti opposti equivalenti.",
  "174.000 euro, sottraendo l’8% dal solo incremento monetario del primo passaggio.",
  "176.120 euro, sommando l’8% iniziale al risultato anziché applicare fattori moltiplicativi successivi."
 ],
 "a041": [
  "110.000 euro, attualizzando soltanto un anno al 10% semplice.",
  "99.173,55 euro, usando due sconti del 10% sul valore facciale senza capitalizzazione.",
  "100.826,45 euro, dividendo per 1,20 anziché per 1,21 e applicando una rettifica arbitraria."
 ],
 "a042": [
  "Utilizzare solo la rendita catastale e confrontarla con i ricavi lordi, perché è già normalizzata per l’estimo.",
  "Applicare cap rate OMI al canone contrattuale senza verificare vacancy, spese o rischi del conduttore.",
  "Fissare un prezzo medio basato su almeno tre annunci e non controllare date di vendita, contratti o titoli."
 ]
};
 let updated=0;
 for(const q of QUESTIONS){
  if(q.origin!=='original'||q.difficulty!=='avanzato'||!q.editorial)continue;
  const key=q.id.startsWith('esperto-')?q.id.slice(8):q.id.endsWith('-esperto-2026')?q.id.slice(0,-13):null;
  const wrong=key&&HARD_DISTRACTORS[key];
  if(!wrong)continue;
  const answerText=q.options[q.answer];
  const options=wrong.slice();
  options.splice(q.answer,0,answerText);
  q.options=options;
  q.distractorsUpgraded=true;
  updated++;
 }
 const CASES=[
 [
  "fide-01",
  "dir-garanzie",
  "La banca chiede al garante di pagare le rate del mutuo non versate. La fideiussione contiene solo la regola ordinaria dell’art. 1944 c.c. Cosa può eccepire il garante?",
  [
   "La banca deve sempre ottenere una vendita forzata dell’immobile prima di chiedere il pagamento al garante.",
   "La banca non può mai agire sul garante finché il debitore possiede beni aggredibili.",
   "La banca può chiedere direttamente al garante nei limiti dell’obbligazione, non essendo pattuito il beneficio di escussione.",
   "Il garante è obbligato soltanto dopo la cancellazione dell’ipoteca iscritta a favore della banca."
  ],
  2,
  "Art. 1944 c.c.: solidarietà in via generale; beneficio della preventiva escussione soltanto se convenuto."
 ],
 [
  "fide-02",
  "dir-garanzie",
  "Una fideiussione copre obbligazioni bancarie future. Quale elemento è richiesto dall’art. 1938 c.c. per tali obbligazioni?",
  [
   "La durata necessariamente inferiore a cinque anni dall’apertura di credito.",
   "L’indicazione dell’importo massimo garantito per le obbligazioni future.",
   "L’indicazione dell’immobile sul quale è automaticamente iscritta ipoteca.",
   "La sottoscrizione congiunta di almeno due fideiussori per il medesimo debitore."
  ],
  1,
  "Art. 1938 c.c.: la fideiussione per obbligazioni future deve indicare il massimale."
 ],
 [
  "fide-03",
  "dir-garanzie",
  "Il creditore libera volontariamente un’ipoteca accessoria al credito garantito, impedendo così al fideiussore pagante di surrogarsi in quella garanzia. Quale norma è centrale?",
  [
   "Art. 1955 c.c. sulla liberazione del fideiussore quando, per fatto del creditore, diviene impossibile la surrogazione.",
   "Art. 1938 c.c. sull’obbligo di massimo garantito per qualunque garanzia reale.",
   "Art. 1947 c.c. che impone la divisione del debito tra creditore e garante.",
   "Art. 1197 c.c. che trasforma ogni liberazione ipotecaria in datio in solutum."
  ],
  0,
  "Art. 1955 c.c.: possibile liberazione per fatto del creditore che impedisce la surrogazione, ai presupposti previsti."
 ],
 [
  "fide-04",
  "dir-garanzie",
  "Tre fideiussori garantiscono lo stesso debito di 90.000 euro. Nessuno ha pattuito il beneficio di divisione. Quale regola ordinaria opera?",
  [
   "Ogni fideiussore deve soltanto 30.000 euro al creditore, ferma la solidarietà del debitore principale.",
   "Il credito si divide in parti uguali solo se l’obbligazione è garantita anche da ipoteca.",
   "Ciascun garante risponde esclusivamente in proporzione alla propria quota patrimoniale.",
   "Ciascun fideiussore può essere obbligato per l’intero debito garantito nei limiti del proprio impegno."
  ],
  3,
  "Artt. 1946 e 1947 c.c.: regola dell’intero salvo beneficio della divisione convenuto."
 ],
 [
  "fide-05",
  "vendita",
  "Un costruttore chiede 60.000 euro di acconti prima del definitivo per un appartamento non ultimato, in fattispecie soggetta al d.lgs. 122/2005. Quale tutela è pertinente?",
  [
   "Una polizza incendio ordinaria intestata alla banca mutuante in sostituzione della fideiussione.",
   "La fideiussione bancaria o assicurativa a tutela degli acconti secondo la disciplina degli immobili da costruire.",
   "Il solo frazionamento catastale delle future unità, che garantisce automaticamente le somme anticipate.",
   "Una caparra confirmatoria che sostituisce qualsiasi garanzia speciale se superiore al 10%."
  ],
  1,
  "D.lgs. 122/2005 e guida Notariato: fideiussione obbligatoria nelle fattispecie previste."
 ],
 [
  "fide-06",
  "vendita",
  "Alla vendita definitiva di immobile da costruire ricadente nella tutela speciale, quale documento riguarda i gravi difetti costruttivi successivi al trasferimento?",
  [
   "La stessa fideiussione sugli acconti, che continua automaticamente a coprire ogni vizio per dieci anni.",
   "Il solo APE, purché redatto da un certificatore indipendente.",
   "La polizza assicurativa indennitaria decennale prevista nei casi e modi di legge.",
   "Il certificato di destinazione urbanistica, che sostituisce la polizza anche sui fabbricati."
  ],
  2,
  "Guida Notariato e d.lgs. 122/2005: polizza decennale postuma distinta dalla fideiussione sugli acconti."
 ],
 [
  "fide-07",
  "locazioni",
  "Il locatore chiede tre mensilità come deposito cauzionale e una garanzia personale del genitore per il canone. Quale affermazione è corretta?",
  [
   "Sono strumenti diversi: il deposito è somma consegnata, la fideiussione è obbligazione personale nei limiti del patto.",
   "La fideiussione del genitore è una quarta mensilità di cauzione e si converte automaticamente in denaro.",
   "Il deposito cauzionale diventa fideiussione se viene conservato sul conto personale del locatore.",
   "Il garante acquisisce un diritto reale sull’immobile locato sino alla scadenza del contratto."
  ],
  0,
  "Deposito cauzionale e fideiussione sono strutture diverse; limiti e durata da verificare separatamente."
 ],
 [
  "fide-08",
  "obbligazioni",
  "Il compratore di una casa si accolla il mutuo residuo. La banca non libera espressamente il venditore. Quale rischio permane?",
  [
   "Il venditore perde la proprietà ma non può più essere chiamato dalla banca perché l’accollo è sempre liberatorio.",
   "L’ipoteca si estingue perché il debito è stato assunto da un soggetto diverso.",
   "Il debito si trasforma automaticamente in fideiussione a carico del venditore con beneficio di escussione.",
   "Il venditore può rimanere obbligato verso la banca; occorre esaminare struttura ed effetti dell’accollo."
  ],
  3,
  "Art. 1273 c.c.: l’accollo non implica sempre liberazione del debitore originario."
 ],
 [
  "fide-09",
  "eco-bilancio",
  "Un’impresa ha 150.000 euro di flusso disponibile per il servizio del debito e 125.000 euro di rate complessive nell’anno. Quale DSCR semplificato risulta?",
  [
   "0,83, dividendo il servizio del debito per il flusso disponibile.",
   "1,20, dividendo flusso disponibile per servizio del debito.",
   "1,25, aggiungendo al rapporto la quota interessi non specificata.",
   "2,00, poiché la differenza di 25.000 euro rappresenta un secondo flusso."
  ],
  1,
  "DSCR = 150.000/125.000 = 1,20."
 ],
 [
  "fide-10",
  "eco-investimenti",
  "Un investimento immobiliare costa 250.000 euro. Il valore attuale dei flussi futuri è 280.000 euro, prima di altri costi. Quale VAN semplificato risulta?",
  [
   "+30.000 euro, come differenza tra flussi attualizzati e investimento.",
   "+280.000 euro, perché il valore attuale dei ricavi coincide con il VAN.",
   "−30.000 euro, perché l’esborso va necessariamente sottratto due volte.",
   "+530.000 euro, somma dell’investimento e del valore attuale dei flussi."
  ],
  0,
  "VAN semplificato = 280.000 - 250.000 = +30.000 euro."
 ],
 [
  "fide-11",
  "eco-investimenti",
  "Un immobile rende 18.000 euro annui di canoni lordi, con vacancy attesa 1.000 euro e spese non recuperabili 2.000 euro. Con cap rate netto 5%, quale valore teorico si ottiene?",
  [
   "360.000 euro, capitalizzando il lordo senza rettifiche.",
   "300.000 euro, capitalizzando reddito netto normalizzato di 15.000 euro.",
   "340.000 euro, sottraendo la vacancy ma non le spese.",
   "320.000 euro, deducendo solamente una parte dei costi."
  ],
  1,
  "Reddito netto 18.000 - 1.000 - 2.000 = 15.000; 15.000/0,05=300.000."
 ],
 [
  "fide-12",
  "imm-documenti",
  "Un bene risulta regolare in visura catastale ma non è stato rinvenuto il titolo edilizio dell’ampliamento. Quale verifica è metodologicamente necessaria?",
  [
   "Il DOCFA sanante, sufficiente se la variazione è stata approvata dall’Agenzia delle Entrate.",
   "Il solo confronto fra classe catastale e APE per confermare lo stato legittimo.",
   "Un accertamento dello stato legittimo e dei titoli edilizi da parte del tecnico, separato dal Catasto.",
   "Il controllo della rendita fiscale perché la variazione di rendita legittima sempre l’opera."
  ],
  2,
  "La conformità catastale non sostituisce la verifica urbanistico-edilizia."
 ],
 [
  "fide-13",
  "dir-garanzie",
  "Il debitore dona un bene a un familiare, pregiudicando il soddisfacimento del creditore. Se sussistono i presupposti dell’azione revocatoria ordinaria, qual è l’effetto tipico?",
  [
   "La nullità assoluta della donazione nei confronti di tutti, senza pronuncia giudiziale.",
   "L’acquisto della proprietà del bene da parte del creditore istante.",
   "La risoluzione del contratto di donazione per impossibilità sopravvenuta.",
   "L’inefficacia relativa dell’atto nei confronti del creditore che agisce, secondo le condizioni di legge."
  ],
  3,
  "Art. 2901 c.c.: inefficacia relativa, non automatica nullità del trasferimento."
 ],
 [
  "fide-14",
  "dir-crisi",
  "Un debitore persona fisica è ammesso all’esdebitazione nei casi del CCII. Che cosa NON si può concludere senza ulteriori verifiche?",
  [
   "Che l’effetto liberatorio sia soggetto alla disciplina e ai limiti stabiliti dalla legge.",
   "Che tutti i fideiussori terzi siano automaticamente liberati per ogni debito garantito.",
   "Che le categorie di debiti escluse debbano essere verificate sulla base della procedura.",
   "Che l’effetto riguardi la posizione del debitore beneficiario secondo il provvedimento."
  ],
  1,
  "L’esdebitazione del debitore non comporta automaticamente liberazione di ogni garante terzo."
 ],
 [
  "fide-15",
  "imm-estimo-approfondito",
  "Un comparabile venduto a 310.000 euro presenta un box che il subject non possiede; il contributo del box nel mercato è stimato 20.000 euro. Quale prima rettifica è coerente?",
  [
   "Aumentare il prezzo comparabile a 330.000 euro perché il subject è privo del box.",
   "Diminuire il prezzo comparabile a 290.000 euro, a parità di altri fattori.",
   "Considerare 310.000 euro invariati perché il box non influisce sul valore unitario.",
   "Moltiplicare 310.000 per il 20% per valutare direttamente l’immobile senza box."
  ],
  1,
  "Nel confronto dal comparabile al subject senza box si sottrae il contributo del box: 310.000 - 20.000."
 ],
 [
  "fide-16",
  "eco-credito",
  "Un mutuo è di 210.000 euro; la perizia è 280.000, la rata mensile 1.050 euro e il reddito netto mensile 3.500 euro. Quali sono LTV e rapporto rata/reddito semplificato?",
  [
   "LTV 75% e rapporto rata/reddito 30%.",
   "LTV 30% e rapporto rata/reddito 75%.",
   "LTV 80% e rapporto rata/reddito 30%, perché si presume il prezzo maggiore della perizia.",
   "LTV 75% e rapporto rata/reddito 25%, ignorando la quota interessi."
  ],
  0,
  "LTV=210.000/280.000=75%; rata/reddito=1.050/3.500=30%."
 ],
 [
  "fide-17",
  "dir-garanzie",
  "Il fideiussore paga integralmente il debito garantito. Quale coppia di strumenti descrive il suo possibile rapporto verso il debitore principale?",
  [
   "Azione revocatoria e trascrizione della sentenza di riduzione.",
   "Beneficio della divisione e domanda di annullamento del mutuo.",
   "Surrogazione nei diritti del creditore e regresso secondo gli artt. 1949-1950 c.c.",
   "Compensazione automatica con ogni credito del debitore verso terzi."
  ],
  2,
  "Artt. 1949-1950 c.c.: subentro nei diritti del creditore e rimborso nei rapporti interni."
 ],
 [
  "fide-18",
  "imm-estimo-legale3",
  "Un usufrutto vitalizio grava su casa in vendita. Quale affermazione distingue correttamente stima fiscale e stima di mercato della nuda proprietà?",
  [
   "I coefficienti fiscali costituiscono sempre valore di mercato vincolante per ogni compravendita.",
   "La nuda proprietà vale sempre esattamente metà della piena proprietà in assenza di stima bancaria.",
   "La stima di mercato ignora durata e godimento perché la nuda proprietà è diritto reale.",
   "Il valore fiscale tabellare e il prezzo di mercato possono differire per finalità, metodi e caratteristiche concrete."
  ],
  3,
  "La valutazione fiscale dell’usufrutto utilizza criteri normativi, che non coincidono necessariamente con il mercato."
 ]
];
 let added=0;
 for(const [id,module,stem,options,answer,why] of CASES){
  const qid='esperto-profondo-2026-'+id;
  if(QUESTIONS.some(q=>q.id===qid))continue;
  const q=Q(qid,module,stem,options,answer,why,false);
  q.origin='original';q.difficulty='avanzato';q.editorial=true;
  QUESTIONS.push(q);added++;
 }
 if(typeof window!=='undefined')window.DISTRACTOR_UPGRADE_STATS={updated,added};
})();

/* Risposte di livello intermedio per le altre 113 domande didattiche originali.
 * Non si interviene su domande, alternative o risposte delle Camere di commercio. */
(function(){
 const SUBJECT_DISTRACTORS={
 "n03": [
  null,
  "Sei mesi dalla conclusione dell’affare, salvo accordo scritto.",
  "Due anni dalla comunicazione dell’accettazione della proposta.",
  "Cinque anni dalla stipula del preliminare, salvo interruzione."
 ],
 "n05": [
  null,
  "Sì, purché il corso abilitante sia stato riconosciuto dalla Regione.",
  "Sì, purché sia già stata stipulata una polizza di responsabilità civile.",
  "No, ma basta comunicare informalmente l’avvio dell’attività alla Camera di commercio."
 ],
 "n06": [
  null,
  "Dal concepimento, senza eccezioni per i diritti subordinati alla nascita.",
  "Dalla nascita solo dopo l’iscrizione anagrafica del neonato.",
  "Al compimento della maggiore età, salvo emancipazione."
 ],
 "n09": [
  null,
  "Capacità giuridica, perché coincide con l’idoneità a negoziare personalmente.",
  "Legittimazione a contrarre, sempre coincidente con la maggiore età.",
  "Capacità naturale, sufficiente da sola per qualsiasi contratto immobiliare."
 ],
 "n12": [
  null,
  "Dieci anni, termine previsto per tutti gli immobili posseduti in buona fede.",
  "Quindici anni, con possesso pubblico e ininterrotto.",
  "Trent’anni, salvo titolo astrattamente idoneo."
 ],
 "n13": [
  null,
  "La proprietà piena privata del solo diritto di abitazione del coniuge.",
  "Il diritto reale temporaneo di usare e godere un immobile altrui.",
  "La proprietà gravata necessariamente da una servitù di passaggio."
 ],
 "n15": [
  null,
  "Ipoteca volontaria costituita da un soggetto diverso dal debitore.",
  "Pegno mobiliare con consegna del bene al creditore.",
  "Privilegio speciale previsto dalla legge a tutela di un credito."
 ],
 "n16": [
  null,
  "Un diritto reale di godimento su un bene immobile altrui.",
  "Un diritto personale di credito che attribuisce solo prelazione contrattuale.",
  "Un vincolo di indisponibilità valido esclusivamente tra le parti."
 ],
 "n21": [
  null,
  "Art. 1386 c.c., che disciplina la caparra penitenziale.",
  "Art. 1453 c.c., che regola la risoluzione per inadempimento.",
  "Art. 1382 c.c., relativo alla clausola penale."
 ],
 "n24": [
  null,
  "Scrittura autenticata sempre e necessariamente da notaio, anche tra privati.",
  "Atto pubblico obbligatorio già al momento dell’accordo tra le parti.",
  "Forma libera per il preliminare, ma scritta soltanto per il rogito."
 ],
 "n25": [
  null,
  "La riduzione del prezzo per un vizio materiale occulto del bene.",
  "La risoluzione per inesatto adempimento dell’obbligo di consegna.",
  "Il pregiudizio derivante da un abuso edilizio sanabile dopo il rogito."
 ],
 "n29": [
  null,
  "Quattro anni più due, con rinnovo automatico salvo disdetta.",
  "Tre anni più tre, senza distinzione tra prima durata e proroga.",
  "Cinque anni più due, salvo diverso accordo territoriale."
 ],
 "n31": [
  null,
  "Cinque anni più cinque, derogabile liberamente dalle parti.",
  "Sei anni senza rinnovo, salvo nuovo accordo scritto.",
  "Nove anni più nove per tutti i locali aperti al pubblico."
 ],
 "n33": [
  null,
  "Redatto a mano, ma la data può essere apposta da un testimone.",
  "Sottoscritto personalmente ma validamente dattiloscritto.",
  "Scritto a mano e datato, ma senza necessità di firma finale."
 ],
 "n34": [
  null,
  "Separazione dei beni finché la coppia non stipuli convenzione notarile.",
  "Comunione ordinaria su tutti i beni, inclusi quelli personali anteriori.",
  "Comunione dei soli redditi, senza acquisizione degli altri beni."
 ],
 "n36": [
  null,
  "L’insieme dei rapporti giuridici dell’imprenditore, esclusi beni e attrezzature.",
  "Il soggetto che esercita professionalmente l’attività organizzata.",
  "Il solo avviamento commerciale indipendentemente dai beni organizzati."
 ],
 "n38": [
  null,
  "Illimitatamente, ma soltanto in proporzione alle quote di partecipazione.",
  "Solidalmente solo per i debiti contratti personalmente dal singolo socio.",
  "Limitatamente al conferimento, salvo garanzie personali aggiuntive."
 ],
 "n39": [
  "No: l’azienda è un complesso organizzato; l’immobile può essere un bene distinto.",
  "Sì, ogni cessione d’azienda comprende necessariamente la proprietà del fabbricato.",
  "Sì, quando nell’immobile si svolge l’attività principale dell’impresa.",
  "No, perché la cessione d’azienda è possibile soltanto se l’immobile è in locazione."
 ],
 "n41": [
  null,
  "Il 2%, perché l’imposta proporzionale è sempre uguale per le abitazioni.",
  "Il 10%, in quanto coincide con l’aliquota IVA delle cessioni imponibili.",
  "Il 9% soltanto sugli immobili di categoria catastale A/1."
 ],
 "n42": [
  null,
  "Il 2%, pari all’aliquota di registro agevolata.",
  "Il 10%, ordinariamente previsto per cessioni imponibili non agevolate.",
  "Il 9%, corrispondente alla tassazione ordinaria a registro."
 ],
 "n45": [
  null,
  "Il nudo proprietario, in quanto titolare del diritto dominicale.",
  "Il conduttore se il contratto supera nove anni.",
  "Il proprietario e l’usufruttuario sempre in parti uguali."
 ],
 "n47": [
  null,
  "Il 10%, applicabile a ogni contratto abitativo senza eccezioni.",
  "Il 20%, pari all’aliquota ordinaria ridotta di un punto.",
  "Il 23%, corrispondente allo scaglione iniziale dell’IRPEF."
 ],
 "n49": [
  null,
  "D.lgs. 90/2017, inteso come testo unico originario antiriciclaggio.",
  "D.lgs. 141/2010, che disciplina in via generale l’adeguata verifica.",
  "D.lgs. 122/2005, relativo alle garanzie degli immobili da costruire."
 ],
 "n51": [
  "No: attesta la prestazione energetica, non lo stato legittimo edilizio.",
  "Sì, se contiene un sopralluogo eseguito da un certificatore abilitato.",
  "Sì, limitatamente alle difformità interne che non modificano la sagoma.",
  "Sì, quando l’attestato è depositato in un catasto energetico regionale."
 ],
 "n52": [
  null,
  "Garantire il pagamento delle provvigioni anche se il cliente è insolvente.",
  "Sostituire le verifiche documentali e la diligenza del mediatore.",
  "Rendere valide le operazioni compiute in assenza dei requisiti abilitativi."
 ],
 "t02": [
  null,
  "Area urbana priva di rendita, rappresentata nella planimetria catastale.",
  "Unità collabente, non più idonea all’ordinaria utilizzazione.",
  "Fabbricato in corso di costruzione, ancora privo di rendita."
 ],
 "t03": [
  null,
  "Magazzini e locali di deposito, senza autonoma destinazione abitativa.",
  "Negozi e botteghe destinati alla vendita al dettaglio.",
  "Laboratori per arti e mestieri, anche se dotati di autorimessa."
 ],
 "t04": [
  null,
  "Il numero del foglio, che individua autonomamente l’appartamento.",
  "La rendita catastale, unica per ogni unità della stessa particella.",
  "Il codice catastale del Comune, differente per ogni subalterno."
 ],
 "t05": [
  null,
  "PREGEO, ordinariamente utilizzato per aggiornare planimetrie interne di fabbricati.",
  "Voltura catastale, che sostituisce ogni denuncia di variazione edilizia.",
  "Trascrizione immobiliare, che aggiorna direttamente consistenza e rendita."
 ],
 "t07": [
  null,
  "Reddito effettivo e reddito figurativo della coltivazione.",
  "Reddito del proprietario e canone dichiarato dal conduttore.",
  "Reddito imponibile e valore venale del fondo agricolo."
 ],
 "t08": [
  null,
  "1.000 metri quadrati, pari a dieci are.",
  "100.000 metri quadrati, pari a cento are.",
  "10.000 metri lineari, indipendentemente dalla forma della particella."
 ],
 "t10": [
  "No: la qualità catastale non determina da sola la destinazione urbanistica.",
  "Sì, salvo che la superficie superi un ettaro.",
  "Sì, fino all’approvazione di un piano attuativo formalmente convenzionato.",
  "No, perché tutti i terreni seminativi sono edificabili senza vincoli."
 ],
 "t11": [
  null,
  "Mediante trascrizione del contratto di mutuo nei registri immobiliari.",
  "Mediante semplice annotazione della garanzia nella visura catastale.",
  "Mediante deposito presso l’Agenzia delle Entrate dell’atto privato."
 ],
 "t13": [
  null,
  "Costituire il diritto di proprietà che altrimenti rimarrebbe inesistente tra le parti.",
  "Sostituire la validità della forma scritta richiesta per la vendita.",
  "Attribuire al compratore una garanzia personale contro i vizi occulti."
 ],
 "t15": [
  null,
  "D.lgs. 42/2004, relativo principalmente ai beni culturali e paesaggistici.",
  "Legge 10/1977, ancora unico testo completo della disciplina edilizia.",
  "D.lgs. 192/2005, centrato sul rendimento energetico degli edifici."
 ],
 "t16": [
  null,
  "Piano Generale Territoriale con efficacia unicamente catastale.",
  "Programma di Gestione Tributaria adottato dal singolo Comune.",
  "Piano Generale dei Trasporti che sostituisce gli strumenti urbanistici."
 ],
 "t18": [
  "No: prestazione energetica e condizioni di agibilità seguono verifiche distinte.",
  "Sì, perché la classe energetica A4 certifica anche l’abitabilità.",
  "Sì, quando l’edificio ha ottenuto la segnalazione certificata di agibilità.",
  "No, perché l’APE riguarda esclusivamente la regolarità catastale."
 ],
 "t20": [
  null,
  "La quota indivisa di proprietà del suolo posseduta da ciascun residente.",
  "Il reddito dominicale proporzionale delle singole unità catastali.",
  "La superficie utile calpestabile uguale alla superficie commerciale."
 ],
 "t22": [
  "No: le maggioranze variano secondo delibera, convocazione e legge.",
  "Sì, la maggioranza dei presenti è sempre sufficiente.",
  "No, perché è sufficiente il consenso dell’amministratore per lavori straordinari.",
  "Sì, salvo soltanto le delibere relative alle spese di riscaldamento."
 ],
 "t24": [
  null,
  "Il costo storico di costruzione rivalutato indipendentemente dal mercato.",
  "La capitalizzazione della rendita catastale con un coefficiente unico.",
  "La media aritmetica delle richieste pubblicitarie senza rettifiche."
 ],
 "t26": [
  null,
  "Prezzi certi di singole transazioni notarili, sempre riferiti a ogni stabile.",
  "Valori vincolanti per gli atti fiscali e per qualsiasi perizia bancaria.",
  "Rendite catastali già aggiornate automaticamente al valore di mercato."
 ],
 "t30": [
  null,
  "Rendita × 1,05 × 120, coefficiente ordinariamente associato a ipotesi diverse.",
  "Rendita × 1,10 × 110, rivalutando la rendita direttamente del 10%.",
  "Rendita × 1,05 × 160, moltiplicatore rilevante in altri contesti fiscali."
 ],
 "t34": [
  null,
  "Tasso fisso della banca e imposta sostitutiva, sommati ogni trimestre.",
  "Solo lo spread, invariabile per tutta la durata del mutuo.",
  "Parametro di riferimento meno spread, a prescindere dal segno del tasso."
 ],
 "t35": [
  null,
  "Il valore massimo OMI della città applicato uniformemente a ogni zona.",
  "La rendita rivalutata dell’immobile senza confronti di mercato.",
  "La media dei soli annunci senza distinguere immobili venduti e invenduti."
 ],
 "t36": [
  null,
  "Trimestrale, in coincidenza con ogni revisione del Catasto.",
  "Annuale, mediante una pubblicazione riferita all’intero anno solare.",
  "Mensile, come gli indici dei prezzi al consumo."
 ],
 "t38": [
  null,
  "Tramezzo non portante in laterizio che separa due vani.",
  "Controsoffitto fissato alla soletta senza funzione strutturale.",
  "Sottofondo del pavimento che distribuisce soltanto le finiture."
 ],
 "t39": [
  null,
  "La regolarità edilizia delle opere e la loro rispondenza ai titoli.",
  "Il collaudo statico e la conformità sismica di tutte le strutture.",
  "La conformità catastale e l’assenza di iscrizioni ipotecarie."
 ],
 "t40": [
  null,
  "A3, quale vertice delle classi in base ai consumi ordinari.",
  "A1, che è la prima classe in ordine alfabetico.",
  "B, perché le classi A si riferiscono soltanto a edifici nuovi."
 ],
 "t41": [
  null,
  "La sola dichiarazione fiscale di successione, che sostituisce ogni titolo.",
  "La visura attuale, senza necessità di ricostruire la provenienza.",
  "Il certificato di morte, che costituisce da solo piena prova della trascrizione."
 ],
 "t44": [
  null,
  "Solo il preventivo delle spese dell’esercizio corrente, senza consuntivo.",
  "Il verbale assembleare più recente, evitando di consultare quelli precedenti.",
  "La sola liberatoria dell’amministratore, che elimina le future obbligazioni."
 ],
 "t45": [
  null,
  "Il reddito ordinario attribuito all’attività organizzata dal coltivatore.",
  "La produzione agricola effettiva dichiarata nel periodo d’imposta.",
  "Il canone di affitto agrario contrattualmente percepito ogni anno."
 ],
 "t47": [
  null,
  "La sola rendita catastale rivalutata ai fini IMU.",
  "L’appartenenza del fondo a una stessa particella con altri terreni.",
  "Il valore venale di fabbricati urbani non pertinenti al fondo."
 ],
 "t48": [
  "No: reddito catastale e valore venale perseguono finalità differenti.",
  "Sì, quando il fondo non è condotto direttamente dal proprietario.",
  "Sì, poiché il reddito agrario è già un valore capitale di mercato.",
  "No, perché tutti i terreni agricoli sono stimati solo in base agli indici OMI."
 ],
 "t50": [
  null,
  "190.000 euro, applicando una riduzione tecnica automatica del 5%.",
  "210.000 euro, utilizzando come coefficiente il 105%.",
  "220.000 euro, applicando una rivalutazione standard del 10%."
 ],
 "t51": [
  null,
  "8.100 euro, risultante da un’incidenza del 4,5%.",
  "9.900 euro, corrispondente a un’incidenza del 5,5%.",
  "10.800 euro, corrispondente a un’incidenza del 6%."
 ],
 "t53": [
  null,
  "Formula normativa, risposta apodittica e omissione delle eccezioni.",
  "Definizione generica, citazione del caso e salto della regola giuridica.",
  "Solo esposizione del risultato finale, senza esplicitare presupposti."
 ],
 "t54": [
  "Sì, ma l’acquirente deve valutare contratto e opponibilità della locazione.",
  "No, finché il locatario non abbia comunicato la volontà di lasciare la casa.",
  "Sì, ma la locazione si estingue automaticamente alla stipula del rogito.",
  "No, perché il locatario ha un diritto di veto sulla compravendita."
 ],
 "t55": [
  null,
  "Indicando il prezzo medio degli annunci e omettendo i correttivi.",
  "Applicando la quotazione OMI massima senza definire un segmento.",
  "Citare una perizia bancaria come valore immutabile nel tempo."
 ],
 "t56": [
  null,
  "Ripetere soltanto la risposta corretta senza recuperare la regola.",
  "Escludere per sempre il quesito per evitare di abbassare la media.",
  "Memorizzare la posizione della lettera anziché il contenuto della risposta."
 ],
 "th001": [
  null,
  "Direttiva, efficace in tutti i dettagli senza recepimento nazionale.",
  "Decisione, vincolante per qualunque soggetto anche non destinatario.",
  "Raccomandazione, immediatamente cogente per Stati e privati."
 ],
 "th002": [
  null,
  "Perde efficacia anche sui rapporti già esauriti, salvo accordi privati.",
  "Continua sempre a disciplinare tutti i fatti successivi all’abrogazione.",
  "È automaticamente nulla sin dall’entrata in vigore originaria."
 ],
 "th003": [
  null,
  "Un’obbligazione del rappresentante a concludere necessariamente il contratto.",
  "La proprietà dei beni del rappresentato nei limiti stabiliti dal mandato.",
  "Un potere di amministrazione di fatto senza rilevanza verso i terzi."
 ],
 "th004": [
  null,
  "Può ereditare solo se raggiunge la maggiore età prima della dichiarazione di successione.",
  "È proprietaria, ma può alienare il bene mediante un consenso informale dei genitori.",
  "Non può acquistare diritti reali prima dell’acquisizione della capacità di agire."
 ],
 "th005": [
  null,
  "1223 c.c., che indica la regola generale di imputazione dell’inadempimento.",
  "2043 c.c., che disciplina in via esclusiva ogni responsabilità contrattuale.",
  "1453 c.c., norma costitutiva dell’obbligazione risarcitoria del debitore."
 ],
 "th006": [
  null,
  "Correttezza limitatamente alla fase di esecuzione dell’accordo definitivo.",
  "Diligenza qualificata dell’imprenditore, a prescindere dalle trattative.",
  "Obbligo di concludere il contratto ogni volta che si raggiunge un accordo di massima."
 ],
 "th007": [
  null,
  "La forma scritta a pena di nullità per qualsiasi concessione abitativa.",
  "La restituzione del bene soltanto dopo dieci anni dal conferimento.",
  "L’acquisto automatico della proprietà del bene da parte del comodatario."
 ],
 "th008": [
  null,
  "In nome del mandante, ma senza che gli effetti siano imputati al mandante.",
  "In nome proprio e per conto proprio, con obbligo di remunerare il mandante.",
  "In nome altrui per conto proprio, mediante semplice dichiarazione orale."
 ],
 "th009": [
  null,
  "La compresenza di due comproprietari dello stesso appartamento, senza parti comuni.",
  "L’esistenza di unità tutte di proprietà collettiva e nessuna esclusiva.",
  "La costituzione formale mediante rogito, anche se le parti comuni non esistono."
 ],
 "th010": [
  null,
  "Possessore a titolo di proprietario per effetto della consegna delle chiavi.",
  "Detentore qualificato solo quando il canone è stato integralmente pagato.",
  "Titolare di un diritto reale di usufrutto per tutta la durata della locazione."
 ],
 "th011": [
  "No: la dichiarazione fiscale non equivale di per sé all’accettazione dell’eredità.",
  "Sì, presentandola si acquisisce sempre la qualità di erede senza altri presupposti.",
  "Sì, a condizione che il Fisco abbia completato la voltura catastale.",
  "No, perché l’eredità non può essere accettata prima della pubblicazione del testamento."
 ],
 "th012": [
  null,
  "Tutti i beni dei coniugi, compresi necessariamente quelli ricevuti per successione.",
  "Solo i beni acquistati in comunione ordinaria con quote indicate nell’atto.",
  "I soli frutti civili riscossi da entrambi, esclusi gli acquisti immobiliari."
 ],
 "th013": [
  null,
  "Il reddito aumenta del 5% e il livello generale dei prezzi aumenta del 3%.",
  "Il reddito nominale resta costante e il livello generale dei prezzi diminuisce.",
  "Il reddito aumenta del 4% mentre i prezzi aumentano del 2%."
 ],
 "th014": [
  "No: richiesto, pattuito e realizzato sono grandezze di mercato diverse.",
  "Sì, i prezzi pubblicizzati costituiscono il valore probatorio della vendita.",
  "Sì, quando l’immobile è rimasto pubblicizzato più di sei mesi.",
  "No, perché i prezzi richiesti non possono essere utilizzati neppure come indizi."
 ],
 "th015": [
  null,
  "Capitale investito netto, sempre coincidente con il valore immobiliare.",
  "Margine operativo lordo dopo la deduzione degli ammortamenti.",
  "Risultato d’esercizio prima di imposte e oneri finanziari."
 ],
 "th016": [
  null,
  "18 affari, dividendo i costi fissi per il margine dopo un abbattimento del 10%.",
  "23 affari, considerando un incremento automatico dei costi indiretti.",
  "30 affari, dividendo 60.000 euro per un ricavo medio di 2.000 euro."
 ],
 "th017": [
  null,
  "10.600 euro, con interesse semplice applicato per due anni.",
  "10.900 euro, sommando un premio cumulativo di nove punti percentuali.",
  "10.618 euro, capitalizzando due volte un tasso del 3,04%."
 ],
 "th018": [
  null,
  "Il tasso nominale annuo della sola quota interessi, esclusi tutti gli altri costi.",
  "Un indice delle garanzie patrimoniali richieste al debitore dalla banca.",
  "Il tasso interbancario usato come base variabile per calcolare lo spread."
 ],
 "adv001": [
  null,
  "3,72 m, supponendo un margine grafico di 0,1 cm.",
  "3,82 m, convertendo direttamente 1,91 cm.",
  "4,02 m, con una maggiorazione lineare di 0,05 cm."
 ],
 "adv002": [
  null,
  "Il denominatore della scala, applicato una sola volta anche alle aree.",
  "Il cubo del fattore di scala, perché il foglio raffigura un immobile.",
  "Il rapporto tra perimetro disegnato e superficie reale in metri."
 ],
 "adv003": [
  null,
  "450 m³, sottraendo una tolleranza tecnica del 10%.",
  "550 m³, applicando una maggiorazione uniforme del 10%.",
  "1.000 m³, moltiplicando l’indice per il numero di livelli ipotizzati."
 ],
 "adv004": [
  "No: può dipendere da prescrizioni, piani attuativi e opere di urbanizzazione.",
  "Sì, se l’indice edificatorio è numericamente superiore a zero.",
  "Sì, salvo soltanto l’esistenza di vincoli paesaggistici non derogabili.",
  "No, perché i terreni in espansione non sono mai edificabili in futuro."
 ],
 "adv005": [
  null,
  "5 m² equivalenti, applicando un ragguaglio del 25%.",
  "7 m² equivalenti, applicando un ragguaglio del 35%.",
  "8 m² equivalenti, applicando un ragguaglio del 40%."
 ],
 "adv006": [
  null,
  "Il valore risultante dalle sole quote condominiali, senza indicare il metodo.",
  "Il prezzo medio al metro quadro della zona, che determina da solo la superficie.",
  "Il coefficiente convenzionale della categoria catastale, indipendentemente dalle pertinenze."
 ],
 "adv007": [
  "No: sono possibili condensa, ponti termici e altre cause da accertare.",
  "Sì, se la muffa si presenta prevalentemente sulle pareti perimetrali.",
  "Sì, se l’umidità appare dopo un periodo di piogge intense.",
  "No, perché la muffa dipende sempre e soltanto dalla ventilazione interna."
 ],
 "adv008": [
  "No: certificazione energetica e regolarità urbanistico-edilizia sono piani diversi.",
  "Sì, perché il sopralluogo dell’esperto comporta anche verifica dei titoli edilizi.",
  "Sì, quando l’APE è registrato nel catasto energetico regionale.",
  "No, perché l’APE è rilasciato solo per unità già urbanisticamente conformi."
 ],
 "adv009": [
  null,
  "Potenza media moltiplicata per il solo fattore di rendimento.",
  "Energia divisa per la durata di utilizzo, espressa in kW.",
  "Potenza apparente di un impianto, espressa in kVA."
 ],
 "adv010": [
  "No: la prestazione dipende dall’involucro, dagli impianti e dal calcolo complessivo.",
  "Sì, se la pompa di calore utilizza energia elettrica da fonti rinnovabili.",
  "Sì, qualora l’impianto sostituisca integralmente la caldaia preesistente.",
  "No, perché la classe A può essere raggiunta soltanto con riscaldamento centralizzato."
 ],
 "adv011": [
  null,
  "Il costo di ripristino rivalutato con l’indice generale dei prezzi.",
  "La rendita catastale prima e dopo la denuncia del sinistro.",
  "Il prezzo originario di acquisto al netto dei soli danni estetici."
 ],
 "adv012": [
  null,
  "I soli costi diretti di costruzione, escludendo margine e oneri.",
  "L’imposta di registro della sola vendita futura, non gli altri costi.",
  "Unicamente il valore catastale attuale del suolo, senza costi finanziari."
 ],
 "adv013": [
  null,
  "Aumentato del valore del box perché aumenta la dotazione del comparabile.",
  "Mantenuto invariato quando entrambi gli immobili appartengono alla stessa zona.",
  "Diminuito in misura pari all’intero costo storico della costruzione del box."
 ],
 "adv014": [
  "No: OMI dà intervalli orientativi, non sostituisce l’analisi del bene.",
  "Sì, quando l’immobile si trova in una zona OMI univoca.",
  "Sì, a condizione che la superficie commerciale sia misurata con precisione.",
  "No, perché le quotazioni OMI non possono essere neppure usate come riferimento."
 ],
 "adv015": [
  "No: il reddito dominicale ha finalità catastali e non coincide col prezzo.",
  "Sì, se il reddito è attualizzato usando il tasso di sconto della BCE.",
  "Sì, quando il proprietario esercita direttamente un’attività agricola.",
  "No, perché il valore di mercato è sempre uguale al reddito agrario."
 ],
 "adv016": [
  "Sì: l’irrigazione può influire su produttività e valore in funzione del mercato.",
  "No, perché rilevano solo estensione e classe catastale del fondo.",
  "Sì, ma soltanto se è esistente un pozzo formalmente accatastato.",
  "No, perché l’acqua viene considerata esclusivamente nel reddito dominicale."
 ],
 "adv017": [
  "No: il Catasto e la pubblicità immobiliare assolvono funzioni differenti.",
  "Sì, quando la visura risulta aggiornata da meno di trenta giorni.",
  "Sì, nei casi in cui tutte le intestazioni catastali sono state volturate.",
  "No, perché le iscrizioni ipotecarie sono verificabili soltanto dal notaio al rogito."
 ],
 "adv018": [
  "No: conformità dell’impianto e regolarità edilizia sono verifiche distinte.",
  "Sì, purché sia stata firmata da impresa installatrice abilitata.",
  "Sì, se l’impianto risulta realizzato dopo la data del titolo edilizio.",
  "No, perché l’attestato riguarda solo la classe energetica dell’edificio."
 ],
 "adv019": [
  null,
  "Una crescita del potere d’acquisto di circa un punto percentuale.",
  "Una riduzione del potere d’acquisto di circa cinque punti percentuali.",
  "Una variazione reale nulla, essendo entrambi i valori positivi."
 ],
 "adv020": [
  "No: il TAN comprende condizioni specifiche del finanziamento, non coincide automaticamente col tasso BCE.",
  "Sì, se il mutuo ha una durata non superiore a venti anni.",
  "Sì, nei mutui variabili indicizzati all’Euribor.",
  "No, perché il TAN è sempre inferiore al tasso BCE per definizione."
 ],
 "adv021": [
  null,
  "−0,5, dividendo la variazione del prezzo per la domanda.",
  "+2, attribuendo il segno positivo alla variazione di prezzo.",
  "−3, ottenuto sottraendo percentualmente domanda e prezzo."
 ],
 "adv022": [
  null,
  "Perché la quotazione OMI determina direttamente il prezzo di ogni singolo bene.",
  "Perché il prezzo dipende esclusivamente dalla superficie catastale.",
  "Perché edifici con la stessa categoria catastale hanno sempre stesso valore."
 ],
 "adv023": [
  null,
  "1.200 euro, applicando la capitalizzazione semplice.",
  "1.220 euro, applicando il 10% sul montante aumentato di due punti.",
  "1.210 euro soltanto se gli interessi vengono corrisposti mensilmente."
 ],
 "adv024": [
  "No: a parità di flusso e durata, aumenta il tasso e diminuisce il valore attuale.",
  "Sì, perché l’aumento del tasso di sconto accresce il rendimento richiesto.",
  "Sì, ma soltanto se il flusso è incassato oltre cinque anni.",
  "No, perché il valore attuale rimane sempre costante al variare del tasso."
 ],
 "adv025": [
  null,
  "5%, calcolando il rendimento sul prezzo al netto di spese ipotetiche.",
  "5,4%, dividendo il canone per un valore rettificato di 200.000 euro.",
  "6,5%, includendo una plusvalenza attesa non specificata nel quesito."
 ],
 "adv026": [
  null,
  "Il capitale investito viene recuperato in un anno senza altri rischi.",
  "La valutazione non dipende dal tasso di attualizzazione adottato.",
  "Il progetto produce flussi positivi in ogni anno dell’orizzonte stimato."
 ],
 "adv027": [
  null,
  "10%, calcolando una base convenzionale di 120.000 euro.",
  "8,33%, invertendo numeratore e denominatore del rapporto.",
  "14%, aggiungendo automaticamente due punti per il rischio d’impresa."
 ],
 "adv028": [
  "Sì: risultato economico e disponibilità liquide non coincidono.",
  "No, perché un utile positivo assicura incassi sufficienti alla scadenza dei debiti.",
  "Sì, ma soltanto se l’impresa redige il bilancio in forma abbreviata.",
  "No, perché i crediti commerciali sono sempre immediatamente liquidi."
 ],
 "adv029": [
  null,
  "75%, applicando una prudenziale riduzione del valore periziato.",
  "85%, includendo nel mutuo i costi accessori non indicati.",
  "80% soltanto se il prezzo di acquisto coincide con il valore periziato."
 ],
 "adv030": [
  "No: la perizia non sostituisce la valutazione di reddito, debiti e affidabilità.",
  "Sì, se il rapporto LTV rientra nei limiti ordinari del prodotto.",
  "Sì, se la perizia è stata redatta da un tecnico della banca.",
  "No, perché l’approvazione dipende solo dall’età anagrafica del richiedente."
 ],
 "adv031": [
  null,
  "96.000 euro, applicando 160 alla rendita senza rivalutazione.",
  "100.000 euro, applicando direttamente un coefficiente ridotto.",
  "105.600 euro, rivalutando la rendita del 10% prima del moltiplicatore."
 ],
 "adv032": [
  "No: valore catastale imponibile e prezzo di mercato sono grandezze diverse.",
  "Sì, quando l’immobile è destinato a prima casa.",
  "Sì, per gli immobili iscritti al Catasto fabbricati con rendita definitiva.",
  "No, perché la base IMU deriva sempre dai canoni contrattuali dell’anno."
 ],
 "adv033": [
  null,
  "1.500, perché coincide con la prima osservazione in ordine crescente.",
  "2.700, perché è la media aritmetica delle tre osservazioni.",
  "5.000, perché è l’osservazione statisticamente più influente."
 ],
 "adv034": [
  null,
  "+9,09%, calcolando la variazione sul valore finale.",
  "+11%, applicando una maggiorazione percentuale composta.",
  "+20%, sommando direttamente l’incremento monetario al valore iniziale."
 ],
 "adv035": [
  null,
  "27 pratiche, sottraendo un margine precauzionale del 10%.",
  "33 pratiche, sommando una percentuale fissa di sicurezza.",
  "45 pratiche, dividendo per la quota di ricavo anziché per il margine."
 ],
 "adv036": [
  null,
  "27%, calcolando le acquisizioni al netto di tre incarichi ipotetici.",
  "33%, includendo nel numeratore anche tre incarichi potenziali.",
  "70%, utilizzando come indicatore le valutazioni non convertite."
 ]
};
 let updated=0;
 for(const q of QUESTIONS){
  const changes=SUBJECT_DISTRACTORS[q.id];
  if(!changes||q.origin==='milano'||q.origin==='roma'||q.origin==='venezia-rovigo')continue;
  const currentAnswer=q.options[q.answer];
  const correct=changes[0]||currentAnswer;
  const wrong=changes.slice(1);
  const options=wrong.slice();options.splice(q.answer,0,correct);
  q.options=options;q.distractorsUpgraded=true;updated++;
 }
 if(typeof window!=='undefined')window.BASIC_DISTRACTOR_STATS={updated};
})();
