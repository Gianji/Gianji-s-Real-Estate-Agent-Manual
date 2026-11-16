/* Raccolta delle domande aperte già presenti nel manuale.
   Le tracce non vengono riscritte: i quesiti provengono da MODULES[].oral.
   Risposte didattiche specifiche per i quesiti non generati dai titoli. */
const ORAL_TARGETED_ANSWERS = {
 "catasto": [
  [
   0,
   "Una visura catastale del fabbricato riporta Comune, sezione se presente, foglio, particella e subalterno, che identificano l’unità; categoria, classe, consistenza e rendita ne descrivono il classamento fiscale. Ad esempio foglio 12, particella 345, subalterno 7 individua una specifica unità. L’intestazione catastale non costituisce normalmente prova definitiva della proprietà."
  ],
  [
   2,
   "DOCFA è la procedura per dichiarare o aggiornare le unità del Catasto fabbricati, ad esempio una variazione della distribuzione interna; PREGEO serve per gli aggiornamenti geometrici del Catasto terreni, come frazionamenti e tipi mappali. La voltura, invece, aggiorna l’intestazione catastale."
  ]
 ],
 "catasto-terreni": [
  [
   1,
   "Il Certificato di Destinazione Urbanistica (CDU) certifica la destinazione urbanistica del terreno secondo gli strumenti di pianificazione. È necessario negli atti relativi a terreni nei casi previsti dalla legge. Consente di inquadrare destinazione e disciplina urbanistica, da completare con verifica di indici, vincoli, accessi e potenzialità edificatoria."
  ],
  [
   1,
   "La qualità catastale descrive la natura colturale della particella (ad esempio seminativo o vigneto); la zona urbanistica deriva invece dagli strumenti urbanistici e regola gli usi e le trasformazioni consentite. Un terreno censito come seminativo può avere una destinazione urbanistica edificabile."
  ]
 ],
 "urbanistica": [
  [
   1,
   "Richiederei i titoli edilizi e gli elaborati assentiti, ricostruirei lo stato legittimo e farei confrontare da un tecnico lo stato reale con la documentazione comunale. Eventuali difformità vanno esaminate secondo le norme applicabili: tolleranze, sanatoria, condono o impossibilità di regolarizzazione. Una planimetria catastale aggiornata non dimostra da sola la conformità urbanistica."
  ],
  [
   1,
   "CILA, SCIA e permesso di costruire sono regimi diversi in relazione all’intervento: la CILA riguarda in generale determinati interventi residuali, la SCIA interventi soggetti a segnalazione certificata, il permesso di costruire gli interventi che richiedono un titolo autorizzativo. La classificazione concreta dipende dal DPR 380/2001 e dalla normativa applicabile; va verificata da un tecnico."
  ]
 ],
 "estimo": [
  [
   0,
   "Il prezzo è l’importo concretamente pattuito nello scambio; il valore è un giudizio estimativo riferito a scopo, data e condizioni definite. Un immobile pubblicizzato a 250.000 euro e venduto a 225.000 euro presenta un prezzo richiesto diverso dal prezzo effettivo; nessuno dei due, isolatamente, dimostra il valore di mercato di un altro bene."
  ],
  [
   1,
   "Definirei il segmento residenziale della zona Castello, rileverei superficie commerciale, piano, ascensore, stato, pertinenze e diritti. Raccoglierei transazioni recenti omogenee, correggerei le differenze e formulerei un valore motivato; userei le quotazioni OMI come controllo orientativo, non come unica base. Non assegnerei un valore senza dati aggiornati."
  ]
 ],
 "estimo-calcoli": [
  [
   0,
   "Sommerei la superficie principale alle superfici accessorie ragguagliate: S commerciale = S principale + Σ(S accessoria × coefficiente). Ad esempio 100 m² principali e 10 m² di balcone con coefficiente ipotetico 30% danno 103 m². Il criterio di misura e i coefficienti devono essere dichiarati, motivati e coerenti con i comparabili, senza doppi conteggi."
  ],
  [
   1,
   "V = R/i = 12.000/0,06 = 200.000 euro. R deve rappresentare il reddito netto ordinario annuo, mentre i è il saggio di capitalizzazione espresso in forma decimale. Il risultato vale nel modello semplificato con reddito stabilizzato e ipotesi coerenti."
  ]
 ],
 "tecnica-costruttiva": [
  [
   0,
   "Tra le cause frequenti vi sono umidità di risalita dal terreno, infiltrazioni da coperture o impermeabilizzazioni difettose e condensazione legata a ponti termici o condizioni di ventilazione. La diagnosi richiede controlli tecnici: la semplice presenza di una macchia non permette di individuare con certezza la causa."
  ],
  [
   2,
   "L’Attestato di Prestazione Energetica descrive la prestazione energetica dell’immobile attraverso indicatori, tra cui EPgl,nren, e assegna una classe da G ad A4. Involucro, isolamento, serramenti e impianti incidono sul risultato. La validità ordinaria è dieci anni, subordinata alle condizioni di aggiornamento e controllo previste. Non certifica la conformità urbanistica."
  ]
 ],
 "contratti-pratica": [
  [
   0,
   "Verificherei identità, capacità e legittimazione dei venditori; titoli di provenienza, visure e planimetrie, ispezioni ipotecarie, titoli edilizi e conformità, APE, documentazione condominiale, impianti, locazioni, servitù e vincoli. Se pertinenti, acquisirei CDU e documenti societari. La lista va adattata al bene e alla provenienza."
  ],
  [
   2,
   "Identifico parti e immobile, raccolgo il dossier, formulo una proposta con prezzo, termini, condizioni e pagamenti; l’accettazione conforme comunicata può formare il preliminare. Seguo registrazione ed eventuale trascrizione, istruttoria del mutuo, verifiche notarili e tecniche, imposte, estinzione dei gravami, saldo, stipula e consegna."
  ]
 ],
 "agrario": [
  [
   2,
   "Rileverei superficie, qualità colturale, fertilità, irrigazione, accessi, forma, fabbricati, contratti, vincoli e servitù. Applicherei il confronto con vendite di fondi realmente omogenei o, se pertinente, la capitalizzazione del reddito netto ordinario con un saggio coerente. Distinguerei il valore agricolo attuale dalla mera aspettativa di edificabilità."
  ],
  [
   1,
   "La prelazione agraria attribuisce a soggetti qualificati, quando sussistono i requisiti previsti dalla legge, la preferenza nell’acquisto di un fondo agricolo alle condizioni offerte al terzo. Prima della vendita occorre verificare i titolari, gli eventuali rapporti agrari, la destinazione del terreno e la procedura applicabile."
  ]
 ],
 "orale": [
  [
   1,
   "Partirei dalla morte del precedente proprietario, dalla devoluzione e dall’accettazione dell’eredità. Accerterei chi è legittimato a vendere, titoli e continuità delle trascrizioni, eventuali coeredi, ipoteche e altri gravami; controllerei locazione, catasto, urbanistica, APE e spese condominiali. Completate le verifiche, predisporrei proposta, preliminare e rogito con il notaio."
  ],
  [
   1,
   "Esempio: proposta di acquisto per 180.000 euro subordinata alla concessione, entro un termine espresso, di un mutuo di 140.000 euro. La clausola indica importo, scadenza, modalità di comunicazione dell’esito e sorte delle somme depositate. La condizione sospende gli effetti fino al verificarsi dell’evento; va formulata in modo preciso."
  ]
 ],
 "professione": [
  [
   0,
   "Il mediatore ex art. 1754 c.c. mette in relazione due o più parti per concludere un affare senza vincoli di collaborazione, dipendenza o rappresentanza. Il mandatario, invece, è obbligato a compiere atti giuridici nell’interesse del mandante, con o senza rappresentanza. La differenza fondamentale è tra terzietà della mediazione tipica e obbligo di agire per il mandante."
  ],
  [
   2,
   "Il diritto alla provvigione nasce, ai sensi dell’art. 1755 c.c., quando l’affare è concluso per effetto dell’intervento del mediatore. Non occorre necessariamente il rogito: un preliminare vincolante può essere sufficiente. Vanno considerate le condizioni sospensive e la concreta efficacia dell’accordo; la prescrizione è ordinariamente annuale ex art. 2950 c.c."
  ],
  [
   2,
   "L’art. 1759 c.c. impone al mediatore di comunicare alle parti le circostanze note relative alla valutazione e alla sicurezza dell’affare. La diligenza professionale impedisce di ignorare informazioni che si era tenuti a conoscere; per esempio gravami o elementi rilevanti della situazione dell’immobile."
  ]
 ],
 "civile": [
  [
   0,
   "La capacità giuridica è l’idoneità a essere titolare di diritti e doveri e si acquista con la nascita. La capacità di agire è l’idoneità a compiere validamente atti giuridici e si acquista di regola a 18 anni. Un minore può essere proprietario di una casa ereditata senza poterla vendere autonomamente."
  ],
  [
   2,
   "La prescrizione estingue in generale un diritto per il suo mancato esercizio durante il termine previsto dalla legge; quella ordinaria è decennale, salve eccezioni. La decadenza comporta invece la perdita della possibilità di esercitare un diritto o potere se non si compie l’attività richiesta nel termine previsto. I due istituti hanno discipline differenti."
  ]
 ],
 "reali": [
  [
   1,
   "Tra i diritti reali di godimento rientrano usufrutto, uso, abitazione, superficie, enfiteusi e servitù. L’usufrutto consente di godere del bene altrui rispettandone la destinazione; uso e abitazione hanno contenuto più ristretto; la superficie separa la costruzione dalla proprietà del suolo, mentre la servitù è un peso a vantaggio di un altro fondo. Per l’enfiteusi si veda anche il modulo di estimo legale."
  ],
  [
   2,
   "Il possesso è il potere sulla cosa manifestato in un’attività corrispondente alla proprietà o a un altro diritto reale; la detenzione implica il riconoscimento del potere altrui. Un conduttore detiene normalmente l’immobile del locatore. Il possesso utile può condurre all’usucapione se sussistono i requisiti di legge."
  ]
 ],
 "obbligazioni": [
  [
   0,
   "Nella solidarietà passiva più debitori sono tenuti alla medesima prestazione e il creditore può pretendere l’intero da ciascuno. Chi adempie libera gli altri verso il creditore, salvi i rapporti interni e il diritto di regresso secondo la disciplina applicabile."
  ],
  [
   2,
   "Pegno e ipoteca sono garanzie reali e attribuiscono prelazione: il pegno riguarda tipicamente mobili o crediti, l’ipoteca beni immobili e altri beni previsti, mediante iscrizione. La fideiussione è invece una garanzia personale: un terzo si obbliga verso il creditore a garantire il debito altrui."
  ]
 ],
 "contratti": [
  [
   0,
   "Gli elementi essenziali sono accordo delle parti, causa, oggetto e forma quando prescritta a pena di nullità. Il contratto è l’accordo diretto a costituire, regolare o estinguere un rapporto giuridico patrimoniale; la vendita immobiliare richiede forma scritta."
  ],
  [
   1,
   "La condizione sospensiva subordina gli effetti del contratto a un evento futuro e incerto. Se l’evento non si verifica, gli effetti sospesi non diventano operativi secondo la disciplina e il contenuto della clausola. Ad esempio, se non viene concesso entro il termine il mutuo previsto dalla condizione, va applicato quanto pattuito sulla sorte dell’accordo e delle somme."
  ]
 ],
 "vendita": [
  [
   1,
   "Il preliminare obbliga le parti a stipulare il definitivo e normalmente non trasferisce la proprietà. Il definitivo di vendita immobiliare trasferisce il diritto mediante il consenso validamente manifestato nella forma richiesta. Il preliminare richiede forma scritta; la sua trascrizione, nelle forme previste, ha efficacia prenotativa temporanea."
  ],
  [
   2,
   "Verifico titolarità e provenienza, continuità delle trascrizioni, ipoteche e pignoramenti, conformità catastale e urbanistico-edilizia, agibilità quando rilevante, APE, condominio, servitù, vincoli, prelazioni, occupazione e locazioni. I controlli catastali, ipotecari e urbanistici sono distinti."
  ]
 ],
 "locazioni": [
  [
   1,
   "Il 4+4 abitativo a canone libero ha durata ordinaria di quattro anni più quattro, con le regole di rinnovo e disdetta previste. Il 3+2 ordinario a canone concordato ha durata di tre anni più due e deve rispettare gli accordi territoriali applicabili per la determinazione del canone. Entrambi sono disciplinati dalla legge 431/1998."
  ],
  [
   0,
   "Il locatore deve consegnare la cosa in buono stato, mantenerla idonea all’uso convenuto e garantirne il pacifico godimento. Il conduttore deve utilizzarla con diligenza, corrispondere il canone e restituirla alla fine del rapporto."
  ]
 ],
 "successioni": [
  [
   0,
   "L’accettazione con beneficio d’inventario consente all’erede di limitare la responsabilità per i debiti ereditari secondo le regole di legge, mantenendo distinta la massa ereditaria dal patrimonio personale. È diversa dall’accettazione pura e semplice e richiede gli adempimenti previsti."
  ],
  [
   0,
   "La successione legittima opera quando manca una valida disposizione testamentaria per i beni interessati; quella testamentaria deriva dalle disposizioni del defunto. Anche il testamento deve rispettare le quote riservate ai legittimari, ove previste. L’eredità si acquista con accettazione."
  ]
 ],
 "commerciale": [
  [
   0,
   "L’azienda, ai sensi dell’art. 2555 c.c., è il complesso dei beni organizzati dall’imprenditore per l’esercizio dell’impresa. È distinta dall’impresa, che è l’attività economica, e dall’avviamento, che esprime la capacità dell’organizzazione di generare risultati."
  ],
  [
   1,
   "Nella S.n.c. i soci rispondono solidalmente e illimitatamente secondo legge. Nella S.a.s. gli accomandatari hanno responsabilità illimitata e amministrano, mentre gli accomandanti hanno responsabilità limitata nei limiti della disciplina. La S.r.l. è società di capitali con autonomia patrimoniale perfetta, salvi casi specifici."
  ]
 ],
 "adempimenti": [
  [
   0,
   "Ai sensi del d.lgs. 231/2007, quando ricorrono i presupposti, l’agente deve effettuare adeguata verifica della clientela, identificare il titolare effettivo, valutare il rischio, conservare le informazioni e segnalare le operazioni sospette all’UIF. La segnalazione è riservata e non coincide con una denuncia penale."
  ],
  [
   2,
   "Occorrono i requisiti personali e professionali previsti dalla legge 39/1989, il superamento dell’esame e gli adempimenti di avvio al Registro imprese/REA, inclusa la SCIA secondo il caso. Vanno mantenuti i requisiti, rispettate le incompatibilità e gli obblighi relativi a polizza RC e deposito dei formulari.",
   "professione",
   1
  ]
 ],
 "pubblicita": [
  [
   0,
   "La visura catastale identifica e classifica l’immobile ai fini tecnici e fiscali; l’ispezione ipotecaria permette di ricostruire formalità, passaggi di proprietà e gravami nei registri immobiliari. La prima non costituisce normalmente prova definitiva della proprietà; la seconda consente di verificare trascrizioni, iscrizioni e annotazioni."
  ],
  [
   1,
   "La trascrizione del preliminare, nelle forme richieste, produce un effetto prenotativo temporaneo: tutela l’acquirente dalle formalità pregiudizievoli successive nei limiti e nei termini di legge. È distinta dalla registrazione fiscale del preliminare e non trasferisce di per sé la proprietà."
  ]
 ],
 "condominio": [
  [
   1,
   "Le tabelle millesimali esprimono il valore proporzionale delle singole unità ai fini dei riparti e delle deliberazioni previsti dalla legge. Si distinguono millesimi generali, tabelle speciali e criteri di ripartizione legati all’uso. Non tutte le spese sono ripartite con la stessa tabella."
  ],
  [
   2,
   "Chiederei all’amministratore informazioni su contributi, morosità, delibere e lavori straordinari, fondi e contenziosi. L’art. 63 disp. att. c.c. prevede la responsabilità solidale dell’acquirente con il venditore per i contributi dell’anno in corso e di quello precedente, salvi i rapporti interni."
  ]
 ],
 "diritto-fonti": [
  [
   1,
   "L’interpretazione considera il significato delle parole nella loro connessione e l’intenzione del legislatore. Quando manca una disposizione per il caso, si può ricorrere all’analogia nei limiti consentiti; leggi penali ed eccezionali pongono limiti specifici. Occorre anche verificare efficacia e applicabilità temporale della norma."
  ],
  [
   0,
   "La legge è una fonte primaria nelle rispettive competenze; il regolamento è una fonte subordinata che deve rispettare le fonti superiori. Occorre distinguere anche i regolamenti dell’Unione europea, direttamente applicabili, dai regolamenti interni."
  ]
 ],
 "diritto-soggetti": [
  [
   2,
   "Per vendere in nome di una società occorre il potere di rappresentanza idoneo all’atto: verifico Registro imprese, statuto, organi e poteri di firma, eventuali delibere o procura speciale. La sola qualità di socio non dimostra il potere di disporre dell’immobile."
  ],
  [
   2,
   "Il mandato è il contratto che obbliga il mandatario a compiere atti giuridici nell’interesse del mandante; la procura conferisce invece il potere di rappresentanza, cioè di agire in nome altrui. Il mandato può essere con o senza rappresentanza; la procura deve avere forma idonea all’atto."
  ]
 ],
 "diritto-responsabilita": [
  [
   0,
   "Il nesso causale è il collegamento tra condotta e danno: consente di stabilire se il pregiudizio sia riconducibile al fatto o all’inadempimento esaminato. È uno degli elementi da valutare nell’accertamento della responsabilità contrattuale o extracontrattuale, insieme agli altri presupposti."
  ],
  [
   2,
   "Il creditore può chiedere adempimento, risarcimento e, nei contratti a prestazioni corrispettive, risoluzione quando ne ricorrono le condizioni. Può inoltre utilizzare diffida ad adempiere ed esecuzione forzata; revocatoria e surrogatoria tutelano la garanzia patrimoniale nei rispettivi presupposti."
  ]
 ],
 "diritto-contratti-speciali": [
  [
   1,
   "La locazione attribuisce il godimento di un bene per un tempo determinato dietro corrispettivo; il comodato consiste nella consegna essenzialmente gratuita di una cosa da usare e restituire. Il canone distingue normalmente la locazione dal comodato."
  ],
  [
   1,
   "Nell’appalto l’appaltatore realizza un’opera o servizio mediante organizzazione dei mezzi e gestione a proprio rischio. Nel contratto d’opera il prestatore svolge l’attività prevalentemente con lavoro proprio e senza subordinazione."
  ]
 ],
 "diritto-comunione": [
  [
   2,
   "Le luci sono aperture che consentono passaggio di aria e luce senza permettere l’affaccio sul fondo vicino; le vedute consentono di affacciarsi e guardare sul fondo altrui. La disciplina civilistica prevede requisiti e distanze differenti, da coordinare con le eventuali regole urbanistiche."
  ],
  [
   1,
   "La reintegrazione è un’azione possessoria che tutela il possesso contro lo spoglio nei casi previsti. La rivendicazione è un’azione petitoria mediante la quale il proprietario chiede il riconoscimento del proprio diritto e la restituzione del bene. La prima protegge la situazione possessoria, la seconda la titolarità."
  ]
 ],
 "diritto-famiglia": [
  [
   1,
   "L’accettazione tacita si verifica quando il chiamato compie un atto che presuppone necessariamente la volontà di accettare e che non avrebbe diritto di compiere se non come erede. Per esempio la vendita di un bene ereditario può integrare accettazione tacita; la relativa trascrizione rileva per la continuità."
  ],
  [
   2,
   "Una donazione può incidere sulle quote di riserva dei legittimari e rilevare nelle operazioni successorie, tra cui collazione e riunione fittizia. Se la riserva risulta lesa può sorgere un problema di riduzione. In una vendita di bene donato si verifica la normativa applicabile e la concreta situazione successoria, senza presumere automaticamente l’invalidità della vendita."
  ]
 ],
 "fisco": [
  [
   1,
   "Nella vendita di abitazione da privato, fuori IVA, si applica di regola il registro proporzionale (9% ordinario o 2% prima casa), con ipotecaria e catastale fisse. Se la vendita è soggetta a IVA, questa si calcola normalmente sul corrispettivo e le tre imposte d’atto sono generalmente fisse a 200 euro ciascuna. Per le imprese occorre verificare tipo di cedente, ultimazione e opzione IVA."
  ],
  [
   1,
   "Il prezzo-valore consente, quando ricorrono i requisiti previsti per acquisti di abitazioni e pertinenze da persone fisiche che non agiscono nell’attività commerciale o professionale, di determinare la base imponibile delle imposte interessate in base al valore catastale anziché al corrispettivo. Non si applica indistintamente a ogni compravendita."
  ]
 ],
 "fisco-avanzato": [
  [
   1,
   "La cedolare secca è un regime opzionale sostitutivo di alcune imposte sul reddito e sulla registrazione delle locazioni abitative ammesse. Le aliquote ordinarie indicate nel manuale sono 21% per molti canoni liberi e 10% per il concordato con i requisiti; gli affitti brevi seguono disciplina propria. Il locatore rinuncia agli aggiornamenti del canone, incluso ISTAT, per il periodo dell’opzione."
  ],
  [
   2,
   "No. Una rivendita entro cinque anni può generare una plusvalenza imponibile, ma esistono eccezioni, tra cui acquisti per successione e uso come abitazione principale per la maggior parte del periodo nei casi previsti. Terreni edificabili e immobili interessati da determinati interventi agevolati hanno regole speciali. Occorre verificare il caso concreto."
  ]
 ],
 "mutui": [
  [
   1,
   "Il TAN è il tasso annuo nominale degli interessi; il TAEG è l’indicatore annuo del costo complessivo del credito comprensivo degli oneri previsti; lo spread è il margine applicato dalla banca al parametro di riferimento, ad esempio nel tasso variabile."
  ],
  [
   2,
   "LTV (Loan to Value) = importo finanziato / valore di riferimento del bene. Un LTV dell’80% significa, ad esempio, mutuo di 160.000 euro su un valore di 200.000 euro. Non garantisce la concessione del credito: contano anche perizia, merito creditizio e disciplina applicabile."
  ]
 ],
 "mercato": [
  [
   0,
   "Incidono domanda e offerta, redditi, occupazione, accesso al credito, tassi, demografia, servizi, infrastrutture, disponibilità di immobili e aspettative. Sul singolo bene contano microzona, dimensione, stato, piano, dotazioni, diritti e data della stima."
  ]
 ],
 "formule": [
  [
   1,
   "Per un’abitazione ammessa al prezzo-valore: con benefici prima casa, 900 × 1,05 × 110 = 103.950 euro; senza benefici, nel caso ordinario di molte abitazioni, 900 × 1,05 × 120 = 113.400 euro. La domanda non specifica il regime, perciò occorre distinguerli; questi moltiplicatori non sono universali."
  ],
  [
   2,
   "Esempio del manuale: 85 m² principali, balcone 10 m² al 30% e cantina 8 m² al 25%. S commerciale = 85 + 3 + 2 = 90 m². Prezzo unitario del comparabile corretto = 2.100 euro/m². Valore indicativo = 90 × 2.100 = 189.000 euro. I coefficienti e il comparabile sono ipotesi didattiche."
  ]
 ],
 "economia-base": [
  [
   0,
   "Un aumento dei tassi rende generalmente più oneroso il credito, riducendo a parità di altre condizioni la capacità di acquisto finanziata e quindi la domanda immobiliare. Una diminuzione dei tassi può avere l’effetto opposto. Redditi, aspettative, occupazione e offerta possono modificare il risultato."
  ],
  [
   2,
   "Il costo opportunità è il valore della migliore alternativa cui si rinuncia scegliendo un determinato impiego delle risorse. Nell’investimento immobiliare, ad esempio, il capitale impiegato nell’acquisto non può contemporaneamente essere destinato all’investimento alternativo."
  ]
 ],
 "economia-azienda": [
  [
   1,
   "Punto di pareggio in unità = costi fissi / (prezzo unitario − costo variabile unitario), se il margine unitario è positivo. Il punto di pareggio indica il volume al quale ricavi e costi complessivi si equivalgono, nell’intervallo di attività considerato."
  ],
  [
   0,
   "Il fatturato rappresenta i ricavi delle vendite o prestazioni; l’utile è il risultato economico positivo dopo i costi e gli altri componenti pertinenti. Il conto economico rileva ricavi e costi per competenza; utile, fatturato e liquidità non coincidono."
  ]
 ],
 "economia-finanza": [
  [
   0,
   "Il valore attuale di una somma futura M è VA = M/(1+i)^n, con tasso e numero di periodi coerenti. Riporta un capitale futuro alla data iniziale. Per una rendita composta da più flussi si attualizzano separatamente i flussi secondo il modello."
  ],
  [
   1,
   "Il TAN misura il tasso nominale degli interessi; il TAEG esprime il costo complessivo annuo del credito includendo gli oneri previsti dalla disciplina. Per questo due finanziamenti con lo stesso TAN possono avere TAEG differenti."
  ]
 ],
 "cremona": [
  [
   2,
   "Userei transazioni recenti comparabili della microzona Castello, con correzioni per superficie, stato, piano, ascensore, pertinenze e classe energetica; consulterei le quotazioni OMI dell’Agenzia delle Entrate come riferimento orientativo, verificando la zona OMI effettiva, che può non coincidere con il nome del quartiere."
  ],
  [
   0,
   "Identificherei foglio e particella, consultando il PGT vigente e il Geoportale del Comune di Cremona per destinazioni, indici, vincoli e ambiti. Richiederei il CDU quando necessario: la consultazione online non ha da sola valore legale. Un tecnico verificherebbe la concreta potenzialità edificatoria, accessi e vincoli."
  ]
 ]
};
const ORAL_SECTORS=[
 ['all','Tutte le materie'],['diritto','Diritto'],['economia','Economia'],['immobiliare','Immobiliare'],['cremona','Focus Cremona']
];
function oralNorm(value){
 return String(value||'').toLocaleLowerCase('it').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[’‘]/g,"'").replace(/\s+/g,' ').trim();
}
function oralAnswer(m,q,i){
 const advanced=typeof ORAL_ADVANCED_MAP!=='undefined'?ORAL_ADVANCED_MAP.get(m.id+':'+i):null;
 if(advanced)return {text:advanced.answer,mistake:advanced.trap,refs:[{mid:m.id,idx:advanced.idx}],source:oralAdvancedSource(advanced.law),kind:'advanced'};
 const targeted=ORAL_TARGETED_ANSWERS[m.id]?.[i];
 if(targeted){
  const [idx,text,extraModule,extraIdx]=targeted;
  const refs=[{mid:m.id,idx}];
  if(extraModule&&Number.isInteger(extraIdx))refs.push({mid:extraModule,idx:extraIdx});
  return {text,refs,kind:'targeted'};
 }
 const query=oralNorm(q);
 const matches=m.lessons.map((l,idx)=>({l,idx})).filter(({l})=>query.includes(oralNorm(l.title))).sort((a,b)=>b.l.title.length-a.l.title.length);
 if(matches.length){
  const {l,idx}=matches[0];
  return {text:[l.intro,l.detail].filter(Boolean).join('\n\n'),example:l.example,key:l.key,mistake:l.mistake,refs:[{mid:m.id,idx}],kind:'lesson'};
 }
 return {text:'La teoria non contiene ancora una risposta specifica associata a questa domanda. Consulta il modulo per approfondire.',refs:[],kind:'unmatched'};
}
function oralEntries(){
 return MODULES.flatMap(m=>(m.oral||[]).map((q,i)=>({id:m.id+':'+i,mid:m.id,i,q,sector:m.id==='cremona'?'cremona':sectorOf(m),module:m.title,answer:oralAnswer(m,q,i)})));
}
function oralRenderAnswer(e){
 const a=e.answer;
 const refs=a.refs.map(r=>{
  const l=MODULES.find(m=>m.id===r.mid)?.lessons[r.idx];
  return l?'<a class="oral-lesson-link" href="#/lesson/'+encodeURIComponent(r.mid)+'/'+r.idx+'">'+esc(l.title)+' →</a>':'';
 }).join('');
 return '<div class="oral-answer-label">'+(a.kind==='advanced'?'RISPOSTA AVANZATA · SPIEGAZIONE DEL TRABOCCHETTO':'RISPOSTA DI RIPASSO · DAL MANUALE')+'</div>'+
 a.text.split('\n\n').map(p=>'<p>'+esc(p)+'</p>').join('')+
 (a.example?'<div class="oral-example"><strong>Esempio pratico</strong><p>'+esc(a.example)+'</p></div>':'')+
 (a.key?'<div class="oral-key"><strong>Da ricordare</strong><p>'+esc(a.key)+'</p></div>':'')+
 (a.mistake?'<div class="oral-caution"><strong>Attenzione all’esame</strong><p>'+esc(a.mistake)+'</p></div>':'')+
 '<div class="oral-answer-source"><span>Approfondisci nella teoria:</span>'+ (refs||'<a href="#/module/'+encodeURIComponent(e.mid)+'">Apri il modulo →</a>')+'</div>'+(a.source?'<div class="oral-answer-source"><span>Riferimento ufficiale:</span><a href="'+esc(a.source.url)+'" target="_blank" rel="noopener noreferrer">'+esc(a.source.label)+' ↗</a></div>':'');
}
function renderOral(moduleId){
 const entries=oralEntries();
 const advancedCount=entries.filter(e=>e.answer.kind==='advanced').length;
 const modules=MODULES.filter(m=>(m.oral||[]).length);
 const selected=modules.some(m=>m.id===moduleId)?moduleId:'all';
 const cards=ORAL_SECTORS.filter(([id])=>id!=='all').map(([sid,label])=>{
  const list=entries.filter(e=>e.sector===sid);
  if(!list.length)return '';
  const groups=modules.filter(m=>list.some(e=>e.mid===m.id)).map(m=>{
   const qs=list.filter(e=>e.mid===m.id);
   return '<section class="oral-module" data-oral-group="'+esc(m.id)+'"><header class="oral-module-head"><div><h3>'+esc(m.title)+'</h3><small>'+qs.length+' domande · '+esc(label)+'</small></div><a href="#/module/'+encodeURIComponent(m.id)+'">Apri teoria →</a></header>'+
    qs.map(e=>{
     const answerId='oral-answer-'+e.mid+'-'+e.i;
     const search=oralNorm(e.q+' '+e.module);const advanced=e.answer.kind==='advanced';
     return '<article class="oral-question" data-oral-card data-oral-sector="'+esc(e.sector)+'" data-oral-module="'+esc(e.mid)+'" data-oral-search="'+esc(search)+'" data-oral-level="'+(advanced?'advanced':'standard')+'"><div class="oral-question-row"><span class="oral-number">'+String(e.i+1).padStart(2,'0')+'</span><h4>'+(advanced?'<span class="oral-level-label">AVANZATA</span>':'')+esc(e.q)+'</h4><button type="button" class="oral-reveal" data-oral-toggle="'+esc(answerId)+'" aria-controls="'+esc(answerId)+'" aria-expanded="false">Mostra risposta <span aria-hidden="true">＋</span></button></div><div id="'+esc(answerId)+'" class="oral-answer" hidden>'+oralRenderAnswer(e)+'</div></article>';
    }).join('')+'</section>';
  }).join('');
  return '<section class="oral-sector" data-oral-section="'+esc(sid)+'"><div class="oral-sector-title"><h2>'+esc(label)+'</h2><span>'+list.length+' domande</span></div>'+groups+'</section>';
 }).join('');
 return pageTitle('RIPASSO ATTIVO','Domande aperte.','Allenati a rispondere a voce alta. Le domande da orale del manuale e i casi avanzati, con risposte consultabili solo quando vuoi.')+
 '<div class="study-banner" style="margin-bottom:16px;flex-wrap:wrap"><div><b>Videoripasso orale con voce</b><p>470 domande, con risposta e spiegazione lette in italiano. Scegli la voce, la velocità e la pausa per rispondere.</p></div><a href="./videoripasso-voce.html" class="btn btn-primary btn-sm" style="text-decoration:none">▶ Ascolta le domande</a></div>'+
 '<div class="oral-hero"><div><strong>'+entries.length+' domande aperte</strong><p>'+modules.length+' moduli · '+advancedCount+' quesiti avanzati con eccezioni, casi pratici, calcoli e trabocchetti. Domande e risposte didattiche del manuale, non soluzioni ufficiali camerali.</p></div><a class="btn btn-outline btn-sm" href="#/library">Vai alla teoria →</a></div>'+
 '<div class="oral-filters"><label>Materia<select id="oral-sector-filter">'+ORAL_SECTORS.map(([id,name])=>'<option value="'+id+'">'+esc(name)+'</option>').join('')+'</select></label>'+
 '<label>Argomento<select id="oral-module-filter"><option value="all">Tutti gli argomenti</option>'+modules.map(m=>'<option value="'+esc(m.id)+'" data-sector="'+esc(m.id==='cremona'?'cremona':sectorOf(m))+'"'+(selected===m.id?' selected':'')+'>'+esc(m.title)+'</option>').join('')+'</select></label>'+
 '<label>Difficoltà<select id="oral-level-filter"><option value="all">Tutte le domande ('+entries.length+')</option><option value="advanced">Solo avanzate ('+advancedCount+')</option><option value="standard">Domande precedenti ('+(entries.length-advancedCount)+')</option></select></label>'+
 '<label class="oral-search-label">Cerca una domanda<input id="oral-search" type="search" placeholder="Es. fideiussione, usufrutto, MCA…" autocomplete="off"></label>'+
 '<div class="oral-filter-actions"><button type="button" class="btn btn-outline btn-sm" data-oral-action="reset">Azzera filtri</button><button type="button" class="btn btn-outline btn-sm" data-oral-action="hide">Nascondi tutte</button></div></div>'+
 '<div class="oral-result-line" role="status"><strong id="oral-count">'+entries.length+'</strong> domande visualizzate <span>Prova a rispondere prima di svelare la soluzione.</span></div>'+
 '<div id="oral-list">'+cards+'</div><div id="oral-empty" class="oral-empty" hidden>Nessuna domanda corrisponde ai filtri. Prova un altro argomento.</div>';
}
function oralFilter(){
 const sf=document.getElementById('oral-sector-filter'),mf=document.getElementById('oral-module-filter'),search=document.getElementById('oral-search');
 if(!sf||!mf||!search)return;
 const sector=sf.value,query=oralNorm(search.value),level=document.getElementById('oral-level-filter')?.value||'all';
 for(const opt of mf.options){if(opt.value!=='all')opt.hidden=sector!=='all'&&opt.dataset.sector!==sector;}
 if(mf.selectedOptions[0]?.hidden)mf.value='all';
 const module=mf.value;
 let count=0;
 document.querySelectorAll('[data-oral-card]').forEach(card=>{
  const show=(sector==='all'||card.dataset.oralSector===sector)&&(module==='all'||card.dataset.oralModule===module)&&(level==='all'||card.dataset.oralLevel===level)&&(!query||card.dataset.oralSearch.includes(query));
  card.hidden=!show;if(show)count++;
 });
 document.querySelectorAll('[data-oral-group]').forEach(group=>{group.hidden=!group.querySelector('[data-oral-card]:not([hidden])')});
 document.querySelectorAll('[data-oral-section]').forEach(section=>{section.hidden=!section.querySelector('[data-oral-group]:not([hidden])')});
 document.getElementById('oral-count').textContent=count;
 document.getElementById('oral-empty').hidden=!!count;
}
function oralSetRevealed(button,show){
 const answer=document.getElementById(button.dataset.oralToggle);
 if(!answer)return;
 answer.hidden=!show;
 button.setAttribute('aria-expanded',String(show));
 button.innerHTML=show?'Nascondi risposta <span aria-hidden="true">−</span>':'Mostra risposta <span aria-hidden="true">＋</span>';
}
document.addEventListener('click',e=>{
 const toggle=e.target.closest('[data-oral-toggle]');
 if(toggle){oralSetRevealed(toggle,toggle.getAttribute('aria-expanded')!=='true');return;}
 const action=e.target.closest('[data-oral-action]');
 if(!action)return;
 if(action.dataset.oralAction==='hide')document.querySelectorAll('[data-oral-toggle][aria-expanded="true"]').forEach(b=>oralSetRevealed(b,false));
 if(action.dataset.oralAction==='reset'){
  document.getElementById('oral-sector-filter').value='all';document.getElementById('oral-module-filter').value='all';document.getElementById('oral-search').value='';document.getElementById('oral-level-filter').value='all';oralFilter();
 }
});
document.addEventListener('input',e=>{if(e.target.id==='oral-search')oralFilter();});
document.addEventListener('change',e=>{if(e.target.id==='oral-sector-filter'||e.target.id==='oral-module-filter'||e.target.id==='oral-level-filter')oralFilter();});
