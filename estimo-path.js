/* Percorso estimo approfondito: criteri, procedimenti e casi applicativi.
   Link a moduli già presenti e ai nuovi approfondimenti 2026. */
const ESTIMO_PATH_GROUPS=[
 {label:'01 · Fondamenti e aspetti economici',why:'Che cosa stimare, quando e con quale base di valore',items:[
  ['estimo','Introduzione all’estimo'],['estimo-processo6','Processo e metodologia'],['estimo-valori6','Criteri e aspetti economici']]},
 {label:'02 · Mercato e confronto',why:'Stime sintetiche, comparabili, MCA, indicatori e prezzi',items:[
  ['imm-market2','Stima comparativa applicata'],['estimo-mca6','MCA e prezzi marginali'],['mercato','Mercato e dati immobiliari'],['estimo-statistica6','Statistica dei valori']]},
 {label:'03 · Reddito e capitalizzazione',why:'Reddito lordo/netto, saggi, rendite e DCF',items:[
  ['estimo-calcoli','Calcoli estimativi'],['estimo-reddito6','Procedimenti reddituali'],['estimo-dcf6','Flussi attualizzati e scenari']]},
 {label:'04 · Costi, sviluppo e trasformazione',why:'Costo deprezzato, valore residuale e progetto realizzabile',items:[
  ['imm-estimo-approfondito','Metodi e relazione'],['estimo-costi6','Approccio del costo'],['estimo-residuo6','Stima residuale e trasformazione'],['estimo-aree6','Aree edificabili e sviluppo']]},
 {label:'05 · Superfici e parametri',why:'Misure coerenti, superfici commerciali, accessori e volumetrie',items:[
  ['imm-superfici','Superfici e consistenze'],['estimo-superfici6','Misure estimative approfondite'],['formule','Formule e calcoli d’esame']]},
 {label:'06 · Estimo speciale, legale e diritti',why:'Valori complementari, indennità, servitù, nuda proprietà e usufrutto',items:[
  ['imm-estimo-speciale','Estimo speciale'],['imm-estimo-legale3','Estimo legale applicato'],['estimo-diritti6','Valutazione dei diritti reali'],['estimo-legale6','Indennità, danni ed espropri']]},
 {label:'07 · Estimo agrario e rustico',why:'Terreni, reddito agrario, frutti pendenti e miglioramenti fondiari',items:[
  ['agrario','Estimo agrario'],['imm-rurale2','Fondi rustici'],['estimo-agrario6','Valutazioni rurali approfondite']]},
 {label:'08 · Perizie e beni particolari',why:'Immobili speciali, controlli, fonti e redazione del rapporto di stima',items:[
  ['estimo-speciali6','Negozi, capannoni, alberghi e altri beni'],['estimo-perizia6','Redazione della relazione di stima']]}
];
const ESTIMO_PATH=ESTIMO_PATH_GROUPS.flatMap(g=>g.items.map(([id,title])=>[id,title,g.label]));
function renderEstimoPath(){
 const groups=ESTIMO_PATH_GROUPS.map(g=>({...g,items:g.items.map(([id,title])=>({m:MODULES.find(m=>m.id===id),title})).filter(x=>x.m&&sectorOf(x.m)==='immobiliare')})).filter(g=>g.items.length);
 const moduleCount=groups.reduce((n,g)=>n+g.items.length,0);
 const lessonCount=groups.reduce((n,g)=>n+g.items.reduce((s,x)=>s+x.m.lessons.length,0),0);
 const formulae=[
  ['Confronto monoparametrico','V = S × p','Superficie e prezzo unitario devono usare gli stessi criteri.'],
  ['Market Comparison Approach','P corretto = P compr. + Σ aggiustamenti','Prezzi marginali ricavati da dati verificabili.'],
  ['Reddito stabilizzato','V = R / i','R netto annuo, i coerente e flusso ipotizzato durevole.'],
  ['Valore attuale','VA = F / (1+r)^n','Il tasso r e il periodo n devono essere omogenei.'],
  ['Approccio costo deprezzato','V ≈ V area + C nuovo − deprezzamenti','Verificare obsolescenza e doppio conteggio.'],
  ['Valore di trasformazione','V residuo = ricavi − costi/oneri','Costi, tempi, utile e rischio devono essere inclusi coerentemente.'],
  ['Valore complementare','Vc = V prima − V dopo','Differenza di valore dell’intero e del residuo.'],
  ['Superficie ragguagliata','Sr = Σ (Si × ki)','Coefficienti motivati, non percentuali universali.'],
  ['DCF','V = Σ [FCt/(1+r)^t] + VT attualizzato','Terminal value solo se esiste e nella data corretta.']
 ];
 return '<section class="estimo-path" aria-label="Percorso completo di Estimo">'+
  '<div class="estimo-path-top"><div><span class="estimo-path-eyebrow">Immobiliare · Estimo · Percorso completo d’esame</span>'+
  '<h2>ESTIMO. Criteri, metodi e procedimenti di stima.</h2>'+
  '<p>Non basta conoscere comparazione, reddito e costo. Occorre distinguere <b>criteri economici</b> (che valore cercare), <b>procedimenti</b> (come determinarlo), <b>tecniche</b> (formule e dati) e <b>applicazioni speciali</b> (terreni, diritti, indennità, fabbricati e sviluppo).</p>'+
  '<div class="estimo-count">'+groups.length+' capitoli tematici · '+moduleCount+' moduli · '+lessonCount+' lezioni collegate</div></div>'+
  '<div class="estimo-top-actions"><button class="btn estimo-cta" data-open-module="estimo-processo6">Inizia dal metodo →</button><a class="btn estimo-cta estimo-map-link" href="#/mindmap/estimo">Apri la mappa Estimo ↗</a></div></div>'+
  '<div class="estimo-method-steps"><span>1. Definisci il valore</span><span>2. Raccogli dati</span><span>3. Scegli il procedimento</span><span>4. Calcola e confronta</span><span>5. Redigi la perizia</span></div>'+
  '<div class="estimo-groups">'+groups.map(group=>'<div class="estimo-group">'+
   '<div class="estimo-group-header"><h3>'+esc(group.label)+'</h3><p>'+esc(group.why)+'</p></div>'+
   '<div class="estimo-topic-list">'+group.items.map(({m,title},i)=>'<button class="estimo-topic" type="button" data-open-module="'+esc(m.id)+'" aria-label="Apri il modulo: '+esc(title)+'">'+
    '<span>'+String(i+1).padStart(2,'0')+'</span><div><strong>'+esc(title)+'</strong><small>'+m.lessons.length+' lezioni · '+esc(m.title)+'</small></div></button>').join('')+'</div>'+
   '</div>').join('')+'</div>'+
  '<h3 class="estimo-formulas-title">Formula e condizioni d’uso — ripasso rapido</h3>'+
  '<div class="estimo-formulas">'+formulae.map(([label,formula,desc],i)=>'<div class="estimo-formula"><small>'+String(i+1).padStart(2,'0')+' · '+esc(label)+'</small><strong>'+esc(formula)+'</strong><p>'+esc(desc)+'</p></div>').join('')+'</div>'+
  '<div class="estimo-path-note"><b>Da ricordare per l’esame:</b> il «valore di costo» è un aspetto economico, mentre «approccio del costo» descrive un procedimento. Lo stesso vale per altri termini simili. Le formule riportate sono schemi didattici, validi sotto le ipotesi indicate. Le tracce di Milano comprendono anche valore complementare, surrogazione, ordinarietà, aree edificabili e usufrutto.</div>'+
  '<div class="estimo-source-links"><span>Fonti di approfondimento:</span>'+
  '<a href="https://www.abi.it/download/linee-guida-per-la-valutazione-degli-immobili-in-garanzia-delle-esposizioni-creditizie/" target="_blank" rel="noopener noreferrer">Linee guida ABI</a>'+
  '<a href="https://ivsc.org/standards/" target="_blank" rel="noopener noreferrer">IVS</a>'+
  '<a href="https://telematici.agenziaentrate.gov.it/pdf/guidaFornitureOMI.pdf" target="_blank" rel="noopener noreferrer">Guida OMI</a></div>'+
 '</section>';
}
