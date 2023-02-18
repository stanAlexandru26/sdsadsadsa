import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Despre noi',
      href: '/despre',
    },
    {
      text: 'Servicii',
      links: [
        {
          text: 'SSM',
          href: getPermalink('/servicii/ssm'),
        },
        {
          text: 'PSI-SU',
          href: getPermalink('/servicii/psi'),
        },
        {
          text: 'Evaluari de risc',
          href: getPermalink('/servicii/evaluari-risc'),
        },
      ],
    },
    {
      text: 'Preturi',
      href: getPermalink('/preturi'),
    },

    {
      text: 'Blog',
      href: getBlogPermalink('/blog'),
    },
  ],
  actions: [{ type: 'primary', text: 'Contact', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Link-uri utile',
      links: [
        { text: 'ITM Cluj', href: '#' },
        { text: 'ITM Bistrita', href: '#' },
        { text: 'ITM Baia Mare', href: '#' },
        { text: 'Inspectia Muncii', href: '#' },
      ],
    },
    {
      title: 'Servicii',
      links: [
        { text: 'PSI-SU', href: '#' },
        { text: 'SSM', href: '#' },
        { text: 'Evaluari de risc', href: '#' },
      ],
    },
    {
      title: 'Parteneri',
      links: [
        { text: 'Medicina Muncii', href: '#' },
        { text: 'Pram', href: '#' },
        { text: 'Cursuri de prim ajutor', href: '#' },
        { text: 'Cursuri de ssm', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Despre', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Cariere', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Termeni si conditii', href: getPermalink('/terms') },
    { text: 'GDPR', href: getPermalink('/privacy') },
    { text: 'Cookie', href: getPermalink('/cookies') },
  ],
};
