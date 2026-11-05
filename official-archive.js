/* Indice con collegamenti diretti alla banca ufficiale CCIAA Roma.
 * Fonte: https://www.rm.camcom.it/pagina918_quiz-esame-mediatori-valido-dal-24-febbraio-2014.html
 * Versione dei quesiti pubblicata nel 2014: da confrontare con norme attuali.
 * Le domande restano sul server camerale; non ne ripubblichiamo i testi. */
const OFFICIAL_ARCHIVE_GROUPS=[
 {id:'mediazione',title:'Legislazione sulla mediazione',icon:'§',tests:[
  ['Legislazione sulla Mediazione I',50,149],['Legislazione sulla Mediazione II',49,150],['Legislazione sulla Mediazione III',29,151]
 ]},
 {id:'diritto',title:'Diritto, contratti, società e tributi',icon:'⚖',tests:[
  ['Condominio',43,137],['Capacità giuridica e di agire',36,133],
  ['Diritto civile e diritti reali I',50,138],['Diritto civile e diritti reali II',50,139],['Diritto civile e diritti reali III',47,140],
  ['Finanziamenti',44,148],
  ['Negozio giuridico e contratti I',50,152],['Negozio giuridico e contratti II',50,153],['Negozio giuridico e contratti III',56,154],
  ['Obbligazioni e ipoteca I',50,155],['Obbligazioni e ipoteca II',22,156],
  ['Società e fallimento I',50,157],['Società e fallimento II',50,158],['Società e fallimento III',50,159],['Società e fallimento IV',17,160],
  ['Titoli di credito',55,161],['Tributi e imposte I',50,162],['Tributi e imposte II',50,163],['Tributi e imposte III',30,164]
 ]},
 {id:'estimo',title:'Catasto, estimo e valutazione',icon:'⌂',tests:[
  ['Catasto I',50,134],['Catasto II',50,135],['Catasto III',57,136],
  ['Estimo legale I',50,145],['Estimo legale II',50,146],['Estimo legale III',22,147],
  ['Estimo agrario I',50,141],['Estimo agrario II',44,142],
  ['Estimo generale I',50,143],['Estimo generale II',19,144],
  ['Stima fabbricati e aree edificabili I',50,165],['Stima fabbricati e aree edificabili II',50,166],['Stima fabbricati e aree edificabili III',25,167]
 ]}
];
const OFFICIAL_ARCHIVE_TESTS=OFFICIAL_ARCHIVE_GROUPS.flatMap(group=>group.tests.map(([title,count,sourceId])=>({title,count,sourceId,groupId:group.id,groupTitle:group.title,url:`https://www.rm.camcom.it/index.php?azione=compilaquest&id_sond=${sourceId}&id_sezione=918`})));
const OFFICIAL_ARCHIVE_TOTAL=OFFICIAL_ARCHIVE_TESTS.reduce((n,t)=>n+t.count,0);
