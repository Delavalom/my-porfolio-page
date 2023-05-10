import { defineDocumentType, makeSource } from '@contentlayer/source-files'

export const Intro = defineDocumentType(() => ({
  name: 'Intro',
  filePathPattern: `intro/intro.mdx`,
  isSingleton: true,
  contentType: "mdx",
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (intro) => `/intro/${intro._raw.flattenedPath}` },
  },
}))

export const Projects = defineDocumentType(() => ({
  name: 'Projects',
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (project) => `/projects/${project._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: './src/content', documentTypes: [Intro, Projects] })