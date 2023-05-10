import { defineDocumentType, makeSource } from '@contentlayer/source-files'

export const Intro = defineDocumentType(() => ({
  name: 'Intro',
  filePathPattern: `intro.mdx`,
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

export default makeSource({ contentDirPath: './src/content/intro', documentTypes: [Intro] })