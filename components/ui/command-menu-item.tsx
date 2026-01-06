// AlignUI CommandMenu v0.0.0

'use client';

import * as React from 'react';
import { Command } from 'cmdk';
import { cn } from '../../utils/cn';
import { tv, type VariantProps } from '../../utils/tv';
import { PolymorphicComponentProps } from '../../utils/polymorphic';

const commandItemVariants = tv({
  base: [
    'flex items-center gap-3 rounded-10 bg-bg-white-0',
    'cursor-pointer text-paragraph-sm text-text-strong-950',
    'transition duration-200 ease-out',
    'data-[selected=true]:bg-bg-weak-50',
  ],
  variants: {
    size: {
      small: 'px-3 py-2.5',
      medium: 'px-3 py-3',
    },
  },
  defaultVariants: {
    size: 'small',
  },
});

type CommandItemProps = VariantProps<typeof commandItemVariants> &
  React.ComponentPropsWithoutRef<typeof Command.Item>;

export const CommandItem = React.forwardRef<
  React.ComponentRef<typeof Command.Item>,
  CommandItemProps
>(({ className, size, ...rest }, forwardedRef) => {
  return (
    <Command.Item
      ref={forwardedRef}
      className={commandItemVariants({ size, class: className })}
      {...rest}
    />
  );
});
CommandItem.displayName = 'CommandItem';

export function CommandItemIcon<T extends React.ElementType>({
  className,
  as,
  ...rest
}: PolymorphicComponentProps<T>) {
  const Component = as || 'div';

  return (
    <Component
      className={cn('size-5 shrink-0 text-text-sub-600', className)}
      {...rest}
    />
  );
}

export function CommandFooter({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex h-12 items-center justify-between gap-3 px-5',
        className,
      )}
      {...rest}
    />
  );
}

export function CommandFooterKeyBox({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex size-5 shrink-0 items-center justify-center rounded bg-bg-weak-50 text-text-sub-600 ring-1 ring-inset ring-stroke-soft-200',
        className,
      )}
      {...rest}
    />
  );
}
