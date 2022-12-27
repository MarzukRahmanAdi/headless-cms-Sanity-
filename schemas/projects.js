export default {
    name: 'project',
    type: 'document',
      title: 'project',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'Desc',
        type: 'string',
        title: 'desc'
      },
      {
        title: 'Poster',
        name: 'poster',
        type: 'image',
      }
    ]
  }