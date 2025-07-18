import { type Metadata } from 'next'
import Image from 'next/image'

import { SimpleLayout } from '@/components/simple-layout'
import logoRdkit from '@/public/logos/rdkit.png'
import logoAgenDevKit from '@/public/logos/agent-development-kit.png'
import logoAionics from '@/public/logos/aionics.png'
import logoMatSage from '@/public/logos/matsage.png'
import { Card } from '@/components/card'

const projects = [
  {
    name: 'MatSage AI',
    description:
      'An open-source, ai toolkit for materials science, enabling researchers to pull properties from research papers using GNNs.',
    link: { href: 'https://matsage.ai/', label: 'https://matsage.ai/' },
    logo: logoMatSage,
  },
  {
    name: 'Molecular Property Predictor',
    description:
      'Single-substance molecular property prediction models trained using state-of-the-art graph neural networks (GNNs).',
    link: { href: 'https://amppm.aionics.io/', label: 'amppm.aionics.io' },
    logo: logoAionics,
  },
  {
    name: 'RDKit',
    description:
      'A powerful cheminformatics and molecule rendering toolbelt for JavaScript, powered by RDKit.',
    link: { href: 'https://github.com/rdkit/rdkit-js', label: 'https://github.com/rdkit/rdkit-js' },
    logo: logoRdkit,
  },
  {
    name: 'Agent Development Kit',
    description:
      'An open-source, code-first Python toolkit for building, evaluating, and deploying sophisticated AI agents with flexibility and control.',
    link: { href: 'https://github.com/google/adk-python', label: 'https://github.com/google/adk-python' },
    logo: logoAgenDevKit,
  }
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Bridging software & science."
      intro="Projects I’m proud to have worked on—helping push forward research in material informatics."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-zinc-900/5 border border-zinc-700/50 bg-zinc-800 ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium transition group-hover:text-teal-500 text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
