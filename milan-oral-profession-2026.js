/* Supplemento professionale basato su pagine della Camera di Commercio Milano. */
const MILAN_PROFESSION_LESSONS_2026=[
 {
  "title": "Moduli e formulari: deposito, conformità e sanzioni",
  "intro": "L'agente che utilizza moduli o formulari nell'attività di mediazione deve adempiere agli obblighi di deposito e usare testi conformi a quelli depositati.",
  "detail": "La legge 39/1989, art. 5, e la disciplina attuativa impongono il deposito dei moduli e formulari usati per l'attività secondo le procedure camerali. Non basta possedere un modello nel gestionale: bisogna verificare che sia stato depositato e che quello impiegato corrisponda alla versione depositata. La Camera di Milano indica una sanzione amministrativa di 1.549,38 euro per impiego senza il deposito dovuto e di 516,46 euro per utilizzo di moduli o formulari diversi da quelli depositati; possono concorrere ulteriori profili disciplinari. La distinzione riguarda l'impiego del formulario, non un generico divieto di predisporre testi contrattuali.",
  "example": "L'agenzia usa una proposta d'acquisto standard mai depositata: si esamina la violazione dell'obbligo di deposito. Se aveva depositato una versione ma ne utilizza un'altra, il caso è diverso.",
  "mistake": "Non confondere la sanzione da 1.549,38 euro con quella da 516,46 euro e non scambiare il deposito dei formulari con la registrazione fiscale del preliminare.",
  "key": "Formulari utilizzati: deposito; uso diverso dal depositato: distinta violazione (Milano: 1.549,38 € / 516,46 €).",
  "sourceUrl": "https://www.milomb.camcom.it/sanzioni-amministrative-e-disciplinari-intermediazione-immobiliare",
  "sourceTitle": "CCIAA Milano · Sanzioni amministrative e disciplinari"
 },
 {
  "title": "Polizza RC professionale e responsabilità dell'agente",
  "intro": "L'attività di mediazione richiede un'idonea garanzia assicurativa contro i rischi professionali, a tutela dei clienti.",
  "detail": "La copertura assicurativa professionale deve essere in vigore per l'attività esercitata e ricomprendere i soggetti tenuti alla protezione secondo le norme e la posizione nell'impresa. La Camera di Milano chiede copia della polizza nella verifica periodica dei requisiti e richiama la sanzione amministrativa da 3.000 a 5.000 euro per violazione dell'obbligo assicurativo (art. 3, comma 5-bis, legge 39/1989). Non è una garanzia di buon esito dell'affare: copre i rischi professionali secondo polizza e legge.",
  "example": "Un'impresa invia la pratica di verifica dinamica dei requisiti: deve documentare anche la copertura RC in corso e la posizione degli operatori assicurati.",
  "mistake": "Non confondere l'idoneità professionale conseguita all'esame con il diritto immediato a esercitare senza SCIA, Registro imprese/REA e polizza.",
  "key": "Esame superato ≠ attività avviata; RC professionale obbligatoria; sanzione 3.000–5.000 € se manca idonea garanzia.",
  "sourceUrl": "https://www.milomb.camcom.it/mediatori-sanzione-pecuniaria-per-chi-non-presta-idonea-garanzia-assicurativa",
  "sourceTitle": "CCIAA Milano · Garanzia assicurativa e sanzioni"
 },
 {
  "title": "Incompatibilità, requisiti, SCIA e REA",
  "intro": "Il mediatore deve possedere e conservare i requisiti richiesti e verificare le incompatibilità effettive applicabili alla propria attività.",
  "detail": "La legge 39/1989 e successive modifiche disciplinano requisiti morali e professionali, incompatibilità ed eccezioni. Non è corretto affermare che qualsiasi lavoro dipendente sia sempre compatibile o sempre incompatibile: la valutazione dipende dall'attività svolta, dalle norme e dalle deroghe, compresa quella introdotta per determinati rapporti con imprese di mediazione creditizia. L'esame rilascia idoneità, mentre l'esercizio effettivo richiede gli adempimenti telematici previsti al Registro delle imprese/REA, inclusa SCIA, eventuali preposti e condizioni per sedi diverse. Per la verifica periodica è necessario dimostrare la permanenza dei requisiti.",
  "example": "Un candidato abilitato collabora con un'impresa di mediazione creditizia: prima di qualificare il rapporto come incompatibile si esamina la disciplina speciale e la concreta funzione svolta.",
  "mistake": "Non rispondere con un divieto assoluto di qualsiasi altra attività, ignorando incompatibilità specifiche e deroghe.",
  "key": "Requisiti e assenza di incompatibilità + SCIA/Registro imprese/REA + RC e altri adempimenti, quando previsti.",
  "sourceUrl": "https://www.milomb.camcom.it/attivita-soggette-a-verifica",
  "sourceTitle": "CCIAA Milano · Attività di mediazione e requisiti"
 }
];
const milanProfession=MODULES.find(m=>m.id==='professione');
if(!milanProfession)throw new Error('Modulo professione non trovato');
for(const l of MILAN_PROFESSION_LESSONS_2026){
 if(milanProfession.lessons.some(x=>x.title===l.title))continue;
 const lesson=L(l.title,l.intro,l.detail,l.example,l.mistake,l.key);
 lesson.sourceTitle=l.sourceTitle;lesson.sourceUrl=l.sourceUrl;
 milanProfession.lessons.push(lesson);
 milanProfession.summary.push(l.key);
 milanProfession.oral.push('Spiega '+l.title.toLocaleLowerCase('it')+' e applica le regole a un caso concreto.');
}
