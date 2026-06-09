module.exports = {
  layout: "layouts/post.njk",
  eleventyComputed: {
    permalink: (data) => (data.permalink ? data.permalink : `${data.page.filePathStem}.html`),
    app: (data) => data.app || data.page.filePathStem.split("/")[2],
  },
};
