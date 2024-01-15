import { graph, config } from '@grafbase/sdk'

const g = graph.Standalone()

const User = g.extend('user', {
  name : g.string().length({ min : 2, max : 20 }),
  email : g.string().unique(),
  avatar : g.url(),
  description : g.string().optional(),
  githubUrl : g.url().optional(),
  linkedInUrl : g.url().optional(),
  projects : g.relation(() => project)
})

const project = g.extend('project', { 
  title: g.string().length({ min: 3 }),
  description: g.string(), 
  image: g.url(),
  liveSiteUrl: g.url(), 
  githubUrl: g.url(), 
  category: g.string().search(),
  createdBy: g.relation(() => User),
})

export default config({
  graph: g,
  auth: {
    rules: (rules) => {
      rules.public()
    },
  },
})
