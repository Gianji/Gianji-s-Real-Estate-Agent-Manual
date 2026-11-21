/* PATENTINO — Quiz provenienti esclusivamente dal sito esterno indicato dall'utente.
   Nessuna domanda di QuizAgenteImmobiliare.it viene copiata o ripubblicata qui.
   I vecchi generatori locali restano disabilitati nell'interfaccia; le domande aperte per l'orale restano separate. */
(function () {
  'use strict';
  const source = 'https://quizagenteimmobiliare.it';
  const externalViews = new Set(['domande', 'quiz', 'exam', 'review', 'flashcards', 'officialtest']);
  const groups = [
    {
      title: 'Simulazioni e batterie complete',
      items: [
        ['Simulatore d’esame finale', '/simulatore-esame/'],
        ['Diritto e mediazione · completo', '/diritto-e-mediazione/'],
        ['Estimo · completo', '/2-estimo/']
      ]
    },
    {
      title: 'Legislazione e diritto',
      items: [
        ['Legislazione sulla mediazione', '/1l-mediazione/'],
        ['Condominio', '/condominio/'],
        ['Capacità giuridica e capacità di agire', '/1b-capacita-giuridica/'],
        ['Diritto civile e diritti reali', '/1c-diritto-civile/'],
        ['Finanziamenti', '/1d-finanziamenti/'],
        ['Negozio giuridico e contratti', '/1e-negozio-giuridico/'],
        ['Obbligazioni e ipoteca', '/1f-obbligazioni-2/'],
        ['Società e fallimento', '/1g-fallimento/'],
        ['Titoli di credito', '/1h-titoli-credito/'],
        ['Tributi e imposte', '/1i-tributi/']
      ]
    },
    {
      title: 'Estimo',
      items: [
        ['Catasto', '/2a-catasto/'],
        ['Estimo legale', '/2b-estimo-legale/'],
        ['Estimo agrario', '/2c-estimo-agrario/'],
        ['Estimo generale', '/2d-estimo-generale/'],
        ['Stima di fabbricati e aree edificabili', '/2e-stima-fabbricati-e-aree-edificabili/']
      ]
    }
  ];

  function groupMarkup(group) {
    return '<section class="qsource-section"><h2>' + group.title + '</h2>' +
      '<div class="qsource-grid">' + group.items.map(function (item) {
        return '<a class="qsource-link" href="' + source + item[1] +
          '" target="_blank" rel="noopener noreferrer">' +
          '<strong>' + item[0] + '</strong><span>Apri il quiz originale ↗</span></a>';
      }).join('') + '</div></section>';
  }

  function pageMarkup(view) {
    const ordered = view === 'exam' ? [groups[0], groups[1], groups[2]] : groups;
    return '<div class="site2026-page qsource-page">' +
      '<div class="eyebrow">DOMANDE · QUIZ ORIGINALI</div>' +
      '<h1>Quiz per agente immobiliare</h1>' +
      '<p class="qsource-intro">Le esercitazioni a risposta multipla provengono esclusivamente da ' +
      '<a href="' + source + '/quiz/" target="_blank" rel="noopener noreferrer">QuizAgenteImmobiliare.it</a>. ' +
      'Scegli un argomento per svolgere il quiz sul sito originale.</p>' +
      '<p class="qsource-note">I quiz creati per questo manuale non sono più utilizzati. ' +
      'Le prove esterne possono richiedere un accesso o un abbonamento; ' +
      'risultati e correzioni sono gestiti dal sito originale.</p>' +
      ordered.map(groupMarkup).join('') +
      '<div class="qsource-footer"><a href="#/oral">Domande aperte per la prova orale</a>' +
      '<a href="#/milanobank">Tracce pubblicate dalla Camera di Commercio di Milano</a></div>' +
      '</div>';
  }

  // Tutte le vie di accesso ai vecchi quiz portano al catalogo della fonte scelta.
  const previousRender = render;
  render = function (scroll) {
    const route = currentRoute();
    if (!externalViews.has(route.view)) return previousRender(scroll);
    if (typeof navActive === 'function') navActive(route.view);
    const view = document.getElementById('view');
    if (!view) return;
    view.innerHTML = pageMarkup(route.view);
    document.title = 'Quiz originali — Patentino';
    if (scroll) window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Evita l'esecuzione accidentale di vecchi quiz dai pulsanti ancora presenti nelle lezioni.
  const blockedActions = new Set([
    'go-cremona-quiz', 'go-exam', 'go-errors', 'quiz-module',
    'start-quiz', 'start-streak-all', 'start-streak-filtered',
    'start-expert-quiz', 'start-milano-quiz', 'start-official-quiz',
    'start-error-quiz', 'quiz-next', 'quit-quiz', 'start-exam',
    'exam-next', 'exam-prev', 'exam-clear', 'submit-exam', 'reset-exam',
    'streak-next', 'streak-restart', 'quit-streak'
  ]);

  document.addEventListener('click', function (event) {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const action = target.closest('[data-action]');
    const quick = target.closest('[data-site2026-action]');
    const hiddenQuizControl = target.closest(
      '[data-mini-quiz], [data-quiz-size], [data-quiz-answer], ' +
      '[data-streak-answer], [data-exam-answer], [data-exam-jump]'
    );
    const shouldBlock = hiddenQuizControl ||
      (action && blockedActions.has(action.dataset.action)) ||
      (quick && ['flash', 'streak'].includes(quick.dataset.site2026Action));
    if (!shouldBlock) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    if (location.hash === '#/domande') render(true);
    else location.hash = '#/domande';
  }, true);

  // Copre anche i collegamenti diretti a una pagina quiz già salvata tra i preferiti.
  render(false);
})();
