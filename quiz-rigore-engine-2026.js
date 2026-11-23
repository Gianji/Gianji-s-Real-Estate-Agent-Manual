/* PATENTINO | Quesiti a difficoltà selettiva — revisione 2026-11-23.
 * Usa in esercitazioni e simulazioni soltanto domande originali con fonte
 * identificabile. Le vecchie domande non revisionate rimangono fuori dal punteggio;
 * eventuali banche camerali storiche possono essere consultate nell'archivio.
 * Non si dichiara alcuna domanda "ufficiale" senza fonte camerale documentata.
 */
(function(){
 'use strict';
 const original=Array.isArray(window.PATENTINO_RIGOR_NORM)?window.PATENTINO_RIGOR_NORM:[];
 const technical=Array.isArray(window.PATENTINO_RIGOR_TEC)?window.PATENTINO_RIGOR_TEC:[];
 const caseStudy=Array.isArray(window.PATENTINO_RIGOR_CASES)?window.PATENTINO_RIGOR_CASES:[];
 const civil=Array.isArray(window.PATENTINO_RIGOR_CIVIL)?window.PATENTINO_RIGOR_CIVIL:[];
 const specialist=Array.isArray(window.PATENTINO_RIGOR_SPECIAL)?window.PATENTINO_RIGOR_SPECIAL:[];
 const numerical=Array.isArray(window.PATENTINO_RIGOR_MATH)?window.PATENTINO_RIGOR_MATH:[];
 const permitted=new Set(['www.normattiva.it','def.finanze.it','www.fiscooggi.it','www.abi.it','ivsc.org','telematici.agenziaentrate.gov.it','www.mit.gov.it']);
 const ids=new Set();
 const errors=[];
 const vetted=[];
 for(const question of [...original,...technical,...caseStudy,...civil,...specialist,...numerical]){
  const module=MODULES.find(x=>x.id===question.module);
  const key=String(question.id||'');
  const opts=question.options;
  const url=String(question.sourceUrl||'');
  let domain='';
  try {domain=new URL(url).hostname.toLowerCase()}catch{}
  const normalized=Array.isArray(opts)?opts.map(o=>String(o).trim().toLocaleLowerCase('it')):[];
  const ok=module&&key&&!ids.has(key)&&Array.isArray(opts)&&opts.length===4&&
   normalized.every(x=>x.length>=5)&&new Set(normalized).size===4&&Number.isInteger(question.answer)&&
   question.answer>=0&&question.answer<4&&String(question.why||'').length>=100&&
   permitted.has(domain)&&question.origin==='original'&&question.verifiedAt==='2026-11-23'&&(!question.audit||window.PATENTINO_RIGOR_AUDIT?.(question)===true);
  if(!ok){errors.push(key||'(senza ID)');continue;}
  ids.add(key);
  vetted.push({...question,verified:true,difficulty:'avanzato',difficultyTier:key.startsWith('rig-26-x-')?'estrema':'alta',official:false});
 }
 const legal=vetted.filter(q=>MODULES.find(m=>m.id===q.module).category==='normativa');
 const tec=vetted.filter(q=>MODULES.find(m=>m.id===q.module).category==='tecnica');
 // Fail safely: never substitute unreviewed older material to fill the exam.
 if(legal.length<20||tec.length<20){
  console.error('PATENTINO: banca verificata incompleta',errors,legal.length,tec.length);
  return;
 }
 // Preserve the old material for editorial comparison, but do not use it for
 // closed-answer scoring: original historical answers are not fully audited.
 window.PATENTINO_QUIZ_LEGACY_COUNT=QUESTIONS.length;
 QUESTIONS.splice(0,QUESTIONS.length,...vetted);
 // Old app default was 'milano'; do not accidentally select an unreviewed bank.
 quizOrigin='all';quizSubject='all';quizSector='all';quizModule='all';quizSize=20;
 window.PATENTINO_QUIZ_RIGOR={
  verifiedTotal:vetted.length,normativa:legal.length,tecnica:tec.length,
  families:new Set(vetted.map(q=>q.family||q.topicKey||q.id)).size,
  numericCases:vetted.filter(q=>q.audit).length,
  excludedLegacy:window.PATENTINO_QUIZ_LEGACY_COUNT,
  invalid:errors,checkedAt:'2026-11-23',
  official:false
 };
 // All interactive routes now select exclusively from the vetted bank.
 // Keep the filtering semantics used by quiz, streak and error review.
 categoryQuestions=function(subject,module,origin,sector='all'){
  if(!['all','original'].includes(origin))return [];
  return QUESTIONS.filter(q=>
   (subject==='all'||moduleBy(q.module)?.category===subject)&&
   (module==='all'||q.module===module)&&
   (sector==='all'||sectorOf(moduleBy(q.module))===sector)
  );
 };
 // Mini quizzes use only questions verified for the selected module.
 startModuleMiniQuiz=function(id){
  const pool=QUESTIONS.filter(q=>q.module===id);
  if(!pool.length){
   toast('Nessun quesito revisionato per questo modulo: consulta il quiz generale.');
   return;
  }
  const qs=shuffleDifferent(rigorSelection(pool,Math.min(5,pool.length)),lastQuizFirst).map(permuteQuestion);
  lastQuizFirst=qs[0]?.id??null;
  streakSession=null;
  quizSession={questions:qs,answers:Array(qs.length).fill(null),i:0,recorded:false,miniModule:id};
  navigate('quiz');
 };

 // Favor questions with simultaneous conditions, counterexamples and close
 // alternatives; keep enough other vetted questions for meaningful variety.
 // Round-robin across modules and question families: prevent a 40-question
 // test becoming forty numeric substitutions of the same exercise.
 function rigorSelection(pool,count){
  const target=Math.min(count,pool.length),selected=[],usedIds=new Set(),usedFamilies=new Set();
  const perModule=new Map();
  const family=q=>String(q.family||q.topicKey||q.id);
  const take=(candidates)=>{
   const unique=candidates.filter(q=>!usedIds.has(q.id)&&!usedFamilies.has(family(q)));
   if(!unique.length)return false;
   const candidatesByModule=new Map();
   for(const q of unique){
    const rows=candidatesByModule.get(q.module)||[];
    rows.push(q);candidatesByModule.set(q.module,rows);
   }
   const order=shuffle([...candidatesByModule.keys()]).sort((a,b)=>(perModule.get(a)||0)-(perModule.get(b)||0));
   const module=order[0];
   const next=pickFreshQuestions(candidatesByModule.get(module),1)[0];
   if(!next)return false;
   selected.push(next);usedIds.add(next.id);usedFamilies.add(family(next));
   perModule.set(next.module,(perModule.get(next.module)||0)+1);
   return true;
  };
  const extremes=pool.filter(q=>q.difficultyTier==='estrema');
  const extremeCount=Math.min(extremes.length,Math.ceil(target*.35));
  for(let k=0;k<extremeCount;k++){if(!take(extremes))break;}
  while(selected.length<target&&take(pool)){}
  // Only when the requested session is larger than distinct topic families
  // may variants of an already used family appear.
  if(selected.length<target){
   const rest=pool.filter(q=>!usedIds.has(q.id));
   selected.push(...pickFreshQuestions(rest,target-selected.length));
  }
  return shuffle(selected);
 }
 startQuiz=function(errorsOnly=false,expertOnly=false){
  let pool=categoryQuestions(quizSubject,quizModule,quizOrigin,quizSector);
  if(errorsOnly||quizSize==='errors')pool=pool.filter(q=>data.wrong.includes(q.id));
  if(expertOnly)pool=pool.filter(q=>q.difficulty==='avanzato');
  if(!pool.length){toast('Nessun quesito revisionato disponibile con i filtri selezionati');return;}
  const count=errorsOnly||quizSize==='errors'?Math.min(pool.length,20):Math.min(Number(quizSize),pool.length);
  const selected=rigorSelection(pool,count);
  const questions=shuffleDifferent(selected,lastQuizFirst).map(permuteQuestion);
  lastQuizFirst=questions[0]?.id??null;
  streakSession=null;
  quizSession={questions,answers:Array(questions.length).fill(null),i:0,recorded:false};
  navigate('quiz');
 };

 // Even in elimination mode, show distinct models before repeating a family.
 startStreak=function(filtered=false){
  const pool=filtered?categoryQuestions(quizSubject,quizModule,quizOrigin,quizSector):categoryQuestions('all','all','all','all');
  if(!pool.length){toast('Nessun quesito revisionato per questo filtro');return;}
  const initial=rigorSelection(pool,Math.min(120,pool.length));
  const used=new Set(initial.map(q=>q.id));
  const questions=shuffleDifferent(initial,lastStreakFirst).concat(shuffle(pool.filter(q=>!used.has(q.id)))).map(permuteQuestion);
  lastStreakFirst=questions[0]?.id??null;
  quizSession=null;streakSession={questions,i:0,score:0,selected:null,failed:false,completed:false,filtered};
  navigate('quiz');
 };
 // The published chamber question selection is not a complete answer key:
 // simulate 40 original sourced questions, 20 per syllabus division.
 startExam=function(){
  const sample=category=>rigorSelection(QUESTIONS.filter(q=>moduleBy(q.module).category===category),20);
  const parts=[...sample('normativa'),...sample('tecnica')];
  if(parts.length!==40){toast('Servono 20 quesiti verificati per ogni divisione.');return;}
  const questions=shuffleDifferent(parts,lastExamFirst).map(permuteQuestion);
  lastExamFirst=questions[0]?.id??null;
  quizSession=null;
  streakSession=null;
  examSession={questions,answers:Array(questions.length).fill(null),i:0,deadline:Date.now()+40*60000,finished:false,recorded:false};
  startTicker();
  navigate('exam');
 };
 // Keep the study dashboard and quiz-archive information truthful.
 const previousExamRender=renderExam;
 renderExam=function(){
  return previousExamRender().replace('20 quesiti di normativa e 20 di tecnica, estratti casualmente dal nostro archivio didattico.',
    '20 quesiti originali di normativa e 20 di tecnica estratti dalla banca revisionata, con risposta motivata e fonte consultabile. Non sono il correttore ufficiale camerale.')
   .replace('Una prova completa secondo il formato della Camera di Commercio di Milano:',
    'Una simulazione impegnativa nel formato 20+20, ispirata alla struttura della prova scritta:');
 };
 // Preserve existing user state; hide old unreviewed question IDs from the error panel.
 // Restore rendering after the last script, including the route override from Study.
 render(false);
})();