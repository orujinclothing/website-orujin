import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["src"],

      models: [
        {
          name: "SiteConfig",
          type: "data", // not a page, just site-wide config
          filePath: "src/config.json",
          fields: [
            { name: "siteTitle", type: "string" },
            { name: "tagline", type: "string" },
            { name: "logo", type: "image" }
          ]
        },
        {
          name: "Blog",
          type: "page",
          urlPath: "/blog/{slug}",
          filePath: "src/helpers/blog.json",
          fields: [
            { name: "title", type: "string" },
            { name: "slug", type: "string" },
            { name: "content", type: "markdown" }
          ]
        },
        {
          name: "Product",
          type: "page",
          urlPath: "/products/{slug}",
          filePath: "src/helpers/product.json",
          fields: [
            { name: "title", type: "string" },
            { name: "slug", type: "string" },
            { name: "price", type: "number" },
            { name: "image", type: "image" }
          ]
        }
      ],
    })
  ]
});
