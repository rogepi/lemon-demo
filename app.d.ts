type RootParams = { locale: 'en' | 'zh-CN' }

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type Messages = typeof import('@/content/dictionaries/en.json')
// eslint-disable-next-line @typescript-eslint/no-empty-interface
declare interface IntlMessages extends Messages {}
