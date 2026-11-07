/* Mappe concettuali interattive, collegate ai moduli effettivamente disponibili.
   Le tre aree sono un'organizzazione didattica, non la divisione ufficiale dello scritto. */
const CM_SECTIONS=[
 {id:'overview',label:'Panoramica'},
 {id:'diritto',label:'Diritto'},
 {id:'economia',label:'Economia'},
 {id:'immobiliare',label:'Immobiliare'},
 {id:'estimo',label:'Estimo'},
 {id:'professione',label:'Professione'}
];
const CM_GROUPS={
 diritto:[
  {name:'Fonti, persone e prove',ids:['civile','diritto-fonti','diritto-soggetti','diritto-responsabilita']},
  {name:'Obbligazioni e contratti',ids:['obbligazioni','contratti','dir-invalidita','dir-garanzie','diritto-contratti-speciali']},
  {name:'Proprietà e famiglia',ids:['reali','diritto-comunione','diritto-famiglia','successioni']},
  {name:'Impresa e titoli',ids:['commerciale','dir-titoli','dir-crisi']},
  {name:'Mediazione e operazioni',ids:['professione','adempimenti','vendita','locazioni']}
 ],
 economia:[
  {name:'Economia generale',ids:['economia-base','eco-macroeconomia','eco-microeconomia']},
  {name:'Impresa e bilancio',ids:['economia-azienda','eco-bilancio','eco-impresa2']},
  {name:'Mercato e investimenti',ids:['eco-mercato-stat','eco-dati-mercato','eco-investimenti']},
  {name:'Credito e finanza',ids:['economia-finanza','eco-matematica','eco-credito','eco-pagamenti','mutui']},
  {name:'Tributi e fiscalità',ids:['fisco','fisco-avanzato','eco-tributi','eco-imposte-procedura']}
 ],
 immobiliare:[
  {name:'Catasto e documentazione',ids:['catasto','catasto-terreni','imm-catasto-operativo','pubblicita','imm-documenti','imm-topografia']},
  {name:'Urbanistica e costruzioni',ids:['urbanistica','imm-urbanistica2','imm-edilizia','imm-impianti','tecnica-costruttiva']},
  {name:'Condominio e pratiche',ids:['condominio','imm-condominio-operativo','contratti-pratica','orale']},
  {name:'Estimo e valutazione',ids:['estimo','estimo-calcoli','imm-superfici','imm-market2','imm-estimo-approfondito','imm-estimo-speciale','imm-estimo-legale3','mercato','formule']},
  {name:'Fondi e estimo agrario',ids:['agrario','imm-rurale2','imm-rurale-diritto']}
 ],
 estimo:[
  {name:'Fondamenti e parametri',ids:['estimo','estimo-calcoli','imm-superfici','formule']},
  {name:'Mercato e comparazione',ids:['imm-market2','mercato']},
  {name:'Metodi e valore speciale',ids:['imm-estimo-approfondito','imm-estimo-speciale','imm-estimo-legale3']},
  {name:'Agrario e fondi rustici',ids:['agrario','imm-rurale2','imm-rurale-diritto']}
 ],
 professione:[
  {name:'Professione e requisiti',ids:['professione','adempimenti']},
  {name:'Dalla proposta al rogito',ids:['vendita','contratti-pratica','contratti']},
  {name:'Locazioni e tutela',ids:['locazioni','dir-garanzie']},
  {name:'Verifiche immobiliari',ids:['catasto','pubblicita','urbanistica']},
  {name:'Valutazione e credito',ids:['estimo','mutui']}
 ]
};

/* Lo schema resta un insieme di appunti: nodi liberi, parole chiave, rimandi incrociati.
   La fonte delle note sintetiche è il contenuto dei moduli del manuale. */
