import { tv } from '../../utils/tv';
import { badgeFilledVariants } from './badge-filled-variants';
import { badgeLightVariants } from './badge-light-variants';
import { badgeLighterVariants } from './badge-lighter-variants';
import { badgeStrokeVariants } from './badge-stroke-variants';
import { badgeOtherVariants } from './badge-other-variants';

export const badgeVariants = tv({
  slots: {
    root: 'inline-flex items-center justify-center rounded-full leading-none transition duration-200 ease-out',
    icon: 'shrink-0',
    dot: [
      'dot',
      'flex items-center justify-center',
      'before:size-1 before:rounded-full before:bg-current',
    ],
  },
  variants: {
    size: {
      small: {
        root: 'h-4 gap-1.5 px-2 text-subheading-2xs uppercase has-[>.dot]:gap-2',
        icon: '-mx-1 size-3',
        dot: '-mx-2 size-4',
      },
      medium: {
        root: 'h-5 gap-1.5 px-2 text-label-xs',
        icon: '-mx-1 size-4',
        dot: '-mx-1.5 size-4',
      },
    },
    variant: {
      filled: {
        root: 'text-static-white',
      },
      light: {},
      lighter: {},
      stroke: {
        root: 'ring-1 ring-inset ring-current',
      },
    },
    color: {
      gray: {},
      blue: {},
      orange: {},
      red: {},
      green: {},
      yellow: {},
      purple: {},
      sky: {},
      pink: {},
      teal: {},
    },
    disabled: {
      true: {
        root: 'pointer-events-none',
      },
    },
    square: {
      true: {},
    },
  },
  compoundVariants: [
    ...badgeFilledVariants,
    ...badgeLightVariants,
    ...badgeLighterVariants,
    ...badgeStrokeVariants,
    ...badgeOtherVariants,
  ],
  defaultVariants: {
    variant: 'filled',
    size: 'small',
    color: 'gray',
  },
});
