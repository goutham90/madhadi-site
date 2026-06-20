/* madhadi.com site search — dependency-free, loads /search-index.json once. */
window.MSearch = (function () {
  var data = null, loading = null;
  function load() {
    if (data) return Promise.resolve(data);
    if (!loading) loading = fetch('/search-index.json').then(function (r) { return r.json(); }).then(function (d) { data = d; return d; });
    return loading;
  }
  function tokenize(s) { return ((s || '').toLowerCase().match(/[a-z0-9]+/g)) || []; }
  function score(item, qt) {
    var T = (item.t || '').toLowerCase(), D = (item.d || '').toLowerCase(), H = (item.h || '').toLowerCase();
    var tags = (item.tags || []).join(' ').toLowerCase(), P = ((item.pn || '') + ' ' + (item.p || '')).toLowerCase();
    var titleWords = T.split(/\s+/);
    var s = 0, i;
    for (i = 0; i < qt.length; i++) {
      var q = qt[i]; if (!q) continue;
      if (T.indexOf(q) !== -1) s += 6;
      if (titleWords.indexOf(q) !== -1) s += 4;
      if (tags.indexOf(q) !== -1) s += 4;
      if (H.indexOf(q) !== -1) s += 2;
      if (D.indexOf(q) !== -1) s += 2;
      if (P.indexOf(q) !== -1) s += 1;
    }
    var phrase = qt.join(' ');
    if (phrase && T.indexOf(phrase) !== -1) s += 6;
    if (phrase && H.indexOf(phrase) !== -1) s += 3;
    return s;
  }
  function query(str, limit) {
    return load().then(function (items) {
      var qt = tokenize(str);
      if (!qt.length) return [];
      var scored = [];
      for (var i = 0; i < items.length; i++) {
        var sc = score(items[i], qt);
        if (sc > 0) scored.push({ it: items[i], s: sc });
      }
      scored.sort(function (a, b) { return b.s - a.s || a.it.t.localeCompare(b.it.t); });
      return scored.slice(0, limit || 20).map(function (x) { return x.it; });
    });
  }
  return { load: load, query: query };
})();
