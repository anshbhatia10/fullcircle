import { defineConfig } from "tinacms";

// Your hosting provider will pass these as environment variables.
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "home",
        label: "Home",
        path: "content",
        format: "json",
        match: {
          include: "home",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          router: () => "/",
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
            ],
          },
          {
            type: "object",
            name: "founder",
            label: "Founder Section",
            fields: [
              { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "bio", label: "Bio", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "philosophy",
            label: "Philosophy Section",
            fields: [
              { type: "string", name: "hinduismText", label: "Hinduism Text", ui: { component: "textarea" } },
              { type: "string", name: "ayurvedaText", label: "Ayurveda Text", ui: { component: "textarea" } },
              { type: "string", name: "rootSoulText", label: "Root Soul Text", ui: { component: "textarea" } },
              { type: "string", name: "branchSymptomText", label: "Branch Symptom Text", ui: { component: "textarea" } },
            ],
          },
        ],
      },
      {
        name: "services",
        label: "Services",
        path: "content",
        format: "json",
        match: {
          include: "services",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          router: () => "/services",
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
              { type: "image", name: "image", label: "Image" },
            ],
          },
        ],
      },
    ],
  },
});
