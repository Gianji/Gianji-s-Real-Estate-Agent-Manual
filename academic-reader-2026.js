/* PATENTINO — lettore di manuali accademici, con fonti e progresso autonomo per paragrafi. */
const PATENTINO_BOOK_READ_KEY='patentino-academic-read-v1';
const patentinoBookRead=(()=>{
 try {const x=JSON.parse(localStorage.getItem(PATENTINO_BOOK_READ_KEY)||'[]');return new Set(Array.isArray(x)?x:[])}
 catch{return new Set()}
})();
function patentinoVolume(id){
 return (window.PATENTINO_ACADEMIC_VOLUMES||[]).find(b=>b.id===id)||null;
}
function patentinoSource(id){
 return (window.PATENTINO_ACADEMIC_SOURCES||{})[id]||null;
}
/* Uniforma la grafia delle citazioni; non modifica le fonti originarie. */
function patentinoLegalStyle(value){
 let t=String(value??'');
 // Nelle disposizioni di attuazione si indica prima il corpus, poi il numero.
 t=t.replace(/\b(l['’])?(?:articolo|art\.)\s+(\d+(?:-[a-z]+)?)(?:\s*,\s*comma\s+(\d+))?\s+delle\s+disposizioni\s+(?:per\s+l['’]|di\s+)?attuazione\s+(?:al|del)\s+Codice\s+civile/gi,
  (_,article,num,comma)=> (article?(article[0]==='L'?'La ':'la '):'')+'disp. att. '+num+' c.c.'+(comma?', comma '+comma:''));
 t=t.replace(/\b(l['’])?(?:articolo|art\.)\s+(\d+(?:-[a-z]+)?)\s+disp\.\s*att\.\s*c\.c\./gi,
  (_,article,num)=>(article?(article[0]==='L'?'La ':'la '):'')+'disp. att. '+num+' c.c.');
 t=t.replace(/\b(?:disposizione|disposizioni)\s+attuativ[aoei]\s+(\d+(?:-[a-z]+)?)\s+(?:al|del)\s+Codice\s+civile/gi,
  (_,num)=>'disp. att. '+num+' c.c.');
 // Per gli articoli del codice civile occorre indicare il codice, non la legge generica.
 t=t.replace(/\b(articoli|artt\.)\s+(\d+(?:-[a-z]+)?)(\s+e\s+seguenti)?\s+del\s+Codice\s+civile/gi,
  (_,label,num,ss)=>'artt. '+num+(ss?' ss.':'')+' c.c.');
 t=t.replace(/\b(articolo|art\.)\s+(\d+(?:-[a-z]+)?)(\s*,\s*comma\s+\d+)?\s+del\s+Codice\s+civile/gi,
  (_,label,num,comma)=>'art. '+num+(comma||'')+' c.c.');
 // Abbreviazioni per tutte le altre disposizioni, senza attribuire loro il corpus c.c.
 t=t.replace(/\barticoli(?=\s+\d)/gi,'artt.');
 t=t.replace(/\barticolo(?=\s+\d)/gi,'art.');
 return t;
}
function patentinoBookEsc(s){return esc(patentinoLegalStyle(s))}
function patentinoBookMeta(b){
 const original=THEORY_CHAPTERS.find(c=>c.id===b.id);
 const modules=original?theoryChapterModules(original):[];
 const words=b.sections.flatMap(s=>s.paragraphs).join(' ').split(/[\s\u00a0]+/).filter(Boolean).length;
 const read=b.sections.filter((s,i)=>patentinoBookRead.has(b.id+':'+i)).length;
 return {modules,words,read,sections:b.sections.length};
}
function patentinoCitedCivilArticles(section){
 if(section.expert){
  const valid=/^\\d{1,4}(?:-(?:bis|ter|quater|quinquies))?$/i;
  const items=(section.expert.civilArticles||[]).map(String).filter(x=>valid.test(x)&&Number.parseInt(x,10)<=2969);
  const corpus=[section.title,...section.paragraphs].join(' ');
  for(const m of corpus.matchAll(/\\bart\\.\\s*(\\d{1,4}-(?:bis|ter|quater|quinquies))\\s*c\\.c\\./gi))items.push(m[1]);
  return [...new Set(items)].sort((a,b)=>Number.parseInt(a,10)-Number.parseInt(b,10));
 }
 const text=[section.title,...section.paragraphs,section.focus,section.caseStudy,section.exam].join(' ');
 const found=new Set();
 for(const m of text.matchAll(/\b(?:art(?:icolo|icoli)?\.?)\s*(\d{1,4})(?:\s*(?:e|,|-)\s*\d{1,4})?\s*(?:c\.\s*c\.|del\s+Codice\s+civile)(?=\W|$)/gi)){
  found.add(Number(m[1]));
 }
 return [...found].sort((a,b)=>a-b);
}

function patentinoExpertPanel(s){
 const u=s.expert;
 if(!u)return '<aside class="academic-examination"><div class="academic-examination-item"><h3>Distinzione da padroneggiare</h3><p>'+patentinoBookEsc(s.focus)+'</p></div>'+
 '<div class="academic-examination-item"><h3>Caso applicativo</h3><p>'+patentinoBookEsc(s.caseStudy)+'</p></div>'+
 '<div class="academic-examination-item"><h3>Domanda possibile all’orale</h3><p>'+patentinoBookEsc(s.exam)+'</p></div></aside>';
 const steps=(u.method||[]).map((v,i)=>'<li><span>'+String(i+1).padStart(2,'0')+'</span><p>'+patentinoBookEsc(v)+'</p></li>').join('');
 const limits=(u.limits||[]).map(v=>'<li>'+patentinoBookEsc(v)+'</li>').join('');
 const questions=(u.questions||[]).map((v,i)=>'<li><span>'+String(i+1).padStart(2,'0')+'</span>'+patentinoBookEsc(v)+'</li>').join('');
 return '<div class="academic-expert-material">'+
 '<section class="academic-expert-method"><h3>Procedimento operativo e metodo di verifica</h3><ol>'+steps+'</ol></section>'+
 '<section class="academic-expert-pitfalls"><h3>Eccezioni, limiti ed errori di qualificazione</h3><ul>'+limits+'</ul></section>'+
 '<section class="academic-expert-case"><h3>Fascicolo di studio · caso complesso</h3><p>'+patentinoBookEsc(u.caseFacts||'')+'</p>'+
 '<details><summary>Mostra il ragionamento motivato</summary><p>'+patentinoBookEsc(u.caseAnswer||'')+'</p></details></section>'+
 '<section class="academic-expert-oral"><h3>Interrogazione specialistica</h3><ol>'+questions+'</ol></section>'+
 '</div>';
}

function patentinoBookChapter(id){
 const b=patentinoVolume(id);
 if(!b)return null;
 const meta=patentinoBookMeta(b);
 const chapter=THEORY_CHAPTERS.find(c=>c.id===id);
 const num=chapter?THEORY_CHAPTERS.indexOf(chapter)+1:0;
 const advancedStart=b.sections.findIndex(s=>!!s.expert);
 const expertCount=b.sections.filter(s=>!!s.expert).length;
 const contents=b.sections.map((s,i)=>{
  const completed=patentinoBookRead.has(b.id+':'+i);
  const head=i===0?'<div class="academic-index-phase">PARTE I · FONDAMENTI</div>':i===advancedStart?'<div class="academic-index-phase expert">PARTE II · MONOGRAFIE SPECIALISTICHE</div>':'';
  return head+'<button type="button" class="academic-index-item'+(completed?' read':'')+(s.expert?' expert':'')+'" data-academic-goto="academic-part-'+i+'"><span class="academic-index-num">'+String(i+1).padStart(2,'0')+'</span><span>'+patentinoBookEsc(s.title)+'</span></button>';
 }).join('');
 const blocks=b.sections.map((s,i)=>{
  const checked=patentinoBookRead.has(b.id+':'+i);
  const articles=patentinoCitedCivilArticles(s).map(n=>{
   const base='https://www.normattiva.it/';
   const href=String(n).includes('-')?base+'eli/id/1942/04/04/042U0262/CONSOLIDATED':base+'atto/caricaDettaglioAtto?atto.articolo.numero='+n+'&amp;atto.articolo.sottoArticolo=1&amp;atto.articolo.tipoArticolo=2&amp;atto.codiceRedazionale=042U0262&amp;atto.dataPubblicazioneGazzetta=1942-04-04';
   return '<a href="'+href+'" target="_blank" rel="noopener noreferrer">art. '+n+' c.c.</a>';
  }).join('');
  const refs=[...new Set(s.refs||[])].map(ref=>{
   const entry=patentinoSource(ref);
   return entry?'<li><a href="'+patentinoBookEsc(entry.url)+'" target="_blank" rel="noopener noreferrer">'+patentinoBookEsc(entry.label)+'</a></li>':'';
  }).join('');
  return (i===advancedStart?'<div class="academic-phase-break"><span>PARTE II · STUDIO SPECIALISTICO</span><h2>Monografie di approfondimento</h2><p>Analisi interdisciplinare: regole, procedimenti, prove, eccezioni e casi complessi. Queste trattazioni ampliano il programma ma non sostituiscono i percorsi professionali abilitanti.</p></div>':'')+
   '<section id="academic-part-'+i+'" class="academic-section'+(s.expert?' academic-specialist-section':'')+'" data-academic-section="'+i+'">'+
   '<div class="academic-section-heading"><div><span class="academic-section-number">'+(s.expert?'MONOGRAFIA SPECIALISTICA · '+patentinoBookEsc(s.expert.view)+' · ':'PARAGRAFO ')+String(i+1).padStart(2,'0')+' / '+String(b.sections.length).padStart(2,'0')+'</span>'+
   '<h2>'+patentinoBookEsc(s.title)+'</h2></div></div>'+
   '<div class="academic-prose">'+s.paragraphs.map(p=>'<p>'+patentinoBookEsc(p)+'</p>').join('')+'</div>'+
   patentinoExpertPanel(s)+
   (refs||articles?'<div class="academic-references"><strong>Fonti per la verifica</strong>'+(articles?'<div class="academic-article-links">'+articles+'</div>':'')+(refs?'<ul>'+refs+'</ul>':'')+'</div>':'')+
   '<div class="academic-section-foot"><button type="button" class="academic-done'+(checked?' is-read':'')+'" data-academic-done="'+patentinoBookEsc(b.id)+'|'+i+'" aria-pressed="'+(checked?'true':'false')+'">'+(checked?'Segnato come letto':'Segna questo paragrafo come letto')+'</button><a href="#/studio">Torna all’indice generale</a></div>'+
   '</section>';
 }).join('');
 const sources=[...new Set(b.sections.flatMap(s=>s.refs||[]))].map(ref=>{
  const entry=patentinoSource(ref);
  return entry?'<li><a href="'+patentinoBookEsc(entry.url)+'" target="_blank" rel="noopener noreferrer">'+patentinoBookEsc(entry.label)+'</a></li>':'';
 }).join('');
 const legacy=meta.modules.map((m,i)=>'<details class="academic-legacy-module"><summary>'+patentinoBookEsc(m.title)+' <span>'+m.lessons.length+' schede</span></summary>'+
 '<div class="academic-legacy-inner"><p>Le schede brevi originali restano disponibili per i progressi precedenti e i mini-quiz. Non sostituiscono la lettura di questo volume.</p>'+
 m.lessons.map((l,j)=>'<a href="#/lesson/'+encodeURIComponent(m.id)+'/'+j+'">'+patentinoBookEsc(l.title)+'</a>').join('')+'</div></details>').join('');
 const completePct=b.sections.length?Math.round(meta.read/b.sections.length*100):0;
 return '<div class="academic-reader">'+
 '<div class="academic-return"><a href="#/studio">‹ Indice dello Studio</a><span>COLLANA PATENTINO · TESTO DI APPROFONDIMENTO</span></div>'+
 '<header class="academic-cover"><div class="academic-cover-overline">MANUALE DI PREPARAZIONE · VOLUME '+String(num).padStart(2,'0')+'</div><h1>'+patentinoBookEsc(b.title)+'</h1><p>'+patentinoBookEsc(b.lead)+'</p>'+
 '<div class="academic-cover-meta"><span>'+meta.sections+' paragrafi</span>'+(expertCount?'<span>'+expertCount+' monografie specialistiche</span>':'')+'<span>Fonti primarie e standard professionali</span><span>Redazione in ampliamento · novembre 2026</span></div></header>'+
 '<div class="academic-toolbar"><div><strong>Il tuo avanzamento nel volume</strong><span id="academic-progress-label">'+meta.read+' di '+meta.sections+' paragrafi letti</span></div>'+
 '<div class="academic-progress-bar"><span id="academic-progress-fill" style="width:'+completePct+'%"></span></div><button type="button" data-academic-print>Stampa / salva PDF</button></div>'+
 '<div class="academic-layout"><aside class="academic-toc"><div class="academic-toc-sticky"><div class="academic-toc-caption">INDICE DEL VOLUME</div><nav aria-label="Indice dei paragrafi">'+contents+'</nav><button type="button" class="academic-toc-top" data-academic-top>↑ Torna all’inizio</button></div></aside>'+
 '<div class="academic-chapters"><div class="academic-introduction"><div class="academic-intro-number">AVVERTENZA METODOLOGICA</div><p>Questo testo integra il programma di preparazione all’esame con una trattazione ragionata. Distingue disposizione normativa, spiegazione, ipotesi esemplificativa e domanda d’esame. Le fonti collegate consentono di controllare il testo vigente; i casi applicativi sono esempi didattici e non sostituiscono consulenze tecniche o legali.</p><p>La redazione è progressiva: la presenza del volume non significa che ogni possibile eccezione legislativa o giurisprudenziale sia già stata esaminata. Per i termini e le aliquote variabili prevale sempre la disciplina applicabile alla data del fatto.</p></div>'+
 blocks+
 '<section class="academic-bibliography"><span class="academic-section-number">APPARATO DOCUMENTALE</span><h2>Normativa e fonti consultabili</h2><p>I rimandi riportano il testo ufficiale o materiale istituzionale pertinente. Controlla le versioni vigenti e le rispettive date.</p><ol>'+sources+'</ol></section>'+
 '<section class="academic-legacy"><details><summary>Schede sintetiche e lezioni precedenti <span>materiale di supporto</span></summary><div class="academic-legacy-content"><p>Le lezioni precedenti non sono state cancellate. Si aprono qui soltanto se vuoi rivedere i tuoi vecchi appunti o mantenere il completamento già segnato.</p>'+legacy+'</div></details></section>'+
 '</div></div></div>';
}
(function(){
 // Desktop reading index: keep current section visible while the whole index sticks.
 let previousToc=null;
 let previousSection='';
 let tocScrollScheduled=false;
 function syncReadingIndex(){
  tocScrollScheduled=false;
  if(window.innerWidth<791)return;
  const toc=document.querySelector('.academic-reader .academic-toc');
  if(!toc){previousToc=null;previousSection='';return;}
  const sections=document.querySelectorAll('.academic-reader .academic-section');
  if(!sections.length)return;
  let active=sections[0];
  for(const section of sections){
   if(section.getBoundingClientRect().top<=145)active=section;
   else break;
  }
  const changed=toc!==previousToc||active.id!==previousSection;
  if(!changed)return;
  const buttons=toc.querySelectorAll('[data-academic-goto]');
  let selected=null;
  for(const button of buttons){
   const current=button.dataset.academicGoto===active.id;
   button.classList.toggle('is-current',current);
   if(current){button.setAttribute('aria-current','location');selected=button;}
   else button.removeAttribute('aria-current');
  }
  previousToc=toc;
  previousSection=active.id;
  if(!selected)return;
  const outer=toc.getBoundingClientRect();
  const inner=selected.getBoundingClientRect();
  const margin=30;
  if(inner.top<outer.top+margin||inner.bottom>outer.bottom-margin){
   toc.scrollTo({top:Math.max(0,toc.scrollTop+inner.top-outer.top-outer.height/3),behavior:'smooth'});
  }
 }
 function scheduleReadingIndex(){
  if(tocScrollScheduled)return;
  tocScrollScheduled=true;
  window.requestAnimationFrame(syncReadingIndex);
 }
 window.addEventListener('scroll',scheduleReadingIndex,{passive:true});
 window.addEventListener('resize',scheduleReadingIndex);
 let previousPrintDetails=[];
 window.addEventListener('beforeprint',()=>{
  previousPrintDetails=Array.from(document.querySelectorAll('.academic-expert-case details')).map(el=>({el,wasOpen:el.open}));
  previousPrintDetails.forEach(x=>{x.el.open=true});
 });
 window.addEventListener('afterprint',()=>{
  previousPrintDetails.forEach(x=>{x.el.open=x.wasOpen});
  previousPrintDetails=[];
 });
 const original=renderUnifiedChapter;
 renderUnifiedChapter=function(id){
  const academic=patentinoBookChapter(id);
  if(academic!==null)return academic;
  const book=THEORY_CHAPTERS.find(c=>c.id===id);
  return '<div class="academic-fallback-notice"><strong>Trattazione accademica in ampliamento</strong><p>Per questo volume è disponibile il percorso di lezioni originale. Non viene presentato come già completo un manuale che deve ancora essere approfondito.</p></div>'+original(id);
 };
 document.addEventListener('click',e=>{
  const jump=e.target.closest('[data-academic-goto]');
  if(jump){document.getElementById(jump.dataset.academicGoto)?.scrollIntoView({behavior:'smooth',block:'start'});return;}
  if(e.target.closest('[data-academic-top]')){window.scrollTo({top:0,behavior:'smooth'});return;}
  if(e.target.closest('[data-academic-print]')){window.print();return;}
  const done=e.target.closest('[data-academic-done]');
  if(!done)return;
  const [id,i]=done.dataset.academicDone.split('|');
  const b=patentinoVolume(id);
  if(!b||!Number.isInteger(Number(i))||Number(i)<0||Number(i)>=b.sections.length)return;
  const k=id+':'+i;
  if(patentinoBookRead.has(k))patentinoBookRead.delete(k);else patentinoBookRead.add(k);
  try{localStorage.setItem(PATENTINO_BOOK_READ_KEY,JSON.stringify([...patentinoBookRead]))}catch{}
  const isRead=patentinoBookRead.has(k);
  done.classList.toggle('is-read',isRead);done.setAttribute('aria-pressed',String(isRead));done.textContent=isRead?'Segnato come letto':'Segna questo paragrafo come letto';
  const read=patentinoBookMeta(b).read;
  const caption=document.getElementById('academic-progress-label');
  if(caption)caption.textContent=read+' di '+b.sections.length+' paragrafi letti';
  const bar=document.getElementById('academic-progress-fill');
  if(bar)bar.style.width=Math.round(100*read/b.sections.length)+'%';
  const index=document.querySelectorAll('.academic-index-item');
  if(index[Number(i)])index[Number(i)].classList.toggle('read',isRead);
 });
})();
