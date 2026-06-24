// Wrap every <table> in <div class="table-scroll"> so a wide table scrolls within its
// own box on small screens instead of forcing the whole page to scroll sideways.
// Dependency-free hast walk (no unist-util-visit needed).
export function rehypeTableWrap() {
  return (tree) => {
    const walk = (node) => {
      if (!node || !Array.isArray(node.children)) return;
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (child && child.type === 'element' && child.tagName === 'table') {
          node.children[i] = {
            type: 'element',
            tagName: 'div',
            properties: { className: ['table-scroll'] },
            children: [child],
          };
          walk(child); // descend into the (now wrapped) table for any nested tables
        } else {
          walk(child);
        }
      }
    };
    walk(tree);
    return tree;
  };
}