const CM_STATE={view:'overview',scale:1,x:0,y:0,width:0,height:0,relations:true};
const CM_OVERVIEW=[
 {id:'root',x:590,y:375,w:330,h:156,t:'root',title:'ESAME DA AGENTE IMMOBILIARE',
  sub:'3 macro-aree di studio',lines:['Diritto + Economia + Immobiliare','Scritto: normativa / tecnica']},
 {id:'d',x:90,y:124,w:335,h:192,t:'branch',color:'blue',mode:'diritto',title:'DIRITTO',
  sub:'Norme e rapporti',lines:['Soggetti → obbligazioni → contratti','Proprietà, diritti reali, successioni','Mediazione e responsabilità']},
 {id:'e',x:1125,y:103,w:340,h:194,t:'branch',color:'orange',mode:'economia',title:'ECONOMIA',
  sub:'Rapporti economici',lines:['Mercato, impresa e bilancio','Tributi: registro, IVA, IMU','Credito, interessi e investimenti']},
 {id:'i',x:80,y:650,w:350,h:212,t:'branch',color:'teal',mode:'immobiliare',title:'IMMOBILIARE',
  sub:'L’immobile come bene',lines:['Catasto / conservatoria / urbanistica','Edilizia, condominio, documenti','Valutazione + estimo']},
 {id:'es',x:1155,y:742,w:318,h:188,t:'branch',color:'orange',mode:'estimo',title:'ESTIMO',
  sub:'Quanto vale? Perché?',lines:['Valore di mercato ≠ prezzo','Comparazione • costo • reddito','Saggi, superfici, indennità']},
 {id:'p',x:576,y:936,w:356,h:178,t:'branch',color:'blue',mode:'professione',title:'PROFESSIONE',
  sub:'Dal primo contatto al rogito',lines:['Mediazione → proposta → preliminare','Verifiche e informazioni','Provvigione e obblighi']},
 {id:'fideiussione',x:518,y:65,w:320,h:160,t:'note',color:'purple',module:'dir-garanzie',
  title:'FIDEIUSSIONE',sub:'Garanzia personale (art. 1936 c.c.)',
  lines:['Il fideiussore garantisce il debito altrui','≠ ipoteca: garanzia reale']},
 {id:'mutuo',x:1103,y:421,w:315,h:170,t:'note',color:'teal',module:'mutui',
  title:'MUTUO + IPOTECA',sub:'Credito immobiliare',
  lines:['Debito → rimborso, interessi','Garanzie accessorie o reali']},
 {id:'vendita',x:112,y:401,w:310,h:178,t:'note',color:'yellow',module:'vendita',
  title:'COMPRAVENDITA',sub:'Sequenza contrattuale',
  lines:['Proposta → accettazione','Preliminare → definitivo','Effetti e trascrizione: distinguere']},
 {id:'catasto',x:482,y:711,w:315,h:151,t:'note',color:'purple',module:'catasto',
  title:'CATASTO',sub:'Identificazione e rendita',
  lines:['Visura + planimetria + particella','≠ prova assoluta della proprietà']},
 {id:'fisco',x:780,y:647,w:306,h:169,t:'note',color:'yellow',module:'fisco',
  title:'IMPOSTE',sub:'Trasferimento e gestione',
  lines:['Registro / IVA: regime dell’atto','IMU: titolarità e presupposto']},
 {id:'margine',x:29,y:25,w:320,h:68,t:'scribble',title:'APPUNTI DI RIPASSO',sub:'segui anche le frecce tratteggiate ↝'}
];
const CM_OVERVIEW_EDGES=[
 ['root','d'],['root','e'],['root','i'],['root','es'],['root','p'],
 ['d','fideiussione'],['e','mutuo'],['i','catasto'],['d','vendita'],
 ['e','fisco'],['es','fisco']
];
const CM_OVERVIEW_CROSS=[
 {a:'fideiussione',b:'mutuo',label:'garantisce il credito'},
 {a:'vendita',b:'fisco',label:'imposte sul trasferimento'},
 {a:'catasto',b:'fisco',label:'rendita → imponibile'},
 {a:'e',b:'es',label:'mercato e rendimento'},
 {a:'vendita',b:'catasto',label:'verifiche preliminari'}
];
const CM_CROSS_BY_SECTION={
 diritto:[['obbligazioni','dir-garanzie','garanzie del credito'],['contratti','vendita','contratto tipico'],['reali','successioni','diritti ereditati'],['contratti','dir-invalidita','validità']],
 economia:[['eco-credito','mutui','credito immobiliare'],['economia-finanza','eco-matematica','interesse e rate'],['fisco','eco-imposte-procedura','tributi e adempimenti'],['eco-microeconomia','eco-mercato-stat','domanda / offerta']],
 immobiliare:[['catasto','urbanistica','≠ stessa verifica'],['estimo','imm-market2','comparazione'],['urbanistica','contratti-pratica','verifiche'],['imm-superfici','imm-estimo-approfondito','superficie → valore']],
 estimo:[['imm-superfici','imm-market2','coefficienti e prezzo'],['estimo-calcoli','imm-estimo-approfondito','capitalizzazione'],['agrario','imm-rurale2','stima fondi rustici']],
 professione:[['professione','vendita','conclusione dell’affare'],['vendita','pubblicita','trascrizione'],['dir-garanzie','mutui','fideiussione'],['catasto','urbanistica','controlli distinti']]
};
function cmAvailable(id){return MODULES.find(m=>m.id===id);}
function cmShort(s,max=78){
 const text=String(s||'').replace(/\s+/g,' ').trim();
 if(text.length<=max)return text;
 const short=text.slice(0,max),p=short.lastIndexOf(' ');
 return (p>max/2?short.slice(0,p):short)+'…';
}
function cmModulePoints(m){
 const points=(m.summary||[]).filter(Boolean).map(v=>cmShort(v,79)).slice(0,2);
 if(points.length<2&&m.lessons?.[0])points.push(cmShort(m.lessons[0].intro,79));
 return points.slice(0,2);
}
function cmBuildOverview(){
 const nodes=CM_OVERVIEW.filter(n=>n.t!=='note'||cmAvailable(n.module));
 const exists=new Set(nodes.map(n=>n.id));
 return {nodes,edges:CM_OVERVIEW_EDGES.filter(e=>exists.has(e[0])&&exists.has(e[1])).map(([a,b])=>({a,b})),
  cross:CM_OVERVIEW_CROSS.filter(e=>exists.has(e.a)&&exists.has(e.b)),w:1550,h:1180};
}
function cmBuildDetail(view){
 const groups=CM_GROUPS[view]||[];
 const seen=new Set(),actual=[];
 groups.forEach(g=>{
  const modules=g.ids.map(cmAvailable).filter(m=>m&&!seen.has(m.id)&&seen.add(m.id));
  if(modules.length)actual.push({name:g.name,modules});
 });
 if(['diritto','economia','immobiliare'].includes(view)){
  const other=MODULES.filter(m=>m.id!=='cremona'&&sectorOf(m)===view&&!seen.has(m.id));
  if(other.length)actual.push({name:'Altre note e collegamenti',modules:other});
 }
 const nodes=[{
  id:'root',x:640,y:85,w:340,h:163,t:'root',title:view.toUpperCase(),
  sub:view==='estimo'?'VALORI, PROCEDIMENTI, FORMULE':view==='professione'?'DALLA MEDIAZIONE AL ROGITO':'APPUNTI DI STUDIO',
  lines:view==='estimo'?['Comparazione ↔ prezzo di mercato','Reddito ÷ saggio = valore (caso semplice)']:
  view==='professione'?['Diritto alla provvigione: art. 1755 c.c.','Informazioni dovute: art. 1759 c.c.']:
  ['Leggi prima i concetti principali','Segui le frecce per i collegamenti']
 }];
 const edges=[],sideY=[335,335],groupsById=new Map();
 actual.forEach((g,idx)=>{
  const side=idx%2,x=side?965:110,gy=sideY[side];
  const gid='g-'+idx,groupH=108;
  nodes.push({id:gid,x:x+20,y:gy,w:525,h:groupH,t:'group',
   color:view==='economia'?'orange':view==='immobiliare'||view==='estimo'?'teal':'blue',
   title:g.name.toUpperCase(),sub:g.modules.length+' moduli • schema',lines:[]});
  edges.push({a:'root',b:gid});
  let noteY=gy+groupH+30;
  g.modules.forEach((m,i)=>{
   const id='m-'+m.id;
   nodes.push({id,x:x+(i%2?60:10),y:noteY,w:485,h:160,t:'note',
    color:['yellow','purple','teal','blue'][i%4],module:m.id,title:m.title.toUpperCase(),
    sub:m.lessons.length+' lezioni',lines:cmModulePoints(m)});
   edges.push({a:gid,b:id});
   noteY+=185;
  });
  groupsById.set(gid,gy);
  sideY[side]=noteY+115;
 });
 const cross=[];
 (CM_CROSS_BY_SECTION[view]||[]).forEach(([a,b,label])=>{
  if(nodes.some(n=>n.id==='m-'+a)&&nodes.some(n=>n.id==='m-'+b)){
   cross.push({a:'m-'+a,b:'m-'+b,label});
  }
 });
 const h=Math.max(950,...sideY)+55;
 return {nodes,edges,cross,w:1600,h};
}
function cmGraph(view){return view==='overview'?cmBuildOverview():cmBuildDetail(view)}
function cmPort(a,b){
 const ax=a.x+a.w/2,ay=a.y+a.h/2,bx=b.x+b.w/2,by=b.y+b.h/2,dx=bx-ax,dy=by-ay;
 if(Math.abs(dx)>Math.abs(dy)*.85){
  return [{x:dx>0?a.x+a.w:a.x,y:ay},{x:dx>0?b.x:b.x+b.w,y:by},'x'];
 }
 return [{x:ax,y:dy>0?a.y+a.h:a.y},{x:bx,y:dy>0?b.y:b.y+b.h},'y'];
}
function cmPath(a,b,cross=false,idx=0){
 const [p,q,axis]=cmPort(a,b);
 if(!cross){
  if(axis==='x'){const dx=q.x-p.x;return 'M'+p.x+','+p.y+' C'+(p.x+dx*.48)+','+p.y+' '+(q.x-dx*.48)+','+q.y+' '+q.x+','+q.y;}
  const dy=q.y-p.y;
  return 'M'+p.x+','+p.y+' C'+p.x+','+(p.y+dy*.5)+' '+q.x+','+(q.y-dy*.5)+' '+q.x+','+q.y;
 }
 // Secondary ink paths arc away from the primary tree. They are deliberately
 // allowed to cross to depict conceptual links between different subjects.
 if(axis==='x'){
  const dx=q.x-p.x,dy=q.y-p.y,offset=(idx%2?-.24:.24)*Math.max(140,Math.abs(dx));
  return 'M'+p.x+','+p.y+' C'+(p.x+dx*.27)+','+(p.y+offset)+' '+(q.x-dx*.27)+','+(q.y+offset)+' '+q.x+','+q.y;
 }
 const dx=q.x-p.x,dy=q.y-p.y,offset=(idx%2?-.34:.34)*Math.max(130,Math.abs(dy));
 return 'M'+p.x+','+p.y+' C'+(p.x+offset)+','+(p.y+dy*.3)+' '+(q.x+offset)+','+(q.y-dy*.3)+' '+q.x+','+q.y;
}
function cmNodeHtml(n){
 const link=n.mode?' data-cm-mode="'+esc(n.mode)+'"':n.module?' data-open-module="'+esc(n.module)+'"':'';
 const clickable=Boolean(link),tag=clickable?'button':'div';
 const cl=['cm-note','cm-note-'+n.t,n.color?'cm-ink-'+n.color:''].filter(Boolean).join(' ');
 const lines=(n.lines||[]).map(s=>'<span class="cm-handline"><em>→</em>'+esc(s)+'</span>').join('');
 return '<'+tag+(clickable?' type="button" aria-label="Apri '+esc(n.title)+'"':'')+' class="'+cl+'"'+link+
 ' style="left:'+n.x+'px;top:'+n.y+'px;width:'+n.w+'px;min-height:'+n.h+'px">'+
 '<span class="cm-noteline">'+(n.t==='root'?'PAGINA MADRE':n.t==='group'?'SOTTOARGOMENTO':n.t==='scribble'?'ANNOTAZIONE':'APPUNTI / '+esc(n.sub))+'</span>'+
 '<strong>'+esc(n.title)+'</strong>'+
 (n.t==='root'?'<p class="cm-note-sub">'+esc(n.sub)+'</p>':'')+
 (lines?'<span class="cm-lines">'+lines+'</span>':'')+
 (clickable?'<span class="cm-open">Apri ↗</span>':'')+'</'+tag+'>';
}
function cmCanvas(g){
 const byId=new Map(g.nodes.map(n=>[n.id,n]));
 const primary=g.edges.map(e=>{
  const a=byId.get(e.a),b=byId.get(e.b);
  return a&&b?'<path d="'+cmPath(a,b)+'" />':'';
 }).join('');
 const crosses=g.cross.map((e,i)=>{
  const a=byId.get(e.a),b=byId.get(e.b);
  return a&&b?'<path d="'+cmPath(a,b,true,i)+'" />':'';
 }).join('');
 const labels=g.cross.map((e,i)=>{
  const a=byId.get(e.a),b=byId.get(e.b);
  if(!a||!b)return '';
  const x=(a.x+a.w/2+b.x+b.w/2)/2,y=(a.y+a.h/2+b.y+b.h/2)/2+(i%2?-26:20);
  return '<span class="cm-edge-label" style="left:'+x+'px;top:'+y+'px">'+esc(e.label)+'</span>';
 }).join('');
 return '<div id="cm-world" class="cm-world" style="width:'+g.w+'px;height:'+g.h+'px">'+
 '<div class="cm-page-heading"><span>MANUALE / PATENTINO</span><b>QUADERNO DI RIPASSO</b><span>'+esc(CM_SECTIONS.find(s=>s.id===CM_STATE.view)?.label||'')+'</span></div>'+
 '<svg class="cm-wires" width="'+g.w+'" height="'+g.h+'" viewBox="0 0 '+g.w+' '+g.h+'" aria-hidden="true"><defs>'+
 '<marker id="cm-arrow-blue" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto"><path d="M0 0 L9 4 L0 8" fill="none" stroke="#326cab" stroke-width="1.5"/></marker>'+
 '<marker id="cm-arrow-orange" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto"><path d="M0 0 L9 4 L0 8" fill="none" stroke="#db781e" stroke-width="1.5"/></marker></defs>'+
 '<g class="cm-tree-lines" fill="none" stroke="#326cab" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#cm-arrow-blue)">'+primary+'</g>'+
 '<g class="cm-cross-lines" fill="none" stroke="#db781e" stroke-width="2.8" stroke-dasharray="10 9" stroke-linecap="round" marker-end="url(#cm-arrow-orange)">'+crosses+'</g></svg>'+
 '<div class="cm-cross-labels">'+labels+'</div>'+
 g.nodes.map(cmNodeHtml).join('')+
 '<div class="cm-margin-note" style="top:'+(g.h-95)+'px">ricorda: il collegamento tra due argomenti non li rende equivalenti.</div>'+
 '</div>';
}
function renderMindmap(section){
 const view=CM_SECTIONS.some(s=>s.id===section)?section:'overview';
 CM_STATE.view=view;
 const g=cmGraph(view);CM_STATE.width=g.w;CM_STATE.height=g.h;
 const count=g.nodes.filter(n=>n.module).length;
 const tabs=CM_SECTIONS.map(s=>'<button type="button" class="cm-tab'+(s.id===view?' selected':'')+'" data-cm-mode="'+s.id+'">'+esc(s.label)+'</button>').join('');
 const sections=g.nodes.filter(n=>n.module).map(n=>'<button class="cm-index-item" type="button" data-open-module="'+esc(n.module)+'"><span>'+esc(n.title)+'</span><b>Studia ↗</b></button>').join('');
 const links=[['Contratto','Preliminare','Trascrizione'],['Credito','Fideiussione','Garanzie'],['Catasto','≠','Urbanistica'],['Superficie','Comparazione','Valore'],['Locazione','Canone','Imposte']].map(a=>'<span>'+a.map(esc).join(' → ')+'</span>').join('');
 return pageTitle('QUADERNO VISUALE','Mappe e appunti.','Come in un quaderno OneNote: parole chiave, sintesi, frecce curve e collegamenti anche tra argomenti diversi.')+
 '<div class="cm-intro"><div><div class="eyebrow">APPUNTI · MAPPE CONCETTUALI</div><h2>'+esc(view==='overview'?'Uno schema vivo, non un organigramma.':'Quaderno: '+CM_SECTIONS.find(s=>s.id===view).label)+'</h2>'+
 '<p>Ogni nota riassume un concetto; <b>tocca il titolo</b> per entrare nel modulo. Le frecce blu indicano il percorso, quelle arancioni tratteggiate sono rimandi incrociati tra argomenti, come negli appunti scritti a mano.</p></div><span class="cm-count">'+count+' schede collegate</span></div>'+
 '<div class="cm-tabs" aria-label="Seleziona quaderno">'+tabs+'</div>'+
 '<section class="cm-board"><div class="cm-board-top"><div><strong>▣ '+esc(CM_SECTIONS.find(s=>s.id===view).label)+' <span class="cm-paper-caption">/ PAGINA DI APPUNTI</span></strong><small>Trascina lo sfondo per spostare il foglio, usa + e − per ingrandire.</small></div>'+
 '<div class="cm-controls"><button type="button" data-cm-tool="minus" aria-label="Riduci zoom">−</button><span id="cm-zoom-label">100%</span><button type="button" data-cm-tool="plus" aria-label="Aumenta zoom">+</button><button type="button" data-cm-tool="fit" title="Adatta al foglio">Adatta</button></div></div>'+
 '<div class="cm-note-tools"><button type="button" class="cm-toggle active" id="cm-cross-toggle" data-cm-tool="relations" aria-pressed="true">↝ Collegamenti incrociati: visibili</button><span>Le frecce possono intrecciarsi per mostrare rapporti tra argomenti.</span></div>'+
 '<div id="cm-viewport" class="cm-viewport" role="region" aria-label="Quaderno di appunti navigabile">'+cmCanvas(g)+'</div>'+
 '<div class="cm-board-foot"><span><i class="cm-key cm-key-root"></i>Tema centrale</span><span><i class="cm-key cm-key-branch"></i>Ramo di studio</span><span><i class="cm-key cm-key-leaf"></i>Appunto apribile</span><span><i class="cm-key cm-key-cross"></i>Collegamento trasversale</span></div></section>'+
 '<div class="cm-under"><div><h3>↳ Da collegare a mente</h3><div class="cm-cross">'+links+'</div></div>'+
 '<div><h3>Indice veloce degli appunti</h3><div class="cm-index">'+(sections||'<button class="cm-index-item" data-cm-mode="diritto">Diritto<b>Apri ↗</b></button><button class="cm-index-item" data-cm-mode="economia">Economia<b>Apri ↗</b></button><button class="cm-index-item" data-cm-mode="immobiliare">Immobiliare<b>Apri ↗</b></button>')+'</div></div></div>'+
 '<p class="cm-disclaimer">Le tre aree sono un’organizzazione didattica. La prova scritta di Milano è divisa in normativa e tecnica. Lo schema è un ausilio al ripasso, non sostituisce le lezioni.</p>';
}
function cmApply(){
 const w=document.getElementById('cm-world');if(!w)return;
 w.style.transform='translate('+CM_STATE.x+'px,'+CM_STATE.y+'px) scale('+CM_STATE.scale+')';
 const label=document.getElementById('cm-zoom-label');
 if(label)label.textContent=Math.round(CM_STATE.scale*100)+'%';
 const vp=document.getElementById('cm-viewport');
 if(vp)vp.classList.toggle('cm-hide-relations',!CM_STATE.relations);
 const toggle=document.getElementById('cm-cross-toggle');
 if(toggle){toggle.classList.toggle('active',CM_STATE.relations);toggle.setAttribute('aria-pressed',CM_STATE.relations?'true':'false');
  toggle.textContent=CM_STATE.relations?'↝ Collegamenti incrociati: visibili':'↝ Mostra collegamenti incrociati'}
}
function cmFit(){
 const vp=document.getElementById('cm-viewport');if(!vp)return;
 const side=(vp.clientWidth-50)/CM_STATE.width;
 const height=(vp.clientHeight-50)/CM_STATE.height;
 CM_STATE.scale=Math.max(.24,Math.min(1.05,CM_STATE.view==='overview'?Math.min(side,height):side));
 CM_STATE.x=Math.max(12,(vp.clientWidth-CM_STATE.width*CM_STATE.scale)/2);
 CM_STATE.y=22;cmApply();
}
function cmZoom(factor){
 const vp=document.getElementById('cm-viewport');if(!vp)return;
 const next=Math.min(2.2,Math.max(.23,CM_STATE.scale*factor));
 const cx=vp.clientWidth/2,cy=vp.clientHeight/2;
 CM_STATE.x=cx-(cx-CM_STATE.x)*next/CM_STATE.scale;
 CM_STATE.y=cy-(cy-CM_STATE.y)*next/CM_STATE.scale;
 CM_STATE.scale=next;cmApply();
}
function cmInit(){
 const vp=document.getElementById('cm-viewport');if(!vp)return;
 cmFit();let drag=null;
 vp.addEventListener('pointerdown',e=>{
  if(e.button!==0||e.target.closest('button'))return;
  drag={x:e.clientX,y:e.clientY,ox:CM_STATE.x,oy:CM_STATE.y,id:e.pointerId};
  vp.setPointerCapture(e.pointerId);vp.classList.add('dragging');
 });
 vp.addEventListener('pointermove',e=>{
  if(!drag||drag.id!==e.pointerId)return;
  CM_STATE.x=drag.ox+e.clientX-drag.x;CM_STATE.y=drag.oy+e.clientY-drag.y;cmApply();
 });
 const end=()=>{drag=null;vp.classList.remove('dragging')};
 vp.addEventListener('pointerup',end);vp.addEventListener('pointercancel',end);
}
document.addEventListener('click',e=>{
 const tab=e.target.closest('[data-cm-mode]');
 if(tab){navigate('mindmap',tab.dataset.cmMode);return}
 const tool=e.target.closest('[data-cm-tool]');if(!tool)return;
 const key=tool.dataset.cmTool;
 if(key==='fit')cmFit();
 else if(key==='relations'){CM_STATE.relations=!CM_STATE.relations;cmApply()}
 else cmZoom(key==='plus'?1.22:1/1.22);
});
