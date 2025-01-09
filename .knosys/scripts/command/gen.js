const { resolve: resolvePath } = require('path');
const { existsSync } = require('fs');
const { pick, omit } = require('@ntks/toolbox');

const {
  resolveRootPath,
  resolvePathFromParams,
  readData, saveData, readEntity, normalizeFrontMatter,
  readDirDeeply,
  resolveSiteSrcPath,
  sortByDate,
  ensureDirExists,
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

      posts.push({
        ...pick(entity, ['date', 'categories', 'tags', 'series']),
        ...data,
        content: content.trim(),
        slug,
      });
    }
  });

  return posts;
}

function generateSiteData(posts) {
  if (posts.length === 0) {
    return;
  }

  const siteSrcPath = resolveSiteSrcPath('default');
  const postDistPath = resolvePath(siteSrcPath, 'source/_posts');

  const resolvedData = {
    items: posts.reduce((p, c) => ({ ...p, [c.slug]: c }), {}),
    sequence: sortByDate(posts).map(({ slug }) => slug),
  };

  ensureDirExists(postDistPath, true);

  resolvedData.sequence.forEach(slug => {
    const { title, description, content, ...others } = resolvedData.items[slug];
    const frontMatter = { title };

    if (description) {
      frontMatter.description = description;
    }

    saveData(resolvePath(postDistPath, `${slug}.md`), content, { ...frontMatter, ...omit(others, ['slug']) });
  });
}

module.exports = {
  execute: (dataSource = process.env.DATA_SOURCE_ROOT) => {
    if (!dataSource) {
      return;
    }

    const srcPath = resolvePath(resolveRootPath(), dataSource);

    if (!existsSync(srcPath)) {
      return;
    }

    generateSiteData(resolvePosts(srcPath));
  },
};
