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
  {name:'Estimo: criteri e metodi',ids:['estimo','estimo-processo6','estimo-valori6','estimo-mca6','estimo-reddito6','estimo-costi6','estimo-residuo6']},
  {name:'Fondi e estimo agrario',ids:['agrario','imm-rurale2','imm-rurale-diritto']}
 ],
 estimo:[
  {name:'Fondamenti e aspetti economici',ids:['estimo','estimo-processo6','estimo-valori6']},
  {name:'Comparazione e mercato',ids:['imm-market2','estimo-mca6','mercato','estimo-statistica6']},
  {name:'Reddito, capitalizzazione e DCF',ids:['estimo-calcoli','estimo-reddito6','estimo-dcf6']},
  {name:'Costi e trasformazione',ids:['imm-estimo-approfondito','estimo-costi6','estimo-residuo6','estimo-aree6']},
  {name:'Superfici e formule',ids:['imm-superfici','estimo-superfici6','formule']},
  {name:'Estimo speciale, diritti e danni',ids:['imm-estimo-speciale','imm-estimo-legale3','estimo-diritti6','estimo-legale6']},
  {name:'Agrario e fondi rustici',ids:['agrario','imm-rurale2','estimo-agrario6']},
  {name:'Perizie e immobili speciali',ids:['estimo-speciali6','estimo-perizia6']}
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
 {id:'root',x:656,y:118,w:370,h:216,t:'root',title:'ESAME DA AGENTE IMMOBILIARE',
  sub:'Tre settori didattici, due parti scritte',lines:['Diritto → rapporti e norme','Economia → valori, tributi, credito','Immobiliare → beni, edilizia, estimo','Prova scritta: normativa + tecnica']},
 {id:'d',x:90,y:472,w:450,h:265,t:'branch',color:'blue',mode:'diritto',title:'DIRITTO',
  sub:'Rapporti e tutele',lines:['Soggetti e capacità di agire','Diritti reali, possesso, successioni','Obbligazioni e contratti','Mediazione: provvigione e responsabilità','Garanzie reali e personali']},
 {id:'e',x:621,y:472,w:450,h:265,t:'branch',color:'orange',mode:'economia',title:'ECONOMIA',
  sub:'Mercato, tributi, credito',lines:['Domanda e offerta → prezzi','Impresa: costi, ricavi, bilancio','Credito, tassi, rate e ammortamento','Registro, IVA, IMU e fiscalità','Analisi degli investimenti']},
 {id:'i',x:1152,y:472,w:450,h:265,t:'branch',color:'teal',mode:'immobiliare',title:'IMMOBILIARE',
  sub:'Beni, documenti, valutazione',lines:['Catasto → identificazione fiscale','Conservatoria → pubblicità dei diritti','Urbanistica → titoli e conformità','Edifici, condominio, superfici','Estimo → criteri e procedimenti']},
 {id:'fideiussione',x:90,y:848,w:450,h:268,t:'note',color:'purple',module:'dir-garanzie',
  title:'FIDEIUSSIONE',sub:'Art. 1936 c.c. · garanzia personale',
  lines:['Il garante risponde di un debito altrui','Accessoria all’obbligazione garantita','Beneficio di escussione solo se previsto','≠ ipoteca: diritto reale di garanzia','Studiare regresso ed eccezioni']},
 {id:'fisco',x:621,y:848,w:450,h:268,t:'note',color:'yellow',module:'fisco',
  title:'IMPOSTE IMMOBILIARI',sub:'Trasferimento e possesso',
  lines:['Registro / IVA: dipende dall’operazione','Ipotecaria e catastale: da distinguere','Prima casa ≠ abitazione principale','IMU: presupposto e soggetto passivo','Prezzo e base imponibile non coincidono sempre']},
 {id:'catasto',x:1152,y:848,w:450,h:268,t:'note',color:'purple',module:'catasto',
  title:'CATASTO E CONSERVATORIA',sub:'Identificazione ≠ pubblicità',
  lines:['Catasto: foglio, particella, subalterno','Rendita → impieghi fiscali','Planimetria ≠ conformità urbanistica','Trascrizione: opponibilità degli atti','Verificare titoli e gravami separatamente']},
 {id:'vendita',x:90,y:1230,w:450,h:285,t:'note',color:'yellow',module:'vendita',
  title:'COMPRAVENDITA',sub:'Dal vincolo al trasferimento',
  lines:['Proposta + accettazione → accordo','Preliminare: obbligo di concludere il definitivo','Rogito / forma / trascrizione: funzioni distinte','Caparra confirmatoria ≠ acconto','Controllare condizioni e inadempimento']},
 {id:'mutuo',x:621,y:1230,w:450,h:285,t:'note',color:'teal',module:'mutui',
  title:'MUTUO E CREDITO',sub:'Finanziamento immobiliare',
  lines:['Capitale + interessi → rimborso','TAN ≠ TAEG, piano di ammortamento','Ipoteca ≠ fideiussione','Quota capitale / quota interessi','Valutazione del merito creditizio']},
 {id:'es',x:1152,y:1230,w:450,h:285,t:'branch',color:'orange',mode:'estimo',
  title:'ESTIMO',sub:'Criteri economici → procedimenti → perizia',
  lines:['Aspetti: mercato, costo, trasformazione','Complementare e surrogazione','Confronto/MCA, reddito/DCF, costo','Superfici, saggi, prezzi marginali','Diritti reali, danni e indennità','Agrario, aree e immobili speciali']},
 {id:'p',x:90,y:1634,w:450,h:227,t:'branch',color:'blue',mode:'professione',
  title:'PROFESSIONE',sub:'Applicazione al lavoro del mediatore',
  lines:['Incarico → visite → proposta → trattativa','Verifiche documentali e dovere informativo','Provvigione: conclusione dell’affare','Obblighi professionali e antiriciclaggio']}
];
const CM_OVERVIEW_EDGES=[
 ['root','d'],['root','e'],['root','i'],
 ['d','fideiussione'],['fideiussione','vendita'],['vendita','p'],
 ['e','fisco'],['fisco','mutuo'],
 ['i','catasto'],['catasto','es']
];
const CM_OVERVIEW_CROSS=[
 {a:'fideiussione',b:'mutuo',label:'garanzia personale ↔ credito'},
 {a:'fisco',b:'catasto',label:'rendita e base imponibile'},
 {a:'vendita',b:'fisco',label:'trasferimento e tributi'},
 {a:'mutuo',b:'es',label:'finanziamento e stima'}
];
const CM_CROSS_BY_SECTION={
 diritto:[['obbligazioni','dir-garanzie','garanzie del credito'],['contratti','vendita','contratto tipico'],['reali','successioni','diritti ereditati'],['contratti','dir-invalidita','validità']],
 economia:[['eco-credito','mutui','credito immobiliare'],['economia-finanza','eco-matematica','interesse e rate'],['fisco','eco-imposte-procedura','tributi e adempimenti'],['eco-microeconomia','eco-mercato-stat','domanda / offerta']],
 immobiliare:[['catasto','urbanistica','≠ stessa verifica'],['estimo','imm-market2','comparazione'],['urbanistica','contratti-pratica','verifiche'],['imm-superfici','imm-estimo-approfondito','superficie → valore']],
 estimo:[['estimo-mca6','estimo-reddito6','due approcci al valore di mercato'],['estimo-residuo6','estimo-aree6','valore residuale del lotto'],['estimo-costi6','estimo-speciali6','costo e beni speciali'],['estimo-superfici6','estimo-mca6','superficie e prezzi corretti'],['estimo-diritti6','estimo-legale6','diritti e indennità']],
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
 const items=[],seen=new Set();
 const push=(label,v,max=112)=>{
  const t=cmShort(v,max).replace(/\s+/g,' ').trim();
  const k=t.toLocaleLowerCase('it');
  if(t&&t.length>12&&!seen.has(k)){seen.add(k);items.push(label+': '+t);}
 };
 // All of these are derived from the existing study module, not a newly invented syllabus.
 (m.summary||[]).filter(Boolean).slice(0,3).forEach((v,i)=>push(i===0?'Concetto':i===1?'Regola':'Distinzione',v));
 const lessons=m.lessons||[];
 if(lessons[0]){push('Esempio',lessons[0].example,120);push('Attenzione',lessons[0].mistake,110);}
 if(lessons[1])push('Approfondimento',lessons[1].key||lessons[1].intro);
 if(items.length<5&&lessons[0])push('Da ricordare',lessons[0].intro);
 return items.slice(0,6);
}

