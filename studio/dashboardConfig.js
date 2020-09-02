export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f4fcd1c3b31b30ce1107ff0',
                  title: 'Sanity Studio',
                  name: 'nsfs-sanity-site-studio',
                  apiId: 'fcb6a718-5871-435b-83b7-e1efd2a43a35'
                },
                {
                  buildHookId: '5f4fcd1c49c0c60fd6ba87f2',
                  title: 'Landing pages Website',
                  name: 'nsfs-sanity-site',
                  apiId: 'a4988d72-54f6-4b83-813e-efec87dfe140'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/NoellyB76/nsfs-sanity-site',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nsfs-sanity-site.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
