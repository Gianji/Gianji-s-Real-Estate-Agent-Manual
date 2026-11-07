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
const CM_STATE={view:'overview',scale:1,x:0,y:0,width:0,height:0};
function cmAvailable(id){return MODULES.find(m=>m.id===id);}
function cmBuildOverview(){
 const nodes=[
  {id:'root',x:36,y:355,w:300,h:116,t:'root',title:'ESAME AGENTE IMMOBILIARE',sub:'Il programma completo in tre grandi settori'},
  {id:'d',x:468,y:104,w:262,h:102,t:'branch',mode:'diritto',color:'blue',title:'DIRITTO',sub:'Norme, rapporti, contratti e mediazione'},
  {id:'e',x:468,y:365,w:262,h:102,t:'branch',mode:'economia',color:'orange',title:'ECONOMIA',sub:'Fiscalità, impresa, mercato e finanza'},
  {id:'i',x:468,y:627,w:262,h:102,t:'branch',mode:'immobiliare',color:'teal',title:'IMMOBILIARE',sub:'Catasto, urbanistica, fabbricati ed estimo'},
  {id:'d1',x:875,y:29,w:300,h:79,t:'leaf',module:'obbligazioni',title:'Obbligazioni e garanzie',sub:'Fideiussione, adempimento, responsabilità'},
  {id:'d2',x:875,y:124,w:300,h:79,t:'leaf',module:'contratti',title:'Contratti e compravendita',sub:'Proposta, preliminare, definitivo'},
  {id:'d3',x:875,y:219,w:300,h:79,t:'leaf',module:'successioni',title:'Successioni e diritti reali',sub:'Eredità, usufrutto, proprietà'},
  {id:'e1',x:875,y:306,w:300,h:79,t:'leaf',module:'fisco',title:'Fisco immobiliare',sub:'Registro, IVA, IMU e agevolazioni'},
  {id:'e2',x:875,y:401,w:300,h:79,t:'leaf',module:'economia-azienda',title:'Economia aziendale',sub:'Bilancio, reddito e patrimonio'},
  {id:'e3',x:875,y:496,w:300,h:79,t:'leaf',module:'eco-credito',title:'Mutui e credito',sub:'Interessi, garanzie e finanziamenti'},
  {id:'i1',x:875,y:591,w:300,h:79,t:'leaf',module:'catasto',title:'Catasto e Conservatoria',sub:'Identificazione e pubblicità immobiliare'},
  {id:'i2',x:875,y:686,w:300,h:79,t:'leaf',module:'urbanistica',title:'Urbanistica ed edilizia',sub:'Titoli, PGT, conformità'},
  {id:'i3',x:875,y:781,w:300,h:79,t:'branch',mode:'estimo',color:'orange',title:'ESTIMO',sub:'Stima, saggi e valori: apri la mappa'}
 ];
 const pairs=[['root','d'],['root','e'],['root','i'],['d','d1'],['d','d2'],['d','d3'],['e','e1'],['e','e2'],['e','e3'],['i','i1'],['i','i2'],['i','i3']];
 return {nodes,edges:pairs.map(pair=>({a:pair[0],b:pair[1]})),w:1230,h:900};
}
function cmBuildDetail(view){
 const groups=CM_GROUPS[view]||CM_GROUPS.immobiliare;
 const used=new Set(),actual=[];
 groups.forEach(g=>{
  const modules=[];
  g.ids.forEach(id=>{const m=cmAvailable(id);if(m&&!used.has(id)){used.add(id);modules.push(m);}});
  if(modules.length)actual.push({name:g.name,modules});
 });
 if(['diritto','economia','immobiliare'].includes(view)){
  const extra=MODULES.filter(m=>m.id!=='cremona'&&sectorOf(m)===view&&!used.has(m.id));
  if(extra.length)actual.push({name:'Altri approfondimenti',modules:extra});
 }
 const nodes=[],edges=[];let y=56;
 actual.forEach((g,idx)=>{
  const first=y;
  g.modules.forEach(m=>{
   const mid='m-'+m.id;
   nodes.push({id:mid,x:822,y,w:315,h:74,t:'leaf',module:m.id,title:m.title,sub:m.lessons.length+' lezioni · Apri il modulo'});
   edges.push({a:'g-'+idx,b:mid});
   y+=91;
  });
  const last=y-91;
  nodes.push({id:'g-'+idx,x:405,y:(first+last)/2-10,w:280,h:84,t:'group',color:view==='economia'?'orange':view==='immobiliare'?'teal':'blue',title:g.name,sub:g.modules.length+' moduli collegati'});
  edges.push({a:'root',b:'g-'+idx});
  y+=22;
 });
 nodes.push({id:'root',x:32,y:72,w:282,h:120,t:'root',title:view==='estimo'?'ESTIMO':view==='professione'?'PROFESSIONE':view.toUpperCase(),sub:view==='estimo'?'Valori, metodi, formule e casi pratici':view==='professione'?'Dalla mediazione al rogito':'Seleziona un modulo per studiarlo'});
 return {nodes,edges,w:1200,h:Math.max(560,y+28)};
}
function cmGraph(view){return view==='overview'?cmBuildOverview():cmBuildDetail(view);}
function cmPath(a,b){
 const x1=a.x+a.w+5,y1=a.y+a.h/2,x2=b.x-11,y2=b.y+b.h/2;
 const bend=Math.max(64,(x2-x1)*.44);
 return 'M'+x1+' '+y1+' C'+(x1+bend)+' '+y1+','+(x2-bend)+' '+y2+','+x2+' '+y2;
}
function cmNodeHtml(n){
 const cls='cm-node cm-node-'+n.t+(n.color?' cm-node-'+n.color:'');
 const link=n.mode?' data-cm-mode="'+n.mode+'"':n.module?' data-open-module="'+n.module+'"':'';
 const tagName=link?'button':'div';
 const extra=link?' type="button" title="Apri '+(n.mode?'la mappa':'il modulo')+'"':'';
 return '<'+tagName+' class="'+cls+'"'+link+extra+' style="left:'+n.x+'px;top:'+n.y+'px;width:'+n.w+'px;min-height:'+n.h+'px">'+
  '<strong>'+esc(n.title)+'</strong><span>'+esc(n.sub)+'</span>'+(link?'<i aria-hidden="true">↗</i>':'')+'</'+tagName+'>';
}
function cmCanvas(g){
 const byId=new Map(g.nodes.map(n=>[n.id,n]));
 const paths=g.edges.map(e=>{const a=byId.get(e.a),b=byId.get(e.b);return a&&b?'<path d="'+cmPath(a,b)+'" />':''}).join('');
 return '<div id="cm-world" class="cm-world" style="width:'+g.w+'px;height:'+g.h+'px">'+
 '<svg class="cm-wires" width="'+g.w+'" height="'+g.h+'" viewBox="0 0 '+g.w+' '+g.h+'" aria-hidden="true"><defs>'+
 '<marker id="cm-arrow" markerWidth="9" markerHeight="9" refX="8" refY="3.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L8 3.5 L0 7" fill="none" stroke="#7d98aa" stroke-width="1.3" /></marker>'+
 '</defs><g fill="none" stroke="#7d98aa" stroke-width="2.2" stroke-linecap="round" marker-end="url(#cm-arrow)">'+paths+'</g></svg>'+
 g.nodes.map(cmNodeHtml).join('')+'</div>';
}
function renderMindmap(section){
 const valid=CM_SECTIONS.some(m=>m.id===section);
 const view=valid?section:'overview';
 CM_STATE.view=view;
 const graph=cmGraph(view);
 CM_STATE.width=graph.w;CM_STATE.height=graph.h;
 const count=view==='overview'?MODULES.filter(m=>m.id!=='cremona').length:graph.nodes.filter(n=>n.module).length;
 const tabs=CM_SECTIONS.map(s=>'<button type="button" class="cm-tab'+(s.id===view?' selected':'')+'" data-cm-mode="'+s.id+'">'+esc(s.label)+'</button>').join('');
 const entries=graph.nodes.filter(n=>n.module).map(n=>'<button class="cm-index-item" type="button" data-open-module="'+n.module+'"><span>'+esc(n.title)+'</span><b>Apri →</b></button>').join('');
 return pageTitle('STUDIO VISUALE','Mappe concettuali.','Schemi con frecce, rami e collegamenti tra i temi d’esame. Apri un nodo per approfondire il modulo corrispondente.')+
 '<div class="cm-intro"><div><div class="eyebrow">UNO SCHEMA, TUTTI I COLLEGAMENTI</div><h2>'+esc(view==='overview'?'Il programma in un colpo d’occhio.':'Mappa: '+CM_SECTIONS.find(s=>s.id===view).label)+'</h2><p>Il programma del sito è organizzato in Diritto, Economia e Immobiliare. La prova scritta camerale è invece articolata in normativa e tecnica. I rami mostrano i collegamenti didattici, non una classificazione normativa ufficiale.</p></div><span class="cm-count">'+count+' moduli nella mappa</span></div>'+
 '<div class="cm-tabs" aria-label="Seleziona una mappa concettuale">'+tabs+'</div>'+
 '<div class="cm-board"><div class="cm-board-top"><div><strong>Esplora i collegamenti</strong><small>Trascina lo sfondo per spostarti · Clicca sui nodi per aprire moduli o altre mappe</small></div><div class="cm-controls"><button type="button" data-cm-tool="minus" aria-label="Riduci zoom">−</button><span id="cm-zoom-label">100%</span><button type="button" data-cm-tool="plus" aria-label="Aumenta zoom">+</button><button type="button" data-cm-tool="fit" title="Adatta la mappa">Adatta</button></div></div>'+
 '<div id="cm-viewport" class="cm-viewport" role="region" aria-label="Mappa concettuale navigabile">'+cmCanvas(graph)+'</div>'+
 '<div class="cm-board-foot"><span><i class="cm-key cm-key-root"></i> Tema centrale</span><span><i class="cm-key cm-key-branch"></i> Ramo principale</span><span><i class="cm-key cm-key-leaf"></i> Modulo cliccabile</span><span>Le frecce indicano una relazione di appartenenza o approfondimento</span></div></div>'+
 '<div class="cm-under"><div><h3>Collegamenti trasversali da ricordare</h3><div class="cm-cross">'+[
 'Contratto → Preliminare → Trascrizione',
 'Mutuo → Fideiussione → Garanzie',
 'Catasto ≠ Regolarità urbanistica',
 'Superficie → Comparabili → Valore di mercato',
 'Locazione → Canone → Fiscalità',
 'Successione → Provenienza → Vendita'
 ].map(s=>'<span>'+esc(s)+'</span>').join('')+'</div></div>'+
 '<div><h3>'+(view==='overview'?'Da dove cominciare':'Indice dei moduli della mappa')+'</h3><div class="cm-index">'+(entries||'<button class="cm-index-item" type="button" data-cm-mode="diritto">Diritto <b>Apri →</b></button><button class="cm-index-item" type="button" data-cm-mode="economia">Economia <b>Apri →</b></button><button class="cm-index-item" type="button" data-cm-mode="immobiliare">Immobiliare <b>Apri →</b></button>')+'</div></div></div>';
}
function cmApply(){
 const el=document.getElementById('cm-world');
 if(!el)return;
 el.style.transform='translate('+CM_STATE.x+'px,'+CM_STATE.y+'px) scale('+CM_STATE.scale+')';
 const label=document.getElementById('cm-zoom-label');if(label)label.textContent=Math.round(CM_STATE.scale*100)+'%';
}
function cmFit(){
 const vp=document.getElementById('cm-viewport');if(!vp)return;
 const side=(vp.clientWidth-36)/CM_STATE.width;
 const height=(vp.clientHeight-26)/CM_STATE.height;
 CM_STATE.scale=Math.max(.34,Math.min(1.05,CM_STATE.view==='overview'?Math.min(side,height):side));
 CM_STATE.x=Math.max(14,(vp.clientWidth-CM_STATE.width*CM_STATE.scale)/2);
 CM_STATE.y=18;
 cmApply();
}
function cmZoom(factor){
 const vp=document.getElementById('cm-viewport');if(!vp)return;
 const next=Math.min(1.9,Math.max(.3,CM_STATE.scale*factor));
 const cx=vp.clientWidth/2,cy=vp.clientHeight/2;
 CM_STATE.x=cx-(cx-CM_STATE.x)*next/CM_STATE.scale;
 CM_STATE.y=cy-(cy-CM_STATE.y)*next/CM_STATE.scale;
 CM_STATE.scale=next;cmApply();
}
function cmInit(){
 const vp=document.getElementById('cm-viewport');if(!vp)return;
 cmFit();
 let drag=null;
 vp.addEventListener('pointerdown',e=>{
  if(e.button!==0||e.target.closest('button'))return;
  drag={x:e.clientX,y:e.clientY,ox:CM_STATE.x,oy:CM_STATE.y,id:e.pointerId};
  vp.setPointerCapture(e.pointerId);vp.classList.add('dragging');
 });
 vp.addEventListener('pointermove',e=>{
  if(!drag||drag.id!==e.pointerId)return;
  CM_STATE.x=drag.ox+e.clientX-drag.x;CM_STATE.y=drag.oy+e.clientY-drag.y;cmApply();
 });
 const stop=()=>{drag=null;vp.classList.remove('dragging')};
 vp.addEventListener('pointerup',stop);vp.addEventListener('pointercancel',stop);
}
document.addEventListener('click',e=>{
 const tab=e.target.closest('[data-cm-mode]');
 if(tab){navigate('mindmap',tab.dataset.cmMode);return}
 const tool=e.target.closest('[data-cm-tool]');
 if(tool){if(tool.dataset.cmTool==='fit')cmFit();else cmZoom(tool.dataset.cmTool==='plus'?1.2:1/1.2);}
});