function cmBuildOverview(){
 const nodes=CM_OVERVIEW.filter(n=>!n.module||cmAvailable(n.module));
 const exists=new Set(nodes.map(n=>n.id));
 return {nodes,
  edges:CM_OVERVIEW_EDGES.filter(([a,b])=>exists.has(a)&&exists.has(b)).map(([a,b])=>({a,b})),
  cross:CM_OVERVIEW_CROSS.filter(e=>exists.has(e.a)&&exists.has(e.b)),
  w:1700,h:1930};
}
function cmBuildDetail(view){
 const groups=CM_GROUPS[view]||[];
 const seen=new Set(),actual=[];
 groups.forEach(g=>{
  const modules=g.ids.map(cmAvailable).filter(m=>m&&!seen.has(m.id)&&seen.add(m.id));
  if(modules.length)actual.push({name:g.name,modules});
 });
 if(['diritto','economia','immobiliare'].includes(view)){
  const other=MODULES.filter(m=>m.id!=='cremona'&&sectorOf(m)===view&&!seen.has(m.id)&&!(view==='immobiliare'&&m.id.startsWith('estimo-')));
  if(other.length)actual.push({name:'Altri approfondimenti',modules:other});
 }
 const nodes=[{
  id:'root',x:650,y:110,w:350,h:230,t:'root',
  title:view==='estimo'?'ESTIMO':view==='professione'?'PROFESSIONE':view.toUpperCase(),
  sub:view==='estimo'?'Valori, metodi, formule e applicazioni':view==='professione'?'Operazioni e responsabilità':'Appunti per lo studio',
  lines:view==='estimo'?['Oggetto e scopo della valutazione','Comparazione ↔ dati di mercato','Reddito / saggio: caso semplificato','Aspetti economici e valori speciali']:
   view==='professione'?['Ruolo del mediatore ex art. 1754 c.c.','Provvigione: art. 1755 c.c.','Dovere informativo: art. 1759 c.c.','Affare concluso ≠ necessariamente rogito']:
   ['Concetti essenziali → regole','Differenze da non confondere','Esempi pratici → applicazione','Apri la singola lezione per approfondire']
 }];
 const edges=[],sideY=[425,425];
 actual.forEach((g,idx)=>{
  const side=idx%2,x=side?1000:130,gy=sideY[side];
  const gid='g-'+idx,groupH=194;
  nodes.push({id:gid,x,y:gy,w:520,h:groupH,t:'group',
    color:view==='economia'?'orange':view==='immobiliare'||view==='estimo'?'teal':'blue',
    title:g.name.toUpperCase(),sub:g.modules.length+' moduli',
    lines:g.modules.slice(0,3).map(m=>'• '+m.title)});
  edges.push({a:'root',b:gid});
  let noteY=gy+groupH+44,prev=gid;
  g.modules.forEach((m,i)=>{
   const id='m-'+m.id,lines=cmModulePoints(m);
   const noteH=364+Math.max(0,lines.length-5)*22+(m.title.length>42?30:0);
   nodes.push({id,x,y:noteY,w:520,h:noteH,t:'note',
     color:['yellow','purple','teal','blue'][i%4],
     module:m.id,title:m.title.toUpperCase(),sub:m.lessons.length+' lezioni',
     lines});
   edges.push({a:prev,b:id});
   prev=id;
   noteY+=noteH+45;
  });
  sideY[side]=noteY+125;
 });
 const cross=[];
 (CM_CROSS_BY_SECTION[view]||[]).slice(0,3).forEach(([a,b,label])=>{
  if(nodes.some(n=>n.id==='m-'+a)&&nodes.some(n=>n.id==='m-'+b))
   cross.push({a:'m-'+a,b:'m-'+b,label});
 });
 return {nodes,edges,cross,w:1650,h:Math.max(1100,...sideY)+45};
}

