import { useTranslations } from 'next-intl'

import { CardsFlow } from '@/components/cards-flow'

export default function RootPage() {
  const t = useTranslations('Index')
  return (
    <div>
      <h1>{t('title')}</h1>
      <CardsFlow />
    </div>
  )
}
