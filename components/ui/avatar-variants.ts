import { tv } from '../../utils/tv';

export const avatarVariants = tv({
  slots: {
    root: [
      'relative flex shrink-0 items-center justify-center rounded-full',
      'select-none text-center uppercase',
    ],
    image: 'size-full rounded-full object-cover',
    indicator:
      'absolute flex size-8 items-center justify-center drop-shadow-[0_2px_4px_#1b1c1d0a]',
  },
  variants: {
    size: {
      '80': {
        root: 'size-20 text-title-h5',
      },
      '72': {
        root: 'size-[72px] text-title-h5',
      },
      '64': {
        root: 'size-16 text-title-h5',
      },
      '56': {
        root: 'size-14 text-label-lg',
      },
      '48': {
        root: 'size-12 text-label-lg',
      },
      '40': {
        root: 'size-10 text-label-md',
      },
      '32': {
        root: 'size-8 text-label-sm',
      },
      '24': {
        root: 'size-6 text-label-xs',
      },
      '20': {
        root: 'size-5 text-label-xs',
      },
    },
    color: {
      gray: {
        root: 'bg-bg-soft-200 text-static-black',
      },
      yellow: {
        root: 'bg-yellow-200 text-yellow-950',
      },
      blue: {
        root: 'bg-blue-200 text-blue-950',
      },
      sky: {
        root: 'bg-sky-200 text-sky-950',
      },
      purple: {
        root: 'bg-purple-200 text-purple-950',
      },
      red: {
        root: 'bg-red-200 text-red-950',
      },
    },
  },
  compoundVariants: [
    {
      size: ['80', '72'],
      class: {
        indicator: '-right-2',
      },
    },
    {
      size: '64',
      class: {
        indicator: '-right-2 scale-[.875]',
      },
    },
    {
      size: '56',
      class: {
        indicator: '-right-1.5 scale-75',
      },
    },
    {
      size: '48',
      class: {
        indicator: '-right-1.5 scale-[.625]',
      },
    },
    {
      size: '40',
      class: {
        indicator: '-right-1.5 scale-[.5625]',
      },
    },
    {
      size: '32',
      class: {
        indicator: '-right-1.5 scale-50',
      },
    },
    {
      size: '24',
      class: {
        indicator: '-right-1 scale-[.375]',
      },
    },
    {
      size: '20',
      class: {
        indicator: '-right-1 scale-[.3125]',
      },
    },
  ],
  defaultVariants: {
    size: '80',
    color: 'gray',
  },
});

export const avatarStatusVariants = tv({
  base: 'box-content size-3 rounded-full border-4 border-bg-white-0',
  variants: {
    status: {
      online: 'bg-success-base',
      offline: 'bg-faded-base',
      busy: 'bg-error-base',
      away: 'bg-away-base',
    },
  },
  defaultVariants: {
    status: 'online',
  },
});
