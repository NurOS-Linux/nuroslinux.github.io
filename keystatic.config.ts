import { config, fields, collection } from '@keystatic/core';

const postSchema = {
  title: fields.slug({ name: { label: 'Title / Заголовок' } }),
  description: fields.text({ label: 'Description / Описание', multiline: true }),
  publishedAt: fields.date({
    label: 'Published at / Дата',
    defaultValue: { kind: 'today' },
  }),
  author: fields.text({ label: 'Author / Автор', defaultValue: 'NurOS Team' }),
  tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags / Теги' }),
  content: fields.markdoc({ label: 'Content / Содержание' }),
};

export default config({
  storage: { kind: 'local' },
  ui: { brand: { name: 'NurOS CMS' } },
  collections: {
    postsEn: collection({
      label: '📝 Posts — English',
      slugField: 'title',
      path: 'src/content/posts-en/*',
      format: { contentField: 'content' },
      schema: postSchema,
    }),
    postsRu: collection({
      label: '📝 Посты — Русский',
      slugField: 'title',
      path: 'src/content/posts-ru/*',
      format: { contentField: 'content' },
      schema: postSchema,
    }),
    postsKz: collection({
      label: '📝 Жазбалар — Қазақша',
      slugField: 'title',
      path: 'src/content/posts-kz/*',
      format: { contentField: 'content' },
      schema: postSchema,
    }),
  },
});