function cmGraph(view){return view==='overview'?cmBuildOverview():cmBuildDetail(view)}
function cmPath(a,b,cross=false,idx=0,overview=false){
 const cx=n=>n.x+n.w/2,cy=n=>n.y+n.h/2;
 // Clear, hierarchical paths for overview: a shared upper level, then vertical notes.
 if(!cross){
  if(overview&&a.id==='root'&&b.t==='branch'){
   const mid=405,endY=b.y-12;
   return 'M'+cx(a)+' '+(a.y+a.h+6)+' V'+mid+' H'+cx(b)+' V'+endY;
  }
  if(a.t==='root'&&b.t==='group'){
   const spine=825, target=b.x<spine?b.x+b.w+10:b.x-10;
   return 'M'+spine+' '+cy(b)+' H'+target;
  }
  const x1=cx(a),x2=cx(b),y1=a.y+a.h+5,y2=b.y-10;
  if(Math.abs(x2-x1)<7)return 'M'+x1+' '+y1+' V'+y2;
  const mid=y1+(y2-y1)/2;
  return 'M'+x1+' '+y1+' V'+mid+' H'+x2+' V'+y2;
 }
 // Secondary connections run through empty gutters rather than across note text.
 if(overview){
  const column=n=>n.x<560?0:n.x<1130?1:2;
  const c1=column(a),c2=column(b);
  const lane=c1===c2?(c1===0?56:c1===2?1635:1110):(Math.min(c1,c2)===0?579:1113);
  const ax=c1<c2?a.x+a.w+9:a.x-9;
  const bx=c1<c2?b.x-9:b.x+b.w+9;
  return 'M'+ax+' '+cy(a)+' H'+lane+' V'+cy(b)+' H'+bx;
 }
 const ac=cy(a),bc=cy(b),aLeft=cx(a)<825,bLeft=cx(b)<825;
 if(aLeft===bLeft){
  const lane=aLeft?75+idx*9:1579-idx*9;
  const ax=aLeft?a.x-8:a.x+a.w+8,bx=bLeft?b.x-8:b.x+b.w+8;
  return 'M'+ax+' '+ac+' H'+lane+' V'+bc+' H'+bx;
 }
 const fromX=aLeft?a.x+a.w+9:a.x-9,toX=bLeft?b.x+b.w+9:b.x-9;
 const lane=825+(idx%2?26:-26);
 return 'M'+fromX+' '+ac+' H'+lane+' V'+bc+' H'+toX;
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
 const overview=CM_STATE.view==='overview';
 const root=byId.get('root');
 // One common trunk from the root, rather than drawing the same line repeatedly.
 const groups=g.edges.filter(e=>e.a==='root'&&byId.get(e.b)?.t==='group').map(e=>byId.get(e.b));
 const trunk=groups.length&&root?
  '<path d="M825 '+(root.y+root.h+8)+' V'+Math.max(...groups.map(n=>n.y+n.h/2))+'" />':'';
 const primary=g.edges.map(e=>{
  const a=byId.get(e.a),b=byId.get(e.b);
  return a&&b?'<path d="'+cmPath(a,b,false,0,overview)+'" />':'';
 }).join('');
 const crosses=g.cross.map((e,i)=>{
  const a=byId.get(e.a),b=byId.get(e.b);
  return a&&b?'<path d="'+cmPath(a,b,true,i,overview)+'" />':'';
 }).join('');
 return '<div id="cm-world" class="cm-world" style="width:'+g.w+'px;height:'+g.h+'px">'+
 '<div class="cm-page-heading"><span>MANUALE / PATENTINO</span><b>QUADERNO DI RIPASSO</b><span>'+esc(CM_SECTIONS.find(s=>s.id===CM_STATE.view)?.label||'')+'</span></div>'+
 '<svg class="cm-wires" width="'+g.w+'" height="'+g.h+'" viewBox="0 0 '+g.w+' '+g.h+'" aria-hidden="true"><defs>'+
 '<marker id="cm-arrow-blue" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto"><path d="M0 0 L9 4 L0 8" fill="none" stroke="#326cab" stroke-width="1.5"/></marker>'+
 '<marker id="cm-arrow-orange" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto"><path d="M0 0 L9 4 L0 8" fill="none" stroke="#db781e" stroke-width="1.5"/></marker></defs>'+
 '<g class="cm-tree-lines" fill="none" stroke="#326cab" stroke-width="2.7" stroke-linejoin="round">'+trunk+'</g>'+
 '<g class="cm-tree-lines" fill="none" stroke="#326cab" stroke-width="2.7" stroke-linejoin="round" stroke-linecap="round" marker-end="url(#cm-arrow-blue)">'+primary+'</g>'+
 '<g class="cm-cross-lines" fill="none" stroke="#db781e" stroke-width="2.4" stroke-dasharray="9 9" opacity=".72" stroke-linejoin="round" marker-end="url(#cm-arrow-orange)">'+crosses+'</g></svg>'+
 g.nodes.map(cmNodeHtml).join('')+
 '<div class="cm-margin-note" style="top:'+(g.h-85)+'px">Frecce blu: percorso di studio. Frecce arancioni: rimandi tra temi distinti.</div>'+
 '</div>';
}
/* Stampa della mappa sul SOLO A4 verticale.
   Riquadri grafici OneNote, con frecce vettoriali e colori invariati.
   A differenza della vecchia modalità poster non esistono colonne di fogli:
   ogni pagina ha la stessa larghezza e la mappa prosegue solo in verticale. */
