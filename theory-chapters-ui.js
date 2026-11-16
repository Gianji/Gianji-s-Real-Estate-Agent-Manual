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
   '<div class="chapter-content">'+
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