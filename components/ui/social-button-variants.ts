import { tv } from '../../utils/tv';

export const socialButtonVariants = tv({
  slots: {
    root: [
      'relative inline-flex h-10 items-center justify-center gap-3.5 whitespace-nowrap rounded-10 px-4 text-label-sm outline-none',
      'transition duration-200 ease-out',
      'focus:outline-none',
    ],
    icon: 'relative z-10 -mx-1.5 size-5 shrink-0',
  },
  variants: {
    brand: {
      apple: {},
      twitter: {},
      google: {},
      facebook: {},
      linkedin: {},
      github: {},
      dropbox: {},
    },
    mode: {
      filled: {
        root: [
          'text-static-white',
          'before:pointer-events-none before:absolute before:inset-0 before:rounded-10 before:opacity-0 before:transition before:duration-200 before:ease-out',
          'hover:before:opacity-100',
          'focus-visible:shadow-button-important-focus',
        ],
      },
      stroke: {
        root: [
          'bg-bg-white-0 text-text-strong-950 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200',
          'hover:bg-bg-weak-50 hover:shadow-none hover:ring-transparent',
          'focus-visible:shadow-button-important-focus focus-visible:ring-stroke-strong-950',
        ],
      },
    },
  },
  compoundVariants: [
    {
      brand: 'apple',
      mode: 'filled',
      class: {
        root: [
          'bg-static-black',
          'before:bg-white-alpha-16',
        ],
      },
    },
    {
      brand: 'twitter',
      mode: 'filled',
      class: {
        root: [
          'bg-static-black',
          'before:bg-white-alpha-16',
        ],
      },
    },
    {
      brand: 'google',
      mode: 'filled',
      class: {
        root: [
          'bg-[#f14336]',
          'before:bg-static-black/[.16]',
        ],
      },
    },
    {
      brand: 'facebook',
      mode: 'filled',
      class: {
        root: [
          'bg-[#1977f3]',
          'before:bg-static-black/[.16]',
        ],
      },
    },
    {
      brand: 'linkedin',
      mode: 'filled',
      class: {
        root: [
          'bg-[#0077b5]',
          'before:bg-static-black/[.16]',
        ],
      },
    },
    {
      brand: 'github',
      mode: 'filled',
      class: {
        root: [
          'bg-[#24292f]',
          'before:bg-white-alpha-16',
        ],
      },
    },
    {
      brand: 'dropbox',
      mode: 'filled',
      class: {
        root: [
          'bg-[#3984ff]',
          'before:bg-static-black/[.16]',
        ],
      },
    },
    {
      brand: 'apple',
      mode: 'stroke',
      class: {
        root: ['text-social-apple'],
      },
    },
    {
      brand: 'twitter',
      mode: 'stroke',
      class: {
        root: ['text-social-twitter'],
      },
    },
    {
      brand: 'github',
      mode: 'stroke',
      class: {
        root: ['text-social-github'],
      },
    },
  ],
  defaultVariants: {
    mode: 'filled',
  },
});
