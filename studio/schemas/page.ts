export default {
  name: 'page',
  title: 'Page Content',
  type: 'document',
  fields: [
    { name: 'title', title: 'Page Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'heroText', title: 'Hero Text (Big Title)', type: 'string' },
    { name: 'subtitle', title: 'Subtitle (Italic quote)', type: 'text' },
    {
      name: 'content',
      title: 'Main Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } }
      ]
    }
  ]
}
