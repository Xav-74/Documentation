/* =========================================================
   Documentation Xav-74 — script du thème (vanilla JS)
   ========================================================= */
(function () {
  'use strict';

  var d = document;
  var $ = function (s, c) { return (c || d).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || d).querySelectorAll(s)); };

  /* ---------- Utilitaires ---------- */
  function norm(s) {
    return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  var T = window.I18N || {};
  function tr(k, fb) { return T[k] || fb; }

  function esc(s) {
    return (s || '').replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  /* =========================================================
     1. Contenu : numérotation, ancres, tableaux, code, images
     ========================================================= */
  var prose = $('.prose');

  if (prose) {
    var numbering = d.body.dataset.numbering === 'true';
    var h1 = 0, h2 = 0;

    $$('h1, h2, h3', prose).forEach(function (h) {
      h.dataset.title = h.textContent.trim();
      if (!h.id) {
        h.id = norm(h.textContent).trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      }
      if (numbering && h.tagName === 'H1') { h1++; h2 = 0; }
      if (numbering && h.tagName === 'H2') { h2++; }
      if (numbering && (h.tagName === 'H1' || h.tagName === 'H2')) {
        var num = d.createElement('span');
        num.className = 'hnum';
        num.textContent = h.tagName === 'H1' ? h1 + '.' : h1 + '.' + h2;
        h.insertBefore(num, h.firstChild);
      }
      var a = d.createElement('a');
      a.className = 'anchor';
      a.href = '#' + h.id;
      a.setAttribute('aria-label', 'Lien vers cette section');
      a.textContent = '#';
      h.insertBefore(a, h.firstChild);
    });

    /* Changelog : badges de version */
    if (d.body.classList.contains('is-changelog')) {
      var MARQUEUR = /\s*[\[(]\s*([^\])]{1,24}?)\s*[\])]\s*$/;

      var famille = function (mot) {
        var m = norm(mot);
        if (m === 's' || /stab|estav/.test(m)) return 'stable';
        if (m === 'b' || /beta|test|preview/.test(m) || m === 'rc') return 'beta';
        return 'autre';
      };

      var poser = function (h, texte, classe) {
        var tag = d.createElement('span');
        tag.className = 'ver-tag ver-tag--' + classe;
        tag.textContent = texte;
        var apres = h.nextElementSibling;
        if (apres && apres.classList && apres.classList.contains('ver-tag')) {
          apres.insertAdjacentElement('afterend', tag);   // second badge à la suite
        } else {
          h.insertAdjacentElement('afterend', tag);
        }
      };

      var datees = $$('h1', prose).filter(function (h) {
        return /^\s*\d{4}[-/.]\d{2}/.test(h.dataset.title || '');
      });

      // 1er passage : on relève le marqueur de chaque titre daté et on repère
      // la stable la plus récente, même si des betas la précèdent.
      var releve = datees.map(function (h) {
        var m = (h.dataset.title || '').match(MARQUEUR);
        return m ? { h: h, mot: m[1].trim(), fam: famille(m[1].trim()) } : null;
      });
      var rangAJour = -1;
      for (var i = 0; i < releve.length; i++) {
        if (releve[i] && releve[i].fam === 'stable') { rangAJour = i; break; }
      }

      var marquee = false;
      releve.forEach(function (info, rang) {
        if (!info) return;
        var h = info.h;
        marquee = true;
        var mot = info.mot;
        var fam = info.fam;

        // le marqueur disparaît du titre affiché et du sommaire
        h.dataset.title = h.dataset.title.replace(MARQUEUR, '').trim();
        var textes = Array.prototype.filter.call(h.childNodes, function (n) { return n.nodeType === 3; });
        var dernier = textes[textes.length - 1];
        if (dernier) dernier.nodeValue = dernier.nodeValue.replace(MARQUEUR, '');

        // libellé : traduit pour [s] et [b], littéral sinon
        var libelle = fam === 'stable' ? tr('stable', 'stable')
                    : fam === 'beta'   ? tr('beta', 'beta')
                    : mot;

        // stable la plus récente du fichier : tout passe au vert, même si une
        // ou plusieurs betas plus récentes la précèdent.
        var aJour = (rang === rangAJour);
        var classe = aJour ? 'ajour' : fam;

        h.classList.add('is-' + classe);
        poser(h, libelle, classe);
        if (aJour) poser(h, tr('latest', 'dernière version'), 'ajour');
      });

      // aucun marqueur dans le fichier : ancien comportement
      if (!marquee && datees.length) {
        datees[0].classList.add('is-latest');
        poser(datees[0], tr('latest', 'dernière version'), 'latest');
      }
    }

    /* Tableaux : conteneur défilable */
    $$('table', prose).forEach(function (t) {
      if (t.parentNode.classList.contains('table-wrap')) return;
      var w = d.createElement('div');
      w.className = 'table-wrap';
      t.parentNode.insertBefore(w, t);
      w.appendChild(t);
    });

    /* Encarts : > **Tip** / **Note** / **Attention** ... */
    $$('blockquote', prose).forEach(function (b) {
      var first = b.querySelector('p strong');
      if (!first) return;
      var k = norm(first.textContent);
      if (/tip|astuce|conseil|consejo|note|info|hinweis|nota|dica|sugerencia|suggerimento/.test(k)) b.classList.add('callout-tip');
      else if (/attention|atencion|atencao|attenzione|warning|warnung|achtung|vorsicht|avertis|avvert|advertencia|prudence|precaucion|precaucao|aviso|cuidado|caution|disclaimer|haftungsausschluss|avviso|descargo|isencao/.test(k)) b.classList.add('callout-warn');
      else if (/important|danger|critique|risque|wichtig|importante|perigo|pericolo|peligro/.test(k)) b.classList.add('callout-danger');
    });

    /* Blocs de code : bouton copier */
    $$('pre', prose).forEach(function (pre) {
      var b = d.createElement('button');
      b.className = 'copybtn';
      b.type = 'button';
      b.textContent = tr('copy', 'Copier');
      b.addEventListener('click', function () {
        var txt = (pre.querySelector('code') || pre).innerText;
        navigator.clipboard.writeText(txt).then(function () {
          b.textContent = tr('copied', 'Copié !');
          setTimeout(function () { b.textContent = tr('copy', 'Copier'); }, 1600);
        });
      });
      pre.appendChild(b);
    });

    /* Images : agrandissement */
    var lb = $('#lightbox');
    if (lb) {
      $$('img', prose).forEach(function (img) {
        if (img.classList.contains('inline-img') || img.classList.contains('pluginLogo')) return;
        if (img.closest('td') || img.closest('a')) return;
        img.addEventListener('click', function () {
          $('img', lb).src = img.currentSrc || img.src;
          lb.classList.add('is-open');
        });
      });
      lb.addEventListener('click', function () { lb.classList.remove('is-open'); });
    }
  }

  /* =========================================================
     2. Sommaire + surlignage à la lecture
     ========================================================= */
  var tocEl = $('#toc');
  if (tocEl && prose) {
    var heads = $$('h1, h2', prose);
    if (heads.length < 2) {
      var block = tocEl.closest('.side-block');
      if (block) block.style.display = 'none';
    } else {
      heads.forEach(function (h) {
        var li = d.createElement('li');
        var a = d.createElement('a');
        a.href = '#' + h.id;
        a.className = h.tagName === 'H2' ? 'lvl-2' : 'lvl-1';
        var nEl = h.querySelector('.hnum');
        a.textContent = (nEl ? nEl.textContent + ' ' : '') + (h.dataset.title || h.textContent).trim();
        li.appendChild(a);
        tocEl.appendChild(li);
      });

      var links = {};
      $$('a', tocEl).forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
      var visible = new Set();

      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) visible.add(e.target.id); else visible.delete(e.target.id);
        });
        var ids = heads.map(function (h) { return h.id; }).filter(function (id) { return visible.has(id); });
        if (!ids.length) return;
        Object.keys(links).forEach(function (id) { links[id].classList.remove('is-active'); });
        if (links[ids[0]]) {
          links[ids[0]].classList.add('is-active');
          var a = links[ids[0]];
          var box = tocEl.parentNode.getBoundingClientRect ? tocEl.closest('.sidebar') : null;
          if (box && (a.offsetTop < box.scrollTop || a.offsetTop > box.scrollTop + box.clientHeight - 60)) {
            box.scrollTo({ top: a.offsetTop - box.clientHeight / 2, behavior: 'smooth' });
          }
        }
      }, { rootMargin: '-70px 0px -70% 0px', threshold: 0 });

      heads.forEach(function (h) { io.observe(h); });
    }
  }

  /* =========================================================
     3. Menu mobile
     ========================================================= */
  var burger = $('#burger'), sidebar = $('.sidebar'), scrim = $('#scrim');
  function closeNav() {
    if (sidebar) sidebar.classList.remove('is-open');
    if (scrim) scrim.classList.remove('is-open');
  }
  if (burger && sidebar) {
    burger.addEventListener('click', function () {
      sidebar.classList.toggle('is-open');
      if (scrim) scrim.classList.toggle('is-open');
    });
  }
  if (scrim) scrim.addEventListener('click', closeNav);
  if (sidebar) {
    sidebar.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeNav();
    });
  }

  /* =========================================================
     4. Retour en haut
     ========================================================= */
  var top = $('#totop');
  if (top) {
    top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    var onScroll = function () { top.classList.toggle('is-visible', window.scrollY > 600); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* =========================================================
     5. Recherche plein texte (index construit à la volée)
     ========================================================= */
  var overlay = $('#search-overlay');
  var input = $('#search-input');
  var results = $('#search-results');
  var openBtn = $('#search-open');
  var pages = null, index = null, loading = false, cursor = -1;

  function openSearch() {
    if (!overlay) return;
    overlay.classList.add('is-open');
    input.value = '';
    render([], '');
    input.focus();
    buildIndex();
  }
  function closeSearch() { if (overlay) overlay.classList.remove('is-open'); }

  function buildIndex() {
    if (index || loading || !window.SEARCH_PAGES) return;
    loading = true;
    pages = window.SEARCH_PAGES;
    results.innerHTML = '<li class="hint">' + esc(tr('indexing', 'Indexation en cours…')) + '</li>';
    Promise.all(pages.map(function (p) {
      return fetch(p.url).then(function (r) { return r.text(); }).then(function (html) {
        var doc = new DOMParser().parseFromString(html, 'text/html');
        var root = doc.querySelector('.prose');
        if (!root) return [];
        var out = [], current = null;
        Array.prototype.forEach.call(root.children, function (node) {
          if (/^H[123]$/.test(node.tagName)) {
            if (current) out.push(current);
            current = {
              page: p.title, plugin: p.plugin, kind: p.kind,
              section: (node.dataset.title || node.textContent).replace(/^#/, '').trim(),
              url: p.url + (node.id ? '#' + node.id : ''), text: ''
            };
          } else if (current) {
            current.text += ' ' + node.textContent;
          }
        });
        if (current) out.push(current);
        if (!out.length) out.push({ page: p.title, plugin: p.plugin, kind: p.kind, section: p.title, url: p.url, text: root.textContent });
        return out;
      }).catch(function () { return []; });
    })).then(function (all) {
      index = [].concat.apply([], all);
      index.forEach(function (e) {
        e.text = e.text.replace(/\s+/g, ' ').trim();
        e._h = norm(e.page + ' ' + e.section + ' ' + e.text);
      });
      loading = false;
      search(input.value);
    });
  }

  function search(q) {
    var nq = norm(q).trim();
    if (!nq) { render([], ''); return; }
    if (!index) { results.innerHTML = '<li class="hint">' + esc(tr('indexing', 'Indexation en cours…')) + '</li>'; return; }
    var terms = nq.split(/\s+/);
    var hits = [];
    index.forEach(function (e) {
      var score = 0, ok = true;
      terms.forEach(function (t) {
        var inSec = norm(e.section).indexOf(t) >= 0;
        var inPage = norm(e.page).indexOf(t) >= 0;
        var pos = e._h.indexOf(t);
        if (pos < 0) { ok = false; return; }
        score += inSec ? 40 : 0;
        score += inPage ? 12 : 0;
        score += 6;
      });
      if (ok) hits.push({ e: e, score: score });
    });
    hits.sort(function (a, b) { return b.score - a.score; });
    render(hits.slice(0, 24), terms[0]);
  }

  function snippet(text, term) {
    var i = norm(text).indexOf(term);
    if (i < 0) return esc(text.slice(0, 150));
    var start = Math.max(0, i - 55);
    var frag = (start > 0 ? '…' : '') + text.slice(start, start + 190);
    var re = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
    return esc(frag).replace(re, '<mark>$1</mark>');
  }

  function render(hits, term) {
    cursor = -1;
    if (!hits.length) {
      results.innerHTML = '<li class="hint">' + esc(input.value.trim()
        ? tr('none', 'Aucun résultat.')
        : tr('hint', 'Tapez pour rechercher dans toute la documentation.')) + '</li>';
      return;
    }
    results.innerHTML = hits.map(function (h) {
      var e = h.e;
      return '<li><a href="' + e.url + '">' +
        '<div class="r-path">' + esc(e.plugin || tr('documentation', 'Documentation')) + (e.kind ? ' · ' + esc(e.kind) : '') + '</div>' +
        '<div class="r-title">' + esc(e.section) + '</div>' +
        '<div class="r-snip">' + snippet(e.text, term) + '</div></a></li>';
    }).join('');
  }

  if (openBtn) openBtn.addEventListener('click', openSearch);
  if (overlay) {
    overlay.addEventListener('click', function (e) { if (e.target === overlay) closeSearch(); });
    input.addEventListener('input', function () { search(input.value); });
    input.addEventListener('keydown', function (e) {
      var items = $$('a', results);
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (!items.length) return;
        items.forEach(function (i) { i.classList.remove('is-cursor'); });
        cursor = e.key === 'ArrowDown'
          ? (cursor + 1) % items.length
          : (cursor - 1 + items.length) % items.length;
        items[cursor].classList.add('is-cursor');
        items[cursor].scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'Enter') {
        var t = cursor >= 0 ? items[cursor] : items[0];
        if (t) { e.preventDefault(); window.location.href = t.href; }
      }
    });
  }

  /* Sélecteur de langue : refermer au clic extérieur */
  var langmenu = $('.langmenu');
  if (langmenu) {
    d.addEventListener('click', function (e) {
      if (!langmenu.contains(e.target)) langmenu.removeAttribute('open');
    });
  }

  d.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch(); }
    else if (e.key === '/' && d.activeElement === d.body) { e.preventDefault(); openSearch(); }
    else if (e.key === 'Escape') {
      closeSearch();
      var lb2 = $('#lightbox'); if (lb2) lb2.classList.remove('is-open');
      closeNav();
      if (langmenu) langmenu.removeAttribute('open');
    }
  });

  /* =========================================================
     7. Thème clair / sombre
     ========================================================= */
  (function () {
    var bouton = $('#theme-toggle');
    if (!bouton) return;
    var racine = d.documentElement;

    var appliquer = function (mode) {
      if (mode === 'light') racine.setAttribute('data-theme', 'light');
      else racine.removeAttribute('data-theme');
      bouton.setAttribute('aria-pressed', mode === 'light' ? 'true' : 'false');
      var meta = $('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', mode === 'light' ? '#f5f8fc' : '#0c1118');
    };

    bouton.addEventListener('click', function () {
      var mode = racine.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      try { localStorage.setItem('theme', mode); } catch (e) {}
      appliquer(mode);
    });

    appliquer(racine.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
  })();

  /* =========================================================
     8. Bandeau : la mise en avant suit la section consultée
     ========================================================= */
  (function () {
    var liens = $$('.hero-actions a[href^="#"]');
    if (liens.length < 2) return;

    var cibles = liens.map(function (a) { return d.getElementById(a.getAttribute('href').slice(1)); })
                      .filter(Boolean);
    if (!cibles.length) return;

    var mettreEnAvant = function (id) {
      liens.forEach(function (a) {
        a.classList.toggle('btn--primary', a.getAttribute('href') === '#' + id);
      });
    };

    liens.forEach(function (a) {
      a.addEventListener('click', function () { mettreEnAvant(a.getAttribute('href').slice(1)); });
    });

    var suivre = function () {
      // repère juste sous la barre du haut : une section devient courante dès qu'elle y arrive
      var repere = window.scrollY + 120;
      var courant = cibles[0].id;
      cibles.forEach(function (c) {
        if (c.getBoundingClientRect().top + window.scrollY <= repere) courant = c.id;
      });
      // page trop courte pour amener la dernière section en haut : on la considère atteinte
      var bas = window.innerHeight + window.scrollY >= (d.documentElement.scrollHeight - 4);
      if (bas) courant = cibles[cibles.length - 1].id;
      mettreEnAvant(courant);
    };
    window.addEventListener('scroll', suivre, { passive: true });
    suivre();
  })();

})();
