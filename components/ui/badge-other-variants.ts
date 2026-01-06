export const badgeOtherVariants = [
  {
    size: 'small',
    square: true,
    class: {
      root: 'min-w-4 px-1',
    },
  },
  {
    size: 'medium',
    square: true,
    class: {
      root: 'min-w-5 px-1',
    },
  },
  {
    disabled: true,
    variant: ['stroke', 'filled', 'light', 'lighter'],
    color: [
      'red',
      'gray',
      'blue',
      'orange',
      'green',
      'yellow',
      'purple',
      'sky',
      'pink',
      'teal',
    ],
    class: {
      root: [
        'ring-1 ring-inset ring-stroke-soft-200',
        'bg-transparent text-text-disabled-300',
      ],
    },
  },
];
