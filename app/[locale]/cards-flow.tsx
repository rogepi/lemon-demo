'use client'

import { motion } from 'framer-motion'

import { BaseCard, BlogCard, ImageLinkCard, InfoCard } from '@/components/cards'
import { ThemeSwitch } from '@/components/theme-switch'
import { useMediaQuery } from '@/hooks'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const BLOG_MOCK_DATA = {
  title: `How it started vs. how it's going`,
  content: `A short personal history os it relates to design and development, 
    and how i've found value in the cross-section between both disciplines.`,
  date: 'May 5, 2021',
  link: '#',
}

export function CardsFlow() {
  const isSmallScreen = useMediaQuery('(min-width: 768px)')

  return (
    <motion.ul
      className="grid aspect-square grid-flow-row grid-cols-2 content-start gap-3 
      md:grid-cols-4 md:grid-rows-4"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.li key={1} variants={item} className="col-span-2">
        <InfoCard
          src="/memojis.png"
          alt="author"
          content={
            <span className="text-xs">
              {`I'm `}
              <strong className="font-mono text-2xl font-extrabold">Nev</strong>
              {`. a developer and product designer from china. I'm interested in React, Node, Product Design, Jamstack and Music`}
            </span>
          }
        />
      </motion.li>
      <motion.li key={2} variants={item} className="aspect-square">
        <ImageLinkCard
          src="/map.png"
          alt="map"
          link="https://www.google.com.hk/maps/@22.2780347,114.1805711,17z?entry=ttu"
        />
      </motion.li>
      <motion.li key={3} variants={item} className="row-span-2">
        <ImageLinkCard
          link="https://pixabay.com/zh/illustrations/sunrise-sunset-desert-wall-art-7326601/"
          src="/image1.jpg"
          alt="image1"
        />
      </motion.li>
      <motion.li key={4} variants={item} className="aspect-square">
        <InfoCard
          src="/spotify_logo.svg"
          alt="Spotify"
          content={
            <div>
              <div className="text-xs text-teal-500">Offline, Last played</div>

              <div className="text-xs font-extrabold">{`I Dont't Belong`}</div>
              <div className="text-xs font-semibold">{`Fontaines D.C.`}</div>
            </div>
          }
        />
      </motion.li>
      <motion.li key={5} variants={item} className="aspect-square">
        <ImageLinkCard
          src="/twitter_logo.jpg"
          alt="twitter"
          link="https://pixabay.com/zh/photos/desert-wall-art-minimalist-poster-7449016/"
        />
      </motion.li>
      <motion.li key={6} variants={item} className="row-span-2">
        <ImageLinkCard
          src="/image2.jpg"
          alt="image2"
          link="https://pixabay.com/zh/photos/desert-wall-art-minimalist-poster-7449016/"
        />
      </motion.li>

      {isSmallScreen ? (
        <>
          <motion.li key={7} variants={item} className="col-span-2">
            <BlogCard blog={BLOG_MOCK_DATA} />
          </motion.li>
          <motion.li key={8} variants={item}>
            <BaseCard className="flex aspect-square h-full flex-col items-center justify-center">
              <ThemeSwitch />
            </BaseCard>
          </motion.li>
        </>
      ) : (
        <>
          <motion.li key={8} variants={item}>
            <BaseCard className="flex aspect-square h-full flex-col items-center justify-center">
              <ThemeSwitch />
            </BaseCard>
          </motion.li>
          <motion.li key={7} variants={item} className="col-span-2">
            <BlogCard blog={BLOG_MOCK_DATA} />
          </motion.li>
        </>
      )}

      <motion.li
        key={9}
        variants={item}
        className="col-span-2 aspect-[2] md:aspect-auto"
      >
        <ImageLinkCard
          src="/image3.jpg"
          alt="image3"
          link="https://pixabay.com/zh/photos/sunflowers-background-7261516/"
        />
      </motion.li>
      <motion.li key={10} variants={item} className="col-span-2">
        <BaseCard>
          <div className="flex h-full flex-col justify-between">
            <div>
              <header className="text-xl font-extrabold">{`Shall I Keep you in the loop?`}</header>
              <div>{`Content includes orticies, early access to products, and ongoing learnings.`}</div>
            </div>
            <div className="text-sm text-gray-500">Email address</div>
          </div>
        </BaseCard>
      </motion.li>
    </motion.ul>
  )
}
