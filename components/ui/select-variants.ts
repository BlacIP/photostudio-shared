import { tv } from '../../utils/tv';

export const selectVariants = tv({
  slots: {
    triggerRoot: [
      'group/trigger min-w-0 shrink-0 bg-bg-white-0 shadow-regular-xs outline-none ring-1 ring-inset ring-stroke-soft-200',
      'text-paragraph-sm text-text-strong-950',
      'flex items-center text-left',
      'transition duration-200 ease-out',
      'hover:bg-bg-weak-50 hover:ring-transparent',
      'focus:shadow-button-important-focus focus:outline-none focus:ring-stroke-strong-950',
      'focus:text-text-strong-950 data-[placeholder]:focus:text-text-strong-950',
      'disabled:pointer-events-none disabled:bg-bg-weak-50 disabled:text-text-disabled-300 disabled:shadow-none disabled:ring-transparent data-[placeholder]:disabled:text-text-disabled-300',
      'data-[placeholder]:text-text-sub-600',
    ],
    triggerArrow: [
      'ml-auto size-5 shrink-0',
      'transition duration-200 ease-out',
      'group-data-[placeholder]/trigger:text-text-soft-400',
      'text-text-sub-600',
      'group-hover/trigger:text-text-sub-600 group-data-[placeholder]/trigger:group-hover:text-text-sub-600',
      'group-focus/trigger:text-text-strong-950 group-data-[placeholder]/trigger:group-focus/trigger:text-text-strong-950',
      'group-disabled/trigger:text-text-disabled-300 group-data-[placeholder]/trigger:group-disabled/trigger:text-text-disabled-300',
      'group-data-[state=open]/trigger:rotate-180',
    ],
    triggerIcon: [
      'h-5 w-auto min-w-0 shrink-0 object-contain text-text-sub-600',
      'transition duration-200 ease-out',
      'group-data-[placeholder]/trigger:text-text-soft-400',
      'group-hover/trigger:text-text-sub-600 group-data-[placeholder]/trigger:group-hover:text-text-sub-600',
      'group-disabled/trigger:text-text-disabled-300 group-data-[placeholder]/trigger:group-disabled/trigger:text-text-disabled-300',
      'group-disabled/trigger:[&:not(.remixicon)]:opacity-[.48]',
    ],
    selectItemIcon: [
      'size-5 shrink-0 bg-[length:1.25rem] text-text-sub-600',
      '[[data-disabled]_&:not(.remixicon)]:opacity-[.48] [[data-disabled]_&]:text-text-disabled-300',
    ],
  },
  variants: {
    size: {
      medium: {},
      small: {},
      xsmall: {},
    },
    variant: {
      default: {
        triggerRoot: 'w-full',
      },
      compact: {
        triggerRoot: 'w-auto',
      },
      compactForInput: {
        triggerRoot: [
          'w-auto rounded-none shadow-none ring-0',
          'focus:bg-bg-weak-50 focus:shadow-none focus:ring-0 focus:ring-transparent',
        ],
      },
      inline: {
        triggerRoot: [
          'h-5 min-h-5 w-auto gap-0 rounded-none bg-transparent p-0 text-text-sub-600 shadow-none ring-0',
          'hover:bg-transparent hover:text-text-strong-950',
          'focus:shadow-none',
          'data-[state=open]:text-text-strong-950',
        ],
        triggerIcon: [
          'mr-1.5 text-text-soft-400',
          'group-hover/trigger:text-text-sub-600',
          'group-data-[state=open]/trigger:text-text-sub-600',
        ],
        triggerArrow: [
          'ml-0.5',
          'group-hover/trigger:text-text-strong-950',
          'group-data-[state=open]/trigger:text-text-strong-950',
        ],
        selectItemIcon: 'text-text-soft-400 group-hover/trigger:text-text-sub-600',
      },
    },
    hasError: {
      true: {
        triggerRoot: [
          'ring-error-base',
          'focus:shadow-button-error-focus focus:ring-error-base',
        ],
      },
    },
  },
  compoundVariants: [
    {
      size: 'medium',
      variant: 'default',
      class: {
        triggerRoot: 'h-10 min-h-10 gap-2 rounded-10 pl-3 pr-2.5',
      },
    },
    {
      size: 'small',
      variant: 'default',
      class: {
        triggerRoot: 'h-9 min-h-9 gap-2 rounded-lg pl-2.5 pr-2',
      },
    },
    {
      size: 'xsmall',
      variant: 'default',
      class: {
        triggerRoot: 'h-8 min-h-8 gap-1.5 rounded-lg pl-2 pr-1.5',
      },
    },
    {
      size: 'medium',
      variant: 'compact',
      class: {
        triggerRoot: 'h-10 gap-1 rounded-10 pl-3 pr-2.5',
        triggerIcon: '-ml-0.5',
        selectItemIcon: 'group-has-[&]/trigger:-ml-0.5',
      },
    },
    {
      size: 'small',
      variant: 'compact',
      class: {
        triggerRoot: 'h-9 gap-1 rounded-lg pl-3 pr-2',
        triggerIcon: '-ml-0.5',
        selectItemIcon: 'group-has-[&]/trigger:-ml-0.5',
      },
    },
    {
      size: 'xsmall',
      variant: 'compact',
      class: {
        triggerRoot: 'h-8 gap-0.5 rounded-lg pl-2.5 pr-1.5',
        triggerIcon: '-ml-0.5 size-4',
        selectItemIcon: 'size-4 bg-[length:1rem] group-has-[&]/trigger:-ml-0.5',
      },
    },
    {
      size: 'medium',
      variant: 'compactForInput',
      class: {
        triggerRoot: 'pl-2.5 pr-2',
        triggerIcon: 'mr-2',
        triggerArrow: 'ml-0.5',
      },
    },
    {
      size: 'small',
      variant: 'compactForInput',
      class: {
        triggerRoot: 'px-2',
        triggerIcon: 'mr-2',
        triggerArrow: 'ml-0.5',
      },
    },
    {
      size: 'xsmall',
      variant: 'compactForInput',
      class: {
        triggerRoot: 'pl-2 pr-1.5',
        triggerIcon: 'mr-1.5 size-4',
        triggerArrow: 'ml-0.5',
        selectItemIcon: 'size-4 bg-[length:1rem]',
      },
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'medium',
  },
});
