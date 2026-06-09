module.exports = function (eleventyConfig) {
  [
    "src/css",
    "src/js",
    "src/img",
    "src/fonts",
    "src/screenshots",
    "src/CNAME",
    "src/robots.txt",
    "src/.nojekyll",
  ].forEach((p) => eleventyConfig.addPassthroughCopy(p));

  const locales = { en: "en-US", fr: "fr-FR", de: "de-DE" };

  eleventyConfig.addFilter("readableDate", (d, lang = "en") =>
    new Date(d).toLocaleDateString(locales[lang] || lang, {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    })
  );
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString().slice(0, 10));
  eleventyConfig.addFilter("rfc822", (d) => new Date(d).toUTCString());
  eleventyConfig.addFilter("absUrl", (path, base) => new URL(path, base).href);
  eleventyConfig.addFilter("byApp", (posts, key) => posts.filter((p) => p.data.app === key));
  eleventyConfig.addFilter("striptags", (s) =>
    String(s)
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
  );
  eleventyConfig.addFilter("appByKey", (apps, key) => apps.find((a) => a.key === key));
  eleventyConfig.addFilter("limit", (arr, n) => arr.slice(0, n));

  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/blog/*/*.html").sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addCollection("guides", (api) =>
    api.getFilteredByGlob("src/guides/*.html").sort((a, b) => b.date - a.date)
  );

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
