// Add a stable id to every heading so the article "On this page" table of contents can
// link to sections. Dependency-free; slug logic matches slugify() used in ArticleLayout.
function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-+|-+$)/g, '');
}
function textOf(node) {
  if (node.type === 'text' || node.type === 'inlineCode') return node.value || '';
  if (node.children) return node.children.map(textOf).join('');
  return '';
}
export function remarkHeadingIds() {
  return (tree) => {
    const seen = {};
    for (const node of tree.children || []) {
      if (node.type !== 'heading') continue;
      let id = slugify(textOf(node));
      if (!id) continue;
      if (seen[id]) { seen[id] += 1; id = `${id}-${seen[id]}`; } else { seen[id] = 1; }
      node.data = node.data || {};
      node.data.hProperties = node.data.hProperties || {};
      node.data.hProperties.id = id;
    }
  };
}
