/* Selezione editoriale di livello orale: evita le domande generate automaticamente dalla teoria.
   L'archivio base integrale rimane nel percorso Ripasso definizioni. */
const ORAL_QUALITY_TARGETED_IDS=new Set(["catasto:0","catasto:1","catasto-terreni:1","urbanistica:0","urbanistica:1","estimo:1","estimo-calcoli:0","estimo-calcoli:1","contratti-pratica:0","contratti-pratica:1","agrario:0","orale:0","professione:1","professione:2","reali:1","obbligazioni:1","vendita:1","locazioni:0","successioni:1","adempimenti:0","pubblicita:1","condominio:1","diritto-soggetti:0","fisco:0","fisco-avanzato:1","mutui:0","formule:0","economia-azienda:0","economia-finanza:0","cremona:1"]);
const ORAL_QUALITY_REWRITES={
 "catasto:0": "Per vendere un A/2 ti consegnano solo una visura catastale. Quali dati puoi verificare e quali fatti giuridici non puoi dedurre da quel documento?",
 "catasto:1": "Il venditore ha spostato dei tramezzi e sostiene che basti PREGEO; il tecnico parla di DOCFA. Quali procedure riguardano i due catasti, e cosa non sanano?",
 "catasto-terreni:1": "Un terreno censito come seminativo ha un PGT che lo colloca in un ambito trasformabile. C'è una contraddizione fra Catasto e pianificazione urbanistica?",
 "urbanistica:0": "L'appartamento appare perfetto in planimetria, ma nessuno ha esaminato i vecchi titoli edilizi. Come procederesti prima di dichiararlo conforme?",
 "urbanistica:1": "Il proprietario ha presentato una CILA dopo un intervento che richiedeva un titolo diverso. Perché non puoi rispondere che 'CILA, SCIA e permesso sono equivalenti'?",
 "estimo:1": "Ti chiedono di stimare rapidamente un trilocale in una microzona di Cremona. Quali verifiche richiedi prima di fornire un valore difendibile alla commissione?",
 "estimo-calcoli:0": "Un balcone e una cantina vengono sommati integralmente alla superficie dell'appartamento. Spiega l'errore e il procedimento corretto.",
 "estimo-calcoli:1": "Un reddito netto stabilizzato è di 12.000 €/anno e il saggio è 6%. Qual è il valore nel modello diretto e quale errore sarebbe usare un reddito lordo?",
 "contratti-pratica:0": "Il venditore chiede di prendere l'incarico senza documenti e di verificare tutto dopo la caparra. Quali controlli imposteresti subito?",
 "contratti-pratica:1": "Partendo da una proposta con mutuo e caparra, descrivi le verifiche e gli atti fino al rogito, distinguendo preliminare, trascrizione e saldo.",
 "agrario:0": "Devi stimare un fondo irriguo con servitù e un affitto agrario in essere. Quali fattori incidono su metodo e valore?",
 "orale:0": "Una persona vende un immobile ereditato e mostra soltanto la dichiarazione di successione. Simula il dossier documentale fino al rogito.",
 "professione:1": "Una proposta accettata produce un preliminare, ma il mutuo è sottoposto a condizione sospensiva. Quando matura la provvigione, e perché non basta dire 'al rogito'?",
 "professione:2": "Durante una visita l'agente sa di un grave problema che incide sulla sicurezza dell'affare. Come deve comportarsi ex art. 1759 c.c.?",
 "reali:1": "Un conduttore lascia intendere ai vicini di possedere la casa. Quali differenze esistono fra detenzione e possesso e perché contano per l'usucapione?",
 "obbligazioni:1": "Un finanziamento ha ipoteca sull'immobile e fideiussione di un terzo. Che cosa cambia per responsabilità del garante e prelazione?",
 "vendita:1": "Prima del preliminare emerge un bene di provenienza donativa con iscrizione ipotecaria. Quali verifiche distinte avvii?",
 "locazioni:0": "Un proprietario confonde 4+4 e 3+2 e vuole fissare liberamente lo stesso canone e la stessa disdetta. Quali distinzioni è necessario fare?",
 "successioni:1": "È stato pubblicato un testamento ma mancano disposizioni su una parte del patrimonio. Quali forme di successione possono concorrere e con quali limiti?",
 "adempimenti:0": "Un'acquirente chiede di non indicare il titolare effettivo perché il rappresentante è già identificato. Quali controlli antiriciclaggio mancano?",
 "pubblicita:1": "Un promissario compratore afferma che registrare il preliminare lo protegge da ipoteche successive. Qual è la differenza con la trascrizione?",
 "condominio:1": "Stanno vendendo un alloggio con lavori straordinari deliberati e morosità. Quali informazioni ottieni dall'amministratore e come distingui i rapporti con il condominio?",
 "diritto-soggetti:0": "Il socio al 60% firma per vendere un immobile della S.r.l. Che cosa controlli per verificare il suo potere di rappresentanza?",
 "fisco:0": "Due immobili identici sono ceduti uno da privato e uno da impresa in regime IVA. Come cambiano imposte e base imponibile?",
 "fisco-avanzato:1": "Una seconda casa rivenduta dopo tre anni con profitto è necessariamente soggetta a tassazione della plusvalenza? Motiva le eccezioni.",
 "mutui:0": "Due offerte di mutuo presentano lo stesso TAN ma TAEG diversi. Come spieghi spread, TAN e TAEG all'acquirente?",
 "formule:0": "Rendita A/2 900 €: calcola un possibile valore catastale prima e seconda casa in prezzo-valore, specificando le ipotesi necessarie.",
 "economia-azienda:0": "L'agenzia conosce costi fissi e margine di contribuzione per vendita. Come determinare il punto di pareggio e quando la formula non basta?",
 "economia-finanza:0": "Un pagamento è previsto tra tre anni e il tasso di attualizzazione è noto. Come lo riporti alla data odierna e quali ipotesi servono?",
 "cremona:1": "Un terreno è indicato come potenzialmente edificabile a Cremona. Quali dati e documenti ti servono prima di promettere un numero di villette realizzabili?"
};

