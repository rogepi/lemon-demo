import { getMessages } from '@/lib/i18n/server'

export default async function QuestionsPage({
  params: { locale },
}: {
  params: { locale: LocaleType }
}) {
  const messages = await getMessages(locale)
  return (
    <div>
      <h1 className="text-3xl font-semibold">{messages.Nav.question}</h1>
    </div>
  )
}
