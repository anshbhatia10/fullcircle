// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "global",
        label: "Global Settings",
        path: "content/global",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: "object",
            name: "navbar",
            label: "Navbar",
            fields: [
              { type: "string", name: "logoText", label: "Logo Text" },
              {
                type: "object",
                list: true,
                name: "navLinks",
                label: "Navigation Links",
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "path", label: "Path" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "footer",
            label: "Footer",
            fields: [
              { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "instagram", label: "Instagram URL" },
              { type: "string", name: "facebook", label: "Facebook URL" }
            ]
          }
        ]
      },
      {
        name: "home",
        label: "Home",
        path: "content",
        format: "json",
        match: {
          include: "home"
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false
          },
          router: () => "/"
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "titlePart1", label: "Title Part 1" },
              { type: "string", name: "titlePart2", label: "Title Part 2" },
              { type: "string", name: "subtitle", label: "Subtitle" },
              { type: "string", name: "video", label: "Video Path" }
            ]
          },
          {
            type: "object",
            name: "founder",
            label: "Founder Section",
            fields: [
              { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "bio", label: "Bio", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "philosophy",
            label: "Philosophy Section",
            fields: [
              { type: "string", name: "hinduismText", label: "Hinduism Text", ui: { component: "textarea" } },
              { type: "string", name: "ayurvedaText", label: "Ayurveda Text", ui: { component: "textarea" } },
              { type: "string", name: "rootSoulText", label: "Root Soul Text", ui: { component: "textarea" } },
              { type: "string", name: "branchSymptomText", label: "Branch Symptom Text", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            list: true,
            name: "individualCare",
            label: "Individual Care Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      {
        name: "doctors",
        label: "Doctors",
        path: "content/doctors",
        format: "json",
        fields: [
          { type: "string", name: "name", label: "Name" },
          { type: "string", name: "lastName", label: "Last Name" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
          { type: "string", list: true, name: "tags", label: "Tags" },
          { type: "image", name: "image", label: "Image" },
          { type: "string", name: "academicBio", label: "Academic Bio", ui: { component: "textarea" } },
          {
            type: "object",
            list: true,
            name: "excellence",
            label: "Academic Excellence",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" }
            ]
          },
          {
            type: "object",
            list: true,
            name: "expertise",
            label: "Areas of Expertise",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" }
            ]
          },
          { type: "string", list: true, name: "philosophy", label: "Philosophy Paragraphs", ui: { component: "textarea" } }
        ]
      },
      {
        name: "services",
        label: "Services",
        path: "content",
        format: "json",
        match: {
          include: "services"
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false
          },
          router: () => "/services"
        },
        fields: [
          {
            type: "object",
            list: true,
            name: "items",
            label: "Services List",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "category", label: "Category" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", list: true, name: "features", label: "Features" },
              { type: "image", name: "image", label: "Image" }
            ]
          }
        ]
      },
      {
        name: "screening",
        label: "Screening Page",
        path: "content/pages",
        format: "json",
        match: {
          include: "screening-circle"
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          { type: "string", name: "tagline", label: "Tagline" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
          {
            type: "object",
            name: "pathwayA",
            label: "Pathway A (USA)",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", list: true, name: "features", label: "Features" }
            ]
          },
          {
            type: "object",
            name: "pathwayB",
            label: "Pathway B (Ancient)",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", list: true, name: "features", label: "Features" }
            ]
          }
        ]
      },
      {
        name: "pcp",
        label: "PCP Page",
        path: "content/pages",
        format: "json",
        match: {
          include: "full-circle-pcp"
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          { type: "string", name: "tagline", label: "Tagline" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
          {
            type: "object",
            list: true,
            name: "features",
            label: "Features",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "icon", label: "Icon Name" }
            ]
          }
        ]
      },
      {
        name: "aesthetics",
        label: "Aesthetics Page",
        path: "content/pages",
        format: "json",
        match: {
          include: "aesthetic-circle"
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          { type: "string", name: "tagline", label: "Tagline" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
          {
            type: "object",
            list: true,
            name: "services",
            label: "Aesthetic Services",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Image" }
            ]
          }
        ]
      },
      {
        name: "pledge",
        label: "Pledge Page",
        path: "content/pages",
        format: "json",
        match: {
          include: "pledge"
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          { type: "string", name: "tagline", label: "Tagline" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          {
            type: "object",
            name: "pledges",
            label: "Pledge Items",
            fields: [
              { type: "string", name: "physical", label: "Physical Pledge", ui: { component: "textarea" } },
              { type: "string", name: "spiritual", label: "Spiritual Pledge", ui: { component: "textarea" } },
              { type: "string", name: "giving", label: "Giving Pledge", ui: { component: "textarea" } }
            ]
          },
          { type: "string", name: "registryUrl", label: "Official Registry URL" }
        ]
      },
      {
        name: "guidelines",
        label: "Health Guidelines Page",
        path: "content/pages",
        format: "json",
        match: {
          include: "health-guidelines"
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          { type: "string", name: "tagline", label: "Tagline" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } }
        ]
      },
      {
        name: "pages",
        label: "Pages",
        path: "content/pages",
        format: "json",
        match: {
          include: "{mission,partners,inverted-tree}"
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "object",
            list: true,
            name: "blocks",
            label: "Sections",
            templates: [
              {
                name: "hero",
                label: "Hero",
                fields: [
                  { type: "string", name: "tagline", label: "Tagline" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } }
                ]
              },
              {
                name: "contentSection",
                label: "Content Section",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "rich-text", name: "body", label: "Body" },
                  { type: "image", name: "image", label: "Image" }
                ]
              },
              {
                name: "grid",
                label: "Icon Grid",
                fields: [
                  {
                    type: "object",
                    list: true,
                    name: "items",
                    label: "Grid Items",
                    fields: [
                      { type: "string", name: "title", label: "Title" },
                      { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                      { type: "string", name: "icon", label: "Icon Name (Lucide)" }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
