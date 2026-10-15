export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  // Newest first
  eleventyConfig.addCollection("updates", (api) =>
    api.getFilteredByGlob("src/updates/*.md").sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addFilter("readableDate", (d) =>
    new Date(d).toLocaleDateString("en-US", {
      year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
    })
  );
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString().slice(0, 10));
  eleventyConfig.addFilter("head", (arr, n) => arr.slice(0, n));
  // Wraps one phrase of a heading in a marker highlight: {{ headline | mark(phrase) | safe }}
  const esc = (t) => String(t ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  eleventyConfig.addFilter("mark", (text, phrase) =>
    phrase && String(text).includes(phrase)
      ? esc(text).replace(esc(phrase), `<span class="mark">${esc(phrase)}</span>`)
      : esc(text)
  );
  eleventyConfig.addFilter("money", (n) => Number(n || 0).toLocaleString("en-US"));

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    pathPrefix: process.env.PATH_PREFIX || "/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
