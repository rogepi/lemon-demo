import { getMessages } from '@/lib/i18n/server'

export default async function AboutPage({
  params: { locale },
}: {
  params: RootParams
}) {
  const messages = await getMessages({ locale })

  return (
    <div>
      <h1 className="text-3xl font-semibold">{messages.Nav.about}</h1>
    </div>
  )
}
