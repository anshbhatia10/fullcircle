export default {
  name: 'doctor',
  title: 'Doctor',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'role', title: 'Role/Title', type: 'string' },
    { name: 'specialization', title: 'Specialization', type: 'string' },
    { name: 'quote', title: 'Quote', type: 'text' },
    { name: 'bio', title: 'Full Biography', type: 'array', of: [{ type: 'block' }] },
    { name: 'image', title: 'Profile Image', type: 'image', options: { hotspot: true } },
    { name: 'licenseInfo', title: 'License/Certification Info', type: 'string' }
  ]
}
