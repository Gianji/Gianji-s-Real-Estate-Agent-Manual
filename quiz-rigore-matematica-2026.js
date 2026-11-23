/* MATEMATICA ESTIMATIVA E CREDITIZIA — casi parametrizzati originali, numeri stabili e calcoli controllabili */
(function createMathBank(){
"use strict";
const ABI="https://www.abi.it/download/linee-guida-per-la-valutazione-degli-immobili-in-garanzia-delle-esposizioni-creditizie/";
const IVS="https://ivsc.org/standards/";
const n=(x,d=0)=>new Intl.NumberFormat('it-IT',{minimumFractionDigits:d,maximumFractionDigits:d}).format(x);
const E=(x,d=0)=>"€ "+n(x,d);
const P=(x,d=2)=>n(x,d)+"% annuo";
const Q=x=>n(x,2)+" volte";
const S=x=>n(x,2)+" m²";
const SQ=x=>E(x)+"/m²";
const families=[];
const add=(key,module,fn)=>families.push({key,module,fn});
const bank=[];
function put(f,j,row){
 const [stem,correct,wrong,fmt,why,src,inputs]=row;
 if(!Number.isFinite(correct))throw Error("Risultato non finito: "+f.key+j);
 const expected=fmt(correct),wrongs=wrong.map(fmt);
 if(wrong.length!==3||new Set([expected,...wrongs]).size!==4)throw Error("Soluzione duplicata: "+f.key+" "+j+" "+[expected,...wrongs]);
 if(why.length<100)throw Error("Motivazione incompleta: "+f.key+" "+j);
 const answer=(j*7+f.key.length)%4,options=[...wrongs];
 options.splice(answer,0,expected);
 bank.push({id:"rig-26-m-"+f.key+"-"+String(j+1).padStart(2,"0"),module:f.module,question:stem,options,answer,why,
  sourceUrl:src,verifiedAt:"2026-11-23",origin:"original",difficulty:"avanzato",family:"math-"+f.key,
  topicKey:"math-"+f.key,editorial:true,review:"Caso numerico con dati dichiarati; controllo algebrico e alternative distinte",
  audit:{family:f.key,inputs,result:correct}});
}
add("noireddito","estimo-calcoli",j=>{
 const monthly=650+43*j,vacancy=3+(j%5),expenses=1200+47*j,gross=monthly*12,value=gross*(1-vacancy/100)-expenses;
 return [`In un immobile locato, il canone mensile è ${E(monthly)}, gli sfitto/insoluti ipotizzati ammontano al ${vacancy}% dei canoni annui e le spese non recuperabili sono ${E(expenses)} annui. Quale NOI annuo deriva da queste assunzioni?`,
 value,[gross-expenses,gross*(1-vacancy/100),gross],x=>E(x,2),
 `I canoni annuali lordi valgono ${E(gross)}, dai quali si detraggono ${E(gross*vacancy/100,2)} di perdite ipotizzate e ${E(expenses)} di costi operativi. Il reddito netto normalizzato (NOI) è ${E(value,2)}, non il canone lordo.`,
 ABI,{monthly,vacancy,expenses}];
});
add("capitalizzazione","estimo-calcoli",j=>{
 const noi=9200+390*j,rate=4+(j%6)*0.5,v=noi/(rate/100);
 return [`Un bene produce NOI normalizzato di ${E(noi)} all'anno. Nel caso è motivato un saggio netto di capitalizzazione del ${n(rate,1)}%. Determina il valore con capitalizzazione diretta, arrotondato all'euro.`,
 Math.round(v),[Math.round(noi/((rate+1)/100)),Math.round(noi/((rate-.5)/100)),Math.round(noi*rate)],x=>E(x),
 `La stima diretta è NOI diviso saggio in forma decimale: ${E(noi)} / ${n(rate/100,3)} = ${E(v,2)}. La scelta del saggio resta una premessa espressa e non deriva automaticamente dal tasso nominale del mutuo.`,
 ABI,{noi,rate}];
});
add("saggioimplicito","estimo-calcoli",j=>{
 const value=200000+12500*j,rate=3.5+(j%7)*.5,noi=value*rate/100;
 return [`Un immobile presenta valore convenzionale ${E(value)} e reddito operativo netto annuo ${E(noi,2)}. Quale saggio netto annuo risulta implicitamente dal rapporto fra le due grandezze?`,
 rate,[rate+.5,rate-.5,rate+1.5],x=>P(x,1),
 `Il saggio cercato è NOI diviso valore, moltiplicato per cento: (${E(noi,2)} / ${E(value)}) × 100 = ${n(rate,1)}%. È un rapporto netto riferito alle ipotesi del caso, distinto dal rendimento lordo.`,
 ABI,{value,noi,rate}];
});
add("comparabilebox","estimo",j=>{
 const sold=198000+5100*j,box=11000+550*j,floor=4800+240*j,correct=sold-box+floor;
 return [`Una vendita comparabile rilevata per ${E(sold)} comprende un box migliore rispetto al soggetto di ${E(box)}, ma presenta un piano meno appetibile per ${E(floor)}. Con rettifiche coerenti e senza altri scostamenti, qual è il prezzo corretto?`,
 correct,[sold+box+floor,sold-box-floor,sold+box-floor],x=>E(x),
 `Un vantaggio del comparabile rispetto al soggetto richiede rettifica negativa (${E(box)}), mentre uno svantaggio del comparabile richiede rettifica positiva (${E(floor)}). Quindi ${E(sold)} − ${E(box)} + ${E(floor)} = ${E(correct)}.`,
 ABI,{sold,box,floor}];
});
add("comparabileterrazzo","estimo",j=>{
 const sold=168000+6400*j,terrace=6000+300*j,energy=4600+210*j,correct=sold-terrace+energy;
 return [`Prezzo di un comparabile ${E(sold)}: dispone di terrazzo migliore del soggetto per ${E(terrace)}, ma caratteristiche energetiche peggiori per ${E(energy)}. I differenziali sono stimati con dati omogenei. Qual è il prezzo aggiustato?`,
 correct,[sold+terrace+energy,sold-terrace-energy,sold+terrace-energy],x=>E(x),
 `La superiorità del comparabile per terrazzo va sottratta, mentre l'inferiorità energetica va aggiunta: ${E(sold)} − ${E(terrace)} + ${E(energy)} = ${E(correct)}. Le due rettifiche hanno segno opposto.`,
 ABI,{sold,terrace,energy}];
});
add("rendimentilordi","mercato",j=>{
 const value=180000+10000*j,gross=12000+480*j,expenses=1800+90*j,net=gross-expenses;
 const g=gross/value*100,r=net/value*100;
 const pair=(x,y)=>n(x,2)+"% lordo e "+n(y,2)+"% netto";
 return [`Prezzo ${E(value)}, canone annuo lordo ${E(gross)} e costi annui a carico del proprietario ${E(expenses)}. Quale coppia esprime rendimento lordo e netto sul prezzo, arrotondati a due decimali?`,
 0,[1,2,3],k=>[pair(g,r),pair(r,g),pair(g+1,r),pair(g,r+1)][k],
 `Il rendimento lordo è (${E(gross)} / ${E(value)})×100 = ${n(g,2)}%; il netto è (${E(net)} / ${E(value)})×100 = ${n(r,2)}%. Occorre usare il reddito al netto dei costi solo per il secondo indicatore.`,
 ABI,{value,gross,expenses}];
});
add("dcfdueperiodi","estimo-calcoli",j=>{
 const first=4500+310*j,terminal=152000+8100*j,rate=6+(j%5);
 const pv=first/(1+rate/100)+terminal/Math.pow(1+rate/100,2);
 return [`Un DCF prevede ${E(first)} a fine primo anno e ${E(terminal)} a fine secondo anno, compreso il valore finale di uscita. Con tasso di attualizzazione annuo del ${rate}%, quale valore attuale complessivo emerge, arrotondato all'euro?`,
 Math.round(pv),[Math.round((first+terminal)/(1+rate/100)),Math.round(first+terminal/Math.pow(1+rate/100,2)),Math.round(first+terminal)],x=>E(x),
 `I flussi devono essere scontati per il rispettivo orizzonte: ${E(first)}/(1+${n(rate/100,2)}) + ${E(terminal)}/(1+${n(rate/100,2)})² = ${E(pv,2)}. Sommare i flussi nominali non dà il valore attuale.`,
 IVS,{first,terminal,rate}];
});
add("residuostatico","estimo-calcoli",j=>{
 const revenue=2250000+82000*j,build=1400000+51000*j,fees=180000+7100*j,finance=90000+4200*j,profit=220000+8100*j;
 const correct=revenue-build-fees-finance-profit;
 return [`Per un progetto legalmente attuabile i ricavi stimati sono ${E(revenue)}; costruzione ${E(build)}, tecnici e oneri ${E(fees)}, finanza ${E(finance)} e utile/rischio del promotore ${E(profit)}. Quale residuo statico è disponibile per acquistare l'area, prima di ulteriori voci?`,
 correct,[revenue-build-fees-finance,revenue-build-fees-profit,revenue-build-finance-profit],x=>E(x),
 `Il residuo si calcola sottraendo tutte le componenti espresse: ${E(revenue)} − ${E(build)} − ${E(fees)} − ${E(finance)} − ${E(profit)} = ${E(correct)}. Il margine del promotore non può essere ignorato.`,
 IVS,{revenue,build,fees,finance,profit}];
});
add("residuoprezzi","estimo-calcoli",j=>{
 const revenue=1900000+73000*j,residual=320000+10200*j,drop=3+(j%5),value=residual-revenue*drop/100;
 return [`Un business plan indica ricavi di ${E(revenue)} e valore residuo iniziale dell'area pari a ${E(residual)}. I ricavi scendono del ${drop}% e i costi restano invariati. Quale residuo ricalcolato si ottiene, all'euro?`,
 Math.round(value),[Math.round(residual*(1-drop/100)),Math.round(residual+revenue*drop/100),Math.round(residual-revenue*drop/200)],x=>E(x),
 `La riduzione si applica ai ricavi, non al solo valore dell'area: ${E(revenue*drop/100,2)} di minori incassi riducono il residuo da ${E(residual)} a ${E(value,2)}. L'ipotesi mantiene invariati costi e profitto.`,
 IVS,{revenue,residual,drop}];
});
add("residuocostruzione","estimo-calcoli",j=>{
 const construction=1280000+44500*j,residual=420000+14500*j,overrun=4+(j%5),value=residual-construction*overrun/100;
 return [`L'analisi di sviluppo presenta residuo iniziale per l'area ${E(residual)}. Il solo costo di costruzione di ${E(construction)} aumenta del ${overrun}% e tutte le altre grandezze restano invariate. Qual è il residuo dopo il rincaro, all'euro?`,
 Math.round(value),[Math.round(residual*(1-overrun/100)),Math.round(residual-construction*overrun/200),Math.round(residual+construction*overrun/100)],x=>E(x),
 `L'aumento effettivo è ${E(construction*overrun/100,2)} sulla sola costruzione; il nuovo saldo è ${E(residual)} − ${E(construction*overrun/100,2)} = ${E(value,2)}. Applicare la percentuale al valore residuo è un errore di base.`,
 IVS,{construction,residual,overrun}];
});
add("superficiecommerciale","formule",j=>{
 const indoor=78+3*j,terrace=18+2*j,cellar=10+j,area=indoor+.3*terrace+.25*cellar;
 return [`Superficie principale ${indoor} m² al 100%, terrazzo ${terrace} m² ponderato al 30% e cantina ${cellar} m² ponderata al 25%, secondo le convenzioni espresse nel quesito. Quale superficie commerciale convenzionale si ottiene?`,
 area,[indoor+terrace+cellar,indoor+.25*terrace+.3*cellar,indoor+.5*terrace+.5*cellar],x=>S(x),
 `Le superfici accessorie sono ponderate separatamente: ${indoor} + 0,30×${terrace} + 0,25×${cellar} = ${n(area,2)} m². I coefficienti sono assunzioni del caso e non hanno valore universale per qualunque immobile.`,
 ABI,{indoor,terrace,cellar}];
});
add("ltvperizia","mutui",j=>{
 const appraisal=220000+10000*j,percentage=60+(j%7)*5,loan=appraisal*percentage/100,price=appraisal+26000+800*j;
 return [`La banca calcola il LTV sul valore periziato ${E(appraisal)}, mentre il prezzo pattuito è ${E(price)}. Il mutuo erogando è ${E(loan)}. Quale LTV risulta secondo il denominatore dichiarato?`,
 percentage,[loan/price*100,percentage+5,percentage-5],x=>P(x,2),
 `Il rapporto mutuo/valore stimato è (${E(loan)} / ${E(appraisal)})×100 = ${n(percentage,2)}%. Il mutuo/prezzo darebbe invece ${n(loan/price*100,2)}%; i due denominatori non sono intercambiabili.`,
 ABI,{appraisal,loan,price}];
});
add("dscr","mutui",j=>{
 const debt=12000+420*j,coverage=1.2+(j%7)*.1,noi=debt*coverage;
 return [`Un immobile presenta NOI annuo ${E(noi,2)} e servizio del debito annuo ${E(debt)}, capitale e interessi inclusi. Quale rapporto DSCR emerge arrotondato a due decimali?`,
 coverage,[coverage+.2,coverage-.2,1/coverage],x=>Q(x),
 `Il Debt Service Coverage Ratio è NOI diviso servizio annuo del debito: ${E(noi,2)} / ${E(debt)} = ${n(coverage,2)} volte. È una misura di copertura dei pagamenti e non coincide con il LTV.`,
 ABI,{debt,coverage,noi}];
});
add("grossmultiplier","mercato",j=>{
 const rent=10000+350*j,multiple=13+(j%9),price=rent*multiple;
 return [`Un immobile a reddito è stato venduto a ${E(price)} e produce canone lordo annuo stabilizzato di ${E(rent)}. Quale moltiplicatore lordo del reddito annuo (GIM) risulta dal rapporto indicato?`,
 multiple,[multiple+2,multiple-2,multiple+4],x=>n(x,1)+" volte il canone annuo",
 `Il GIM si ottiene dividendo il prezzo osservato per il canone annuo lordo: ${E(price)} / ${E(rent)} = ${n(multiple,1)}. Non è un tasso annuo né il tempo effettivo di recupero dei capitali al netto delle spese.`,
 ABI,{rent,price,multiple}];
});
add("tassosensibilita","estimo-calcoli",j=>{
 const noi=11000+530*j,rate=4+(j%6)*.5,later=rate+.5,original=noi/(rate/100),newValue=noi/(later/100),difference=original-newValue;
 return [`NOI annuo invariato ${E(noi)}. Il tasso di capitalizzazione passa dal ${n(rate,1)}% al ${n(later,1)}%. Quanto diminuisce il valore della capitalizzazione diretta, arrotondando all'euro?`,
 Math.round(difference),[Math.round(noi*(later-rate)/100),Math.round(newValue-original),Math.round(original*.005)],x=>E(x),
 `Il valore passa da ${E(original,2)} a ${E(newValue,2)} poiché un saggio più alto capitalizza lo stesso reddito in misura minore. La differenza positiva di valore è ${E(difference,2)}: non è la percentuale del reddito.`,
 ABI,{noi,rate,later}];
});
add("componentiimmobile","estimo",j=>{
 const area=88+2*j,unitPrice=1900+70*j,box=13500+610*j,value=area*unitPrice+box;
 return [`Nel procedimento per componenti si stimano ${area} m² residenziali a ${E(unitPrice)}/m² e un box distinto del valore di ${E(box)}, non già incluso nella superficie. Qual è il totale indicato dai dati?`,
 value,[area*unitPrice,area*unitPrice+2*box,(area+box)*unitPrice],x=>E(x),
 `La parte residenziale ammonta a ${E(area*unitPrice)}; aggiungendo la pertinenza non compresa nei metri quadrati si ottiene ${E(value)}. Conta la definizione delle componenti: il doppio conteggio del box falserebbe il totale.`,
 ABI,{area,unitPrice,box}];
});
add("terrenoalmetro","estimo",j=>{
 const area=2800+140*j,unit=45+3*j,residual=area*unit;
 return [`Un'area di ${n(area)} m² ha valore residuale convenzionale complessivo ${E(residual)}. Qual è il valore unitario per metro quadrato di superficie fondiaria, nel solo scenario indicato?`,
 unit,[unit+10,unit-10,unit*2],x=>E(x)+"/m²",
 `Il valore unitario del suolo è il valore residuo complessivo diviso la superficie fondiaria: ${E(residual)} / ${n(area)} m² = ${E(unit)}/m². Non coincide con il prezzo unitario delle unità finite.`,
 IVS,{area,residual,unit}];
});
add("cashoncash","mutui",j=>{
 const equity=90000+4500*j,available=8100+440*j,rate=available/equity*100;
 return [`In un investimento finanziato, il capitale proprio effettivamente impiegato è ${E(equity)} e il flusso di cassa annuale dopo il servizio del debito è ${E(available)}. Qual è il cash-on-cash return annuo, a due decimali?`,
 rate,[rate+1,rate-1,available/(equity+available)*100],x=>P(x,2),
 `Il rendimento dei mezzi propri si ottiene da flusso annuo sul capitale proprio: (${E(available)} / ${E(equity)})×100 = ${n(rate,2)}%. Non si usa il valore totale dell'immobile quale denominatore del cash-on-cash.`,
 ABI,{equity,available}];
});
add("ammortamentofrancese","mutui",j=>{
 const principal=120000+6800*j,annual=2.8+(j%6)*.25,years=15+(j%3)*5,period=annual/1200,months=years*12;
 const payment=principal*period/(1-Math.pow(1+period,-months));
 return [`Mutuo a rate mensili costanti secondo il piano francese: capitale ${E(principal)}, TAN fisso ${n(annual,2)}%, durata ${years} anni e assenza di spese accessorie. Qual è la rata mensile, approssimata ai centesimi?`,
 Math.round(payment*100)/100,[Math.round(payment*1.10*100)/100,Math.round(payment*.9*100)/100,Math.round(principal/months*100)/100],x=>E(x,2)+" al mese",
 `Il tasso periodale è ${n(annual/12,4)}% e le rate sono ${months}. La rata P×i/[1−(1+i)^(−N)] risulta ${E(payment,2)} al mese. La divisione del capitale per i mesi non include il costo degli interessi.`,
 ABI,{principal,annual,years}];
});
add("quotacapitale","mutui",j=>{
 const principal=150000+6500*j,annual=3+(j%6)*.25,payment=950+31*j,interest=principal*annual/1200,capital=payment-interest;
 return [`Prima di una rata mensile il capitale residuo è ${E(principal)}, il TAN è ${n(annual,2)}% e la rata complessiva del mese è ${E(payment)}. Quanto ammonta la quota capitale, calcolando gli interessi del periodo sul residuo?`,
 capital,[interest,payment+interest,payment-principal*(annual+1)/1200],x=>E(x,2),
 `Gli interessi del mese sono ${E(principal)}×${n(annual,2)}%/12 = ${E(interest,2)}. La quota capitale è ${E(payment)}−${E(interest,2)} = ${E(capital,2)}. Quota capitale e quota interessi sommano alla rata.`,
 ABI,{principal,annual,payment}];
});
add("riconciliazione","estimo",j=>{
 const a=185000+4300*j,b=190000+4900*j,c=197000+5400*j,value=.5*a+.3*b+.2*c;
 return [`Tre comparabili, già uniformati, indicano ${E(a)}, ${E(b)} e ${E(c)}. La relazione attribuisce pesi 50%, 30% e 20% nell'ordine. Quale media ponderata risulta, all'euro?`,
 Math.round(value),[Math.round((a+b+c)/3),Math.round(.2*a+.3*b+.5*c),Math.round(.3*a+.2*b+.5*c)],x=>E(x),
 `La stima ponderata è 0,50×${E(a)} + 0,30×${E(b)} + 0,20×${E(c)} = ${E(value)}. Una media semplice o con i pesi assegnati a comparabili diversi risponde ad altre ipotesi.`,
 ABI,{a,b,c}];
});
add("costodeprezzato","tecnica-costruttiva",j=>{
 const land=85000+3500*j,rebuild=340000+12000*j,dep=10+(j%6)*5,value=land+rebuild*(1-dep/100);
 return [`Nel procedimento del costo si assumono valore dell'area ${E(land)}, ricostruzione a nuovo del fabbricato ${E(rebuild)} e deprezzamento del solo fabbricato pari al ${dep}%. Senza altri costi, qual è il valore risultante all'euro?`,
 Math.round(value),[Math.round((land+rebuild)*(1-dep/100)),land+rebuild,Math.round(land+rebuild*dep/100)],x=>E(x),
 `La componente edilizia è ridotta di ${dep}%, mentre il valore dell'area resta quello dichiarato: ${E(rebuild)}×(1−${n(dep/100,2)}) + ${E(land)} = ${E(value)}. Svalutare anche il suolo introdurrebbe una premessa diversa.`,
 ABI,{land,rebuild,dep}];
});
for(const f of families){
 for(let j=0;j<18;j++)put(f,j,f.fn(j));
}
window.PATENTINO_RIGOR_MATH=bank;
window.PATENTINO_RIGOR_MATH_FAMILIES=families.map(f=>f.key);
})();
