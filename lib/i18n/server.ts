export async function getMessages({ locale }: RootParams) {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const { default: messages } = await import(
    `@/content/dictionaries/${locale}.json`
  )

  return messages as IntlMessages
}
