// tina/config.ts
import { defineConfig } from "tinacms";
var branch = "main";
var clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID || process.env.TINA_CLIENT_ID || process.env.VITE_TINA_CLIENT_ID || "";
var token = process.env.TINA_TOKEN || process.env.NEXT_PUBLIC_TINA_TOKEN || "";
var config_default = defineConfig({
  branch,
  clientId,
  // Get this from tina.io
  token,
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
        ui: {
          router: ({ document }) => `/dr-${document._sys.filename}`
        },
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
          { type: "string", list: true, name: "philosophy", label: "Philosophy Paragraphs", ui: { component: "textarea" } },
          {
            type: "object",
            name: "ui",
            label: "Page UI Labels",
            fields: [
              { type: "string", name: "consultationButtonLabel", label: "Consultation Button Label" },
              { type: "string", name: "consultationButtonUrl", label: "Consultation Button URL/Path" },
              { type: "string", name: "heroBadgeLabel", label: "Hero Badge Label" },
              { type: "string", name: "heroBadgeText", label: "Hero Badge Text" },
              { type: "string", name: "journeyHeading", label: "Journey Heading" },
              { type: "string", name: "expertiseHeading", label: "Expertise Heading" },
              { type: "string", name: "philosophyBadge", label: "Philosophy Badge Label" },
              { type: "string", name: "philosophyHeading", label: "Philosophy Heading" },
              { type: "string", name: "bridgingHeading", label: "Bridging Heading" },
              { type: "string", name: "legacyHeading", label: "Legacy Heading" },
              { type: "string", name: "visionHeading", label: "Vision Heading" },
              { type: "string", name: "visionQuote", label: "Vision Quote", ui: { component: "textarea" } },
              { type: "string", name: "ctaLabel", label: "CTA Label" },
              {
                type: "object",
                list: true,
                name: "stats",
                label: "Stats",
                fields: [
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" }
                ]
              },
              { type: "string", list: true, name: "philosophyPillars", label: "Philosophy Pillars" }
            ]
          }
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
            name: "header",
            label: "Header",
            fields: [
              { type: "string", name: "tagline", label: "Tagline" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } }
            ]
          },
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
          },
          router: () => "/screening-circle"
        },
        fields: [
          { type: "string", name: "tagline", label: "Tagline" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "pathwayALabel", label: "Pathway A Label" },
          { type: "string", name: "pathwayATag", label: "Pathway A Tag" },
          { type: "string", name: "pathwayBLabel", label: "Pathway B Label" },
          { type: "string", name: "pathwayBTag", label: "Pathway B Tag" },
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
          },
          {
            type: "object",
            name: "quiz",
            label: "Quiz",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "resetLabel", label: "Reset Button Label" },
              { type: "string", name: "incompleteText", label: "Incomplete State Text" },
              { type: "string", name: "recommendationLabel", label: "Recommendation Label" },
              { type: "string", name: "ctaLabel", label: "Result CTA Label" },
              { type: "string", name: "ctaPath", label: "Result CTA Path" },
              {
                type: "object",
                name: "defaultResult",
                label: "Default Result",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "usaResult",
                label: "USA Result",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "ancientResult",
                label: "Ancient Result",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                list: true,
                name: "questions",
                label: "Questions",
                fields: [
                  { type: "string", name: "prompt", label: "Prompt", ui: { component: "textarea" } },
                  { type: "string", name: "a", label: "Option A Text", ui: { component: "textarea" } },
                  { type: "string", name: "b", label: "Option B Text", ui: { component: "textarea" } },
                  { type: "string", name: "aLabel", label: "Option A Label" },
                  { type: "string", name: "bLabel", label: "Option B Label" }
                ]
              }
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
          },
          router: () => "/full-circle-pcp"
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
          },
          router: () => "/aesthetic-circle"
        },
        fields: [
          { type: "string", name: "tagline", label: "Tagline" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "assessmentLabel", label: "Assessment Label" },
          {
            type: "object",
            list: true,
            name: "assessmentHighlights",
            label: "Assessment Highlights",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "synergyCard",
            label: "Synergy Card",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "scienceLabel", label: "Science Label" },
              { type: "string", name: "scienceTitle", label: "Science Title" },
              { type: "string", name: "natureLabel", label: "Nature Label" },
              { type: "string", name: "natureTitle", label: "Nature Title" }
            ]
          },
          {
            type: "object",
            name: "scienceSection",
            label: "Science Section",
            fields: [
              { type: "string", name: "tagline", label: "Tagline" },
              { type: "string", name: "title", label: "Title" },
              {
                type: "object",
                list: true,
                name: "items",
                label: "Items",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "natureSection",
            label: "Nature Section",
            fields: [
              { type: "string", name: "tagline", label: "Tagline" },
              { type: "string", name: "title", label: "Title" },
              {
                type: "object",
                list: true,
                name: "items",
                label: "Items",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "packageDeal",
            label: "Package Deal",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
              { type: "string", name: "bundleLabel", label: "Bundle Label" },
              { type: "string", name: "bundleDescription", label: "Bundle Description", ui: { component: "textarea" } },
              { type: "string", name: "primaryCtaLabel", label: "Primary CTA Label" },
              { type: "string", name: "primaryCtaPath", label: "Primary CTA Path" },
              { type: "string", name: "secondaryCtaLabel", label: "Secondary CTA Label" },
              { type: "string", name: "secondaryCtaPath", label: "Secondary CTA Path" }
            ]
          },
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
          },
          router: () => "/pledge"
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
          {
            type: "object",
            name: "signBox",
            label: "Sign Box",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle" },
              { type: "string", name: "submitLabel", label: "Submit Label" },
              { type: "string", name: "incompleteAlert", label: "Incomplete Alert", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "giftLabels",
            label: "Gift Labels",
            fields: [
              { type: "string", name: "physicalTitle", label: "Physical Gift Title" },
              { type: "string", name: "spiritualTitle", label: "Spiritual Gift Title" },
              { type: "string", name: "givingTitle", label: "Giving Gift Title" }
            ]
          },
          {
            type: "object",
            name: "successCard",
            label: "Success Card",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle" },
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "officialRegistryLabel", label: "Official Registry Label" },
              { type: "string", name: "reviewLabel", label: "Review Label" }
            ]
          },
          {
            type: "object",
            list: true,
            name: "impactCards",
            label: "Impact Cards",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "boolean", name: "dark", label: "Dark Card" }
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
          },
          router: () => "/guidelines"
        },
        fields: [
          { type: "string", name: "tagline", label: "Tagline" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } }
        ]
      },
      {
        name: "appointment",
        label: "Appointment Page",
        path: "content/pages",
        format: "json",
        match: {
          include: "appointment"
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false
          },
          router: () => "/appointment"
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
              { type: "string", name: "clinicalText", label: "Clinical Line" },
              { type: "string", name: "spiritualText", label: "Spiritual Line" },
              { type: "string", name: "aestheticText", label: "Aesthetic Line" }
            ]
          },
          {
            type: "object",
            name: "contact",
            label: "Contact Panel",
            fields: [
              { type: "string", name: "headingHours", label: "Hours Heading" },
              { type: "string", name: "hours", label: "Hours" },
              { type: "string", name: "specialHoursTitle", label: "Special Hours Heading" },
              { type: "string", name: "specialHours", label: "Special Hours" },
              { type: "string", name: "locationHeading", label: "Location Heading" },
              { type: "string", name: "location", label: "Location" },
              { type: "string", name: "whatsappNumber", label: "WhatsApp Number (country code + number)" }
            ]
          },
          {
            type: "object",
            name: "form",
            label: "Form Labels",
            fields: [
              { type: "string", name: "serviceLabel", label: "Service Label" },
              { type: "string", name: "timeLabel", label: "Time Label" },
              { type: "string", name: "submitLabel", label: "Submit Button Label" },
              { type: "string", name: "weekdayOnlyError", label: "Weekend Error", ui: { component: "textarea" } },
              { type: "string", name: "wednesdayOnlyError", label: "Wednesday-only Error", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            list: true,
            name: "services",
            label: "Services",
            fields: [
              { type: "string", name: "name", label: "Service Name" },
              { type: "boolean", name: "wednesdayOnly", label: "Wednesday-only Service" }
            ]
          },
          {
            type: "string",
            list: true,
            name: "timeSlots",
            label: "Time Slots"
          }
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
          },
          {
            type: "object",
            name: "cta",
            label: "Bottom CTA",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
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
