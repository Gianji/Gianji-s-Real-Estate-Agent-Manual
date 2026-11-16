/* One coherent syllabus page. All MODULES and their storage IDs remain unchanged. */
function renderUnifiedLibrary(){
 const raw=libraryQuery.trim().toLocaleLowerCase('it');
 const totalModules=MODULES.filter(m=>m.id!=='cremona').length;
 const chapterCount=THEORY_CHAPTERS.length;
 const chapters=THEORY_CHAPTERS.filter(c=>libraryFilter==='all'||c.sector===libraryFilter).map(c=>({
  ...c,
  items:theoryChapterModules(c).filter(m=>!raw||[m.title,m.description,...m.lessons.map(l=>l.title)].join(' ').toLocaleLowerCase('it').includes(raw))
 })).filter(c=>c.items.length);
 const matching=chapters.reduce((n,c)=>n+c.items.length,0);
 const doneIn=m=>m.lessons.filter((_,i)=>data.completed.includes(m.id+':'+i)).length;
 const sectorLabel=id=>THEORY_SECTORS.find(s=>s.id===id)?.name||id;
 const cards=chapters.map(c=>{
  const items=c.items;
  const done=items.reduce((n,m)=>n+doneIn(m),0);
  const max=items.reduce((n,m)=>n+m.lessons.length,0);
  const estimate=c.id.startsWith('estimo-');
  const rows=items.map(m=>{
   const n=doneIn(m);
   return '<button type="button" class="chapter-module" data-open-module="'+esc(m.id)+'">'+
    '<span class="chapter-module-symbol">'+m.icon+'</span>'+
    '<span class="chapter-module-body"><strong>'+esc(m.title)+'</strong><small>'+esc(m.description)+'</small>'+
    '<span>'+n+'/'+m.lessons.length+' lezioni · '+(m.category==='normativa'?'Normativa':'Tecnica')+'</span></span>'+
    '<span class="chapter-module-arrow">↗</span></button>';
  }).join('');
  return '<details class="chapter-group" data-chapter="'+esc(c.id)+'"'+(raw?' open':'')+'>'+
   '<summary class="chapter-summary"><span class="chapter-summary-icon">'+(c.sector==='diritto'?'§':c.sector==='economia'?'∑':'⌂')+'</span>'+
   '<span class="chapter-summary-copy"><small>'+esc(sectorLabel(c.sector).toUpperCase())+' · '+items.length+' moduli</small>'+
   '<strong>'+esc(c.title)+'</strong><span>'+esc(c.desc)+'</span></span>'+
   '<span class="chapter-summary-end"><b>'+done+'/'+max+' lezioni</b>'+
   '<span class="chapter-meter"><i style="width:'+(max?Math.round(100*done/max):0)+'%"></i></span>'+
   '<span class="chapter-caret">⌄</span></span></summary>'+
   '<div class="chapter-content"><div class="chapter-open-all"><a class="btn btn-primary btn-sm" href="#/chapter/'+esc(c.id)+'">Studia tutto il capitolo in una pagina →</a></div>'+
   (estimate?'<div class="chapter-extra"><span>I moduli di Estimo sono distinti per metodo e applicazione; mantengono i collegamenti alle mappe.</span><a href="#/mindmap/estimo">Mappa di Estimo →</a></div>':'')+
   '<div class="chapter-module-grid">'+rows+'</div></div></details>';
 }).join('');
 const sectors=THEORY_SECTORS.map(t=>'<button class="sector-card'+(libraryFilter===t.id?' selected':'')+'" data-lib-filter="'+t.id+'"><span class="sector-symbol">'+t.icon+'</span><strong>'+t.name+'</strong><span>'+t.description+'</span><small>'+THEORY_CHAPTERS.filter(c=>c.sector===t.id).length+' capitoli</small></button>').join('');
 const pills='<button class="chip'+(libraryFilter==='all'?' active':'')+'" data-lib-filter="all">Tutti</button>'+
  THEORY_SECTORS.map(t=>'<button class="chip'+(libraryFilter===t.id?' active':'')+'" data-lib-filter="'+t.id+'">'+t.name+'</button>').join('');
 return pageTitle('PROGRAMMA RIORDINATO','Un argomento, un percorso.',
   chapterCount+' capitoli tematici raggruppano '+totalModules+' moduli e '+len+' lezioni. Gli argomenti simili sono riuniti; quiz, progressi e collegamenti originali restano validi.')+
 '<div class="study-banner"><div><b>Studia per capitoli, senza disperderti</b><p>Apri un capitolo e trovi insieme le lezioni di quello stesso tema. Catasto, redditi fondiari, Estimo, diritti e contratti sono organizzati per argomento, senza creare pagine doppie.</p></div><button class="btn btn-primary btn-sm" data-open-lesson="civile|0">Inizia dai fondamenti →</button></div>'+
 '<div class="program-link-row"><button class="btn btn-outline btn-sm" type="button" data-nav="mindmap">⑂ Mappe concettuali →</button>'+
 '<button class="btn btn-outline btn-sm" type="button" data-nav="oral">Domande aperte →</button>'+
 '<a class="btn btn-primary btn-sm" href="#/module/eco-redditi-fondiari">Dominicale e agrario →</a></div>'+
 '<div class="sector-grid">'+sectors+'</div>'+
 '<div class="filters">'+pills+'<div class="search-field" style="margin-left:auto;min-width:220px"><span>⌕</span><input id="module-search" placeholder="Cerca argomento o lezione..." value="'+esc(libraryQuery)+'"></div></div>'+
 '<p class="program-results">'+matching+' moduli in '+chapters.length+' capitoli. '+(raw?'Risultati aperti per la ricerca.':'Apri il capitolo che vuoi studiare.')+'</p>'+
 '<div class="chapter-list">'+cards+'</div>'+
 (chapters.length?'':'<div class="empty-state">Nessun argomento trovato. Prova con un altro termine.</div>')+
 '<div class="study-banner" style="margin-top:29px"><div><b>Focus territoriale facoltativo · Cremona</b><p>Un approfondimento separato su PGT, zone OMI e rapporti locali, non parte del programma camerale.</p></div><button class="btn btn-outline btn-sm" data-open-module="cremona">Apri Cremona →</button></div>';
}

