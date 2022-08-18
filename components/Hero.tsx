import Image from 'next/image'
import Link from 'next/link'
import { Element } from 'react-scroll'
import { socialLinks } from 'lib/links'
import { scrollTo } from 'lib/helpers'
import GitHub from '@/icons/GitHub'
import LinkedIn from '@/icons/LinkedIn'
import Twitter from '@/icons/Twitter'

export default function AboutMe() {
  return (
    <Element name="home">
      <section className="px-base flex flex-col items-center justify-center gap-8 pt-5 pb-32 text-center">
        <div className="relative h-64 w-64 md:h-80 md:w-80">
          <Image
            className="rounded-full object-cover"
            src="/images/mebw.webp"
            alt="Hero Image"
            layout="fill"
            sizes="(min-width: 75em) 20vw,
            90vw"
            priority
          />
        </div>
        <h1 className="h1 min-h-[200px] md:min-h-[150px] lg:min-h-[180px] 2xl:min-h-[225px]">
          Hi! 👋 My name is Sean. I build websites with modern tools &
          technologies!
        </h1>
        <div className="flex min-h-[40px] justify-center space-x-8">
          {socialLinks.map((link) => (
            <Link href={link.href} key={link.name}>
              <a
                className={link.classes}
                aria-label={link.name}
                target="_blank"
                rel="noreferrer"
              >
                {link.icon === 'GitHub' && (
                  <GitHub className="h-8 w-8 text-green-500 transition-all duration-300 ease-linear hover:text-primary dark:text-green-200 dark:hover:text-primary" />
                )}
                {link.icon === 'Twitter' && (
                  <Twitter className="h-8 w-8 text-blue-500 transition-all duration-200 ease-linear hover:text-primary dark:text-secondary dark:hover:text-white" />
                )}
                {link.icon === 'LinkedIn' && (
                  <LinkedIn className="h-8 w-8 text-primary transition-all duration-700 ease-linear hover:text-secondary dark:text-blue-200 dark:hover:text-white" />
                )}
              </a>
            </Link>
          ))}
        </div>
        <div className="flex justify-center  gap-4 lg:flex-row lg:gap-10">
          <button
            onClick={() => scrollTo('about', 1600, -40)}
            className="button bg-white text-dark dark:bg-light"
          >
            More About Me
          </button>
          <button
            onClick={() => scrollTo('projects', null, -70)}
            className="button"
          >
            See my work
          </button>
        </div>
      </section>
    </Element>
  )
}
