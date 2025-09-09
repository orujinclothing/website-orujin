// stackbit.config.ts
import { defineStackbitConfig, SiteMapEntry } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  nodeVersion: "16",

  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],

      models: [
        {
          name: "Product",
          type: "page",  // page so visual editor works
          urlPath: "/products/{slug}",
          filePath: "content/products/{slug}.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "price", type: "number" },
            { name: "category", type: "enum", options: ["T-Shirts", "Hoodies", "Accessories"] },
            { name: "inStock", type: "boolean" },
            { name: "images", type: "list", items: { type: "image" } },
            { name: "body", type: "markdown" }
          ]
        },
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}",
          filePath: "content/pages/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "body", type: "markdown" }
          ]
        }
      ],
    })
  ],

  siteMap: ({ documents, models }) => {
    const pageModels = models.filter((m) => m.type === "page");
    return documents
      .filter((d) => pageModels.some((m) => m.name === d.modelName))
      .map((doc) => {
        return {
          stableId: doc.id,
          urlPath: doc.urlPath ?? `/${doc.modelName.toLowerCase()}/${doc.id}`,
          document: doc,
          isHomePage: doc.modelName === "Page" && doc.id === "home"
        };
      }) as SiteMapEntry[];
  }
});
