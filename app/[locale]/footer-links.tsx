import Image from 'next/image'
import Link from 'next/link'

import { LocaleSwitch } from '@/components/locale-switch'
import IconSpotify from '@/public/spotify_logo.svg'
import IconTwitter from '@/public/twitter_logo.jpg'

export function FooterLinks() {
  const ICON_LINK_LIST = [
    {
      icon: IconTwitter,
      altText: 'twitter',
      link: 'https://twitter.com',
    },
    {
      icon: IconSpotify,
      altText: 'spotify',
      link: 'https://spotify.com',
    },
  ]
  const TEXT_LINK_LIST = [
    {
      title: 'Product',
      links: [
        { text: 'Download', link: '#' },
        {
          text: 'Nitro',
          link: '#',
        },
        { text: 'Status', link: '#' },
      ],
    },
    {
      title: 'Product',
      links: [
        { text: 'Download', link: '#' },
        {
          text: 'Nitro',
          link: '#',
        },
        { text: 'Status', link: '#' },
      ],
    },
    {
      title: 'Product',
      links: [
        { text: 'Download', link: '#' },
        {
          text: 'Nitro',
          link: '#',
        },
        { text: 'Status', link: '#' },
      ],
    },
    {
      title: 'Product',
      links: [
        { text: 'Download', link: '#' },
        {
          text: 'Nitro',
          link: '#',
        },
        { text: 'Status', link: '#' },
      ],
    },
  ]
  return (
    <div className="w-full md:grid md:grid-cols-2 lg:grid-cols-3">
      {/* Left */}
      <div className="space-y-5">
        <LocaleSwitch />
        <div className="flex items-center gap-3">
          {ICON_LINK_LIST.map((item, index) => (
            <Link href={item.link} key={index} target="_blank">
              <Image
                src={item.icon}
                alt={item.altText}
                width={30}
                height={30}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="grid grid-cols-2 gap-3 lg:col-span-2 lg:grid-cols-4">
        {TEXT_LINK_LIST.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <ul className="mt-3 flex flex-col">
              {item.links.map((l, index) => (
                <li
                  className="text-sm text-gray-500 hover:text-gray-400"
                  key={index}
                >
                  <Link href={l.link} target="_blank">
                    {l.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
