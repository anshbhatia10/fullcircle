export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'category', title: 'Category (e.g., Foundation, Intervention)', type: 'string' },
    { name: 'description', title: 'Main Description', type: 'text' },
    {
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }]
    },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }
  ]
}
