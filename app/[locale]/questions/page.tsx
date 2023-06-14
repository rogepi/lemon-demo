import { getMessages } from '@/lib/i18n/server'

import { QuestionsFlow } from './questions-flow'

export default async function QuestionsPage({
  params: { locale },
}: {
  params: { locale: LocaleType }
}) {
  const messages = await getMessages(locale)
  return (
    <>
      <h1 className="text-3xl font-semibold">{messages.Nav.question}</h1>
      <QuestionsFlow className="mt-10" questions={messages['Q&A']} />
    </>
  )
}
