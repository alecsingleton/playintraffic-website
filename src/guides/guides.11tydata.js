module.exports = {
  layout: "layouts/guide.njk",
  eleventyComputed: {
    permalink: (data) => (data.permalink ? data.permalink : `${data.page.filePathStem}.html`),
  },
};
