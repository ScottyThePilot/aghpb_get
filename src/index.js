'use strict';
const githubTree = require('github-trees');

const opts = { recursive: true };

const link1 = 'laynH/Anime-Girls-Holding-Programming-Books';
const link2 = 'layn/Anime-Girls-Holding-Programming-Books';

function getStub(user) {
  return `https://raw.githubusercontent.com/${user}/Anime-Girls-Holding-Programming-Books/master`;
}

async function getTree() {
  try {
    const { tree } = await githubTree(link1, opts);
    return { tree, stub: getStub('laynH') };
  } catch (e) {
    const { tree } = await githubTree(link2, opts);
    return { tree, stub: getStub('layn') }
  }
}

async function fetchList() {
  const { tree, stub } = await getTree();

  let list = [];
  for (const { path, type } of tree) {
    if (type !== 'blob') continue;

    const parts = path.match(/([^/]+)\/([^/]+)/);
    if (parts === null) continue;

    const lang = encodeURIComponent(parts[1]);
    const file = encodeURIComponent(parts[2]);

    list.push(`${stub}/${lang}/${file}`);
  }

  return list;
}

module.exports = (fetchList);
