'use client';

import * as React from 'react';
import * as SelectPrimitives from '@radix-ui/react-select';
import * as ScrollAreaPrimitives from '@radix-ui/react-scroll-area';
import { RiCheckLine } from '@remixicon/react';
import { cn } from '../../utils/cn';
import type { PolymorphicComponentProps } from '../../utils/polymorphic';
import { selectVariants } from './select-variants';
import { useSelectContext } from './select-context';

export const SelectContent = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.Content>
>(
  (
    {
      className,
      position = 'popper',
      children,
      sideOffset = 8,
      collisionPadding = 8,
      ...rest
    },
    forwardedRef,
  ) => (
    <SelectPrimitives.Portal>
      <SelectPrimitives.Content
        ref={forwardedRef}
        className={cn(
          'relative z-50 overflow-hidden rounded-2xl bg-bg-white-0 shadow-regular-md ring-1 ring-inset ring-stroke-soft-200',
          'min-w-[--radix-select-trigger-width] max-w-[max(var(--radix-select-trigger-width),320px)]',
          'max-h-[--radix-select-content-available-height]',
          'data-[state=open]:animate-in data-[state=open]:fade-in-0',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
          'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
          className,
        )}
        sideOffset={sideOffset}
        position={position}
        collisionPadding={collisionPadding}
        {...rest}
      >
        <ScrollAreaPrimitives.Root type="auto">
          <SelectPrimitives.Viewport asChild>
            <ScrollAreaPrimitives.Viewport
              style={{ overflowY: undefined }}
              className="max-h-[196px] w-full scroll-py-2 overflow-auto p-2"
            >
              {children}
            </ScrollAreaPrimitives.Viewport>
          </SelectPrimitives.Viewport>
          <ScrollAreaPrimitives.Scrollbar orientation="vertical">
            <ScrollAreaPrimitives.Thumb className="!w-1 rounded bg-bg-soft-200" />
          </ScrollAreaPrimitives.Scrollbar>
        </ScrollAreaPrimitives.Root>
      </SelectPrimitives.Content>
    </SelectPrimitives.Portal>
  ),
);

SelectContent.displayName = 'SelectContent';

export const SelectItem = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.Item>
>(({ className, children, ...rest }, forwardedRef) => {
  const { size } = useSelectContext();
  const itemText =
    typeof children === 'string' ? (
      <span className="line-clamp-1">{children}</span>
    ) : (
      children
    );

  return (
    <SelectPrimitives.Item
      ref={forwardedRef}
      className={cn(
        'group relative cursor-pointer select-none rounded-lg p-2 pr-9 text-paragraph-sm text-text-strong-950',
        'flex items-center gap-2 transition duration-200 ease-out',
        'data-[disabled]:pointer-events-none data-[disabled]:text-text-disabled-300',
        'data-[highlighted]:bg-bg-weak-50 data-[highlighted]:outline-0',
        {
          'gap-1.5 pr-[34px]': size === 'xsmall',
        },
        className,
      )}
      {...rest}
    >
      <SelectPrimitives.ItemText asChild>
        <span
          className={cn(
            'flex flex-1 items-center gap-2',
            'group-disabled:text-text-disabled-300',
            {
              'gap-1.5': size === 'xsmall',
            },
          )}
        >
          {itemText}
        </span>
      </SelectPrimitives.ItemText>
      <SelectPrimitives.ItemIndicator asChild>
        <RiCheckLine className="absolute right-2 top-1/2 size-5 shrink-0 -translate-y-1/2 text-text-sub-600" />
      </SelectPrimitives.ItemIndicator>
    </SelectPrimitives.Item>
  );
});

SelectItem.displayName = 'SelectItem';

export function SelectItemIcon<T extends React.ElementType>({
  as,
  className,
  ...rest
}: PolymorphicComponentProps<T>) {
  const { size, variant } = useSelectContext();
  const { selectItemIcon } = selectVariants({ size, variant });

  const Component = as || 'div';

  return <Component className={selectItemIcon({ class: className })} {...rest} />;
}
