import pluginWebc from "@11ty/eleventy-plugin-webc"
import  {RenderPlugin} from "@11ty/eleventy";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginWebc, {
    components: "_components/**/*.webc",
  });
  eleventyConfig.addPlugin(RenderPlugin);

    eleventyConfig.addCollection("posts", function (collectionApi) {
    const result = collectionApi.getFilteredByGlob(["posts/*.md", "src/posts/*.webc"]);
    return result;
  });


  return {
    dir: {
      input: "./", // source files live here
      output: "_site", // output (no change)
    },
  };
};