const ORAL_QUALITY_CORRECTIONS={
 "professione:1": "La provvigione ex art. 1755 c.c. richiede un affare concluso grazie all'intervento causale del mediatore: può bastare un preliminare vincolante, senza aspettare il rogito. Se però il contratto è sottoposto a condizione sospensiva, l'art. 1757 c.c. fa sorgere il diritto alla provvigione solo al verificarsi della condizione. Una condizione risolutiva segue la regola differente dell'art. 1757, comma 2. Bisogna verificare la formulazione del contratto, la prova dell'avveramento e i patti leciti delle parti.",
 "catasto:1": "DOCFA riguarda dichiarazioni e variazioni delle unità nel Catasto fabbricati; PREGEO riguarda gli aggiornamenti geometrici del Catasto terreni, come frazionamenti e tipi mappali. La voltura aggiorna invece l'intestazione. Nessuna delle due procedure conferisce da sola un titolo edilizio, elimina difformità urbanistiche o prova definitivamente la proprietà: l'operazione concreta va esaminata anche sotto il profilo edilizio.",
 "locazioni:0": "Il 4+4 a canone libero ha in generale quattro anni iniziali e rinnovo quadriennale, con diniego del primo rinnovo da parte del locatore soltanto nei casi e termini indicati dall'art. 3 della legge 431/1998. Il 3+2 a canone concordato richiede un canone conforme agli accordi territoriali applicabili, ha durata iniziale di tre anni e proroga legale ordinaria di due anni, e segue un proprio sistema di rinnovo e disdetta. Non si può estendere indistintamente la disciplina del 4+4 al 3+2. Per l'effettiva disciplina del preavviso vanno esaminati scadenza, soggetto che disdice, motivi e testo contrattuale.",
 "agrario:0": "La stima di un fondo agricolo parte da identificazione e destinazione, superficie, fertilità, colture, irrigazione, accessi, fabbricati, servitù e vincoli. L'affitto agrario in corso va esaminato per durata, opponibilità, redditività e disponibilità del bene, così come l'eventuale prelazione agraria. I comparabili devono rispecchiare fondi con caratteristiche e condizioni giuridiche omogenee; in alternativa, si può analizzare il reddito netto ordinario con saggio coerente. Il reddito dominicale catastale non è automaticamente il reddito capitalizzabile.",
 "vendita:1": "Verifico proprietà, provenienza e continuità delle trascrizioni, ipoteche, pignoramenti, servitù e altri diritti, catasto, urbanistica, agibilità, APE, locazioni, condominio, obblighi e condizioni del preliminare. Se la provenienza è donativa devo applicare anche le novità dell'art. 563 c.c. introdotte dall'art. 44 della legge 182/2025 e il relativo regime transitorio; un immobile donato non va automaticamente dichiarato invendibile. L'ipoteca richiede ispezione e verifica distinta della posizione creditoria e dell'eventuale cancellazione.",
 "pubblicita:1": "La registrazione del preliminare è un adempimento fiscale, mentre la trascrizione nei registri immobiliari, quando eseguita nelle forme di legge, conferisce un effetto prenotativo temporaneo contro formalità successive. L'art. 2645-bis c.c. prevede che la protezione cessi se non viene trascritto l'atto definitivo o la formalità idonea entro un anno dal termine convenuto per il definitivo e comunque entro tre anni dalla trascrizione del preliminare. Senza trascrizione non c'è quella priorità, anche se il contratto è registrato.",
 "successioni:1": "La successione testamentaria attua le disposizioni valide del de cuius; per i beni o le quote non validamente disciplinati può concorrere la successione legittima. In ogni caso vanno considerate le quote di riserva dei legittimari e gli strumenti di tutela. La pubblicazione del testamento non coincide necessariamente con l'acquisto dell'eredità: l'erede deve accettare, anche tacitamente nei casi previsti, mentre il legato segue proprie regole.",
 "urbanistica:1": "CILA, SCIA e permesso di costruire non sono titoli intercambiabili: il regime dipende dalla natura dell'intervento ai sensi del DPR 380/2001 e delle norme regionali applicabili. La CILA riguarda determinate opere soggette a comunicazione, la SCIA interventi soggetti a segnalazione certificata, il permesso gli interventi per cui la legge esige provvedimento. Una CILA presentata per opere che richiedevano altro titolo non sana automaticamente la difformità; servono accertamento tecnico e, quando possibile, percorso di regolarizzazione previsto."
};
const ORAL_QUALITY_RECENT_KEY='patentino-oral-recent-v2';
const oralQualityRecent=(()=>{try{const x=JSON.parse(localStorage.getItem(ORAL_QUALITY_RECENT_KEY)||'[]');return Array.isArray(x)?x.slice(-140):[]}catch{return []}})();
let oralQualityDeck=null;
function oralQualityEntries(){
 const originals=oralEntries().filter(e=>e.answer.kind==='advanced'||(e.answer.kind==='targeted'&&ORAL_QUALITY_TARGETED_IDS.has(e.id))).map(e=>({
  ...e,q:ORAL_QUALITY_REWRITES[e.id]||e.q,
  answer:ORAL_QUALITY_CORRECTIONS[e.id]?{...e.answer,text:ORAL_QUALITY_CORRECTIONS[e.id]}:e.answer,
  level:e.answer.kind==='advanced'?'advanced':'key',
  search:oralNorm(e.q+' '+e.module+' '+(ORAL_QUALITY_REWRITES[e.id]||''))
 }));
 const editorial=ORAL_EDITORIAL_2026.map(x=>{
  const m=MODULES.find(m=>m.id===x.mid);
  if(!m||!m.lessons[x.idx])throw new Error('Riferimento domanda orale non valido: '+x.id);
  const source=x.source?{label:'Fonte normativa o istituzionale',url:x.source}:null;
  return {id:x.id,mid:x.mid,i:x.idx,q:x.q,module:m.title,sector:x.mid==='cremona'?'cremona':sectorOf(m),
   level:'case',search:oralNorm(x.q+' '+m.title),
   answer:{text:x.answer,mistake:x.trap,refs:[{mid:x.mid,idx:x.idx}],source,kind:'editorial'}};
 });
 const combined=[...originals,...editorial];
 const seen=new Set();
 return combined.filter(e=>{
  const k=oralNorm(e.q);
  if(!k||seen.has(k))return false;
  seen.add(k);return true;
 });
}
function oralQualityShuffleArray(items){
 const order=shuffle(items);
 const recent=new Set(oralQualityRecent.slice(-55));
 const fresh=order.filter(e=>!recent.has(e.id));
 const old=order.filter(e=>recent.has(e.id));
 const out=[...fresh,...old];
 const newest=out.slice(0,30).map(e=>e.id);
 oralQualityRecent.push(...newest);
 if(oralQualityRecent.length>140)oralQualityRecent.splice(0,oralQualityRecent.length-140);
 try{localStorage.setItem(ORAL_QUALITY_RECENT_KEY,JSON.stringify(oralQualityRecent))}catch{}
 return out;
}
function oralQualityCard(e){
 const aid='oral-answer-'+e.id.replace(/[^a-z0-9_-]/gi,'-');
 const a=e.answer;
 const m=MODULES.find(x=>x.id===e.mid);
 const refs=(a.refs||[]).map(r=>{
  const l=MODULES.find(x=>x.id===r.mid)?.lessons[r.idx];
  return l?'<a href="#/lesson/'+encodeURIComponent(r.mid)+'/'+r.idx+'">'+esc(l.title)+' →</a>':'';
 }).filter(Boolean).join('');
 const source=a.source?'<div class="oral-answer-source"><span>Fonte:</span><a target="_blank" rel="noopener noreferrer" href="'+esc(a.source.url)+'">'+esc(a.source.label)+' ↗</a></div>':'';
 return '<article class="oral-quality-card" data-oral-quality-card data-oral-sector="'+esc(e.sector)+
  '" data-oral-module="'+esc(e.mid)+'" data-oral-level="'+esc(e.level)+'" data-oral-search="'+esc(e.search)+
  '" data-oral-quality-id="'+esc(e.id)+'"><div class="oral-quality-top"><span>'+esc(e.sector==='cremona'?'Focus Cremona':e.sector)+
  ' · '+esc(e.module)+'</span><span>'+(e.level==='case'?'CASO D’ESAME':e.level==='advanced'?'TRABOCCHETTO':'FONDAMENTALE APPLICATO')+'</span></div>'+
  '<div class="oral-question-row"><h3>'+esc(e.q)+'</h3>'+
  '<button type="button" class="oral-reveal" data-oral-toggle="'+aid+'" aria-controls="'+aid+
  '" aria-expanded="false">Mostra risposta <span aria-hidden="true">＋</span></button></div>'+
  '<div class="oral-answer" id="'+aid+'" hidden><div class="oral-answer-label">RISPOSTA RAGIONATA</div>'+
  '<p>'+esc(a.text).replace(/\n\n/g,'</p><p>')+'</p>'+
  (a.example?'<div class="oral-example"><strong>Esempio</strong><p>'+esc(a.example)+'</p></div>':'')+
  (a.mistake?'<div class="oral-caution"><strong>Controdomanda / errore da evitare</strong><p>'+esc(a.mistake)+'</p></div>':'')+
  (a.key?'<div class="oral-key"><strong>Da ricordare</strong><p>'+esc(a.key)+'</p></div>':'')+
  '<div class="oral-answer-source"><span>Lezione collegata:</span>'+refs+'</div>'+source+
  '</div></article>';
}
function renderOralExam(initialModule){
 const all=oralQualityEntries();
 oralQualityDeck=oralQualityShuffleArray(all);
 const selected=MODULES.some(m=>m.id===initialModule)?initialModule:'all';
 const cards=oralQualityDeck.map(oralQualityCard).join('');
 const areaLabels=ORAL_SECTORS.filter(x=>x[0]!=='all');
 const modules=MODULES.filter(m=>all.some(e=>e.mid===m.id));
 return pageTitle('ESAME ORALE · ALLENAMENTO','Domande da commissione.',
 'Casi pratici, eccezioni normative, collegamenti tra materie e calcoli: niente domande riempitive né risposte automatiche basate sul solo titolo di una lezione.')+
 '<div class="oral-hero"><div><strong>'+all.length+' domande selezionate</strong>'+
 '<p>Ordine mescolato fra tutte le materie, con riduzione delle ripetizioni recenti. Le domande semplici e le spiegazioni introduttive sono nel ripasso base separato. Le risposte sono redazionali e non rappresentano tracce certificate della commissione.</p></div>'+
 '<a class="btn btn-outline btn-sm" href="#/oralbase">Ripasso definizioni →</a></div>'+
 '<div class="oral-quality-toolbar"><label>Materia<select id="oral-exam-sector"><option value="all">Tutte le materie</option>'+
 areaLabels.map(([id,v])=>'<option value="'+id+'">'+esc(v)+'</option>').join('')+'</select></label>'+
 '<label>Argomento<select id="oral-exam-module"><option value="all">Tutti gli argomenti</option>'+
 modules.map(m=>'<option value="'+esc(m.id)+'"'+(selected===m.id?' selected':'')+'>'+esc(m.title)+'</option>').join('')+'</select></label>'+
 '<label>Tipo di domanda<select id="oral-exam-level"><option value="all">Tutte</option>'+
 '<option value="case">Casi ragionati</option><option value="advanced">Eccezioni e trabocchetti</option>'+
 '<option value="key">Fondamentali applicati</option></select></label>'+
 '<label class="oral-quality-search">Cerca<input id="oral-exam-search" type="search" placeholder="Parola chiave..." autocomplete="off"></label>'+
 '<div class="oral-quality-actions"><button type="button" class="btn btn-primary btn-sm" data-oral-exam-action="shuffle">Mescola di nuovo ↻</button>'+
 '<button type="button" class="btn btn-outline btn-sm" data-oral-exam-action="hide">Nascondi tutte</button>'+
 '<span><strong id="oral-exam-count">'+all.length+'</strong> domande visualizzate</span></div></div>'+
 '<div class="oral-quality-list" id="oral-exam-list">'+cards+'</div>'+
 '<div id="oral-exam-empty" class="oral-empty" hidden>Non ci sono domande corrispondenti ai filtri selezionati.</div>';
}
function oralExamFilter(){
 const sf=document.getElementById('oral-exam-sector');
 const mf=document.getElementById('oral-exam-module');
 const lf=document.getElementById('oral-exam-level');
 const qf=document.getElementById('oral-exam-search');
 if(!sf||!mf||!lf||!qf)return;
 const query=oralNorm(qf.value);
 let n=0;
 document.querySelectorAll('[data-oral-quality-card]').forEach(card=>{
  const d=card.dataset;
  const show=(sf.value==='all'||d.oralSector===sf.value)&&
   (mf.value==='all'||d.oralModule===mf.value)&&
   (lf.value==='all'||d.oralLevel===lf.value)&&
   (!query||d.oralSearch.includes(query));
  card.hidden=!show;if(show)n++;
 });
 document.getElementById('oral-exam-count').textContent=n;
 document.getElementById('oral-exam-empty').hidden=!!n;
}
function oralExamReshuffle(){
 const list=document.getElementById('oral-exam-list');if(!list)return;
 const cards=[...list.querySelectorAll('[data-oral-quality-card]')];
 // For reproducible application of the recent-question preference, reorder by ID.
 const recent=new Set(oralQualityRecent.slice(-55));
 const byId=new Map(cards.map(c=>{
  const aid=c.querySelector('[data-oral-toggle]')?.dataset.oralToggle||'';
  return [aid,c];
 }));
 const mixed=shuffle(cards);
 // Avoid re-presenting the same questions at the start of a new study round.
 const fresh=mixed.filter(c=>!recent.has(c.dataset.oralQualityId));
 const reused=mixed.filter(c=>recent.has(c.dataset.oralQualityId));
 const result=fresh.concat(reused);
 const first=result.slice(0,30).map(c=>c.dataset.oralQualityId);
 oralQualityRecent.push(...first);
 if(oralQualityRecent.length>140)oralQualityRecent.splice(0,oralQualityRecent.length-140);
 try{localStorage.setItem(ORAL_QUALITY_RECENT_KEY,JSON.stringify(oralQualityRecent))}catch{}
 // Hide all answers when beginning a new shuffled examination round.
 list.querySelectorAll('[data-oral-toggle][aria-expanded="true"]').forEach(b=>oralSetRevealed(b,false));
 list.replaceChildren(...result);oralExamFilter();
}
document.addEventListener('click',e=>{
 const b=e.target.closest('[data-oral-exam-action]');if(!b)return;
 if(b.dataset.oralExamAction==='hide')document.querySelectorAll('#oral-exam-list [data-oral-toggle][aria-expanded="true"]').forEach(x=>oralSetRevealed(x,false));
 if(b.dataset.oralExamAction==='shuffle')oralExamReshuffle();
});
document.addEventListener('change',e=>{
 if(['oral-exam-sector','oral-exam-module','oral-exam-level'].includes(e.target.id))oralExamFilter();
});
document.addEventListener('input',e=>{if(e.target.id==='oral-exam-search')oralExamFilter()});
