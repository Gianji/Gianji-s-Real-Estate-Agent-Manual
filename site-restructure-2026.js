/* PATENTINO — navigazione a tre aree. I contenuti, gli ID e i progressi restano quelli originali. */
(function(){
'use strict';
const SITE_AREAS={
 a:[['normativa','Normativa','Regole, contratti, obbligazioni e discipline applicabili.'],['tecnica','Tecnica','Valutazioni, edilizia, economia e pratica immobiliare.']],
 b:[['diritto','Diritto','Diritto civile, diritti reali, obbligazioni e contratti.'],['estimo','Estimo','Metodi di stima, aspetti economici, estimo speciale e agrario.'],['commerciale','Commerciale','Mediazione, attività d’impresa, economia, credito e fiscalità.'],['immobiliare','Immobiliare','Catasto, urbanistica, edilizia e documentazione operativa.']]
};
function site2026Sector(ch){
 if(ch.id==='professione-impresa'||ch.sector==='economia')return 'commerciale';
 if(ch.sector==='diritto')return 'diritto';
 if(ch.id.indexOf('estimo-')===0||ch.id==='agrario-rurale')return 'estimo';
 return 'immobiliare';
}
function site2026Count(modules){
 let done=0,total=0;
 modules.forEach(m=>{total+=m.lessons.length;done+=m.lessons.filter((_,i)=>data.completed.includes(m.id+':'+i)).length});
 return {done:done,total:total};
}
function site2026Study(division,selected){
 const mode=division==='b'?'b':'a';
 const opts=SITE_AREAS[mode];
 const active=opts.some(o=>o[0]===selected)?selected:'all';
 const tabs='<nav class="site2026-tabs" aria-label="Modalità di divisione dello studio"><a class="'+(mode==='a'?'selected':'')+'" href="#/studio/a">Divisione A <span>Normativa e Tecnica</span></a><a class="'+(mode==='b'?'selected':'')+'" href="#/studio/b">Divisione B <span>Quattro materie</span></a></nav>';
 const filter='<nav class="site2026-pills" aria-label="Filtra le materie"><a class="'+(active==='all'?'selected':'')+'" href="#/studio/'+mode+'/all">Tutte</a>'+opts.map(o=>'<a class="'+(active===o[0]?'selected':'')+'" href="#/studio/'+mode+'/'+o[0]+'">'+esc(o[1])+'</a>').join('')+'</nav>';
 const groups=opts.filter(o=>active==='all'||o[0]===active).map(o=>{
  const chapters=THEORY_CHAPTERS.map(ch=>({ch:ch,modules:theoryChapterModules(ch).filter(m=>mode==='a'?m.category===o[0]:site2026Sector(ch)===o[0])})).filter(x=>x.modules.length);
  const groupModules=chapters.flatMap(x=>x.modules),stat=site2026Count(groupModules);
  const cards=chapters.map(x=>{
   const b=typeof patentinoVolume==='function'?patentinoVolume(x.ch.id):null;
   const stat=site2026Count(x.modules);
   const read=b&&typeof patentinoBookRead!=='undefined'?b.sections.filter((_,i)=>patentinoBookRead.has(b.id+':'+i)).length:0;
   const rows=x.modules.map(m=>{
    const progress=site2026Count([m]);
    return '<a class="site2026-module" href="#/module/'+encodeURIComponent(m.id)+'"><span><strong>'+esc(m.title)+'</strong><small>'+esc(m.description)+'</small></span><em>'+progress.done+'/'+progress.total+'</em></a>';
   }).join('');
   const preview=b?'<div class="site2026-academic-preview"><div class="site2026-academic-intro"><strong>Volume di approfondimento</strong><span>'+b.sections.length+' paragrafi · '+read+' segnati come letti</span></div>'+
    '<ol>'+b.sections.slice(0,5).map((p,i)=>'<li><span>'+String(i+1).padStart(2,'0')+'</span>'+esc(p.title)+'</li>').join('')+(b.sections.length>5?'<li class="site2026-academic-more">e altri '+(b.sections.length-5)+' paragrafi</li>':'')+'</ol>'+
    '<a class="site2026-academic-read" href="#/chapter/'+encodeURIComponent(x.ch.id)+'">Leggi il manuale <span aria-hidden="true">↗</span></a>'+
    '<details class="site2026-academic-legacy"><summary>Schede e moduli precedenti</summary><div class="site2026-modules">'+rows+'</div></details></div>'
   :'<div class="site2026-chapter-content"><div class="site2026-modules">'+rows+'</div><a class="site2026-text-link" href="#/chapter/'+encodeURIComponent(x.ch.id)+'">Apri le lezioni originali</a></div>';
   return '<details class="site2026-chapter"><summary><span class="site2026-chapter-main"><small>VOLUME · '+esc(o[1].toUpperCase())+'</small><strong>'+esc(x.ch.title)+'</strong><small>'+esc(x.ch.desc)+'</small></span>'+
    '<span class="site2026-chapter-meta">'+(b?b.sections.length+' paragrafi approfonditi':x.modules.length+' moduli')+'</span><span class="site2026-chevron" aria-hidden="true">⌄</span></summary>'+preview+'</details>';
  }).join('');
  return '<section class="site2026-study-group"><div class="site2026-group-head"><div><div class="site2026-overline">'+(mode==='a'?'DIVISIONE A':'DIVISIONE B')+'</div><h2>'+esc(o[1])+'</h2><p>'+esc(o[2])+'</p></div><div class="site2026-count">'+stat.done+' / '+stat.total+' lezioni completate</div></div><div class="site2026-chapters">'+cards+'</div></section>';
 }).join('');
 return '<div class="site2026-page">'+pageTitle('COLLANA ACCADEMICA','Studio','Scegli la divisione del programma e apri i volumi di approfondimento. Norme, teoria, distinzioni, casi e fonti sono riuniti in testi continui. La redazione è in progressivo ampliamento.')+tabs+filter+groups+
 '<div class="site2026-secondary"><a href="#/sources">Consulta le fonti ufficiali</a><a href="#/ripasso-generale/argomenti">Ripassa per argomento</a></div></div>';
}
function site2026Card(title,description,url,meta,extra){
 return '<a class="site2026-choice" href="'+url+'"><span class="site2026-choice-main"><strong>'+title+'</strong><span>'+description+'</span></span><span class="site2026-choice-meta">'+(meta||'Apri')+' <b aria-hidden="true">›</b></span></a>'+(extra||'');
}
function site2026Domande(){
 return '<div class="site2026-page">'+pageTitle('ALLENAMENTO','Domande','Quattro percorsi per esercitarti, dalla simulazione completa al ripasso degli errori.')+
 '<div class="site2026-area-list">'+
 site2026Card('Simulazione','Prova scritta completa con punteggio e condizioni di superamento.','#/exam','Avvia')+
 '<section class="site2026-block"><div class="site2026-block-head"><div><h2>Quiz</h2><p>Allenamenti guidati e filtri per materia, argomento e provenienza.</p></div><a class="site2026-small-link" href="#/quiz">Configura i filtri ›</a></div><div class="site2026-mode-row"><button type="button" data-site2026-action="flash">Quiz flash <small>10 domande casuali</small></button><button type="button" data-site2026-action="streak">Fino alla morte <small>Termina al primo errore</small></button><a href="#/quiz">Quiz guidato <small>Personalizza la sessione</small></a></div></section>'+
 site2026Card('Domande aperte','Allenamento orale per argomento, difficoltà e parole chiave, con risposte da mostrare o nascondere.','#/oral','Esercitati')+
 site2026Card('Ripasso','Rivedi le risposte sbagliate, i preferiti e i tuoi appunti.','#/review','Rivedi')+
 '</div><div class="site2026-secondary"><a href="#/archive">Banche ufficiali</a><a href="#/milanobank">Tracce di Milano</a><a href="#/oralbase">Ripasso definizioni</a></div></div>';
}
function site2026Quiz(){
 if(streakSession)return renderStreakGame();
 if(quizSession)return renderQuizGame();
 const pool=categoryQuestions(quizSubject,quizModule,quizOrigin,quizSector);
 const available=quizSize==='errors'?pool.filter(q=>data.wrong.includes(q.id)).length:pool.length;
 const origOpts=[['all','Banca revisionata (originali e fonti)']];
 const opts=[['10','Flash · 10 domande'],['20','Guidato · 20 domande'],['50','Approfondito · 50 domande'],['errors','Solo errori']];
 const select=(id,values,active)=>'<select id="'+id+'">'+values.map(v=>'<option value="'+v[0]+'"'+(String(v[0])===String(active)?' selected':'')+'>'+esc(v[1])+'</option>').join('')+'</select>';
 const modules=MODULES.filter(m=>(quizSubject==='all'||m.category===quizSubject)&&(quizSector==='all'||sectorOf(m)===quizSector)&&(m.id!=='cremona'||quizOrigin==='cremona'));
 const subjectOpts=[['all','Normativa e Tecnica'],['normativa','Normativa'],['tecnica','Tecnica']];
 const sectors=[['all','Tutte le materie']].concat(THEORY_SECTORS.map(s=>[s.id,s.name]));
 return '<div class="site2026-page">'+pageTitle('DOMANDE / QUIZ','Quiz selettivi','Quesiti originali ad alta difficoltà: condizioni, eccezioni, tempi, ipotesi concorrenti e calcoli. Tutte le risposte hanno motivazione e fonte; i quiz d’archivio non revisionati sono esclusi dal punteggio.')+
 '<div class="site2026-quiz-layout"><div class="site2026-form-panel"><h2>Imposta la sessione</h2><div class="site2026-form-grid">'+
 '<label>Modalità'+select('site2026-quiz-size',opts,quizSize)+'</label>'+
 '<label>Divisione della prova'+select('quiz-subject',subjectOpts,quizSubject)+'</label>'+
 '<label>Materia'+select('quiz-sector',sectors,quizSector)+'</label>'+
 '<label>Argomento'+select('quiz-module',[['all','Tutti gli argomenti']].concat(modules.map(m=>[m.id,m.title])),quizModule)+'</label>'+
 '<div class="site2026-quiz-proof"><strong>Controllo editoriale</strong><small>Solo quesiti con soluzione motivata, fonte e data della revisione. Non sono domande ufficiali.</small></div>'+
 '</div><div class="site2026-form-footer"><span>'+available+' quesiti disponibili con questi filtri</span><button class="btn btn-primary" type="button" data-action="start-quiz">Inizia il quiz</button></div></div>'+
 '<aside class="site2026-form-side"><h3>Modalità rapide</h3><button type="button" data-site2026-action="flash">Quiz flash <small>10 domande casuali, senza timer</small></button><button type="button" data-action="start-streak-filtered">Fino alla morte <small>Utilizza i filtri selezionati</small></button><button type="button" data-action="start-streak-all">Fino alla morte · tutto <small>Usa l’intera banca esercitazioni</small></button><button type="button" data-action="start-expert-quiz">Quiz di massima difficoltà <small>20 casi con insidie e risposte documentate</small></button></aside></div>'+
 '<div class="site2026-secondary"><a href="#/archive">Archivio delle batterie storiche (non corrette in questa modalità)</a><a href="#/milanobank">Tracce pubblicate da Milano · risposte editoriali da verificare</a><a href="#/domande">Torna a Domande</a></div></div>';
}
function site2026Topics(){
 const chapters=THEORY_CHAPTERS.map(c=>{
  const modules=theoryChapterModules(c);
  const list=modules.map(m=>{
   const points=Array.isArray(m.summary)?m.summary:typeof m.summary==='string'?[m.summary]:[];
   const p=points.filter(Boolean).slice(0,12).map(x=>'<li>'+esc(x)+'</li>').join('');
   return '<article class="site2026-topic" data-site2026-topic data-search="'+esc((c.title+' '+m.title+' '+m.description+' '+points.join(' ')).toLocaleLowerCase('it'))+'"><div><h3>'+esc(m.title)+'</h3><p>'+esc(m.description)+'</p>'+(p?'<ul>'+p+'</ul>':'<p>Consulta le lezioni per le definizioni e gli esempi.</p>')+'</div><a href="#/module/'+encodeURIComponent(m.id)+'">Approfondisci</a></article>';
  }).join('');
  return '<details class="site2026-topic-chapter" data-site2026-chapter><summary>'+esc(c.title)+' <small>'+modules.length+' argomenti</small></summary><div>'+list+'</div></details>';
 }).join('');
 return pageTitle('RIPASSO GENERALE','Ripasso per argomenti','Schede sintetiche ricavate dai moduli già presenti. Ogni argomento rimanda alla lezione completa, senza creare contenuti duplicati.')+
 '<div class="site2026-topic-toolbar"><label for="site2026-topic-search">Cerca una parola o un argomento</label><input type="search" id="site2026-topic-search" placeholder="Es. ipoteca, catasto, valore di mercato..." autocomplete="off" /></div><div id="site2026-topic-results" class="site2026-chapters">'+chapters+'</div><p id="site2026-topic-empty" class="site2026-empty" hidden>Nessun argomento trovato.</p>';
}
function site2026Ripasso(kind){
 if(kind==='argomenti')return '<div class="site2026-page"><a class="site2026-back" href="#/ripasso-generale">‹ Ripasso generale</a>'+site2026Topics()+'</div>';
 const maps=CM_SECTIONS.map(s=>'<a class="site2026-map" href="#/mindmap/'+encodeURIComponent(s.id)+'"><strong>'+esc(s.label)+'</strong><span>Apri la mappa e scarica il PDF A4</span><b aria-hidden="true">›</b></a>').join('');
 return '<div class="site2026-page">'+pageTitle('CONSULTAZIONE RAPIDA','Ripasso generale','Riprendi i concetti con schemi visivi scaricabili oppure con schede organizzate per argomento.')+
 '<div class="site2026-area-list">'+site2026Card('Mappe concettuali','Schemi navigabili e download in PDF A4, divisi per materia.','#/mindmap','Visualizza')+
 site2026Card('Ripasso argomenti','Definizioni e concetti essenziali, ordinati per capitolo con link alle spiegazioni complete.','#/ripasso-generale/argomenti','Consulta')+'</div>'+
 '<section class="site2026-map-section"><h2>Mappe disponibili</h2><div class="site2026-map-list">'+maps+'</div></section></div>';
}

/* Home editoriale, accessibile senza login e alimentata dai progressi locali. */
function site2026Home(){
 const ordered=typeof theoryOrderedModules==='function'?theoryOrderedModules():MODULES.filter(m=>m.id!=='cremona');
 const studyList=ordered.flatMap(m=>m.lessons.map((l,i)=>({mid:m.id,idx:i,id:m.id+':'+i,title:l.title,module:m.title})));
 const first=studyList.find(l=>!data.completed.includes(l.id));
 const validIds=new Set(allLessons.map(l=>l.id));
 const done=data.completed.filter(id=>validIds.has(id)).length;
 const total=allLessons.length;
 const volumes=window.PATENTINO_ACADEMIC_VOLUMES||[];
 const readSet=typeof patentinoBookRead!=='undefined'?patentinoBookRead:new Set();
 const bookTotal=volumes.reduce((n,b)=>n+b.sections.length,0);
 const bookRead=volumes.reduce((n,b)=>n+b.sections.filter((_,i)=>readSet.has(b.id+':'+i)).length,0);
 const percent=bookTotal?Math.min(100,Math.round(100*bookRead/bookTotal)):(total?Math.min(100,Math.round(done/total*100)):0);
 const wrongCount=data.wrong.filter(id=>QUESTIONS.some(q=>q.id===id)).length;
 const best=Number(data.streakBest)||0;
 const nextVolume=volumes.find(b=>b.sections.some((_,i)=>!readSet.has(b.id+':'+i)));
 const mainLink=nextVolume?'#/chapter/'+encodeURIComponent(nextVolume.id):first?'#/lesson/'+encodeURIComponent(first.mid)+'/'+first.idx:'#/studio';
 const mainTitle=nextVolume?'Continua con il manuale':'Consulta il programma';
 const subtitle=nextVolume?'Prossimo volume: '+esc(nextVolume.title):'I paragrafi pubblicati sono stati tutti segnati come letti.';
 const pictogram='<svg viewBox="0 0 340 270" role="img" aria-label="Illustrazione geometrica di edifici, linee architettoniche e un tetto" xmlns="http://www.w3.org/2000/svg" fill="none"><path d="M26 229H314" stroke="#92B6D2" stroke-width="2"/><path d="M53 229V100L150 47L247 100V229" stroke="#CEE1EF" stroke-width="2.5"/><path d="M40 108L150 44L260 108" stroke="#F49A38" stroke-width="5" stroke-linecap="square"/><path d="M89 229V119H209V229" stroke="#8DB5D3" stroke-width="2"/><path d="M113 145H145V179H113zM160 145H192V179H160z" stroke="#C7DFED" stroke-width="2"/><path d="M135 229V195H172V229" stroke="#C7DFED" stroke-width="2"/><path d="M237 229V139H286V229" stroke="#77A7C8" stroke-width="2"/><path d="M249 156H274M249 177H274M249 198H274" stroke="#A8C9DE" stroke-width="1.7"/><path d="M16 229V165H53" stroke="#709FBE" stroke-width="2"/><path d="M26 180H43M26 199H43" stroke="#709FBE" stroke-width="1.5"/><path d="M79 66V35M79 35H99" stroke="#F49A38" stroke-width="2"/><circle cx="79" cy="35" r="4" fill="#F49A38"/></svg>';
 return '<div class="site2026-home">'+
 '<div class="site2026-home-kicker"><span class="site2026-home-kicker-mark"></span><span>PATENTINO / PERCORSO DI PREPARAZIONE</span><small>ESAME AGENTE IMMOBILIARE</small></div>'+
 '<section class="site2026-home-hero" aria-labelledby="site2026-home-title"><div class="site2026-home-hero-copy">'+
 '<span class="site2026-home-eyebrow">MANUALE DI STUDIO</span>'+
 '<h1 id="site2026-home-title">Prepararsi,<br><em>con metodo.</em></h1>'+
 '<p>Un unico spazio per studiare il programma, allenarti sulle domande d’esame e ripassare gli argomenti fondamentali.</p>'+
 '<div class="site2026-home-hero-actions"><a class="site2026-home-button" href="'+mainLink+'">'+mainTitle+' <span aria-hidden="true">↗</span></a><a class="site2026-home-hero-secondary" href="#/studio">Esplora lo studio</a></div>'+
 '<div class="site2026-home-next">'+subtitle+'</div></div>'+
 '<div class="site2026-home-illustration" aria-hidden="true"><div class="site2026-home-illustration-frame">'+pictogram+'</div><div class="site2026-home-visual-caption">STUDIO · PRATICA · RIPASSO <span>01 / 03</span></div></div></section>'+
 '<section class="site2026-home-progress" aria-label="I tuoi progressi"><div class="site2026-home-progress-lead"><div><span class="site2026-home-overline">IL TUO PERCORSO</span><h2>La tua lettura, passo dopo passo.</h2></div><span class="site2026-home-percent">'+percent+'<small>%</small></span></div>'+
 '<div class="site2026-home-progress-track" role="progressbar" aria-label="Paragrafi accademici letti" aria-valuemin="0" aria-valuemax="100" aria-valuenow="'+percent+'"><span style="width:'+percent+'%"></span></div>'+
 '<div class="site2026-home-metrics"><div><b>'+bookRead+' <span>/ '+bookTotal+'</span></b><small>Paragrafi dei manuali letti</small></div><div><b>'+done+' <span>/ '+total+'</span></b><small>Lezioni precedenti completate</small></div><div><b>'+wrongCount+'</b><small>Quesiti da rivedere · Record '+best+'</small></div></div></section>'+
 '<section class="site2026-home-paths" aria-labelledby="site2026-home-paths-title"><div class="site2026-home-section-head"><div><span class="site2026-home-overline">DA DOVE COMINCIARE</span><h2 id="site2026-home-paths-title">Tre aree, un unico obiettivo.</h2></div><p>Seleziona il percorso che ti serve.</p></div>'+
 '<div class="site2026-home-path-grid">'+
 '<a class="site2026-home-path" href="#/studio"><span class="site2026-home-path-index">01 <span>—</span> CONOSCENZA</span><h3>Studio</h3><p>Esplora il programma diviso in Normativa e Tecnica, oppure in quattro materie.</p><span class="site2026-home-path-cta">Vai allo studio <b aria-hidden="true">↗</b></span></a>'+
 '<a class="site2026-home-path" href="#/domande"><span class="site2026-home-path-index">02 <span>—</span> ALLENAMENTO</span><h3>Domande</h3><p>Simulazioni d’esame, quiz guidati, domande aperte e ripasso degli errori.</p><span class="site2026-home-path-cta">Esercitati <b aria-hidden="true">↗</b></span></a>'+
 '<a class="site2026-home-path" href="#/ripasso-generale"><span class="site2026-home-path-index">03 <span>—</span> CONSOLIDAMENTO</span><h3>Ripasso generale</h3><p>Mappe concettuali scaricabili e schede per fissare i concetti essenziali.</p><span class="site2026-home-path-cta">Apri il ripasso <b aria-hidden="true">↗</b></span></a>'+
 '</div></section>'+
 '<section class="site2026-home-finish"><div><span class="site2026-home-overline">METTITI ALLA PROVA</span><h2>Quando vuoi, verifica la tua preparazione.</h2><p>Avvia una simulazione oppure esercitati rapidamente con dieci domande casuali.</p></div>'+
 '<div class="site2026-home-finish-actions"><a href="#/exam">Simulazione d’esame <span aria-hidden="true">↗</span></a><button type="button" data-site2026-action="flash">Quiz flash <span aria-hidden="true">↗</span></button></div></section>'+
 '<div class="site2026-home-disclaimer">Risorsa didattica indipendente. Non costituisce un sito ufficiale del franchising Tecnorete né delle Camere di Commercio.</div>'+
 '</div>';
}

const site2026OriginalNav=navActive;
navActive=function(view){
 const group=view==='home'?'home':['studio','library','chapter','module','lesson','sources'].includes(view)?'studio':
 ['domande','quiz','exam','oral','oralbase','archive','officialtest','milanobank','review','flashcards'].includes(view)?'domande':'ripasso-generale';
 document.querySelectorAll('[data-nav]').forEach(el=>el.classList.toggle('active',el.dataset.nav===group));
 const names={home:'Home',studio:'Studio',library:'Studio',chapter:'Capitolo',module:'Modulo',lesson:'Lezione',domande:'Domande',quiz:'Quiz',exam:'Simulazione',oral:'Domande aperte',oralbase:'Definizioni',archive:'Banche ufficiali',officialtest:'Batteria ufficiale',milanobank:'Tracce di Milano',review:'Ripasso errori',flashcards:'Flashcard','ripasso-generale':'Ripasso generale',mindmap:'Mappe concettuali',milanpriorities:'Ripasso orale',sources:'Fonti ufficiali'};
 const breadcrumb=document.getElementById('breadcrumb');
 if(breadcrumb)breadcrumb.textContent=view==='home'?'PATENTINO / Home':'PATENTINO / '+(group==='studio'?'Studio':group==='domande'?'Domande':'Ripasso generale')+' / '+(names[view]||'Panoramica');
 const percent=document.getElementById('sidebar-percent'),progress=document.getElementById('sidebar-progress-fill'),completed=document.getElementById('sidebar-completed');
 if(percent)percent.textContent=pct()+'%';
 if(progress)progress.style.width=pct()+'%';
 if(completed){const n=data.completed.filter(id=>!id.startsWith('cremona:')).length;completed.textContent=n+(n===1?' lezione completata':' lezioni completate');}
};
renderQuiz=site2026Quiz;
const site2026OriginalRender=render;
render=function(scroll){
 const route=currentRoute(),view=route.view;
 if(['home','studio','domande','ripasso-generale'].includes(view)){
  navActive(view);
  const body=view==='home'?site2026Home():view==='studio'?site2026Study(route.id,route.idx):view==='domande'?site2026Domande():site2026Ripasso(route.id);
  document.getElementById('view').innerHTML=body;
  document.title=(view==='home'?'Home':view==='studio'?'Studio':view==='domande'?'Domande':'Ripasso generale')+' — Patentino';
  if(scroll)window.scrollTo({top:0,behavior:'instant'});
  return;
 }
 site2026OriginalRender(scroll);
};
document.addEventListener('change',event=>{
 const t=event.target;
 if(t.id==='site2026-quiz-size'){quizSize=t.value==='errors'?'errors':Number(t.value);render();}
});
document.addEventListener('input',event=>{
 if(event.target.id!=='site2026-topic-search')return;
 const input=event.target,term=input.value.toLocaleLowerCase('it').trim();
 let count=0;
 document.querySelectorAll('[data-site2026-chapter]').forEach(ch=>{
  let n=0;
  ch.querySelectorAll('[data-site2026-topic]').forEach(topic=>{
   const visible=!term||topic.dataset.search.includes(term);
   topic.hidden=!visible;if(visible){n++;count++;}
  });
  ch.hidden=!n;
  if(term&&n)ch.open=true;
 });
 const empty=document.getElementById('site2026-topic-empty');if(empty)empty.hidden=count>0;
});
document.addEventListener('click',event=>{
 const action=event.target.closest('[data-site2026-action]');
 if(!action)return;
 if(action.dataset.site2026Action==='flash'){
  quizSession=null;streakSession=null;quizSubject='all';quizSector='all';quizModule='all';quizOrigin='all';quizSize=10;startQuiz();
 }else if(action.dataset.site2026Action==='streak'){
  quizSession=null;streakSession=null;startStreak(false);
 }
});
if(!location.hash){
 history.replaceState(null,'','#/home');
}
render(true);
})();