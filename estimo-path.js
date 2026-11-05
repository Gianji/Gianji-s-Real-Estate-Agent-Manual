/* Percorso di Estimo: nove moduli già presenti nel programma Immobiliare,
 * qui riuniti in un indice progressivo e facilmente raggiungibile. */
const ESTIMO_PATH = [
  ['estimo', 'Fondamenti', 'Valore, prezzo e principi di stima'],
  ['estimo-calcoli', 'Calcoli estimativi', 'Redditi, saggi e percentuali'],
  ['imm-superfici', 'Superfici e consistenze', 'Coefficienti e ragguagli'],
  ['imm-market2', 'Stima comparativa', 'Comparabili e rettifiche MCA'],
  ['imm-estimo-approfondito', 'Metodi di valutazione', 'Confronto, reddito, costo e relazione'],
  ['imm-estimo-speciale', 'Estimo speciale', 'Diritti reali, trasformazione ed espropri'],
  ['imm-estimo-legale3', 'Estimo legale', 'Indennità, servitù, danni e usufrutto'],
  ['agrario', 'Estimo agrario', 'Valore dei terreni e mercato rurale'],
  ['imm-rurale2', 'Stima dei fondi rustici', 'Frutti pendenti e miglioramenti fondiari']
];

function renderEstimoPath() {
  const entries = ESTIMO_PATH.map(([id, title, desc]) => ({
    module: MODULES.find(m => m.id === id), title, desc
  })).filter(item => item.module && sectorOf(item.module) === 'immobiliare');
  const lessons = entries.reduce((sum, item) => sum + item.module.lessons.length, 0);
  return `<section class="estimo-path" aria-label="Percorso Estimo per l'esame">
    <div class="estimo-path-top">
      <div>
        <span class="estimo-path-eyebrow">Immobiliare · Materia fondamentale per l’esame</span>
        <h2>ESTIMO. Il percorso completo di studio.</h2>
        <p>Dai principi della valutazione immobiliare ai calcoli, dal metodo comparativo alla capitalizzazione dei redditi, fino a estimo legale, terreni e fondi rustici. Segui i moduli nell’ordine e completa i relativi mini-quiz.</p>
        <div class="estimo-count">${entries.length} moduli · ${lessons} lezioni · Schemi, esempi e mini-quiz</div>
      </div>
      <button class="btn estimo-cta" data-open-module="estimo">Inizia dall’Estimo →</button>
    </div>
    <div class="estimo-topic-list">${entries.map((item, i) => `<button class="estimo-topic" data-open-module="${item.module.id}" aria-label="Apri il modulo di Estimo: ${item.title}">
      <span>${String(i + 1).padStart(2, '0')}</span><div><strong>${item.title}</strong><small>${item.desc} · ${item.module.lessons.length} lezioni</small></div>
    </button>`).join('')}</div>
    <div class="estimo-path-note">Per l’esame studia anche <b>superfici commerciali e ragguagliate, saggi e formule, MCA, valori di trasformazione, espropriazioni e servitù</b>: non limitarti alle definizioni.</div>
  </section>`;
}
