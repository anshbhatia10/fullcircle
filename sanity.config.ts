import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './studio/schemas'

export default defineConfig({
  name: 'default',
  title: 'Full Circle Clinic Studio',

  projectId: '4oa2a2gd',
  dataset: 'production',

  basePath: '/studio', // Matches the route in App.tsx

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
