import { tv } from '../../utils/tv';
import { alertCompoundVariants } from './alert-variant-classes';

export const alertVariants = tv({
  slots: {
    root: 'w-full',
    wrapper: [
      'grid w-full auto-cols-auto grid-flow-col grid-cols-1 items-start has-[>svg:first-child]:grid-cols-[auto,minmax(0,1fr)]',
      'transition duration-200 ease-out group-data-[expanded=false]/toast:group-data-[front=false]/toast:opacity-0',
    ],
    icon: 'shrink-0',
    closeIcon: '',
  },
  variants: {
    variant: {
      filled: {
        root: 'text-static-white',
        closeIcon: 'text-static-white opacity-[.72]',
      },
      light: {
        root: 'text-text-strong-950',
        closeIcon: 'text-text-strong-950 opacity-40',
      },
      lighter: {
        root: 'text-text-strong-950',
        closeIcon: 'text-text-strong-950 opacity-40',
      },
      stroke: {
        root: 'bg-bg-white-0 text-text-strong-950 shadow-regular-md ring-1 ring-inset ring-stroke-soft-200',
        closeIcon: 'text-text-strong-950 opacity-40',
      },
    },
    status: {
      error: {},
      warning: {},
      success: {},
      information: {},
      feature: {},
    },
    size: {
      xsmall: {
        root: 'rounded-lg p-2 text-paragraph-xs',
        wrapper: 'gap-2',
        icon: 'size-4',
        closeIcon: 'size-4',
      },
      small: {
        root: 'rounded-lg px-2.5 py-2 text-paragraph-sm',
        wrapper: 'gap-2',
        icon: 'size-5',
        closeIcon: 'size-5',
      },
      large: {
        root: 'rounded-xl p-3.5 pb-4 text-paragraph-sm',
        wrapper: 'items-start gap-3',
        icon: 'size-5',
        closeIcon: 'size-5',
      },
    },
  },
  compoundVariants: alertCompoundVariants,
  defaultVariants: {
    size: 'small',
    variant: 'filled',
    status: 'information',
  },
});
