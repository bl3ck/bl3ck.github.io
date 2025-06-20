import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/parent-containter'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/social-icons'
import portraitImage from '@/public/Tanue-Eugen-Bleck-Mbunwo-moon.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium transition text-zinc-200 hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square grayscale rotate-3 rounded-2xl object-cover bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">
            Engineering Tools that Accelerate Discovery
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-400">
            <p>
              I&apos;m a Software Engineer with a passion for building intelligent systems at the intersection of software, science, and material design. My focus lies in material informatics, where I collaborate with researchers from institutions like Stanford, Michigan, Berkeley, Verginia Tech and the University of Toronto to develop software that accelerates discovery through AI, graph neural networks (GNNs), and modern web technologies.
            </p>
            <p>
              At Aionics Inc, I&apos;ve led the development of platforms for molecular property prediction, scientific data tracking, and cloud-based analytics—turning complex research workflows into user-friendly, scalable products. I combine full-stack development with a deep understanding of infrastructure, security, and UI/UX to build reliable systems that serve real scientific needs.
            </p>
            <div>
              <h2>Core Values</h2>
              <ul className='list-disc pl-5 mt-2'>
                <li><b>Design with Purpose</b> – Every interface and experience should feel intuitive and intentional.</li>
                <li><b>Keep Learning </b> – The tech world moves fast, and I&apos;m always evolving with it.</li>
                <li><b>Open by Nature </b> – Good ideas should be shared, not siloed.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://www.linkedin.com/in/eugen-bleck/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink href="https://github.com/bl3ck" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://x.com/eugen_bleck" icon={XIcon} className="mt-4">
              Follow on X
            </SocialLink>
            <SocialLink href="https://www.instagram.com/eugen.bleck/" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="mailto:eugenbleck@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t pt-8 border-zinc-700/40"
            >
              eugenbleck@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
