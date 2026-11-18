/* Interventi specialistici: mantieni indici e progressi dei 98 paragrafi pubblicati.
   Applica il supplemento una sola volta per caricamento della pagina. */
(function(){
'use strict';
const volumes=window.PATENTINO_ACADEMIC_VOLUMES||[];
const units=window.PATENTINO_EXPERT_UNITS||{};
const allowedSources=window.PATENTINO_ACADEMIC_SOURCES||{};
for(const volume of volumes){
 const extras=Array.isArray(units[volume.id])?units[volume.id]:[];
 const existing=new Set(volume.sections.map(s=>s.expert?.id).filter(Boolean));
 for(const unit of extras){
  if(!unit||!unit.id||existing.has(unit.id))continue;
  const refs=Array.isArray(unit.refs)?unit.refs.filter(ref=>allowedSources[ref]):[];
  volume.sections.push({
    title:unit.title,
    paragraphs:Array.isArray(unit.paragraphs)?unit.paragraphs:[],
    focus:(unit.limits||[])[0]||'Distinguere principio e presupposti della sua applicazione.',
    caseStudy:unit.caseFacts||'Caso in corso di approfondimento.',
    exam:(unit.questions||[])[0]||'Quali sono presupposti e conseguenze della fattispecie?',
    refs,
    expert:unit
  });
  existing.add(unit.id);
 }
}
window.PATENTINO_EXPERT_LOADED=true;
})();