const { resolve: resolvePath } = require('path');
const { existsSync } = require('fs');

const {
  resolveRootPath,
  resolvePathFromParams,
  readData, saveData, readEntity, normalizeFrontMatter,
  readDirDeeply,
  resolveSiteSrcPath,
  sortByDate,
  scanAndSortByAsc, ensureDirExists, getLocalDataRoot, getLocalDocRoot,
} = require('../helper');

function resolvePosts(srcPath) {
  const paramArr = ['year', 'month', 'slug'];
  const posts = [];

  readDirDeeply(srcPath, paramArr, {}, (slug, params) => {
    const postDirRelativePath = resolvePathFromParams(paramArr.join('/'), params);
    const postDirAbsolutePath = resolvePath(srcPath, postDirRelativePath);
    const postPath = resolvePath(postDirAbsolutePath, 'en.md');

    const entity = readEntity(postDirAbsolutePath);

    if (existsSync(postPath) && entity.published !== false) {
      const { data, content } = normalizeFrontMatter(readData(postPath));

      posts.push({ ...entity, ...data, content: content.trim(), slug, source: postDirAbsolutePath });
    }
  });

  return posts;
}

function generateSiteData(posts) {
  if (posts.length === 0) {
    return;
  }

  const siteSrcPath = resolveSiteSrcPath('default');
  const dataSrcPath = resolvePath(siteSrcPath, 'source/_data/knosys');
  const postDistPath = resolvePath(siteSrcPath, 'source/_posts');

  const resolvedData = {
    items: posts.reduce((p, c) => ({ ...p, [c.slug]: c }), {}),
    sequence: sortByDate(posts).map(({ slug }) => slug),
  };

  ensureDirExists(dataSrcPath, true);
  saveData(resolvePath(dataSrcPath, 'posts.yml'), resolvedData);

  ensureDirExists(postDistPath, true);

  resolvedData.sequence.forEach(slug => {
    const post = resolvedData.items[slug];

    saveData(resolvePath(postDistPath, `${slug}.md`), `---\ntitle: ${post.title}\n---\n\n${post.content}`);
  });
}

module.exports = {
  execute: dataSource => {
    const srcPath = resolvePath(resolveRootPath(), dataSource);

    if (!existsSync(srcPath)) {
      return;
    }

    generateSiteData(resolvePosts(srcPath));
  },
};
