export default {
  name: 'jobs',
  type: 'document',
  title: 'Jobs',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'startDate',
      type: 'datetime',
      title: 'Start Date',
    },
    {
      name: 'endDate',
      type: 'datetime',
      title: 'end Date',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    },
  ],
};