/* A chapter is a SINGLE study page containing all its existing lessons.
   The legacy per-module and per-lesson routes are retained for bookmarks,
   saved completion IDs, mini-quizzes and old URLs. */
function renderUnifiedChapter(chapterId){
 const c=THEORY_CHAPTERS.find(x=>x.id===chapterId);
 if(!c)return '<div class="empty-state"><h2>Capitolo non trovato</h2><p>Torna al programma per scegliere un capitolo.</p><a class="btn btn-primary" href="#/library">Vai al programma →</a></div>';
 const mods=theoryChapterModules(c);
 const count=mods.reduce((n,m)=>n+m.lessons.length,0);
 const completed=mods.reduce((n,m)=>n+m.lessons.filter((_,i)=>data.completed.includes(m.id+':'+i)).length,0);
 return '<button class="back-button" type="button" data-nav="library">← Tutti i capitoli</button>'+
  pageTitle('CAPITOLO · '+esc(c.sector.toUpperCase()),esc(c.title),esc(c.desc))+
  '<div class="chapter-study-meta"><span>'+mods.length+' moduli collegati</span><span>'+count+' lezioni</span><span>'+completed+' completate</span>'+
  (chapterId.startsWith('estimo-')?'<a href="#/mindmap/estimo">Mappa Estimo →</a>':'')+'</div>'+
  '<p class="chapter-study-help">Questo è un unico percorso di studio: apri una lezione per leggere spiegazione, esempio e formula senza lasciare il capitolo. Le schede originarie rimangono disponibili per segnare il completamento.</p>'+
  mods.map((m,mi)=>{
   const lessons=m.lessons.map((l,i)=>{
    const completed=data.completed.includes(m.id+':'+i);
    const source=l.sourceUrl?'<div class="chapter-lesson-source"><a target="_blank" rel="noopener noreferrer" href="'+esc(l.sourceUrl)+'">'+esc(l.sourceTitle||'Fonte di approfondimento')+' ↗</a></div>':'';
    return '<details class="chapter-lesson"><summary><span class="chapter-lesson-num">'+String(i+1).padStart(2,'0')+'</span><span>'+esc(l.title)+'</span>'+
     '<small>'+(completed?'✓ Studiata':'Apri appunti')+'</small></summary>'+
     '<article class="chapter-lesson-body"><p class="chapter-lesson-lead">'+esc(l.intro)+'</p>'+
     '<p>'+esc(l.detail)+'</p>'+
     (l.example?'<div class="chapter-note-example"><strong>Esempio</strong><p>'+esc(l.example)+'</p></div>':'')+
     (l.mistake?'<div class="chapter-note-warning"><strong>Attenzione all’esame</strong><p>'+esc(l.mistake)+'</p></div>':'')+
     (l.key?'<div class="chapter-note-key"><strong>Da ricordare</strong><p>'+esc(l.key)+'</p></div>':'')+
     source+
     '<div class="chapter-lesson-actions"><a class="btn btn-outline btn-sm" href="#/lesson/'+encodeURIComponent(m.id)+'/'+i+'">Apri scheda e salva il progresso →</a></div></article></details>';
   }).join('');
   return '<section class="chapter-study-module"><header><span>SEZIONE '+String(mi+1).padStart(2,'0')+'</span>'+
    '<h2>'+esc(m.title)+'</h2><p>'+esc(m.description)+'</p><small>'+m.lessons.length+' lezioni</small></header>'+
    '<div class="chapter-study-lessons">'+lessons+'</div>'+
    '<footer><a href="#/oral/'+encodeURIComponent(m.id)+'">Domande orali della sezione →</a><a href="#/module/'+encodeURIComponent(m.id)+'">Scheda originale del modulo →</a></footer></section>';
  }).join('');
}
