/* Verifica indipendente dei casi computazionali prima dell'ingresso nel punteggio. */
(function installAudit(){
'use strict';
const tests={
 noireddito:x=>12*x.monthly*(1-x.vacancy/100)-x.expenses,
 capitalizzazione:x=>Math.round(x.noi/(x.rate/100)),
 saggioimplicito:x=>x.noi/x.value*100,
 comparabilebox:x=>x.sold-x.box+x.floor,
 comparabileterrazzo:x=>x.sold-x.terrace+x.energy,
 rendimentilordi:x=>0,
 dcfdueperiodi:x=>Math.round(x.first/(1+x.rate/100)+x.terminal/Math.pow(1+x.rate/100,2)),
 residuostatico:x=>x.revenue-x.build-x.fees-x.finance-x.profit,
 residuoprezzi:x=>Math.round(x.residual-x.revenue*x.drop/100),
 residuocostruzione:x=>Math.round(x.residual-x.construction*x.overrun/100),
 superficiecommerciale:x=>x.indoor+x.terrace*.3+x.cellar*.25,
 ltvperizia:x=>x.loan/x.appraisal*100,
 dscr:x=>x.noi/x.debt,
 grossmultiplier:x=>x.price/x.rent,
 tassosensibilita:x=>Math.round(x.noi/(x.rate/100)-x.noi/(x.later/100)),
 componentiimmobile:x=>x.area*x.unitPrice+x.box,
 terrenoalmetro:x=>x.residual/x.area,
 cashoncash:x=>x.available/x.equity*100,
 ammortamentofrancese:x=>{
  const r=x.annual/1200,n=x.years*12;
  return Math.round((x.principal*r/(1-Math.pow(1+r,-n)))*100)/100;
 },
 quotacapitale:x=>x.payment-x.principal*x.annual/1200,
 riconciliazione:x=>Math.round(.5*x.a+.3*x.b+.2*x.c),
 costodeprezzato:x=>Math.round(x.land+x.rebuild*(1-x.dep/100))
};
const fmt=x=>new Intl.NumberFormat('it-IT',{minimumFractionDigits:2,maximumFractionDigits:2}).format(x);
window.PATENTINO_RIGOR_AUDIT=q=>{
 const a=q.audit;
 if(!a||!tests[a.family])return false;
 const expected=tests[a.family](a.inputs);
 if(!Number.isFinite(expected)||!Number.isFinite(a.result)||Math.abs(expected-a.result)>1e-6)return false;
 if(a.family==='rendimentilordi'){
  const x=a.inputs,c=x.gross/x.value*100,r=(x.gross-x.expenses)/x.value*100;
  return q.options[q.answer]===fmt(c)+'% lordo e '+fmt(r)+'% netto';
 }
 return true;
};
})();
