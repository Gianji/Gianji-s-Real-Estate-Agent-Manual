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
function patentinoBookEsc(s){return esc(String(s??''))}
function patentinoBookMeta(b){
 const original=THEORY_CHAPTERS.find(c=>c.id===b.id);
 const modules=original?theoryChapterModules(original):[];
 const words=b.sections.flatMap(s=>s.paragraphs).join(' ').split(/[\s\u00a0]+/).filter(Boolean).length;
 const read=b.sections.filter((s,i)=>patentinoBookRead.has(b.id+':'+i)).length;
 return {modules,words,read,sections:b.sections.length};
}
function patentinoCitedCivilArticles(section){
 const text=[section.title,...section.paragraphs,section.focus,section.caseStudy,section.exam].join(' ');
 const found=new Set();
 for(const m of text.matchAll(/\b(?:articolo|articoli|art\.)\s+(\d{3,4})(?![-\w])/gi)){
  const n=Number(m[1]);
  if(n>100&&n<3000)found.add(n);
 }
 return [...found].sort((a,b)=>a-b);
}
function patentinoBookChapter(id){
 const b=patentinoVolume(id);
 if(!b)return null;
 const meta=patentinoBookMeta(b);
 const chapter=THEORY_CHAPTERS.find(c=>c.id===id);
 const num=chapter?THEORY_CHAPTERS.indexOf(chapter)+1:0;
 const contents=b.sections.map((s,i)=>{
  const completed=patentinoBookRead.has(b.id+':'+i);
  return '<button type="button" class="academic-index-item'+(completed?' read':'')+'" data-academic-goto="academic-part-'+i+'"><span class="academic-index-num">'+String(i+1).padStart(2,'0')+'</span><span>'+patentinoBookEsc(s.title)+'</span></button>';
 }).join('');
 const blocks=b.sections.map((s,i)=>{
  const checked=patentinoBookRead.has(b.id+':'+i);
  const articles=patentinoCitedCivilArticles(s).map(n=>'<a href="https://www.normattiva.it/atto/caricaDettaglioAtto?atto.articolo.numero='+n+'&amp;atto.articolo.sottoArticolo=1&amp;atto.articolo.tipoArticolo=2&amp;atto.codiceRedazionale=042U0262&amp;atto.dataPubblicazioneGazzetta=1942-04-04" target="_blank" rel="noopener noreferrer">Art. '+n+' c.c.</a>').join('');
  const refs=[...new Set(s.refs||[])].map(ref=>{
   const entry=patentinoSource(ref);
   return entry?'<li><a href="'+patentinoBookEsc(entry.url)+'" target="_blank" rel="noopener noreferrer">'+patentinoBookEsc(entry.label)+'</a></li>':'';
  }).join('');
  return '<section id="academic-part-'+i+'" class="academic-section" data-academic-section="'+i+'">'+
   '<div class="academic-section-heading"><div><span class="academic-section-number">PARAGRAFO '+String(i+1).padStart(2,'0')+' / '+String(b.sections.length).padStart(2,'0')+'</span>'+
   '<h2>'+patentinoBookEsc(s.title)+'</h2></div></div>'+
   '<div class="academic-prose">'+s.paragraphs.map(p=>'<p>'+patentinoBookEsc(p)+'</p>').join('')+'</div>'+
   '<aside class="academic-examination"><div class="academic-examination-item"><h3>Distinzione da padroneggiare</h3><p>'+patentinoBookEsc(s.focus)+'</p></div>'+
   '<div class="academic-examination-item"><h3>Caso applicativo</h3><p>'+patentinoBookEsc(s.caseStudy)+'</p></div>'+
   '<div class="academic-examination-item"><h3>Domanda possibile all’orale</h3><p>'+patentinoBookEsc(s.exam)+'</p></div></aside>'+
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
 '<div class="academic-cover-meta"><span>'+meta.sections+' paragrafi di trattazione</span><span>Riferimenti a fonti istituzionali</span><span>Prima redazione estesa · 2026</span></div></header>'+
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
