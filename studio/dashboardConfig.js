export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '61bb07d08d5b4345c6aaf96a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-auto-b-studio',
                  apiId: '4042f7a7-0980-4204-9cd7-623d8c0600f0'
                },
                {
                  buildHookId: '61bb07d02e761b477a159c6c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-auto-b',
                  apiId: '11cb8ef3-5e3b-48d2-baec-41a9bd2af2ee'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JulienDesmettre/sanity-gatsby-portfolio-auto-b',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-auto-b.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
