/* Capitoli unitari di studio: raggruppano i moduli originali senza cambiare i loro ID e il progresso localStorage. */
const THEORY_CHAPTERS=[
 {
  "id": "fondamenti-diritto",
  "sector": "diritto",
  "title": "Fondamenti, fonti e soggetti",
  "desc": "Capacità, rappresentanza, responsabilità e regole di interpretazione.",
  "modules": [
   "civile",
   "diritto-fonti",
   "diritto-soggetti",
   "diritto-responsabilita"
  ]
 },
 {
  "id": "proprieta-famiglia",
  "sector": "diritto",
  "title": "Proprietà, possesso, famiglia e successioni",
  "desc": "Diritti reali, comunione, condominio, trasferimenti mortis causa.",
  "modules": [
   "reali",
   "diritto-comunione",
   "condominio",
   "diritto-famiglia",
   "successioni"
  ]
 },
 {
  "id": "obbligazioni-garanzie",
  "sector": "diritto",
  "title": "Obbligazioni, garanzie e pubblicità",
  "desc": "Adempimento, estinzione, ipoteche, fideiussioni e registri.",
  "modules": [
   "obbligazioni",
   "dir-garanzie",
   "pubblicita",
   "dir-invalidita"
  ]
 },
 {
  "id": "contratti",
  "sector": "diritto",
  "title": "Contratti e trasferimenti immobiliari",
  "desc": "Regole del contratto, preliminare, vendita e locazioni.",
  "modules": [
   "contratti",
   "diritto-contratti-speciali",
   "vendita",
   "locazioni"
  ]
 },
 {
  "id": "professione-impresa",
  "sector": "diritto",
  "title": "Mediazione, impresa e attività professionale",
  "desc": "Responsabilità del mediatore, società, crisi e adempimenti.",
  "modules": [
   "professione",
   "adempimenti",
   "commerciale",
   "dir-titoli",
   "dir-crisi"
  ]
 },
 {
  "id": "economia-mercato",
  "sector": "economia",
  "title": "Economia generale, mercato e dati",
  "desc": "Domanda, offerta, ciclo, statistiche e prezzi immobiliari.",
  "modules": [
   "economia-base",
   "eco-macroeconomia",
   "eco-microeconomia",
   "mercato",
   "eco-mercato-stat",
   "eco-dati-mercato"
  ]
 },
 {
  "id": "economia-azienda",
  "sector": "economia",
  "title": "Impresa, bilancio e gestione",
  "desc": "Costi, ricavi, indicatori di bilancio, attività di agenzia.",
  "modules": [
   "economia-azienda",
   "eco-bilancio",
   "eco-impresa2"
  ]
 },
 {
  "id": "credito-finanza",
  "sector": "economia",
  "title": "Matematica finanziaria, credito e pagamenti",
  "desc": "Interessi, rate, ammortamenti, banche, indicatori e formule.",
  "modules": [
   "economia-finanza",
   "eco-matematica",
   "mutui",
   "eco-credito",
   "eco-pagamenti",
   "formule"
  ]
 },
 {
  "id": "investimenti",
  "sector": "economia",
  "title": "Investimenti e rendimenti",
  "desc": "VAN, TIR, redditi locativi, leva e rischio.",
  "modules": [
   "eco-investimenti"
  ]
 },
 {
  "id": "fisco",
  "sector": "economia",
  "title": "Fiscalità, tributi e redditi immobiliari",
  "desc": "Trasferimenti, rendite catastali, redditi fondiari, dichiarazioni e imposte.",
  "modules": [
   "fisco",
   "fisco-avanzato",
   "eco-tributi",
   "eco-imposte-procedura",
   "eco-redditi-fondiari"
  ]
 },
 {
  "id": "catasto-rilievi",
  "sector": "immobiliare",
  "title": "Catasto, terreni, mappe e rilievi",
  "desc": "Identificativi, rendite, volture, DOCFA, PREGEO, misure.",
  "modules": [
   "catasto",
   "catasto-terreni",
   "imm-catasto-operativo",
   "imm-topografia"
  ]
 },
 {
  "id": "edilizia-urbanistica",
  "sector": "immobiliare",
  "title": "Urbanistica, edifici, impianti ed energia",
  "desc": "Titoli abilitativi, conformità, costruzioni e prestazione energetica.",
  "modules": [
   "urbanistica",
   "imm-urbanistica2",
   "tecnica-costruttiva",
   "imm-edilizia",
   "imm-impianti"
  ]
 },
 {
  "id": "pratica-dossier",
  "sector": "immobiliare",
  "title": "Pratica immobiliare, documenti e condominio",
  "desc": "Due diligence, proposta, dossier, verifiche e amministrazione.",
  "modules": [
   "contratti-pratica",
   "imm-documenti",
   "imm-condominio-operativo"
  ]
 },
 {
  "id": "estimo-metodi",
  "sector": "immobiliare",
  "title": "Estimo: basi, confronto e metodi",
  "desc": "Aspetti economici, MCA, coefficienti, superfici e statistica.",
  "modules": [
   "estimo",
   "estimo-calcoli",
   "imm-superfici",
   "imm-market2",
   "imm-estimo-approfondito",
   "estimo-processo6",
   "estimo-valori6",
   "estimo-mca6",
   "estimo-superfici6",
   "estimo-statistica6"
  ]
 },
 {
  "id": "estimo-analitico",
  "sector": "immobiliare",
  "title": "Estimo: redditi, costi e trasformazioni",
  "desc": "Capitalizzazione, DCF, costo deprezzato e residuale.",
  "modules": [
   "estimo-reddito6",
   "estimo-dcf6",
   "estimo-costi6",
   "estimo-residuo6",
   "estimo-aree6"
  ]
 },
 {
  "id": "estimo-speciale",
  "sector": "immobiliare",
  "title": "Estimo: diritti, danni e beni speciali",
  "desc": "Usufrutto, servitù, espropri, danni, perizia e immobili speciali.",
  "modules": [
   "imm-estimo-speciale",
   "imm-estimo-legale3",
   "estimo-diritti6",
   "estimo-legale6",
   "estimo-speciali6",
   "estimo-perizia6"
  ]
 },
 {
  "id": "agrario-rurale",
  "sector": "immobiliare",
  "title": "Agrario, fondi rustici e redditi dei terreni",
  "desc": "Colture, redditi catastali agrari, prelazione, azienda rurale.",
  "modules": [
   "agrario",
   "imm-rurale2",
   "imm-rurale-diritto",
   "estimo-agrario6"
  ]
 },
 {
  "id": "ripasso-orale",
  "sector": "immobiliare",
  "title": "Metodo di studio e prova orale",
  "desc": "Come esporre definizioni, ragionamenti e casi d'esame.",
  "modules": [
   "orale"
  ]
 }
];
const theoryChapterFor=moduleId=>THEORY_CHAPTERS.find(c=>c.modules.includes(moduleId))||null;
const theoryChapterModules=c=>c.modules.map(id=>MODULES.find(m=>m.id===id)).filter(Boolean);
const theoryOrderedModules=()=>THEORY_CHAPTERS.flatMap(theoryChapterModules);
const theoryChapterNext=(moduleId,idx)=>{
 const m=MODULES.find(x=>x.id===moduleId);
 if(!m)return null;
 if(idx<m.lessons.length-1)return {id:moduleId,idx:idx+1};
 const ordered=theoryOrderedModules();
 const pos=ordered.findIndex(x=>x.id===moduleId);
 return pos>=0&&ordered[pos+1]?{id:ordered[pos+1].id,idx:0}:null;
};