const CM_PRINT_WIDTH=628; // px CSS, max a 115% = 722px < 194mm = 733px
const CM_PRINT_NODE_X=52;
const CM_PRINT_NODE_W=550;
const CM_PRINT_PAGE_MM={width:194,height:259};
function cmPrintSequence(g,view){
 const byId=new Map(g.nodes.map(n=>[n.id,n]));
 if(view==='overview'){
  const order=['root','d','fideiussione','vendita','p','e','fisco','mutuo','i','catasto','es'];
  const sequence=order.map(id=>byId.get(id)).filter(Boolean);
  sequence.push(...g.nodes.filter(n=>n.t!=='scribble'&&!order.includes(n.id)));
  return sequence;
 }
 const ordered=[],placed=new Set();
 const add=id=>{const n=byId.get(id);if(n&&!placed.has(id)){ordered.push(n);placed.add(id)}};
 add('root');
 const groups=g.nodes.filter(n=>n.t==='group').sort((a,b)=>Number(a.id.slice(2))-Number(b.id.slice(2)));
 for(const group of groups){
  add(group.id);
  let last=group.id;
  // Follow the original module chain within this category.
  for(let limit=0;limit<g.nodes.length;limit++){
   const edge=g.edges.find(e=>e.a===last&&e.b.startsWith('m-'));
   if(!edge||placed.has(edge.b))break;
   add(edge.b);last=edge.b;
  }
 }
 g.nodes.filter(n=>n.t!=='scribble').forEach(n=>add(n.id));
 return ordered;
}
function cmPrintNoteHeight(n){
 const lines=n.lines||[];
 // Conservative height budget so no text is cut when reflowing on a narrow page.
 const wraps=lines.reduce((sum,line)=>sum+Math.max(1,Math.ceil(String(line).length/60)),0);
 const titleWraps=Math.max(1,Math.ceil(String(n.title).length/31));
 const base=n.t==='root'?133:n.t==='branch'?138:n.t==='group'?114:124;
 const min=n.t==='root'?215:n.t==='branch'?232:n.t==='group'?160:240;
 return Math.max(min,base+wraps*20+Math.max(0,lines.length-1)*7+(titleWraps-1)*27);
}
function cmPrintPages(g,view,scale){
 const pxPerMm=96/25.4;
 const maxHeight=Math.floor(CM_PRINT_PAGE_MM.height*pxPerMm/scale)-18;
 const original=cmPrintSequence(g,view);
 const byId=new Map(g.nodes.map(n=>[n.id,n]));
 const notes=original.map(n=>{
  const related=CM_STATE.relations?g.cross.filter(e=>e.a===n.id||e.b===n.id).map(e=>{
   const other=byId.get(e.a===n.id?e.b:e.a);
   return other?'↝ Rimando: '+other.title+' — '+e.label:'';
  }).filter(Boolean).slice(0,2):[];
  return {...n,lines:[...(n.lines||[]),...related]};
 });
 const pages=[];let current=[],y=48;
 const flush=()=>{if(current.length){pages.push(current);current=[];y=48}};
 for(const n of notes){
  const height=cmPrintNoteHeight(n);
  if(current.length&&y+height>maxHeight-20)flush();
  if(height>maxHeight-85)throw Error('Nota troppo alta per la stampa A4: '+n.title);
  current.push({...n,x:CM_PRINT_NODE_X,y,w:CM_PRINT_NODE_W,h:height});
  y+=height+37;
 }
 flush();
 return pages;
}
function cmPrintPageCanvas(page,pageIndex,totalPages,scale){
 const logicalHeight=Math.floor(CM_PRINT_PAGE_MM.height*(96/25.4)/scale);
 const ids=new Set(page.map(n=>n.id));
 const original=cmGraph(CM_STATE.view);
 const cross=CM_STATE.relations?original.cross.filter(e=>ids.has(e.a)&&ids.has(e.b)):[];
 const center=CM_PRINT_NODE_X+CM_PRINT_NODE_W/2;
 const connectors=[];
 for(let i=1;i<page.length;i++){
  const prev=page[i-1],next=page[i];
  const y1=prev.y+prev.h+5,y2=next.y-9;
  if(y2>y1)connectors.push('M'+center+' '+y1+' V'+y2);
 }
 if(pageIndex>0&&page.length)connectors.unshift('M'+center+' 5 V'+(page[0].y-10));
 if(pageIndex<totalPages-1&&page.length){
  const last=page[page.length-1];
  if(logicalHeight-6>last.y+last.h+6)connectors.push('M'+center+' '+(last.y+last.h+6)+' V'+(logicalHeight-6));
 }
 const nodeById=new Map(page.map(n=>[n.id,n]));
 const crossPaths=cross.map((edge,i)=>{
  const a=nodeById.get(edge.a),b=nodeById.get(edge.b);
  const lane=i%2===0?24:618,firstY=a.y+a.h/2,secondY=b.y+b.h/2;
  const attach=lane<CM_PRINT_WIDTH/2?CM_PRINT_NODE_X-5:CM_PRINT_NODE_X+CM_PRINT_NODE_W+5;
  return '<path d="M'+attach+' '+firstY+' H'+lane+' V'+secondY+' H'+attach+'" />';
 }).join('');
 const marker='cm-print-arrow-'+pageIndex;
 const other='cm-print-cross-'+pageIndex;
 return '<div class="cm-world cm-poster-world" style="width:'+CM_PRINT_WIDTH+'px;height:'+logicalHeight+
 'px;transform:scale('+scale+');">'+
 '<svg class="cm-wires" width="'+CM_PRINT_WIDTH+'" height="'+logicalHeight+'" viewBox="0 0 '+CM_PRINT_WIDTH+' '+logicalHeight+'" aria-hidden="true">'+
 '<defs><marker id="'+marker+'" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto">'+
 '<path d="M0 0 L9 4 L0 8" fill="none" stroke="#326cab" stroke-width="1.5"/></marker>'+
 '<marker id="'+other+'" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto">'+
 '<path d="M0 0 L9 4 L0 8" fill="none" stroke="#db781e" stroke-width="1.5"/></marker></defs>'+
 '<g class="cm-tree-lines" fill="none" stroke="#326cab" stroke-width="2.6" stroke-linejoin="round" marker-end="url(#'+marker+')">'+
 connectors.map(d=>'<path d="'+d+'"/>').join('')+'</g>'+
 '<g class="cm-cross-lines" fill="none" stroke="#db781e" stroke-width="2.2" stroke-dasharray="8 8" marker-end="url(#'+other+')">'+crossPaths+'</g></svg>'+
 page.map(cmNodeHtml).join('')+'</div>';
}
function cmPrintPosterPrepare(){
 if(!document.getElementById('cm-viewport'))return false;
 if(document.getElementById('cm-print-poster'))return true;
 const view=CM_STATE.view;
 const graph=cmGraph(view);
 const label=CM_SECTIONS.find(x=>x.id===view)?.label||'Panoramica';
 const scaleInput=document.getElementById('cm-print-scale');
 const scale=Math.max(.8,Math.min(1.15,Number(scaleInput?.value||'1')||1));
 // All three user-facing scales fit within the *same* 194-mm portrait width.
 if(CM_PRINT_WIDTH*scale>CM_PRINT_PAGE_MM.width*96/25.4)throw Error('Scala stampa supera larghezza A4');
 const pages=cmPrintPages(graph,view,scale);
 const markup=pages.map((nodes,i)=>
  '<section class="cm-poster-page">'+
  '<header class="cm-poster-head"><strong>MAPPE E APPUNTI · '+esc(label.toUpperCase())+'</strong>'+
  '<span>OneNote · A4 verticale · '+Math.round(scale*100)+'%</span></header>'+
  '<div class="cm-poster-window'+(CM_STATE.relations?'':' cm-hide-relations')+'">'+
  cmPrintPageCanvas(nodes,i,pages.length,scale)+'</div>'+
  '<footer class="cm-poster-foot"><span>Pagina '+(i+1)+' di '+pages.length+'</span>'+
  '<span>'+(i<pages.length-1?'↓ La mappa continua nella pagina successiva':'Fine della mappa')+'</span></footer></section>'
 ).join('');
 const poster=document.createElement('div');
 poster.id='cm-print-poster';
 poster.className='cm-poster-print';
 poster.setAttribute('aria-label','Mappa OneNote in A4 verticale, senza tagli orizzontali');
 poster.innerHTML=markup;
 document.body.appendChild(poster);
 document.body.classList.add('cm-poster-printing');
 return true;
}
function cmPrintPosterClear(){
 document.body.classList.remove('cm-poster-printing');
 document.getElementById('cm-print-poster')?.remove();
}
window.addEventListener('beforeprint',()=>{
 if(document.getElementById('cm-viewport'))cmPrintPosterPrepare();
});
window.addEventListener('afterprint',cmPrintPosterClear);

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
 '<div class="cm-controls"><button type="button" class="cm-print-btn" data-cm-tool="print" title="Stampa la mappa OneNote a larghezza A4 verticale, senza affiancare fogli">⎙ Stampa mappa / PDF</button><button type="button" data-cm-tool="minus" aria-label="Riduci zoom">−</button><span id="cm-zoom-label">100%</span><button type="button" data-cm-tool="plus" aria-label="Aumenta zoom">+</button><button type="button" data-cm-tool="fit" title="Adatta al foglio">Adatta</button></div></div>'+
 '<div class="cm-note-tools"><button type="button" class="cm-toggle active" id="cm-cross-toggle" data-cm-tool="relations" aria-pressed="true">↝ Collegamenti incrociati: visibili</button><span>Stampa la mappa a larghezza A4 verticale: se è lunga, prosegue in basso sulle pagine successive.</span><label class="cm-print-choice" for="cm-print-scale">Scala di stampa <select id="cm-print-scale" aria-label="Dimensione della mappa nella stampa"><option value="0.8">Compatta (80%)</option><option value="1" selected>Normale (100%)</option><option value="1.15">Grande (115%)</option></select></label></div>'+
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
 if(key==='print'){if(cmPrintPosterPrepare())window.print();return;}
 if(key==='fit')cmFit();
 else if(key==='relations'){CM_STATE.relations=!CM_STATE.relations;cmApply()}
 else cmZoom(key==='plus'?1.22:1/1.22);
});
