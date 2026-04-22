export default {
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'titlePart1', title: 'Title Part 1 (e.g., Full)', type: 'string' },
        { name: 'titlePart2', title: 'Title Part 2 (e.g., Circle)', type: 'string' },
        { name: 'subtitle', title: 'Subtitle', type: 'text' },
      ]
    },
    {
      name: 'founder',
      title: 'Founder (Dr. Prerna Kumar)',
      type: 'object',
      fields: [
        { name: 'quote', title: 'Quote', type: 'text' },
        { name: 'bio', title: 'Biography', type: 'array', of: [{ type: 'block' }] },
        { name: 'image', title: 'Profile Image', type: 'image', options: { hotspot: true } },
      ]
    },
    {
        name: 'philosophy',
        title: 'Inverted Tree Philosophy',
        type: 'object',
        fields: [
            { name: 'hinduismText', title: 'Hinduism Metaphor Text', type: 'text' },
            { name: 'ayurvedaText', title: 'Ayurveda Metaphor Text', type: 'text' },
            { name: 'rootSoulText', title: 'The Root (Soul) Text', type: 'text' },
            { name: 'branchSymptomText', title: 'The Branch (Symptom) Text', type: 'text' },
        ]
    }
  ]
}
